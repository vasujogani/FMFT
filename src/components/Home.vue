<template>
  <div id="home">
    <div id = "container">
      <video autoplay muted loop id="myVideo">
        <source :src="video" type="video/mp4">
      </video>
      <div class="topbar">
        <div class="tButton">
          <button @click="redirectTruckie()" type="button">Truckie? Click here</button>
          <br/>
        </div>
      </div>
      <div class="content">
      <div id = "row">
        <div class="brand">
          <h1>FIND MY FOOD TRUCK</h1>
          <h3>(motto)</h3>
          <br/>
        </div>
      </div>
      <div class="content">
        <div id = "row">
          <div class="brand">
            <h1>FIND MY FOOD TRUCK</h1>
            <h3>Locating meals on wheels for hungry foodies</h3>
            <br/>
          </div>
        </div>
        <div id = "row">
          <input type="text" class= "inputBar" placeholder="Search..">
          <!-- <button type="button">FIND</button> -->
          <button type="button" class="btn btn-success" id= "searchBtn">FIND</button>
        </div>
        <div id= "row">
          <div class="search">
            <button @click="find" type="button" class="btn btn-warning" id="nearMeBtn">FOOD TRUCKS NEAR ME</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TruckMap from '@/components/TruckMap';

const video = require('@/assets/backgroundVid.mp4');

export default {
  name: 'home',
  components: {
    TruckMap,
  },
  data() {
    return {
      zipcode: '',
      video,
    };
  },
  methods: {
    find() {
      navigator.geolocation.getCurrentPosition(async (location) => {
        await this.$store.dispatch('setLocation', location);
        this.$router.push({ name: 'results' });
      });
    },

    redirectTruckie() {
      this.$router.push({name: 'truckie'});
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Kaushan+Script|Open+Sans+Condensed:300,700');

* {
  box-sizing: border-box;
}

body{
height: 100%;
text-align: center;
}

#myVideo {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    z-index: 0;
}

.brand {
  color: whitesmoke;
}

.topbar {
  position: fixed;
  z-index: 4;
  width: 100%;
  text-align: right;
}

.content {
  position: fixed;
  width: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
  padding-top: 5em;
  padding-bottom: 5em;
  margin-top: 5em;
  text-align: center;
  
  /* color: whitesmoke; */
}

.content h1 {
  /* font-family: 'Open Sans Condensed', sans-serif; */
  font-family: 'Kaushan Script', cursive;
}

.content h3 {
  font-family: 'Open Sans Condensed', sans-serif;
  /* font-family: 'Kaushan Script', cursive; */
}

.inputBar{
  width: 15em;
  height: 100%;
  padding: 1em;
  border-radius: 1em;
  font-family: 'Kaushan Script', cursive;
}

#row {
  padding: 0em;
  margin: 1em;
  height: 5em;
}

#truckieBtn {
  font-family: 'Open Sans Condensed', sans-serif;
  width: 16em;
  border-radius: 3.5em;
}

#searchBtn {
  margin-left: 1.5em;
  width: 6em;
  height: 100%;
  border-radius: 1em;
  font-family: 'Kaushan Script', cursive;
}

#nearMeBtn {
  width: 18em;
  height: 3em;
  border-radius: 1em;
  font-family: 'Kaushan Script', cursive;
}


</style>
