<?php
include_once("conectarBd.php");
session_start();

$errormsg;
//nr de posts criados com index 1 , que por consequencia do index 1 passa a ser o numero do novo post. Se existirem 2 posts os seus index vao ser 0 e 1 mas a funcao devolve 2, logo o novo post vai ser o nr 2

function dataParaPortugues($data)
{
  // jan. fev. mar. abr. maio jun. jul. ago. set. out. nov. dez.
  $mesesPt = array('01' => "jan", '02' => "fev", '03' => "mar", '04' => "abr", '05' => "maio", '06' => "jun", '07' => "jul", '08' => "ago", '09' => "set", '10' => "out", '11' => 'nov', '12' => "dez");
  $mesIng = substr($data, 0, 2);
  $mes = $mesesPt[$mesIng] . substr($data, 2, strlen($data) - 2);
  return $mes;
}

function getNrPost()
{
    $sql = "SELECT COUNT(id_post) AS numeroDePosts FROM post;";

    $conn = OpenCon();

    $result_post = mysqli_query($conn, $sql);

    CloseCon($conn);

    return mysqli_fetch_assoc($result_post)["numeroDePosts"];
}
//Inserir conteudo do editor de texto na base de dados
function inserirPostConteudoBaseDeDados($nr_post)
{
    $stringJson = $_POST["submitEditor"];
    $someObject = json_decode(json_encode(json_decode($stringJson)), true);
    print_r($someObject);

    foreach ($someObject["blocks"] as $key => $value) {
        if (gettype($value) == "array") {
            $ordem = $key;
            $tipo = "";
            $var1 = "";
            $var2 = "";

            switch ($value["type"]) {
                case 'paragraph':
                    $tipo = 0;
                    $var1 = $value["data"]["text"];
                    break;

                case 'header':
                    $tipo = 1;
                    $var1 = $value["data"]["text"];
                    break;

                case 'quote':
                    $tipo = 2;
                    $var1 = $value["data"]["text"];
                    $var2 = $value["data"]["caption"];
                    break;

                case 'image':
                    $tipo = 3;
                    $var1 = $value["data"]["file"]["url"];
                    $var2 = $value["data"]["caption"];
                    break;

                case 'delimiter':
                    $tipo = 4;
                    break;

                default:
                    # code...
                    break;
            }

            $sql = "INSERT INTO `post_conteudo_detail` (`id_post`, `ordem`, `tipo`, `var1`, `var2`) VALUES ('" . $nr_post . "', '" . $ordem . "', '" . $tipo . "', '" . $var1 . "', '" . $var2 . "')";

            $conn = OpenCon();

            $result_post_conteudo_detail = mysqli_query($conn, $sql);

            var_dump($result_post_conteudo_detail);

            CloseCon($conn);
        }
    }
}
//Inserir os dados do cabecalho do post na base de dados
//falta adicionar o username dinamico
function inserirPostBaseDeDados($nr_post)
{
    // $urlPrefix = "http://localhost:8888/PAP/Company/";
    $urlPrefix = "";
    $target_dir = "uploads/";
    $filename = time() . '-' . random_int(1, 9999) . substr($_FILES["fileToUpload"]["name"], strpos($_FILES["fileToUpload"]["name"], '.'));
    // echo $filename. "<br>";
    $target_file = $target_dir . basename($filename);
    // $target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
    $uploadOk = 1;
    $imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

    // Check if image file is a actual image or fake image
    $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
    if ($check !== false) {
        $uploadOk = 1;
    } else {
        $errormsg = "File is not an image.";
        $uploadOk = 0;
    }

    // Check if file already exists
    if (file_exists($target_file)) {
        $errormsg = "Sorry, file already exists.";
        $uploadOk = 0;
    }

    // Check file size
    if ($_FILES["fileToUpload"]["size"] > 500000) {
        $errormsg = "Sorry, your file is too large.";
        $uploadOk = 0;
    }

    // Allow certain file formats
    if (
        $imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
        && $imageFileType != "gif"
    ) {
        $errormsg = "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
        $uploadOk = 0;
    }

    // Check if $uploadOk is set to 0 by an error
    if ($uploadOk == 0) {
        // echo "Sorry, your file was not uploaded.";
        // if everything is ok, try to upload file
    } else {
        if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
            // echo "The file " . htmlspecialchars(basename($_FILES["fileToUpload"]["name"])) . " has been uploaded.";

            $username = 'goncalo';
            $categoria = $_POST["categoria"];
            $titulo = $_POST["postTitulo"];
            $timestamp = dataParaPortugues(gmdate("m d, Y", time()));
            $sql = "INSERT INTO post VALUES ( '" . $nr_post . "' ,'" . $username . "', '" . $titulo . "', '" . $timestamp . "', '1' , '" . $categoria . "',  '" . $urlPrefix . $target_file . "')";

            $conn = OpenCon();

            $result_post = mysqli_query($conn, $sql);

            CloseCon($conn);
        } else {
            // echo "Sorry, there was an error uploading your file.";
        }
    }
}
//Inserir as tags na base de dados ACABAR
function inserirTagsBaseDados($nr_post, $tags)
{
    // foreach ($ags as $key ) {
    //     # code...
    // }
    $sql = "SELECT COUNT(id_post) AS numeroDePosts FROM post;";

    $conn = OpenCon();

    $result_post = mysqli_query($conn, $sql);

    CloseCon($conn);

    return mysqli_fetch_assoc($result_post)["numeroDePosts"];
}

