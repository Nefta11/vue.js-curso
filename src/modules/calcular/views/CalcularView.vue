<template>
<h3>Propiedades Computadas</h3>
<input type="text" v-model="valor" />
{{ valor }}
</template>

<script setup>
import { ref} from 'vue'
const valor = ref('');

</script>
<style scoped>

</style>
