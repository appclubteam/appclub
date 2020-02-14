<template>
<body>
  <section id="intro" class="section">
    <div class="container">
      <h1 class="title">For students who build apps, or want to.</h1>

      <!-- <div class="columns" style="justify-content: flex-end;"> -->
      <div class="columns">
        <div class="column">
          <h2 class="subtitle">Join us — and help everyone create for the future.</h2>
        </div>
        <div class="column is-half">
          <p>
            We're on a mission to rethink tech education in universities — around the idea of autonomy in choosing what we wanna learn.
            If that sounds good to you, you should join. Even if you live outside the University of Malaya (UM), outside Malaysia, or not a student anymore. (Yes, most of us are based in UM, but not limiting to, thanks for asking).
          </p>
          <br />
          <a href="#mission">Learn more about our mission &#8628;</a>
        </div>
      </div>
      <picture>
        <img src="../assets/illustration.svg" alt="illustration of App Club" />
      </picture>
    </div>
  </section>
  <section id="mission" class="section">
    <div class="container">
      <h1 class="title is-5">
        Spreading the
        <nuxt-link to="/artists-makers-hackers">artists, makers, and hackers</nuxt-link>&nbsp;culture.
      </h1>
      <div class="columns is-variable is-1">
        <div class="column">
          <nuxt-link to="/talktuesdays">
            <div class="card">
              <div class="card-content">
                <p class="title is-6">Talk Tuesdays</p>
                <p
                  class="subtitle is-6 has-text-grey"
                >Interesting talks and a place for members to meet.</p>
              </div>
            </div>
          </nuxt-link>
        </div>
        <div class="column">
          <nuxt-link to="/schools">
            <div class="card">
              <div class="card-content">
                <p class="title is-6">Schools</p>
                <p
                  class="subtitle is-6 has-text-grey"
                >Workshops for everyone. Suggest topics you like or teach.</p>
              </div>
            </div>
          </nuxt-link>
        </div>
        <div class="column">
          <nuxt-link to="/hackathons">
            <div class="card">
              <div class="card-content">
                <p class="title is-6">Hackathons</p>
                <p
                  class="subtitle is-6 has-text-grey"
                >24 or 48-hour hackathons for teams. Unleash your creativity.</p>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <div class="columns is-variable is-7">
        <div class="column is-two-fifths">
          <h1 class="title is-1">Our mission</h1>
          <p>"Stay hungry. Stay foolish." ― Steve Jobs</p>
        </div>
        <div class="column">
          <h2
            class="subtitle is-1"
          >To enable students to develop tech products — and build the tech startup ecosystem in campuses.</h2>
        </div>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <picture>
        <img
          loading="lazy"
          src="../assets/groupphoto.jpg"
          alt="Our App Club meetup to meet each other, with pizzas."
        />
        <h1
          class="title is-7 is-pulled-right has-text-grey-dark"
        >our meetup to meet each other, with pizzas.</h1>
      </picture>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-three-fifths">
          <h1 class="title is-1">
            Our core
            <s>values</s> behaviors
          </h1>
          <p>We don't have core values, because values mean nothing without action. So these are our core behaviors.</p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="columns">
        <div class="column is-three-fifths behavior">
          <div class="behavior-item">
            <h1 class="title is-4">1.&nbsp; Start with ourselves.</h1>
            <h2
              class="subtitle is-6"
            >We are building these for CS students like us. That's why we devoted the past few years of our university lives to not just being full-time students, but also to building a better tech education for ourselves and our communities. When App Club wins, you win, and vice versa.</h2>
          </div>
          <div class="behavior-item">
            <h1 class="title is-4">2. We fail a lot.</h1>
            <h2
              class="subtitle is-6"
            >Failing is learning. If we’re not failing, we’re not doing it right. We care about sharing our failures publicly to make sure we learn and don't repeat.</h2>
          </div>
          <div class="behavior-item">
            <h1 class="title is-4">3. Empower by sharing.</h1>
            <h2
              class="subtitle is-6"
            >There is magic when people from different background come together and share knowledge with each other. It could be a link you drop in the chat, a talk you give, or a casual chat we have. Many problems can be solved easily if you have access to the knowledge of others. We believe brilliant ideas spark when thoughts aggregate, and infinite gains ensues when knowledge shared.</h2>
            <h1 class="subtitle is-7">more in our member handbook*</h1>
          </div>
        </div>
        <div class="column is-hidden-touch">
          <picture>
            <img
              class="is-pulled-right"
              src="../assets/people.svg"
              alt="illustration of App Club"
              style="height: 100%; transform: scale(-1,1)"
            />
          </picture>
        </div>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <h2 class="subtitle is-5">
        We hold events throughout the year to share new skills and ideas, all while building a small safe space for student developers to learn.
        Oh, and we also help you find jobs.
      </h2>
      <h2 class="subtitle is-6">
        If that sounds good to you, you
        <strong>should join</strong>.
      </h2>
      <div>
        <nuxt-link to="/team">
          <a class="button">
            <strong>The Team</strong>
          </a>
        </nuxt-link>
        <nuxt-link to="/join">
          <a class="button is-black">
            <strong>Join the Club</strong>
          </a>
        </nuxt-link>
      </div>
      <p style="padding-top: 20px">
        Questions or comments? Email us at
        <a href="mailto:appclub.um@gmail.com">appclub.um@gmail.com</a> and follow our
        <a href="https://facebook.com/AppClubUM">Facebook Page</a>
      </p>
    </div>
  </section>
</body>
</template>

<style>
.behavior-item {
  padding-top: 20px;
}

.behavior-item .subtitle {
  padding-left: 28px;
}
</style>

<script>
export default {
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
      ]
    }
  }
}
</script>

