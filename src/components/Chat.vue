<template>
  <div class="d-flex flex-column">
    <h1 class="display-4 text-center">{{this.$store.state.currentStreamer}}</h1>
    <p v-for="message in messages" v-bind:key="message" v-bind:message="message">{{message}}</p>
    <div class="mt-auto">
      <textarea placeholder="Start Chatting!" @input="updateMessage" class="form-control" rows="1" v-model="message"></textarea>
      <button @click="chat" type="button" class="btn btn-primary btn-sm ml-auto d-block my-2">Chat</button>
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
    };
  },
  methods: {
    chat() {
      if (this.message !== "") {
        this.messages.push("user: "+this.message);
        this.message = "";
        this.fetchChat();
      }
    },
    updateMessage(event) {
      this.message=event.target.value;
    },
    fetchChat() {
      axios
        .get(this.apis[this.$store.state.currentStreamer])
        .then((response) => {
          this.messages = this.messages.concat(response.data.text.split("\n"));
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
  background-color: #18181b;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  padding: 1vw;
  /* overflow-y:scroll; */
}
h1{
    font-size: 2.5rem;
}
p{
  font-size:1rem;
}
textarea{
  background-color:#131516 ;
  border: none;
  color:rgb(189, 185, 185);
}
textarea:focus{
  background-color:#222527 ;
  color:white;
}
</style>