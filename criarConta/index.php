<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require '../assets/php/PHPMailer-master/src/Exception.php';
require '../assets/php/PHPMailer-master/src/PHPMailer.php';
require '../assets/php/PHPMailer-master/src/SMTP.php';

include("../conectarBd.php");




session_start();
if (isset($_SESSION["user_email"]) || isset($_SESSION["user_nome"]) || isset($_SESSION["NIVEL_UTILIZADOR"])) header("Location: ../index.php");
$erro = "";
// var_dump($_POST);

function enviarEmailAtivacao($hash, $email, $nome)
{
    //Create an instance; passing `true` enables exceptions
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
        $mail->addAddress($email, $nome);     //Add a recipient
        // $mail->addAddress('ellen@example.com');               //Name is optional
        // $mail->addReplyTo('info@example.com', 'Information');
        // $mail->addCC('cc@example.com');
        // $mail->addBCC('bcc@example.com');

        //Attachments
        // $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
        // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

        //Content
        $mail->isHTML(true);                                  //Set email format to HTML
        $mail->Subject = 'Confirmar Email';

        $postdata = http_build_query(
            array(
                'hash' => $hash
            )
        );

        $opts = array(
            'http' =>
            array(
                'method'  => 'POST',
                'header'  => 'Content-Type: application/x-www-form-urlencoded',
                'content' => $postdata
            )
        );

        $context = stream_context_create($opts);

        // Open the file using the HTTP headers set above
        $file = file_get_contents('../email/activarTemplate.html');

        print_r($file);

        $file = str_replace('$hash', $hash, $file);

        $mail->Body    = $file;
        // $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

        $mail->send();
        echo 'Message has been sent';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}

//Esta funcao verifica se existe um utilizador com o email na base de dados, caso exista retorna false caso nao exista retorna true
function inserirImagem($imgurl)
{
    $erro = "";
    $target_dir = "imgsPerfil/";
    $target_file = $target_dir . $imgurl . substr($_FILES["fileToUpload"]["name"], strpos($_FILES["fileToUpload"]["name"], '.'));
    $uploadOk = 1;
    $imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

    // Check if image file is a actual image or fake image
    if (isset($_POST["submit"])) {
        $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
        if ($check !== false) {
            // echo "File is an image - " . $check["mime"] . ".";
            $uploadOk = 1;
        } else {
            $erro = "File is not an image.";
            $uploadOk = 0;
        }
    }

    // Check if file already exists
    if (file_exists($target_file)) {
        $erro = "Sorry, file already exists.";
        $uploadOk = 0;
    }

    // Check file size
    if ($_FILES["fileToUpload"]["size"] > 500000) {
        $erro = "Sorry, your file is too large.";
        $uploadOk = 0;
    }

    // Allow certain file formats
    if (
        $imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
    ) {
        $erro = "Sorry, only JPG, JPEG, PNG files are allowed.";
        $uploadOk = 0;
    }
    // Check if $uploadOk is set to 0 by an error
    if ($uploadOk == 0) {
        $erro = "Sorry, your file was not uploaded.";
        // if everything is ok, try to upload file
        return false;
    } else {
        if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], "../" . $target_file)) {
            return $target_file;
            // echo "The file " . htmlspecialchars(basename($_FILES["fileToUpload"]["name"])) . " has been uploaded.";
        } else {
            return "Erro ao submeter image. Por favor verifique o formato do ficheiro.";
            $erro = "Sorry, there was an error uploading your file.";
        }
    }
}
function verificarEmail($email)
{
    $sql = "SELECT user_email FROM user WHERE user_email = ?";
    $conn = OpenCon();
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $resultado_user = $stmt->get_result();
    CloseCon($conn);
    if ($resultado_user->num_rows != 0) return false;
    else return true;
}
function registar($email, $nome, $password)
{
    global $erro;

    $nome = strip_tags(trim($nome));
    $email = strip_tags(trim($email));
    $hash = md5(uniqid(rand()));
    $imgurl = uniqid(time());
    $mark = 0;

    if (strlen($nome) <= 2) {
        $erro = "Nome tem de ter no minimo 3 caracteres";
        return;
    }

    if (isset($_POST["mark"]) && $_POST["mark"] == "on") {
        $mark = 1;
    }


    if (!verificarEmail($email)) {
        $erro = "Email já está associado a uma conta existente, por favor utilize outro email ou recupere a sua conta.";
        return;
    }

    if (($imgurl = inserirImagem($imgurl)) == false) {
        $erro = "Erro ao submeter imagem. Por favor verifique o formato ou utilize outra imagem.";
        return;
    }

    $password = password_hash($password, PASSWORD_DEFAULT);

    $nome = trim($nome);

    $conn = OpenCon();

    $sql = "INSERT INTO user (user_nome, user_email, user_password, user_nivel, user_hash, user_img, user_mark) VALUES ( ?, ?, ?, 0, ?, ?, ?)";
    $conn = OpenCon();
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssssi", $nome, $email, $password, $hash, $imgurl, $mark);
    $stmt->execute();
    $resultado_user = $stmt->get_result();
    CloseCon($conn);

    enviarEmailAtivacao($hash, $email, $nome);

    header("Location: ../ativarConta.php");
}

