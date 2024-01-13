<template>
    <form @submit.prevent="createUser">
      <label for="name">Имя:</label>
      <input type="text" id="name" v-model="name" required>
      
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required>
  
      <div v-if="error" class="error">{{ error }}</div>

      <button type="submit">Создать пользователя</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        error: null,
      };
    },
    methods: {
      createUser() {
        // Реализация отправки данных на backend
        if (response.status !== 201) {
            this.error = response.data.error || 'Ошибка сервера';
        }
      },
    },
  };
  </script>
<style>
    .error {
    color: red;
    }
</style>