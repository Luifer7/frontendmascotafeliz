


import axios from "axios";
import { useDataStore } from "../stores/data";
import  format  from 'date-fns/format'
import  addDays  from 'date-fns/addDays'
import isEqual from "date-fns/isEqual"

export function useCliente() {

  const useData = useDataStore()

 
  const getSucur = async () => {
    let api = `http://localhost:3000/sucursals`
    try {
    await axios.get(api)
    .then((response) => { useData.sucur = response.data})
    } catch (error) {
        console.log(error)
    }
  }

  const getMyPets = async () => {
    let api = `http://localhost:3000/mascotas`
      try {
        await axios.get(api).then((res)=> { useData.mascotasCliente = res.data })
        useData.mascotasCliente = useData.mascotasCliente.filter(field => field.usuariosId === useData.token?.datos?.id)
      } catch (error) {
        console.log(error)
      }

  }

  getMyPets()


  const createPet = async (data, id) =>{
    
    const today = new Date()
    const currentDay = format(today, 'MM/dd/yyyy')

    let api = `http://localhost:3000/usuarios/${id}/mascotas`
    let mascota = {
      nombre: data.nombre,
      raza: data.raza,
      comentario: '????',
      fecha: currentDay,
      foto: data.foto,
      estado: 0,
      usuariosId: id
    }
    try {
      await axios.post(api, mascota).then((res)=>{})
      await getMyPets()
    } catch (error) {
      console.log(error)
    }
  }

  const deletePet = async (id) =>{
    let api = `http://localhost:3000/mascotas/${id}`
    try {
      await axios.delete(api).then((res)=>{})
      await getMyPets()
    } catch (error) {
      console.log(error)
    }
  } 

  const editPet = async (data, n, r, f) => {
    let api = `http://localhost:3000/mascotas/${data.id}/`
    let mascota = {
      nombre: n,
      raza: r,
      comentario: '????',
      fecha: data.fecha,
      foto: f,
      estado: data.estado,
      usuariosId: data.usuariosId
    }
    try {
      await axios.patch(api, mascota).then((res)=>{})
      await getMyPets()
    } catch (error) {
      console.log(error)
    }
  }

  const getPlan = async (data, estado, idplan) => {
    
    //Si esta vencido el plan
    if (estado === 0) {
      let ad = `http://localhost:3000/planes/${idplan}`
      try {
        await axios.delete(ad).then((res)=>{})
      } catch (error) {
        
      }
    }
    useData.esIgual = false
    useData.mascotaName = data
    let api = `http://localhost:3000/mascotas/${data.id}/planes`
    try {
      await axios.get(api).then((res)=> { useData.currentPlanMascota = res.data })
      //Fecha fin del plan
      let fin = useData.currentPlanMascota[0]?.fin
      //Fecha atual para compararla cada ves que entre a ver el plan
      let fecha = new Date()
      let hoy = format(fecha, 'MM/dd/yyyy')
    
      //Cuando el plan se acabe (fecha inicio sea igual a fecha fin)
      if (fin === hoy) {
        useData.esIgual = true
        //se manda un delete a la base de datos
      } 

    } catch (error) {
      console.log(error)
    }

  }

  const buyPlan = async (data, mascota) => {
    
    const today = new Date()
    const currentDay = format(today, 'MM/dd/yyyy')
    const masDias = format(addDays(today, 30),'MM/dd/yyyy')
    
    let api = `http://localhost:3000/planes`
    let newPlan = {
      nombre: data.nombre,
      precio: data.precio,
      descripcion: data.descripcion,
      fecha: currentDay,
      fin: masDias,
      estado: data.estado,
      mascotasId: mascota.id
    }
    try {
     await axios.post(api, newPlan).then((res)=> {console.log(res)}) 
     await getPlan(mascota)
    } catch (error) {
      console.log(error)
    }
  }
 
  const deleteMascotaPlan = async (id) => {
    let api = `http://localhost:3000/planes/${id}`
    try {
      await axios.delete(api).then((res) => {})
    } catch (error) {
      console.log(error)
    }
  }


  return {
    getMyPets, createPet, deletePet, editPet, getPlan, buyPlan, getSucur, deleteMascotaPlan
  }
}