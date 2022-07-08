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
session_start();

$id_post = 0;
$criador = NULL;
if (isset($_GET["id_post"])) $id_post = $_GET["id_post"];
else if (isset($_SESSION["username"])) $username = $_SESSION["username"];
else if (isset($_SESSION["post-criar"])) {
  $id_post = $_SESSION["post-criar"];
  unset($_SESSION["post_criar"]);
}

if (!verificarDisponibilidade($id_post) && $_SESSION["NIVEL_UTILIZADOR"] != 2) {
  header("Location: blog.php");
}

$cabecalho = $arrayName = array('titulo' => "", 'nomeUser' => "", 'timeStamp' => "", 'categoria' => "", 'categoria_ID' => "", 'imagemPrincipalUrl' => "");
$totalComentarios = getTotalComentarios($id_post);

function apagarPost($id_post)
{
  $sql = "UPDATE post SET estado = 1 WHERE id_post = ?";
  $conn = OpenCon();
  $stmt = $conn->prepare($sql);
  $stmt->bind_param("i", $id_post);
  $stmt->execute();
  $resultado_post_denuncia = $stmt->get_result();
  CloseCon($conn);
}

function fazerDenuncia($id_post, $user_ID, $razao)
{
  $sql = "SELECT COUNT(id_post) as nrDenuncias FROM post_denuncia WHERE id_post = ? AND user_ID = ?";
  $conn = OpenCon();
  $stmt = $conn->prepare($sql);
  $stmt->bind_param("ii", $id_post, $user_ID);
  $stmt->execute();
  $resultado_post_denuncia = $stmt->get_result();
  CloseCon($conn);

  if ($resultado_post_denuncia->fetch_assoc()["nrDenuncias"] !=  0) {

    $sql = "UPDATE post_denuncia SET razao = ? WHERE id_post = ? AND user_ID = ?";
    $conn = OpenCon();
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sii", $razao, $id_post, $user_ID);
    $stmt->execute();
    $resultado_post_comentarios = $stmt->get_result();
    CloseCon($conn);
  } else {
    $sql = "INSERT INTO post_denuncia(user_ID, id_post, razao) VALUES (?, ?, ?)";
    $conn = OpenCon();
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("iis", $user_ID, $id_post, $razao);
    $stmt->execute();
    $resultado_post_comentarios = $stmt->get_result();
    CloseCon($conn);
  }
}

function verificarDisponibilidade($id_post)
{
  $sql = "SELECT estado FROM post WHERE id_post = ?";
  $conn = OpenCon();
  $stmt = $conn->prepare($sql);
  $stmt->bind_param("i", $id_post);
  $stmt->execute();
  $resultado_post_comentarios = $stmt->get_result();
  CloseCon($conn);
  $estado = $resultado_post_comentarios->fetch_assoc()["estado"];
  if ($estado == 0) return false;
  return true;
}

