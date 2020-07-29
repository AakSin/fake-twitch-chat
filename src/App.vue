<template>
  <div id="app" class="row no-gutters">
    <div class="col-9">
      <AppHeader/>
      <ChannelGrid/>
    </div>
    <div class="col-3 ">
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
/* .jumbotron{
  margin-bottom:0 ;
} */
</style>
