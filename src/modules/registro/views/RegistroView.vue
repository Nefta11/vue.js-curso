<template>
  <div>
    <h2>Formulario de registro</h2>
    <input type="text" placeholder="Ingrese su nombre" />
    <input type="mail" placeholder="Ingrese su email" />
    <submit>Registrarse</submit>
  </div>
</template>

<script setup></script>

<style scoped>
h2 {
  color: #333;
}
input {
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
submit {
  background-color: #333;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
}
submit:hover {
  background-color: #555;
}
</style>
