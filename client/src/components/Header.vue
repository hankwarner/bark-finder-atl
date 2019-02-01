<template>
    <v-toolbar fixed class="green">
        <v-toolbar-title>
            <span
                class="home"
                @click="navigateTo({name: 'HelloWorld'})">
                BarkFinderATL
            </span>
        </v-toolbar-title>
        
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn flat>Parks</v-btn>
            <v-btn flat>Restaurants</v-btn>
            <v-btn flat>Events</v-btn>
            
        </v-toolbar-items>

        <v-spacer></v-spacer>

         <v-toolbar-items class="hidden-sm-and-down">
            <v-btn flat
                @click="navigateTo({name: 'register'})">
                Sign Up
            </v-btn>
        </v-toolbar-items>

    </v-toolbar>

</template>

<script>

export default {
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        }
    }
  
}
</script>

<style scoped>
.home {
    cursor: pointer;
}

</style>
