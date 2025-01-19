<template>
  <div class="sidebar">
    <h2>Bienvenido</h2>
    <h3>Nombre: {{ registrarStore.nombre }}</h3>
    <h3>Email: {{ registrarStore.email }}</h3>
    <ul>
      <li><router-link to="/Contador">Contador</router-link></li>
      <li><router-link to="/ListaDeTareas">Lista de Tareas</router-link></li>
      <li><router-link to="/Registrar">Registrar</router-link></li>
    </ul>
  </div>
</template>

<script setup>
import { useRegistrarStore } from '../modules/registro/stores/registrarStore'
//import { ref } from 'vue'
const registrarStore = useRegistrarStore()
//const nombre = ref(registrarStore.nombre)
//const email = ref(registrarStore.email)
// watch(  //De esta forma se puede hacer un watch de los cambios en el store
//   () => registrarStore.nombre,
//   (newValue) => {
//     nombre.value = newValue
//   },
// )
// watch(
//   () => registrarStore.email,
//   (newValue) => {
//     email.value = newValue
//   },
// )
</script>

<style>
.sidebar {
  width: 200px;
  background-color: #f0f0f0;
  padding: 20px;
}
</style>
