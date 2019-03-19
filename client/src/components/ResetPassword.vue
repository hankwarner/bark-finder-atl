<template>
<v-container grid-list-md text-xs-center>
  <v-layout row wrap justify-space-around>
    <v-flex mb-1 xs12 md12>
      <h2 class="display-3">
        Forgot your password
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
          <div class="error" v-html="error" />
          <v-flex d-flex xs6 md5>
            <v-btn
              @click="reset"
            >
              Send reset email
            </v-btn>
          </v-flex>
        </v-layout>
      </form>
      <!-- <div v-if="loading">
        <v-progress-circular
          indeterminate
          color="primary"
        ></v-progress-circular>
      </div> -->
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
            email: '',
            error: null
        }
    },

    methods: {
        async reset() {
            this.loading = true

            try {
            const response = await AuthenticationService.reset({email: this.email})
            this.loading = false

            this.$router.push({
                name: 'Landing'
            })
            
            } catch(err) {
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
