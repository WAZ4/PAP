<?php
session_start();

function dataParaPortugues($data)
{
    // jan. fev. mar. abr. maio jun. jul. ago. set. out. nov. dez.
    $mesesPt = array('01' => "jan", '02' => "fev", '03' => "mar", '04' => "abr", '05' => "maio", '06' => "jun", '07' => "jul", '08' => "ago", '09' => "set", '10' => "out", '11' => 'nov', '12' => "dez");
    $mesIng = substr($data, 0, 2);
    $mes = $mesesPt[$mesIng] . substr($data, 2, strlen($data) - 2);
    return $mes;
}

if (isset($_SESSION["NIVEL_UTILIZADOR"]) && $_SESSION["NIVEL_UTILIZADOR"] == 2) {

    include("../conectarBd.php");


    if (isset($_POST["tipo"])) {

        $nomeFicheiro = "OilCentral-Utilizadores";

        switch ($_POST["tipo"]) {
            case 'newsletter':
                $sql = "SELECT user_ID, user_nome, user_email, user_nivel  FROM user WHERE user_mark = 1";
                $nomeFicheiro .= "-Newsletter";
                break;
            case 'todos':
                $sql = "SELECT user_ID, user_nome, user_email, user_nivel FROM user";
                break;
            default:
                break;
        }

        $data = str_replace(",", "", dataParaPortugues(gmdate("m d, Y", time())));

        $nomeFicheiro .= "-" . $data;


        $conn = OpenCon();
        $stmt = $conn->prepare($sql);
        // $stmt->bind_param('i', $user_ID);
        $stmt->execute();
        $resultado_user = $stmt->get_result();
        CloseCon($conn);


        header('Content-Type: text/csv; charset=utf-8');
        header('Content-Disposition: attachment; filename=' . $nomeFicheiro . '.csv');
        $output = fopen("php://output", "w");
        fputcsv($output, array('ID', 'Nome', 'Email', 'Nivel'));
        while ($row = $resultado_user->fetch_assoc()) {
            // var_dump($row);
            fputcsv($output, $row);
        }
        fclose($output);
    }
} else {
    header("Location: utilizadores.php");
}
