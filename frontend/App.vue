<template>
    <div>
      <h1>Автосервис</h1>
      
      <!-- Форма создания пользователя -->
      <user-form></user-form>
  
      <!-- Форма создания записи на обслуживание -->
      <appointment-form></appointment-form>
  
      <!-- Компонент для отображения доступных услуг -->
      <available-services :services="services"></available-services>
    </div>
  </template>
  
  <script>
  import UserForm from './components/UserForm.vue';
  import AppointmentForm from './components/AppointmentForm.vue';
  import AvailableServices from './components/AvailableServices.vue';
  
  export default {
    components: {
      UserForm,
      AppointmentForm,
      AvailableServices,
    },
    data() {
      return {
        services: [],
      };
    },
    mounted() {
      // Получение списка доступных услуг при загрузке компонента
      this.fetchAvailableServices();
    },
    methods: {
        async fetchAvailableServices() {
    try {
      const response = await axios.get('/api/services');
      this.services = response.data;
    } catch (error) {
      console.error(error);
    }
  },
    },
  };
  </script>