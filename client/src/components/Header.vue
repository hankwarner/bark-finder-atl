<template>
    <!-- nav bar for web -->
    <v-toolbar fixed class="light-blue darken-2">
        <v-toolbar-title>
            <span
                class="home"
                @click="navigateTo({name: 'Landing'})">
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
            <v-btn flat
                @click="navigateTo({name: 'events'})">
                Events
            </v-btn>
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

        <!-- nav drawer for mobile -->
        <v-menu class="hidden-md-and-up" bottom left>
            <v-btn
              slot="activator"
              icon
            >
              <v-toolbar-side-icon></v-toolbar-side-icon>
            </v-btn>
            <v-list>
                <v-list-tile
                    v-for="(menuItem, i) in menuItems"
                    :key="i"
                    @click="menuItem.link"
                >
                    <v-list-tile-title
                        v-if="!$store.state.isUserLoggedIn"
                        @click="navigateTo({name: menuItem.link})"
                    >
                        {{ menuItem.title }}
                    </v-list-tile-title>

                    <v-list-tile-title
                        v-else
                        @click="logout()"
                    >
                        Logout
                    </v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-menu>
        
    </v-toolbar>
</template>

<script>

export default {
    data: () => ({
        menuItems: [
            { title: 'Parks', link: 'parks' },
            { title: 'Restaurants', link: 'restaurants' },
            { title: 'Events', link: 'events' },
            { title: 'Login', link: 'login' },
            { title: 'Sign Up', link: 'register' }
        ]
    }),
    
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
                name: 'Landing'
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
