<template>
    <div>
      <h2>Доступные услуги:</h2>
      <ul>
        <li v-for="service in services" :key="service.id">{{ service.name }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      services: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  