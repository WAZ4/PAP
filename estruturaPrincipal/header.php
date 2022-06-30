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
        <!-- <a href="index.php" class="logo me-auto me-lg-0"><img src="assets/img/logo.png" alt="" class="img-fluid"></a> -->

        <nav id="navbar" class="navbar order-last order-lg-0">
            <ul>
                <li><a href="index.php" class="active">Home</a></li>
                <li><a href="oleo-single.php">Óleos</a></li>

                <!-- <li class="dropdown"><a href="#"><span>About</span> <i class="bi bi-chevron-down"></i></a>
                    <ul>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="team.html">Team</a></li>
                        <li><a href="testimonials.html">Testimonials</a></li>
                        <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
                            <ul>
                                <li><a href="#"><?php //var_dump(session_status()) ?></a></li>
                                <li><a href="#">Deep Drop Down 2</a></li>
                                <li><a href="#">Deep Drop Down 3</a></li>
                                <li><a href="#">Deep Drop Down 4</a></li>
                                <li><a href="#">Deep Drop Down 5</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
 -->

                <li><a href="protocolo.php">Protocolos</a></li>
                <li><a href="guia.html">GUIA</a></li>
                <!-- <li><a href="pricing.html">Pricing</a></li> -->
                <li><a href="blog.php">Post´s</a></li>
                <li class="pe-lg-2"><a href="contact.html">Contact</a></li>
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

        <!-- <div class="header-social-links d-flex">
                <a href="#" class="twitter"><i class="bu bi-person-circle"></i></a>
                <a href="#" class="facebook"><i class="bu bi-facebook"></i></a>
                <a href="#" class="instagram"><i class="bu bi-instagram"></i></a>
                <a href="guia.html">GUIA</a>
                <a href="#" class="linkedin"><i class="bu bi-linkedin"></i></i></a>
            </div> -->

    </div>
</header>
<!-- Template Main JS File -->
<script src="assets/js/main.js"></script>