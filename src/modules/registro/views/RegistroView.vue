<template>
  <div>
    <h2>Formulario de registro</h2>
    <Form :validation-schema="schema" @submit="submit">
      <div class="form">
        <label for="nombre">Nombre: </label>
        <Field
          v-model="nombre"
          type="text"
          name="nombre"
          id="nombre"
          placeholder="Ingrese su nombre"
        />
        <ErrorMessage name="nombre" />
      </div>
      <div class="form">
        <label for="email">Email: </label>
        <Field v-model="email" type="mail" name="email" id="email" placeholder="Ingrese su email" />
        <ErrorMessage name="email" />
      </div>
      <div class="form">
        <button type="submit">Registrarse</button>
      </div>
    </Form>
  </div>
</template>

<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate'
import { schema } from '../schemas/ValidationSchema'
import { useRegistrarStore } from '../stores/registrarStore'
import { ref } from 'vue'

const registrarStore = useRegistrarStore()
const nombre = ref('')
const email = ref('')

const submit = () => {
  registrarStore.guardarRegistro(nombre.value, email.value)
  console.log('Formulario enviado')
}
</script>

<style scoped>
.form {
  margin-bottom: 10px;
}

button {
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
