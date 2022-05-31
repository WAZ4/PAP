<?php
include_once("conectarBd.php");
if (isset($_GET["pagina"])) $pagina = $_GET["pagina"];
else $pagina = 1;
function getTotalComentarios($id_post)
{
    $conn = OpenCon();

    $sql = "SELECT * FROM post_comentarios WHERE id_post = " . $id_post;

    $resultado_post_comentarios = mysqli_query($conn, $sql);

    $totalComentarios = mysqli_num_rows($resultado_post_comentarios);

    return $totalComentarios;
}

function getTotalPosts($pesquisa = "")
{
    if (isset($_GET["pesquisa"]) && $pesquisa == "") $pesquisa .= " WHERE titulo LIKE '%" . $_GET["pesquisa"] . "%'";
    else if (isset($_GET["categoria"]) && $pesquisa == "") $pesquisa = " WHERE categoria =" . $_GET["categoria"];

    $conn = OpenCon();

    $sql = "SELECT * FROM post " . $pesquisa;

    $resultado_post = mysqli_query($conn, $sql);

    $totalPosts = mysqli_num_rows($resultado_post);

    return $totalPosts;
}

function getParagrafoInicial($id_post)
{
    $conn = OpenCon();

    $sql = "SELECT tipo, var1 FROM post_conteudo_detail WHERE id_post = " . $id_post . " AND ordem = 0";

    $resultado_post_conteudo_detail = mysqli_query($conn, $sql);
    $row = mysqli_fetch_assoc($resultado_post_conteudo_detail);
    // var_dump($row);

    if (isset($row["tipo"]) && $row["tipo"] == 0) {
        return $row["var1"];
    } else {
        return false;
    }
}

function imprimirPosts($pesquisa = "")
{
    global $pagina;
    if (isset($_GET["pesquisa"])) $pesquisa .= "WHERE titulo LIKE '%" . $_GET["pesquisa"] . "%'";
    else if (isset($_GET["categoria"])) $pesquisa = " WHERE categoria LIKE '%" . $_GET["categoria"] . "%'";


    $conn = OpenCon();

    // $sql = "SELECT * FROM post LIMIT 4 OFFSET ". ($pagina-1) *4 . " WHERE titulo LIKE '$". $a ."%'";
    $sql = "SELECT * FROM post " . $pesquisa . " LIMIT 4 OFFSET " . ($pagina - 1) * 4;

    $resultado_post = mysqli_query($conn, $sql);

    CloseCon($conn);

    $i = 1 * $pagina;

    $numeroDePaginas = ceil(getTotalPosts() / 4);
    while ($row = mysqli_fetch_assoc($resultado_post)) {

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
                    <form action="post-single.php" method="get" id="form<?php echo $row["id_post"]; ?>"><input type="hidden" name="id_post" value="<?php echo $row['id_post']; ?>"></form>
                    <a onclick="document.getElementById('<?php echo 'form' . $row['id_post'] ?>').submit();">Ler Mais</a>
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

function imprimirCategorias()
{

    $sql = "SELECT * FROM post_categoria ORDER BY categoria_nome ASC";
    $conn = OpenCon();
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $resultado_post_categoria = $stmt->get_result();
    CloseCon($conn);

    while ($row = $resultado_post_categoria->fetch_assoc()) {
        ?>
        <li><a href="blog.php?categoria=<?php echo $row["Categoria_ID"]; ?>">
                <?php echo $row["Categoria_Nome"]; ?>
                <span>(<?php echo getTotalPosts(" WHERE categoria = " . $row["Categoria_ID"]) ?>)</span>
            </a></li>
    <?php
    }
}

function imprimirPostsRecentes()
{
    $sql = "SELECT * from post ORDER BY id_post DESC Limit 5";
    $conn = OpenCon();
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $resultado_post = $stmt->get_result();
    CloseCon($conn);
    while ($row = $resultado_post->fetch_assoc()) {
    ?>
        <div class="post-item clearfix">
            <img src="<?php echo $row["url_img"]; ?>" alt="">
            <h4><a href="post-single.php?id_post=<?php echo $row["id_post"]; ?>"><?php echo $row["titulo"]; ?></a></h4>
            <time datetime="2020-01-01"><?php echo $row["timestamp"]; ?></time>
        </div>
    <?php
    }
}

function imprimirTags()
{
    $conn = OpenCon();

    $stmt = $conn->prepare("SELECT * FROM tag_parameterizacao");
    $stmt->execute();

    $result_post_tags_detail = $stmt->get_result();

    $stmt->free_result();
    $stmt->close();
    //falta associar cada tag a uma pesquisa pelas mesma
    while ($row = $result_post_tags_detail->fetch_assoc()) {
    ?>
        <li><a href="blog.php?tag=<?php echo $row["id_tag"]; ?>"><?php echo $row["titulo"]; ?></a></li>
<?php
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
<style>
    .criar-post {
        display: block;
        background: #bf46e8;
        color: #fff;
        padding: 6px 20px;
        transition: 0.3s;
        font-size: 14px;
        border-radius: 4px;
    }
    .criar-post:hover {
        /* display: block;
        background: #bf46e8; */
        color: #fff;
        /* padding: 6px 20px;
        transition: 0.3s;
        font-size: 14px;
        border-radius: 4px; */
    }
</style>

<body>
    <!-- ======= Header ======= -->
    <?php
    include("estruturaPrincipal/header.php");
    ?>

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
                                <form action="#" method="get">
                                    <input type="text" name="pesquisa">
                                    <button type="submit"><i class="bi bi-search"></i></button>
                                </form>
                            </div><!-- End sidebar search formn-->

                            <h3 class="sidebar-title">Categories</h3>
                            <div class="sidebar-item categories">
                                <ul>
                                    <?php
                                    imprimirCategorias();
                                    ?>
                                </ul>
                            </div><!-- End sidebar categories-->

                            <h3 class="sidebar-title">Recent Posts</h3>
                            <div class="sidebar-item recent-posts">
                                <?php
                                imprimirPostsRecentes();
                                ?>
                            </div><!-- End sidebar recent posts-->

                            <!-- <h3 class="sidebar-title">Tags</h3>
                            <div class="sidebar-item tags">
                                <ul>
                                    <?php
                                    // imprimirTags();
                                    ?>
                                </ul>
                            </div>End sidebar tags -->

                        </div><!-- End sidebar -->

                        <div class="sidebar">
                            <a href="post-criar.php" class="criar-post">Criar Post</a>
                        </div>

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