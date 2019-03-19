<template>
<v-container grid-list-md text-xs-center>
  <v-layout row wrap justify-space-around>
    <v-flex mb-1 xs12 md12>
      <h2 class="display-3">
        Login
      </h2>
    </v-flex>

    <v-flex xs12 md4>
      <form>
        <v-layout my-4 row wrap justify-space-around>
          <v-flex d-flex xs12 md12>
            <v-text-field
              label="Username"
              v-model="username"
              single-line
              solo
            ></v-text-field>
          </v-flex>
          <v-flex d-flex xs12 md12>
            <v-text-field
              label="Password"
              type="password"
              v-model="password"
              single-line
              solo
            ></v-text-field>
          </v-flex>
          <div class="error" v-html="error" />
          <v-flex d-flex xs6 md5>
            <v-btn
              @click="login"
            >
              Login
            </v-btn>
          </v-flex>
        </v-layout>
      </form>
      <div v-if="loading">
        <v-progress-circular
          indeterminate
          color="primary"
        ></v-progress-circular>
      </div>
      <v-flex xs12 md12>
        <v-btn 
          outline 
          color="indigo"
          @click="navigateTo({
            name: 'resetPassword'
          })"
        >Forgot your password?</v-btn>
      </v-flex>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import store from '@/store/store'

export default {
  data () {
    return {
      loading: false,
      username: '',
      password: '',
      error: null
    }
  },

  methods: {
    async login() {
      this.loading = true

      try {
        const response = await AuthenticationService.login({
          username: this.username,
          password: this.password
        })
        
        store.dispatch('setToken', localStorage.token)
        store.dispatch('setUser', localStorage.user)
        store.dispatch('setUserId', localStorage.userId)
        
        this.loading = false
        this.$router.push({
          name: 'Landing'
        })
        
      } catch(err) {
        this.loading = false
        this.error = 'Username and password combination does not exist'
        throw this.error
      }
    },

    navigateTo(route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
</style>
