<template>
  <div>
    <h1>Register</h1>

    <form>
      <v-text-field
        type="email"
        name="email"
        v-model="email"
        placeholder="Email" />

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
        @click="register">Register</v-btn>
    </form>
    
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      email: '',
      username: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register() {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          username: this.username,
          password: this.password
        })
        
        this.$store.dispatch('setToken', localStorage.token)
        this.$store.dispatch('setUser', localStorage.user)
        this.$store.dispatch('setUserId', localStorage.userId)
      } catch(err) {
        //need to define error here
        this.error = err
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
