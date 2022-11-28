


<template>

<div class="p-1 d-flex align-items-center justify-content-evenly flex-wrap" >

    <!-- Cuando tiene plan -->
    <div v-if="useData.currentPlanMascota[0]"  class="card col-10 mt-2" >
        
        <div class="m-1" v-for="plan of useData.currentPlanMascota" :key="plan.id" >
            <div class="d-flex align-items-center justify-content-center" >
                <h4 class="text-center m-0" >Plan de <strong class="text-capitalize" >{{useData.mascotaName.nombre}}</strong> </h4>
                <img :src="useData.mascotaName.foto" width="40" height="40" 
                style="object-fit:cover;"
                class="rounded-circle m-2" alt="">
            </div>
            <div class="m-1 d-flex gap-2 flex-wrap justify-content-around">

            <div class="uno" >

                    <div class="d-flex" >
                <small class="m-2 fw-bold">Nivel: </small>
                    <strong class="d-flex align-items-center text-warning" >
                        {{plan.nombre}}
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor"
                        class="bi bi-star-fill text-warning m-1" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                    </strong>
                    </div>

                <div class="d-flex" >
                <small class="m-2 fw-bold">Precio: </small>
                    <strong class="d-flex align-items-center text-success" >
                        ${{plan.precio}}
                    </strong>
                </div>

                <div class="d-flex">
                <small class="m-2 fw-bold">Tu plan está </small>
                    <strong v-if="!useData.esIgual" class="d-flex align-items-center text-success">Acivo</strong>
                    <strong v-if="useData.esIgual" class="d-flex align-items-center text-danger">Terminado</strong>
                </div>

            </div>

            <div  class="dos" >

                <div class="d-flex " >
                <small class="m-2 fw-bold">Beneficios: </small>
                    <strong class="d-flex align-items-center text-primary" >
                        {{plan.descripcion}}
                    </strong>
                </div>
                <div class="d-flex" >
                <small class="m-2 fw-bold">Fecha de inicio: </small>
                    <strong class="d-flex align-items-center text-primary" >
                        {{plan.fecha}}
                    </strong>
                </div>
                <div class="d-flex" >
                <small class="m-2 fw-bold">Termina: </small>
                    <strong class="d-flex align-items-center text-secondary" >
                        {{plan.fin}}
                    </strong>
                </div>

            </div>

            <!-- DETALLES DEL PLAN DE LA MASCOTA -->
            <div v-if="!useData.esIgual" class="tres  d-flex align-items-center align-items-center flex-column gap-3" >

                <button class="btn btn-sm btn-danger"
                data-bs-toggle="modal" data-bs-target="#deleteplan"
                @click="getDelete(plan)"
                >Cancelar plan</button>

                <button class="btn btn-sm btn-info text-white"
                data-bs-toggle="modal" data-bs-target="#infoplan"
                >Info del plan</button> 
      
            </div>
              
            <div v-if="useData.esIgual === true" class="alert alert-danger m-2" role="alert">
                  Parece que tu plan se ha terminado,
                  quieres ver de nuevo nuestras opciones? 
                  <button @click="getPlan(useData.mascotaName, 0, plan.id)" class="btn btn-sm btn-danger" >
                    Si 
                  </button>
                </div>
            </div>
           
               <!--  <div v-if="!useData.esIgual" class="alert alert-danger m-2 text-center" role="alert">
                  Este plan ya no esta activo 
                  quieres renovarlo? <button class="btn btn-sm btn-danger m-1"
                  @click="getPlan(useData.mascotaName)"
                  >Si</button>
                </div> -->
        </div>

    </div>

    <!-- Cuando esta aprovado pero aun no tiene plan -->
    <div v-if="useData.mascotaName.estado === 1 && !useData.currentPlanMascota[0]" 
    class="card col-10 p-4  text-center mt-2" >
        <h4 >Parece que <strong class="text-dark" >{{useData.mascotaName.nombre}}</strong> no tiene plan activo.</h4>

        <div class="d-flex align-items-center justify-content-center m-2" >
            <small class="fw-bold" >Nuestras opciones</small>
        </div>

        <div class="d-flex align-items-center justify-content-center flex-wrap gap-2 m-2" >
            <div v-for="plan of planes" :key="plan.id" class="card text-white box p-3"
                 :class="plan.nombre === 'PREMIUM' ?'verde':''
                 || plan.nombre === 'ESTANDAR' ?'verdedos':''
                 || plan.nombre === 'BASICO' ?'verdetres':''">
               <strong>{{plan.nombre}}</strong> <br>
               <h3>${{plan.precio}}</h3>
               <h4>x Mes</h4>
                <strong class="m-1">Beneficios</strong> <br>
                <small class="fw-bold">
                    {{plan.descripcion}}
                </small>
                <div class="card-footer m-2" >
                    <button data-bs-toggle="modal" data-bs-target="#comprar"
                    @click="getNowPlan(plan)"
                    class="btn btn-sm btn-primary m-0" >Quiero este plan
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
                        <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    
    </div>

    <!-- Cuando no esta aprovado -->
    <div v-if="useData.mascotaName.estado === 0" class="card col-10 p-4 mt-2  text-center" >
        <h4 ><strong class="text-dark" >{{useData.mascotaName.nombre}}</strong> está pendiente de aprovacion.</h4>
    </div>

