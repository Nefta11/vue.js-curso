<template>
  <h3>Propiedades Computadas</h3>
  <input type="text" v-model="valor" />
  {{ resultado }}
  <ResultadoSection v-show="mostrarElemento" :resultado="resultado" />
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
