<?php

// $servername = "sql210.infinityfree.com";
// $username = "if0_35597069";
// $password =  "e0mmoPoawW9";
// $dbname = "if0_35597069_company";


$servername = "localhost";
$username = "root";
$password = "";
$dbname = "company";


// Create connection

$conn = mysqli_connect($servername, $username, $password, $dbname);
mysqli_set_charset($conn, "utf8");
// Check connection

if (!$conn) {

    die("Connection failed: " . mysqli_connect_error());
}
