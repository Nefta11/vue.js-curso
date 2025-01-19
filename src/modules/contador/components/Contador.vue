<template>
  <h1>Hola Nefta</h1>
  <p>{{ contador }}</p>
  <button @click="incrementar">Incrementar</button>
  <button @click="decrementar">Decrementar</button>
</template>

<script setup>
import { ref } from 'vue'
const contador = ref(0)
const incrementar = () => {
  contador.value++
}

const decrementar = () => {
  contador.value--
}
</script>

<style scoped>
p {
  color: red;
}

button {
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: darkblue;
}
</style>