</div>

 <!-- MODAL COMPRAR PLAN -->
    <div
    class="modal fade"
    id="comprar"
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
          class="modal-body d-flex align-items-center justify-content-evenly p-4"
        >
         <strong>Confirma que desea adquirir el plan {{newPlan.nombre}}</strong> 
          <button class="btn btn-success btn-sm"
          data-bs-dismiss="modal"
            aria-label="Close"
            @click="buyPlan(newPlan, useData.mascotaName)"
          >Si, seguro.</button>        
        </div>

      </div>
    </div>
    </div>

    <!-- MODAL BOORAR PLAN DE MASCOTA -->
    <div
    class="modal fade"
    id="deleteplan"
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
          class="modal-body d-flex align-items-center justify-content-evenly p-4"
        >
         <strong>Confirma que deseas borrar este plan? <br>
            <small>No se garantiza la devolucion de su dinero.</small>

         </strong> 
          <button class="btn btn-success btn-sm"
          data-bs-dismiss="modal"
            aria-label="Close"
            @click="deleteMascotaPlan(currentDelete.id)"
          >Si, seguro.</button>        
        </div>

      </div>
    </div>
    </div>

    <!-- MODAL INFO DEL PLAN -->
    <div class="modal fade" id="infoplan" 
    tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title fw-bold text-center" >Como usar mis beneficios</h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            
              <p class="p-4 text-center" >
              De acuerdo al nivel de tu plan tienes acceso a distintos servicios,
              por cada servicio, puedes agendar una cita por quincena, es decir dos al mes. <br>
              <b>¿En que consisten los servicios?</b> <br>
                Tenemos veterinarios, estilistas y cuidadores, de acuerdo a tu plan tendras 1, 2 o 3 de estos servicios.
                <br>
                <b>¿Como solicito las citas?</b> <br>
                Luego de adquirir un plan, nos pondremos en contacto con usted por telefono y correo electronico
                para agendar las citas, que seran directamemte en su domicilio. <br>
                Gracias.
              </p>
              

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

const useData = useDataStore()
const { buyPlan, deleteMascotaPlan, getPlan } = useCliente()

const planes = ref([
    { id: 1, nombre: 'PREMIUM',precio: 30000, 
    descripcion: 'Veterinario, estilista y cuidador.', 
    fecha: Date.now().toString(), fin: 23/12/2022, estado: 1
    },
    { id: 2, nombre: 'ESTANDAR',precio: 20000, 
    descripcion: 'Veterinario y estilista.', 
    fecha: Date.now().toString(), fin: 23/12/2022, estado: 1
    },
    { id: 3, nombre: 'BASICO',precio: 10000, 
    descripcion: 'Veterinario.', 
    fecha: Date.now().toString(), fin: 23/12/2022, estado: 1
    }
])

const newPlan = ref({})
const getNowPlan = (plan) => {
    newPlan.value = plan
} 

const currentDelete = ref({})
const getDelete = (data) => {
    currentDelete.value = data
}

</script>

<style scoped>
.box{width: 250px;}
.verde{background-color: #0093E9;
  background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);}
.verdedos{background-color: #0093E9;
  background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);}
.verdetres{background-color: #0093E9;
  background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);}
</style>