<template>
<div class="truck">
  <span>
    <img :src="truck.img">
    <div class="truckinfo">
      {{truck.name}} <br/>
      {{truck.type}}
    </div>
  </span>
</div>
</template>

<script>
export default {
  props: ['truck'],
  data() {
    return {};
  },
  mounted() {
    console.log(JSON.stringify(this.truck));
  },
};
</script>

<style>

</style>
