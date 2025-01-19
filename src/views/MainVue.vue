<template>
  <AppHeader :mensaje="texto"/>
  <div class="container">
    <Sidebar />
    <div class="content">
      <input type="text" v-model="texto" />
      {{ texto }}
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import AppHeader from '../components/AppHeader.vue';
import Sidebar from '../components/AppSidebar.vue'
import { ref } from 'vue';
const texto = ref('');

</script>

<style scoped>
.container {
  display: flex;
}
.content {
  flex: 1;
  padding: 20px;
}
</style>
