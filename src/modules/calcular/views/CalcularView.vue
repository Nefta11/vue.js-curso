<template>
  <h3>Propiedades Computadas</h3>
  <input type="text" v-model="valor" />
  {{ resultado }}
</template>

<script setup>
import { ref, computed } from 'vue'
const valor = ref('')
const resultado = computed(() => {
  return valor.value * 3
})
</script>

<style scoped></style>
