<?php
/*+**********************************************************************************
 * The Original Code is: SalesPlatform Ltd
 * The Initial Developer of the Original Code is SalesPlatform Ltd.
 * All Rights Reserved.
 * If you have any questions or comments, please email: devel@salesplatform.ru
 ************************************************************************************/

require_once 'modules/SPCMLConnector/WebserviceExchange.php';
require_once 'modules/SPCMLConnector/CommerceMLlib.php';

/**
 * Class determines commerce operation details and runs commerce operation
 */
class OperationController {
    private $commerceData;
    private $operation;
    private $commerceObject;
    
    /**
     * Initilizate commerce info in xml format.
     * @param string $commerceData
     */
    public function __construct($commerceData) {
          $this->commerceData=$commerceData;
    }
    
    /**
     * Updates information on products, services and catalog.
     */
    private function updateCatalog() {  //can be optimizated
        
        foreach($this->commerceObject as $documentCatalog) {
            //create catalog if not exists
            $record = new WebserviceExchange();
            $catalog = $record->saveData($documentCatalog->getVtigerCatalog(), "PriceBooks");
            $catalogId= substr($catalog['id'],strpos($catalog['id'],'x')+1);
            
            $products = $documentCatalog->getProducts();
            foreach ($products as $comProduct) {
                $product = $comProduct->getVtigerDescription();
                
                $module="";
                if($product['type']=="product") {
                    $module="Products"; 
                } else {
                    $module="Services";
                }
                $savedProduct = $record->saveData($product, $module);
    
                $productId = substr($savedProduct['id'],strpos($savedProduct['id'],'x')+1);
                
                //set taxes to product
                if($comProduct->isNDS()) {
                    $record->setTaxToProduct($productId);
                } else {
                    $record->deleteTaxFromProduct($productId);
                }
                
                if($product['currency_code']!=null) {       //if not price in package
                    
                    $currencyID = $record->getCurrencyId($product['currency_code'], $product['conversion_rate']);
                    
                    //set currency to product 
                    $record->setCurrencyToProduct($productId, $currencyID);
                }
                
                //adding product to catalog
                $record->addToVtigerCatalog($catalogId,$productId, $savedProduct['unit_price'],$currencyID);          
            }
        }
    }
    
    /**
     * Updates information from the vtiger SalesOrder
     */
    private function updateSalesOrder() {
        
        //updtes services and gets products id,qty and service id to create sales order 
        foreach($this->commerceObject as $document) {
            $account = $this->getAccount($document);
            $products = $this->getProducts($document);  
            
            //adding mandatory fields

            $vtigerDescription['1c_id'] = $document->getDocumentId();
            $vtigerDescription['subject'] = $document->getPropValueByName("Номер по 1С");  
            if($document->getPropValueByName("ПометкаУдаления")=="true") {
                $vtigerDescription['sostatus'] = "Отменен"; 
                $vtigerDescription['invoicestatus'] = $document->getPropValueByName("Проведен");
            } elseif($document->getPropValueByName("Номер оплаты по 1С")!=null) {
                $vtigerDescription['sostatus'] = "Доставлен";  
                $vtigerDescription['invoicestatus'] = "Оплачен";
            } else {
                $vtigerDescription['sostatus'] = $document->getPropValueByName("Проведен");
                $vtigerDescription['invoicestatus'] = $document->getPropValueByName("Проведен");
            }
            
            
            $order = new CommerceSalesOrder($vtigerDescription);
            $order->buildOrder($account, $products); 
            $record = new WebserviceExchange();
            $currencyId = $record->getCurrencyId($document->getCurrency(), null);
               
            $order->setInventoryCurrency($currencyId);
            
            $record->saveData($order->getVtigerDescription(),"SalesOrder");
        }
        
    }
    
    /**
     * Creates or updates account and return it reference id
     * @param string $document
     * @return reference
     */
    private function getAccount($document) {
        $record = new WebserviceExchange();
        $account = $record->retrieveRecord($document->getVtAccounts(), "Accounts");
        return $account;
    }
    
