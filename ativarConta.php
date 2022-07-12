<?php
include("conectarBd.php");
session_start();

$tipo = false;

if (isset($_SESSION["user_email"]) || isset($_SESSION["user_nome"]) || isset($_SESSION["NIVEL_UTILIZADOR"])) header("Location: index.php");

if (isset($_GET["hash"]) && verificarHash($_GET["hash"])) {
  $tipo = true;
  header("refresh:3;url=login/");
} else if (isset($_GET["hash"])) {
    header("Location: ../login/");
}
function verificarHash($hash)
{
  $sql = "SELECT user_ID FROM user WHERE user_hash = ?";
  $conn = OpenCon();
  $stmt = $conn->prepare($sql);
  $stmt->bind_param("s", $hash);
  $stmt->execute();
  $resultado_user = $stmt->get_result();
  CloseCon($conn);

  if ($resultado_user->num_rows != 0) {
    $sql = "UPDATE user SET user_hash = '', user_nivel = 1 WHERE user_hash = ?";
    $conn = OpenCon();
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $hash);
    $stmt->execute();
    $resultado_user = $stmt->get_result();
    CloseCon($conn);
    return true;
  } else {
    return false;
  }
}
?>


<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>OilCentral - Ativar Conta</title>
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

  <!-- Icones Googles -->
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <!-- =======================================================
  * Template Name: Company - v4.6.1
  * Template URL: https://bootstrapmade.com/company-free-html-bootstrap-template/
  * Author: BootstrapMade.com
  * License: https://bootstrapmade.com/license/
  ======================================================== -->
</head>

<body>

  <?php include("estruturaPrincipal/header.php"); ?>

  <main id="main">

    <!-- ======= Blog Single Section ======= -->
    <section id="blog" class="blog">
      <div class="container" data-aos="fade-up">

        <div class="row mt-5">
          <article class="entry entry-single">
            <div class="row">

              <?php if ($tipo) {
              ?>
                <div class="col-md-6 align-self-center">
                  <h1>Sucesso</h1>
                  <p>A sua conta foi criada com sucesso. <a href="login/"> Inicie sessão</a>!</p>
                </div>

                <div class="col-md-6">
                  <img src="imgs/certo.png" class="img-fluid">
                </div>
              <?php
              } else {
              ?>

                <div class="col-md-6 align-self-center">
                  <h1>Está quase lá</h1>
                  <p>Enviamos-lhe um email para confirmar a sua conta, depois de confirmar a sua conta será ativada!</p>
                </div>

                <div class="col-md-6">
                  <img src="imgs/enviarEmail.png" class="img-fluid">
                </div>

              <?php
              } ?>

            </div>
          </article>
        </div>
    </section>
    <!-- End Blog Single Section -->

  </main>
  <!-- End #main -->

  <?php include("estruturaPrincipal/footer.php"); ?>

  <a href="# " class="back-to-top d-flex align-items-center justify-content-center "><i class="bi bi-arrow-up-short "></i></a>

  <!-- Vendor JS Files -->
  <script src="assets/vendor/aos/aos.js "></script>
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js "></script>
  <script src="assets/vendor/glightbox/js/glightbox.min.js "></script>
  <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js "></script>
  <script src="assets/vendor/php-email-form/validate.js "></script>
  <script src="assets/vendor/swiper/swiper-bundle.min.js "></script>
  <script src="assets/vendor/waypoints/noframework.waypoints.js "></script>

  <!-- Template Main JS File -->
  <script src="assets/js/main.js "></script>

</body>

</html>