import Vue from 'vue'
// import socketio from 'socket.io'
import VueSocketIO from 'vue-socket.io'
import SocketIO from 'socket.io-client'
import store from '../store'

// export const SocketInstance = socketio('http://localhost:7071')
// export const SocketInstance = socketio('http://localhost:7071/socket.io/socket.io.js');

Vue.use(
  new VueSocketIO({
    debug: true,
    connection: SocketIO('http://localhost:7071'),
    vuex: {
      store,
      actionPrefix: 'SOCKET_',
      mutationPrefix: 'SOCKET_'
    }
  })
)