function getTotalComentarios($id_post)
{
  $sql = "SELECT COUNT(id_post) as nrComentarios FROM post_comentarios WHERE id_post = ?";
  $conn = OpenCon();
  $stmt = $conn->prepare($sql);
  $stmt->bind_param("i", $id_post);
  $stmt->execute();
  $resultado_post_comentarios = $stmt->get_result();
  CloseCon($conn);

  return $resultado_post_comentarios->fetch_assoc()["nrComentarios"];
}

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
  global $id_post;
  $conteudo = strip_tags(trim($_POST["comentario"]));
  $id_post = $_POST["id_post"];
  $alvo = $_POST["comentario_alvo"];
  $timestamp = dataParaPortugues(gmdate("m d, Y", time()));

  $conn = OpenCon();

  $nrDeComentario = mysqli_fetch_assoc(mysqli_query($conn, "SELECT COUNT(id_comentario) AS numeroDeComentarios FROM post_comentarios WHERE id_post = " . $id_post))["numeroDeComentarios"];

  $sql = "INSERT INTO post_comentarios VALUES (" . $id_post . ", " . $nrDeComentario . ", '" . $alvo . "', '" . $conteudo . "', '" . $_SESSION["user_ID"] . "', '" . $timestamp . "');";

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
  global $criador;

  $conn = OpenCon();

  $stmt = $conn->prepare("SELECT post.*, user.user_nome as username, user.user_img, post_categoria.Categoria_nome FROM post RIGHT JOIN user ON user.user_ID = post.user_ID RIGHT JOIN post_categoria ON post.categoria = post_categoria.Categoria_ID WHERE id_post = " . $id_post);
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
    $cabecalho["categoria_ID"] = $row["categoria"];
    $cabecalho["categoria"] = $row["Categoria_nome"];
    $cabecalho["imagemPrincipalUrl"]  = $row["url_img"];
    $criador = $row["user_ID"];
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


  $stmt = $conn->prepare("SELECT post_comentarios.*, user.user_nome as username, user.user_img FROM post_comentarios RIGHT JOIN user ON user.user_ID = post_comentarios.user_ID WHERE id_post = " . $id_post);
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
          <div class="comment-img"><img src="<?php echo $row["user_img"]; ?>" alt="" width="60" height="100"></div>
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
              <?php
              if (isset($_SESSION["user_nome"])) {
              ?>


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
              <?php
              } else {
              ?>
                <!-- //WAZATAG -->
                <div class="container coment-div">
                  <span class="material-icons coment-span">lock</span>
                  <p class="coment-span text-center">Para para responder é necessário ter uma conta</p>
                  <a class="coment-span" href="criarConta/">Crie uma conta aqui!</a>
                </div>
              <?php
              }
              ?>
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
          <div class="comment-img"><img src="<?php echo $dados["user_img"] ?>" alt=""></div>
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
              <?php
              if (isset($_SESSION["user_nome"])) {
              ?>


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
              <?php
              } else {
              ?>
                <!-- //WAZATAG -->
                <div class="container coment-div">
                  <span class="material-icons coment-span">lock</span>
                  <p class="coment-span text-center">Para responder é necessário ter uma conta</p>
                  <a class="coment-span" href="criarConta/">Crie uma conta aqui!</a>
                </div>
              <?php
              }
              ?>
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

  $stmt = $conn->prepare("SELECT post_comentarios.*, user.user_nome as username, user.user_img FROM post_comentarios RIGHT JOIN user ON user.user_ID = post_comentarios.user_ID WHERE id_comentario = '" . $id_comentario . "' AND id_post =" . $id_post); //verificar se encontra a certa ou a amis de outros comentarios
  $stmt->execute();

  $result_post_comentarios = $stmt->get_result();

  $stmt->free_result();
  $stmt->close();

  $comentario = $result_post_comentarios->fetch_assoc();

  return $comentario;
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


