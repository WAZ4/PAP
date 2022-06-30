<?php
include("conectarBd.php");
session_start();

$erro = "";
$sucesso = "";

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
        if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
            return $target_file;
            // echo "The file " . htmlspecialchars(basename($_FILES["fileToUpload"]["name"])) . " has been uploaded.";
        } else {
            return 0;
            $erro = "Sorry, there was an error uploading your file.";
        }
    }
}

if (isset($_POST["formsubmit"])) {
    switch ($_POST["formsubmit"]) {
        case 'alterarMarketing':
            $sql = "UPDATE user SET user_mark = ? WHERE user_ID = ?";
            $conn = OpenCon();
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("ii", $_POST["novoValor"], $_SESSION["user_ID"]);
            $stmt->execute();
            $resultado_user = $stmt->get_result();
            CloseCon($conn);

            $_SESSION["user_mark"] = $_POST["novoValor"];

            break;

        case 'alterarNome':
            if (password_verify($_POST["password"], $_SESSION["user_password"]) && strip_tags(trim($_POST["novonome1"])) == strip_tags(trim($_POST["novonome2"])) && strip_tags(trim($_POST["novonome1"])) > 2) {
                $novoNome = $_POST["novonome1"];

                $sql = "UPDATE user SET user_nome = ? WHERE user_ID = ?";
                $conn = OpenCon();
                $stmt = $conn->prepare($sql);
                $stmt->bind_param("si", $novoNome, $_SESSION["user_ID"]);
                $stmt->execute();
                $resultado_user = $stmt->get_result();
                CloseCon($conn);

                $_SESSION["user_nome"] = $novoNome;

                $sucesso = "Nome alterado com sucesso";
            } else {
                $erro = "Dados Incorretos";
            }

            break;

        case 'alterarPassword':
            if (password_verify($_POST["password"], $_SESSION["user_password"]) && trim($_POST["novapassword1"]) == trim($_POST["novapassword2"])) {

                $novaPassword = password_hash($_POST["novapassword1"], PASSWORD_DEFAULT);

                $sql = "UPDATE user SET user_password = ? WHERE user_ID = ?";
                $conn = OpenCon();
                $stmt = $conn->prepare($sql);
                $stmt->bind_param("si", $novaPassword, $_SESSION["user_ID"]);
                $stmt->execute();
                $resultado_user = $stmt->get_result();
                CloseCon($conn);

                $_SESSION["user_password"] = $novaPassword;

                $sucesso = "Palavra-passe alterada com sucesso";
            } else {
                $erro = "Dados Incorretos";
            }
            break;

        case 'apagarConta':
            $user_ID = $_SESSION["user_ID"];

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

            header("Location: encerrarSessao.php");

            break;
        case 'alterarImagem':
            $imgUrl = uniqid(time());;

            if (($imgUrl = inserirImagem($imgUrl)) != True) {
                return;
            }

            $sql = "UPDATE user SET user_img = ? WHERE user_ID = ?";
            $conn = OpenCon();
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("si", $imgUrl, $_SESSION["user_ID"]);
            $stmt->execute();
            $resultado_user = $stmt->get_result();
            CloseCon($conn);

            $_SESSION["user_img"] = $imgUrl;

            $sucesso = "Imagem alterada com sucesso";
            break;
        default:
            # code...
            break;
    }
}

$novoValor = 1 - $_SESSION["user_mark"];
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>Services - Company Bootstrap Template</title>
    <meta content="" name="description">
    <meta content="" name="keywords">

    <!-- Favicons -->
    <link href="assets/img/favicon.png" rel="icon">
    <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

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
    <style>
        .btn-color-principal {
            color: #bf46e8;
            border-color: #bf46e8;
        }

        .btn-color-principal:hover,
        .btn-color-principal:active {
            background-color: #bf46e8;
            color: white;
            border: #bf46e8;
        }
    </style>
</head>

