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
            <h1>{{park.name}}</h1>
          </v-flex>
          
          <v-flex d-flex xs12 md12>
            <p>{{park.neighborhood}}</p>
          </v-flex>

          <v-flex d-flex xs12 md12>
            <p>{{park.address}}</p>
          </v-flex>

          <v-flex d-flex xs12 md12>
            <p>{{park.description}}</p>
          </v-flex>

          <v-flex d-flex xs12 md12>
            <h2>Reviews</h2>
          </v-flex>

          <div
            v-for="(review) in park.reviews"
            v-bind:key="review.id">
              
            <v-flex d-flex xs12 md9 align-self-start>
              {{review.body}}
            </v-flex>
            
            <v-flex xs12 md1>
              {{review.rating}}
            </v-flex>
            
            <v-flex xs12 md1 align-self-end>
              <v-btn
                @click="deleteReview(`${review.id}`)">
                Delete
              </v-btn>
            </v-flex>
            
          </div>

          <v-flex d-flex xs12 md12>
            <h2>Write a Review</h2>
            <review-park></review-park>
          </v-flex>

        </v-layout>
      </v-container>
    </div>
</template>

<script>
import ReviewPark from '@/components/ReviewPark.vue'
import ParksService from '@/services/ParksService.js'
import ReviewsService from '@/services/ReviewsService.js'

export default {
  components: {
    'review-park': ReviewPark
  },

  data() {
    return {
      loading: false,
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
      this.loading = true
      let parkId = this.$store.state.route.params.parkId
      try {
        let park = await ParksService.show(parkId)
        this.loading = false
        this.park = park.data

      } catch(err) {
        this.error = err.message.toString()
      }
    },
  
    async deleteReview(review) {
      //TODO: review not being passed in from on click event
      debugger
      try {
        await ReviewsService.destroy(this.review.id)

      } catch(err) {
        this.error = err.message.toString()
      }
    }

  }

    
}
</script>

<style scoped>
</style>