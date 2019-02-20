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
        parkId: this.$store.state.route.params.parkId,
        restaurantId: this.$store.state.route.params.restaurantId,
        userId: this.$store.state.userId,
        token: this.$store.state.token
      },
      error: null
    }
  },

  methods: {
    async createReview() {
      let parkId = this.$store.state.route.params.parkId
      let restaurantId = this.$store.state.route.params.restaurantId
      
      try {
        if(parkId) {
          await ReviewsService.create(parkId, null, this.review)
          this.review.body = null
          this.review.rating = null

        } else if (restaurantId) {
          await ReviewsService.create(null, restaurantId, this.review)
          this.review.body = null
          this.review.rating = null
        }
        
      } catch(err) {
        this.error = err.message.toString()
      }
    }
  }
}
</script>

<style scoped>


</style>
