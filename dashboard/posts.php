<?php
include("../conectarBd.php");
session_start();
if (!(isset($_SESSION["NIVEL_UTILIZADOR"]) && $_SESSION["NIVEL_UTILIZADOR"] > 1)) header("Location: ../index.php");

// var_dump($_POST);

function dataParaPortugues($data)
{
    // jan. fev. mar. abr. maio jun. jul. ago. set. out. nov. dez.
    $mesesPt = array('01' => "jan", '02' => "fev", '03' => "mar", '04' => "abr", '05' => "maio", '06' => "jun", '07' => "jul", '08' => "ago", '09' => "set", '10' => "out", '11' => 'nov', '12' => "dez");
    $mesIng = substr($data, 0, 2);
    $mes = $mesesPt[$mesIng] . substr($data, 2, strlen($data) - 2);
    return $mes;
}

function postsHoje()
{
    $data = gmdate("m d, Y", time());
    $dataPT = dataParaPortugues($data);

    $conn = OpenCon();
    $stmt = $conn->prepare("SELECT COUNT(`timestamp`) as postsHoje FROM post WHERE timestamp = ?");
    $stmt->bind_param("s", $dataPT);
    $stmt->execute();
    $resultado_post = $stmt->get_result();
    $stmt->free_result();
    $stmt->close();

    return $resultado_post->fetch_assoc()["postsHoje"];
}

function postsMensal()
{
    $data = gmdate("m", time());
    $dataPT = dataParaPortugues($data);


    $dataPT = "%" . $dataPT . "%";

    $conn = OpenCon();
    $stmt = $conn->prepare("SELECT COUNT(`timestamp`) as postsMes FROM post WHERE timestamp LIKE ?");
    $stmt->bind_param("s", $dataPT);
    $stmt->execute();
    $resultado_post = $stmt->get_result();
    $stmt->free_result();
    $stmt->close();

    return $resultado_post->fetch_assoc()["postsMes"];
}

function postsDenuncias()
{
    $conn = OpenCon();
    $stmt = $conn->prepare("SELECT COUNT(*) as nrDenuncias FROM post_denuncia WHERE estado = 0");
    $stmt->execute();
    $resultado_post_denuncia = $stmt->get_result();
    $stmt->free_result();
    $stmt->close();

    return $resultado_post_denuncia->fetch_assoc()["nrDenuncias"];
}

function imprimirPosts()
{
    $conn = OpenCon();
    $sql = "SELECT post.*, post_categoria.Categoria_Nome, user.user_nome FROM post RIGHT JOIN post_categoria ON post.categoria = post_categoria.Categoria_ID INNER JOIN user ON post.user_ID = user.user_ID";
    $stmt = $conn->prepare($sql);
    // $stmt->bind_param('i', $user_ID);
    $stmt->execute();
    $resultado_post = $stmt->get_result();
    CloseCon($conn);

    while ($row = $resultado_post->fetch_assoc()) {
        switch ($row["estado"]) {
            case 0:
                $estado = "Invisível";
                break;

            case 1:
                $estado = "Visível";
                break;

            default:
                break;
        }
?>
        <tr>
            <td><a href="../post-single.php?id_post=<?php echo $row["id_post"] ?>" target="_blank"><?php echo $row["titulo"]; ?></a></td>
            <td><?php echo $row["user_nome"]; ?></td>
            <td><?php echo $row["Categoria_Nome"]; ?></td>
            <td><?php echo $row["timestamp"]; ?></td>
            <td><?php echo $estado; ?></td>
            <td>
                <form action="#" method="post" class="mb-0 p-0">
                    <input type="hidden" name="id_post" value="<?php echo $row["id_post"]; ?>">
                    <?php
                    if ($row["estado"] == 1) {
                    ?>

                        <button type="submit" class="btn btn-circle btn-sm btn-warning m-1" name="acaoPost" value="fazerInvisivel"><i class="fas fa-eye-slash"></i></button>
                    <?php
                    } else {
                    ?>
                        <button type="submit" class="btn btn-circle btn-sm btn-warning m-1" name="acaoPost" value="fazerVisivel"><i class="fas fa-eye"></i></button>
                    <?php
                    }
                    ?>
                    <a href="../post-editar.php?id_post=<?php echo $row["id_post"]; ?>" target="_blank" class="btn btn-circle btn-sm btn-info m-1" name="acaoPost" value="fazerVisivel"><i class="fas fa-pen"></i></a>
                    <button type="submit" class="btn btn-circle btn-sm btn-danger m-1" name="acaoPost" value="apagarPost"><i class="fas fa-trash"></i></button>
                </form>
            </td>
        </tr>
    <?php
    }
}

