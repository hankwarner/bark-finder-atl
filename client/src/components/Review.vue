<template>
    <div>
      <form>
        <v-layout align-start row fill-height>
          <v-rating v-model="review.rating"></v-rating>
        </v-layout>
        <v-flex xs12 md4>
          <v-textarea
            solo
            type="body"
            name="body"
            v-model="review.body"
            placeholder="Write your review here">
          </v-textarea>
        </v-flex>
        <div class="error" v-html="error" />
        <v-layout align-start row fill-height>
          <v-btn
            @click="createReview">
            Submit
          </v-btn>
        </v-layout>
      </form>
    </div>
</template>

<script>
import ReviewsService from '@/services/ReviewsService.js'

export default {
  data() {
    return {
      loading: false,
      review: {
        body: null,
        rating: null,
      },
      error: null
    }
  },

  methods: {
    async createReview() {
      let parkId = this.$store.state.route.params.parkId
      let restaurantId = this.$store.state.route.params.restaurantId
      let eventId = this.$store.state.route.params.eventId
      let newReview = {
        body: this.review.body,
        rating: this.review.rating,
        parkId: this.$store.state.route.params.parkId,
        restaurantId: this.$store.state.route.params.restaurantId,
        eventId: this.$store.state.route.params.eventId,
        userId: this.$store.state.userId,
        user: this.$store.state.user,
        token: this.$store.state.token
      }
      
      try {

        if(parkId) {
          await ReviewsService.create(parkId, null, null, newReview)

        } else if (restaurantId) {
          await ReviewsService.create(null, restaurantId, null, newReview)

        } else if (eventId) {
          await ReviewsService.create(null, null, eventId, newReview)
        }
        
      } catch(err) {
        this.error = err.message.toString()
      }

      this.$store.dispatch('setNewReview', newReview)

      this.review.body = null
      this.review.rating = null
    }
  }
}
</script>

<style scoped>


</style>
