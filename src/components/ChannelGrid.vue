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
                    content: "Overwatch Professional tank player and full time streamer. EZ Clap"
                },
                {
                    name:"HealthyGamerGG",
                    image:"https://i.ytimg.com/vi/Hq32ZIz1EBE/maxresdefault.jpg",
                    content: "Dr. K is a Harvard-trained psychiatrist who covers topics around mental health via interviews and lectures."
                },
                {
                    name:"Hasan Piker",
                    image:"https://everipedia-storage.s3.amazonaws.com/ProfilePicture/en/hasan-piker/blob__67165_medium.webp",
                    content: "i'm a political commentator irl trying to avoid heated gaming moments"
                }
            ]
        }
    }
}
</script>
<style scoped>

</style>
