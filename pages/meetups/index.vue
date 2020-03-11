<template>
<body>
  <section class="section">
    <div class="container">
      <h1 class="title">Meetups</h1>
    </div>
    <div class="container">
      <div class="columns">
        <div class="column is-two-thirds">
          <div
            v-for="(meetupPost, index) in meetupPosts.slice().reverse()"
            :key="index"
            style="padding-top:8%"
          >
            <div class="card">
              <div class="card-content">
                <h1 class="title is-4" style="margin-bottom: 12px">{{meetupPost.title}}</h1>
                <span style="font-size:0.8rem">{{meetupPost.date | formatDate}}</span>
                <div v-html="$md.render(meetupPost.body)" />
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
    meetupPosts() {
      return this.$store.state.meetupPosts
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