<template>

  <!-- Modal DELETE USUARIOS -->
  <div
    class="modal fade"
    id="deletemodal"
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
          class="modal-body d-flex p-2 align-items-center justify-content-center p-3"
        >
          <small class="p-2 text-center">
            Seguro que quieres borrar a
            <strong
              >{{ useData.currentAction.nombre }}
              {{ useData.currentAction.apellido }}</strong
            >
          </small>
          <button
            class="btn btn-sm btn-danger m-2"
            @click="
              deleteItem(useData.currentAction.id, useData.currentTableName)
            "
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            Si, seguro.
          </button>
        </div>
      </div>
    </div>
  </div>


</template>

<script setup>

import { ref } from "@vue/reactivity";
import { onBeforeMount, onMounted, onUnmounted } from "@vue/runtime-core";
import { useAmdin } from "../composables/admin";
import { useDataStore } from "../stores/data";

const { deleteItem } = useAmdin();
const useData = useDataStore();

const edit = () => {
 datos.value = useData.currentAction
 console.log(datos.value)
}


</script>
