<template>
    
  <v-container fluid>
    <v-layout row wrap justify-space-around
      class="restaurants"
      v-for="(restaurant) in restaurants"
      v-bind:key="restaurant.id">
        
        <v-flex d-flex xs12 md5>
          <v-img 
            :src="restaurant.imageUrl"
            aspect-ratio="2"
            alt="restaurant"
            @click="navigateTo({
              name: 'restaurant',
              params: {
                restaurantId: restaurant.id
              }
            })">
          </v-img>
        </v-flex>
        
        <v-flex d-flex xs12 md6>
          <v-layout row wrap>

            <v-flex d-flex xs12 md6>
              <h4 class="display-1">{{restaurant.name}}</h4>
            </v-flex>

            <v-flex d-flex xs12 md6>
              <h6 class="title">{{restaurant.neighborhood}}</h6>
            </v-flex>

            <v-flex d-flex xs12 md12>
              <p class="subheading">{{restaurant.description}}</p>
            </v-flex>

          </v-layout>
        </v-flex>
    </v-layout>
  </v-container>
    
</template>

<script>
import RestaurantsService from '@/services/RestaurantsService.js'

export default {
  data() {
    return {
      loading: false,
      restaurants: [],
      error: null
    }
  },
  mounted() {
    this.callRestaurants()
  },

  methods: {
    async callRestaurants() {
        this.loading = true

      try {
        let restaurants = await RestaurantsService.index()
        this.loading = false
        this.restaurants = restaurants.data
        
      } catch(err) {
        this.error = err.message.toString()
      }
    },

    navigateTo(route) {
      this.$router.push(route)
    }

  }
}
</script>

<style scoped>
.restaurants {
  margin-bottom: 4%;
}

</style>
