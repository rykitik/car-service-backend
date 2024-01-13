<template>
    <form @submit.prevent="createAppointment">
      <label for="userId">ID пользователя:</label>
      <input type="text" id="userId" v-model="userId" required>
      
      <label for="serviceId">ID услуги:</label>
      <input type="text" id="serviceId" v-model="serviceId" required>
  
      <label for="date">Дата записи:</label>
      <input type="datetime-local" id="date" v-model="date" required>
  
      <button type="submit">Записаться на обслуживание</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        userId: '',
        serviceId: '',
        date: '',
      };
    },
    methods: {
      createAppointment() {
        // Реализация отправки данных на backend
      },
    },
  };
  </script>
  