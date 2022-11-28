

<template>

    <!-- Modal Create mascota cliente -->
<div class="modal fade" id="crearmascota" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Crear usuarios</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">

        <form v-on:submit.prevent="createPet(datos, useData.token.datos.id)" >

          <div class="mb-2">
            <input type="text" placeholder="nombre" class="form-control form-control-sm" v-model="datos.nombre" />
          </div>

          <div class="mb-2">
            <input type="text" placeholder="raza" class="form-control form-control-sm" v-model="datos.raza" />
          </div>

          <div class="mb-2">
            <input type="text" placeholder="url foto" class="form-control form-control-sm" v-model="datos.foto" />
          </div>
          
          <div class="text-center m-3">
            <button type="submit" class="btn btn-primary"
            data-bs-dismiss="modal" aria-label="Close"
            >Submit</button>
          </div>

        </form>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

    <!-- Modal delete mascota cliente -->
<div class="modal fade" id="deletemascota" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body text-center">

      Seguro que quieres borrar a <strong>{{useData.currentClienteMascota.nombre}}</strong> 
      <button  @click="deletePet(useData.currentClienteMascota.id)"
      class="btn btn-sm btn-danger m-2" data-bs-dismiss="modal">Si, seguro.</button>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>




    
</template>

<script setup >
import { ref } from "@vue/reactivity";
import { useCliente } from "../../composables/cliente";
import { useDataStore } from "../../stores/data";

const { createPet, deletePet } = useCliente()
const useData = useDataStore()

const datos = ref({
    nombre: '', raza: '', foto: ''
})




</script>

<style scoped>

</style>