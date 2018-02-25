<template>
<div class="truck">
  <span class="truckrow">
    <img class="icon" :src="truck.image">
    <div id = "row">

      <div class="col">
        {{truck.name}} <br/>
        {{truck.type}}
      </div>
      <div class="col">
        Rating <br/>
        {{truck.rating}}/10
      </div>
    </div>
    <div id = "row">

      <button type="button" class="btn btn-success">MoreInfo</button>
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
img.icon {
  width: 8em;
  height: 8em;
}
div.truck {
  border: 1px black solid;
  margin: 1em 20em;
  display: flex;
}
div.truck > span.truckrow {
  display: inline-flex;
  width: 100%;
}
</style>
