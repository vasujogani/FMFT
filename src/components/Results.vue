<template>
<div id="results">
  <truck-map
    v-if="location"
    :trucks="trucks"
  >
  </truck-map>
  <div class="results">
    <truck
      :key="index"
      v-for="(truck, index) in trucks"
      :truck="truck"
    >
    </truck>
  </div>
</div>
</template>

<script>
import TruckMap from '@/components/TruckMap';
import Truck from '@/components/Truck';
import funcs from '@/funcs';
import { mapGetters } from 'vuex';

const trucks = require('@/assets/trucklist');

console.log(trucks.map(t => t.name));
trucks.sort((a, b) => funcs.distance(a.location, b.location));
console.log(trucks.map(t => t.name));
export default {
  name: 'results',
  components: {
    TruckMap,
    Truck,
  },
  computed: {
    ...mapGetters(['location']),
  },
  data() {
    return {
      trucks,
    };
  },
  mounted() {
    if (!this.location) {
      this.$router.push('/');
    }
  },
};
</script>

<style>

</style>
