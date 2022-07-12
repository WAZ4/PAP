<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require '../assets/php/PHPMailer-master/src/Exception.php';
require '../assets/php/PHPMailer-master/src/PHPMailer.php';
require '../assets/php/PHPMailer-master/src/SMTP.php';

include("../conectarBd.php");
session_start();

$tipo = 0;
$hash = "";
$erro = "";
$sucesso = "";

if (isset($_SESSION["user_email"]) || isset($_SESSION["user_nome"]) || isset($_SESSION["NIVEL_UTILIZADOR"])) header("Location: ../index.php");

function enviarEmailRecuperar($email, $hash)
{
    global $sucesso;
    global $erro;
    //Create an instance; passing `true` enables exceptions
    $email = trim($email);

    $mail = new PHPMailer(true);



    try {
        //Server settings
        // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
        $mail->isSMTP();                                            //Send using SMTP
        $mail->Host       = 'smtp-pt.securemail.pro';                     //Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
        $mail->Username   = 'geral@oilcentral.pt';                     //SMTP username
        $mail->Password   = 'oleosforever254';                               //SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
        $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

        //Recipients
        $mail->setFrom('geral@oilcentral.pt', 'OilCentral');
        $mail->addAddress($email);
        // $mail->addAddress('ellen@example.com');               //Name is optional
        // $mail->addReplyTo('info@example.com', 'Information');
        // $mail->addCC('cc@example.com');
        // $mail->addBCC('bcc@example.com');

        //Attachments
        // $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
        // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

        //Content
        $mail->isHTML(true);                                  //Set email format to HTML
        $mail->Subject = 'Repor palavra-passe';

        // Open the file using the HTTP headers set above
        $file = file_get_contents('../email/recuperarPalavraPasse.html');

        // print_r($file);

        $file = str_replace('$hash', $hash, $file);

        $mail->Body = $file;
        // $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

        $mail->send();
        // echo 'Message has been sent';
        $sucesso = "Email de recuperação enviado com sucesso.";
    } catch (Exception $e) {
        $erro = "Falha ao enviar email, por-favor entre em contacto connosco.";
    }
}



if (isset($_POST["formSubmit"]) && $_POST["formSubmit"] == "alterarPassword") {
    if (($npassword1 = strip_tags(trim($_POST["novapassword1"]))) == ($npassword1 = strip_tags(trim($_POST["novapassword2"])))) {
        // var_dump(($npassword1 = strip_tags(trim($_POST["novapassword1"]))) == ($npassword1 = strip_tags(trim($_POST["novapassword2"]))));
        $passwd = password_hash($npassword1, PASSWORD_DEFAULT);
        $hash = $_POST["hash"];
        $sql = "UPDATE user SET user_password = ?, user_hash = '' WHERE user_hash = ?";
        $conn = OpenCon();
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ss", $passwd, $hash);
        $stmt->execute();
        $resultado_user = $stmt->get_result();
        CloseCon($conn);

        header("Location: ../login/");
    } else {
        $erro = "Passwords não coincidem.";
    }
}

if (isset($_POST["user_email"])) {

    $email = strip_tags(trim($_POST["user_email"]));

    $sql = "SELECT * FROM user WHERE user_email = ?";
    $conn = OpenCon();
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $resultado_user = $stmt->get_result();
    CloseCon($conn);

    if ($resultado_user->num_rows != 0 && $row = $resultado_user->fetch_assoc()["user_hash"] == "") {

        $hash = md5(uniqid(rand()));

        $sql = "UPDATE user SET user_hash = ? WHERE user_email = ?";
        $conn = OpenCon();
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ss", $hash, $email);
        $stmt->execute();
        $resultado_user = $stmt->get_result();
        CloseCon($conn);

        enviarEmailRecuperar($email, $hash);
    }
}

if (isset($_GET["hash"])) {
    $hash = strip_tags($_GET["hash"]);

    $sql = "SELECT * FROM user WHERE user_hash= ?";
    $conn = OpenCon();
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $hash);
    $stmt->execute();
    $resultado_user = $stmt->get_result();
    CloseCon($conn);

    if ($resultado_user->num_rows != 0) {
        $tipo = 1;
    }
}


