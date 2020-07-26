<template>
    <div class="bg-primary">
        <div class="container py-4">
            <div class="row">
                <!-- <div class="d-flex col-12 col-sm-12 col-md-12 text-center text-md-left my-4"> -->
                    <p class="col-lg-9 col-md-9 col-12 text-center text-md-left contact-us">Perlu <b>BANTUAN?</b> Hubungi Kami : <b>0274-5305505</b></p>
                    <p class="col-lg-1 col-md-1 col-12 text-center text-md-left v-divider d-none d-lg-block"></p>
                    <span class="col-lg-2 col-md-2 col-12 text-center text-md-left contact-btn align-self-center"><button type="button" class="btn btn-xl btn-outline-white border-radius-40 px-3"><font-awesome-icon class="mx-2" icon="comments"/><span>Live Chat</span></button></span>
                <!-- </div> -->
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
    .contact-us {
        font-family: 'Montserrat', sans-serif;
        font-size: 1.8rem;
        margin-bottom: 0px;
        padding-top: 10px;
    }

    .contact-btn {
        padding-bottom: 10px;
    }

    .v-divider {
        border-left: 1px solid #f8f9fa1f;
        height: 60px;
        /* position: relative;
        top: -15px; */
        /* margin: auto 50px; */
    }

    .btn-outline-white {
        color: #fff;
        border: 2px solid #fff;
        background: none;
    }

    .btn-xl {
        font-size: 1rem;
    }

    .btn-xl svg {
        font-size: 1.8rem;
    }

    .btn-xl span {
        position: relative;
        top: -4px;
        padding-left: 10px;
    }
</style>