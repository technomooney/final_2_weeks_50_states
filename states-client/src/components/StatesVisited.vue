<template>
  <h2>These are the states you have visited:</h2>

<!--  found how to do this here: -->
<!--  https://forum.vuejs.org/t/router-link-with-dynamic-id-in-v-for-loop/11040/5  -->
  <p v-for="state in visitedStates" class="state-container">
    <router-link :to="`/map/${state.name}`">{{ state.name }}</router-link>
  </p>
</template>

<script>
export default {
  name: "StatesVisited",
  data(){
    return {
      visitedStates:[]
    }
  },
  mounted() {
    this.$state_service.getVisited().then(states => {
      this.visitedStates = states
    }).catch(err => {
      alert('Sorry, can\'t fetch state list')
      console.log(err)
    })
  }
}
</script>

<style scoped>
a {
  font-family: cursive;
  font-size: 2rem;
  color: deepskyblue;
  text-decoration: none ;
}
a:visited {
  color: cadetblue;
}

</style>