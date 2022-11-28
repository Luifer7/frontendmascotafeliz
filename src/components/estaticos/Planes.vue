


<template>

    <h4 class="text-white">Nuestros Planes</h4>
    <div class="box d-flex align-items-center justify-content-center gap-2 flex-wrap mb-4">

        <div v-for="plan of planes" :key="plan.id" class="p-2 m-2 border" >
            <h6>{{plan.nombre}}</h6>
           
            <div class="p-2 d-flex flex-column align-items-center" >
               <small class="text-white">Direccion: <strong>{{plan.precio}}</strong></small>
               <small class="text-white">Telefono: <strong>{{plan.detalles}}</strong></small> 
            </div>
        </div>

   </div> 


</template>

<script setup >
import { ref } from "@vue/reactivity";


const planes = ref([
    { id: 1, nombre: 'Monteria', precio: 'Cordoba', detalles: 'mz 131 L 15'},
    { id: 1, nombre: 'Monteria', precio: 'Cordoba', detalles: 'mz 131 L 15'},
    { id: 1, nombre: 'Monteria', precio: 'Cordoba', detalles: 'mz 131 L 15'}
])

</script>

<style scoped>

.box {
margin: 0; padding: 0;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

</style>