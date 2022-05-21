<!-- 
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
 -->

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>Portfolio - Company Bootstrap Template</title>
    <meta content="" name="description">
    <meta content="" name="keywords">

    <!-- Favicons -->
    <link href="assets/img/favicon.png" rel="icon">
    <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Roboto:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <!-- Importar JQuery -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>


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

    <!-- =======================================================
  * Template Name: Company - v4.6.1
  * Template URL: https://bootstrapmade.com/company-free-html-bootstrap-template/
  * Author: BootstrapMade.com
  * License: https://bootstrapmade.com/license/
  ======================================================== -->
</head>

<style>
    .btn-get-started {
        background: #bf46e8;
        border: 2px solid #bf46e8;
        color: #fff;
        text-decoration: none;
        transition: 0.5s;

    }

    .btn-get-started:hover {
        background-color: white;
        border: 1px, blue;
    }
</style>

<body>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Nome do Protocolo</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <h6>Sintomas</h6>
                        <p>Lista de sintomas</p>
                    </div>
                    <div class="row">
                        <h6>Sintomas</h6>
                        <p>Lista de sintomas</p>
                    </div>
                    <div class="row">
                        <h6>Sintomas</h6>
                        <p>Lista de sintomas</p>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-get-started" data-bs-dismiss="modal">Fechar</button>
                </div>
            </div>
        </div>
    </div>

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
                    <li><a href="portfolio.html" class="active">Portfolio</a></li>
                    <li><a href="pricing.html">Pricing</a></li>
                    <li><a href="blog.html">Blog</a></li>
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
                    <h2>Portfolio</h2>
                    <ol>
                        <li><a href="index.html">Home</a></li>
                        <li>Portfolio</li>
                    </ol>
                </div>

            </div>
        </section><!-- End Breadcrumbs -->

        <!-- ======= Portfolio Section ======= -->
        <section id="portfolio" class="portfolio">
            <div class="container" data-aos="fade">

                <!-- Barra de pesquisa -->
                <div class="row">
                    <div class="col-lg-4"></div>
                    <div class="col-lg-4 d-flex justify-content-center">
                        <form action="#" method="get" class="w-100">
                            <div class="input-group mb-3 mt-3">
                                <input type="text" class="form-control border-end-0 " name="pesquisa" placeholder="Patologia ou Sintomas associados" aria-label="Recipient's username" aria-describedby="button-addon2">
                                <button class="btn border border-start-0 material-symbols-outlined font fs-4" type="submit" id="button-addon2">find_in_page</button>
                            </div>
                        </form>
                    </div>
                </div>

                <!-- WAZA ACABAR O DESIGN DA MODAL -->
                <!-- Lista de Protocolos -->
                <div class="row">

                    <div class="col-lg-4 col-md-4">
                        <div class="card mb-2">
                            <div class="card-body">
                                <h5 class="card-title">Nome da patologia</h5>
                                <p class="card-text">Sintomas -> A ideia e ter aqui os sintomas que o protocolo tenta ajudar.</p>

                                <a class="stretched-link" data-toggle="collapse" href="#collapse-collapsed4" aria-expanded="true" aria-controls="collapse-collapsed4" id="heading-collapsed">
                                    Ver mais
                                </a>
                                <div id="collapse-collapsed4" class="collapse mt-4" aria-labelledby="heading-collapsed">
                                    <h6 class="card-title">Descrição</h6>
                                    <p>Descrição do protocolo e.g este protcolo tem como objetivo</p>

                                    <h6 class="card-title">Duração Sugerida</h6>
                                    <p class="card-text">6 a 12 semanas</p>

                                    <h6 class="card-tittle">Protocolo</h6>

                                    <ol class="list-group list-group">
                                        <li class="list-group-item d-flex justify-content-between align-items-start">
                                            <div class="ms-2 me-auto">
                                                <div class="fw-bold">Oleo a utilizar</div>
                                                O que fazer
                                            </div>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between align-items-start">
                                            <div class="ms-2 me-auto">
                                                <div class="fw-bold">Oleo a utilizar</div>
                                                O que fazer
                                            </div>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between align-items-start">
                                            <div class="ms-2 me-auto">
                                                <div class="fw-bold">Oleo a utilizar</div>
                                                O que fazer
                                            </div>
                                        </li>

                                    </ol>




                                </div>
                            </div>
                        </div>
                        
                        <div class="card mb-2">
                            <div class="card-body">
                                <h5 class="card-title">Nome da patologia</h5>
                                <p class="card-text">Sintomas -> A ideia e ter aqui os sintomas que o protocolo tenta ajudar.</p>

                                <a class="stretched-link" data-toggle="collapse" href="#collapse-collapsed4" aria-expanded="true" aria-controls="collapse-collapsed4" id="heading-collapsed">
                                    Ver mais
                                </a>
                                <div id="collapse-collapsed4" class="collapse mt-4" aria-labelledby="heading-collapsed">
                                    <h6 class="card-title">Descrição</h6>
                                    <p>Descrição do protocolo e.g este protcolo tem como objetivo</p>

                                    <h6 class="card-title">Duração Sugerida</h6>
                                    <p class="card-text">6 a 12 semanas</p>

                                    <h6 class="card-tittle">Protocolo</h6>

                                    <ol class="list-group list-group">
                                        <li class="list-group-item d-flex justify-content-between align-items-start">
                                            <div class="ms-2 me-auto">
                                                <div class="fw-bold">Oleo a utilizar</div>
                                                O que fazer
                                            </div>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between align-items-start">
                                            <div class="ms-2 me-auto">
                                                <div class="fw-bold">Oleo a utilizar</div>
                                                O que fazer
                                            </div>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between align-items-start">
                                            <div class="ms-2 me-auto">
                                                <div class="fw-bold">Oleo a utilizar</div>
                                                O que fazer
                                            </div>
                                        </li>

                                    </ol>




                                </div>
                            </div>
                        </div>

                        <div class="card mb-2">
                            <div class="card-body">
                                <h5 class="card-title">Nome da patologia</h5>
                                <p class="card-text">Sintomas -> A ideia e ter aqui os sintomas que o protocolo tenta ajudar.</p>

                                <a class="stretched-link" data-toggle="collapse" href="#collapse-collapsed4" aria-expanded="true" aria-controls="collapse-collapsed4" id="heading-collapsed">
                                    Ver mais
                                </a>
                                <div id="collapse-collapsed4" class="collapse mt-4" aria-labelledby="heading-collapsed">
                                    <h6 class="card-title">Descrição</h6>
                                    <p>Descrição do protocolo e.g este protcolo tem como objetivo</p>

                                    <h6 class="card-title">Duração Sugerida</h6>
                                    <p class="card-text">6 a 12 semanas</p>

                                    <h6 class="card-tittle">Protocolo</h6>

                                    <ol class="list-group list-group">
                                        <li class="list-group-item d-flex justify-content-between align-items-start">
                                            <div class="ms-2 me-auto">
                                                <div class="fw-bold">Oleo a utilizar</div>
                                                O que fazer
                                            </div>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between align-items-start">
                                            <div class="ms-2 me-auto">
                                                <div class="fw-bold">Oleo a utilizar</div>
                                                O que fazer
                                            </div>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between align-items-start">
                                            <div class="ms-2 me-auto">
                                                <div class="fw-bold">Oleo a utilizar</div>
                                                O que fazer
                                            </div>
                                        </li>

                                    </ol>




                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="col-lg-4 col-md-4">
                        <div class="card mb-2">
                            <div class="card-body">
                                <h5 class="card-title">Nome da patologia</h5>
                                <p class="card-text">Sintomas -> A ideia e ter aqui os sintomas que o protocolo tenta ajudar.</p>

                                <a class="stretched-link" data-toggle="collapse" href="#collapse-collapsed4" aria-expanded="true" aria-controls="collapse-collapsed4" id="heading-collapsed">
                                    Ver mais
                                </a>
                                <div id="collapse-collapsed4" class="collapse mt-4" aria-labelledby="heading-collapsed">
                                    <h6 class="card-title">Descrição</h6>
                                    <p>Descrição do protocolo e.g este protcolo tem como objetivo</p>

                                    <h6 class="card-title">Duração Sugerida</h6>
                                    <p class="card-text">6 a 12 semanas</p>

                                    <h6 class="card-tittle">Protocolo</h6>

                                    <ol class="list-group list-group">
                                        <li class="list-group-item d-flex justify-content-between align-items-start">
                                            <div class="ms-2 me-auto">
                                                <div class="fw-bold">Oleo a utilizar</div>
                                                O que fazer
                                            </div>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between align-items-start">
                                            <div class="ms-2 me-auto">
                                                <div class="fw-bold">Oleo a utilizar</div>
                                                O que fazer
                                            </div>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between align-items-start">
                                            <div class="ms-2 me-auto">
                                                <div class="fw-bold">Oleo a utilizar</div>
                                                O que fazer
                                            </div>
                                        </li>

                                    </ol>




                                </div>
                            </div>
                        </div>
                        
                        <div class="card mb-2">
                            <div class="card-body">
                                <h5 class="card-title">Nome da patologia</h5>
                                <p class="card-text">Sintomas -> A ideia e ter aqui os sintomas que o protocolo tenta ajudar.</p>

                                <a class="stretched-link" data-toggle="collapse" href="#collapse-collapsed4" aria-expanded="true" aria-controls="collapse-collapsed4" id="heading-collapsed">
                                    Ver mais
                                </a>
                                <div id="collapse-collapsed4" class="collapse mt-4" aria-labelledby="heading-collapsed">
                                    <h6 class="card-title">Descrição</h6>
                                    <p>Descrição do protocolo e.g este protcolo tem como objetivo</p>

                                    <h6 class="card-title">Duração Sugerida</h6>
                                    <p class="card-text">6 a 12 semanas</p>

                                    <h6 class="card-tittle">Protocolo</h6>

                                    <ol class="list-group list-group">
                                        <li class="list-group-item d-flex justify-content-between align-items-start">
                                            <div class="ms-2 me-auto">
                                                <div class="fw-bold">Oleo a utilizar</div>
                                                O que fazer
                                            </div>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between align-items-start">
                                            <div class="ms-2 me-auto">
                                                <div class="fw-bold">Oleo a utilizar</div>
                                                O que fazer
                                            </div>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between align-items-start">
                                            <div class="ms-2 me-auto">
                                                <div class="fw-bold">Oleo a utilizar</div>
                                                O que fazer
                                            </div>
                                        </li>

                                    </ol>




                                </div>
                            </div>
                        </div>
                        
                        <div class="card mb-2">
                            <div class="card-body">
                                <h5 class="card-title">Nome da patologia</h5>
                                <p class="card-text">Sintomas -> A ideia e ter aqui os sintomas que o protocolo tenta ajudar.</p>

                                <a class="stretched-link" data-toggle="collapse" href="#collapse-collapsed4" aria-expanded="true" aria-controls="collapse-collapsed4" id="heading-collapsed">
                                    Ver mais
                                </a>
                                <div id="collapse-collapsed4" class="collapse mt-4" aria-labelledby="heading-collapsed">
                                    <h6 class="card-title">Descrição</h6>
                                    <p>Descrição do protocolo e.g este protcolo tem como objetivo</p>

                                    <h6 class="card-title">Duração Sugerida</h6>
                                    <p class="card-text">6 a 12 semanas</p>

                                    <h6 class="card-tittle">Protocolo</h6>

                                    <ol class="list-group list-group">
                                        <li class="list-group-item d-flex justify-content-between align-items-start">
                                            <div class="ms-2 me-auto">
                                                <div class="fw-bold">Oleo a utilizar</div>
                                                O que fazer
                                            </div>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between align-items-start">
                                            <div class="ms-2 me-auto">
                                                <div class="fw-bold">Oleo a utilizar</div>
                                                O que fazer
                                            </div>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between align-items-start">
                                            <div class="ms-2 me-auto">
                                                <div class="fw-bold">Oleo a utilizar</div>
                                                O que fazer
                                            </div>
                                        </li>

                                    </ol>




                                </div>
                            </div>
                        </div>
                    </div>
                    

                    <div class="col-lg-4 col-md-4">
                        <div class="card mb-2">
                            <div class="card-body">
                                <h5 class="card-title">Nome da patologia</h5>
                                <p class="card-text">Sintomas -> A ideia e ter aqui os sintomas que o protocolo tenta ajudar.</p>

                                <a class="stretched-link" data-toggle="collapse" href="#collapse-collapsed4" aria-expanded="true" aria-controls="collapse-collapsed4" id="heading-collapsed">
                                    Ver mais
                                </a>
                                <div id="collapse-collapsed4" class="collapse mt-4" aria-labelledby="heading-collapsed">
                                    <h6 class="card-title">Descrição</h6>
                                    <p>Descrição do protocolo e.g este protcolo tem como objetivo</p>

                                    <h6 class="card-title">Duração Sugerida</h6>
                                    <p class="card-text">6 a 12 semanas</p>

                                    <h6 class="card-tittle">Protocolo</h6>

                                    <ol class="list-group list-group">
                                        <li class="list-group-item d-flex justify-content-between align-items-start">
                                            <div class="ms-2 me-auto">
                                                <div class="fw-bold">Oleo a utilizar</div>
                                                O que fazer
                                            </div>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between align-items-start">
                                            <div class="ms-2 me-auto">
                                                <div class="fw-bold">Oleo a utilizar</div>
                                                O que fazer
                                            </div>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between align-items-start">
                                            <div class="ms-2 me-auto">
                                                <div class="fw-bold">Oleo a utilizar</div>
                                                O que fazer
                                            </div>
                                        </li>

                                    </ol>




                                </div>
                            </div>
                        </div>
                        
                        <div class="card mb-2">
                            <div class="card-body">
                                <h5 class="card-title">Nome da patologia</h5>
                                <p class="card-text">Sintomas -> A ideia e ter aqui os sintomas que o protocolo tenta ajudar.</p>

                                <a class="stretched-link" data-toggle="collapse" href="#collapse-collapsed4" aria-expanded="true" aria-controls="collapse-collapsed4" id="heading-collapsed">
                                    Ver mais
                                </a>
                                <div id="collapse-collapsed4" class="collapse mt-4" aria-labelledby="heading-collapsed">
                                    <h6 class="card-title">Descrição</h6>
                                    <p>Descrição do protocolo e.g este protcolo tem como objetivo</p>

                                    <h6 class="card-title">Duração Sugerida</h6>
                                    <p class="card-text">6 a 12 semanas</p>

                                    <h6 class="card-tittle">Protocolo</h6>

                                    <ol class="list-group list-group">
                                        <li class="list-group-item d-flex justify-content-between align-items-start">
                                            <div class="ms-2 me-auto">
                                                <div class="fw-bold">Oleo a utilizar</div>
                                                O que fazer
                                            </div>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between align-items-start">
                                            <div class="ms-2 me-auto">
                                                <div class="fw-bold">Oleo a utilizar</div>
                                                O que fazer
                                            </div>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between align-items-start">
                                            <div class="ms-2 me-auto">
                                                <div class="fw-bold">Oleo a utilizar</div>
                                                O que fazer
                                            </div>
                                        </li>

                                    </ol>




                                </div>
                            </div>
                        </div>
                        
                        <div class="card mb-2">
                            <div class="card-body">
                                <h5 class="card-title">Nome da patologia</h5>
                                <p class="card-text">Sintomas -> A ideia e ter aqui os sintomas que o protocolo tenta ajudar.</p>

                                <a class="stretched-link" data-toggle="collapse" href="#collapse-collapsed4" aria-expanded="true" aria-controls="collapse-collapsed4" id="heading-collapsed">
                                    Ver mais
                                </a>
                                <div id="collapse-collapsed4" class="collapse mt-4" aria-labelledby="heading-collapsed">
                                    <h6 class="card-title">Descrição</h6>
                                    <p>Descrição do protocolo e.g este protcolo tem como objetivo</p>

                                    <h6 class="card-title">Duração Sugerida</h6>
                                    <p class="card-text">6 a 12 semanas</p>

                                    <h6 class="card-tittle">Protocolo</h6>

                                    <ol class="list-group list-group">
                                        <li class="list-group-item d-flex justify-content-between align-items-start">
                                            <div class="ms-2 me-auto">
                                                <div class="fw-bold">Oleo a utilizar</div>
                                                O que fazer
                                            </div>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between align-items-start">
                                            <div class="ms-2 me-auto">
                                                <div class="fw-bold">Oleo a utilizar</div>
                                                O que fazer
                                            </div>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between align-items-start">
                                            <div class="ms-2 me-auto">
                                                <div class="fw-bold">Oleo a utilizar</div>
                                                O que fazer
                                            </div>
                                        </li>

                                    </ol>




                                </div>
                            </div>
                        </div>
                    </div>
                    


                </div>

            </div>

        </section><!-- End Portfolio Section -->

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