if (isset($_POST)) {
    if (isset($_POST["registarForm"])) {
        if ($_POST["password1"] == $_POST["password2"]) {
            registar($_POST["email"], $_POST["nome"], $_POST["password1"]);
        } else {
            $erro = "As passwords não coincidem.";
        }
    }
}
?>
<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Criar Conta</title>


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

<style>
</style>

<body>
    <div class="container-fluid conya">
        <div class="side-left">
            <div class="sid-layy">
                <div class="row slid-roo">
                    <div class="data-portion">
                        <h2>Crie uma conta</h2>
                        <p>Ao criar uma conta na OilCentral, vai poder interagir com a nossa comunidade e criar as suas próprias publicações. </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="side-right pt-2">

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
            ?>

            <form action="#" method="post" enctype="multipart/form-data">

                <input type="hidden" name="registarForm">
                <a href="../index.php" style="font-size: 2rem;"><span style="color: #bf46e8">Oil</span>Central</a>

                <h2>Introduza os dados para criar a conta</h2>

                <div class="form-row">
                    <div class="col-sm-12 text-center">
                        <img id="frame" src="../imgs/abstract-user-flat-3.png" alt="Example image" class="d-inline-block w-50" />
                    </div>
                </div>

                <div class="form-row">
                    <label for="">Imagem de perfil</label>
                    <input class="form-control form-control-sm" type="file" id="formFile" onchange="preview()" name="fileToUpload" required>
                </div>

                <div class="form-row">
                    <label for="">Nome</label>
                    <input type="text" placeholder="Nome e Apelido" class="form-control form-control-sm" name="nome" required>
                </div>


                <div class="form-row">
                    <label for="">Email</label>
                    <input type="email" placeholder="nome@oilcentral.pt" class="form-control form-control-sm" name="email" required>
                </div>

                <div class="form-row">
                    <label for="">Password</label>
                    <input type="password" placeholder="Password" class="form-control form-control-sm" name="password1" required>
                </div>

                <div class="form-row">
                    <label for="">Reintroduza a Password</label>
                    <input type="password" placeholder="Password" class="form-control form-control-sm" name="password2" required>
                </div>

                <div class="form-row row skjh">
                    <div class="col-12 left no-padding">
                        <input type="checkbox" name="mark"> Newsletter de eventos e promocões
                        <!-- Perguntar ao professor a linguagem -->
                    </div>
                </div>

                <div class="form-row row skjh">
                    <div class="col-12 left no-padding">
                        <input type="checkbox" name="mark" required> Concorda com os <a href="../termosecondicoes.php">termos e condições</a>
                        <!-- Perguntar ao professor a linguagem -->
                    </div>
                </div>

                <div class="form-row dfr pb-2">
                    <button class="btn btn-sm btn-success">Criar Conta</button>
                </div>

            </form>
            <div class="ord-v">
                <a href="or login with"></a>
            </div>
            <div class="form-row">

                <div class="soc-det">
                    <a href="../login/" class="text-secondary">Já tem conta? Faça login!</a>
                </div>

            </div>
        </div>
</body>

<script src="../assetsLogin/js/jquery-3.2.1.min.js"></script>
<script src="../assetsLogin/js/popper.min.js"></script>
<script src="../assetsLogin/js/bootstrap.min.js"></script>
<script src="../assetsLogin/js/script.js"></script>

<script>
    function preview() {
        frame.src = URL.createObjectURL(event.target.files[0]);
    }

    function clearImage() {
        document.getElementById('formFile').value = "../imgs/abstract-user-flat-3.png";
        frame.src = "";
    }
</script>

</html>