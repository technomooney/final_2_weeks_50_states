<template>
  <page-header></page-header>
  <router-view></router-view>
  <page-footer></page-footer>
</template>

<script>
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";
import StateList from "@/components/StateList";
export default {
  name: 'App',
  components: {
    StateList,
    PageFooter,
    PageHeader
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h2 {
  color: #117096;
}
p {
  color: #2f90b6
}
body {
  background-color: #2c3e50;
}
a {
  text-decoration: none;
  color: darkcyan;
}
</style>
