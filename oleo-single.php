<?php
include_once("conectarBd.php");

$Oleo_ID = 2;
if (isset($_GET["Oleo_ID"])) {
    $Oleo_ID = $_GET["Oleo_ID"];
}

function listarOleos()
{
    global $Oleo_ID;
    $sql = "SELECT * FROM Oleo_Master WHERE Oleo_Tipo != 3 ORDER BY Oleo_Nome ASC";
    $conn = OpenCon();
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $resultado_oleo_master = $stmt->get_result();
    CloseCon($conn);

    while ($row = $resultado_oleo_master->fetch_assoc()) {
        if ($row["Oleo_Tipo"] == 1) $tipo = "Óleo";
        else $tipo = "Mistura";
        $idForm = "oleo" . $row["Oleo_ID"];
        $idFormJS = "'" . $idForm . "'";
?>
        <form action="#" method="get" id="<?php echo $idForm; ?>">
            <input type="hidden" name="Oleo_ID" value="<?php echo $row["Oleo_ID"]; ?>">
        </form>
        <a href="javascript:{}" onclick="document.getElementById(<?php echo $idFormJS; ?>).submit();" class="list-group-item list-group-item-action py-3 <?php if ($row["Oleo_ID"] == $Oleo_ID) echo "active"; ?> lh-tight">
            <div class="d-flex w-100 align-items-center justify-content-between">
                <strong class="mb-1"><?php echo ucfirst($row["Oleo_Nome"]); ?></strong>
                <small class="text"><?php echo $tipo; ?></small>
            </div>
        </a>
    <?php
    }
}