//Função que corre no inicio do programa
function main()
{
  global $id_post; // trocar por session ou post
  global $cabecalho;

  definirCabecalho($cabecalho);
  // var_dump($cabecalho);
  if (isset($_POST["comentario_principal_submit"])) {
    adicionarComentario();
  } else if (isset($_POST["razaoDenuncia"])) {
    fazerDenuncia($_POST["id_post"], $_POST["user_ID"], $_POST["razaoDenuncia"]);
  } else if (isset($_POST["apagarPost"])) {
    apagarPost($_POST["apagarPost"]);
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
  <?php
  include("estruturaPrincipal/header.php");
  ?>

  <main id="main">

    <!-- ======= Breadcrumbs ======= -->
    <section id="breadcrumbs" class="breadcrumbs">
      <div class="container">

        <div class="d-flex justify-content-between align-items-center">
          <h2><a href="#" class="text-white">Post</a></h2>
          <ol>
            <li><a href="index.php">Home</a></li>
            <li><a href="blog.php">Post's</a></li>
            <li><a href="#" class="text-white"><?php echo $cabecalho["titulo"]; ?></a></li>
          </ol>
        </div>

      </div>
    </section><!-- End Breadcrumbs -->

    <!-- ======= Blog Single Section ======= -->
    <section id="blog" class="blog">
      <div class="container" data-aos="">

        <div class="row">

          <div class="col-lg-8 entries">

            <article class="entry entry-single">
              <!-- Imagem principal -->
              <div class="entry-img">
                <img src="<?php echo $cabecalho["imagemPrincipalUrl"]; ?>" width="100%" height="auto" class="mx-auto d-block">
              </div>
              <div class="row">
                <div class="col">
                  <h2 class="entry-title">
                    <a href="blog-single.html"><?php echo $cabecalho["titulo"]; ?></a>
                    <?php
                    if ((isset($_SESSION["user_ID"]) && $_SESSION["user_ID"] == $criador) || (isset($_SESSION["NIVEL_UTILIZADOR"]) && $_SESSION["NIVEL_UTILIZADOR"] == 2)) {
                    ?>

                      <div class="float-end btn-group fs-4 fw-light">

                        <a class="me-4" href="<?php echo "post-editar.php?id_post=" . $id_post ?>"><i class="bi bi-pencil-square"> Editar</i></a>

                        <form action="#" method="post" id="apagarPost1">
                          <input type="hidden" name="apagarPost" value="<?php echo $id_post; ?>">
                          <a href="javascript:{}" onclick="document.getElementById('apagarPost1').submit();"><i class="bi bi-trash"> Apagar</i></a>


                        </form>
                      </div>
                </div>
              <?php
                    }
              ?>
              </h2>


              <div class="entry-meta">
                <ul>
                  <li class="d-flex align-items-center"><i class="bi bi-person"></i> <a href="blog-single.html"><?php echo $cabecalho["nomeUser"]; ?></a></li>
                  <li class="d-flex align-items-center"><i class="bi bi-clock"></i> <a href="blog-single.html"><time datetime="2020-01-01"><?php echo $cabecalho["timeStamp"]; ?></time></a></li>
                  <li class="d-flex align-items-center"><i class="bi bi-chat-dots"></i> <a href="blog-single.html"><?php echo $totalComentarios;
                                                                                                                    ?> Comentários</a></li>
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
                  <li><a href="<?php echo "blog.php?categoria=" . $cabecalho["categoria_ID"]; ?>"><?php echo $cabecalho["categoria"]; ?></a></li>
                </ul>
                <?php
                if (isset($_SESSION["user_ID"])) {
                ?>
                  <div class="float-end">
                    <a href="" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="bi bi-flag-fill"> Denunciar </i></a>
                  </div>
                <?php
                }
                ?>
                <!-- <i class="bi bi-tags"></i>
                <ul class="tags">
                  <?php //imprimirTags(); 
                  ?>
                </ul> -->
              </div>

            </article><!-- End blog entry -->

            <div class="blog-comments">
              <?php
              imprimirComentarios();
              ?>
              <div class="reply-form">
                <?php
                if (isset($_SESSION["user_nome"])) {
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
                    <a class="coment-span" href="criarConta/">Crie uma conta aqui!</a>
                  </div>
                <?php
                }
                ?>
              </div>

            </div><!-- End blog comments -->

          </div><!-- End blog entries list -->

          <div class="col-lg-4">

            <div class="sidebar">

              <h3 class="sidebar-title">Procurar</h3>
              <div class="sidebar-item search-form">
                <form action="blog.php" method="get">
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

              <h3 class="sidebar-title">Post's Recentes</h3>
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
    </section><!-- End Blog Single Section -->

  </main><!-- End #main -->

  <!-- Modals usadas -->
  <?php
  if (isset($_SESSION["user_ID"])) {
  ?>
    <!-- Modal -->
    <form action="#" method="post" class="w-0 m-0">
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Denunciar Post</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="form-floating">
                <input type="hidden" name="id_post" value="<?php echo $id_post; ?>">
                <input type="hidden" name="user_ID" value="<?php echo $_SESSION["user_ID"]; ?>">
                <textarea class="form-control" placeholder="Escreva qual a razão desta denúncia." name="razaoDenuncia" style="height: 100px" required></textarea>
                <label for="floatingTextarea2">Razão de denúncia</label>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-primary">Submeter Denúncia</button>
            </div>
          </div>
        </div>
      </div>
    </form>

  <?php
  }
  ?>

  <?php include("estruturaPrincipal/footer.php"); ?>

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