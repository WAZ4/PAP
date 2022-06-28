<?php
include("../conectarBd.php");
$tipo = 0;
$hash = "";
$erro = "";

session_start();

if (isset($_SESSION["user_email"]) || isset($_SESSION["user_nome"]) || isset($_SESSION["NIVEL_UTILIZADOR"])) header("Location: ../index.php");


if (isset($_POST["formSubmit"]) && $_POST["formSubmit"] == "alterarPassword") {
    if (($npassword1 = strip_tags(trim($_POST["novapassword1"]))) == ($npassword1 = strip_tags(trim($_POST["novapassword2"])))) {
        var_dump(($npassword1 = strip_tags(trim($_POST["novapassword1"]))) == ($npassword1 = strip_tags(trim($_POST["novapassword2"]))));
        $passwd = password_hash($npassword1, PASSWORD_DEFAULT);
        $hash = $_POST["hash"];
        $sql = "UPDATE user SET user_password = ?, user_hash = '' WHERE user_hash = ?";
        $conn = OpenCon();
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ss", $passwd, $hash);
        $stmt->execute();
        $resultado_user = $stmt->get_result();
        CloseCon($conn);

        header("Location: ../login/");
    } else {
        $erro = "Passwords não coincidem.";
    }
}

if (isset($_POST["user_email"])) {

    $email = strip_tags(trim($_POST["user_email"]));

    $sql = "SELECT * FROM user WHERE user_email = ?";
    $conn = OpenCon();
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $resultado_user = $stmt->get_result();
    CloseCon($conn);
    var_dump($resultado_user);
    if ($resultado_user->num_rows != 0 && $row = $resultado_user->fetch_assoc()["user_hash"] == "") {

        $hash = md5(uniqid(rand()));

        $sql = "UPDATE user SET user_hash = ? WHERE user_email = ?";
        $conn = OpenCon();
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ss", $hash, $email);
        $stmt->execute();
        $resultado_user = $stmt->get_result();
        CloseCon($conn);

        header("Location: paginaTemporaria.php?temp=" . $hash);
    }
}

if (isset($_GET["hash"])) {
    $hash = strip_tags($_GET["hash"]);

    $sql = "SELECT * FROM user WHERE user_hash= ?";
    $conn = OpenCon();
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $hash);
    $stmt->execute();
    $resultado_user = $stmt->get_result();
    CloseCon($conn);

    if ($resultado_user->num_rows != 0) {
        $tipo = 1;
    }
}


?>
<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title> Free Stylish Login Page Website Template | Smarteyeapps.com</title>

    <link rel="shortcut icon" href="assets/images/fav.jpg">
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/css/fontawsom-all.min.css">
    <link rel="stylesheet" type="text/css" href="assets/css/style.css" />
</head>

<body>
    <div class="container-fluid conya">
        <div class="side-left">
            <div class="sid-layy">
                <div class="row slid-roo">
                    <div class="data-portion">
                        <h2>Manage Your orders</h2>
                        <p>Ao criar uma conta na OilCentral, vai poder interagir com a nossa comunidade e guardar publicações e oleos para conseguir encontrar-los mais facilmente da proxima vez que os procurar. </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="side-right">

            <form action="#">
                <a href="../index.php" style="font-size: 2rem;"><span style="color: #bf46e8">Oil</span>Central</a>

                <h2>Recuperar Palavra-passe</h2>

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

                <?php
                if ($tipo == 0) {
                ?>
                    <p class="pb-4">Introduza o email associado à sua conta, se existir na nossa base de dados irá receber um email para criar uma nova palavra-passe</p>
                    <form action="#" method="post">

                        <div class="form-row">
                            <label for="">Email</label>
                            <input type="email" placeholder="nome@oilcentral.com" class="form-control form-control-sm" name="user_email" required>
                        </div>


                        <div class="form-row dfr">
                            <button class="btn btn-sm btn-success" type="submit" formmethod="post" >Recuperar Palavra-passe</button>
                        </div>
                    </form>

            </form>
        <?php
                } else {
        ?>

            <p class="pb-4">Introduza a nova palavra passe</p>

            <form action="#" method="post">

                <input type="hidden" name="hash" value="<?php echo $hash; ?>">
                <input type="hidden" name="formSubmit" value="alterarPassword">

                <div class="form-row">
                    <label for="">Nova palavra-passe</label>
                    <input type="password" placeholder="Palavra-passe" class="form-control form-control-sm" name="novapassword1" required>
                </div>

                <div class="form-row">
                    <label for="">Repetir nova palavra-passe</label>
                    <input type="password" placeholder="Repetir nova palavra-passe" class="form-control form-control-sm" name="novapassword2" required>
                </div>


                <div class="form-row dfr">
                    <button class="btn btn-sm btn-success" formmethod="post" submit>Recuperar Palavra-passe</button>
                </div>
            </form>

        <?php
                }
        ?>
        <div class="copyco">
            <p>Copyrigh 2022 @ oilcentral.com</p>
        </div>
        </div>
</body>

<script src="assets/js/jquery-3.2.1.min.js"></script>
<script src="assets/js/popper.min.js"></script>
<script src="assets/js/bootstrap.min.js"></script>
<script src="assets/js/script.js"></script>


</html>