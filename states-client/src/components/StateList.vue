  <template>
    <div>
      <state-summary v-bind:states="states"></state-summary>
    </div>
    <div class="state-list-container">
      <div class="state-container" v-for="state in states" v-bind:key="state.name">
        <state-detail v-bind:state="state"
        v-on:update-visited="updateVisited"></state-detail>
      </div>
    </div>
  </template>

  <script>
  import StateDetail from "@/components/StateDetail";
  import StateSummary from "@/components/StateSummary";
  export default {
  name: "StateList",
  components: {StateSummary, StateDetail},
  data() {
    return {
      states: []
    }
  },
  mounted() {
    this.fetchAllStates()
  },
  methods: {
    fetchAllStates() {
      this.$state_service.getAllStates().then(states => {
        this.states = states
      }).catch(err => {
        alert('Sorry, can\'t fetch state list')
        console.log(err)
      })
    },
    updateVisited(stateName, visited) {
      this.$state_service.setVisited(stateName,visited).then(() => {
        this.fetchAllStates()
      }).catch(err => {
        alert('Sorry, can\'t update state')
        console.log(err)
      })
    }
  }
}
</script>


<style scoped>

.state-list-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.state-container {
  margin: 1rem;
}

</style>