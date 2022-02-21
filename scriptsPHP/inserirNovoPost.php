HEMLSPECIALCHARS para remover tags
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div>
        <?php

        function inserirBaseDeDados($ordem, $tipo, $var1, $var2 = "")
        {
            include_once("../conectarBd.php");

            $sql = "INSERT INTO `post_conteudo_detail` (`id_post`, `ordem`, `tipo`, `var1`, `var2`) VALUES ('2', '" . $ordem . "', '" . $tipo . "', '" . $var1 . "', '" . $var2 . "')";

            $conn = OpenCon();

            $result_post_conteudo_detail = mysqli_query($conn, $sql);

            var_dump($result_post_conteudo_detail);

            CloseCon($conn);
        }
        // var_dump($_POST);
        $stringJson = $_POST["submitEditor"];
        $someObject = json_decode(json_encode(json_decode($stringJson)), true);
        print_r($someObject);
        echo "Aaaaa";

        echo "<br>";

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
                inserirBaseDeDados($ordem, $tipo, $var1, $var2);
            }
        }
        ?>

    </div>
</body>

</html>