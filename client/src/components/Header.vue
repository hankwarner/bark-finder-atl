<template>
    <v-toolbar fixed class="light-blue darken-3">
        <v-toolbar-title>
            <span
                class="home"
                @click="navigateTo({name: 'HelloWorld'})">
                BarkFinderATL
            </span>
        </v-toolbar-title>
        
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn flat
                @click="navigateTo({name: 'parks'})">
                Parks
            </v-btn>
            <v-btn flat
                @click="navigateTo({name: 'restaurants'})">
                Restaurants
            </v-btn>
            <v-btn flat>Events</v-btn>
            
        </v-toolbar-items>

        <v-spacer></v-spacer>

         <v-toolbar-items class="hidden-sm-and-down">
            <v-btn 
                v-if="!$store.state.isUserLoggedIn"
                flat
                @click="navigateTo({name: 'login'})">
                Login
            </v-btn>
            
            <v-btn 
                v-if="!$store.state.isUserLoggedIn"
                flat
                @click="navigateTo({name: 'register'})">
                Sign Up
            </v-btn>

            <v-btn 
                v-if="$store.state.isUserLoggedIn"
                flat
                @click="logout()">
                Logout
            </v-btn>
        </v-toolbar-items>

    </v-toolbar>

</template>

<script>

export default {
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        },
        logout() {
            this.$store.dispatch('setToken', null)
            this.$store.dispatch('setUser', null)
            this.$store.dispatch('setUserId', null)
            //Redirect to homepage
            this.$router.push({
                name: 'HelloWorld'
            })
        }
    }
  
}
</script>

<style scoped>
.home {
    cursor: pointer;
}

</style>
