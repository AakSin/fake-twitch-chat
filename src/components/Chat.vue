<template>
    <div>
        <h1>{{this.$store.state.currentStreamer}}</h1>
        <h5
        v-for="message in messages"
        v-bind:key="message"
        v-bind:message="message"
        >{{message}}</h5>
        <textarea @input="updateMessage" class="form-control" rows="1" v-model="message"></textarea>
        <button @click="chat" type="button" class="btn btn-primary btn-sm">Chat</button>
        
    </div>
</template>
<script>
const axios = require('axios');

export default {
    name:"Chat",
    data:function () {
        return{
            messages:["hello"],
            apis:{
                "xqc":"https://fake-twitch-chat-mq6d35eqaa-nn.a.run.app"
            },
            message:""
        }
    },
    methods:{
        chat(){
            if (this.message!==""){
                this.messages.push(this.message)
                this.message=""
                this.fetchChat()
            }
        },
        updateMessage(event){
            this.message=event.target.value
        },
        fetchChat(){
            axios.get(this.apis[this.$store.state.currentStreamer])
                .then((response)=>{
                    this.messages=this.messages.concat(response.data.text.split("\n"));
                    
                })
                .catch((error)=> {
                    // handle error
                    console.log(error);
                 })
        }

    }
}

</script>
<style scoped>
div{
    background-color: #18181B;
    height: 100%;
    width: 100%;
}

</style>