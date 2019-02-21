<template> 
<v-container fluid>
  <v-layout row wrap justify-space-around>
    <v-flex 
      d-flex 
      xs12 
      md4
      mx-5
      my-4
      v-for="(park) in parks"
      v-bind:key="park.id"
    >
      <v-hover>
        <v-card
          slot-scope="{ hover }"
          class="mx-auto"
          color="grey lighten-4"
          max-width="600"
        >
          <v-img
            :aspect-ratio="16/9"
            :src="park.imageUrl"
            @click="navigateTo({
              name: 'park',
              params: {
                parkId: park.id
              }
            })"
          >
            <v-expand-transition>
              <div
                v-if="hover"
                class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                style="height: 100%;"
              >
                {{park.neighborhood}}
              </div>
            </v-expand-transition>
          </v-img>
          <v-card-text
            class="pt-4"
            style="position: relative;"
          >
            <v-btn
              absolute
              color="orange"
              class="white--text"
              fab
              large
              right
              top
              @click="navigateTo({
              name: 'park',
              params: {
                parkId: park.id
              }
            })"
            >
              <v-icon>mdi-cart</v-icon>
            </v-btn>
            <h3 class="display-1 font-weight-light orange--text mb-2">{{park.name}}</h3>
            <div class="font-weight-light title mb-2">
              {{park.neighborhood}}
            </div>
          </v-card-text>
        </v-card>
      </v-hover>
    </v-flex>
  </v-layout>
</v-container>


  <!-- <v-container fluid>
    <v-layout row wrap justify-space-around
      class="parks"
      v-for="(park) in parks"
      v-bind:key="park.id">
        
        <v-flex d-flex xs12 md5>
          <v-img 
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
              <h4 class="display-1">{{park.name}}</h4>
            </v-flex>

            <v-flex d-flex xs12 md6>
              <h6 class="title">{{park.neighborhood}}</h6>
            </v-flex>

            <v-flex d-flex xs12 md12>
              <p class="subheading">{{park.description}}</p>
            </v-flex>

          </v-layout>
        </v-flex>
    </v-layout>
  </v-container> -->
    
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
.parks {
  margin-bottom: 4%;
}

</style>
