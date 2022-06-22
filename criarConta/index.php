<?php
include("../conectarBd.php");

$erro ="";

// var_dump($_POST);

//Esta funcao verifica se existe um utilizador com o email na base de dados, caso exista retorna false caso nao exista retorna true
function verificarEmail($email)
{
    $sql = "SELECT user_email FROM user WHERE user_email = ?";
    $conn = OpenCon();
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $resultado_user = $stmt->get_result();
    CloseCon($conn);
    if ($resultado_user->num_rows != 0) return false;
    else return true;
}
function registar($email, $nome, $password)
{
    global $erro;


    $nome = strip_tags(trim($nome));
    $email = strip_tags(trim($email));
    $hash = md5(uniqid(rand()));

    // verificar se o email já exise na base de dados
    if (!verificarEmail($email)) {
        $erro = "Email já está associado a uma conta existente, por favor utilize outro email ou recupere a sua conta.";
        return;
    }
    
    $password = password_hash($password, PASSWORD_DEFAULT);

    $nome = trim($nome);

    $conn = OpenCon();

    $sql = "INSERT INTO user (user_nome, user_email, user_password, user_nivel, user_hash) VALUES ( ?, ?, ?, 0, ?)";
    $conn = OpenCon();
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssss", $nome, $email, $password, $hash);
    $stmt->execute();
    $resultado_user = $stmt->get_result();
    CloseCon($conn);

    header("Location: ativarConta.php?temp=".$hash);
}

if (isset($_POST)) {
    if (isset($_POST["registarForm"])) {
        if ($_POST["password1"] == $_POST["password2"]) {
            registar($_POST["email"], $_POST["nome"], $_POST["password1"]);
        } else {
            $erro = "As passwords não coincidem.";
        }
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
                ?>

                <input type="hidden" name="registarForm">
                <a href="index.html" style="font-size: 2rem;"><span style="color: #bf46e8">Oil</span>Central</a>

                <h2>Introduza os dados para criar a conta</h2>

                <div class="form-row">
                    <label for="">Nome</label>
                    <input type="text" placeholder="Nome e Apelido" class="form-control form-control-sm" name="nome" required>
                </div>


                <div class="form-row">
                    <label for="">Email</label>
                    <input type="email" placeholder="nome@oilcentral.com" class="form-control form-control-sm" name="email" required>
                </div>

                <div class="form-row">
                    <label for="">Password</label>
                    <input type="password" placeholder="Password" class="form-control form-control-sm" name="password1" required>
                </div>

                <div class="form-row">
                    <label for="">Reintroduza a Password</label>
                    <input type="password" placeholder="Password" class="form-control form-control-sm" name="password2" required>
                </div>


                <div class="form-row row skjh">
                    <div class="col-7 left no-padding">
                        <input type="checkbox" name="lembrarDispositivo"> Lembrar-me neste dispositivo
                        <!-- Perguntar ao professor a linguagem certa dos campos-->
                    </div>


                </div>


                <div class="form-row dfr">
                    <button class="btn btn-sm btn-success">Criar Conta</button>
                </div>

            </form>
            <div class="ord-v">
                <a href="or login with"></a>
            </div>
            <div class="form-row">

                <div class="soc-det">
                    <a href="../login/" class="text-secondary">Já tem conta? Faça login!</a>
                </div>

            </div>
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