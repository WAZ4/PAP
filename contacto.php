<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'assets/php/PHPMailer-master/src/Exception.php';
require 'assets/php/PHPMailer-master/src/PHPMailer.php';
require 'assets/php/PHPMailer-master/src/SMTP.php';

include("conectarBd.php");

function enviarEmailContacto($email, $assunto, $mensagem, $nome)
{
    //Create an instance; passing `true` enables exceptions
    $mail = new PHPMailer(true);

    $nome = strip_tags(trim($nome));
    if ($nome != "") $nome = "Olá " . $nome . ", ";

    $assunto = strip_tags(trim($assunto));
    $mensagem = strip_tags(trim($mensagem));


    try {
        //Server settings
        // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
        $mail->isSMTP();                                            //Send using SMTP
        $mail->Host       = 'smtp-pt.securemail.pro';                     //Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
        $mail->Username   = 'ajuda@oilcentral.pt';                     //SMTP username
        $mail->Password   = 'oleosforever254';                               //SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
        $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

        //Recipients
        $mail->setFrom('ajuda@oilcentral.pt', 'OilCentral');
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

        // Open the file using the HTTP headers set above
        $file = file_get_contents('email/contacto.html');

        // print_r($file);

        $file = str_replace('$nome', $nome, $file);
        $file = str_replace('$assunto', $assunto, $file);
        $file = str_replace('$mensagem', $mensagem, $file);

        $mail->Body    = $file;
        // $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

        $mail->send();
        // echo 'Message has been sent';
    } catch (Exception $e) {
        $erro = "Erro ao enviar a mensagem. Por favor entre em contacto connosco por outro meio.";
    }
}

if (isset($_POST["formSubmit"])) {
    enviarEmailContacto($_POST["email"], $_POST["assunto"], $_POST["mensagem"], $_POST["nome"]);
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>OilCentral - Contacto</title>
    <meta content="" name="description">
    <meta content="" name="keywords">

    <!-- Favicons -->
    <link rel="apple-touch-icon" sizes="180x180" href="imgs/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="imgs/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="imgs/favicon/favicon-16x16.png">
    <link rel="manifest" href="imgs/favicon/site.webmanifest">
    <link rel="mask-icon" href="imgs/favicon/safari-pinned-tab.svg" color="#bf46e8">
    <link rel="shortcut icon" href="imgs/favicon/favicon.ico">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="msapplication-config" content="imgs/favicon/browserconfig.xml">
    <meta name="theme-color" content="#ffffff">

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Roboto:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

    <!-- Vendor CSS Files -->
    <link href="assets/vendor/animate.css/animate.min.css" rel="stylesheet">
    <link href="assets/vendor/aos/aos.css" rel="stylesheet">
    <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
    <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
    <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
    <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet">
    <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">

    <!-- Template Main CSS File -->
    <link href="assets/css/style.css" rel="stylesheet">

    <!-- =======================================================
  * Template Name: Company - v4.6.1
  * Template URL: https://bootstrapmade.com/company-free-html-bootstrap-template/
  * Author: BootstrapMade.com
  * License: https://bootstrapmade.com/license/
  ======================================================== -->
</head>

<body>

    <!-- ======= Header ======= -->
    <?php
    include("estruturaPrincipal/header.php");
    ?>


    <main id="main">

        <!-- ======= Breadcrumbs ======= -->
        <section id="breadcrumbs" class="breadcrumbs">
            <div class="container">

                <div class="d-flex justify-content-between align-items-center">
                    <h2>Contacto</h2>
                    <ol>
                        <li><a href="index.php">Home</a></li>
                        <li>Contacto</li>
                    </ol>
                </div>

            </div>
        </section>
        <!-- End Breadcrumbs -->

        <!-- ======= Contact Section ======= -->
        <div class="map-section">
            <iframe style="border:0; width: 100%; height: 350px;" src="https://maps.google.com/maps?q=R.%20Eiras%204A,%20Passos&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" allowfullscreen></iframe>
        </div>

        <section id="contact" class="contact">
            <div class="container">

                <div class="row justify-content-center">

                    <div class="col-lg-10">

                        <div class="info-wrap">
                            <div class="row">
                                <div class="col-lg-4 info">
                                    <i class="bi bi-geo-alt"></i>
                                    <h4>Localização:</h4>

                                    <p>R. Eiras 4A, Passos<br>Bragança</p>

                                </div>

                                <div class="col-lg-4 info mt-4 mt-lg-0">
                                    <i class="bi bi-envelope"></i>
                                    <h4>Email:</h4>
                                    <p>ajuda@oilcentral.pt
                                        <!-- <br>contact@example.com -->
                                    </p>
                                </div>

                                <div class="col-lg-4 info mt-4 mt-lg-0">
                                    <i class="bi bi-phone"></i>
                                    <h4>Telemóvel:</h4>
                                    <p>+351 910 365 645</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div class="row mt-5 justify-content-center">
                    <div class="col-lg-10">
                        <form action="#" method="post">
                            <div class="row">
                                <div class="col-md-6 form-group">
                                    <input type="text" name="nome" class="form-control" id="nome" placeholder="O seu nome (opcional)" >
                                </div>
                                <div class="col-md-6 form-group mt-3 mt-md-0">
                                    <input required type="email" class="form-control" name="email" id="email" placeholder="O seu email" required>
                                </div>
                            </div>
                            <div class="form-group mt-3">
                                <input required type="text" class="form-control" name="assunto" id="subject" placeholder="Assunto" required>
                            </div>
                            <div class="form-group mt-3">
                                <textarea required class="form-control" name="mensagem" rows="5" placeholder="Mensagem" required></textarea>
                            </div>
                            <br>
                            <div class="text-center"><button type="submit" class="btn btn-outline-secondary" name="formSubmit">Enviar Mensagem</button></div>
                        </form>
                    </div>

                </div>

            </div>
        </section>
        <!-- End Contact Section -->

    </main>
    <!-- End #main -->

    <?php include("estruturaPrincipal/footer.php");?>

    <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

    <!-- Vendor JS Files -->
    <script src="assets/vendor/aos/aos.js"></script>
    <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
    <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
    <script src="assets/vendor/php-email-form/validate.js"></script>
    <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
    <script src="assets/vendor/waypoints/noframework.waypoints.js"></script>

    <!-- Template Main JS File -->
    <script src="assets/js/main.js"></script>

</body>

</html>