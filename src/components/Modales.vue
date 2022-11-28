

<template>
    

<!-- Modal usuarios -->
<div class="modal fade" id="usuarios" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Crear usuarios</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">

        <form v-on:submit.prevent="createUser(user)">

          <div class="mb-2">
            <input type="text" placeholder="nombre" class="form-control form-control-sm" v-model="user.nombre" />
          </div>

          <div class="mb-2">
            <input type="text" placeholder="apellido" class="form-control form-control-sm" v-model="user.apellido" />
          </div>

          <div class="mb-2">
            <input type="text" placeholder="correo" class="form-control form-control-sm" v-model="user.correo" />
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

<!-- Modal Mascotas -->
<div class="modal fade" id="mascotas" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Crear Mascotas</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

<!-- Modal Planees -->
<div class="modal fade" id="planes" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Crear Planes</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

<!-- Modal SUCURSALES -->
<div class="modal fade" id="sucursals" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Crear sucursales</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">

        <form v-on:submit.prevent="createSucursal(data)" >
          <div class="mb-2" >
            <input type="text" v-model="data.ciudad" placeholder="ciudad" class="form-control form-control-sm" >
          </div>
          <div class="mb-2" >
            <input type="text" v-model="data.departamento" placeholder="departamento" class="form-control form-control-sm" >
          </div>
          <div class="mb-2" >
            <input type="text" v-model="data.direccion" placeholder="direccion" class="form-control form-control-sm" >
          </div>
          <div class="mb-2" >
            <input type="text" v-model="data.telefono" placeholder="telefono" class="form-control form-control-sm" >
          </div>
          <div class="mb-2" >
            <input type="text" v-model="data.administrador" placeholder="administrador" class="form-control form-control-sm" >
          </div>
          <div class="modal-footer" >
              <button class="btn btn-sm btn-success" type="submit">Guardar</button>
          </div>
        </form>
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>






</template>

<script setup>
import { ref } from "@vue/reactivity";
import { useAmdin } from "../composables/admin";

const { createUser, createSucursal } = useAmdin()

const user = ref({
    nombre: '', apellido: '', correo: ''
})

const data = ref({
  ciudad: '', departamento: '', direccion: '', telefono: '', administrador: ''
})

</script>

<style scoped>

</style>