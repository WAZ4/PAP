<?php
include("../conectarBd.php");
session_start();
if (!(isset($_SESSION["NIVEL_UTILIZADOR"]) && $_SESSION["NIVEL_UTILIZADOR"] > 1)) header("Location: ../index.php");

function getNrInteracoes($user_ID)
{
    $conn = OpenCon();
    $sql = "SELECT COUNT(user_ID) as nrInteracoes FROM post_comentarios WHERE user_ID = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('i', $user_ID);
    $stmt->execute();
    $resultado_post_comentarios = $stmt->get_result();
    CloseCon($conn);

    return $resultado_post_comentarios->fetch_assoc()["nrInteracoes"];

    // return $nrInteracoes
}

function imprimirUtilizadores()
{
    $conn = OpenCon();
    $sql = "SELECT * FROM user";
    $stmt = $conn->prepare($sql);
    // $stmt->bind_param('is', $id_post, $_SESSION["user_ID"]);
    $stmt->execute();
    $resultado_user = $stmt->get_result();
    CloseCon($conn);

    while ($row = $resultado_user->fetch_assoc()) {

        if ($row["user_mark"] != 1) $row["user_mark"] = 0;
        $nrInteracoes = getNrInteracoes($row["user_ID"]);

        switch ($row["user_nivel"]) {
            case -1:
                $promover = 0;
                break;
            case 0:
                $promover = 1;
                break;
            case 1:
                $promover = 2;
                break;
            case 2:
                $despromover = 1;
                break;
            default:
                break;
        }

        if ($row["user_mark"] == 1) $row["user_mark"] = "Sim";
        else $row["user_mark"] = "Não";

?>
        <tr>
            <td><?php echo $row["user_nome"]; ?></td>
            <td><?php echo $row["user_email"]; ?></td>
            <td><?php echo $nrInteracoes; ?></td>
            <td><?php echo $row["user_mark"]; ?></td>
            <td><?php echo $row["user_nivel"]; ?></td>
            <td>
                <form action="#" method="post">
                    <input type="hidden" name="user_ID" value="<?php echo $row["user_ID"]; ?>">
                    <button data-toggle="tooltip" data-placement="top" title="Bloquear Utilizador" type="submit" name="acaoUtilizador" value="bloquear" class="btn btn-warning btn-circle btn-sm m-1"><i class="fas fa-ban"></i></button>
                    <?php
                    if ($row["user_nivel"] != 2) {
                    ?>
                        <input type="hidden" name="promover" value="<?php echo $promover; ?>">
                        <button data-toggle="tooltip" data-placement="top" title="Promover Utilizador" type="submit" name="acaoUtilizador" value="promover" class="btn btn-info btn-circle btn-sm m-1"><i class="fas fa-arrow-up"></i></button>
                    <?php
                    } else {
                    ?>
                        <input type="hidden" name="despromover" value="<?php echo $despromover; ?>">
                        <button data-toggle=" tooltip" data-placement="top" title="Despromover Utilizador" type="submit" name="acaoUtilizador" value="despromover" class="btn btn-info btn-circle btn-sm m-1"><i class="fas fa-arrow-down"></i></button>
                    <?php
                    }
                    ?>
                    <button data-toggle="tooltip" data-placement="top" title="Apagar Utilizador" type="submit" name="acaoUtilizador" value="apagar" class="btn btn-circle btn-danger btn-sm m-1"><i class="fas fa-trash"></i></button>
                </form>
            </td>
        </tr>
<?php
    }
}

if (isset($_POST)) {
    if (isset($_POST["acaoUtilizador"])) {
        switch ($_POST["acaoUtilizador"]) {
            case 'bloquear':
                $conn = OpenCon();
                $sql = "UPDATE user SET user.user_nivel = 0 WHERE user_ID = ?";
                $stmt = $conn->prepare($sql);
                $stmt->bind_param('i', $_POST["user_ID"]);
                $stmt->execute();
                $resultado_post_comentarios = $stmt->get_result();
                CloseCon($conn);
                break;

            case 'promover':
                $conn = OpenCon();
                $sql = "UPDATE user SET user.user_nivel = ? WHERE user_ID = ?";
                $stmt = $conn->prepare($sql);
                $stmt->bind_param('ii', $_POST["promover"], $_POST["user_ID"]);
                $stmt->execute();
                $resultado_post_comentarios = $stmt->get_result();
                CloseCon($conn);
                break;

            case 'despromover':
                $conn = OpenCon();
                $sql = "UPDATE user SET user.user_nivel = ? WHERE user_ID = ?";
                $stmt = $conn->prepare($sql);
                $stmt->bind_param('ii', $_POST["despromover"], $_POST["user_ID"]);
                $stmt->execute();
                $resultado_post_comentarios = $stmt->get_result();
                CloseCon($conn);
                break;

            case 'apagar':
                $user_ID = $_POST["user_ID"];

                $sql = "UPDATE post SET estado = 0 WHERE user_ID = ?";
                $conn = OpenCon();
                $stmt = $conn->prepare($sql);
                $stmt->bind_param("i", $user_ID);
                $stmt->execute();
                $resultado_user = $stmt->get_result();
                CloseCon($conn);

                $sql = "UPDATE user SET user_nivel = -1 WHERE user_ID = ?";
                $conn = OpenCon();
                $stmt = $conn->prepare($sql);
                $stmt->bind_param("i", $user_ID);
                $stmt->execute();
                $resultado_user = $stmt->get_result();
                CloseCon($conn);
                break;

            default:
                # code...
                break;
        }
    }
}

?>

