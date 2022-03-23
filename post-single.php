<!-- Comentario de comentario -->
<script>
  // flag == true:  Esconder Botao abrir, Mostrar zona de comentario
  // flag == false: Mostrar Botao abrir, Esconder zona de comentario
  function toggleComentario(id, flag) {
    var botaoAbrir = document.getElementById("comentario-reply-abrir-" + id);
    var botaoFechar = document.getElementById("comentario-novo-" + id);
    if (flag) {
      // botaoAbrir.classList.add("visually-hidden-focusable");

      botaoFechar.classList.remove("d-none");
    } else {
      // botaoAbrir.classList.remove("visually-hidden-focusable");
      botaoFechar.classList.add("d-none");
    }


  }
</script>

<?php

include_once "conectarBd.php";
$id_post = 0;
$username = "goncalo";
if (isset($_GET["id_post"])) $id_post = $_GET["id_post"];
else if (isset($_SESSION["username"])) $username = $_SESSION["username"];
else if (isset($_SESSION["post-criar"])) {
  $id_post = $_SESSION["post-criar"];
  unset($_SESSION["post_criar"]);
}
$cabecalho = $arrayName = array('titulo' => "", 'nomeUser' => "", 'timeStamp' => "", 'categoria' => "", 'imagemPrincipalUrl' => "");
$totalComentarios = 12;

function dataParaPortugues($data)
{
  // jan. fev. mar. abr. maio jun. jul. ago. set. out. nov. dez.
  $mesesPt = array('01' => "jan", '02' => "fev", '03' => "mar", '04' => "abr", '05' => "maio", '06' => "jun", '07' => "jul", '08' => "ago", '09' => "set", '10' => "out", '11' => 'nov', '12' => "dez");
  $mesIng = substr($data, 0, 2);
  $mes = $mesesPt[$mesIng] . substr($data, 2, strlen($data) - 2);
  return $mes;
}

function adicionarComentario()
{
  global $username;
  global $id_post;
  $conteudo = $_POST["comentario"];
  $id_post = $_POST["id_post"];
  $alvo = $_POST["comentario_alvo"];
  $timestamp = dataParaPortugues(gmdate("m d, Y", time()));

  $conn = OpenCon();

  $nrDeComentario = mysqli_fetch_assoc(mysqli_query($conn, "SELECT COUNT(id_comentario) AS numeroDeComentarios FROM post_comentarios WHERE id_post = " . $id_post))["numeroDeComentarios"];

  $sql = "INSERT INTO post_comentarios VALUES (" . $id_post . ", " . $nrDeComentario . ", '" . $alvo . "', '" . $conteudo . "', '" . $username . "', '" . $timestamp . "');";

  $result_post_comentarios = mysqli_query($conn, $sql);

  CloseCon($conn);
}

function imprimirConteudo()
{
  global $id_post;
  $conn = OpenCon();

  $stmt = $conn->prepare("SELECT * FROM post_conteudo_detail WHERE id_post =" . $id_post);
  $stmt->execute();

  $result_post_conteudo_detail = $stmt->get_result();

  $stmt->free_result();
  $stmt->close();

  // var_dump($result_post_conteudo_detail);

  while ($row = $result_post_conteudo_detail->fetch_assoc()) {
    $tipo = $row["tipo"];
    $var1 = $row["var1"];
    $var2 = $row["var2"];

    switch ($tipo) {

      case 0:
?>
        <p>
          <?php echo $var1; ?>
        </p>
      <?php
        break;

      case 1:
      ?>
        <h3> <?php echo $var1; ?> </h3>
      <?php
        break;

      case 2:
      ?>
        <blockquote>
          <p>
            “<?php echo $var1 ?>” - <?php echo $var2 ?>
          </p>
        </blockquote>
      <?php
        break;

      case 3:
      ?>
        <img src="<?php echo $var1; ?>" class="img-fluid" alt="<?php echo $var2; ?>">
      <?php
        break;

      case 4:
      ?>
        <h1 class="text-center fs-1">***</h1>
    <?php
        break;


      default:
        echo "Erro de formatação!";
        break;
    }
  }
}

