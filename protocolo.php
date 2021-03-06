<!-- Arranjar links quando o Oleo e do tipo 3 -->
<?php
include_once("conectarBd.php");
session_start();

function imprimirProtocolos()
{
    $filtro = " WHERE Protocolo_ID != -1";
    if (isset($_GET["pesquisa"]) && $_GET["pesquisa"] != "") {
        $filtro .= " AND Protocolo_Patologia LIKE '%" . $_GET["pesquisa"] . "%' OR Protocolo_Sintomas LIKE '%" . $_GET["pesquisa"] . "%'"; //para usar com a barra de pesquisas
    }

    $sql = "SELECT * FROM Protocolo_Master" . $filtro;
    $conn = OpenCon();
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $result_protocolo_master = $stmt->get_result();
    CloseCon($conn);

    if ($result_protocolo_master != false) {


        $qntRes = $result_protocolo_master->num_rows;
        $resto = $qntRes % 3;

        $qntCol = array();
        $qntCol[0] = $resto == 0 ? $qntRes / 3 : ($qntRes - $resto) / 3 + 1;
        $qntCol[1] = $resto == 2 ? ($qntRes - $resto) / 3 + 1 : ($qntRes - $resto) / 3;
        $qntCol[2] = ($qntRes - $resto) / 3;

        // var_dump($qntCol);

        foreach ($qntCol as $qnt) {
?>
            <div class="col-lg-4 col-md-4">
                <?php
                for ($i = 0; $i < $qnt; $i++) {

                    if ($row = $result_protocolo_master->fetch_assoc()) {

                        $detalhe_titulo = array();

                        $conn = OpenCon();
                        $sql = "SELECT * FROM Protocolo_Detalhe WHERE Protocolo_ID=?";
                        $stmt = $conn->prepare($sql);
                        $stmt->bind_param('i', $row["Protocolo_ID"]);
                        $stmt->execute();
                        $result_protocolo_detalhe = $stmt->get_result();
                        CloseCon($conn);

                        $conn = OpenCon();
                        $sql = "SELECT Protocolo_Detalhe_Oleo.Protocolo_ID, Protocolo_Detalhe_Oleo.Detalhe_ID, Oleo_Master.Oleo_Nome, Oleo_Master.Oleo_ID, Oleo_Master.Oleo_Tipo FROM Protocolo_Detalhe_Oleo INNER JOIN Oleo_Master ON Protocolo_Detalhe_Oleo.Oleo_ID = Oleo_Master.Oleo_ID WHERE Protocolo_Detalhe_Oleo.Protocolo_ID = ?";
                        $stmt = $conn->prepare($sql);
                        $stmt->bind_param('i', $row["Protocolo_ID"]);
                        $stmt->execute();
                        $result_protocolo_detalhe_oleo = $stmt->get_result();
                        CloseCon($conn);

                        $conn = OpenCon();
                        $sql = "SELECT Protocolo_Suporte.Protocolo_ID, Oleo_Master.Oleo_Nome, Oleo_Master.Oleo_ID FROM Protocolo_Suporte INNER JOIN Oleo_Master ON Protocolo_Suporte.Oleo_ID = Oleo_Master.Oleo_ID WHERE Protocolo_ID = ?";
                        $stmt = $conn->prepare($sql);
                        $stmt->bind_param('i', $row["Protocolo_ID"]);
                        $stmt->execute();
                        $result_protocolo_suporte = $stmt->get_result();
                        CloseCon($conn);

                        while ($row_detalhe_oleo = $result_protocolo_detalhe_oleo->fetch_assoc()) {
                            if ($row_detalhe_oleo["Oleo_Tipo"] == 3) {

                                if (!isset($detalhe_titulo[$row_detalhe_oleo["Detalhe_ID"]])) {
                                    $detalhe_titulo += [$row_detalhe_oleo["Detalhe_ID"] => ucfirst($row_detalhe_oleo["Oleo_Nome"])];
                                } else {
                                    $detalhe_titulo[$row_detalhe_oleo["Detalhe_ID"]] .= ', ' . ucfirst($row_detalhe_oleo["Oleo_Nome"]);
                                }
                            } else {
                                if (!isset($detalhe_titulo[$row_detalhe_oleo["Detalhe_ID"]])) {
                                    $detalhe_titulo += [$row_detalhe_oleo["Detalhe_ID"] => "<a href='oleo-single.php?Oleo_ID=" .  $row_detalhe_oleo["Oleo_ID"] . "' rel='noopener noreferrer' target='_blank'>" . ucfirst($row_detalhe_oleo["Oleo_Nome"]) . "</a>"];
                                } else {
                                    $detalhe_titulo[$row_detalhe_oleo["Detalhe_ID"]] .= ', ' . "<a href='oleo-single.php?Oleo_ID=" .  $row_detalhe_oleo["Oleo_ID"] . "' rel='noopener noreferrer' target='_blank'>" . ucfirst($row_detalhe_oleo["Oleo_Nome"]) . "</a>";
                                }
                            }
                        }
                ?>
                        <div class="card mb-2">
                            <div class="card-body bg-light">
                                <div style="transform: rotate(0);">
                                    <div>
                                        <h5 class="card-title"><?php echo $row["Protocolo_Patologia"]; ?></h5>
                                        <p class="card-text"><?php echo $row["Protocolo_Sintomas"]; ?></p>
                                        <a class="stretched-link" data-toggle="collapse" href="#collapse-collapsed<?php echo $row["Protocolo_ID"]; ?>" aria-expanded="true" aria-controls="collapse-collapsed<?php echo $row["Protocolo_ID"]; ?>" id="heading-collapsed">
                                            Mostrar
                                        </a>
                                    </div>
                                </div>
                                <div id="collapse-collapsed<?php echo $row["Protocolo_ID"]; ?>" class="collapse mt-4" aria-labelledby="heading-collapsed">
                                    <h6 class="card-title">Descri????o</h6>
                                    <p><?php echo $row["Protocolo_Descricao"]; ?></p>

                                    <h6 class="card-title">Dura????o Sugerida</h6>
                                    <p class="card-text"><?php echo $row["Protocolo_Duracao"]; ?></p>

                                    <h6 class="card-tittle">Protocolo</h6>

                                    <ol class="list-group list-group">
                                        <?php
                                        while ($row_Detalhe = $result_protocolo_detalhe->fetch_assoc()) {
                                        ?>
                                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                                <div class="ms-2 me-auto">
                                                    <div class="fw-bold">
                                                        <?php echo $detalhe_titulo[$row_Detalhe["Detalhe_ID"]]; ?>
                                                    </div>
                                                    <?php echo $row_Detalhe["Detalhe_Descricao"]; ?>
                                                </div>
                                            </li>
                                        <?php
                                        }
                                        ?>
                                    </ol>

                                    <?php
                                    if ($row["Protocolo_Extra"] != 0) {
                                    ?>
                                        <h6 class="card-title mt-3">Observa????o</h6>
                                        <p class="card-text"><?php echo $row["Protocolo_Extra"]; ?></p>
                                    <?php
                                    }
                                    ?>

                                    <h6 class="card-tittle mt-3">Possiveis ??leos adicionais</h6>

                                    <ol class="list-group list-group">
                                        <?php
                                        while ($row_suporte = $result_protocolo_suporte->fetch_assoc()) {
                                        ?>
                                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                                <div class="ms-2 me-auto">
                                                    <a href="oleo-single.php?Oleo_ID=<?php echo $row_suporte["Oleo_ID"]; ?>" rel='noopener noreferrer' target='_blank'><?php echo ucfirst($row_suporte["Oleo_Nome"]); ?></a>
                                                </div>
                                            </li>
                                        <?php
                                        }
                                        ?>
                                    </ol>



                                </div>
                            </div>
                        </div>
                <?php
                    }
                }
                ?>
            </div>
<?php
        }
    }
}

