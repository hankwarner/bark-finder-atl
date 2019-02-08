<template>
    <div>
      <form>
        <v-select
          :items="items"
          label="Rating"
          v-model="review.rating"
        ></v-select>
        
        <v-textarea
          solo
          type="body"
          name="body"
          v-model="review.body"
          placeholder="Write your review here">
        </v-textarea>

          <div class="error" v-html="error" />

        <v-btn
          @click="createReview">Submit</v-btn>
      </form>
    </div>
</template>

<script>
import ReviewsService from '@/services/ReviewsService.js'

export default {
  data() {
    return {
      loading: false,
      items: [1, 2, 3, 4, 5],
      review: {
        body: null,
        rating: null,
        parkId: this.$store.state.route.params.parkId,
        userId: this.$store.state.userId,
        token: this.$store.state.token
      },
      error: null
    }
  },

  methods: {
    async createReview() {
      let parkId = this.$store.state.route.params.parkId
      
      try {
        await ReviewsService.create(parkId, this.review)

      } catch(err) {
        this.error = err.message.toString()
      }
    }
  }
}
</script>

<style scoped>

</style>
