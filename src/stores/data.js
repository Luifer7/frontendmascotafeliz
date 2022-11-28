

import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDataStore = defineStore('data', () => {
 
  const fechaActual = ref('')

  const  token = ref([])
  const userLogin = ref(null)

  const currentTable = ref([])
  const currentAction = ref({})
  const currentTableName = ref('')

  ////////////////CLIENTE///////////////////
  const mascotasCliente = ref([])
  const currentClienteMascota = ref({})
  const currentPlanMascota = ref([])
  const mascotaName = ref({})

  const havePlan = ref(null)
  const sucur = ref([])

  const esIgual = ref(null)

  return { fechaActual, token, userLogin, currentTable, currentTableName, currentAction, 
          mascotasCliente, currentClienteMascota, currentPlanMascota, mascotaName,
          havePlan, sucur, esIgual }
})
