<template>
    <div>
      <v-container fluid >
          <v-layout row wrap justify-space-around
            v-for="(park) in parks"
            v-bind:key="park.id">
              
              <v-flex d-flex xs12 md5>
                <v-img 
                  class="image" 
                  :src="park.imageUrl"
                  aspect-ratio="2"
                  alt="dog park"
                  @click="navigateTo({
                    name: 'park',
                    params: {
                      parkId: park.id
                    }
                  })">
                </v-img>
              </v-flex>
              
              <v-flex d-flex xs12 md6>
                <v-layout row wrap>

                  <v-flex d-flex xs12 md6>
                    <p>{{park.name}}</p>
                  </v-flex>

                  <v-flex d-flex xs12 md6>
                    <p>{{park.neighborhood}}</p>
                  </v-flex>

                  <v-flex d-flex xs12 md12>
                    <p>{{park.description}}</p>
                  </v-flex>

                </v-layout>
              </v-flex>
          </v-layout>
      </v-container>
    </div>
</template>

<script>
import ParksService from '@/services/ParksService.js'

export default {
  data() {
    return {
      loading: false,
      parks: [],
      error: null
    }
  },
  mounted() {
    this.callParks()
  },
//   watch() {
//     '$route': 'callParks'
//   }

  methods: {
    async callParks() {
        this.loading = true

      try {
        let parks = await ParksService.index()
        this.loading = false
        this.parks = parks.data
        
      } catch(err) {
        this.error = err.message.toString()
      }
    },

    navigateTo(route) {
      this.$router.push(route)
    }

  }
}
</script>

<style scoped>
/* .image {
  width: 30%;
  height: 80%;
} */

</style>
