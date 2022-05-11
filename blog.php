<?php
include_once("conectarBd.php");
if (isset($_GET["pagina"])) $pagina = $_GET["pagina"];
else $pagina = 1;
function getTotalComentarios($id_post)
{
    $conn = OpenCon();

    $sql = "SELECT * FROM post_comentarios WHERE id_post = " . $id_post;

    $result_post_comentarios = mysqli_query($conn, $sql);

    $totalComentarios = mysqli_num_rows($result_post_comentarios);

    return $totalComentarios;
}

function getTotalPosts()
{
    $conn = OpenCon();

    $sql = "SELECT * FROM post";

    $result_post = mysqli_query($conn, $sql);

    $totalPosts = mysqli_num_rows($result_post);

    return $totalPosts;
}

function getParagrafoInicial($id_post)
{
    $conn = OpenCon();

    $sql = "SELECT tipo, var1 FROM post_conteudo_detail WHERE id_post = " . $id_post . " AND ordem = 0";

    $result_post_conteudo_detail = mysqli_query($conn, $sql);
    $row = mysqli_fetch_assoc($result_post_conteudo_detail);
    // var_dump($row);

    if (isset($row["tipo"]) && $row["tipo"] == 0) {
        return $row["var1"];
    } else {
        return false;
    }
}

function imprimirPosts()
{
    global $pagina;
    $conn = OpenCon();

    $sql = "SELECT * FROM post LIMIT 4 OFFSET ". ($pagina-1) *4;

    $result_post = mysqli_query($conn, $sql);

    CloseCon($conn);

    $i = 1 * $pagina;

    $numeroDePaginas = ceil(getTotalPosts() / 4);

    while ($row = mysqli_fetch_assoc($result_post)) {

?>
        <article class="entry">

            <div class="entry-img">
                <img src="<?php echo $row["url_img"]; ?>" alt="" class="img-fluid">
            </div>

            <h2 class="entry-title">
                <a href="blog-single.html"><?php echo $row["titulo"]; ?></a>
            </h2>

            <div class="entry-meta">
                <ul>
                    <li class="d-flex align-items-center"><i class="bi bi-person"></i> <a href="blog-single.html"><?php echo $row["username"]; ?></a></li>
                    <li class="d-flex align-items-center"><i class="bi bi-clock"></i> <a href="blog-single.html"><?php echo $row["timestamp"] ?></a></li>
                    <li class="d-flex align-items-center"><i class="bi bi-chat-dots"></i> <a href="blog-single.html"><?php echo getTotalComentarios($row["id_post"]); ?></a></li>
                </ul>
            </div>

            <div class="entry-content">
                <p><?php echo getParagrafoInicial($row["id_post"]); ?></p>
                <div class="read-more">
                    <form action="post-single.php" method="get" id="form<?php echo $row["id_post"]; ?>"><input type="hidden" name="id_post" value="<?php echo $row['id_post'];?>"></form>
                    <a onclick="document.getElementById('<?php echo 'form'.$row['id_post'] ?>').submit();">Ler Mais</a>
                </div>
            </div>

        </article><!-- End blog entry -->
    <?php
    }
}

