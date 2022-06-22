<?php 
function verificarLogin($username, $password)
{
    global $erroLogin;

    $username = trim($username);

    $conn = OpenCon();

    $sql_users = "SELECT * FROM users WHERE username = '" . $username . "'";
    $result_users = mysqli_query($conn, $sql_users);

    CloseCon($conn);

    // var_dump($result_users);

    if (mysqli_num_rows($result_users) > 0) {
        while ($row = mysqli_fetch_assoc($result_users)) {

            if ($row["username"] == trim($username) && password_verify($password, $row["password"])) {
                $_SESSION["username"] = $username;
                $_SESSION["nome"] = $row["nome"];
                $_SESSION["NIVEL_UTILIZADOR"] = $row["nivel_utilizador"];

                $_POST["sucesso"] = "sim";

                return;
            }
        }
    } else {
        $_POST["sucesso"] = "nao";
        $erroLogin = "Dados Incorretos";
    }

    return;
}
?>