    /**
     Creates or updates product and return it id and count to SalesOrder
     * @param string $document
     * @return array
     */
    private function getProducts($document) {
        $inventory=array();
        $record = new WebserviceExchange();
        $prod="";
        foreach($document->getVtProducts() as $product) { 
            if($product['type']=="product") {
                $prod=$record->retrieveRecord($product, "Products");
            } else {
                $prod=$record->retrieveRecord($product, "Services");
            }
            $prod['id']=substr($prod['id'], strpos($prod['id'],"x")+1);
            $prod['qty'] = round($product['qty']);                          //rest an idiot
            array_push($inventory, $prod); 
        }
        return $inventory;
    }
    
    private function generateXmlSalesOrder($orders) {
        $timechange = time();
        $commHeader = '<?xml version="1.0" encoding="UTF-8"?>
                            <КоммерческаяИнформация ВерсияСхемы="2.04" 
                            ДатаФормирования="'.date( 'Y-m-d', $timechange) .'T'.date( 'H:m:s',$timechange).'">
                            </КоммерческаяИнформация>';
        
        $xml = new SimpleXMLElement($commHeader);
        foreach($orders as $order) {
            
            //overall description
            $document = $xml->addChild("Документ");
            if($order['1c_id']!=null){
                $document->addChild("Ид", $order['1c_id']);
            } else {
                $document->addChild("Ид", $order['salesorder_no']);
            }    
            $document->addChild("Номер",$order['salesorder_no']);
            $document->addChild("Дата", strstr($order['createdtime']," ", true));
            $document->addChild("ХозОперация", "Заказ товара");
            $document->addChild("Роль", "Продавец");
            $document->addChild("Валюта", $order['inventories']['Global']['inventory_currency']);
            $document->addChild("Время", substr($order['createdtime'], strpos($order['createdtime']," ")+1));
            //adding account
            $accounts = $document->addChild("Контрагенты");
            
            $account = $accounts->addChild("Контрагент");
            $account->addChild("Ид",$order['account_id']['1c_id']);
            $account->addChild("Наименование",$order['account_id']['accountname']);
            $account->addChild("ПолноеНаименование",$order['account_id']['accountname']);       //ident field
            $account->addChild("Роль","Покупатель");
            
            $address = $account->addChild("АдресРегистрации");
            $address->addChild("Представление", $order['account_id']['bill_street']);

            //adding products
            $products = $document->addChild("Товары");
            foreach($order['inventories']['Products'] as $proposal) {
                $product = $products->addChild("Товар");
                    
                //initilizate product
                
                $product->addChild("ЦенаЗаЕдиницу",$proposal['unit_price']);
                $product->addChild("Количество",$proposal['qty']);
                $product->addChild("Сумма",$proposal['qty']*$proposal['unit_price']);
                if($proposal['hdnProductId']=="product") {
                    $product->addChild("Ид",$proposal['1c_id']);
                    $product->addChild("Наименование",$proposal['productname']);
                    $product->addChild("БазоваяЕдиница",$proposal['usageunit']);  
                    $product->addChild("Единица",$proposal['usageunit']);
                        
                    //initilizate props
                    $props = $product->addChild("ЗначенияРеквизитов");
                    $prop = $props->addChild("ЗначениеРеквизита");
                    $prop->addChild("Наименование","ВидНоменклатуры");
                    $prop->addChild("Значение","Товар");
                    $prop = $props->addChild("ЗначениеРеквизита");
                    $prop->addChild("Наименование","ТипНоменклатуры");
                    $prop->addChild("Значение","Товар");
                      
                } else {
                    $product->addChild("Ид",$proposal['1c_id']);
                    $product->addChild("Наименование",$proposal['servicename']);
                    $product->addChild("БазоваяЕдиница",$proposal['service_usageunit']);
                    $product->addChild("Единица",$proposal['service_usageunit']);
                        
                    //initilizate props
                    $props = $product->addChild("ЗначенияРеквизитов");
                    $prop = $props->addChild("ЗначениеРеквизита");
                    $prop->addChild("Наименование","ВидНоменклатуры");
                    $prop->addChild("Значение","Услуга");
                    $prop = $props->addChild("ЗначениеРеквизита");
                    $prop->addChild("Наименование","ТипНоменклатуры");
                    $prop->addChild("Значение","Услуга");
                }
            }
               
            //add document props - status needed
            $documentProps = $document->addChild("ЗначенияРеквизитов");
            
            $documentProp = $documentProps->addChild("ЗначениеРеквизита");
            $documentProp->addChild("Наименование","НомерНаСайте");
            $documentProp->addChild("Значение",$order['salesorder_no']);
            
            $documentProp = $documentProps->addChild("ЗначениеРеквизита");
            $documentProp->addChild("Наименование","ДатаНаСайте");
            $documentProp->addChild("Значение",strstr($order['createdtime']," ", true));
            
            $documentProp = $documentProps->addChild("ЗначениеРеквизита");
            $documentProp->addChild("Наименование","Статус заказа");
            $documentProp->addChild("Значение",$order['sostatus']);      
        }
        return $xml->asXML();
    }
    