if (isset($_POST["post-criar-submit"])) {
    $novo_post = getNrPost();
    //Inserir ImagemCapa
    if (isset($_FILES["fileToUpload"])) {
        inserirPostBaseDeDados($novo_post);
    }

    //Inserir Conteudo
    if (isset($_POST["submitEditor"])) {
        inserirPostConteudoBaseDeDados($novo_post);
    }

    //Inserir Tags
    if (isset($_POST["tags"])) {
        inserirTagsBaseDados($nr_post, $_POST["tags"]);
    }
    header('Location: post-single.php?id_post=' . $novo_post);
}

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

    <!-- Template Main CSS File -->
    <link href="assets/css/style.css" rel="stylesheet">

    <!-- css pessoal -->
    <link rel="stylesheet" href="estilo-post-criar.css">

    <!-- EditorJS -->
    <script src="https://cdn.jsdelivr.net/npm/@editorjs/header@latest"></script>
    <script src="https://cdn.jsdelivr.net/npm/@editorjs/paragraph@latest"></script>
    <script src="https://cdn.jsdelivr.net/npm/@editorjs/embed@latest"></script>
    <script src="https://cdn.jsdelivr.net/npm/@editorjs/delimiter@latest"></script>
    <script src="https://cdn.jsdelivr.net/npm/@editorjs/quote@latest"></script>
    <script src="https://cdn.jsdelivr.net/npm/@editorjs/image@2.3.0"></script>

    <script src="editorJS/editor.js"></script>

    <!-- Tags -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.0/css/bootstrap.min.css" rel="stylesheet" />
    <link href="https://unpkg.com/@yaireo/tagify/dist/tagify.css" rel="stylesheet" type="text/css" />


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


    <pre>
    <?php
    echo "espaco <br>";
    var_dump($_POST);
    echo "espaco <br>";
    var_dump($_FILES);
    echo "espaco <br>";
    var_dump($_POST);
    echo "espaco <br>";
    var_dump($_GET);
    ?>
