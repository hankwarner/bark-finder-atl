<template>
  <div>
    <GmapMap
        :center="{lat: this.center.lat, lng: this.center.lng}"
        :zoom="18"
        map-type-id="terrain"
        style="width: 500px; height: 300px">

    <!-- <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"/> -->
    </GmapMap>
  </div>
</template>

<script>
import ParksService from '@/services/ParksService.js'

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
    // addMarker() {
    //   if (this.currentPlace) {
    //     const marker = {
    //       lat: this.currentPlace.geometry.location.lat(),
    //       lng: this.currentPlace.geometry.location.lng()
    //     };
    //     this.markers.push({ position: marker });
    //     this.places.push(this.currentPlace);
    //     this.center = marker;
    //     this.currentPlace = null;
    //   }
    // },
    async setPlace() {
      let parkId = this.$store.state.route.params.parkId

      try {
        let park = await ParksService.show(parkId)
        let lat = parseFloat(park.data.lat)
        let lng = parseFloat(park.data.lng)

        this.center = {
            lat: lat,
            lng: lng
        }
        

      } catch(err) {
        this.error = err.message.toString()
      }
    },
    // geolocate: function() {
    //   navigator.geolocation.getCurrentPosition(position => {
    //     this.center = {
    //       lat: position.coords.latitude,
    //       lng: position.coords.longitude
    //     };
    //   });
    // }
  }
};
</script>