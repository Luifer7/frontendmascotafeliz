<template>

  <div class="box p-4">

    <div class="row">

      <div class="col-sm-12 col-md-6 d-flex align-items-center justify-content-center">

        <img class="img-fluid" 
        src="../assets/img/maacota_feliz.png" width="300" alt="">

      </div>

      <div v-if="!useData.userLogin" class="col-sm-12 col-md-6 p-5">

        <div class="text-center">
          <h3>Login</h3>
        </div>

        <form v-on:submit.prevent="login(user, password)">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"
              >Email address</label
            >
            <input type="email" class="form-control" v-model="user" />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              >Password</label
            >
            <input type="password" class="form-control" v-model="password" />
          </div>

          <div class="text-center">
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </form>

        <div class="p-2 text-center mt-2">
          <h6>
            No tienes cuenta?
            <router-link class="text-white" to="/about"> registrases </router-link>
          </h6>
        </div>
        
      </div>

      <welcome v-if="useData.userLogin"></welcome>

    </div>
  
  </div>


  <!-- CONTENIDO -->
  <div class="box p-3 text-center" >
    
    <sucursales></sucursales>

  </div>

</template>

<script setup>
import { ref } from "@vue/reactivity";
import { useAmdin } from "../composables/admin";
import  sucursales  from "../components/estaticos/Sucursales.vue";
import  planes  from "../components/estaticos/Planes.vue";
import  Welcome  from "../components/estaticos/Welcome.vue";
import { useDataStore } from "../stores/data";


const { login } = useAmdin();
const useData = useDataStore()

const user = ref("");
const password = ref("");

</script>

<style scoped>
.box {
  margin: 0;
  padding: 0;
}
</style>
