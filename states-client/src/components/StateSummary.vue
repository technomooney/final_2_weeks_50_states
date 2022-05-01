<template>
  <p>There are a total of {{states.length}} states in the District of Columbia.</p>
  <p>You have visited {{numberOfVisited}} {{units}}.</p>
  <p v-if="areAllVisited">You have visited all the states!</p>
</template>

<script>
export default {
  name: "StateSummary",
  props: {
    states: Array
  },computed: {
    numberOfVisited() {
      let vistiedCount = 0
      this.states.forEach(state => {
        if (state.visited) {
          vistiedCount++
        }
      })
      return vistiedCount
    },
    units() {
      if (this.numberOfVisited === 1) {
        return 'state'
      } else {
        return 'states'
      }
    },
    areAllVisited() {
      return this.numberOfVisited === this.states.length
    }
  }
}
</script>

<style scoped>

</style>