<?php
    $host = 'localhost';
    $user = 'root';
    $password = '';
    $db_name = 'mendoza_finals';

    $conn = mysqli_connect($host , $user , $password , $db_name);

    if($conn->connect_error){
        die("Failed to connect with MySQL: ". $conn->connect_error);
    }
?>