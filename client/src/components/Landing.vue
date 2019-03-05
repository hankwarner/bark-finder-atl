<template>
<v-container fluid>

  <v-layout row wrap>
    <v-flex mt-3 mb-4 xs12 md12>
      <v-card>
        <v-img
          class="image"
          aspect-ratio="3"
          position="75% 35%"
          :lazy-src="`https://picsum.photos/10/6?image=15`"
          src="../../static/images/beagle.jpg">
          <h2
            class="display-3 font-weight-bold text-uppercase grey--text text--lighten-3">
            Welcome to Bark Finder Atl
          </h2>
          <h4
            class="display-1 font-weight-thin grey--text text--lighten-3">
            Where to go in ATL with your pup
          </h4>
        </v-img>
      </v-card>
    </v-flex>
  </v-layout>

  <v-layout row wrap justify-space-around>
    <v-flex mt-4 mb-4 xs12 md12>
      <h4 class="display-1">
        About
      </h4>
    </v-flex>
    <v-flex mb-5 xs12 md6>
      <span
        class="text-md-center subheading">
        Do you like to bring your dog everywhere with you? Bark Finder ATL is your source of information on local establishments and events that are dog-friendly. Before you make plans with your furry friend, make sure to check Bark Finder Atl for information and reviews on your local pet-scene. From the West End to Brookhaven, from East Lake to Vinings, we've got you covered.
      </span>
    </v-flex>
  </v-layout>

  <v-layout row wrap justify-space-around>
    <v-flex d-flex xs12 md3>
      <v-card>
        <v-img
          class="pointer"
          @click="navigateTo({
              name: 'parks'
          })"
          src="../../static/images/couple.jpg">
        </v-img>
        <v-card-title primary-title>
          <div>
            <div class="headline">Top dog parks</div>
            <span class="grey--text">Read about the best dog parks in Atlanta and write a review.</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn 
            flat
            @click="navigateTo({
              name: 'parks'
            })">
            View More
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-flex>

    <v-flex d-flex xs12 md3>
      <v-card>
        <v-img
          class="pointer"
          @click="navigateTo({
              name: 'restaurants'
          })"
          src="../../static/images/bardog.jpg">
        </v-img>
        <v-card-title primary-title>
          <div>
            <div class="headline">Dog-friendly dining</div>
            <span class="grey--text">Find the best restaurants in Atlanta where you can bring you best friend.</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn 
            flat
            @click="navigateTo({
              name: 'restaurants'
            })">
            View More
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-flex>

    <v-flex d-flex xs12 md3>
      <v-card>
        <v-img
          class="pointer"
          src="../../static/images/event.jpg"
          @click="navigateTo({
            name: 'events'
          })">
        </v-img>
        <v-card-title primary-title>
          <div>
            <div class="headline">Local pet-friendly events</div>
            <span class="grey--text">See upcoming local events that you can bring your leash to.</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn 
            flat
            @click="navigateTo({
              name: 'events'
            })">
            View More
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-flex>

  </v-layout>

</v-container>
</template>

<script>

export default {
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    }
  }
}

</script>


<style scoped>

.image {
  opacity: 0.6;
}

</style>