<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>SB Admin 2 - Blank</title>

    <!-- Custom fonts for this template-->
    <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">

    <!-- Custom styles for this template-->
    <link href="css/sb-admin-2.min.css" rel="stylesheet">


    <!-- Custom styles for this page -->
    <link href="vendor/datatables/dataTables.bootstrap4.min.css" rel="stylesheet">

</head>

<body id="page-top">

    <!-- Page Wrapper -->
    <div id="wrapper">

        <?php
        include("sidebar.php");
        ?>

        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">

            <!-- Main Content -->
            <div id="content">

                <?php include("topbar.php");?>

                <!-- Begin Page Content -->
                <div class="container-fluid">

                    <div class="row">
                        <div class="col-lg-12">

                            <h1 class="h3 mb-2 text-gray-800">Gerir Utilizadores</h1>

                            <p class="">Nesta página vai conseguir gerir os Utilizadores do seu website.</p>
                        </div>
                    </div>
                    <!-- Page Heading -->

                    <div class="row">
                        <div class="col-lg-6 py-3">
                            <div class="card border-left-primary shadow h-100 py-2">
                                <a href="javascript:{}" class="stretched-link" onclick="document.getElementById('userTodos').submit();"></a> <!-- Usar este link para fazer download do ficheiro -->
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">

                                            <form action="downloadUsers.php" method="post" id="userTodos">
                                                <input type="hidden" name="tipo" value="todos">
                                            </form>
                                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                Todos os Utilizadores</div>
                                            <!-- <div class="h5 mb-0 font-weight-bold text-gray-800">$40,000</div> -->
                                            <p>Faça download de um ficeiro .csv, com todos os utilizadores</p>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fas fa-download fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 py-3">
                            <div class="card border-left-info shadow h-100 py-2">
                                <a href="javascript:{}" class="stretched-link" onclick="document.getElementById('userNewsletter').submit();"></a> <!-- Usar este link para fazer download do ficheiro -->
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <form action="downloadUsers.php" method="post" id="userNewsletter">
                                                <input type="hidden" name="tipo" value="newsletter">
                                            </form>
                                            <div class="text-xs font-weight-bold text-info text-uppercase mb-1">
                                                Utilizadores com Newsletter</div>
                                            <!-- <div class="h5 mb-0 font-weight-bold text-gray-800">$40,000</div> -->
                                            <p>Faça download de um ficeiro .csv, com todos os utilizadores que querem receber a sua newsletter</p>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fas fa-envelope fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col">
                            <div class="card shadow mb-4">
                                <!-- Card Header - Accordion -->
                                <a href="#collapseCardExample" class="d-block card-header py-3 collapsed" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseCardExample">
                                    <h6 class="m-0 font-weight-bold text-primary">Legenda de ícones</h6>
                                </a>
                                <!-- Card Content - Collapse -->
                                <div class="collapse" id="collapseCardExample">
                                    <div class="card-body text-center">
                                        <div class="row">
                                            <div class="col-lg-3">
                                                <a class="btn btn-circle btn-sm btn-warning m-1"><i class="fas fa-ban"></i></a>
                                                - Tornar Post invisível
                                            </div>
                                            <div class="col-lg-3">
                                                <a class="btn btn-circle btn-sm btn-warning m-1"><i class="fas fa-arrow-up"></i></a>
                                                - Tornar Post visível
                                            </div>
                                            <div class="col-lg-3">
                                                <a class="btn btn-circle btn-sm btn-info m-1"><i class="fas fa-arrow-down"></i></a>
                                                - Editar conteúdo do Post
                                            </div>
                                            <div class="col-lg-3">
                                                <a class="btn btn-circle btn-sm btn-danger m-1"><i class="fas fa-trash"></i></a>
                                                - Apagar Post
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Content Row -->
                    <div class="row">

                        <!-- Area Chart -->
                        <div class="col-xl-12 col-lg-12">
                            <!-- DataTales Example -->
                            <div class="card shadow mb-4">
                                <!-- <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary"> Utilizador</h6>
                                </div> -->
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                            <thead>
                                                <tr>
                                                    <th>Nome</th>
                                                    <th>Email</th>
                                                    <th>Nrº de interações</th>
                                                    <th>Newsletter</th>
                                                    <th>Nivel</th>
                                                    <th>Ações</th>
                                                </tr>
                                            </thead>
                                            <!-- <tfoot>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Position</th>
                                                    <th>Office</th>
                                                    <th>Age</th>
                                                    <th>Start date</th>
                                                    <th>Salary</th>
                                                </tr>
                                            </tfoot> -->
                                            <tbody>
                                                <?php imprimirUtilizadores(); ?>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
                <!-- /.container-fluid -->

            </div>
            <!-- End of Main Content -->

            <?php include("footer.php"); ?>

        </div>
        <!-- End of Content Wrapper -->

    </div>
    <!-- End of Page Wrapper -->

    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
    </a>

    <!-- Logout Modal-->
    <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                    <a class="btn btn-primary" href="login.html">Logout</a>
                </div>
            </div>
        </div>
    </div>

    <!-- Bootstrap core JavaScript-->
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

    <!-- Core plugin JavaScript-->
    <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

    <!-- Custom scripts for all pages-->
    <script src="js/sb-admin-2.min.js"></script>

    <!-- Chart-->
    <!-- Page level plugins -->
    <script src="vendor/datatables/jquery.dataTables.min.js"></script>
    <script src="vendor/datatables/dataTables.bootstrap4.min.js"></script>

    <!-- Page level custom scripts -->
    <script src="js/demo/datatables-demo.js"></script>

    <!-- Table -->
    <!-- Page level plugins -->
    <script src="vendor/chart.js/Chart.min.js"></script>

    <!-- Page level custom scripts -->
    <script src="js/demo/chart-area-demo.js"></script>
    <script src="js/demo/chart-pie-demo.js"></script>

</body>

</html>