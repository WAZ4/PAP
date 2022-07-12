<?php
$titulo = "Como utilizar o editor";
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>OilCentral - <?php echo $titulo; ?></title>
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

    <!-- Google Material Icons -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">


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


    <main id="main" class="pb-5">

        <!-- ======= Breadcrumbs ======= -->
        <section id="breadcrumbs" class="breadcrumbs">
            <div class="container">

                <div class="d-flex justify-content-between align-items-center">
                    <h2>Guias de utilizacão</h2>
                    <ol>
                        <li><a href="index.php">Home</a></li>
                        <li><a href="guias.php">Guias</a></li>
                        <li><?php echo $titulo; ?></li>
                    </ol>
                </div>

            </div>
        </section>
        <!-- End Breadcrumbs -->

        <!-- ======= Features Section ======= -->
        <section id="features" class="features">
            <div class="container" data-aos="fade-up">

                <div class="section-title">
                    <h2><?php echo $titulo; ?></h2>
                </div>

                <div class="row">

                    <div class="entry-content">
                        <p>
                            O editor disponibiliza 5 módulos diferentes. Para adicionar um módulo é necessário clicar na opção de adicionar que se encontra no início da linha. </p>
                        <img src="uploads/1657578750-6766.png" class="img-fluid" alt="Opção adicionar módulo">
                        <h3> Módulo Título (Heading) </h3>
                        <p>
                            O módulo título tal como o nome indica, permite adicionar um título ou subtítulo à publicação. Para inserir este módulo é preciso escolher a opção “Heading” no menu de introduzir módulo </p>
                        <img src="uploads/1657578818-8376.png" class="img-fluid" alt="Menu Titulo&nbsp;">
                        <h3> Módulo Parágrafo (Texto) </h3>
                        <p>
                            O módulo parágrafo tal como o nome indica, permite adicionar um parágrafo. Para inserir este módulo é preciso escolher a opção “Text” no menu de introduzir módulo. </p>
                        <img src="uploads/1657578815-904.png" class="img-fluid" alt="Menu Text&nbsp;">
                        <h3> Módulo Delimitador (Delimiter) </h3>
                        <p>
                            O módulo delimitador permite adicionar uma quebra de página à publicação. Para inserir este módulo é preciso escolher a opção “Delimiter” no menu de introduzir módulo </p>
                        <img src="uploads/1657578822-4142.png" class="img-fluid" alt="Menu Delimiter&nbsp;">
                        <h3> Módulo Imagem (Image) </h3>
                        <p>
                            O módulo imagem tal como o nome indica, permite adicionar uma imagem à publicação. Para inserir este módulo é preciso escolher a opção “Image” no menu de introduzir módulo. Depois de introduzir o módulo é preciso escolher a imagem que pretende introduzir. </p>
                        <img src="uploads/1657578828-9809.png" class="img-fluid" alt="Menu Image&nbsp;">
                        <h3> Módulo Citação (Quote) </h3>
                        <p>
                            O módulo citação tal como o nome indica, permite adicionar uma citação à publicação. Para inserir este módulo é preciso escolher a opção “Quote” no menu de introduzir módulo. A citação é introduzida na caixa de coma e o nome do autor é introduzido na caixa de baixo. </p>
                        <img src="uploads/1657578834-2291.png" class="img-fluid" alt="Menu Quote">
                        <h3> Apagar módulo </h3>
                        <p>
                            Para apagar um módulo é preciso selecionar a opção de definições que se encontra no inicio da linha. De clica-se duas vezes na cruz e o módulo é apagado </p>
                        <img src="uploads/1657578801-8005.png" class="img-fluid" alt="Apagar módulo">

                    </div>

                </div>
        </section>
        <!-- End Features Section -->

    </main>
    <!-- End #main -->

    <?php include("estruturaPrincipal/footer.php"); ?>

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