function apresentarOleo()
{
    global $Oleo_ID;
    $sql = "SELECT * FROM Oleo_Master WHERE Oleo_ID = ? ORDER BY Oleo_Nome ASC";
    $conn = OpenCon();
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $Oleo_ID);
    $stmt->execute();
    $resultado_oleo_master = $stmt->get_result();
    CloseCon($conn);

    $row = $resultado_oleo_master->fetch_assoc();

    $sql = "SELECT Oleo_Outros_Usos.*, Protocolo_Master.Protocolo_ID, Protocolo_Master.Protocolo_Patologia FROM Oleo_Outros_Usos INNER JOIN Protocolo_Master ON Oleo_Outros_Usos.Protocolo_ID = Protocolo_Master.Protocolo_ID WHERE Oleo_ID = ? ORDER BY Uso_ID ASC";
    $conn = OpenCon();
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $Oleo_ID);
    $stmt->execute();
    $resultado_oleo_outros_usos = $stmt->get_result();
    CloseCon($conn);


    $sql = "SELECT DISTINCT Protocolo_Master.Protocolo_Patologia FROM Protocolo_Detalhe_Oleo INNER JOIN Protocolo_Master ON Protocolo_Detalhe_Oleo.Protocolo_ID = Protocolo_Master.Protocolo_ID WHERE Oleo_ID = ? LIMIT 5";
    $conn = OpenCon();
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $Oleo_ID);
    $stmt->execute();
    $resultado_protocolo_detalhe_oleo = $stmt->get_result();
    CloseCon($conn);

    if ($row["Oleo_Tipo"] == 2) {
        $sql = "SELECT Oleo_Blend_Ingredientes.Ingrediente_ID, Oleo_Master.Oleo_Nome, Oleo_Blend_Ingredientes.Ingrediente_Nome FROM Oleo_Blend_Ingredientes LEFT JOIN Oleo_Master ON Oleo_Blend_Ingredientes.Ingrediente_ID = Oleo_Master.Oleo_ID WHERE Oleo_Blend_Ingredientes.Oleo_ID = ?";
        $conn = OpenCon();
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $Oleo_ID);
        $stmt->execute();
        $resultado_oleo_blend_ingredientes = $stmt->get_result();
        CloseCon($conn);
    }


    ?>
    <div class="row">
        <div class="col-md-6 h-100">
            <div class="align-content-bottom text-center mt-4">
                <h2 class=""><?php echo $row["Oleo_Nome"]; ?></h1>
                    <?php
                    if ($row["Oleo_Tipo"] == 1) {
                    ?>
                        <h4 class=""><?php echo $row["Oleo_Nome_PT"]; ?></h3>
                        <?php
                    }
                        ?>
            </div>
        </div>
        <div class="col-md-6">
            <div class="row">
                <div class="col-4 px-0" class="">
                    <img src="imgs/Aromatico.png" alt="Aromatico" class="img-thumbnail img-usos <?php if ($row["Oleo_Aromatico"] == 0) echo "grayscale"; ?>">
                </div>

                <div class="col-4 px-0" class="">
                    <img src="imgs/Topico.png" alt="Aromatico" class="img-thumbnail img-usos <?php if ($row["Oleo_Topico"] == 0) echo "grayscale"; ?>">
                </div>

                <div class="col-4 px-0" class="">
                    <img src="imgs/Ingerir.png" alt="Aromatico" class="img-thumbnail img-usos <?php if ($row["Oleo_Interno"] == 0) echo "grayscale"; ?>">
                </div>
            </div>
        </div>
    </div>
    <hr class="borda-roxa">
    <div class="row">
        <div class="col-lg-6">
            <h5>Sobre o Oleo</h6>
                <p>
                    <?php
                    echo $row["Oleo_Uso_Emocional"];
                    ?>
                </p>
        </div>
        <div class="col-lg-6">
            <div class="">
                <img src="imgs/oleo<?php echo $row["Oleo_ID"]; ?>.jpg" alt="aromatico" class="img-fluid rounded">
            </div>
        </div>
    </div>

    <div class="row mt-3">
        <div class="col-lg-6">
            <h6> Usos</h6>
            <p>
                <?php
                $outrosusos = "";
                $protocolohref = "protocolo.php?pesquisa=";
                while ($row_Usos = $resultado_oleo_outros_usos->fetch_assoc()) {
                    if ($row_Usos["Protocolo_ID"] == -1) {
                        $outrosusos .= ", " . ucfirst($row_Usos["Uso_Nome"]);
                    } else {
                        $outrosusos .= ",<a href='protocolo.php?pesquisa=" . $row_Usos["Protocolo_Patologia"] . "'>" . ucfirst($row_Usos["Protocolo_Patologia"]) . "</a>";
                    }
                }
                $outrosusos = substr($outrosusos, 1);
                $outrosusos .= '.';
                echo $outrosusos;
                ?>
            </p>
        </div>
        <?php
        if ($row["Oleo_Seguranca"] != 0 && $row["Oleo_Seguranca"] != "") {
        ?>
            <div class="col-lg-6">
                <h6>Segurança</h6>
                <p>
                    <?php echo $row["Oleo_Seguranca"]; ?>
                </p>
            </div>
        <?php
        }
        ?>
    </div>

    <div class="row mt-3">
        <div class="col-md-6">
            <div>
                <ul class="list-group list-group-flush overflow-hidden">
                    <?php
                    if ($row["Oleo_Tipo"] == 1) {
                    ?>
                        <h6>Propriedades Principais</h6>


                        <?php
                        $string = $row["Oleo_Propriedades_Principais"];
                        while ($vpos = strpos($string, ',') != false) {
                            $vpos = strpos($string, ',');
                            $propriedade = substr($string, 0, $vpos);
                            $string = substr($string, $vpos + 1);
                        ?>
                            <li class="list-group-item"><?php echo $propriedade; ?></li>
                        <?php
                        }
                        ?>
                        <li class="list-group-item"><?php echo $string; ?></li>

                    <?php // Continuar aqui WAZA
                    } else {
                    ?>
                        <h6>Ingredientes Principais</h6>
                        <ul class="list-group list-group-flush overflow-hidden">
                            <?php
                            while ($row_blend = $resultado_oleo_blend_ingredientes->fetch_assoc()) {
                                if ($row_blend["Ingrediente_ID"] == "-1") {
                            ?>
                                    <li class="list-group-item"><?php echo $row_blend["Ingrediente_Nome"]; ?></li>
                                <?php
                                } else {
                                ?>
                                    <li class="list-group-item"><a href="oleo-single.php?Oleo_ID=<?php echo $row_blend["Ingrediente_ID"];?>"><?php echo ucfirst($row_blend["Oleo_Nome"]); ?></a></li>
                        <?php
                                }
                            }
                        }
                        ?>
                        </ul>
            </div>
        </div>
        <div class="col-md-6">
            <div class="row">
                <?php
                if ($resultado_protocolo_detalhe_oleo->num_rows != 0) {
                ?>
                    <h6>Usos mais comum</h6>
                    <div>
                        <ul class="list-group list-group-flush overflow-hidden">
                            <?php

                            while ($row_protocolos = $resultado_protocolo_detalhe_oleo->fetch_assoc()) {

                            ?>
                                <li class="list-group-item border-bottom"><a href="protocolo.php?pesquisa=<?php echo $row_protocolos["Protocolo_Patologia"]; ?>"><?php echo $row_protocolos["Protocolo_Patologia"]; ?> </a></li>
                            <?php
                            }
                            ?>
                        </ul>
                    </div>

                <?php
                }
                ?>
            </div>
        </div>
    </div>
<?php
}


