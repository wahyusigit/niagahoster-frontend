<template>
    <div class="py-1 features-icons text-center">
        <div class="container">
            <div class="d-flex align-items-start flex-column align-items-center justify-content-center">
                <h2 class="p-2">Semua Paket Hosting Sudah Termasuk</h2>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                    <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                        <div class="features-icons-icon d-flex">
                            <img class="features-icons-img" src="/svg/icon PHP Hosting_PHP Semua Versi.svg">
                        </div>
                        <h3 class="features-title">PHP Semua Versi</h3>
                        <p class="lead mb-0">Pilih mulai dari versi PHP 5.3 s/d PHP 7. Ubah sesuka Anda!</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                    <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                        <div class="features-icons-icon d-flex">
                            <img class="features-icons-img" src="/svg/icon PHP Hosting_My SQL.svg">
                        </div>
                        <h3 class="features-title">MySQL Versi 5.6</h3>
                        <p class="lead mb-0">Nikmati MySQL versi terbaru, tercepat dan kaya akan fitur.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                    <div class="features-icons-item mx-auto mb-0 mb-lg-3">
                        <div class="features-icons-icon d-flex">
                            <img class="features-icons-img" src="/svg/icon PHP Hosting_CPanel.svg">
                        </div>
                        <h3 class="features-title">Panel Hosting Cpanel</h3>
                        <p class="lead mb-0">Kelola website dengan panel canggih yang familiar di hati Anda.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                    <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                        <div class="features-icons-icon d-flex">
                            <img class="features-icons-img" src="/svg/icon PHP Hosting_garansi uptime.svg">
                        </div>
                        <h3 class="features-title">Garansi Uptime 99.9%</h3>
                        <p class="lead mb-0">Data center yang mendukung kelangsungan website Anda 24/7.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                    <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                        <div class="features-icons-icon d-flex">
                            <img class="features-icons-img" src="/svg/icon PHP Hosting_InnoDB.svg">
                        </div>
                        <h3 class="features-title">Database InnoDB Unlimited</h3>
                        <p class="lead mb-0">Jumlah dan ukuran database yang tumbuh sesuai kebutuhan Anda.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                    <div class="features-icons-item mx-auto mb-0 mb-lg-3">
                        <div class="features-icons-icon d-flex">
                            <img class="features-icons-img" src="/svg/icon PHP Hosting_My SQL remote.svg">
                        </div>
                        <h3 class="features-title">Wildcard Remote MySQL</h3>
                        <p class="lead mb-0">Mendukung s/d 25 max_user_connections dan 100 max_connections.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style>
    .showcase .showcase-text {
        padding: 3rem;
    }

    .showcase .showcase-img {
        min-height: 30rem;
        background-size: cover;
    }

    @media (min-width: 768px) {
        .showcase .showcase-text {
            padding: 7rem;
        }
    }

    .features-title {
        font-size: 1.1rem;
        font-weight: 700;
    }

    .features-icons {
        padding-top: 7rem;
        padding-bottom: 7rem;
    }

    .features-icons-img {
        margin: 0px auto;
        width: 60px;
    }

    .features-icons .features-icons-item {
        max-width: 20rem;
    }

    .features-icons .features-icons-item .features-icons-icon {
        height: 7rem;
    }

    .features-icons .features-icons-item .features-icons-icon i {
        font-size: 4.5rem;
    }

    .features-icons .features-icons-item:hover .features-icons-icon i {
        font-size: 5rem;
    }

    .testimonials {
        padding-top: 7rem;
        padding-bottom: 7rem;
    }

    .testimonials .testimonial-item {
        max-width: 18rem;
    }

    .testimonials .testimonial-item img {
        max-width: 12rem;
        box-shadow: 0px 5px 5px 0px #adb5bd;
    }

    .call-to-action {
        position: relative;
        background-color: #343a40;
        /* background: url("../img/bg-masthead.jpg") no-repeat center center; */
        background-size: cover;
        padding-top: 7rem;
        padding-bottom: 7rem;
    }

    .call-to-action .overlay {
        position: absolute;
        background-color: #212529;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        opacity: 0.3;
    }

    footer.footer {
        padding-top: 4rem;
        padding-bottom: 4rem;
    }
</style>