function imprimirCategorias()
{
    $conn = OpenCon();
    $sql = "SELECT * FROM post_categoria";
    $stmt = $conn->prepare($sql);
    // $stmt->bind_param('i', $user_ID);
    $stmt->execute();
    $resultado_post_categoria = $stmt->get_result();
    CloseCon($conn);

    while ($row = $resultado_post_categoria->fetch_assoc()) {
    ?>
        <tr>
            <td><?php echo $row["Categoria_Nome"]; ?></td>
            <td class="text-center">
                <form action="#" method="POST" class="m-0">
                    <input type="hidden" name="Categoria_ID" value="<?php echo  $row["Categoria_ID"]; ?>">
                    <button type="submit" class="btn btn-circle btn-danger btn-sm" name="acaoCategoria" value="removerCategoria"><i class="fas fa-trash"></i></button>
                </form>
            </td>
        </tr>
    <?php
    }
}

function imprimirDenuncias()
{
    $conn = OpenCon();
    $sql = "SELECT user.user_nome, user.user_email, post.titulo, post_denuncia.id_post, post_denuncia.user_ID, post_denuncia.razao, post_denuncia.estado FROM post_denuncia INNER JOIN user ON post_denuncia.user_ID = user.user_ID INNER JOIN post ON post_denuncia.id_post = post.id_post WHERE post_denuncia.estado = 0";
    $stmt = $conn->prepare($sql);
    // $stmt->bind_param('i', $user_ID);
    $stmt->execute();
    $resultado_post_denuncia = $stmt->get_result();
    CloseCon($conn);

    while ($row = $resultado_post_denuncia->fetch_assoc()) {
    ?>
        <tr>
            <td><?php echo $row["user_nome"]; ?></td>
            <td><?php echo $row["user_email"]; ?></td>
            <td><?php echo $row["titulo"]; ?></td>
            <td><?php echo $row["razao"]; ?></td>
            <td class="text-center">
                <form action="#" method="POST" class="m-0">
                    <input type="hidden" name="user_ID" value="<?php echo  $row["user_ID"]; ?>">
                    <input type="hidden" name="id_post" value="<?php echo $row["id_post"] ?>">
                    <button type="submit" class="btn btn-circle btn-success btn-sm" name="acaoDenuncia" value="verificarDenuncia"><i class="fas fa-check"></i></button>
                </form>
            </td>
        </tr>
<?php
    }
}


