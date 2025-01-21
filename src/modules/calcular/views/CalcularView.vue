<template>
  <h3>Propiedades Computadas</h3>
  <input type="text" v-model="valor" />
  {{ resultado }}
  <ResultadoSection v-if="mostrarElemento" :resultado="resultado" />
  <div v-else-if="isNaN(valor)">Debe ser un numero ptm</div>
  <div v-else>si es menos a 10 Aqui no se muestra nada</div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ResultadoSection from '../components/ResultadoSection.vue';
const valor = ref('')
const resultado = computed(() => {
  return valor.value * 3
})

const mostrarElemento = computed(() => {
  return valor.value > 10;
})
</script>

<style scoped></style>
