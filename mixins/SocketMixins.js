import SocketIO from 'socket.io-client'

const SocketMixins = {
  name: 'SocketMixins',
  data() {
    return {
      username: this.$route.params.username,
      socket: null,
      messages: [],
      members: []
    }
  },
  methods: {
    sendNewMessage(message) {
      const newMessage = {
        date: new Date(),
        user: this.username,
        type: 'chat-msg',
        color: 'secondary',
        message
      }
      this.socket.emit('SEND_MESSAGE', newMessage)
      this.messages.push(newMessage)
    },
    setActions() {
      this.socket.on('CHAT_INFO', (chatInfo) => {
        this.members = chatInfo.members
      })
      this.socket.on('NEW_MEMBER', (newMember) => {
        const filter = this.members.filter(
          (member) => member.username === newMember.username
        )
        if (!filter.length) {
          this.members.push(newMember)
        }
      })
      this.socket.on('NEW_MESSAGE', (message) => {
        this.messages.push(message)
      })
    }
  },
  mounted() {
    this.socket = SocketIO('http://localhost:7071')
    this.socket.emit('JOIN_CHAT', {
      username: this.username
    })
    this.setActions()
  }
}

export default SocketMixins
