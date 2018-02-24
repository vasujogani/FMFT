<template>
<div id="home">
  <label>
    Enter location:
  </label>
  <br/>
  <input v-model="zipcode">
</div>
</template>

<script>
export default {
  data() {
  },
};
</script>

<style>
label {
  font-size: 6pt;
  text-align: left;
}
</style>
