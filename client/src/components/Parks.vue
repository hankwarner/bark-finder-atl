<template>
    <div>
        <h1>Parks</h1>
            <ul
            v-for="(park, key) in parks">
                <li>{{park.name}}</li>
                <li>{{park.neighborhood}}</li>
                <li>{{park.address}}</li>
                <li>{{park.description}}</li>
            </ul>
        
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
  created() {
    this.callParks()
  },
//   watch() {
//     '$route': 'callParks'
//   }

  methods: {
    async callParks() {
        this.loading = true

      try {
        let parks = await ParksService.getParks()
        this.loading = false
        this.parks = parks.data
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
