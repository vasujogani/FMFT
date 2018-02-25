<template>
<div class="truck">
  <span class="truckrow">
    <img class="icon" :src="truck.image">
    <div id="row">
      <div class="col">
        {{truck.name}} <br/>
        {{truck.type}}
      </div>
      <div class="col">
        Rating: {{truck.rating}}/10
      </div>
    </div>
    <div class="buttons">
      <button type="button" class="btn btn-success">MoreInfo</button>
      <button type="button" class="btn btn-success">Go</button>
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
  border-radius: 1%;
    /*background-color: #fff;*/
    box-shadow: 0 0 60px 30px #b3b3b5;  /* inner white */
        /*0 0 80px 60px #f0f,
        0 0 140px 90px #0ff;*/

}
div.truck > span.truckrow {
  display: inline-flex;
  width: 100%;
  justify-content: space-between;
}
div.buttons {
  display: flex;
  flex-direction: column;
}
div.buttons > button {
  margin: 1em;
}

</style>
