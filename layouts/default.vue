<template>
  <div class="applefont columns is-centered">
    <div class="column is-three-fifths">
      <div class="container">
        <Navbar />
        <nuxt />
      </div>
    </div>
  </div>
</template>

<style>
.applefont {
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
}
</style>

<script>
import Navbar from '~/components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>