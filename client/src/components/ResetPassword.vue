<template>
<v-container grid-list-md text-xs-center>
  <v-layout row wrap justify-space-around>
    <v-flex mb-1 xs12 md12>
      <h2 class="display-3">
        Reset Password
      </h2>
    </v-flex>

    <v-flex xs12 md4>
      <form>
        <v-layout my-4 row wrap justify-space-around>
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
              @click="resetPassword"
            >
              Submit
            </v-btn>
          </v-flex>
          <v-flex d-flex xs6 md12>
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
            Your password has been successfully reset! Redirecting to login page.
          </v-alert>
          </v-flex>
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
      password: '',
      passwordConfirmation: '',
      error: null,
      success: null
    }
  },

  mounted() {
    this.validateToken();
  },

  methods: {
    async validateToken() {
      const credentials = {
        userId: this.$store.state.route.params.id,
        userToken: this.$store.state.route.params.token
      };

      try {
        var user = await AuthenticationService.getUser(credentials);
        if (!user) return this.error = 'Invalid user';

      } catch (err) {
        this.error = 'Link is no longer valid';
        throw this.error;
      }
    },

    async resetPassword() {
      this.loading = true;
      try {
        var response = await AuthenticationService.resetPassword({
          userId: this.$store.state.route.params.id,
          token: this.$store.state.route.params.token,
          password: this.password,
          passwordConfirmation: this.passwordConfirmation,
        });
        this.success = true;
        this.password = null;
        this.passwordConfirmation = null;

        setTimeout(() => this.$router.push({name: 'login'}), 3000);

      } catch (err) {
        this.loading = false;
        debugger
        this.error = 'Passwords do not match';
        throw this.error;
      }
    }
  }
}
</script>

<style scoped>
</style>
