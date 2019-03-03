import Player from '~models/player'

let messages = [
    'Hello lobby'
]

export default (io, namespace) => {
    namespace.on('connection', (socket) => {
        socket.player = new Player(socket.id)

        console.log('user connected to lobby ' + socket.id)


        socket.on('get.chat.messages', (callback) => {
            callback({ messages })
        })


        socket.on('get.user.me', (callback) => {
            callback(socket.player)
        })


    })
}
