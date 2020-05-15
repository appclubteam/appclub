<template>
  <div class="columns is-centered">
    <div class="column is-three-fifths">
      <div class="container">
        <Navbar />
        <nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>