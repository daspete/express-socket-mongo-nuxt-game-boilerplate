<template>
    <div class="app">APP {{ helloapi }} {{ messages }} {{ player }}</div>
</template>

<script>
import socket from '~/plugins/socket.js'

export default {

    async asyncData({ app }){
        let helloapi = null

        try{
            helloapi = await app.$axios.$get('/')
        }catch(err){}

        return {
            helloapi,
            messages: [],
            message: '',
            player: null
        }
    },

    beforeMount(){
        this.$root.socket = socket;
        this.$root.socket.ConnectToNamespace('lobby')
    },

    mounted(){
        this.$root.socket.Lobby.emit('get.user.me', (player) => {
            this.player = player
        })

        this.$root.socket.Lobby.emit('get.chat.messages', ({ messages }) => {
            this.messages = messages
        })
    }

}
</script>
