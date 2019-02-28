<template> 
<v-container fluid>
  <v-layout row wrap justify-space-around>
    <v-flex 
      d-flex 
      xs12 
      md4
      mx-5
      my-4
      v-for="(event) in events"
      v-bind:key="event.id"
    >
      <v-hover>
        <v-card
          slot-scope="{ hover }"
          class="mx-auto"
          color="grey lighten-4"
          max-width="600"
        >
          <v-img
            class="pointer"
            :aspect-ratio="16/9"
            :src="event.imageUrl"
            @click="navigateTo({
              name: 'event',
              params: {
                eventId: event.id
              }
            })"
          >
            <v-expand-transition>
              <div
                v-if="hover"
                class="d-flex transition-fast-in-fast-out light-blue accent-3 v-card--reveal display-3 white--text"
                style="height: 100%;"
              >
                {{event.neighborhood}}
              </div>
            </v-expand-transition>
          </v-img>
          <v-card-text
            class="pt-4"
            style="position: relative;"
          >
            <h3 class="display-1 font-weight-light orange--text mb-2 pointer"
              @click="navigateTo({
                name: 'event',
                params: {
                  eventId: event.id
                }
              })">
                {{event.name}}
            </h3>
            <div class="font-weight-light title mb-2">
              {{event.neighborhood}}
              <v-rating
                :value="event.rating"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>
            </div>
          </v-card-text>
        </v-card>
      </v-hover>
    </v-flex>
  </v-layout>
</v-container>
    
</template>

<script>
import EventsService from '@/services/EventsService.js'

export default {
  data() {
    return {
      loading: false,
      events: [],
      error: null
    }
  },
  mounted() {
    this.callEvents()
  },

  methods: {
    async callEvents() {
        this.loading = true

      try {
        let events = await EventsService.index()
        this.events = events.data
        this.loading = false
        
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
.events {
  margin-bottom: 4%;
}

</style>
