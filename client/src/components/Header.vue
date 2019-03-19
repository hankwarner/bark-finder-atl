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
                v-if="!isUserLoggedIn"
                flat
                @click="navigateTo({name: 'login'})">
                Login
            </v-btn>
            <v-btn 
                v-if="!isUserLoggedIn"
                flat
                @click="navigateTo({name: 'register'})">
                Sign Up
            </v-btn>
            <v-btn 
                v-if="isUserLoggedIn"
                flat
                @click="logout()">
                Logout
            </v-btn>
        </v-toolbar-items>

        <!-- nav drawer for mobile -->
        <v-menu class="hidden-md-and-up" bottom left>
            <template v-slot:activator="{ on }">
                <v-btn
                    v-on="on"
                    icon
                    >
                    <v-toolbar-side-icon></v-toolbar-side-icon>
                </v-btn>
            </template>
            <v-list v-if="!isUserLoggedIn">
                <v-list-tile
                    v-for="(menuItem, i) in unregisteredUserMenuItems"
                    :key="i"
                    @click="navigateTo({name: menuItem.link})"
                >
                    <v-list-tile-title>
                        {{menuItem.title}}
                    </v-list-tile-title>
                </v-list-tile>
            </v-list>

            <v-list v-else>
                <v-list-tile
                    v-for="(menuItem, i) in registeredUserMenuItems"
                    :key="i"
                    @click="navigateTo({name: menuItem.link})"
                >
                    <v-list-tile-title>
                        {{menuItem.title}}
                    </v-list-tile-title>
                </v-list-tile>
                <v-list-tile @click="logout()">
                    <v-list-tile-title>
                        Logout
                    </v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-menu>
        
    </v-toolbar>
</template>

<script>
import store from '@/store/store'

export default {
    data: () => ({
        unregisteredUserMenuItems: [
            { title: 'Parks', link: 'parks' },
            { title: 'Restaurants', link: 'restaurants' },
            { title: 'Events', link: 'events' },
            { title: 'Login', link: 'login' },
            { title: 'Sign Up', link: 'register' }
        ],

        registeredUserMenuItems: [
            { title: 'Parks', link: 'parks' },
            { title: 'Restaurants', link: 'restaurants' },
            { title: 'Events', link: 'events' }
        ]
    }),
    
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        },
        
        logout() {
            store.dispatch('setToken', null)
            store.dispatch('setUser', null)
            store.dispatch('setUserId', null)
            //Redirect to homepage
            this.$router.push({
                name: 'Landing'
            })
        }
    },

    computed: {
        isUserLoggedIn: () => {
            return store.state.users.isUserLoggedIn
        }
    }
  
}
</script>

<style scoped>
.home {
    cursor: pointer;
}
</style>