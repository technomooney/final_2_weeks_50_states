<template>
  <div class="state-map" >
    <h2>State of {{ state.name }}</h2>

    <p v-if="state.visited">You have visited this state!</p>
    <p v-else>You have not visited this state yet...</p>
  </div>

  <div id="map-container" v-if="dataReady">
    <l-map ref="map" v-on:ready="onMapReady" v-bind:center="mapCenter" v-bind:zoom="state.zoom">
      <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution=" &copy OpenStreetMap contributors"></l-tile-layer>
    </l-map>
  </div>
  <div v-else>
    <h1>{{state.name}} is an invalid state!</h1>
  </div>
</template>

<script>
import {LMap, LTileLayer} from '@vue-leaflet/vue-leaflet'

export default {
  name: "StateMap",
  components:{
    LMap,LTileLayer
  },
  data() {
    return {
      state: {},
      dataReady: false,
      mapReady: false,
      validState: false
    }
  },
  mounted() {
    this.state.name = this.$route.params.state
    this.fetchStateData()
  },
  methods: {
    fetchStateData() {
      this.$state_service.getOneState(this.state.name).then(state => {
        this.state = state
        this.dataReady = true
      }).catch(err => {
        //404
        if (err.response && err.response.status === 404) {
          this.$router.push({name:'NotFound'})
        } else {
          alert(`sorry error fetching data about ${this.state.name}`)
          console.log(err)
        }

        //500

      })
    },
    onMapReady() {
      this.mapReady = true
    },
    setMapView() {
      if (this.mapReady && this.dataReady) {
        this.$refs.map.leafletObject.setView(this.mapCenter, this.zoom)
      }
    }
  },
  computed: {
    mapCenter() {
      return [this.state.lat, this.state.lon]
    }
  }
}
</script>

<style scoped>

#map-container {
  filter: invert() hue-rotate(180deg);
  height: 30rem;
}
</style>