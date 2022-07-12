<?php
session_start();
if (!(isset($_SESSION["NIVEL_UTILIZADOR"]) && $_SESSION["NIVEL_UTILIZADOR"] > 1)) header("Location: ../index.php");

function CallAPI($data)
{
    $method = "GET";
    $url = "https://api.clicky.com/api/stats/4";
    $curl = curl_init();

    switch ($method) {
        case "POST":
            curl_setopt($curl, CURLOPT_POST, 1);

            if ($data)
                curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
            break;
        case "PUT":
            curl_setopt($curl, CURLOPT_PUT, 1);
            break;
        default:
            if ($data)
                $url = sprintf("%s?%s", $url, http_build_query($data));
    }

    // Optional Authentication:
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, "username:password");

    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    $result = curl_exec($curl);
    curl_close($curl);

    return $result;
}

function getNumeroDeVisitasPaginasPrincipais()
{
    $data = array("site_id" => "101372064", "sitekey" => "c586a5321b8dbdf3", "type" => "visitors, pages", "date" => "last-7-days", "output" => "json");

    $res = CallAPI($data);
    $res = json_decode($res, true);
    // print_r($res);
    $array = $res[1]["dates"][0]["items"];

    $valoresDeConsulta = array("OleoSingle" => 0, "Protocolos" => 0, "Posts" => 0, "OleoSinglePercentagem" => "", "ProtocolosPercentagem" => "", "PostsPercentagem" => "");
    foreach ($array as $key => $value) {
        // var_dump($value["url"]);
        switch (true) {
            case stristr($value["url"], "oleo-single.php"):
                $valoresDeConsulta["OleoSingle"] += $value["value"];
                break;

            case stristr($value["url"], "protocolo.php"):
                $valoresDeConsulta["Protocolos"] += $value["value"];
                break;

            case stristr($value["url"], "post-single.php"):
                $valoresDeConsulta["Posts"] += $value["value"];
                break;

            default:
                # code...
                break;
        }
    }

    $total = $valoresDeConsulta["OleoSingle"] + $valoresDeConsulta["Protocolos"] + $valoresDeConsulta["Posts"];

    $valoresDeConsulta["OleoSinglePercentagem"] = round($valoresDeConsulta["OleoSingle"] / $total * 100, 1) . "%";
    $valoresDeConsulta["ProtocolosPercentagem"] = round($valoresDeConsulta["Protocolos"] / $total * 100, 1) . "%";
    $valoresDeConsulta["PostsPercentagem"] = round($valoresDeConsulta["Posts"] / $total * 100, 1) . "%";

    return $valoresDeConsulta;
}


function getNumeroVisitarTotais()
{
    $data = array("site_id" => "101372064", "sitekey" => "c586a5321b8dbdf3", "type" => "visitors", "date" => "last-7-days", "daily" => 1, "output" => "json");

    $diasDaSemana = array("'Domingo'", "'Segunda'", "'Terça'", "'Quarta'", "'Quinta'", "'Sexta'", "'Sábado'");

    $res = CallAPI($data);
    $res = json_decode($res, true);

    $array = $res[0]["dates"];

    $visitas = array("label" => "", "valores" => "");

    foreach ($array as $key => $value) {
        $visitas["label"] = $diasDaSemana[date("w", strtotime($value["date"]))] . ', ' . $visitas["label"];
        $visitas["valores"] = $value["items"][0]["value"] . ',' . $visitas["valores"];

        // echo $value["date"] . " - ";
        // echo $diasDaSemana[date("w", strtotime($value["date"]))]. " - ";
        // echo $value["items"][0]["value"]. "<br>";

    }
    // print_r($visitas["label"]);
    // print_r($visitas["valores"]);
    // print_r($array);
    return $visitas;
}

$visitas = getNumeroVisitarTotais();