?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>Oleo Single - Company Bootstrap Template</title>
    <meta content="" name="description">
    <meta content="" name="keywords">


    <!-- CSS BASE-->
    <?php
    include("estruturaPrincipal/head-css.php");
    ?>

    <!-- JS BASE-->
    <?php
    include("estruturaPrincipal/head-js.php");
    ?>

    <!-- Tags -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.0/css/bootstrap.min.css" rel="stylesheet" />
    <link href="https://unpkg.com/@yaireo/tagify/dist/tagify.css" rel="stylesheet" type="text/css" />

    <!-- Template Main CSS File -->
    <link href="assets/css/style.css" rel="stylesheet">

    <link rel="stylesheet" href="cssPessoal\oleo-single.css">


    <!-- =======================================================
  * Template Name: Company - v4.6.1
  * Template URL: https://bootstrapmade.com/company-free-html-bootstrap-template/
  * Author: BootstrapMade.com
  * License: https://bootstrapmade.com/license/
  ======================================================== -->
</head>
<style>
    hr {
        color: #bf46e8;
    }

    .borda-roxa {
        border-color: #bf46e8 !important;
    }

    .list-group-item.active {
        background-color: #bf46e8;
        border-color: #bf46e8;
    }
</style>

<body>

    <!-- <pre> -->
    <?php
    // echo "espaco <br>";
    // var_dump($_POST);
    ?>
    <!-- </pre> -->


    <!-- ======= Header ======= -->
    <?php
    include("estruturaPrincipal/header.php");
    ?>
    <!-- End Header -->


    <main id="main">

        <!-- ======= Breadcrumbs ======= -->
        <section id="breadcrumbs" class="breadcrumbs">
            <div class="container">

                <div class="d-flex justify-content-between align-items-center">
                    <h2>Oleo Single</h2>
                    <ol>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="blog.html">Placeholder</a></li>
                        <li>Oleo Single</li>
                    </ol>
                </div>

            </div>
        </section><!-- End Breadcrumbs -->

        <!-- ======= Blog Single Section ======= -->
        <section id="blog" class="blog">
            <div class="container" >
                <!-- Header -->
                <div class="row">
                    <div class="col-md-8  entries">
                        <article class="entry entry-single">
                            <?php apresentarOleo(); ?>
                        </article>
                    </div>
                    <div class="col-md-4 entries">
                        <article class="entry entry-single">
                            <div class="d-flex flex-column align-items-stretch flex-shrink-0 bg-white">
                                <span class="fs-5 fw-semibold text-center mb-3">Lista de Oleos</span>
                                <div class="list-group list-group-flush border-bottom scrollarea">
                                    <?php listarOleos(); ?>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>

            </div>
            </div>
            <!-- Body -->
            <div class="row">
                <div class="col">

                </div>
            </div>
        </section><!-- End Blog Single Section -->

    </main><!-- End #main -->

    <!-- ======= Footer ======= -->
    <footer id="footer">

        <div class="footer-top">
            <div class="container">
                <div class="row">

                    <div class="col-lg-3 col-md-6 footer-contact">
                        <h3>Company</h3>
                        <p>
                            A108 Adam Street <br>
                            New York, NY 535022<br>
                            United States <br><br>
                            <strong>Phone:</strong> +1 5589 55488 55<br>
                            <strong>Email:</strong> info@example.com<br>
                        </p>
                    </div>

                    <div class="col-lg-2 col-md-6 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                            <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                            <li><i class="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                            <li><i class="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                            <li><i class="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                            <li><i class="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                        </ul>
                    </div>

                    <div class="col-lg-3 col-md-6 footer-links">
                        <h4>Our Services</h4>
                        <ul>
                            <li><i class="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
                            <li><i class="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
                            <li><i class="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
                            <li><i class="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
                            <li><i class="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
                        </ul>
                    </div>

                    <div class="col-lg-4 col-md-6 footer-newsletter">
                        <h4>Join Our Newsletter</h4>
                        <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                        <form action="" method="post">
                            <input type="email" name="email"><input type="submit" value="Subscribe">
                        </form>
                    </div>

                </div>
            </div>
        </div>

        <div class="container d-md-flex py-4">

            <div class="me-md-auto text-center text-md-start">
                <div class="copyright">
                    &copy; Copyright <strong><span>Company</span></strong>. All Rights Reserved
                </div>
                <div class="credits">
                    <!-- All the links in the footer should remain intact. -->
                    <!-- You can delete the links only if you purchased the pro version. -->
                    <!-- Licensing information: https://bootstrapmade.com/license/ -->
                    <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/company-free-html-bootstrap-template/ -->
                    Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                </div>
            </div>
            <div class="social-links text-center text-md-right pt-3 pt-md-0">
                <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
                <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
                <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
            </div>
        </div>
    </footer><!-- End Footer -->
</body>

</html>