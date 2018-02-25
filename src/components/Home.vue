<template>
<div id="home">
  <button @click="find">Use Current Location</button>
</div>
</template>

<script>
import TruckMap from '@/components/TruckMap';

export default {
  name: 'home',
  components: {
    TruckMap,
  },
  data() {
    return {
      zipcode: '',
    };
  },
  methods: {
    find() {
      navigator.geolocation.getCurrentPosition(async (location) => {
        await this.$store.dispatch('setLocation', location);
        this.$router.push({ name: 'results' });
      });
    },
  },
};
</script>

<style>

body{
  height: 100vh;
  text-align: center;
}


</style>
