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
          content:
            "The UM App Club - To enable students to develop tech products — and build the tech startup ecosystem in campuses. We're on a mission to rethink tech education in universities — around the idea of autonomy in choosing what we wanna learn."
        }
      ]
    }
  }
}
</script>