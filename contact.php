<?php
$name = $_POST['name']
$email = $_POST['email']
$message = $_POST['message']

  $db_host = 'localhost';
  $db_user = 'root';
  $db_password = '';
  $db_db = 'personal_website_db';
  $db_port = 8889;

  $mysqli = new mysqli(
    $db_host,
    $db_user,
    $db_password,
    $db_db
  );
	
  if ($mysqli->connect_error) {
    echo 'Errno: '.$mysqli->connect_errno;
    echo '<br>';
    echo 'Error: '.$mysqli->connect_error;
    exit();
  }

  

  $mysqli->close();
?>