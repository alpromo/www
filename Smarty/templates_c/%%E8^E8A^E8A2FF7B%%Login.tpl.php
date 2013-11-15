<?php /* Smarty version 2.6.18, created on 2013-11-14 12:16:18
         compiled from Login.tpl */ ?>
<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "LoginHeader.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>

<table class="loginWrapper" width="100%" height="100%" cellpadding="20" cellspacing="0" border="0">
	<tr valign="top">
		<td valign="top" align="center" width="50%">
			<img align="absmiddle" src="test/logo/<?php echo $this->_tpl_vars['COMPANY_DETAILS']['logo']; ?>
" alt="logo"/>
			<br />
			<a target="_blank" href="http://<?php echo $this->_tpl_vars['COMPANY_DETAILS']['website']; ?>
"><?php echo $this->_tpl_vars['COMPANY_DETAILS']['name']; ?>
</a>
		</td>
	</tr>
	<tr align="center" valign="top">

		<td>
			<div class="loginForm">
				<form action="index.php" method="post" name="DetailView" id="form">
					<input type="hidden" name="module" value="Users" />
					<input type="hidden" name="action" value="Authenticate" />
					<input type="hidden" name="return_module" value="Users" />
					<input type="hidden" name="return_action" value="Login" />
					<div class="inputs">
						<div class="label"><?php echo $this->_tpl_vars['APP']['LBL_USER_NAME']; ?>
</div>
						<div class="input"><input type="text" name="user_name"/></div>
						<br />
						<div class="label"><?php echo $this->_tpl_vars['APP']['LBL_PASSWORD']; ?>
</div>
						<div class="input"><input type="password" name="user_password"/></div>
						<?php if ($this->_tpl_vars['LOGIN_ERROR'] != ''): ?>
						<div class="errorMessage">
							<?php echo $this->_tpl_vars['LOGIN_ERROR']; ?>

						</div>
						<?php endif; ?>
						<br />
						<div class="button">
							<input type="submit" id="submitButton" value="<?php echo $this->_tpl_vars['APP']['LBL_LOGIN']; ?>
" />
						</div>
					</div>
				</form>
			</div>
			<div class="importantLinks">
			&copy; <?php  echo date('Y');  ?>
			</div>
		</td>
	</tr>
	<tr valign="bottom">
		<td class="communityLinks">

			<br />

		</td>
	</tr>
</table>

<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "LoginFooter.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>