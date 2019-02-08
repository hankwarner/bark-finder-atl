<template>
    <div>
      <h1>{{park.name}}</h1>
      <p>{{park.address}}</p>
      <p>{{park.neighborhood}}</p>
      <p>{{park.description}}</p>

      <h2>Reviews</h2>
      <v-btn
        @click="navigateTo({name: 'reviewPark'})">
        Create Review
      </v-btn>
      <p
        v-for="review in park.reviews"
        v-bind:key="review.id">
        {{review.body}}
        {{review.rating}}
      </p>

    </div>
</template>

<script>
import ParksService from '@/services/ParksService.js'

export default {
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
  methods: {
    async getPark() {
      this.loading = true
      let parkId = this.$store.state.route.params.parkId
      try {
        let park = await ParksService.show(parkId)
        this.loading = false
        this.park = park.data
      } catch(err) {
        //need to define error here
        this.error = err
      }
    },
    navigateTo(route) {
      this.$router.push(route)
    },
  }
}
</script>

<style scoped>
</style>