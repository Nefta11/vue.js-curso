<template>
  <div class="header">
    <Weather />
  </div>
</template>

<script setup>
import Weather from './AppWeather.vue'
</script>

<style scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: #9b3535;
  color: white;
}

h3 {
  margin: 0;
}
</style>
