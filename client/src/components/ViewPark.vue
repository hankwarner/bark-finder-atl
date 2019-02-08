<template>
    <div>
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
      <h1>{{park.name}}</h1>
      <p>{{park.address}}</p>
      <p>{{park.neighborhood}}</p>
      <p>{{park.description}}</p>

      <h2>Reviews</h2>

      <v-flex
        v-for="(review) in park.reviews"
        v-bind:key="review.id">
        {{review.body}}
        {{review.rating}}
        <v-btn
          @click="deleteReview()">
          Delete
        </v-btn>
      </v-flex>

    <div>
      <h2>Write a Review</h2>
      <review-park></review-park>
    </div>

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
  
    async deleteReview(index) {
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