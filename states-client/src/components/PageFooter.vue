<template>
  <div>

    <div>
      <span class="nav-link">
        <router-link to="/">Home</router-link>
      </span>
      <span class="nav-link">
        <router-link to="/about">About Site</router-link>
      </span>
    </div>
    <p> header image by <a href="https://www.flickr.com/photos/188138700@N06" target="_blank" rel="noreferrer noopener">Marty Mooney on Flickr</a></p>


  </div>
</template>

<script>


export default {
  name: "PageFooter"
}
</script>

<style scoped>
.nav-link {
  margin: 1rem 1rem;
}
</style>