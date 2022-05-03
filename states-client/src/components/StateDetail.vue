<template>
<div class="state-info">
  <span class="state-name">{{state.name}}</span>

  <div>
    <input class="visit-state" type="checkbox" v-model="visitedModified" v-on:change="visitedChanged">
  </div>
  <div class="to-center">
    <!-- nav to /map/[state name] aka /map/Minnesota or /map/Colorado-->
    <router-link v-bind:to=" {name:'StateMap', params: {state: state.name}}">
<!--      <img class="map-icon" src="@/assets/map_icon.png">-->
      <div class="map-icon"></div>
    </router-link>
  </div>
</div>
</template>

<script>

export default {
  name: "StateDetail",
  props: {
    state:Object // dont modify props
  },
  data() {
    return {
      visited: this.state.visited // its fine to modify data
    }
  },
  methods: {
    visitedChanged() {
      this.$emit('update-visited', this.state.name, this.visited)
    }
  }
}
</script>

<style scoped>
.state-info {
  padding: 1rem;
  height: 8rem;
  width: 10rem;
  border: 1px gainsboro;
  border-radius: .3rem;
  background-color: floralwhite;
}
.visit-state {
  margin: 1rem;
  text-align: center;
}

.to-center {
  text-align: center;
}
.map-icon {
  width: 3rem;
  height: 3rem;
  background-repeat: no-repeat;
  display: inline-flex;
  background-image: url("../assets/map_icon.png");
  background-size: contain;
  filter: hue-rotate(-85deg) saturate(3)brightness(100%);
}


</style>