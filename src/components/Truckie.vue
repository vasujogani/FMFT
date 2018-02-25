<template>
  <div>
    <div id="overlay"></div>
    <img :src="foodpic" alt="Food Truck" width = "150px">

    <h2>Name of the Restauraunt</h2>
    <input type="text" placeholder="Joe's Deli">

    <h2>Description of the Restauraunt</h2>
    <input type="text" placeholder="We have bomb sandwiches">
  </div>
</template>

<script>
const foodpic = require('@/assets/foodtruckpicedit.png');
console.log(foodpic);
const sushipic = require('@/assets/sushi.jpg');
document.querySelector('body').style['background-image'] = `url("${sushipic}")`;
export default {
  data() {
    return {
      fooodpic,
    };
  },
};
</script>

<style media="screen">

@import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,700');

  h2{
    color: white;
    font-family: 'Open Sans Condensed', sans-serif;
  }

  body{
    /*background-image: url();*/
    background-color: green;
    text-align: center;
    padding-top: 25 vh;
  }

  input{
    text-align: center;
    border-radius: 10px;
    font-family: Trebuchet MS;
    border: solid;
    border-color: white;
    width: 300px;
    height: 50px;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  #overlay {
  position: fixed; /* Sit on top of the page content */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5); /* Black background with opacity */
  z-index: -2; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer; /* Add a pointer on hover */
  }

</style>
