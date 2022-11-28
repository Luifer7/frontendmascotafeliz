


<template>
 
    <nav class="navbar navbar-expand-md bg-light p-2">

      <div class="container-fluid m-1">
        <router-link to="/" class="text-primary fw-bold text-decoration-none" >
          Mascota Feliz
        </router-link>
        <button class="navbar-toggler" type="button" 
        data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" 
          id="navbarSupportedContent">

          <ul v-if="useData.userLogin" class="navbar-nav me-auto mb-lg-0">
            <li class="m-2" >
              
            </li>
            <li v-if="useData?.token?.datos?.rol === 'admin'" class="nav-item">
              <router-link class="btn btn-sm btn-primary" to="/admin" >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
              <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
              <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
            </svg>
                Admin
              </router-link>
            </li>
          </ul>

          <div class="d-flex" role="search">

            <ul v-if="useData.userLogin" class="navbar-nav align-items-center gap-3" >

              <li v-if="useData?.token?.datos?.rol === 'cliente'" class="nav-item dropdown">
              <a class="nav-link dropdown-toggle fw-bold p-1 btn btn-sm btn-primary text-white d-flex align-items-center justify-content-center gap-1" 
              role="button" data-bs-toggle="dropdown" aria-expanded="false"> 
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
              <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
            </svg>
                {{useData?.token?.datos?.nombre}}
              </a>
              <ul class="dropdown-menu">
                <li>
                  <router-link to="/mismascotas" class="dropdown-item p-3">Mis Mascotas</router-link>
                </li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">{{useData?.token?.datos?.correo}}</a></li>
              </ul>
              </li>

              <li v-if="useData.userLogin" class="dropdown-item" >
                
              <button class="btn btn-sm btn-danger d-flex gap-1 fw-bold align-items-center justify-content-center"
              @click="logout()"
              >Salir
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
              </svg>
              </button>
              </li>

            </ul>
          
          </div>
          
        </div>

      </div>

    </nav>

    <!-- Vistas -->
      <RouterView />
    <!-- Vistas -->

    <div class="p-5 d-flex align-items-center justify-content-center">
      <img src="../src/assets/img/maacota_feliz.png" width="120" alt="">
    </div>
    <div class="p-5 d-flex align-items-center justify-content-center" >
      <small class="fw-bold text-dark" > <b>By: Luis Fernando Cordero </b>( Powered by vue-js 3)</small>
    </div>

</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useAmdin } from './composables/admin'
import { useDataStore } from './stores/data'

const { logout } = useAmdin()
const useData = useDataStore()

</script>

<style scoped>


</style>


