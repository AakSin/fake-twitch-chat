import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);
window.axios=require('axios')
export default new Vuex.Store({
    state:{
        currentStreamer:"select a streamer"
    },
    mutations:{
        changeStreamer(state,name){
            state.currentStreamer=name
        }
    }
})