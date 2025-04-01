<template>
    <Form @submit="onSubmit" :validation-schema="schema">
      <Field name="email" type="email" />
      <ErrorMessage name="email" />
      <Field name="password" type="password" />
      <ErrorMessage name="password" />
      <button>Submit</button>
    </Form>
  </template>
  <script setup>
  import { Form, Field, ErrorMessage } from 'vee-validate';
  import * as yup from 'yup';
  definePageMeta({layout:false})
  const schema = yup.object({
    email: yup.string().required().email(),
    password: yup.string().required().min(8),
  });
  function onSubmit(values) {
    // Submit values to API...
    alert(JSON.stringify(values, null, 2));
  }
  </script>