import io from 'socket.io-client'

class Socket {
    constructor(){
        this.socketUrl = process.env.SOCKET_URL

        this.namespaces = {
            lobby: null,
            game: null
        }
    }

    ConnectToNamespace(namespace){
        this.namespaces[namespace] = io(`${ this.socketUrl }/${ namespace }`)
    }

    get Lobby(){
        return this.namespaces.lobby
    }

}

export default new Socket()
