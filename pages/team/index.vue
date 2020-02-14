<template>
<body>
  <section class="section">
    <div class="container">
      <h1 class="title">The small team</h1>
      <h2 class="subtitle">driven by our community members.</h2>
      <div class="columns is-multiline is-vcentered is-mobile">
        <div
          class="column is-one-quarter-desktop is-half-mobile"
          v-for="(teamPost, index) in teamPosts"
          :key="index"
        >
          <a :href="teamPost.url" target="_blank">
            <div class="card">
              <div class="card-image">
                <figure class="image is-square">
                  <img :src="teamPost.image" :alt="teamPost.name" />
                </figure>
              </div>
              <div class="card-content" align="middle">
                <p class="title is-6">{{teamPost.name}}</p>
              </div>
            </div>
          </a>
        </div>
        <div class="column is-one-quarter-desktop is-full-mobile">
          <a
            href="https://www.facebook.com/AppClubUM/photos/a.1804927009747463/1826164714290359/?type=3"
            target="_blank"
          >
            <p class="title is-6" align="middle">
              +
              <u>the founding team</u>
            </p>
          </a>
        </div>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-two-thirds">
          <article v-for="(blogPost, index) in blogPosts" :key="index">
            <h1 class="title">{{blogPost.title}}</h1>
            <div v-html="$md.render(blogPost.body)" />
          </article>
        </div>
      </div>
    </div>
  </section>
</body>
</template>

<style >
figure img {
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
}

article {
  white-space: pre-line;
  padding-bottom: 10%;
}
</style>

<script>
import hello from '../../assets/hello.md'
export default {
  computed: {
    teamPosts() {
      return this.$store.state.teamPosts
    },
    blogPosts() {
      return this.$store.state.blogPosts
    },
    hello() {
      return hello
    }
  }
}
</script>