<body>

    <?php
    include("estruturaPrincipal/header.php");
    ?>

    <main id="main">

        <section id="contact" class="contact mt-5">
            <div class="container">

                <div class="row justify-content-center aos-init aos-animate" data-aos="fade-up">

                    <div class="col-lg-10">

                        <div class="info-wrap">
                            <div class="row">
                                <div class="col-lg-4 info">
                                    <img src="<?php echo $_SESSION["user_img"]; ?>" class="img-fluid rounded-cricle" style="max-height: 200px">
                                </div>

                                <div class="col-lg-4 mt-4 mt-lg-0">

                                    <div class="info">
                                        <i class="bi bi-person-fill"></i>
                                        <h4>Nome:</h4>
                                        <p><?php echo $_SESSION["user_nome"]; ?></p>
                                    </div>
                                    <br>
                                    <div class="info">
                                        <i class="bi bi-envelope"></i>
                                        <h4>Email:</h4>
                                        <p><?php echo $_SESSION["user_email"]; ?></p>
                                    </div>
                                </div>

                                <div class="col-lg-4 info mt-4 mt-lg-0 h-100">
                                    <div class="row h-100">
                                        <form id="checkboxform" action="#" method="post">
                                            <input type="hidden" name="formsubmit" value="alterarMarketing">
                                            <div class="m-3">
                                                <input type="hidden" name="novoValor" value="<?php echo $novoValor ?>">
                                                <input type="checkbox" name="marketing" onchange="document.getElementById('checkboxform').submit()" <?php if ($_SESSION["user_mark"] == 1) echo "checked"; ?>>
                                                <label for="marketing"> Newsletter de promoções e eventos</label>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="row">
                                        <form action="encerrarSessao.php">
                                            <a class="btn btn-outline-primary btn-color-principal w-100" href="encerrarSessao.php">Encerrar Sessão</a>
                                        </form>

                                        <form action="#" method="post" id="formApagarConta">
                                            <input type="hidden" name="formsubmit" value="apagarConta">
                                            <a class="form-control btn btn-outline-danger  w-100 mt-2" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Apagar Conta</a>
                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <!-- <div class="row">
                    <h2>POST</h2>
                    <?php
                    // var_dump($_POST);
                    ?>
                    <h2>SESSION</h2>
                    <?php
                    // var_dump($_SESSION);
                    ?>
                </div> -->

                <div class="row mt-5 justify-content-center aos-init aos-animate" data-aos="fade-up">
                    <div class="col-lg-10">

                        <div class="info-wrap">
                            <div class="row">
                                <div class="col">
                                    <?php if ($erro != "") { ?>
                                        <div class="alert alert-danger alert-dismissible fade show" role="alert">
                                            <?php echo $erro; ?>
                                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                        </div>
                                    <?php
                                    }
                                    ?>
                                    <?php if ($sucesso != "") { ?>
                                        <div class="alert alert-success alert-dismissible fade show" role="alert">
                                            <?php echo $sucesso; ?>
                                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                        </div>
                                    <?php
                                    }
                                    ?>
                                    <div id="accordion">
                                        <div class="card">
                                            <div class="card-header" id="headingOne" style="transform: rotate(0);">
                                                <h5 class="mb-0">
                                                    <a class="fs-6 stretched-link text-decoration-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                                        Alterar Nome
                                                    </a>
                                                </h5>
                                            </div>

                                            <div class="collapse" id="collapseExample">
                                                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                                    <div class="card-body">
                                                        <div class="card card-body">
                                                            <form action="#" method="post">
                                                                <input type="hidden" name="formsubmit" value="alterarNome">
                                                                <div class="mb-3">
                                                                    <label for="exampleInputEmail1" class="form-label">Novo nome</label>
                                                                    <input type="text" class="form-control" name="novonome1" required>
                                                                </div>

                                                                <div class="mb-3">
                                                                    <label for="exampleInputEmail1" class="form-label">Repetir novo nome</label>
                                                                    <input type="text" class="form-control" name="novonome2" required>
                                                                </div>

                                                                <div class="mb-3">
                                                                    <label for="exampleInputPassword1" class="form-label">Palavra-passe</label>
                                                                    <input type="password" class="form-control" name="password" required>
                                                                </div>
                                                                <button type="submit" class="btn btn-primary">Alterar</button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card mt-2">
                                            <div class="card-header" id="headingOne" style="transform: rotate(0);">
                                                <h5 class="mb-0">
                                                    <a class="fs-6 stretched-link text-decoration-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1">
                                                        Alterar Palavra-passe
                                                    </a>
                                                </h5>
                                            </div>

                                            <div class="collapse" id="collapseExample1">
                                                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                                    <div class="card-body">
                                                        <div class="card card-body">
                                                            <form action="#" method="POST">
                                                                <input type="hidden" name="formsubmit" value="alterarPassword">
                                                                <div class="mb-3">
                                                                    <label for="exampleInputEmail1" class="form-label">Nova palavra-passe</label>
                                                                    <input type="password" class="form-control" name="novapassword1" required>
                                                                </div>

                                                                <div class="mb-3">
                                                                    <label for="exampleInputEmail1" class="form-label">Repetir a nova palavra-passe</label>
                                                                    <input type="password" class="form-control" name="novapassword2" required>
                                                                </div>

                                                                <div class="mb-3">
                                                                    <label for="exampleInputPassword1" class="form-label">Palavra-passe</label>
                                                                    <input type="password" class="form-control" name="password" required>
                                                                </div>
                                                                <button type="submit" class="btn btn-primary">Alterar</button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        <div class="card mt-2">
                                            <div class="card-header" id="headingOne" style="transform: rotate(0);">
                                                <h5 class="mb-0">
                                                    <a class="fs-6 stretched-link text-decoration-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
                                                        Alterar Imagem de Perfil
                                                    </a>
                                                </h5>
                                            </div>

                                            <div class="collapse" id="collapseExample2">
                                                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                                    <div class="card-body">
                                                        <div class="card card-body">
                                                            <form action="#" method="POST" enctype="multipart/form-data">
                                                                <input type="hidden" name="formsubmit" value="alterarImagem">
                                                                <div class="mb-3">
                                                                    <label for="exampleInputEmail1" class="form-label">Imagem:</label>
                                                                    <input type="file" class="form-control" name="fileToUpload" required>
                                                                </div>

                                                                <button type="submit" class="btn btn-primary">Alterar</button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>

    </main>
    <!-- End #main -->

    <!-- ======= Footer ======= -->
    <footer id="footer">

        <div class="footer-top">
            <div class="container">
                <div class="row">

                    <div class="col-lg-3 col-md-6 footer-contact">
                        <h3>Company</h3>
                        <p>
                            A108 Adam Street <br> New York, NY 535022<br> United States <br><br>
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
    </footer>
    <!-- End Footer -->

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

    <!-- Modal Apagar Conta -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Apagar Conta</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>
                        Tem a certeza que pretende terminar a sua conta? Esta ação é defenitiva e irreversivel. <br>
                        Não será possivel recuperar a sua conta ou o conteudo associado.
                    </p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" class="btn btn-danger" onclick="document.getElementById('formApagarConta').submit();">Apagar Conta</button>
                </div>
            </div>
        </div>
    </div>

</body>

</html>