<template>
    <div class="bg-dark footer">
        <div class="container py-4">
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                    <h6 class="footer">HUBUNGI KAMI</h6>

                    <ul class="list-unstyled text-small">
                        <li>0274-5305505</li>
                        <li>Senin - Minggu</li>
                        <li>24 Jam Nonstop</li>
                    </ul>

                    <ul class="list-unstyled text-small">
                        <li>Jl. Selokan Mataram Monjali</li>
                        <li>Karangjati MT 1/304</li>
                        <li>Sinduadi, Mlati, Sleman</li>
                        <li>Yogyakarta 55284</li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                    <h6 class="footer">LAYANAN</h6>

                    <ul class="list-unstyled text-small">
                        <li>Domain</li>
                        <li>Shared Hosting</li>
                        <li>Cloud VPS Hosting</li>
                        <li>Managed VPS Hosting</li>
                        <li>Web Builder</li>
                        <li>Keamanan SSL / HTTPS</li>
                        <li>Jasa Pembuatan Website</li>
                        <li>Program Affiliasi</li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                    <h6 class="footer">SERVICE HOSTING</h6>

                    <ul class="list-unstyled text-small">
                        <li>Hosting Murah</li>
                        <li>Hosting Indonesia</li>
                        <li>Hosting Singapura SG</li>
                        <li>Hosting PHP</li>
                        <li>Hosting Wordpress</li>
                        <li>Hosting Laravel</li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                    <h6 class="footer">TUTORIAL</h6>

                    <ul class="list-unstyled text-small">
                        <li>Knowledgebase</li>
                        <li>Blog</li>
                        <li>Cara Pembayaran</li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                    <h6 class="footer">TENTANG KAMI</h6>

                    <ul class="list-unstyled text-small">
                        <li>Tim Niagahoster</li>
                        <li>Karir</li>
                        <li>Events</li>
                        <li>Penawaran & Promo Spesial</li>
                        <li>Kontak Kami</li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                    <h6 class="footer">KENAPA PILIH NIAGAHOSTER?</h6>

                    <ul class="list-unstyled text-small">
                        <li>Support Terbaik</li>
                        <li>Garansi Harga Termurah</li>
                        <li>Domain Gratis Selamanya</li>
                        <li>Datacenter Hosting Terbaik</li>
                        <li>Review Pelanggan</li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                    <h6 class="footer">NEWSLETTER</h6>
                    <div id="newsletter" class="input-group mb-3">
                        <input type="text" class="form-control border-radius-30" placeholder="Email" aria-label="Email"
                            aria-describedby="basic-addon2">
                        <div class="input-group-inline">
                            <button class="btn btn-primary border-radius-30" type="button">Berlangganan</button>
                        </div>
                    </div>
                    <ul class="list-unstyled text-small">
                        <li>Dapatkan promo dan konten menarik dari penyedia hosting terbaik Anda</li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-12 pt-5">
                    <img class="mx-2" src="/images/facebook-circle.png" alt="Facebook" width="50">
                    <img class="mx-2" src="/images/twitter-circle.png" alt="Twitter" width="50">
                    <img class="mx-2" src="/images/google-plus-circle.png" alt="Google Plus" width="50">
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <h6 class="footer">PEMBAYARAN</h6>
                    <img class="mr-1" src="/svg/logo-bca-bordered.svg" width="80">
                    <img class="mr-1" src="/svg/logo-mandiri-bordered.svg" width="80">
                    <img class="mr-1" src="/svg/logo-visa-bordered.svg" width="80">
                    <img class="mr-1" src="/svg/logo-mastercard-bordered.svg" width="80">
                    <img class="mr-1" src="/svg/logo-atmbersama-bordered.svg" width="80">
                    <img class="mr-1" src="/svg/logo-permatabank-bordered.svg" width="80">
                    <img class="mr-1" src="/svg/logo-prima-bordered.svg" width="80">
                    <img class="mr-1" src="/svg/logo-alto-bordered.svg" width="80">
                    <p class="pt-2">Aktlvasl Instan dengan e-Payment Hosting dan domain langsung aktif!</p>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-12 col-md-9 text-center text-md-left">
                    <span>Copyright '2016 Niagahoster I Hosting powered by PHP7, CloudLinux, CloudFlare. BitNinja and DC Biznet Technovillage Jakarta</span>
                    <span>Cloud VPS Murah powered by Webuzo Softaculous, Intel SSD and cloud computing technology</span>
                </div>
                <div class="col-12 col-md-3 text-center text-md-left">Syarat dan ketentuan | Kebijakan Privasi</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted(){
        }
    }
</script>

<style>
    h6.footer {
        font-weight: 500;
        color: #888888;
        padding-top: 10px;
        padding-bottom: 15px;
    }

    .footer {
        color: #b5b5b5;
    }

    #newsletter input {
        padding-top: 14px;
        padding-bottom: 14px;
        padding-left: 20px;
    }

    .input-group-inline {
        position: absolute;
        right: 10px;
        line-height: 47px;
        border-radius: 30px;
    }

    .input-group-inline button {
        padding-top: 10px;
        padding-bottom: 10px;
    }

    .border-radius-30 {
        border-radius: 30px !important;
    }
</style>