<?php
$captcha;
$field_name = $_POST['name'];
$field_email = $_POST['email'];
$field_message = $_POST['message'];

$mail_to = 'pres.yes@gmail.com';
$subject = 'Message from '.$field_name;

$body_message = 'From: '.$field_name."\n";
$body_message .= 'E-mail: '.$field_email."\n";
$body_message .= 'Message: '.$field_message;

$headers = 'From: '.$field_email."\r\n";
$headers .= 'Reply-To: '.$field_email."\r\n";

if ($field_name!=""&&$field_email!=""&& $field_message!=""){
     $mail_status = mail($mail_to, $subject, $body_message, $headers);
   ?>
	<script language="javascript" type="text/javascript">
		alert('Thank you. We will contact you soon.');
		window.location = 'index.html';
	</script>
   
<?php
}

else {
     ?>
	<script language="javascript" type="text/javascript">
		alert('Please fill in all fields or send an email to pres.yes@gmail.com');
		window.location = 'index.html';
	</script>
<?php 
}



?>