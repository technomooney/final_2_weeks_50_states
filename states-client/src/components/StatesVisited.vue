<template>
  <div v-if="visitedStates.length !== 0 && dataReady" >
    <h2>These are the states you have visited:</h2>

  <!--  found how to do this here: -->
  <!--  https://forum.vuejs.org/t/router-link-with-dynamic-id-in-v-for-loop/11040/5  -->
    <p v-for="state in visitedStates" class="state-container">
      <router-link :to="`/map/${state.name}`">{{ state.name }}</router-link>
    </p>
  </div>
  <h2 v-else>You have not visited any states yet!</h2>
</template>

<script>
export default {
  name: "StatesVisited",
  data(){
    return {
      visitedStates:[],
      dataReady:false
    }
  },
  mounted() {
    this.$state_service.getVisited().then(states => {
      this.visitedStates = states
      this.dataReady = true
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