function definirCabecalho()
{
  global $cabecalho;
  global $id_post;

  $conn = OpenCon();

  $stmt = $conn->prepare("SELECT * FROM post WHERE id_post = " . $id_post);
  $stmt->execute();

  $result_post_conteudo_detail = $stmt->get_result();

  $stmt->free_result();
  $stmt->close();

  // var_dump($result_post_conteudo_detail);
  
  if ($result_post_conteudo_detail) {
    $row = $result_post_conteudo_detail->fetch_assoc();
    $cabecalho["nomeUser"] = $row["username"];
    $cabecalho["titulo"] = $row["titulo"];
    $cabecalho["timeStamp"] = $row["timestamp"];
    $cabecalho["categoria"] = $row["categoria"];
    $cabecalho["imagemPrincipalUrl"]  = $row["url_img"];
  } else {
    echo "Erro na conexão à base de dados!";
  }
}

function imprimirTags()
{
  global $id_post; // trocar por post ou sessao
  $conn = OpenCon();

  $stmt = $conn->prepare("SELECT tag_parameterizacao.titulo 
                          FROM post_tags_detail INNER JOIN tag_parameterizacao ON post_tags_detail.id_tag = tag_parameterizacao.id_tag 
                          WHERE id_post = " . $id_post);
  $stmt->execute();

  $result_post_tags_detail = $stmt->get_result();

  $stmt->free_result();
  $stmt->close();

  //falta associar cada tag a uma pesquisa pelas mesma
  while ($row = $result_post_tags_detail->fetch_assoc()) {
    ?>
    <li><a href="#"><?php echo $row["titulo"]; ?></a></li>
  <?php
  }
}

function imprimirComentarios()
{
  global $id_post;
  $conn = OpenCon();

  $stmt = $conn->prepare("SELECT * FROM post_comentarios WHERE id_post = " . $id_post);
  $stmt->execute();

  $result_post_comentarios = $stmt->get_result();

  $stmt->free_result();
  $stmt->close();
  ?>
  <h4 class="comments-count"><?php echo $result_post_comentarios->num_rows ?> Comentários</h4>
  <?php

  while ($row = $result_post_comentarios->fetch_assoc()) {

    if ($row["alvo"] == "post") {
  ?>
      <div class="comment">
        <div class="d-flex">
          <div class="comment-img"><img src="assets/img/blog/comments-1.jpg" alt=""></div>
          <div>
            <h5><a href=""><?php echo $row["username"] ?></a> 
            <!-- <a href="#" class="reply"><i class="bi bi-reply-fill"></i> Reply</a> -->
            <button id="comentario-reply-abrir-<?php echo $row["id_comentario"] ?>" class="reply btn" onclick="toggleComentario(<?php echo $row['id_comentario']; ?>, true);"><span class="material-icons">reply</span></button>
          </h5>
            <time datetime="2020-01-01"><?php echo $row["timestamp"] ?></time>
            <p>
              <?php echo $row["conteudo"] ?>
            </p>
          </div>
        </div>

        <div id="comentario-novo-<?php echo $row["id_comentario"] ?>" class="comment comment-reply d-none">
          <div class="d-flex reply-form">
            <div class="w-100">
              <h4><span class="material-icons">north</span> Deixe a sua resposta <button class="float-end btn" onclick="toggleComentario(<?php echo $row['id_comentario']; ?>, false);"><span class="material-icons btn-comentario">close</span></button></h4>

              <form action="#" method="POST">
                <div class="row mt-2 ">
                  <div class="col form-group ">
                    <textarea name="comentario" class="form-control " placeholder="A sua resposta* " rows="5 "></textarea>
                  </div>
                </div>
                <input type="hidden" name="id_post" value="<?php echo $id_post; ?>">
                <input type="hidden" name="comentario_alvo" value="<?php echo $row["id_comentario"] ?>">
                <button type="submit" class="btn btn-primary" name="comentario_principal_submit">Responder</button>

              </form>
            </div>
          </div>
        </div>

        <?php imprimirSubComentariosRecursiva($row["id_comentario"]); ?>

      </div><!-- End comment #1 -->
    <?php
    }
  }
  // for ($i = 0; $i < count($sequenciaParaImprimir); $i++) {
  //   echo "Comentario nr: " . $i . " id_comentario: " . $sequenciaParaImprimir[$i];
  // }
}

function imprimirSubComentariosRecursiva($id_comentario) // arranjar isto WAZA
{
  global $id_post;
  // var_dump($sequencia);
  $comentariosInferiores = getSubComentario($id_comentario);
  // var_dump($comentariosInferiores);
  if ($comentariosInferiores != false) {
    foreach ($comentariosInferiores as $comentario) {
      $dados = getComentario($comentario);
    ?>
      <div id="comment-reply-1" class="comment comment-reply">
        <div class="d-flex">
          <div class="comment-img"><img src="assets/img/blog/comments-3.jpg" alt=""></div>
          <div>
            <h5><a href=""><?php echo $dados["username"] ?></a>
              <button id="comentario-reply-abrir-<?php echo $dados["id_comentario"] ?>" class="reply btn" onclick="toggleComentario(<?php echo $dados['id_comentario']; ?>, true);"><span class="material-icons">reply</span></button>
            </h5>

            <time><?php echo $dados["timestamp"] ?></time>
            <p>
              <?php echo $dados["conteudo"] ?>
            </p>
          </div>
        </div>

        <div id="comentario-novo-<?php echo $dados["id_comentario"] ?>" class="comment comment-reply d-none">
          <div class="d-flex reply-form">
            <div class="w-100">
              <h4><span class="material-icons">north</span> Deixe a sua resposta <button class="float-end btn" onclick="toggleComentario(<?php echo $dados['id_comentario']; ?>, false);"><span class="material-icons btn-comentario">close</span></button></h4>

              <form action="#" method="POST">
                <div class="row mt-2 ">
                  <div class="col form-group ">
                    <textarea name="comentario" class="form-control " placeholder="A sua resposta* " rows="5 "></textarea>
                  </div>
                </div>
                <input type="hidden" name="id_post" value="<?php echo $id_post; ?>">
                <input type="hidden" name="comentario_alvo" value="<?php echo $dados["id_comentario"] ?>">
                <button type="submit" class="btn btn-primary" name="comentario_principal_submit">Responder</button>

              </form>
            </div>
          </div>
        </div>

        <?php imprimirSubComentariosRecursiva($comentario); ?>

      </div>
<?php
    }
  }
}

function getSubComentario($id_comentario)
{
  global $id_post;
  $sql = "SELECT * FROM post_comentarios WHERE id_post = '" . $id_post . "' AND alvo = '" . $id_comentario . "'";

  $conn = OpenCon();

  $result_post_comentarios = mysqli_query($conn, $sql);

  CloseCon($conn);
  // var_dump($result_post_comentarios);

  if ($result_post_comentarios == false || $result_post_comentarios->num_rows == 0) return false;
  else {
    $values = array();
    while ($row = $result_post_comentarios->fetch_assoc()) {
      array_push($values, $row["id_comentario"]);
    }
    // var_dump($values);
    return $values;
  }
  return "Erro";
}

function getComentario($id_comentario)
{
  global $id_post;
  $conn = OpenCon();

  $stmt = $conn->prepare("SELECT * FROM post_comentarios WHERE id_comentario = '" . $id_comentario . "' AND id_post =" . $id_post); //verificar se encontra a certa ou a amis de outros comentarios
  $stmt->execute();

  $result_post_comentarios = $stmt->get_result();

  $stmt->free_result();
  $stmt->close();

  $comentario = $result_post_comentarios->fetch_assoc();

  return $comentario;
}

//Função que corre no inicio do programa
function main()
{
  global $id_post; // trocar por session ou post
  global $cabecalho;

  definirCabecalho($cabecalho);
  // var_dump($cabecalho);
  if (isset($_POST["comentario_principal_submit"])) {
    adicionarComentario();
  }
}

main();

?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>Blog Single - Company Bootstrap Template</title>
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

  <!-- Icones Googles -->
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

  <!-- CSS extra -->
  <link rel="stylesheet" href="estilo-post-single.css">

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
      </nav>
      <!-- .navbar -->

      <div class="header-social-links d-flex">
        <a href="#" class="twitter"><i class="bu bi-twitter"></i></a>
        <a href="#" class="facebook"><i class="bu bi-facebook"></i></a>
        <a href="#" class="instagram"><i class="bu bi-instagram"></i></a>
        <a href="#" class="linkedin"><i class="bu bi-linkedin"></i></i></a>
      </div>

    </div>
  </header>
  <!-- End Header -->

  <main id="main">

    <!-- ======= Breadcrumbs ======= -->
    <section id="breadcrumbs" class="breadcrumbs">
      <div class="container">

        <div class="d-flex justify-content-between align-items-center">
          <h2>Blog Single</h2>
          <ol>
            <li><a href="index.html">Home</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li>Blog Single</li>
          </ol>
        </div>

      </div>
    </section><!-- End Breadcrumbs -->

    <!-- ======= Blog Single Section ======= -->
    <section id="blog" class="blog">
      <div class="container" data-aos="fade-up">

        <div class="row">

          <div class="col-lg-8 entries">

            <article class="entry entry-single">
              <!-- Imagem principal -->
              <div class="entry-img">
                <img src="<?php echo $cabecalho["imagemPrincipalUrl"]; ?>" width="100%" height="auto" class="mx-auto d-block">
              </div>

              <h2 class="entry-title">
                <a href="blog-single.html"><?php echo $cabecalho["titulo"]; ?></a>
              </h2>

              <div class="entry-meta">
                <ul>
                  <li class="d-flex align-items-center"><i class="bi bi-person"></i> <a href="blog-single.html"><?php echo $cabecalho["nomeUser"]; ?></a></li>
                  <li class="d-flex align-items-center"><i class="bi bi-clock"></i> <a href="blog-single.html"><time datetime="2020-01-01"><?php echo $cabecalho["timeStamp"]; ?></time></a></li>
                  <li class="d-flex align-items-center"><i class="bi bi-chat-dots"></i> <a href="blog-single.html"><?php echo $totalComentarios; ?> Comentários</a></li>
                </ul>
              </div>

              <!-- inserir conteudo aqui -->
              <div class="entry-content">
                <?php imprimirConteudo($id_post);
                ?>

              </div>

              <div class="entry-footer">
                <i class="bi bi-folder"></i>
                <ul class="cats">
                  <li><a href="#"><?php echo $cabecalho["categoria"]; ?></a></li>
                </ul>

                <i class="bi bi-tags"></i>
                <ul class="tags">
                  <?php imprimirTags(); ?>
                </ul>
              </div>

            </article><!-- End blog entry -->

            <div class="blog-author d-flex align-items-center">
              <img src="assets/img/blog/blog-author.jpg" class="rounded-circle float-left" alt="">
              <div>
                <h4>Jane Smith</h4>
                <div class="social-links">
                  <a href="https://twitters.com/#"><i class="bi bi-twitter"></i></a>
                  <a href="https://facebook.com/#"><i class="bi bi-facebook"></i></a>
                  <a href="https://instagram.com/#"><i class="biu bi-instagram"></i></a>
                </div>
                <p>
                  Itaque quidem optio quia voluptatibus dolorem dolor. Modi eum sed possimus accusantium. Quas repellat voluptatem officia numquam sint aspernatur voluptas. Esse et accusantium ut unde voluptas.
                </p>
              </div>
            </div><!-- End blog author bio -->

            <div class="blog-comments">
              <?php
              imprimirComentarios();
              ?>
              <div class="reply-form">
                <?php
                if (isset($username) && $username != "") {
                ?>
                  <h4>Deixe o seu comentário</h4>
                  <form action="#" method="post">
                    <input type="hidden" name="<?php echo $id_post; ?>">
                    <div class="row">
                      <div class="col form-group">
                        <textarea name="comentario" class="form-control" rows="5" placeholder="O seu comentário*"></textarea>
                      </div>
                    </div>
                    <input type="hidden" name="id_post" value="<?php echo $id_post; ?>">
                    <input type="hidden" name="comentario_alvo" value="post">
                    <button type="submit" class="btn btn-primary" name="comentario_principal_submit">Comentar</button>
                  </form>
                <?php
                } else {
                ?>
                  <div class="container coment-div">
                    <span class="material-icons coment-span">lock</span>
                    <p class="coment-span text-center">Para comentar é necessário ter uma conta</p>
                    <a class="coment-span" href="">Crie uma conta aqui!</a>
                  </div>
                <?php
                }
                ?>
              </div>

            </div><!-- End blog comments -->

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
    </section><!-- End Blog Single Section -->

  </main><!-- End #main -->

  <!-- ======= Footer ======= -->
  <footer id="footer" class="d-block">

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
  <script src="assets/vendor/aos/aos.js "></script>
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js "></script>
  <script src="assets/vendor/glightbox/js/glightbox.min.js "></script>
  <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js "></script>
  <script src="assets/vendor/php-email-form/validate.js "></script>
  <script src="assets/vendor/swiper/swiper-bundle.min.js "></script>
  <script src="assets/vendor/waypoints/noframework.waypoints.js "></script>

  <!-- Template Main JS File -->
  <script src="assets/js/main.js "></script>

</body>

</html>