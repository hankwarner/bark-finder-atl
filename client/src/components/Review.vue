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
import store from '@/store/store'

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
        userId: this.$store.state.users.userId,
        username: this.$store.state.users.user,
        token: this.$store.state.users.token
      }
      
      try {
        if(parkId) {
          let review = await ReviewsService.create(parkId, null, null, newReview)
          newReview.id = review.data.id
          newReview.User = {
            username: this.$store.state.user
          }
          store.dispatch('setNewParkReview', newReview)

        } else if (restaurantId) {
          let review = await ReviewsService.create(null, restaurantId, null, newReview)
          newReview.id = review.data.id
          newReview.User = {
            username: this.$store.state.user
          }
          store.dispatch('setNewRestaurantReview', newReview)

        } else if (eventId) {
          let review = await ReviewsService.create(null, null, eventId, newReview)
          newReview.id = review.data.id
          newReview.User = {
            username: this.$store.state.user
          }
          store.dispatch('setNewEventReview', newReview)
        }
      } catch(err) {
        this.error = 'You must be logged in to do that'
        throw this.error
      }

      this.review.body = null
      this.review.rating = null
    }
  }
}
</script>

<style scoped>


</style>
