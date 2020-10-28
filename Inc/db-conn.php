<?php

    $host = "localhost";
    $user = "root";
    $pass = "";
    $database = "scoreboard";

    $conn = mysqli_connect($host, $user, $pass, $database);
    // return the database connection
    return $conn;
?>