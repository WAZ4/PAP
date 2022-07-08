<?php
if (session_status() != 2) session_start();
?>
<style>
    header a {
        text-decoration: none;
    }

    .user-icon {
        height: 3rem;
        width: 3rem;
    }
</style>
<!-- ======= Header ======= -->
<header id="header" class="fixed-top <?php if (isset($_SESSION["user_img"])) echo "pt-lg-1 pb-lg-0"; ?>">
    <div class="container d-flex align-items-center">

        <h1 class="logo me-auto"><a href="index.php"><span>Oil</span>Central</a></h1>
        <!-- Uncomment below if you prefer to use an image logo -->
        <!-- <a href="index.php" class="logo me-auto me-lg-0"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

        <nav id="navbar" class="navbar order-last order-lg-0">
            <ul>

                <li><a href="index.php">Home</a></li>

                <?php
                if ((isset($_SESSION["NIVEL_UTILIZADOR"]) && $_SESSION["NIVEL_UTILIZADOR"] == 2)) {

                ?>

                    <li><a href="dashboard/">Dashboard</a></li>
                <?php
                }
                ?>

                <li><a href="oleo-single.php">Óleos</a></li>
                <li><a href="protocolo.php">Protocolos</a></li>
                <li><a href="guias.php">GUIAS</a></li>
                <li><a href="blog.php">Post´s</a></li>
                <li class="pe-lg-2"><a href="contacto.php">Contacto</a></li>



                <?php
                if (!isset($_SESSION["user_nome"])) {
                ?>

                    <li class="border-start"><a href="login/" class=" ps-lg-1 pe-lg-1 ms-lg-2">Iniciar Sessão</a></li>
                <?php
                } else {
                ?>
                    <li class="dropdown">
                        <a href="gerirConta.php" class=" border-start text-start ps-lg-2 ms-lg-2">
                            <span>
                                <img src="<?php if ($_SESSION["user_img"] != "") echo $_SESSION["user_img"];
                                            else echo "imgs/abstract-user-flat-3.png"; ?>" class="img-thumbnail user-icon border-0 rounded">
                                <span class=""><?php echo $_SESSION["user_nome"]; ?>
                                </span>
                            </span>
                        </a>
                        <ul>
                            <li><a href="gerirConta.php">Gerir Conta</a></li>
                            <li><a href="encerrarSessao.php">Encerrar Sessão</a></li>
                        </ul>
                    </li>
                <?php
                }
                ?>


            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
        <!-- .navbar -->

    </div>
</header>
<!-- End Header -->

<noscript class="d-none">
    <p class="d-none"><img alt="Clicky" width="1" height="1" src="//in.getclicky.com/101372064ns.gif" /></p>
    <a class="d-none" title="GDPR-compliant Web Analytics" href="https://clicky.com/101372064"><img alt="Clicky" src="//static.getclicky.com/media/links/badge.gif" border="0" /></a>
    <script async src="//static.getclicky.com/101372064.js"></script>
    <noscript>
        <p class="d-none"><img alt="Clicky" width="1" height="1" src="//in.getclicky.com/101372064ns.gif" /></p>
    </noscript>
</noscript>