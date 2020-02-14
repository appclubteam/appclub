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
  },
  head() {
    return {
      title: 'App Club - for students who build apps, or want to.',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description'
        }
      ]
    }
  }
}
</script>