<?php
//Windows - pass = ""
//MAC - pass = "root"
function OpenCon()
{
    $dbhost = "localhost";
    $dbuser = "root";
    $dbpass = "root";
    $db = "postTeste";
    $conn = new mysqli($dbhost, $dbuser, $dbpass, $db);

    return $conn;
}

function CloseCon($conn)
{
    $conn->close();
}

// Verificar se a conexão correu bem...
if (mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}