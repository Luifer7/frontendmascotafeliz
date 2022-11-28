


<template>


    <div class="box" >

        <div class="container p-3 d-flex align-items-center gap-3 justify-content-center">

            <button v-for="btn of botones" :key="btn.id" 
            @click="getList(btn)"
            class="btn btn-sm btn-success"
            :class="btn.nombre === useData.currentTableName ?'active':''"
            >
                {{btn.nombre}}
            </button>

        </div>

       

        <div class="container  p-2" >
           <admin-table :data="useData.currentTable" :tittle="useData.currentTableName"></admin-table>
        </div>

    </div>
    
    <!-- MODALES -->
    <Modales></Modales>
    
</template>

<script setup >
import { ref } from "@vue/reactivity";
import AdminTable from "../components/AdminTable.vue";
import Modales from "../components/Modales.vue";
import { useAmdin } from "../composables/admin";
import { useDataStore } from "../stores/data";

const { getList } = useAmdin()
const useData = useDataStore()

const botones = ref([
    {id: 1, nombre: 'usuarios'}, {id: 2, nombre: 'mascotas'}, 
    {id: 3, nombre: 'planes'}, {id: 4, nombre: 'sucursals'}
])


</script>

<style scoped>
.box {
  margin: 0;
  padding: 0;
}
</style>
