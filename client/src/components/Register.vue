<template>
  <div>
    <h1>Register</h1>
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
        await AuthenticationService.register({
          email: this.email,
          username: this.username,
          password: this.password
        })
      } catch(err) {
        //need to define error here
        this.error = err
      }
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .error {
    color: red;
  }

  .v-text-field {
    width: 20%;
    margin-left: 40%;
  }

</style>
