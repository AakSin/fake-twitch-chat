<template>
  <div id="app" class="row no-gutters">
    <div class="col-12 col-md-8 col-lg-9">
      <AppHeader/>
      <ChannelGrid/>
    </div>
    <div class="col-12 col-md-4 col-lg-3 ">
      <Chat/>
    </div>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import ChannelGrid from './components/ChannelGrid.vue'
import Chat from './components/Chat.vue'

export default {
  name: 'App',
  components: {
    AppHeader,ChannelGrid,Chat
  },
  
}
</script>

<style>
div{
color:#D2CDC7;
}
#app{
  background-color: #171718;
}
</style>
