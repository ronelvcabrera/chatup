<template>
  <div class="register">
    <div class="register-ctn">
      <div class="register-body">
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
        <b-button type="is-info" @click="onClickRegister">Register</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      username: 'ronelvcabrera',
      password: 'test',
      errorMsg: ''
    }
  },
  methods: {
    async onClickRegister() {
      if (this.username && this.password) {
        const response = await this.$axios.post('/api/user/register', {
          username: this.username,
          password: this.password
        })
        console.log('response', response)
      }
    }
  }
}
</script>

<style lang="css" scoped>
.register-ctn {
  background-color: white;
}

.register {
  background-color: white;
  display: flex;
  justify-content: center;
}
</style>
