{*<!--
/*+********************************************************************************
  * The contents of this file are subject to the vtiger CRM Public License Version 1.0
  * ("License"); You may not use this file except in compliance with the License
  * The Original Code is:  vtiger CRM Open Source
  * The Initial Developer of the Original Code is vtiger.
  * Portions created by vtiger are Copyright (C) vtiger.
  * All Rights Reserved.
  *********************************************************************************/
-->*}
{include file="LoginHeader.tpl}

<table class="loginWrapper" width="100%" height="100%" cellpadding="20" cellspacing="0" border="0">
	<tr valign="top">
		<td valign="top" align="center" width="50%">
			<img align="absmiddle" src="test/logo/{$COMPANY_DETAILS.logo}" alt="logo"/>
			<br />
			<a target="_blank" href="http://{$COMPANY_DETAILS.website}">{$COMPANY_DETAILS.name}</a>
		</td>
{* SalesPlatform.ru begin : Center Login form *}
	</tr>
	<tr align="center" valign="top">

		<td>
{*		<td rowspan="2">*}
{* SalesPlatform.ru end *}
			<div class="loginForm">
				<form action="index.php" method="post" name="DetailView" id="form">
					<input type="hidden" name="module" value="Users" />
					<input type="hidden" name="action" value="Authenticate" />
					<input type="hidden" name="return_module" value="Users" />
					<input type="hidden" name="return_action" value="Login" />
					<div class="inputs">
{* SalesPlatform.ru begin *}
						<div class="label">{$APP.LBL_USER_NAME}</div>
{*						<div class="label">User Name</div> *}
{* SalesPlatform.ru end *}
						<div class="input"><input type="text" name="user_name"/></div>
						<br />
{* SalesPlatform.ru begin *}
						<div class="label">{$APP.LBL_PASSWORD}</div>
{*						<div class="label">Password</div> *}
{* SalesPlatform.ru end *}
						<div class="input"><input type="password" name="user_password"/></div>
						{if $LOGIN_ERROR neq ''}
						<div class="errorMessage">
							{$LOGIN_ERROR}
						</div>
						{/if}
						<br />
						<div class="button">
{* SalesPlatform.ru begin *}
							<input type="submit" id="submitButton" value="{$APP.LBL_LOGIN}" />
{*							<input type="submit" id="submitButton" value="Login" /> *}
{* SalesPlatform.ru end *}
						</div>
					</div>
				</form>
			</div>
			<div class="importantLinks">
			&copy; {php} echo date('Y'); {/php}
			</div>
		</td>
	</tr>
	<tr valign="bottom">
		<td class="communityLinks">

			<br />

		</td>
	</tr>
</table>

{include file="LoginFooter.tpl}