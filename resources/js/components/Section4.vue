<template>
    <div class="my-4 py-1">
        <div class="container">
            <div class="row align-items-start justify-content-center mb-3 text-center">
                <div class="card mb-4 mx-0 col-10 col-sm-6 col-md-6 col-lg-3">
                    <div class="card-header bg-white py-2">
                        <h4 class="my-0 font-weight-bold">Bayi</h4>
                    </div>
                    <div class="card-body border-bottom pt-2 pb-0 font-family-montserrat">
                        <p class="mb-0"><s>Rp. {{ priceLists.bayi.old_price }}</s></p>
                        <p class="card-title pricing-card-title mb-0">
                            <sup class="sup-2x">
                                Rp
                            </sup>
                            <span class="large-price">{{ priceLists.bayi.new_price_large }}</span>
                            <sup class="sup-2x">
                                <b>.{{ priceLists.bayi.new_price_small }}</b>/ bln
                            </sup>
                        </p>
                    </div>
                    <div class="card-body border-bottom py-2">
                        <b>938</b> Pengguna Terdaftar
                    </div>
                    <div class="card-body py-2">
                        <ul class="list-unstyled mt-2 mb-4">
                            <li class="py-1"><b>0.5X RESOURCE POWER</b></li>
                            <li class="py-1"><b>500 MB</b> Disk Space</li>
                            <li class="py-1"><b>Unlimited</b> Bandwidth</li>
                            <li class="py-1"><b>Unlimited</b> Database</li>
                            <li class="py-1"><b>1</b> Domain</li>
                            <li class="py-1"><b>Instant</b> Backup</li>
                            <li class="py-1"><b>Unlimited SSL</b> Gratis Selamanya</li>
                        </ul>
                    </div>
                    <div class="card-body">
                        <button type="button" class="btn btn-lg btn-block btn-light bg-white border-2 border-radius-40">Pilih Sekarang</button>
                    </div>
                </div>
                <div class="card mb-4 mx-0 col-10 col-sm-6 col-md-6 col-lg-3">
                    <div class="card-header bg-white py-2">
                        <h4 class="my-0 font-weight-bold">Pelajar</h4>
                    </div>
                    <div class="card-body border-bottom pt-2 pb-0 font-family-montserrat">
                        <p class="mb-0"><s>Rp. {{ priceLists.pelajar.old_price }}</s></p>
                        <p class="card-title pricing-card-title mb-0">
                            <sup class="sup-2x">
                                Rp
                            </sup>
                            <span class="large-price">{{ priceLists.pelajar.new_price_large }}</span>
                            <sup class="sup-2x">
                                <b>.{{ priceLists.pelajar.new_price_small }}</b>/ bln
                            </sup>
                        </p>
                    </div>
                    <div class="card-body border-bottom py-2">
                        <b>4.168</b> Pengguna Terdaftar
                    </div>
                    <div class="card-body py-2">
                        <ul class="list-unstyled mt-2 mb-4">
                            <li class="py-1"><b>1 X RESOURCE POWER</b></li>
                            <li class="py-1"><b>Unlimited</b> Disk Space</li>
                            <li class="py-1"><b>Unlimited</b> Bandwidth</li>
                            <li class="py-1"><b>Unlimited</b> POP3 Email</li>
                            <li class="py-1"><b>Unlimited</b> Databases</li>
                            <li class="py-1"><b>10</b> Addon Domains</li>
                            <li class="py-1"><b>Instant</b> Backup</li>
                            <li class="py-1"><b>Domain Gratis</b> Selamanya</li>
                            <li class="py-1"><b>Unlimited SSL</b> Gratis Selamanya</li>
                        </ul>
                    </div>
                    <div class="card-body">
                        <button type="button" class="btn btn-lg btn-block btn-light bg-white border-2 border-radius-40">Pilih Sekarang</button>
                    </div>
                </div>
                <div class="card border-primary mb-4 mx-0">
                    <div class="card-header card-primary py-2 card-title-primary card-title-highlight">
                        <h4 class="my-0 font-weight-bold title">Personal</h4>
                    </div>
                    <div class="card-body card-primary border-bottom pt-2 pb-0 font-family-montserrat">
                        <p class="mb-0"><s>Rp. {{ priceLists.personal.old_price }}</s></p>
                        <p class="card-title pricing-card-title mb-0">
                            <sup class="sup-2x">
                                Rp
                            </sup>
                            <span class="large-price">{{ priceLists.personal.new_price_large }}</span>
                            <sup class="sup-2x">
                                <b>.{{ priceLists.personal.new_price_small }}</b>/ bln
                            </sup>
                        </p>
                    </div>
                    <div class="card-body card-dark-primary py-2">
                        <b>10.017</b> Pengguna Terdaftar
                    </div>
                    <div class="card-body py-2">
                        <ul class="list-unstyled mt-2 mb-4">
                            <li class="py-1"><b>2X RESOURCE POWER</b></li>
                            <li class="py-1"><b>Unlimited</b> Disk Space</li>
                            <li class="py-1"><b>Unlimited</b> Bandwidth</li>
                            <li class="py-1"><b>Unlimited</b> POP3 Email</li>
                            <li class="py-1"><b>Unlimited</b> Databases</li>
                            <li class="py-1"><b>Unlimited</b> Addon Domains</li>
                            <li class="py-1"><b>Instant</b> Backup</li>
                            <li class="py-1"><b>Domain Gratis</b> Selamanya</li>
                            <li class="py-1"><b>Unlimited SSL</b> Gratis Selamanya</li>
                            <li class="py-1"><b>Private</b> Name Server</li>
                            <li class="py-1"><b>SpamAssasin</b> Mail Protection</li>
                        </ul>
                    </div>
                    <div class="card-body">
                        <button type="button" class="btn btn-lg btn-block btn-primary border-radius-40">Pilih Sekarang</button>
                    </div>
                </div>
                <div class="card mb-4 mx-0 col-10 col-sm-6 col-md-6 col-lg-3">
                    <div class="card-header bg-white py-2">
                        <h4 class="my-0 font-weight-bold">Bisnis</h4>
                    </div>
                    <div class="card-body border-bottom pt-2 pb-0 font-family-montserrat">
                        <p class="mb-0"><s>Rp. {{ priceLists.bisnis.old_price }}</s></p>
                        <p class="card-title pricing-card-title mb-0">
                            <sup class="sup-2x">
                                Rp
                            </sup>
                            <span class="large-price">{{ priceLists.bisnis.new_price_large }}</span>
                            <sup class="sup-2x">
                                <b>.{{ priceLists.bisnis.new_price_small }}</b>/ bln
                            </sup>
                        </p>
                    </div>
                    <div class="card-body border-bottom py-2">
                        <b>3.552</b> Pengguna Terdaftar
                    </div>
                    <div class="card-body py-2">
                        <ul class="list-unstyled mt-2 mb-4">
                            <li class="py-1"><b>3X RESOURCE POWER</b></li>
                            <li class="py-1"><b>Unlimited</b> Disk Space</li>
                            <li class="py-1"><b>Unlimited</b> Bandwidth</li>
                            <li class="py-1"><b>Unlimited</b> POP3 Email</li>
                            <li class="py-1"><b>Unlimited</b> Databases</li>
                            <li class="py-1"><b>Unlimited</b> Addon Domains</li>
                            <li class="py-1"><b>Magic Auto</b> Backup & Restore</li>
                            <li class="py-1"><b>Domain Gratis</b> Selamanya</li>
                            <li class="py-1"><b>Unlimited SSL</b> Gratis Selamanya</li>
                            <li class="py-1"><b>Private</b> Name Server</li>
                            <li class="py-1"><b>Prioritas</b> Layanan Support</li>
                            <li class="py-1">
                                <font-awesome-icon class="text-primary" icon="star"/>
                                <font-awesome-icon class="text-primary" icon="star"/>
                                <font-awesome-icon class="text-primary" icon="star"/>
                                <font-awesome-icon class="text-primary" icon="star"/>
                                <font-awesome-icon class="text-primary" icon="star"/>
                            </li>
                            <li class="py-1"><b>SpamExpert</b> Pro Mail Protection</li>
                        </ul>
                    </div>
                    <div class="card-body">
                        <button type="button" class="btn btn-lg btn-block btn-light bg-white border-2 border-radius-40">Diskon 40%</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        priceLists: [],
        data () {
            return {
                priceLists:{
                    bayi: {},
                    pelajar: {},
                    personal: {},
                    bisnis: {},
                },
            }
        },
        // mounted(){
        //     this.getPriceLists()
        // },
        
        // async created() {
        //     var self = this
        //     this.priceLists = await axios.get('price-lists', {
        //         responseType: 'json'
        //     });

        //     this.priceLists = this.priceLists.data
        //     console.log(self.priceLists)
        // },
        
        created () {
            // fetch the data when the view is created and the data is
            // already being observed
            this.fetchData()
        },
        watch: {
            // call again the method if the route changes
            '$route': 'fetchData'
        },
        methods: {
            fetchData () {
                var self = this
                // this.error = this.post = null
                // this.loading = true
                // replace `getPost` with your data fetching util / API wrapper
                // getPost(this.$route.params.id, (err, post) => {
                //     this.loading = false
                //     if (err) {
                //     this.error = err.toString()
                //     } else {
                //     this.post = post
                //     }
                // })

                axios.get('/price-lists').then(function (response) {
                    // alert('ss');
                    self.priceLists = response.data
                })
            }
        },
        // methods:{
            // setPriceLists(response){
            //     this.priceLists = response
            // },
            // getPriceLists(){
            //     var self = this
            //     // Optionally the request above could also be done as
            //     axios.get('/price-lists').then(function (response) {
            //         self.priceLists = response.data
            //     })
            //     .catch(function (error) {
            //         console.log(error);
            //     })
            //     .then(function () {
            //         // always executed
            //     });  
            // }
        // }
    }
</script>

<style>
    .large-price {
        font-size: 40px;
        font-weight: bold;
    }

    .sup-2x {
        top: -1.1rem;
        font-size: 14px;
    }

    .pricing-header {
        max-width: boldpx;
    }

    .card-deck .card {
        min-width: 220px;
    }

    .border-top {
        border-top: 1px solid #e5e5e5;
    }

    .border-bottom {
        border-bottom: 1px solid #e5e5e5;
    }

    .box-shadow {
        box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);
    }

    .border-2 {
        border: 2px solid #1c1c1c;
    }

    .card-primary {
        background: #298eea !important;
        color: #ffffff !important;
    }

    .card-body.card-primary {
        border-bottom: 1px solid #298eea !important;
    }

    .card-dark-primary {
        background: #177eda !important;
        color: #ffffff !important;
    }

    .border-primary {
        border: 1px solid #298eea;
    }

    .card-title-primary.card-title-highlight .title:after, .card-title-primary.card-title-highlight .title:before {
        position: absolute;
        content: '';
        top: -8px;
        left: -10px;
        background: url('/images/ribbon-best-seller.png') left top no-repeat;
        background-size: contain;
        width: 100px;
        height: 100px;
    }
    .card-body {
        padding: 2rem;
    }
</style>