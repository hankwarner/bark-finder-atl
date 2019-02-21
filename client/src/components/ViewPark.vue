<template>
  <div>
    <v-container fluid >
      <v-layout row wrap justify-space-around>
        <v-flex d-flex xs12 md12>
          <v-img 
            :src="park.imageUrl"
            aspect-ratio="4"
            alt="dog park"
            @click="navigateTo({
              name: 'park',
              params: {
                parkId: park.id
              }
            })">
          </v-img>
        </v-flex>
        
        <v-flex d-flex xs12 md12>
          <h2 class="display-3">{{park.name}}</h2>
        </v-flex>
        
        <v-flex d-flex xs12 md12>
          <h3 class="display-2">{{park.neighborhood}}</h3>
        </v-flex>

        <v-flex d-flex xs12 md12>
          <h5 class="headline">{{park.address}}</h5>
        </v-flex>

        <v-flex class="description-map-block" d-flex xs12 md6>
          <p class="subheading">{{park.description}}</p>
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
          v-for="(review) in park.reviews"
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
                @click="deleteReview(review)"
                v-if="$store.state.user === review.User.username">
                Delete
              </v-btn>
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
import ParksService from '@/services/ParksService.js'
import ReviewsService from '@/services/ReviewsService.js'
export default {
  components: {
    'review': Review,
    'google-map': GoogleMap
  },
  data() {
    return {
      park: [],
      review: {
        id: null
      },
      error: null
    }
  },
  
  mounted() {
    this.getPark()
  },
  watch: {
    park: "getPark"
  },
  methods: {
    async getPark() {
      let parkId = this.$store.state.route.params.parkId

      try {
        let park = await ParksService.show(parkId)
        this.park = park.data
        
      } catch(err) {
        this.error = err.message.toString()
      }
    },
  
    async deleteReview(review) {
      let reviewId = review.id
      //TODO: review not being passed in from on click event
      try {
        await ReviewsService.destroy(reviewId)
      } catch(err) {
        this.error = err.message.toString()
      }
    }
  }
    
}
</script>

<style scoped>
</style>