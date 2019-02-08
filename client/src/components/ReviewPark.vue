<template>
    <div>
      <form>
        <v-text-field
          type="rating"
          name="rating"
          v-model="review.rating" />
        
        <v-text-field
          type="body"
          name="body"
          v-model="review.body"
          placeholder="Write a review here" />

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
        
        this.$router.push({
          name: 'park',
          params: {
            parkId: parkId
          }
        })

      } catch(err) {
        //need to define error here
        this.error = err
      }
    }
  }
}
</script>

<style scoped>

</style>