function imprimirPaginacao($pagina)
{
    if ($pagina == 1 &&  getTotalPosts() > 4) {
    ?>
        <li class="active">
            <form action="#" method="get" id="0"><a onclick="document.getElementById('1').submit();">1</a>
        </li><input type="hidden" name="pagina" value="1"></form>
        <li>
            <form action="#" method="get" id="2"><a onclick="document.getElementById('2').submit();">2</a>
        </li><input type="hidden" name="pagina" value="2"></form>
    <?php
    } else if ($pagina != 1) {
    ?>
        <li>
            <form action="#" method="get" id="<?php echo $pagina - 1; ?>"><a onclick="document.getElementById('<?php echo $pagina - 1; ?>').submit();"><?php echo $pagina - 1; ?></a>
        </li><input type="hidden" name="pagina" value="<?php echo $pagina - 1; ?>"></form>
        <li class="active">
            <form action="#" method="get" id="<?php echo $pagina; ?>"><a onclick="document.getElementById('<?php echo $pagina; ?>').submit();"><?php echo $pagina; ?></a>
        </li><input type="hidden" name="pagina" value="<?php echo $pagina; ?>"></form>
        <?php
        if ($pagina <= floor(getTotalPosts() / 4)) {
        ?>
            <li>
                <form action="#" method="get" id="<?php echo $pagina + 1; ?>"><a onclick="document.getElementById('<?php echo $pagina + 1; ?>').submit();"><?php echo $pagina + 1; ?></a>
            </li><input type="hidden" name="pagina" value="<?php echo $pagina + 1; ?>"></form>
<?php
        }
    }
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>Blog - Company Bootstrap Template</title>
    <meta content="" name="description">
    <meta content="" name="keywords">

    <!-- CSS BASE-->
    <?php 
    include("estruturaPrincipal/head-css.php");
    ?>

    <!-- =======================================================
  * Template Name: Company - v4.6.1
  * Template URL: https://bootstrapmade.com/company-free-html-bootstrap-template/
  * Author: BootstrapMade.com
  * License: https://bootstrapmade.com/license/
  ======================================================== -->
</head>

<body>
    <!-- ======= Header ======= -->
    <header id="header" class="fixed-top">
        <div class="container d-flex align-items-center">

            <h1 class="logo me-auto"><a href="index.html"><span>Com</span>pany</a></h1>
            <!-- Uncomment below if you prefer to use an image logo -->
            <!-- <a href="index.html" class="logo me-auto me-lg-0"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

            <nav id="navbar" class="navbar order-last order-lg-0">
                <ul>
                    <li><a href="index.html">Home</a></li>

                    <li class="dropdown"><a href="#"><span>About</span> <i class="bi bi-chevron-down"></i></a>
                        <ul>
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="team.html">Team</a></li>
                            <li><a href="testimonials.html">Testimonials</a></li>
                            <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
                                <ul>
                                    <li><a href="#">Deep Drop Down 1</a></li>
                                    <li><a href="#">Deep Drop Down 2</a></li>
                                    <li><a href="#">Deep Drop Down 3</a></li>
                                    <li><a href="#">Deep Drop Down 4</a></li>
                                    <li><a href="#">Deep Drop Down 5</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>

                    <li><a href="services.html">Services</a></li>
                    <li><a href="portfolio.html">Portfolio</a></li>
                    <li><a href="pricing.html">Pricing</a></li>
                    <li><a href="blog.html" class="active">Blog</a></li>
                    <li><a href="contact.html">Contact</a></li>

                </ul>
                <i class="bi bi-list mobile-nav-toggle"></i>
            </nav><!-- .navbar -->

            <div class="header-social-links d-flex">
                <a href="#" class="twitter"><i class="bu bi-twitter"></i></a>
                <a href="#" class="facebook"><i class="bu bi-facebook"></i></a>
                <a href="#" class="instagram"><i class="bu bi-instagram"></i></a>
                <a href="#" class="linkedin"><i class="bu bi-linkedin"></i></i></a>
            </div>

        </div>
    </header><!-- End Header -->

    <main id="main">

        <!-- ======= Breadcrumbs ======= -->
        <section id="breadcrumbs" class="breadcrumbs">
            <div class="container">

                <div class="d-flex justify-content-between align-items-center">
                    <h2>Blog</h2>
                    <ol>
                        <li><a href="index.html">Home</a></li>
                        <li>Blog</li>
                    </ol>
                </div>

            </div>
        </section><!-- End Breadcrumbs -->

        <!-- ======= Blog Section ======= -->
        <section id="blog" class="blog">
            <div class="container" data-aos="fade-up">

                <div class="row">

                    <div class="col-lg-8 entries mb-3">

                        <?php imprimirPosts(); ?>

                        <div class="blog-pagination">
                            <ul class="justify-content-center">
                                <?php
                                imprimirPaginacao($pagina);
                                ?>
                            </ul>
                        </div>

                    </div><!-- End blog entries list -->

                    <div class="col-lg-4">

                        <div class="sidebar">

                            <h3 class="sidebar-title">Search</h3>
                            <div class="sidebar-item search-form">
                                <form action="">
                                    <input type="text">
                                    <button type="submit"><i class="bi bi-search"></i></button>
                                </form>
                            </div><!-- End sidebar search formn-->

                            <h3 class="sidebar-title">Categories</h3>
                            <div class="sidebar-item categories">
                                <ul>
                                    <li><a href="#">General <span>(25)</span></a></li>
                                    <li><a href="#">Lifestyle <span>(12)</span></a></li>
                                    <li><a href="#">Travel <span>(5)</span></a></li>
                                    <li><a href="#">Design <span>(22)</span></a></li>
                                    <li><a href="#">Creative <span>(8)</span></a></li>
                                    <li><a href="#">Educaion <span>(14)</span></a></li>
                                </ul>
                            </div><!-- End sidebar categories-->

                            <h3 class="sidebar-title">Recent Posts</h3>
                            <div class="sidebar-item recent-posts">
                                <div class="post-item clearfix">
                                    <img src="assets/img/blog/blog-recent-1.jpg" alt="">
                                    <h4><a href="blog-single.html">Nihil blanditiis at in nihil autem</a></h4>
                                    <time datetime="2020-01-01">Jan 1, 2020</time>
                                </div>

                                <div class="post-item clearfix">
                                    <img src="assets/img/blog/blog-recent-2.jpg" alt="">
                                    <h4><a href="blog-single.html">Quidem autem et impedit</a></h4>
                                    <time datetime="2020-01-01">Jan 1, 2020</time>
                                </div>

                                <div class="post-item clearfix">
                                    <img src="assets/img/blog/blog-recent-3.jpg" alt="">
                                    <h4><a href="blog-single.html">Id quia et et ut maxime similique occaecati ut</a></h4>
                                    <time datetime="2020-01-01">Jan 1, 2020</time>
                                </div>

                                <div class="post-item clearfix">
                                    <img src="assets/img/blog/blog-recent-4.jpg" alt="">
                                    <h4><a href="blog-single.html">Laborum corporis quo dara net para</a></h4>
                                    <time datetime="2020-01-01">Jan 1, 2020</time>
                                </div>

                                <div class="post-item clearfix">
                                    <img src="assets/img/blog/blog-recent-5.jpg" alt="">
                                    <h4><a href="blog-single.html">Et dolores corrupti quae illo quod dolor</a></h4>
                                    <time datetime="2020-01-01">Jan 1, 2020</time>
                                </div>

                            </div><!-- End sidebar recent posts-->

                            <h3 class="sidebar-title">Tags</h3>
                            <div class="sidebar-item tags">
                                <ul>
                                    <li><a href="#">App</a></li>
                                    <li><a href="#">IT</a></li>
                                    <li><a href="#">Business</a></li>
                                    <li><a href="#">Mac</a></li>
                                    <li><a href="#">Design</a></li>
                                    <li><a href="#">Office</a></li>
                                    <li><a href="#">Creative</a></li>
                                    <li><a href="#">Studio</a></li>
                                    <li><a href="#">Smart</a></li>
                                    <li><a href="#">Tips</a></li>
                                    <li><a href="#">Marketing</a></li>
                                </ul>
                            </div><!-- End sidebar tags-->

                        </div><!-- End sidebar -->

                    </div><!-- End blog sidebar -->

                </div>

            </div>
        </section><!-- End Blog Section -->

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