<template>
  <div class="container">
    <span>
      Successfully regsitered! Click <a href="/"> here </a> to login
    </span>
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
.container {
  background-color: white;
  display: flex;
  justify-content: center;
}
</style>
