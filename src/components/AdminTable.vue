<template>

 
 <div class="m-3 text-center">

  <!-- BTN CREAR -->
  <div v-if="useData.currentTableName === 'usuarios'
  || useData.currentTableName === 'sucursals'
  " class="container d-flex" >
    <button class="btn btn-sm btn-primary text-white d-flex align-items-center gap-1" 
        data-bs-toggle="modal" :data-bs-target="`#${useData.currentTableName}`"
        >Crear
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
      </svg>
      </button>
  </div>

  <!-- TITULO CADA UNA DE LAS TABLAS -->
    <h3 class="text-white mb-3">{{tittle}}</h3>

     <!-- usuarios -->
    <table v-if="useData.currentTableName === 'usuarios'" class="table table-responsive table-sm">
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Correo</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user of data" :key="user.id" >
          <th>{{user.nombre}} {{user.apellido}}</th>
          <td>{{user.correo}}</td>

          
          <td class="d-flex gap-3 align-items-center justify-content-center">
            
            <div v-if="user.rol === 'cliente'" @click="getCurrentDetails(user)" data-bs-toggle="modal" data-bs-target="#showmodal">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
            </svg>
            </div>
          
            <div @click="getCurrentAction(user)" data-bs-toggle="modal" data-bs-target="#editmodal" >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
          </svg>
            </div>

            <strong v-if="user.rol === 'admin'">Admin</strong>
            <div v-if="user.rol === 'cliente'"  @click="getCurrentAction(user)" data-bs-toggle="modal" data-bs-target="#deletemodal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
              <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
              </svg>
            </div>


          </td>
        </tr>
      </tbody>
    </table>

     <!-- MASCOTAS -->
    <table v-if="useData.currentTableName === 'mascotas'" class="table table-sm table-bordered">
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Raza</th>
          <th scope="col">Foto</th>
          <th scope="col">Estado</th>
          <th scope="col">Detalles</th>
        </tr>
      </thead>
      <tbody>

        <tr v-for="mascota of data" :key="mascota.id" >
          <th class="text-td" >{{mascota.nombre}}</th>
          <td class="text-td" >{{mascota.raza}}</td>
          <td> <img :src="mascota.foto" width="30" height="30" class="rounded-circle" alt=""
            style="border: 2px solid blue"
            >
          </td>
          <td v-if="mascota.estado === 0" class="text-td fw-bold text-warning">Pendiente</td>
          <td v-if="mascota.estado === 1" class="text-td fw-bold text-success">Aprovada</td>
          <td v-if="mascota.estado === 2" class="text-td fw-bold text-danger">Rechazada</td>

          <td class="d-flex align-items-center justify-content-center" >

            <svg @click="getCurrentAction(mascota)" data-bs-toggle="modal" data-bs-target="#showmascota"
            xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" 
            class="bi bi-three-dots-vertical text-primary" viewBox="0 0 16 16">
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
            </svg>

          </td>

        </tr>
      </tbody>
    </table>

      <!-- Planes -->
      <table v-if="useData.currentTableName === 'planes'" class="table table-sm table-bordered">
      <thead>
        <tr>
          <th scope="col">Nivel</th>
          <th scope="col">Precio</th>
          <th scope="col">Finaliza</th>
          <th scope="col">Estado</th>
          <th scope="col">Detalles</th>
        </tr>
      </thead>
      <tbody>

        <tr v-for="plan of data" :key="plan.id" >
          <th class="text-td" >{{plan.nombre}}</th>
          <td class="text-td" >${{plan.precio}}</td>
          <td class="text-td" > {{plan.fin}}</td>
          <td v-if="plan.estado === 0" class="text-td text-danger">Finalizada</td>
          <td v-if="plan.estado === 1" class="text-td text-white">Activa</td>
          <td v-if="plan.estado === 2" class="text-td">Por Terminar</td>

          <td class="d-flex align-items-center justify-content-center" >

            <svg  @click="getCurrentAction(plan)" data-bs-toggle="modal" data-bs-target="#showplan"
            xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" 
            class="bi bi-three-dots-vertical text-primary" viewBox="0 0 16 16">
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
            </svg>

          </td>

        </tr>
      </tbody>
    </table>

      <!-- Sucursales -->
      <table v-if="useData.currentTableName === 'sucursals'" class="table table-sm table-responsive table-bordered">
      <thead>
        <tr>
          <th scope="col">Ciudad</th>
          <th scope="col">Departamento</th>
          <th scope="col">Direccion</th>
          <th scope="col">Telefono</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>

        <tr v-for="sucursal of data" :key="sucursal.id" >
          <th class="text-td" >{{sucursal.ciudad}}</th>
          <td class="text-td" >{{sucursal.departamento}}</td>
          <td class="text-td" >{{sucursal.direccion}}</td>
          <td class="text-td" >{{sucursal.telefono}}</td>
          <td class="text-td" >

            <div  @click="getCurrentAction(sucursal)" data-bs-toggle="modal" data-bs-target="#deletesucursal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
              <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
              </svg>
            </div>
          
          </td>
        </tr>
      </tbody>
      </table>

  </div>

  <Actions></Actions>

