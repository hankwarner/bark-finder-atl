<template>
  <div>
    <GmapMap
        :center="{lat: this.center.lat, lng: this.center.lng}"
        :zoom="14"
        map-type-id="hybrid"
        style="width: 500px; height: 300px">

    <GmapMarker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="true"
      @click="center=m.position"/>
    </GmapMap>
  </div>
</template>

<script>
import ParksService from '@/services/ParksService.js'
import RestaurantsService from '@/services/RestaurantsService.js'
import EventsService from '@/services/EventsService.js'
import { debug } from 'util';

export default {
  name: "GoogleMap",
  data() {
    return {
      center: {
        lat: 45.5017,
        lng: 73.5673
      },
      markers: [],
      currentPlace: null
    };
  },
  mounted() {
    this.setPlace();
  },
  methods: {
    async setPlace() {
      let parkId = this.$store.state.route.params.parkId
      let restaurantId = this.$store.state.route.params.restaurantId
      let eventId = this.$store.state.route.params.eventId
      let item;
      
      try {
        if(parkId) {
          item = await ParksService.show(parkId)
        } else if (restaurantId) {
          item = await RestaurantsService.show(restaurantId)
        } else if (eventId) {
          item = await EventsService.show(eventId)
        }
        
        let lat = parseFloat(item.data.lat)
        let lng = parseFloat(item.data.lng)
        this.center = {
          lat: lat,
          lng: lng
        }
        let marker = {
          lat: lat,
          lng: lng
        }
        this.markers.push({ position: marker})
      } catch (err) {
        this.error = err.message.toString()
        
      }
    }
  }
};
</script>