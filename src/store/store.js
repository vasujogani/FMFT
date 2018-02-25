import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);
/* eslint no-param-reassign: "off" */
export default new Vuex.Store({
  state: {
    location: null,
    zip: null,
  },
  mutations: {
    SET_ZIP: (state, zip) => { state.zip = zip; },
    SET_LOCATION: (state, location) => { state.location = location; },
  },
  actions: {
    async setLocation(context, location) {
      const { latitude, longitude } = location.coords;
      const apikey = 'AIzaSyBJabq--rHal0oSX6WiSYJPLHJ5uLvTCrg';
      const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apikey}`;
      const resp = await fetch(url); // , { mode: 'no-cors' });
      const data = await resp.json();
      const zip = data.results[0].address_components.find(component => component.types.includes('postal_code')).short_name;
      context.commit('SET_ZIP', zip);
      context.commit('SET_LOCATION', { lat: latitude, lng: longitude });
      return Promise.resolve();
    },
  },
  getters: {
    location: state => state.location,
    zipcode: state => state.zip,
  },
});
