

<template>
    
    <div class="container p-1" >

        <!-- Btn Crear -->
        <div class="d-flex align-items-center justify-content-around gap-2 m-1 p-2" >
            <h4>Mis Mascotas</h4>
            <button class="btn btn-sm btn-primary" 
            data-bs-toggle="modal" data-bs-target="#crearmascota"
            >Agregar
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
          </svg>
          </button>
        </div>

        <!-- MIS MASCOTAS -->
        <div class="p-1 d-flex  gap-2 box-mascotas" >

            <div class="card box" v-for="mascota of useData.mascotasCliente" :key="mascota.id"
            :class="useData.mascotaName.id === mascota.id ?'current':''"
            >
                <div class="card-header text-center p-2"> <strong class="text-capitalize" >{{mascota.nombre}}</strong> ({{mascota.raza}})</div>
                <div class="card-body text-center">
                    <img :src="mascota.foto" width="110" height="110" 
                    class="rounded-circle m-2 foto-cir" 
                    :class="useData.mascotaName.id === mascota.id ?'foto':''" alt=""> <br>
                    <!-- Estado -->
                    <div class="text-center" >
                        <small>
                            <b>Estado: </b>
                            <strong class="text-success" v-if="mascota.estado === 1" >Aprovada</strong>
                            <strong class="text-warning" v-if="mascota.estado === 0" >Pendiente</strong>
                            <strong class="text-danger" v-if="mascota.estado === 2" >Rechazada</strong>
                        </small>
                    </div>
                    <!-- Actions -->
                    <div class="text-center p-0 mt-2 d-flex align-items-center justify-content-evenly">

                        <svg @click="getCurrentPet(mascota)" data-bs-toggle="modal" data-bs-target="#deletemascota" 
                         xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                        </svg>

                        <svg @click="getCurrentPet(mascota)" data-bs-toggle="modal" data-bs-target="#editmascota"
                        xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                        </svg>
                    
                    </div>
                </div>
                <div class="card-header d-flex justify-content-center align-items-center">
                    <button @click="getPlan(mascota)" 
                    class="btn btn-sm text-white fw-bold btn-primary d-flex align-items-center gap-2" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                    </svg>
                        Ver Plan
                    </button>
                </div>
            </div>
            
        </div>

    </div>

    <!-- Planes mascotas -->
    <Planmascotas></Planmascotas>


    <!-- CREATE Y DELETE MODALES mascotas clientes -->
    <Clientemodales></Clientemodales>

        <!-- Modal EDIT mascota cliente -->
<div class="modal fade" id="editmascota" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Crear usuarios</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">

        <form v-on:submit.prevent="editPet(useData.currentClienteMascota, nombre, raza, foto)" >

          <div class="mb-2">
            <input type="text" placeholder="nombre" class="form-control form-control-sm" v-model="nombre" />
          </div>

          <div class="mb-2">
            <input type="text" placeholder="raza" class="form-control form-control-sm" v-model="raza" />
          </div>

          <div class="mb-2">
            <input type="text" placeholder="url foto" class="form-control form-control-sm" v-model="foto" />
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


</template>

<script setup >
import { useCliente } from '../composables/cliente';
import { useDataStore } from '../stores/data';
import Clientemodales from "../components/cliente/ClienteModales.vue";
import Planmascotas from "../components/cliente/PlanMascota.vue";
import { ref } from '@vue/reactivity';

const useData = useDataStore()
const { getMyPets, editPet, getPlan } = useCliente()

const nombre = ref('')
const raza = ref('')
const foto = ref('')


const getCurrentPet = (mascota) => {
    nombre.value = mascota.nombre
    raza.value = mascota.raza
    foto.value = mascota.foto
    useData.currentClienteMascota = mascota
}



</script>

<style scoped>
.detalles{ width: 400px; min-width: 300px;}
.box-mascotas{overflow: auto;}
.box{width: 300px; min-width: 180px;}

.current{
  transition: .6s ease all;
  background-color: #0093E9;
  background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
  color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}

.foto-cir {
  transition: .6s ease all;
  object-fit:cover; border: 4px solid #0093E9;
}
.foto {
  transition: .6s ease all;
  object-fit:cover; border: 4px solid rgb(255, 255, 255);
}

.box{ border: none; box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; }


</style>