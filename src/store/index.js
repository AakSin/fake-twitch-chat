import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);
window.axios=require('axios')
export default new Vuex.Store({
    state:{
        currentStreamer:"Select a Streamer"
    },
    mutations:{
        changeStreamer(state,name){
            state.currentStreamer=name
        }
    }
})