<!-- ////////////////////////  MODALES ////////////////////// -->


    <!-- Modal EDIT USUARIOS -->
    <div
    class="modal fade"
    id="editmodal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content modal-center">
        <div class="modal-header">
          <h4>Editar a {{useData.currentAction.nombre}} {{useData.currentAction.apellido}}  </h4>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>

        <div
          class="modal-body"
        >
        <form v-on:submit.prevent="editItem(id, n, a, c, p, f, r)" >

          <div class="mb-2" >
            <input type="text" v-model="n" placeholder="Nombre" class="form-control form-control-sm" >
          </div>
          <div class="mb-2" >
            <input type="text" v-model="a" placeholder="Apellido" class="form-control form-control-sm" >
          </div>
          <div class="mb-2" >
            <input type="text" v-model="c"  placeholder="Correo" class="form-control form-control-sm" >
          </div>
          <div class="mb-2" >
            <input type="text" v-model="p" placeholder="Contraseña" class="form-control form-control-sm" >
          </div>


          <div class="modal-footer">
            <button
            type="submit"
            class="btn btn-sm btn-danger m-2"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            Editar
          </button>
          </div>
        </form>
    
        </div>

      </div>
    </div>
    </div>

    <!-- Modal Show USUARIOS -->
    <div
    class="modal fade"
    id="showmodal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content modal-center">
        <div class="modal-header">
          <h4 class="text-primary" >{{showCurrentUser}}</h4>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>

        <div
          class="modal-body"
        >
        <h4 class="text-center">Mascotas</h4>

        <div class="m-2 p-2" >
            <strong v-if="!currentUserMascotas[0]">Este usuario no tiene mascotas agregadas</strong>
            <ul class="list-group text-center" v-if="currentUserMascotas" >
              
              <li class="list-group-item d-flex align-items-center justify-content-around"  
              v-for="mascota of currentUserMascotas" :key="mascota.id" >
                <div class="p-1 m-1" >
                  <img :src="mascota.foto" width="100" class="img-thumbnail" alt="">
                </div>
              <div>
                <strong class="text-primary" >{{mascota.nombre}}</strong> <small class="fw-bold" >({{mascota.raza}}) </small>
                <strong class="text-warning" v-if="mascota.estado === 0">Pendiente</strong>
                <strong class="text-success" v-if="mascota.estado === 1">Aprovado</strong>
                <strong class="text-danger" v-if="mascota.estado === 2">Rechazado</strong>
                <br>
                
                <strong> <button class="btn btn-success m-2"
                  style="--bs-btn-padding-y: .10rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;"
                  @click="aprovar(mascota, 1)"
                  >Aprovar</button></strong>

                  <strong> <button class="btn btn-danger m-2"
                  style="--bs-btn-padding-y: .10rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;"
                  @click="aprovar(mascota, 2)"
                  >Rechazar</button>
                </strong>
              
              </div>
              </li>
            
            </ul>
        </div>
    
        </div>

      </div>
    </div>
    </div>
  
      <!-- Modal Show usuarios mascotas -->
    <div
    class="modal fade"
    id="showmascota"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content modal-center">
        <div class="modal-header">
          <h4 class="text-primary" >{{useData.currentAction.nombre}} <small class="fw-bold">({{useData.currentAction.raza}})</small>
            <small class="text-warning" v-if="useData.currentAction.estado === 0">  Pendiente</small>
            <small class="text-success" v-if="useData.currentAction.estado === 1">  Aprovada</small>
            <small class="text-danger" v-if="useData.currentAction.estado === 2"> Rechazada</small>
          </h4> 
         
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>

        <div
          class="modal-body d-flex align-items-center justify-content-between"
        >
        <div class="w-50" >
          <h5>Usuario</h5>
          <strong >{{userMascota.nombre}} {{userMascota.apellido}}</strong> <br>
          <strong >{{userMascota.correo}}</strong> <br>
          
        </div>
        <div class="w-50" >
          <img :src="useData.currentAction.foto" class="thumbnail" width="150" alt="">
        </div>

        </div>
        <div class="p-2" >
          <h5 class="m-2" >Plan de {{useData.currentAction.nombre}}</h5>
            <div class="p-2" v-for="plan of userPlanMascota" :key="plan.id" >
              Nivel:
              <strong>{{plan.nombre}}</strong> <br>
              Precio:
              <strong>${{plan.precio}}</strong> <br>
              Beneficios:
              <strong>{{plan.descripcion}}</strong> <br>
              inicia:
              <strong>{{plan.fecha}}</strong> <br>
              Termina:
              <strong>{{plan.fin}}</strong> <br>
              Plan:
              <strong class="text-success" v-if="plan.estado === 1" >Activo</strong> <br>
              <strong class="text-danger" v-if="plan.estado === 0" >Finalizado</strong> 
            </div>
        </div>

      </div>
    </div>
    </div>

    <!-- MODAL DELETE SUCURSAL -->
    <div
    class="modal fade"
    id="deletesucursal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content modal-center">
        <div class="modal-header">
        
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>

        <div
          class="modal-body d-flex align-items-center justify-content-evenly"
        >
         <strong>Quieres borrar la sucursal de {{useData.currentAction.ciudad}}</strong> 
          <button class="btn btn-danger btn-sm"
          data-bs-dismiss="modal"
            aria-label="Close"
            @click="deleteSucursal(useData.currentAction.id)"
          >Si, seguro.</button>        
        </div>

      </div>
    </div>
    </div>

    <!-- MODAL SHOW PLAN -->
    <div
    class="modal fade"
    id="showplan"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content modal-center">

        <div class="modal-header">
          <h4>{{useData.currentAction.nombre}} -
            <small class="text-warning" v-if="useData.currentAction.estado === 0">Plan Vencido</small>
            <small class="text-success" v-if="useData.currentAction.estado === 1">Plan Activo</small>
            <small class="text-danger" v-if="useData.currentAction.estado === 2">Por terminar</small>
          </h4> 
    
          
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>

        <div
          class="modal-body d-flex align-items-center justify-content-between">

        <div class="p-2" >
          <h5>Detalles</h5>
          Precio:
          <strong>${{useData.currentAction.precio}}</strong> <br>
          Beneficios:  
          <strong > {{useData.currentAction.descripcion }}</strong> <br>
          Inicia: 
          <strong > {{useData.currentAction.fecha }}</strong> <br>
          Finaliza: 
        <strong > {{useData.currentAction.fin }}</strong> <br>
        </div>

        </div>

        <div class="modal-header d-flex align-items-center  flex-column" >
          <h4>Mascota asociada</h4>
         <div class="d-flex align-items-center justify-content-between w-100" >
            <div class="d-flex flex-column align-items-center w-50" >
              <img :src="mascota.foto" width="90" alt="">
              <strong>{{mascota.nombre}}</strong> 
              <small>Raza: {{mascota.raza}}</small>
            </div>
            <div class="w-50">
              <h5>usuario: {{usuario.nombre}} {{usuario.apellido}} </h5>

              <strong>correo: {{usuario.correo}}</strong>
            </div>
         </div>
        </div>
    
      </div>
    </div>
    </div>



