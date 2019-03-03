export default (io, namespace) => {
    namespace.on('connection', (socket) => {
        console.log('user connected to game ' + socket.id)
    })
}
