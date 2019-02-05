<template>
  <div>
    <h1>Login</h1>

    <form>
      <v-text-field
        type="username"
        name="username"
        v-model="username"
        placeholder="Username" />

      <v-text-field
        type="password"
        name="password"
        v-model="password"
        placeholder="Password" />

        <div class="error" v-html="error" />

      <v-btn
        @click="login">Login</v-btn>
    </form>
    
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      username: '',
      password: '',
      //token: null,
      error: null
    }
  },
  methods: {
    async login() {
      try {
        await AuthenticationService.login({
          username: this.username,
          password: this.password
        })
      } catch(err) {
        //need to define error here
        this.error = err.message.toString()
      }
      
    }
  }
}
</script>

<style scoped>
  .v-text-field {
    width: 20%;
    margin-left: 40%;
  }

</style>