</template>

<script setup>
import { useDataStore } from "../stores/data";
import Actions from "../components/Actions.vue";
import { ref } from "@vue/reactivity";
import { useAmdin } from "../composables/admin";
import axios from "axios";

const useData = useDataStore();
const { editItem, deleteSucursal } = useAmdin()

defineProps({
  data: Object, tittle: String
})

const n = ref('')
const a = ref('')
const c = ref('')
const p = ref('')
const f = ref('')
const r = ref('')
const id = ref('')

const getCurrentAction = (user) => {
  useData.currentAction = {}
  useData.currentAction = user
  if (user.raza) {
    getUserMascota(user)
  }
  if (user.precio) {
    getUserMascota(user)
  }

  n.value = user.nombre
  a.value = user.apellido
  c.value = user.correo
  p.value = user.contrasena
  f.value = user.fecha
  r.value = user.rol
  id.value = user.id

}

//////////////////// SHOW ///////////
const currentUserMascotas = ref([]) 
const showCurrentUser = ref('')
const getCurrentDetails = async (user) => {
  showCurrentUser.value = user.nombre + ' ' + user.apellido
  let api = `http://localhost:3000/usuarios/${user.id}/mascotas`
  try {
    await axios.get(api).then((res) => {
      currentUserMascotas.value = res.data
    })
  } catch (error) {
    
  }
}

