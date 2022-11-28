

<template>

        <h3  class="text-white" >Nuestras sucursales</h3>
       <div class="d-flex align-items-center justify-content-center gap-3 flex-wrap">

            <div v-for="sucursal of useData.sucur" :key="sucursal.id" class="p-5 m-2  box" >
                <h6>{{sucursal.ciudad}} <small>({{sucursal.departamento}})</small></h6>
                <img src="../../assets/img/maacota_feliz.png" width="100" class="rounded-circle" alt="">
                <div class="p-2 d-flex flex-column align-items-center" >
                   <small class="text-white">Direccion: <strong>{{sucursal.direccion}}</strong></small>
                   <small class="text-white">Telefono: <strong>{{sucursal.telefono}}</strong></small> 
                </div>
            </div>

       </div> 


</template>

<script setup >
import { ref } from "@vue/reactivity";
import { useCliente } from "../../composables/cliente";
import { useDataStore } from "../../stores/data";

    const useData = useDataStore() 

    const { getSucur } = useCliente() 

    getSucur()
</script>

<style scoped>

.box {
    margin: 0; padding: 0;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

</style>