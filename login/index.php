<?php
include("../conectarBd.php");
session_start();
if (isset($_SESSION["user_email"]) || isset($_SESSION["user_nome"]) || isset($_SESSION["NIVEL_UTILIZADOR"])) header("Location: ../index.php");

$erro = "";
$sucesso = "";

function verificarLogin($email, $password)
{
    global $erro;

    $username = strip_tags(trim($email));
    $password = strip_tags(trim($password));

    $sql = "SELECT * FROM user WHERE user_email = ?";
    $conn = OpenCon();
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $resultado_user = $stmt->get_result();
    CloseCon($conn);

    if ($resultado_user->num_rows != 0) {

        $row = $resultado_user->fetch_assoc();
        if ($row["user_nivel"] == 0 && ($row["user_hash"] == "" || $row["user_hash"] == null)) {
            $erro = "A sua conta foi bloqueada, por favor entre em <a href='../contacto.php'>contacto connosco </a>para resolver a situação.";
        } else if ($row["user_nivel"] == 0) {
            $erro = "Para iniciar sessão precisa de ativar a conta.";
        } else if ($row["user_email"] == $email && password_verify($password, $row["user_password"])) {
            $_SESSION["user_password"] = $row["user_password"];
            $_SESSION["user_ID"] = $row["user_ID"];
            $_SESSION["user_email"] = $email;
            $_SESSION["user_img"] = $row["user_img"];
            $_SESSION["user_nome"] = $row["user_nome"];
            $_SESSION["NIVEL_UTILIZADOR"] = $row["user_nivel"];
            $_SESSION["user_mark"] = $row["user_mark"];

            header("Location: ../index.php");
            return;
        } else {
            $erro = "Dados Incorretos";
        }
    }
}

if (isset($_POST["formLogin"])) {
    verificarLogin($_POST["email"], $_POST["password"]);
}

?>
<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Login</title>

    <!-- Favicons -->
    <link rel="apple-touch-icon" sizes="180x180" href="../imgs/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../imgs/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../imgs/favicon/favicon-16x16.png">
    <link rel="manifest" href="../imgs/favicon/site.webmanifest">
    <link rel="mask-icon" href="../imgs/favicon/safari-pinned-tab.svg" color="#bf46e8">
    <link rel="shortcut icon" href="../imgs/favicon/favicon.ico">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="msapplication-config" content="../imgs/favicon/browserconfig.xml">
    <meta name="theme-color" content="#ffffff">

    <link rel="stylesheet" href="../assetsLogin/css/bootstrap.min.css">
    <link rel="stylesheet" href="../assetsLogin/css/fontawsom-all.min.css">
    <link rel="stylesheet" type="text/css" href="../assetsLogin/css/style.css" />
</head>

<body>
    <div class="container-fluid conya">
        <div class="side-left">
            <div class="sid-layy">
                <div class="row slid-roo">
                    <div class="data-portion">
                        <h2>Inicie Sessão</h2>
                        <p>Ao iniciar sessão na OilCentral, vai poder interagir com a nossa comunidade e criar as suas próprias publicações. </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="side-right">
            <form action="#" method="post">

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

                if ($sucesso != "") {
                ?>
                    <div class="alert alert-success alert-dismissible fade show w-100" role="alert">
                        <?php echo $sucesso; ?>
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                <?php
                }
                ?>

                <input type="hidden" name="formLogin">

                <a href="../index.php" style="font-size: 2rem;"><span style="color: #bf46e8">Oil</span>Central</a>

                <h2>Faça login na sua conta</h2>

                <div class="form-row">
                    <label for="">Email</label>
                    <input type="email" placeholder="email@oilcentral.pt" class="form-control form-control-sm" name="email">
                </div>

                <div class="form-row">
                    <label for="">Password</label>
                    <input type="password" placeholder="Password" class="form-control form-control-sm" name="password">
                </div>

                <div class="form-row row skjh">
                    <div class="col-7 left no-padding">
                        <input type="checkbox"> Lembrar-me neste dispositivo
                        <!-- Perguntar ao professor a linguagem -->
                    </div>
                    <div class="col-5">
                        <span> <a href="../recuperarPassword/">Recuperar Palavra-passe ?</a></span>
                    </div>


                </div>


                <div class="form-row dfr">
                    <button class="btn btn-sm btn-success">Login</button>
                </div>
            </form>


            <div class="ord-v">
                <a href="or login with"></a>
            </div>
            <div class="form-row">

                <div class="soc-det">
                    <a href="../criarConta/" class="text-secondary">Não tem conta? Registe-se!</a>
                </div>
                </form-row>



            </div>
        </div>
</body>

<script src="../assetsLogin/js/jquery-3.2.1.min.js"></script>
<script src="../assetsLogin/js/popper.min.js"></script>
<script src="../assetsLogin/js/bootstrap.min.js"></script>
<script src="../assetsLogin/js/script.js"></script>

</html>