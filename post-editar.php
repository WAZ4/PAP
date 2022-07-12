<?php
include_once("conectarBd.php");
session_start();

$errormsg;

function verificarCriador($id_post)
{

    $conn = OpenCon();
    $sql = "SELECT * FROM post WHERE id_post=? AND user_ID = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('is', $id_post, $_SESSION["user_ID"]);
    $stmt->execute();
    $resultado_post = $stmt->get_result();
    CloseCon($conn);
    if ($resultado_post->num_rows == 0) {
        return false;
    }
    return true;
}

if ((!(isset($_GET["id_post"]) && verificarCriador($_GET["id_post"]))) && $_SESSION["NIVEL_UTILIZADOR"] != 2) {
    header("Location: index.php");
}
$nr_post = $_GET["id_post"];

//nr de posts criados com index 1 , que por consequencia do index 1 passa a ser o numero do novo post. Se existirem 2 posts os seus index vao ser 0 e 1 mas a funcao devolve 2, logo o novo post vai ser o nr 2

$po_Titulo = "";
$jsonString = "";
function lerDadosBd($id_post)
{
    global $jsonString;
    global $po_Titulo;

    $conn = OpenCon();
    $sql = "SELECT titulo, jsonString FROM post WHERE id_post = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('i', $id_post);
    $stmt->execute();
    $resultado_post = $stmt->get_result();
    CloseCon($conn);
    $row = $resultado_post->fetch_assoc();
    // var_dump($row["jsonString"]);
    $po_Titulo = $row["titulo"];
    $jsonString = $row["jsonString"];
}

//Atualizar conteudo do editor de texto na base de dados
function atualizarPostConteudoBaseDeDados($nr_post)
{

    $conn = OpenCon();
    $sql = "DELETE FROM post_conteudo_detail WHERE id_post = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('i', $nr_post);
    $stmt->execute();
    $result_protocolo_detalhe = $stmt->get_result();
    CloseCon($conn);

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

            $sql = "INSERT INTO `post_conteudo_detail` (`id_post`, `ordem`, `tipo`, `var1`, `var2`) VALUES ('" . $nr_post . "', '" . $ordem . "', '" . $tipo . "', '" . strip_tags($var1) . "', '" . strip_tags($var2) . "')";

            $conn = OpenCon();

            $result_post_conteudo_detail = mysqli_query($conn, $sql);

            // var_dump($result_post_conteudo_detail);

            CloseCon($conn);
        }
    }
}

//Atualizar os dados do cabecalho do post na base de dados
function atualizarPostBaseDeDados($nr_post)
{
    $titulo = $_POST["postTitulo"];
    $conn = OpenCon();
    $sql = "UPDATE post SET titulo = ?, jsonString = ? WHERE id_post = ?";
    $stmt = $conn->prepare($sql);
    // var_dump($_POST["submitEditor"]);
    $stmt->bind_param('ssi', $titulo, $_POST["submitEditor"], $nr_post);
    $stmt->execute();
    $result_protocolo_detalhe = $stmt->get_result();
    CloseCon($conn);
}

lerDadosBd($nr_post);

