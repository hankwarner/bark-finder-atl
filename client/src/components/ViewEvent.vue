<template>
  <div>
    <v-container fluid >
      <v-layout row wrap justify-space-around>
        <v-flex d-flex xs12 md12>
          <v-img 
            :src="$store.state.events.event.imageUrl"
            aspect-ratio="4"
            alt="dog event">
          </v-img>
        </v-flex>
        
        <v-flex d-flex xs12 md12>
          <h2 class="display-3">{{$store.state.events.event.name}}</h2>
        </v-flex>
        
        <v-flex d-flex xs12 md12>
          <h3 class="display-2">{{$store.state.events.event.neighborhood}}</h3>
        </v-flex>

        <v-flex d-flex xs12 md12>
          <h5 class="headline">{{$store.state.events.event.address}}</h5>
        </v-flex>

        <v-flex d-flex xs12 md12>
          <v-rating
            v-model="$store.state.events.event.rating"
            background-color="orange lighten-3"
            color="orange"
            medium
          ></v-rating>
        </v-flex>
        <v-flex d-flex xs12 md7>
          <hr>
        </v-flex>
        <v-flex class="description-map-block" d-flex xs12 md6>
          <p class="subheading">{{$store.state.events.event.description}}</p>
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
import EventsService from '@/services/EventsService.js'
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
    this.getEvent()
  },

  methods: {
    async getEvent() {
      let eventId = this.$store.state.route.params.eventId

      try {
        let event = await EventsService.show(eventId)
        this.$store.dispatch('setEvent', event.data)
        
      } catch(err) {
        console.log(err)
      }
    },
  
    async deleteReview(reviewId) {
      let eventId = this.$store.state.route.params.eventId
      
      try {
        this.$store.dispatch('deleteEventReview', reviewId)
        await ReviewsService.destroy(eventId, reviewId)

      } catch(err) {
        console.log(err)
      }
    }
  },

  computed: {
    allReviews: () => {
      return store.state.events.event.reviews
    }
  }
    
}
</script>

<style scoped>
</style>