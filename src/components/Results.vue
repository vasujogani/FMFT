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
      return;
    }
    trucks.sort((a, b) => funcs.distance(a.location, this.location) - funcs.distance(b.location, this.location));
  },
};
</script>

<style>
html > body {
  background-image: none !important;
}
</style>
