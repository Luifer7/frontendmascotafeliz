
import axios from "axios";
import { useRouter } from "vue-router";
import { useDataStore } from "../stores/data";

export function useAmdin() {

  const useData = useDataStore()

  const router = useRouter()

  const login = async (user, password) => {

    let api = `http://localhost:3000/authuser`
    
    let currentuser = { usuario: user, clave: password }

    try {

    await axios.post(api, currentuser)
    .then((response) => {
        useData.token = response.data
    })

    localStorage.setItem('token', JSON.stringify(useData.token))
    await autenticar()

    } catch (error) {
        console.log(error)
    }
  }

  const autenticar = () => {

    if (localStorage.getItem('token')) {
        useData.token = JSON.parse(localStorage.getItem('token'))
        useData.userLogin = true
    }
  }

  autenticar()

  const logout = () => {

    if (localStorage.getItem('token')) {
        localStorage.removeItem('token');
        useData.userLogin = false
        router.push('/')
    }

  }

  ////////////// METODO GET //////////////////////////////////////////

  const getList = async (param) => {
    let api = `http://localhost:3000/${param.nombre}`
    useData.currentTableName = param.nombre
    try {
    await axios.get(api)
    .then((response) => { useData.currentTable = response.data})
    } catch (error) {
        console.log(error)
    }
  }


  ////////////////////Metodo crear//////////////////////////////////////////

  const createUser = async (data) => {
    
    let  newData  = { nombre: data.nombre, apellido: data.apellido, 
                      correo: data.correo, fecha: Date.now().toString(), rol: 'cliente'}
    let api = `http://localhost:3000/usuarios`
    try {
      await axios.post(api, newData).then((res) => {})
      await axios.get(api).then((res) => useData.currentTable = res.data )
    } catch (error) {
      console.log(error)
    }
  }

  const deleteItem = async (id, url) => {
    let api = `http://localhost:3000/${url}/${id}`
    let ag = `http://localhost:3000/${url}/`
    try {
      await axios.delete(api).then(() => {})
      await axios.get(ag).then((res) => useData.currentTable = res.data )
    } catch (error) {
      console.log(error)
    }
  }

  const editItem = async (id, n, a, c, p, f, r) => {

    let edited = {
      nombre: n, apellido: a, correo: c, contrasena: p, fecha: f, rol: r}
    let api = `http://localhost:3000/usuarios/${id}`
    let ag = `http://localhost:3000/usuarios/`
    try {
      await axios.put(api, edited).then((res)=>{console.log(res)})
      await axios.get(ag).then((res)=>{useData.currentTable = res.data})
    } catch (error) {
      console.log(error)
    }
  }
  
  /////////////////////////////////////////////

  const createSucursal = async (data) => {
    let api = `http://localhost:3000/sucursals/`
   let sucursal = {
      ciudad: data.ciudad,
      departamento: data.departamento,
      direccion: data.direccion,
      telefono: data.telefono,
      administardor: data.administrador
    }
    try {
      await axios.post(api, sucursal).then((res)=> {})
      await axios.get(api).then((res) => {useData.currentTable = res.data})
    } catch (error) {
      
    }

  }

  const deleteSucursal = async (id) => {
    let api = `http://localhost:3000/sucursals/${id}`
    let ag = `http://localhost:3000/sucursals/`
    try {
      await axios.delete(api).then((res) => {})
      await axios.get(ag).then((res) => {useData.currentTable = res.data})
    } catch (error) {
      
    }
  }

  const calcular = (fechaUno, fechaDos) => {
    let fechaUtcUno = Date.UTC(fechaUno.getFullYear(), fechaUno.getMonth(), fechaDos.getDate)
    let fechaUtcDos = Date.UTC(fechaDos.getFullYear(), fechaDos.getMonth(), fechaDos.getDate)
    let diferencia = (fechaUno - fechaDos) / (1000 * 60 * 60 * 24)
    return Math.floor(diferencia)
  }



  return {
    login, logout,
    getList, createUser, deleteItem, editItem, createSucursal, deleteSucursal
  }
}
