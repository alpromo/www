<?php
/*+**********************************************************************************
 * The contents of this file are subject to the vtiger CRM Public License Version 1.1
 * ("License"); You may not use this file except in compliance with the License
 * The Original Code is: SalesPlatform Ltd
 * The Initial Developer of the Original Code is SalesPlatform Ltd.
 * All Rights Reserved.
 * If you have any questions or comments, please email: devel@salesplatform.ru
 ************************************************************************************/
include_once 'include/Zend/Json.php';
require_once('data/CRMEntity.php');
require_once('data/Tracker.php');

class SPCMLConnector {
    /**
     * Invoked when special actions are performed on the module.
     * @param String Module name
     * @param String Event Type (module.postinstall, module.disabled, module.enabled, module.preuninstall)
     */
    function vtlib_handler($modulename, $event_type) {
        global $adb;
        
        //adding new fields into linked tables
        if($event_type == 'module.postinstall') {
            $module  = Vtiger_Module::getInstance('Accounts'); 
            $blockInstance = Vtiger_Block::getInstance('LBL_ACCOUNT_INFORMATION', $module);

            $fieldInstance1 = new Vtiger_Field();
            $fieldInstance1->label = '1c_id';
            $fieldInstance1->name = '1c_id';
            $fieldInstance1->table = 'vtiger_account';
            $fieldInstance1->column = '1c_id';
            $fieldInstance1->columntype = 'varchar';
            $fieldInstance1->uitype = 1;
            $fieldInstance1->displaytype = 3;
            $fieldInstance1->typeofdata = 'V~O';
            $blockInstance->addField($fieldInstance1);

            $sql = "ALTER TABLE `vtiger_account` ADD COLUMN `1c_id` VARCHAR(255) NULL ;";
            $params = array();
            $adb->pquery($sql, $params);


            /*********************************************************************************/

            $module  = Vtiger_Module::getInstance('PriceBooks'); 
            $blockInstance = Vtiger_Block::getInstance('LBL_PRICEBOOK_INFORMATION', $module);

            $fieldInstance1 = new Vtiger_Field();
            $fieldInstance1->label = '1c_id';
            $fieldInstance1->name = '1c_id';
            $fieldInstance1->table = 'vtiger_pricebook';
            $fieldInstance1->column = '1c_id';
            $fieldInstance1->columntype = 'varchar';
            $fieldInstance1->uitype = 1;
            $fieldInstance1->displaytype = 3;
            $fieldInstance1->typeofdata = 'V~O';
            $blockInstance->addField($fieldInstance1);

            $sql = "ALTER TABLE `vtiger_pricebook` ADD COLUMN `1c_id` VARCHAR(255) NULL ;";
            $params = array();
            $adb->pquery($sql, $params);

            /*********************************************************************************/

            $module  = Vtiger_Module::getInstance('Products'); 
            $blockInstance = Vtiger_Block::getInstance('LBL_PRODUCT_INFORMATION', $module);

            $fieldInstance1 = new Vtiger_Field();
            $fieldInstance1->label = '1c_id';
            $fieldInstance1->name = '1c_id';
            $fieldInstance1->table = 'vtiger_products';
            $fieldInstance1->column = '1c_id';
            $fieldInstance1->columntype = 'varchar';
            $fieldInstance1->uitype = 1;
            $fieldInstance1->displaytype = 3;
            $fieldInstance1->typeofdata = 'V~O';
            $blockInstance->addField($fieldInstance1);

            $sql = "ALTER TABLE `vtiger_products` ADD COLUMN `1c_id` VARCHAR(255) NULL ;";
            $params = array();
            $adb->pquery($sql, $params);

            /*********************************************************************************/

            $module  = Vtiger_Module::getInstance('SalesOrder'); 
            $blockInstance = Vtiger_Block::getInstance('LBL_SO_INFORMATION', $module);

            $fieldInstance1 = new Vtiger_Field();
            $fieldInstance1->label = '1c_id';
            $fieldInstance1->name = '1c_id';
            $fieldInstance1->table = 'vtiger_salesorder';
            $fieldInstance1->column = '1c_id';
            $fieldInstance1->columntype = 'varchar';
            $fieldInstance1->uitype = 1;
            $fieldInstance1->displaytype = 3;
            $fieldInstance1->typeofdata = 'V~O';
            $blockInstance->addField($fieldInstance1);

            $sql = "ALTER TABLE `vtiger_salesorder` ADD COLUMN `1c_id` VARCHAR(255) NULL ;";
            $params = array();
            $adb->pquery($sql, $params);

            /*********************************************************************************/

            $module  = Vtiger_Module::getInstance('Services'); 
            $blockInstance = Vtiger_Block::getInstance('LBL_SERVICE_INFORMATION', $module);

            $fieldInstance1 = new Vtiger_Field();
            $fieldInstance1->label = '1c_id';
            $fieldInstance1->name = '1c_id';
            $fieldInstance1->table = 'vtiger_service';
            $fieldInstance1->column = '1c_id';
            $fieldInstance1->columntype = 'varchar';
            $fieldInstance1->uitype = 1;
            $fieldInstance1->displaytype = 3;
            $fieldInstance1->typeofdata = 'V~O';
            $blockInstance->addField($fieldInstance1);

            $sql = "ALTER TABLE `vtiger_service` ADD COLUMN `1c_id` VARCHAR(255) NULL ;";
            $params = array();
            $adb->pquery($sql, $params);
        } else if($event_type == 'module.disabled') {
		// TODO Handle actions when this module is disabled.
        } else if($event_type == 'module.enabled') {
		// TODO Handle actions when this module is enabled.
	} else if($event_type == 'module.preuninstall') {
		// TODO Handle actions when this module is about to be deleted.
	} else if($event_type == 'module.preupdate') {
		// TODO Handle actions before this module is updated.
	} else if($event_type == 'module.postupdate') {
		// TODO Handle actions after this module is updated.
	}
        
    }
}

?>
