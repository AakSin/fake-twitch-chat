<template>
  <div class="col-12 col-md-4">
    <div class="card" @click="changeStreamer(streamer.name)">
      <img class="card-img-top" :src="streamer.image" alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">{{streamer.name}}</h5>
        <p class="card-text">{{streamer.content}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Channel",
  props: ["streamer"],
  methods: {
    changeStreamer(name) {
      this.$store.commit("changeStreamer", name);
    },
  },
};
</script>
<style scoped>
.card {
  cursor: pointer;
  border-color:#333232 ;
}
 div{
     background-color: #171718;
 }
</style>