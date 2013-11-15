<?php
/*+**********************************************************************************
 * The contents of this file are subject to the vtiger CRM Public License Version 1.0
 * ("License"); You may not use this file except in compliance with the License
 * The Original Code is:  SalesPlatform vtiger CRM Open Source
 * The Initial Developer of the Original Code is SalesPlatform.
 * Portions created by SalesPlatform are Copyright (C) SalesPlatform.
 * All Rights Reserved.
 ************************************************************************************/

include_once 'include/SalesPlatform/PDF/SPPDFController.php';

class SalesPlatform_PaymentsPDFController extends SalesPlatform_PDF_SPPDFController {

	function buildDocumentModel() {
	
		$model = parent::buildDocumentModel();
	
		$this->generateEntityModel($this->focus, 'SPPayments', 'payment_', $model);

                $this->generateUi10Models($model);
                $this->generateRelatedListModels($model);

                $model->set('payment_owner', getUserFullName($this->focusColumnValue('assigned_user_id')));
                $model->set('payment_payer', getParentName($this->focusColumnValue('payer')));
                return $model;
	}

}
?>
