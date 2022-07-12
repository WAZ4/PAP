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
    if (isset($_GET["pesquisa"]) && $pesquisa == "") $pesquisa .= " AND titulo LIKE '%" . $_GET["pesquisa"] . "%'";
    else if (isset($_GET["categoria"]) && $pesquisa == "") $pesquisa .= " AND categoria =" . $_GET["categoria"];

    $conn = OpenCon();

    $sql = "SELECT * FROM post WHERE estado != 0 " . $pesquisa;

    $resultado_post = mysqli_query($conn, $sql);
    // var_dump($sql);
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

    //  Filtros
    if (isset($_GET["pesquisa"]) && $pesquisa == "") $pesquisa .= " AND titulo LIKE '%" . $_GET["pesquisa"] . "%'";
    else if (isset($_GET["categoria"]) && $pesquisa == "") $pesquisa .= " AND categoria =" . $_GET["categoria"];


    $conn = OpenCon();

    // $sql = "SELECT * FROM post LIMIT 4 OFFSET ". ($pagina-1) *4 . " WHERE titulo LIKE '$". $a ."%'";
    $sql = "SELECT post.*, user.user_nome as username FROM post RIGHT JOIN user ON user.user_ID = post.user_ID WHERE estado != 0 " . $pesquisa . " LIMIT 4 OFFSET " . ($pagina - 1) * 4;

    $resultado_post = mysqli_query($conn, $sql);

    CloseCon($conn);

    $i = 1 * $pagina;

    $numeroDePaginas = ceil(getTotalPosts() / 4);
    while ($row = mysqli_fetch_assoc($resultado_post)) {
        if ($row["id_post"] == NULL) break;
?>
        <article class="entry">

            <div class="entry-img">
                <img src="<?php echo $row["url_img"]; ?>" alt="" class="img-fluid w-100">
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
                <?php if (isset($_GET["categoria"])) { ?>
                    <input type="hidden" name="categoria" value="<?php echo $_GET["categoria"]; ?>">
                <?php
                }
                ?>
        </li><input type="hidden" name="pagina" value="1"></form>
        <li>
            <form action="#" method="get" id="2"><a onclick="document.getElementById('2').submit();">2</a>
                <?php if (isset($_GET["categoria"])) { ?>
                    <input type="hidden" name="categoria" value="<?php echo $_GET["categoria"]; ?>">
                <?php
                }
                ?>
        </li><input type="hidden" name="pagina" value="2"></form>
    <?php
    } else if ($pagina != 1) {
    ?>
        <li>
            <form action="#" method="get" id="<?php echo $pagina - 1; ?>"><a onclick="document.getElementById('<?php echo $pagina - 1; ?>').submit();"><?php echo $pagina - 1; ?></a>
                <?php if (isset($_GET["categoria"])) { ?>
                    <input type="hidden" name="categoria" value="<?php echo $_GET["categoria"]; ?>">
                <?php
                }
                ?>
        </li><input type="hidden" name="pagina" value="<?php echo $pagina - 1; ?>"></form>
        <li class="active">
            <form action="#" method="get" id="<?php echo $pagina; ?>"><a onclick="document.getElementById('<?php echo $pagina; ?>').submit();"><?php echo $pagina; ?></a>
                <?php if (isset($_GET["categoria"])) { ?>
                    <input type="hidden" name="categoria" value="<?php echo $_GET["categoria"]; ?>">
                <?php
                }
                ?>
        </li><input type="hidden" name="pagina" value="<?php echo $pagina; ?>"></form>
        <?php
        if ($pagina <= floor(getTotalPosts() / 4)) {
        ?>
            <li>
                <form action="#" method="get" id="<?php echo $pagina + 1; ?>"><a onclick="document.getElementById('<?php echo $pagina + 1; ?>').submit();"><?php echo $pagina + 1; ?></a>
                    <?php if (isset($_GET["categoria"])) { ?>
                        <input type="hidden" name="categoria" value="<?php echo $_GET["categoria"]; ?>">
                    <?php
                    }
                    ?>
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
        <li><a href="posts.php?categoria=<?php echo $row["Categoria_ID"]; ?>">
                <?php echo $row["Categoria_Nome"]; ?>
                <span>(<?php
                        $temp = NULL;
                        if (isset($_GET["categoria"])) $temp = $_GET["categoria"];
                        $_GET["categoria"] = $row["Categoria_ID"];
                        echo getTotalPosts();
                        if ($temp != NULL) $_GET["categoria"] = $temp;
                        ?>)</span>
            </a></li>
    <?php
    }
}

function imprimirPostsRecentes()
{
    $sql = "SELECT * from post WHERE estado != 0 ORDER BY id_post DESC Limit 5";
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
        <li><a href="posts.php?tag=<?php echo $row["id_tag"]; ?>"><?php echo $row["titulo"]; ?></a></li>
<?php
    }
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>OilCentral - Publicações</title>
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
                    <h2><a href="posts.php" class="text-white">Posts</a></h2>
                    <ol>
                        <li><a href="index.php">Home</a></li>
                        <li><a href="posts.php">Posts</a></li>
                    </ol>
                </div>

            </div>
        </section><!-- End Breadcrumbs -->

        <!-- ======= Blog Section ======= -->
        <section id="blog" class="blog">
            <div class="container" data-aos="">

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

                        <div class="sidebar text-center mb-4">
                            <?php
                            if (isset($_SESSION["user_ID"])) {
                            ?>
                                <a href="post-criar.php" class="criar-post"> <i class="bi bi-plus"></i> Criar Publicação</a>
                            <?php
                            } else {
                            ?>
                                Para publicar, precisa de <a href="login/"> iniciar sessão</a> ou <a href="criarConta/"> criar uma conta!</a>
                            <?php
                            }
                            ?>
                        </div>

                        <div class="sidebar">

                            <h3 class="sidebar-title">Procurar</h3>
                            <div class="sidebar-item search-form">
                                <form action="posts.php" method="get">
                                    <input type="text" name="pesquisa">
                                    <button type="submit"><i class="bi bi-search"></i></button>
                                </form>
                            </div><!-- End sidebar search formn-->

                            <h3 class="sidebar-title">Categorias</h3>
                            <div class="sidebar-item categories">
                                <ul>
                                    <?php
                                    imprimirCategorias();
                                    ?>
                                </ul>
                            </div><!-- End sidebar categories-->

                            <h3 class="sidebar-title">Posts Recentes</h3>
                            <div class="sidebar-item recent-posts">
                                <?php
                                imprimirPostsRecentes();
                                ?>
                            </div><!-- End sidebar recent posts-->

                            <!-- <h3 class="sidebar-title">Tags</h3>
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
                            </div>End sidebar tags -->

                        </div><!-- End sidebar -->

                    </div><!-- End blog sidebar -->

                </div>

            </div>
        </section><!-- End Blog Section -->

    </main><!-- End #main -->

    <?php include("estruturaPrincipal/footer.php");?>

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