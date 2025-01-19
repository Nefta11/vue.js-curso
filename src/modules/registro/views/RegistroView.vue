<template>
  <div>
    <h2>Formulario de registro</h2>
    <Form :validation-schema="schema" @submit="submit">
      <div class="form">
        <label for="nombre">Nombre: </label>
        <Field type="text" name="nombre" id="nombre" placeholder="Ingrese su nombre" />
        <ErrorMessage name="nombre" />
      </div>
      <div class="form">
        <label for="email">Email: </label>
        <Field type="mail" name="email" id="email" placeholder="Ingrese su email" />
        <ErrorMessage name="email" />
      </div>
      <div class="form">
        <submit>Registrarse</submit>
      </div>
    </Form>
  </div>
</template>

<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate'
import { schema } from '../schemas/ValidationSchema'

const submit = () => {
  console.log('Formulario enviado')
}
</script>

<style scoped>
.form {
  margin-bottom: 10px;
}
</style>
