<template>
<v-container grid-list-md text-xs-center>
  <v-layout row wrap justify-space-around>
    <v-flex mb-1 xs12 md12>
      <h2 class="display-3">
        Register
      </h2>
    </v-flex>

    <v-flex xs12 md4>
      <form>
        <v-layout my-4 row wrap justify-space-around>
          <v-flex d-flex xs12 md12>
            <v-text-field
              name="email"
              v-model="email"
              placeholder="Email"
              single-line
              solo
            ></v-text-field>
          </v-flex>
          <v-flex d-flex xs12 md12>
            <v-text-field
              name="Username"
              placeholder="Username"
              v-model="username"
              single-line
              solo
              ></v-text-field>
          </v-flex>
          <v-flex d-flex xs12 md12>
            <v-text-field
              name="Password"
              type="password"
              placeholder="Password"
              v-model="password"
              single-line
              solo
            ></v-text-field>
          </v-flex>
          <v-flex d-flex xs12 md12>
            <v-text-field
              name="passwordConfirmation"
              placeholder="Confirm password"
              type="password"
              v-model="passwordConfirmation"
              single-line
              solo
            ></v-text-field>
          </v-flex>
          <v-flex d-flex xs6 md5>
            <v-btn
              @click="register"
            >
              Register
            </v-btn>
          </v-flex>
          <v-alert
            v-if="this.error"
            :value="true"
            type="error"
          >
            {{error}}
          </v-alert>
        </v-layout>
      </form>
      <div 
        v-if="loading">
        <v-progress-circular
          indeterminate
          color="primary"
        ></v-progress-circular>
      </div>
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
      email: '',
      username: '',
      password: '',
      passwordConfirmation: '',
      error: null
    }
  },
  methods: {
    async register() {
      this.loading = true

      try {
        const response = await AuthenticationService.register({
          email: this.email,
          username: this.username,
          password: this.password,
          passwordConfirmation: this.passwordConfirmation,
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
        this.error = 'Bad username, email or password.'
        throw this.error
      }
    }
  }
}
</script>

<style scoped>
</style>