</pre>

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

                    <div class="col-lg-12 entries">

                        <article class="entry entry-single">
                            <div>
                                <h1 class="align-center">Crie o seu Post!</h1>
                                <p>Se necessário consulte o guia de como utilizar a nossa ferramenta de criação de posts <a class="link-info" href="">aqui</a></p>
                            </div>

                            <form action="#" method="post" enctype="multipart/form-data">

                                <div class="container bg-light">
                                    <div id="editorjs"></div>
                                </div>
                                <script src="editorJS/index.js"></script>
                                <input type="hidden" name="submitEditor" id="submitEditor">

                                <!-- Seccao para o utilizador escolher a categoria na qual se enquadra o seu post -->

                                <div class="mt-2">
                                    <label for="categoria">Escolha a categoria que o seu post aborda: </label>
                                    <select required class="form-select" aria-label="Default select example" name="categoria" id="categoria">
                                        <option disabled selected hidden>Clique para ver as categorias</option>
                                        <option value="Geral">Geral</option>
                                        <option value="Lifestyle">Lifestyle</option>
                                    </select>
                                </div>

                                <div class="mt-2">
                                    <label for="postTitulo" class="form-label mb-0">Titulo: </label>
                                    <input required class="form-control" type="text" placeholder="Titulo do seu Post" aria-label="default input example" name="postTitulo">
                                </div>

                                <div class="mt-2">
                                    <label for="formFile" class="form-label mb-0">Imagem de Capa: </label>
                                    <input required class="form-control" type="file" name="fileToUpload">
                                </div>


                                <!-- <div class="mt2">
                                    <label for="fileToUplaod">Imagem de Capa: </label>
                                    <input type="file" name="fileToUpload" id="fileToUpload">
                                </div> -->

                                <!-- Seccao para o utilizador escolher as tags associadas ao seu post -->
                                <div class="mt-2">
                                    Escolha os temas associados ao seu post:
                                    <input name='tags' value=' ' class="form-control" autofocus placeholder="Por exemplo: 'Guia', 'Uso Tópico'">
                                    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.0/js/bootstrap.min.js"></script>
                                    <script src="https://unpkg.com/@yaireo/tagify"></script>
                                    <script src="https://unpkg.com/@yaireo/tagify@3.1.0/dist/tagify.polyfills.min.js"></script>
                                    <script>
                                        // The DOM element you wish to replace with Tagify
                                        var input = document.querySelector('input[name=tags]');

                                        // initialize Tagify on the above input node reference
                                        new Tagify(input)
                                    </script>

                                    <!-- Seccao de publicar ou previsualizar o post -->
                                    <div class="btn-toolbar justify-content-between mt-2" role="toolbar" aria-label="Toolbar with button groups">
                                        <div class="btn-group" role="group" aria-label="First group">
                                            <button type="submit" name="post-criar-submit" onclick="gravarEditor()" value="submit" class="btn btn-primary">Publicar</button>
                                        </div>
                                        <!-- <div class="mt-3"> -->
                                        <div class="input-group">
                                            <!-- Button trigger modal -->
                                            <!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"> Launch demo modal</button>
                                                <button type="button" class="btn btn-outline-secondary" onclick="previsualizarPost()">Previsualizar Post</button> -->
                                            <!-- </div> -->
                                            <!-- </div> -->
                                        </div>
                                    </div>

                        </article><!-- End blog entry -->

                        </form>

                    </div>

                </div>
        </section><!-- End Blog Single Section -->

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

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body" id="conteudo-modal">

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</body>

<script>
    function gravarEditor() {
        editor.save().then((output) => {
            document.getElementById('submitEditor').setAttribute('value', JSON.stringify(output));

        }).catch((error) => {
            document.getElementById('submitEditor').setAttribute('value', "");

        });
    }

    var outputData;

    function previsualizarPost() {
        editor.save().then((outputData) => {
            // JSON to Object / Array
            var i = 0;
            var conteudoTotal = "";
            while (outputData.blocks[i] != null) {

                switch (outputData.blocks[i].type) {
                    case "paragraph":
                        var conteudo = outputData.blocks[i].data.text;
                        conteudoTotal += "<p>" + conteudo + "</p>";
                        break;

                    case "header":
                        var conteudo = outputData.blocks[i].data.text;
                        conteudoTotal += "<h3>" + conteudo + "</h3>";
                        break;

                    case "quote":
                        var conteudo = outputData.blocks[i].data.text;
                        var caption = outputData.blocks[i].data.caption;
                        conteudoTotal += "<blockquote> <p> " + conteudo + " - " + caption + "</p> </blockquote>";
                        break;

                    case "image":
                        var conteudo = outputData.blocks[i].data.file.url;
                        var textoAlt = outputData.blocks[i].data.caption;
                        conteudoTotal += "<img src=" + conteudo + " class='img-fluid' alt=" + caption + ">";
                        break;

                    case "delimiter":
                        conteudoTotal += "<h1 class='text-center fs-1'>***</h1>";
                        break;

                    default:
                        break;
                }
                console.log('Article data: ', outputData.blocks[i].data.text);
                i++;
            }
            document.getElementById('conteudo-modal').innerHTML = conteudoTotal;

        }).catch((error) => {
            console.log('Saving failed: ', error);
        });
    }
</script>

</html>