    /**
     * Run commerce operation
     * @return void
     */
    public function executeOperation() {
        $parser = new CommerceMLParser($this->commerceData[0]);
        $this->operation = $parser->getCommerceOperation();
        
        if($this->operation == "catalogOperation") {
            $catalogs = $parser->runCommerceOperation();     //get catalog
            $parser=new CommerceMLParser($this->commerceData[1]);          //get package (it will be modified)
            $packages = $parser->runCommerceOperation();
            
            foreach($catalogs as $number => $catalog) {
                $catalog->updateProducts($packages[$number]);       //update info from package in each catalog
            }
            
            $this->commerceObject=$catalogs;
            $this->updateCatalog();
            return;
        }
        
        if($this->operation == "salesOrderOperation") {
            $document = $parser->runCommerceOperation();
            $this->commerceObject=$document;
            $this->updateSalesOrder();
            return;
        }
        
        error_log("Unknown commerce operation!");
        return;
    }
    
    /**
     * Create full array description of each salesOrdes
     * Include full information from accounts,products and services
     * @return string
     */
    public function formSalesXml() {                
        $fullOrdersDescription=array();
        $record = new WebserviceExchange();
        $ordersId = $record->query("select id from SalesOrder;");
        foreach($ordersId as $id) {
            $order = $record->retrieve($id['id']);
            if(strtotime($order['modifiedtime']) < strtotime( $this->getLastSalesTranzactionTime())) {       //if order dont modified
                continue;
            }
            $accountId = $order['account_id'];
            //need to get full data from the account
            $accountSelect = $record->query("select * from Accounts where id=$accountId;");
            $order['account_id'] = $accountSelect[0];          
            
            //need to get full data from services and products
            foreach($order['inventories']['Products'] as $number => $product) {
                $id=$product['hdnProductId'];
                $request = $record->query("select * from Products where id=x$id;");           //idiot webservice
                if($request!=null) {                                                            //it was a product
                    $product['hdnProductId']="product";
                    $product = array_merge($product,$request[0]);     
                } else {                                                                        //it was a service
                    $request = $record->query("select * from Services where id=x$id;");
                    $product['hdnProductId']="service";
                    $product = array_merge($product,$request[0]);
                }
                $order['inventories']['Products'][$number]=$product;
            }
            
            //get code of currency
            $currencyId = $order['inventories']['Global']['inventory_currency'];
            $currency = $record->query("select currency_code from Currency where id=$currencyId;");
            $order['inventories']['Global']['inventory_currency'] = $currency[0]['currency_code'];

            array_push($fullOrdersDescription, $order);
        }
        
        //generates mxl description of the orders
        $commerceData = $this->generateXmlSalesOrder($fullOrdersDescription);
        
        return $commerceData;
    }
    
    public function fixTranzaction($type,$direction,$status) {
        global $adb;
        $params = array(date("Y-m-d H:i:s"),$type,$status,$direction);
        $adb->pquery("insert into sp_commercetranzaction 
            (`date`, `type`, `status`, `direction`)
            VALUES (?, ?, ?, ?);", $params);
    }
    
    private function getLastSalesTranzactionTime() {
        global $adb;
        $params = array();
        $result = $adb->pquery("select MAX(date) from sp_commercetranzaction where 
            type='SalesOrder';",$params);
        $value = $adb->fetchByAssoc($result);
        if($value['max(date)'] == null) {
            return date("Y-m-d H:i:s", 0);   
        }
        return $value['max(date)'];
    }
    
    public function setTranzactionError($type,$direction,$status,$error) {
        global $adb;
        $params = array(date("Y-m-d H:i:s"),$type,$status,$direction,$error);
        $adb->pquery("insert into sp_commercetranzaction 
            (`date`, `type`, `status`, `direction`,`error`)
            VALUES (?, ?, ?, ?,?);", $params);
    }
}

?>
