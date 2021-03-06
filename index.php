<?php
// session_start();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>OilCentral - Página principal</title>
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
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi&display=swap" rel="stylesheet">

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

<style>
    body,
    html {
        height: 100%;
    }

    .img-bg {
        /* The image used */
        background-image: url("imgs/img-bg.png");
        /* Full height */
        min-height: 100%;
        /* Center and scale the image nicely */
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .user-icon {
        height: 3rem;
        width: 3rem;
    }

    .opacity90 {
        opacity: 0.9;
    }
</style>

<body>

    <!-- ======= Header ======= -->
    <?php
    include("estruturaPrincipal/header.php");
    ?>

    <div class="img-bg jumbotron d-flex align-items-center">
        <!-- ======= Services Section ======= -->
        <div class="container text-center">
            <section id="services" class="services">
                <div class="row mb-3 mt-3">
                    <div class="bg-light  rounded align-items-center pt-2 opacity90">
                        <h1 class="" style="color: black; font-family: 'Tiro Devanagari Marathi', serif;">Bem vindo!</h1>
                    </div>

                </div>
                <div class="container" data-aos="">
                    <!-- 
              Div que da para dar click: onclick="location.href='#';" style="cursor: pointer;"
             -->
                    <div class="align-items-center">
                        <div class="row">
                            <div class="col-lg-4 col-md-6 d-flex align-items-stretch" style="transform: rotate(0);">
                                <div class="icon-box iconbox-blue">
                                    <div class="icon">
                                        <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"></path>
                                        </svg>
                                        <i class="bx bxl-dribbble"></i>
                                    </div>
                                    <h4><a href="protocolo.php" class="stretched-link">Protocolos</a></h4>
                                    <p>Utilize os Óleos essenciais como uma farmácia natural em sua casa</p>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" style="transform: rotate(0);">
                                <div class="icon-box iconbox-orange ">
                                    <div class="icon">
                                        <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,582.0697525312426C382.5290701553225,586.8405444964366,449.9789794690241,525.3245884688669,502.5850820975895,461.55621195738473C556.606425686781,396.0723002908107,615.8543463187945,314.28637112970534,586.6730223649479,234.56875336149918C558.9533121215079,158.8439757836574,454.9685369536778,164.00468322053177,381.49747125262974,130.76875717737553C312.15926192815925,99.40240125094834,248.97055460311594,18.661163978235184,179.8680185752513,50.54337015887873C110.5421016452524,82.52863877960104,119.82277516462835,180.83849132639028,109.12597500060166,256.43424936330496C100.08760227029461,320.3096726198365,92.17705696193138,384.0621239912766,124.79988738764834,439.7174275375508C164.83382741302287,508.01625554203684,220.96474134820875,577.5009287672846,300,582.0697525312426"></path>
                                        </svg>
                                        <i class="bx bx-file"></i>
                                    </div>
                                    <h4><a href="oleo-single.php" class="stretched-link">Óleos essenciais</a></h4>
                                    <p>Informação sobre os constituintes dos óleos essenciais, e misturas de óleos</p>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" style="transform: rotate(0);">
                                <div class="icon-box iconbox-pink">
                                    <div class="icon">
                                        <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,541.5067337569781C382.14930387511276,545.0595476570109,479.8736841581634,548.3450877840088,526.4010558755058,480.5488172755941C571.5218469581645,414.80211281144784,517.5187510058486,332.0715597781072,496.52539010469104,255.14436215662573C477.37192572678356,184.95920475031193,473.57363656557914,105.61284051026155,413.0603344069578,65.22779650032875C343.27470386102294,18.654635553484475,251.2091493199835,5.337323636656869,175.0934190732945,40.62881213300186C97.87086631185822,76.43348514350839,51.98124368387456,156.15599469081315,36.44837278890362,239.84606092416172C21.716077023791087,319.22268207091537,43.775223500013084,401.1760424656574,96.891909868211,461.97329694683043C147.22146801428983,519.5804099606455,223.5754009179313,538.201503339737,300,541.5067337569781"></path>
                                        </svg>
                                        <i class="bx bx-tachometer"></i>
                                    </div>
                                    <h4><a href="posts.php" class="stretched-link">Posts</a></h4>
                                    <p>Posts criados pela comunidade, sobre usos interessantes de óleos esseniais</p>
                                </div>
                            </div>



                        </div>
                    </div>

                </div>
            </section>
            <!-- End Services Section -->
        </div>
    </div>


    <main id="main">

        <!-- ======= About Us Section ======= -->
        <section id="about-us" class="about-us">
            <div class="container">

                <div class="row content">
                    <div class="col-lg-6">
                        <h2>Sobre nós</h2>
                        <h3>A <span style="color: #bf46e8;">Oil</span>Central tem como objetivo facilitar a procura de informação sobre como utilizar óleos essenciais</h3>
                    </div>
                    <div class="col-lg-6 pt-4 pt-lg-0">
                        <p class="">
                            Embora esteja cada vez mais disponivel, a informacao sobre como utilizar os oleos essenciais no dia a dia continua a ser transmitida individualmente ou em grupos pouco privados. Com este website pretendemos melhorar este problema ao criar uma fonte de informação
                            aberta 24 horas por dia e 7 dias por semana, desta forma qualquer pessoa pode consultar como se utilizam os óleos essenciais para uma especifica situação.
                            <br> Existem quatro secções com:
                        </p>
                        <ul>
                            <li><i class="ri-check-double-line"></i> Informação sobre óleos e misturas unicas</li>
                            <li><i class="ri-check-double-line"></i> Informação sobre como e quando aplicar os óleos</li>
                            <li><i class="ri-check-double-line"></i> Informação sobre diversos temas relacionados com óleos</li>
                            <li><i class="ri-check-double-line"></i> Informação contribuida pela comunidade sobre como utilizar os óleos</li>
                        </ul>
                        <p class="fst-italic">
                            Este website é um produto em desenvolvimento, se encontrar algum problema ou se tiver alguma ideia por favor não hesite em contactar-nos
                        </p>
                    </div>
                </div>

            </div>
        </section>
        <!-- End About Us Section -->

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
    <a class="d-none" title="Google Analytics Alternative" href="https://clicky.com/101372064"><img alt="Clicky" src="//static.getclicky.com/media/links/badge.gif" border="0" /></a>
    <script async src="//static.getclicky.com/101372064.js"></script>
</body>

</html>