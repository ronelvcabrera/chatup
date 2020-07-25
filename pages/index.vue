<template>
  <div id="app" class="chat-container">
    <header class="chat-header">
      <h1><i class="fas fa-smile"></i> Chat Up</h1>
      <a href="index.html" class="btn">Leave Room</a>
    </header>
    <main class="chat-main">
      <div class="chat-sidebar">
        <h3><i class="fas fa-users"></i> Members</h3>
        <ul id="users">
          <li v-for="(member, idx) in members" :key="member.id">
            <b :key="`member${idx}`">{{ member.username }}</b>
          </li>
        </ul>
      </div>
      <div class="chat-messages">
        <ul id="chatbox">
          <li v-for="(msg, idx) in messages" :key="msg.id">
            <div class="msg-cloud" :class="getMsgCls(msg)">
              <span :key="`msg${idx}`">
                {{ getChatMessage(msg) }}
              </span>
            </div>
          </li>
        </ul>
      </div>
    </main>
    <div class="chat-form-container">
      <form id="chat-form" @submit.prevent="sendMessage">
        <input
          id="msg"
          v-model="message"
          type="text"
          placeholder="Enter Message"
          required
          autocomplete="off"
        />
        <button class="btn"><i class="fas fa-paper-plane"></i> Send</button>
      </form>
    </div>
  </div>
</template>

<script>
import SocketMixins from '~/mixins/SocketMixins'

export default {
  name: 'HomePage',
  mixins: [SocketMixins],
  data() {
    return {
      members: [],
      message: '',
      state: 0
    }
  },
  methods: {
    getMsgCls(message) {
      const fromMsg = message.user === this.username ? 'mine' : 'not-mine'
      return `message ${message.type} has-background-${message.color} ${fromMsg}`
    },
    getChatMessage(message) {
      if (message.user === this.username || message.type === 'broadcast') {
        return `${message.message}`
      }
      return `${message.user}: ${message.message}`
    },
    sendMessage() {
      if (this.message) {
        this.sendNewMessage(this.message)
        this.message = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/main.scss';
.msg-cloud {
  margin-bottom: 15px;
}

.msg-cloud.message.broadcast {
  display: flex;
  justify-content: center;
}

.msg-cloud.chat-msg.mine {
  display: flex;
  justify-content: flex-end;
  background-color: $success;
}

.msg-cloud.chat-msg.not-mine {
  display: flex;
  justify-content: flex-start;
}

.chat-header {
  display: flex;
  justify-content: space-between;
}
</style>
