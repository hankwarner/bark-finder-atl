<template>
  <div>
    <v-container fluid >
      <v-layout row wrap justify-space-around>
        <v-flex d-flex xs12 md12>
          <v-img 
            :src="$store.state.restaurants.restaurant.imageUrl"
            aspect-ratio="4"
            alt="restaurant"
          >
          </v-img>
        </v-flex>
        
        <v-flex d-flex xs12 md12>
          <h2 class="display-3">{{$store.state.restaurants.restaurant.name}}</h2>
        </v-flex>
        
        <v-flex d-flex xs12 md12>
          <h3 class="display-2">{{$store.state.restaurants.restaurant.neighborhood}}</h3>
        </v-flex>

        <v-flex d-flex xs12 md12>
          <h5 class="headline">{{$store.state.restaurants.restaurant.address}}</h5>
        </v-flex>

        <v-flex d-flex xs12 md12>
          <v-rating
            v-model="$store.state.restaurants.restaurant.rating"
            background-color="orange lighten-3"
            color="orange"
            medium
          ></v-rating>
        </v-flex>
        <v-flex d-flex xs12 md7>
          <hr>
        </v-flex>
        <v-flex class="description-map-block" d-flex xs12 md6>
          <p class="subheading">{{$store.state.restaurants.restaurant.description}}</p>
        </v-flex>

        <v-flex class="description-map-block" d-flex xs12 md4>
          <google-map></google-map>
        </v-flex>

        <v-flex d-flex xs12 md12>
          <div class="text-md-left">
            <h4 class="display-2">Reviews</h4>
          </div>
        </v-flex>

        <v-flex d-flex xs12 md12
          v-for="(review) in allReviews"
          v-bind:key="review.id">
          
          <v-layout row wrap align-start justify-space-between>
            
            <v-flex class="body-2" d-flex xs5 md2>
              <v-rating
                small
                v-model="review.rating">
              </v-rating>
            </v-flex>

            <v-flex class="body-2" mt-1 d-flex xs12 md12>
              {{review.User.username}}
            </v-flex>
            
            <v-flex class="body-2" mt-3 mb-5 d-flex xs12 md9 align-start>
              <div class="text-md-left">
                {{review.body}}
              </div>
            </v-flex>
            
            <v-flex d-flex xs1 md1>
              <v-btn
                flat 
                large 
                color="error"
                @click="deleteReview(review.id)"
                v-if="$store.state.users.user === review.User.username">
                Delete
              </v-btn>
            </v-flex>
            <v-flex d-flex xs1 md4>
              <hr>
            </v-flex>
          </v-layout>
        </v-flex>

        <v-flex d-flex xs12 md12>
          <div class="text-md-left">
            <h3>Write a Review</h3>
          </div>
        </v-flex>
        
        <v-flex d-flex xs12 md12>
          <review></review>
        </v-flex>
        
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Review from '@/components/Review.vue'
import GoogleMap from '@/components/GoogleMap.vue'
import RestaurantsService from '@/services/RestaurantsService.js'
import ReviewsService from '@/services/ReviewsService.js'
import store from '@/store/store'

export default {
  components: {
    'review': Review,
    'google-map': GoogleMap
  },

  data() {
    return {
      error: null
    }
  },
  
  mounted() {
    this.getRestaurant()
  },

  methods: {
    async getRestaurant() {
      this.loading = true
      let restaurantId = this.$store.state.route.params.restaurantId
      
      try {
        let restaurant = await RestaurantsService.show(restaurantId)
        store.dispatch('setRestaurant', restaurant.data)

      } catch(err) {
        console.log(err)
      }
    },
  
    async deleteReview(reviewId) {
      let restaurantId = this.$store.state.route.params.restaurantId
      
      try {
        this.$store.dispatch('deleteRestaurantReview', reviewId)
        await ReviewsService.destroy(restaurantId, reviewId)

      } catch(err) {
        console.log(err)
      }
    }
  },

  computed: {
    allReviews: () => {
      return store.state.restaurants.restaurant.reviews
    }
  }
    
}
</script>

<style scoped>
</style>