////////////// aprovar  o rechazar mascota ///////////

const aprovar = async (mascota, estado) => {

  let api = `http://localhost:3000/mascotas/${mascota.id}`
  let ag = `http://localhost:3000/usuarios/${mascota.usuariosId}/mascotas`
  let editeds = {
          nombre: mascota.nombre,
          raza: mascota.raza,
          comentario: mascota.comentario,
          fecha: mascota.fecha,
          foto: mascota.foto,
          estado: estado,
          usuariosId: mascota.usuariosId
  }

        try {
          await axios.put(api, editeds).then((res)=> {})
          await axios.get(ag).then((res) => {
          currentUserMascotas.value = res.data
        })
        } catch (error) {
          console.log(error)
        }
       
}

//////////////// PLANES/////////////////////////

const userMascota = ref({})
const userPlanMascota = ref({})

const mascota = ref({})
const usuario = ref({})

 const getUserMascota = async (data) => {

    if (data.raza) {
      let api = `http://localhost:3000/mascotas/${data.id}/usuarios`
      let ag = `http://localhost:3000/mascotas/${data.id}/planes`
      try {
        await axios.get(api).then((res) => {userMascota.value = res.data})
        await axios.get(ag).then((res) => {userPlanMascota.value = res.data}) 
      } catch (error) {
        console.log(error)
      }
    }

    if (data.fin) {
      let apidos = `http://localhost:3000/planes/${data.id}/mascotas`
      let agdos = `http://localhost:3000/mascotas/${data.mascotasId}/usuarios`
      try {
        await axios.get(apidos).then((res) => {mascota.value = res.data})
        await axios.get(agdos).then((res) => {usuario.value = res.data}) 
      } catch (error) {
        console.log(error)
      }
    }
 }

</script>



<style scoped>

.text-td {
  font-size: .8em;
}

</style>
