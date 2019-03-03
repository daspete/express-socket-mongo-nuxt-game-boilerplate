export const playerSchema = {
    socketId: {
        type: String,
    },
    name: {
        type: String,
        default: 'anonymous'
    }
}

class Player {
    constructor(socketId){
        this.socketId = socketId
        this.name = 'anonymous'

        this.game = null
    }
}


export default Player
