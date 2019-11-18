<template>
  <v-app>
    <Calendar />
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Calendar from './components/Calendar';

export default {
  name: 'App',

  components: {
    HelloWorld,
    Calendar
  },

  data: () => ({
    //
  }),
};
</script>
