<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <title>Vcreate Tech Global / Vcreate Technologies</title>

    <link rel="stylesheet" href="css/style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome 7 -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.0/css/all.min.css">

    <!-- v4 compatibility for old "fa fa-..." class names -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.0/css/v4-shims.min.css">

    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">

    <script src="js/meta.js" defer></script>

    <!-- owl caroual -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css">

    <!-- Font icon -->
    <link rel="shortcut icon" href="images/favicon.ico">

</head>

<body>
    <div id="pre-loader">
        <div class="loader-ring">
            <img src="images/logo3.png" alt="">
        </div>
    </div>



    <!-- Navbar -->
    <?php include("reusable/navbar.php"); ?>


    
    <!-- background img section -->
    <section class="vcreate-bg">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="contact-maintext text-white text-center ">
                      <h1>VCreate Group Tree Map</h1>
                    <p>
                        Explore the global structure of VCreate Group and its subsidiaries, <br>
                        showcasing innovation, technology, and strategic business units across the world.
                    </p>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section class="tree-map-section py-5 bg-white">
    <div class="container">
        <h2 class="text-center mb-4">VCreate Group Structure</h2>
        <div class="tree-map">
            <div class="tree-node parent">
                <h4>VCreate Group</h4>
                <div class="tree-children">
                    <div class="tree-node child">
                        <h5>VCreate Tech Global Ltd (USA)</h5>
                    </div>
                    <div class="tree-node child">
                        <h5>VCreate Tech Global LLC (UAE)</h5>
                    </div>
                    <div class="tree-node child">
                        <h5>VCreate Innovations Pvt Ltd (India)</h5>
                    </div>
                    <!-- Add more subsidiaries here -->
                </div>
            </div>
        </div>
    </div>
</section>


     <!-- footer -->

    <?php include("reusable/footer.php"); ?>


    <div id="back-to-top"><a class="top arrow" href="#top"><i class="fa fa-angle-up"></i> </a></div>


    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <!-- 2️⃣ jQuery UI (needed for $.widget) -->
    <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.min.js"></script>
    <!-- 3️⃣ Your raindrop.js -->
    <script src="js/raindrop.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="js/combine.js"></script>