$valoresPieChart = getNumeroDeVisitasPaginasPrincipais();
?>
<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>OilCentral - Dashboard</title>

    <!-- Favicon -->
    <link rel="apple-touch-icon" sizes="180x180" href="../imgs/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../imgs/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../imgs/favicon/favicon-16x16.png">
    <link rel="manifest" href="../imgs/favicon/site.webmanifest">
    <link rel="mask-icon" href="../imgs/favicon/safari-pinned-tab.svg" color="#bf46e8">
    <link rel="shortcut icon" href="../imgs/favicon/favicon.ico">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="msapplication-config" content="../imgs/favicon/browserconfig.xml">
    <meta name="theme-color" content="#ffffff">

    <!-- Custom fonts for this template-->
    <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">

    <!-- Custom styles for this template-->
    <link href="css/sb-admin-2.min.css" rel="stylesheet">

</head>

<body id="page-top">

    <!-- Page Wrapper -->
    <div id="wrapper">

        <?php
        include("sidebar.php");
        ?>

        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">

            <!-- Main Content -->
            <div id="content">

                <?php include("topbar.php"); ?>

                <!-- Begin Page Content -->
                <div class="container-fluid">

                    <!-- Content Row -->
                    <div class="row">

                        <!-- Area Chart -->
                        <div class="col-xl-8 col-lg-7">
                            <div class="card shadow mb-4">
                                <!-- Card Header - Dropdown -->
                                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h6 class="m-0 font-weight-bold text-primary">Visitas</h6>
                                </div>
                                <!-- Card Body -->
                                <div class="card-body">
                                    <div class="chart-area">
                                        <canvas id="myBarChart"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Pie Chart -->
                        <div class="col-xl-4 col-lg-5">
                            <div class="card shadow mb-4">
                                <!-- Card Header - Dropdown -->
                                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h6 class="m-0 font-weight-bold text-primary">Secções Visitadas</h6>

                                </div>
                                <!-- Card Body -->
                                <div class="card-body">
                                    <div class="chart-pie pt-4 pb-2">
                                        <canvas id="myPieChart"></canvas>
                                    </div>
                                    <div class="mt-4 text-center small">
                                        <span class="mr-2" style="white-space: nowrap;">
                                            <i class="fas fa-circle text-primary"></i> Óleos individuais - <?php echo $valoresPieChart["OleoSinglePercentagem"]; ?>
                                        </span>
                                        <span class="mr-2" style="white-space: nowrap;">
                                            <i class="fas fa-circle text-success"></i> Protocolos - <?php echo $valoresPieChart["ProtocolosPercentagem"]; ?>
                                        </span>
                                        <span class="mr-2" style="white-space: nowrap;">
                                            <i class="fas fa-circle text-info"></i> Publicações - <?php echo $valoresPieChart["PostsPercentagem"]; ?>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Content Row -->
                    <div class="row">
                        <div class="col-lg-6 mb-4">

                            <div class="card border-left-primary shadow h-100 py-2">
                                <a href="utilizadores.php" class="stretched-link text-decoration-none">
                                    <div class="card-body">
                                        <div class="row no-gutters align-items-center">
                                            <div class="col mr-2">
                                                <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                    Gerir Utilizadores</div>
                                                <div class="h6 mb-0 font-weight-bold text-gray-800">
                                                    Nesta página consegue gerir os Utilizadores do seu website.
                                                </div>
                                            </div>
                                            <div class="col-auto">
                                                <i class="fas fa-user fa-2x text-gray-300"></i>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-6 mb-4">
                            <div class="card border-left-primary shadow h-100 py-2">
                                <a href="posts.php" class="stretched-link text-decoration-none">
                                    <div class="card-body">
                                        <div class="row no-gutters align-items-center">
                                            <div class="col mr-2">
                                                <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                    Gerir Posts</div>
                                                <div class="h6 mb-0 font-weight-bold text-gray-800">
                                                    Nesta página consegue gerir os Posts do seu website.
                                                </div>
                                            </div>
                                            <div class="col-auto">
                                                <i class="fas fa-clipboard fa-2x text-gray-300"></i>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
                <!-- /.container-fluid -->

            </div>
            <!-- End of Main Content -->

            <?php include("footer.php"); ?>

        </div>
        <!-- End of Content Wrapper -->

    </div>
    <!-- End of Page Wrapper -->

    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
    </a>

    <!-- Bootstrap core JavaScript-->
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

    <!-- Core plugin JavaScript-->
    <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

    <!-- Custom scripts for all pages-->
    <script src="js/sb-admin-2.min.js"></script>

    <!-- Page level plugins -->
    <script src="vendor/chart.js/Chart.min.js"></script>

    <!-- Page level custom scripts -->
    <!-- <script src="js/demo/chart-bar-demo.js"></script> -->

    <!-- Script para o Pie Chart -->
    <script>
        // Set new default font family and font color to mimic Bootstrap's default styling
        Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
        Chart.defaults.global.defaultFontColor = '#858796';

        // Pie Chart Example
        var ctx = document.getElementById("myPieChart");
        var myPieChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ["Óleos", "Protocolos", "Publicações"],
                datasets: [{
                    data: [<?php echo $valoresPieChart["OleoSingle"] . ',' . $valoresPieChart["Protocolos"] . ',' . $valoresPieChart["Posts"] ?>],
                    backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
                    hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
                    hoverBorderColor: "rgba(234, 236, 244, 1)",
                }],
            },
            options: {
                maintainAspectRatio: false,
                tooltips: {
                    backgroundColor: "rgb(255,255,255)",
                    bodyFontColor: "#858796",
                    borderColor: '#dddfeb',
                    borderWidth: 1,
                    xPadding: 15,
                    yPadding: 15,
                    displayColors: false,
                    caretPadding: 10,
                },
                legend: {
                    display: false
                },
                cutoutPercentage: 80,
            },
        });

        function number_format(number, decimals, dec_point, thousands_sep) {
            // *     example: number_format(1234.56, 2, ',', ' ');
            // *     return: '1 234,56'
            number = (number + '').replace(',', '').replace(' ', '');
            var n = !isFinite(+number) ? 0 : +number,
                prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
                sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
                dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
                s = '',
                toFixedFix = function(n, prec) {
                    var k = Math.pow(10, prec);
                    return '' + Math.round(n * k) / k;
                };
            // Fix for IE parseFloat(0.55).toFixed(0) = 0;
            s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
            if (s[0].length > 3) {
                s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
            }
            if ((s[1] || '').length < prec) {
                s[1] = s[1] || '';
                s[1] += new Array(prec - s[1].length + 1).join('0');
            }
            return s.join(dec);
        }

        // Bar Chart Example
        var ctx2 = document.getElementById("myBarChart");
        var myBarChart2 = new Chart(ctx2, {
            type: 'bar',
            data: {
                labels: [<?php echo $visitas["label"]; ?>],
                datasets: [{
                    label: "Revenue",
                    backgroundColor: "#4e73df",
                    hoverBackgroundColor: "#2e59d9",
                    borderColor: "#4e73df",
                    data: [<?php echo $visitas["valores"]; ?>],
                }],
            },
            options: {
                maintainAspectRatio: false,
                layout: {
                    padding: {
                        left: 10,
                        right: 25,
                        top: 25,
                        bottom: 0
                    }
                },
                scales: {
                    xAxes: [{
                        gridLines: {
                            display: false,
                            drawBorder: false
                        },
                        maxBarThickness: 25,
                    }],
                    yAxes: [{
                        ticks: {
                            min: 0,
                            // maxTicksLimit: 5,
                            padding: 10,
                        },
                        gridLines: {
                            color: "rgb(234, 236, 244)",
                            zeroLineColor: "rgb(234, 236, 244)",
                            drawBorder: false,
                            borderDash: [2],
                            zeroLineBorderDash: [2]
                        }
                    }],
                },
                legend: {
                    display: false
                },
            }
        });
    </script>



</body>

</html>