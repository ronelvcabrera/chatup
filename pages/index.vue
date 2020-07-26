<template>
  <div class="login">
    <div class="login-ctn">
      <div class="login-body">
        <b-field label="Username">
          <b-input v-model="username" placeholder="Your username" required>
          </b-input>
        </b-field>
        <b-field label="Password">
          <b-input
            v-model="password"
            type="password"
            password-reveal
            placeholder="Your password"
            required
          >
          </b-input>
        </b-field>
        <div v-show="errorMsg">
          <span class="has-text-danger">
            {{ errorMsg }}
          </span>
        </div>
      </div>
      <div class="login-btns">
        <b-button type="is-success" @click="onClickLogin">Login</b-button>
        <b-button type="is-info" @click="onClickRegister">Register</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  // middleware({ store }) {
  //   console.log('home middleware', store)
  // },
  data() {
    return {
      username: 'admin',
      password: 'admintest',
      errorMsg: ''
    }
  },
  methods: {
    async onClickLogin() {
      if (!this.username || !this.password) {
        this.errorMsg = 'Please enter username and password'
        return
      }
      try {
        const response = await this.$auth.loginWith('local', {
          data: {
            username: this.username,
            password: this.password
          }
        })
        if (response.data.token) {
          this.$router.push({
            name: 'chat',
            params: { username: this.username }
          })
        }
      } catch {
        this.errorMsg = 'Incorrect credentials'
      }
    },
    onClickRegister() {
      this.$router.push('register')
    }
  }
}
</script>

<style scoped>
.login-ctn {
  background-color: white;
}

.login {
  background-color: white;
  display: flex;
  justify-content: center;
}

.login-btns {
  margin-top: 10px;
}
</style>
