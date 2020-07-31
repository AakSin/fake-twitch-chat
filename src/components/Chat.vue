/* eslint-disable no-inner-declarations */
/* eslint-disable no-inner-declarations */
<template>
  <div class="d-flex flex-column">
    {{timeLeft}}s
    <h1 class="display-4 text-center">{{this.$store.state.currentStreamer}}</h1>
    <div class="content">
    <p v-for="message in messages" v-bind:key="message" v-bind:message="message">{{message}}</p>
    </div>
    <div class="mt-auto">
      <textarea
        placeholder="Start Chatting!"
        @input="updateMessage"
        class="form-control"
        rows="1"
        v-model="message"
      ></textarea>
      <button
        @click="chat(); timer();"
        type="button"
        class="btn btn-primary btn-sm ml-auto d-block my-2"
      >Chat</button>
    </div>
  </div>
</template>
<script>
const axios = require("axios");

export default {
  name: "Chat",
  data: function () {
    return {
      messages: ["Welcome to the chat room!"],
      apis: {
        xqc: "https://fake-twitch-chat-mq6d35eqaa-nn.a.run.app",
        HealthyGamerGG: "https://fake-twitch-chat-mq6d35eqaa-nn.a.run.app",
        "Hasan Piker": "https://fake-twitch-chat-mq6d35eqaa-nn.a.run.app",
      },
      message: "",
      timeLeft: 0,
    };
  },
  methods: {
    chat() {
      if(this.$store.state.currentStreamer==="Select a Streamer"){
        alert("Please select a streamer")
      }
      if (this.message !== "") {
        this.messages.push("user: " + this.message);
        this.fetchChat();
      }else{
        alert("Please type a message")
      }
    },
    timer() {
      if (this.message !== "") {
        this.updateTimer()
      }
    },
    updateTimer(){
      this.timeLeft = 180;
      const self = this;
      let time = setInterval(decrease, 1000);
      function decrease(){
        
        if(self.timeLeft<1){
          clearInterval(time);
          self.timeLeft ="You should be able to see message";
        }else{
          self.timeLeft -= 1;
        }
      }
    },
    updateMessage(event) {
      this.message = event.target.value;
    },
    fetchChat() {
      axios
        .get(this.apis[this.$store.state.currentStreamer]+"?prefix="+this.$store.state.currentStreamer+":")
        .then((response) => {
          this.messages = this.messages.concat(response.data.text.split("\n"));
          this.message = "";
        })
        .catch((error) => {
          // handle error
          console.log(error);
        });
    },
  },
};
</script>
<style scoped>
.d-flex {
  background-color: #14141a;
  height: 100vh;
  width: 100%;
  padding: 1vw;
  /* overflow-y:scroll; */
}
h1 {
  font-size: 2.5rem;
}
p {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}
textarea {
  background-color: #202324;
  border: none;
  color: rgb(189, 185, 185);
}
textarea:focus {
  background-color: #343638;
  color: white;
}
.content{
  overflow-y:scroll;
}
::-webkit-scrollbar {
  background-color: #222527;
  width:10px;
}
.btn-primary {
    color: #fff;
    background-color: #9147FF;
    border-color:#9147FF;
}
</style>