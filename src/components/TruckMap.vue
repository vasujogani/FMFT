<template>
<div id="map">
  <gmap-map
    v-if="position"
    :center="position"
    :zoom="13"
    map-type-id="terrain"
    style="width: 500px; height: 300px"
  >
    <gmap-marker
        :key="index"
        v-for="(truck, index) in trucks"
        :position="{ lat: truck.location[0], lng: truck.location[1] }"
        :clickable="true"
        :draggable="true"
        :label="index + 1 + ''"
        @click="select(index)"
    >
      <gmap-info-window
        v-if="selected==index"
      >
        {{truck.name}}
      </gmap-info-window>
    </gmap-marker>
  </gmap-map>
</div>
</template>

<script>
import * as VueGoogleMaps from 'vue2-google-maps';
import Vue from 'vue';

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBJabq--rHal0oSX6WiSYJPLHJ5uLvTCrg',
    libraries: 'places', // This is required if you use the Autocomplete plugin
  },
});

export default {
  name: 'truck-map',
  props: ['trucks'],
  data() {
    return {
      position: null,
      selected: -1,
    };
  },
  methods: {
    select(index) {
      this.position = { lat: this.trucks[index].location[0], lng: this.trucks[index].location[1] };
      this.selected = index;
    },
  },
  mounted() {
    navigator.geolocation.getCurrentPosition((geolocation) => {
      this.position = { lat: geolocation.coords.latitude, lng: geolocation.coords.longitude };
    });
  },
};
</script>

<style>

</style>