if (isset($_POST["post-criar-submit"])) {
    //atualizar ImagemCapa
    atualizarPostBaseDeDados($nr_post);

    //atualizar Conteudo
    if (isset($_POST["submitEditor"])) {
        atualizarPostConteudoBaseDeDados($nr_post);
    }

    header('Location: post-single.php?id_post=' . $nr_post);
}
// var_dump($_POST);
// 
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>OilCentral - Editar publicação</title>

    <!-- CSS BASE-->
    <?php
    include("estruturaPrincipal/head-css.php");
    ?>

    <!-- JS BASE-->
    <?php
    include("estruturaPrincipal/head-js.php");
    ?>

    <!-- CSS PESSOAL -->
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
    <?php
    include("estruturaPrincipal/header.php");
    ?>
    <!-- End Header -->

    <main id="main">

        <!-- ======= Breadcrumbs ======= -->
        <section id="breadcrumbs" class="breadcrumbs pt-4">
            <div class="container">

                <div class="d-flex justify-content-between align-items-center">
                    <h2>Editar Post</h2>
                    <ol>
                        <li><a href="index.php">Home</a></li>
                        <li><a href="posts.php">Blog</a></li>
                        <li>Editar Post</li>
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
                                <h1 class="align-center"> A editar publicação</h1>
                                <p>Se necessário consulte o guia de como utilizar a nossa ferramenta de criação de posts <a class="link-info" href="">aqui</a></p>
                            </div>

                            <form action="#" method="post" enctype="multipart/form-data">

                                <div class="container bg-light">
                                    <div id="editorjs"></div>
                                </div>
                                <script src="editorJS/index.js"></script>
                                <input type="hidden" name="submitEditor" id="submitEditor">

                                <!-- Seccao para o utilizador escolher a categoria na qual se enquadra o seu post -->

                                <!-- <div class="mt-2">
                                    <label for="categoria">Escolha a categoria que o seu post aborda: </label>
                                    <select required class="form-select" aria-label="Default select example" name="categoria" id="categoria">
                                        <option disabled selected hidden>Clique para ver as categorias</option>
                                        <?php //listarCategorias(); 
                                        ?>
                                    </select>
                                </div> -->

                                <div class="mt-2">
                                    <label for="postTitulo" class="form-label mb-0">Titulo: </label>
                                    <input required class="form-control" type="text" placeholder="Titulo do seu Post" aria-label="default input example" name="postTitulo" value="<?php echo $po_Titulo; ?>">
                                </div>

                                <!-- <div class="mt-2">
                                    <label for="formFile" class="form-label mb-0">Imagem de Capa: </label>
                                    <input required class="form-control" type="file" name="fileToUpload">
                                </div> -->

                                <!-- <div class="mt2">
                                    <label for="fileToUplaod">Imagem de Capa: </label>
                                    <input type="file" name="fileToUpload" id="fileToUpload">
                                </div> -->

                                <!-- Seccao para o utilizador escolher as tags associadas ao seu post -->
                                <div class="mt-2">
                                    <!-- Escolha os temas associados ao seu post:
                                    <input name='tags' value=' ' class="form-control" autofocus placeholder="Por exemplo: 'Guia', 'Uso Tópico'">
                                    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.0/js/bootstrap.min.js"></script>
                                    <script src="https://unpkg.com/@yaireo/tagify"></script>
                                    <script src="https://unpkg.com/@yaireo/tagify@3.1.0/dist/tagify.polyfills.min.js"></script>
                                    <script>
                                        // The DOM element you wish to replace with Tagify
                                        var input = document.querySelector('input[name=tags]');

                                        // initialize Tagify on the above input node reference
                                        new Tagify(input)
                                    </script> -->

                                    <!-- Seccao de publicar ou previsualizar o post -->
                                    <div class="btn-toolbar justify-content-between mt-2" role="toolbar" aria-label="Toolbar with button groups">
                                        <div class="btn-group" role="group" aria-label="First group">
                                            <button type="submit" name="post-criar-submit" onclick="gravarEditor()" value="submit" class="btn btn-primary">Editar</button>
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

    <?php include("estruturaPrincipal/footer.php"); ?>

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

<script>
    var JSONString = '<?php echo $jsonString; ?>';
    var JSONObject = JSON.parse(JSONString);
    console.log(JSONObject); // Dump all data of the Object in the console

    editor.isReady
        .then(() => {
            console.log('Editor.js is ready to work!')
            //draftBody = json.stringify()
            editor.render(JSONObject);

            /** Do anything you need after editor initialization */
        })
        .catch((reason) => {
            console.log(`Editor.js initialization failed because of ${reason}`)
        });
</script>

</html>