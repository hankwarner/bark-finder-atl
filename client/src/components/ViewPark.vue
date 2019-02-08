<template>
    <div>
      <h1>{{park.name}}</h1>
      <p>{{park.address}}</p>
      <p>{{park.neighborhood}}</p>
      <p>{{park.description}}</p>

      <h2>Reviews</h2>
      <p
        v-for="review in park.reviews"
        v-bind:key="review.id">
        {{review.body}}
        {{review.rating}}
      </p>

    <div>
      <h2>Write a Review</h2>
      <review-park></review-park>
    </div>

    </div>
</template>

<script>
import ReviewPark from '@/components/ReviewPark.vue'
import ParksService from '@/services/ParksService.js'

export default {
  components: {
    'review-park': ReviewPark
  },

  data() {
    return {
      loading: false,
      park: [],
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
    }
  }
}
</script>

<style scoped>
</style>