?>
<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Repor Palavra-passe</title>

    <!-- Favicons -->
    <link rel="apple-touch-icon" sizes="180x180" href="../imgs/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../imgs/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../imgs/favicon/favicon-16x16.png">
    <link rel="manifest" href="../imgs/favicon/site.webmanifest">
    <link rel="mask-icon" href="../imgs/favicon/safari-pinned-tab.svg" color="#bf46e8">
    <link rel="shortcut icon" href="../imgs/favicon/favicon.ico">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="msapplication-config" content="../imgs/favicon/browserconfig.xml">
    <meta name="theme-color" content="#ffffff">

    <link rel="stylesheet" href="../assetsLogin/css/bootstrap.min.css">
    <link rel="stylesheet" href="../assetsLogin/css/fontawsom-all.min.css">
    <link rel="stylesheet" type="text/css" href="../assetsLogin/css/style.css" />
</head>

<body>
    <div class="container-fluid conya">
        <div class="side-left">
            <div class="sid-layy">
                <div class="row slid-roo">
                    <div class="data-portion">
                        <!-- <h2>Manage Your orders</h2>
                        <p>Ao criar uma conta na OilCentral, vai poder interagir com a nossa comunidade e guardar publicações e oleos para conseguir encontrar-los mais facilmente da proxima vez que os procurar. </p> -->
                    </div>
                </div>
            </div>
        </div>
        <div class="side-right">

            <form action="#">
                <a href="../index.php" style="font-size: 2rem;"><span style="color: #bf46e8">Oil</span>Central</a>

                <h2>Recuperar Palavra-passe</h2>

                <?php
                if ($erro != "") {
                ?>
                    <div class="alert alert-danger alert-dismissible fade show w-100" role="alert">
                        <?php echo $erro; ?>
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                <?php
                }

                if ($sucesso != "") {
                ?>
                    <div class="alert alert-success alert-dismissible fade show w-100" role="alert">
                        <?php echo $sucesso; ?>
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                <?php
                }
                ?>

                <?php
                if ($tipo == 0) {
                ?>
                    <p class="pb-4">Introduza o email associado à sua conta, se existir na nossa base de dados irá receber um email para criar uma nova palavra-passe</p>
                    <form action="#" method="post">

                        <div class="form-row">
                            <label for="">Email</label>
                            <input type="email" placeholder="nome@oilcentral.com" class="form-control form-control-sm" name="user_email" required>
                        </div>


                        <div class="form-row dfr">
                            <button class="btn btn-sm btn-success" type="submit" formmethod="post">Repor Palavra-passe</button>
                        </div>
                    </form>

            </form>
        <?php
                } else {
        ?>

            <p class="pb-4">Introduza a nova palavra passe</p>

            <form action="#" method="post">

                <input type="hidden" name="hash" value="<?php echo $hash; ?>">
                <input type="hidden" name="formSubmit" value="alterarPassword">

                <div class="form-row">
                    <label for="">Nova palavra-passe</label>
                    <input type="password" placeholder="Palavra-passe" class="form-control form-control-sm" name="novapassword1" required>
                </div>

                <div class="form-row">
                    <label for="">Repetir nova palavra-passe</label>
                    <input type="password" placeholder="Repetir nova palavra-passe" class="form-control form-control-sm" name="novapassword2" required>
                </div>


                <div class="form-row dfr">
                    <button class="btn btn-sm btn-success" formmethod="post" submit>Repor Palavra-passe</button>
                </div>
            </form>

        <?php
                }
        ?>
        </div>
</body>

<script src="../assetsLogin/js/jquery-3.2.1.min.js"></script>
<script src="../assetsLogin/js/popper.min.js"></script>
<script src="../assetsLogin/js/bootstrap.min.js"></script>
<script src="../assetsLogin/js/script.js"></script>

</html>