if (isset($_POST["acaoPost"])) {
    switch ($_POST["acaoPost"]) {
        case 'fazerInvisivel':
            $conn = OpenCon();
            $sql = "UPDATE post SET post.estado = 0 WHERE post.id_post = ?";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param('i', $_POST["id_post"]);
            $stmt->execute();
            $resultado_post = $stmt->get_result();
            CloseCon($conn);
            break;

        case 'fazerVisivel':
            $conn = OpenCon();
            $sql = "UPDATE post SET post.estado = 1 WHERE post.id_post = ?";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param('i', $_POST["id_post"]);
            $stmt->execute();
            $resultado_post = $stmt->get_result();
            CloseCon($conn);
            break;

        case 'apagarPost':
            $conn = OpenCon();
            $sql = "DELETE FROM post WHERE id_post = ?";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param('i', $_POST["id_post"]);
            $stmt->execute();
            $resultado_post = $stmt->get_result();
            CloseCon($conn);

            $conn = OpenCon();
            $sql = "DELETE FROM post_comentarios WHERE id_post = ?";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param('i', $_POST["id_post"]);
            $stmt->execute();
            $resultado_post = $stmt->get_result();
            CloseCon($conn);
            break;

        default:
            # code...
            break;
    }
} else if (isset($_POST["acaoCategoria"])) {
    switch ($_POST["acaoCategoria"]) {
        case 'adicionarCategoria':
            $conn = OpenCon();
            $sql = "INSERT INTO post_categoria(Categoria_Nome) VALUES (?)";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param('s', $_POST["Categoria_Nome"]);
            $stmt->execute();
            $resultado_post = $stmt->get_result();
            CloseCon($conn);
            break;
        case 'removerCategoria':
            $conn = OpenCon();
            $sql = "DELETE FROM post_categoria WHERE Categoria_ID = ?";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param('i', $_POST["Categoria_ID"]);
            $stmt->execute();
            $resultado_post = $stmt->get_result();
            CloseCon($conn);
            break;
        default:
            # code...
            break;
    }
} else if (isset($_POST["acaoDenuncia"])) {
    switch ($_POST["acaoDenuncia"]) {
        case 'verificarDenuncia':
            $conn = OpenCon();
            $sql = "UPDATE post_denuncia SET estado = 1 WHERE user_ID = ? AND id_post = ?";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param('ii', $_POST["user_ID"], $_POST["id_post"]);
            $stmt->execute();
            $resultado_post = $stmt->get_result();

            CloseCon($conn);
            break;

        default:
            # code...
            break;
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

                <?php include("topbar.php"); ?>

                <!-- Begin Page Content -->
                <div class="container-fluid mt-3">

                    <div class="row">
                        <div class="col-lg-12">
                            <h1 class="h3 mb-2 text-gray-800">Gerir Post's</h1>
                            <p class="mb-4">Nesta página vai conseguir gerir os Post's do seu website.</p>
                        </div>
                    </div>

                    <!-- Content Row -->
                    <div class="row">

                        <div class="col-lg-4 my-lg-4 my-2">
                            <div class="card border-left-primary shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                Novos Posts (Hoje)</div>
                                            <div class="h5 mb-0 font-weight-bold text-gray-800"><?php echo postsHoje(); ?></div>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fas fa-clock fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 my-lg-4 my-2">
                            <div class="card border-left-success shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                Novos Posts (Mes)</div>
                                            <div class="h5 mb-0 font-weight-bold text-gray-800"><?php echo postsMensal(); ?></div>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fas fa-calendar fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 my-lg-4 my-2">
                            <div class="card border-left-danger shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-info text-uppercase mb-1">Denuncias
                                            </div>
                                            <div class="row no-gutters align-items-center">
                                                <div class="col-auto">
                                                    <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800"><?php echo postsDenuncias(); ?></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fas fa-exclamation fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-12">

                            <!-- Page Heading -->

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
                                                <a class="btn btn-circle btn-sm btn-warning m-1"><i class="fas fa-eye-slash"></i></a>
                                                - Tornar Post invisível
                                            </div>
                                            <div class="col-lg-3">
                                                <a class="btn btn-circle btn-sm btn-warning m-1"><i class="fas fa-eye"></i></a>
                                                - Tornar Post visível
                                            </div>
                                            <div class="col-lg-3">
                                                <a class="btn btn-circle btn-sm btn-info m-1"><i class="fas fa-pen"></i></a>
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

                            <!-- DataTales Example -->
                            <div class="card shadow mb-4">
                                <!-- <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                                </div> -->
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                            <thead>
                                                <tr>
                                                    <th>Titulo</th>
                                                    <th>Criador</th>
                                                    <th>Categoria</th>
                                                    <th>Data de Criação</th>
                                                    <th>Estado</th>
                                                    <th class="w-auto">Ações</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <?php imprimirPosts(); ?>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-6">
                            <!-- Collapsable Card Example -->
                            <div class="card shadow mb-4">
                                <!-- Card Header - Accordion -->
                                <a href="#collapseCardExample1" class="d-block card-header py-3 collapsed" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseCardExample1">
                                    <h6 class="m-0 font-weight-bold text-info">Categorias</h6>
                                </a>
                                <!-- Card Content - Collapse -->
                                <div class="collapse" id="collapseCardExample1">
                                    <div class="card-body">

                                        <div>
                                            <h5>Adicionar Categoria</h5>
                                            <form action="#" method="post">
                                                <div class="input-group mb-3">
                                                    <input type="text" class="form-control" placeholder="Nome da nova categoria" name="Categoria_Nome" required>
                                                    <button class="btn btn-outline-secondary" type="submit" name="acaoCategoria" value="adicionarCategoria"><i class="fas fa-plus"></i></button>
                                                </div>
                                            </form>
                                        </div>

                                        <hr>

                                        <div class="table-responsive">
                                            <table class="table table-bordered" id="dataTable1" width="100%" cellspacing="0">
                                                <thead>
                                                    <tr>
                                                        <th class="w-100">Nome da categoria</th>
                                                        <th class="m-1">Ação</th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    <?php imprimirCategorias(); ?>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <!-- Collapsable Card Example -->
                            <div class="card shadow mb-4">
                                <!-- Card Header - Accordion -->
                                <a href="#collapseCardExample2" class="d-block card-header py-3 collapsed" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseCardExample2">
                                    <h6 class="m-0 font-weight-bold text-danger">Denúncias</h6>
                                </a>
                                <!-- Card Content - Collapse -->
                                <div class="collapse" id="collapseCardExample2">
                                    <div class="card-body">
                                        <div class="table-responsive">
                                            <table class="table table-bordered text-start" id="dataTable2" width="100%" cellspacing="0">
                                                <thead>
                                                    <tr>
                                                        <th>Utilizador</th>
                                                        <th>Email</th>
                                                        <th>Post denúnciado</th>
                                                        <th class="w-100">Razão</th>
                                                        <th class="w-auto text-center">Ações</th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    <?php imprimirDenuncias(); ?>
                                                </tbody>
                                            </table>
                                        </div>
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
                        <span aria-hidden="true">x</span>
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

    <!-- Page level plugins -->
    <script src="vendor/datatables/jquery.dataTables.min.js"></script>
    <script src="vendor/datatables/dataTables.bootstrap4.min.js"></script>

    <!-- Page level custom scripts -->
    <script src="js/demo/datatables-demo.js"></script>

    <script>
        //Ativar no se for necessario paginacao na zona das categorias caso contrario evitar, porque a interface fica muito poluida
        // $(document).ready(function() {
        //     $('#dataTable1').DataTable();
        // });

        $(document).ready(function() {
            $('#dataTable2').DataTable({
                ordering: false,
            });
        });
    </script>

</body>

</html>