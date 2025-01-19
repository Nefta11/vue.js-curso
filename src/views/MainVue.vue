<template>
  <AppHeader />
  <div class="container">
    <Sidebar />
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import AppHeader from '../components/AppHeader.vue';
import Sidebar from '../components/AppSidebar.vue'
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
