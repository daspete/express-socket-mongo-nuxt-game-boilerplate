import http from 'http'

import expressConfig from '~config/express'

import express from '~services/express'
import mongoose from '~services/mongoose'
import socketio from '~services/socket'

const app = express()
const server = http.createServer(app)

mongoose()

server.listen(expressConfig.port, expressConfig.ip, () => {
    console.log(`Server is listening on ${ expressConfig.ip }:${ expressConfig.port }`)
})

const io = socketio(server)
