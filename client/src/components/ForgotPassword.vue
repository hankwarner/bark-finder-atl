<template>
<v-container grid-list-md text-xs-center>
  <v-layout row wrap justify-space-around>
    <v-flex mb-1 xs12 md12>
      <h2 class="display-3">
        Forgot Password
      </h2>
    </v-flex>

    <v-flex xs12 md4>
      <form>
        <v-layout my-4 row wrap justify-space-around>
          <v-flex d-flex xs12 md12>
            <v-text-field
              label="Email"
              v-model="email"
              single-line
              solo
            ></v-text-field>
          </v-flex>
          <v-flex d-flex xs6 md5>
            <v-btn
              @click="sendResetPasswordEmail"
            >
              Submit
            </v-btn>
          </v-flex>
          <v-alert
            v-if="this.error"
            :value="true"
            type="error"
          >
            {{error}}
          </v-alert>
          <v-alert
            v-else-if="this.success"
            :value="true"
            type="success"
          >
            Your password reset request has been submitted. Please check your email for next steps.
          </v-alert>
        </v-layout>
      </form>
      <div v-if="loading">
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

  data() {
    return {
      loading: false,
      email: '',
      error: null,
      success: null
    }
  },

  methods: {
    async sendResetPasswordEmail() {
      this.loading = true

      try {
        var response = await AuthenticationService.sendResetPasswordEmail({email: this.email})
        this.loading = false
        this.success = true
      
      } catch (err) {
        this.loading = false
        this.error = 'Email does not match a record in our system'
        throw this.error
      }
    }
  }
}
</script>

<style scoped>
</style>
