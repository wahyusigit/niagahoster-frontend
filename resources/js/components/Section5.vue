<template>
    <div class="my-4 py-1 pb-3">
        <div class="container">
            <div class="d-flex align-items-start flex-column align-items-center justify-content-center mb-2">
                <h2 class="p-2 text-center">Powerful dengan Limit PHP yang Lebih Besar</h2>
            </div>

            <div class="row justify-content-center">
                <div class="col-10 col-sm-6">
                    <ul class="list-group list-group-striped">
                        <li class="list-group-item rounded-0 py-0 px-0">
                            <div class="d-flex">
                                <div class="p-2 flex-shrink-1"><font-awesome-icon class="mx-2 text-success" style="font-size: 20px" icon="check-circle"/></div>
                                <div class="p-2 w-100 text-center">max execution time 300s</div>
                            </div>
                        </li>
                        <li class="list-group-item rounded-0 py-0 px-0">
                            <div class="d-flex">
                                <div class="p-2 flex-shrink-1"><font-awesome-icon class="mx-2 text-success" style="font-size: 20px" icon="check-circle"/></div>
                                <div class="p-2 w-100 text-center">max execution time 300s</div>
                            </div>
                        </li>
                        <li class="list-group-item rounded-0 py-0 px-0">
                            <div class="d-flex">
                                <div class="p-2 flex-shrink-1"><font-awesome-icon class="mx-2 text-success" style="font-size: 20px" icon="check-circle"/></div>
                                <div class="p-2 w-100 text-center">php memory limit 1024 MB</div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="col-10 col-sm-6">
                    <ul class="list-group list-group-striped">
                        <li class="list-group-item rounded-0 py-0 px-0">
                            <div class="d-flex">
                                <div class="p-2 flex-shrink-1"><font-awesome-icon class="mx-2 text-success" style="font-size: 20px" icon="check-circle"/></div>
                                <div class="p-2 w-100 text-center">post max size 128 MB</div>
                            </div>
                        </li>
                        <li class="list-group-item rounded-0 py-0 px-0">
                            <div class="d-flex">
                                <div class="p-2 flex-shrink-1"><font-awesome-icon class="mx-2 text-success" style="font-size: 20px" icon="check-circle"/></div>
                                <div class="p-2 w-100 text-center">upload max filesize 128 MB</div>
                            </div>
                        </li>
                        <li class="list-group-item rounded-0 py-0 px-0">
                            <div class="d-flex">
                                <div class="p-2 flex-shrink-1"><font-awesome-icon class="mx-2 text-success" style="font-size: 20px" icon="check-circle"/></div>
                                <div class="p-2 w-100 text-center">max input vars 2500</div>
                            </div>
                        </li>
                    </ul>
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
    ul.list-group.list-group-striped li:nth-of-type(odd){
        background: white;
    }
    ul.list-group.list-group-striped li:nth-of-type(even){
        background:#f7f7f7;
    }
    ul.list-group.list-group-hover li:hover{
        background: red;
    }
</style>