?>

<!-- 
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
 -->

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>Oilcentral - Protocolos</title>
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
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <!-- Importar JQuery -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>


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
    .min-vh-80 {
        min-height: 80vh;
    }

    .btn-get-started {
        background: #bf46e8;
        border: 2px solid #bf46e8;
        color: #fff;
        text-decoration: none;
        transition: 0.5s;

    }

    .z-index-1 {
        z-index: 0;
    }

    .z-index-2 {
        z-index: 2;
    }

    .btn-get-started:hover {
        background-color: white;
        border: 1px, blue;
    }
</style>

<body>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Nome do Protocolo</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <h6>Sintomas</h6>
                        <p>Lista de sintomas</p>
                    </div>
                    <div class="row">
                        <h6>Sintomas</h6>
                        <p>Lista de sintomas</p>
                    </div>
                    <div class="row">
                        <h6>Sintomas</h6>
                        <p>Lista de sintomas</p>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-get-started" data-bs-dismiss="modal">Fechar</button>
                </div>
            </div>
        </div>
    </div>

    <!-- ======= Header ======= -->
    <?php
    include("estruturaPrincipal/header.php");
    ?>

    <main id="main" class="container-fluid p-0 min-vh-80">

        <!-- ======= Breadcrumbs ======= -->
        <section id="breadcrumbs" class="breadcrumbs">
            <div class="container">

                <div class="d-flex justify-content-between align-items-center">
                    <h2>Protocolos</h2>
                    <ol>
                        <li><a href="index.php">Home</a></li>
                        <li>Protocolos</li>
                    </ol>
                </div>

            </div>
        </section><!-- End Breadcrumbs -->

        <!-- ======= Portfolio Section ======= -->
        <section id="portfolio" class="portfolio">
            <div class="container" data-aos="fade">

                <!-- Barra de pesquisa -->
                <div class="row">
                    <div class="col-lg-4"></div>
                    <div class="col-lg-4 d-flex justify-content-center">
                        <form action="#" method="get" class="w-100">
                            <div class="input-group mb-3 mt-3">
                                <input type="text" class="form-control border-end-0 " name="pesquisa" placeholder="Patologia ou Sintomas associados" aria-label="Recipient's username" aria-describedby="button-addon2" value="<?php if (isset($_GET["pesquisa"])) echo $_GET["pesquisa"]; ?>">
                                <button class="btn border border-start-0 material-symbols-outlined font fs-4" type="submit" id="button-addon2">find_in_page</button>
                            </div>
                        </form>
                    </div>
                </div>

                <!-- WAZA ACABAR O DESIGN DA MODAL -->
                <!-- Lista de Protocolos -->
                <div class="row">

                    <?php
                    imprimirProtocolos();
                    ?>

                </div>

            </div>

        </section><!-- End Portfolio Section -->

    </main><!-- End #main -->

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