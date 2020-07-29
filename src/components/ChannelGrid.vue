<template>
<div class="container">
    <div class="row">
        <Channel
        v-for="streamer in streamers"
        v-bind:key="streamer.name"
        v-bind:streamer="streamer"
        />
    </div>
</div>
</template>
<script>
import Channel from "./Channel.vue"
export default {
    name: 'ChannelGrid',
    components:{Channel},
    data:function() {
        return{
            streamers:[
                {
                    name:"xqc",
                    image:"https://pbs.twimg.com/profile_images/1188911868863221772/fpcyKuIW_400x400.jpg",
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel provident ducimus dicta consequuntur. Modi consequatur illum, neque unde eum tempore?"
                },
                {
                    name:"HealthyGamerGG",
                    image:"https://www.healthygamer.gg/wp-content/uploads/2019/07/Untitled-design.png",
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel provident ducimus dicta consequuntur. Modi consequatur illum, neque unde eum tempore?"
                },
                {
                    name:"Hasan Piker",
                    image:"https://everipedia-storage.s3.amazonaws.com/ProfilePicture/en/hasan-piker/blob__67165_medium.webp",
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel provident ducimus dicta consequuntur. Modi consequatur illum, neque unde eum tempore?"
                }
            ]
        }
    }
}
</script>
<style scoped>
   
</style>
