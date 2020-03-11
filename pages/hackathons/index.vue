<template>
<body>
  <section class="section">
    <div class="container">
      <h1 class="title">Hackathons</h1>
    </div>
    <div class="container">
      <div class="columns">
        <div class="column is-two-thirds">
          <div v-for="(hackathonPost, index) in hackathonPosts" :key="index" style="padding-top:8%">
            <div class="card">
              <div class="card-content">
                <h1 class="title is-4" style="margin-bottom: 12px">{{hackathonPost.title}}</h1>
                <span style="font-size:0.8rem">{{hackathonPost.date | formatDate}}</span>
                <div v-html="$md.render(hackathonPost.body)" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</body>
</template>

<script>
import moment from 'moment'

export default {
  computed: {
    hackathonPosts() {
      return this.$store.state.hackathonPosts
    }
  },
  filters: {
    formatDate: function(value) {
      if (value) {
        return moment(String(value))
          .startOf('day')
          .fromNow()
      }
    }
  }
}
</script>