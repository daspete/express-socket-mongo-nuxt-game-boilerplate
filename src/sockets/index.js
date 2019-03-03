import Lobby from '~sockets/lobby'
import Game from '~sockets/game'

export default (io) => {
    Lobby(io, io.of('/lobby'))
    Game(io, io.of('/game'))
}
