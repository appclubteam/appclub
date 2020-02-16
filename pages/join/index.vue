<template>
<body>
  <section class="section">
    <div class="container has-text-centered">
      <h1 class="title">We aims to help students who build apps, or want to.</h1>
      <h2 class="subtitle is-6">You’ve got to be willing to disrupt (and be disrupted).</h2>
      <div class="step">
        <h1 class="title is-5">
          Step 1 - Join Facebook Group
          <span>{{ stepOneChecked }}</span>
        </h1>
        <a
          class="button is-link"
          href="https://www.facebook.com/plugins/group/join/popup/?group_id=206109017200714&amp;source=email_campaign_plugin"
          target="_blank"
          rel="noopener"
          @click="stepOneChecked='✅'"
        >Join Facebook Group</a>
        <h1
          class="subtitle has-text-grey-dark"
          style="font-size:0.6rem"
        >introduce yourself, make your first post.</h1>
      </div>
      <div class="step">
        <h1 class="title is-5">Step 2 - Subscribe for updates {{stepTwoChecked}}</h1>

        <div v-show="stepTwoChecked==''">
          <form
            ref="subscribeForm"
            action="https://script.google.com/macros/s/AKfycbz6uxnigEk7JmlHONcZDWw_MMOqZLckkxBhtRii_Jq-0AvuBr4/exec"
            method="post"
            target="hiddenFrame"
            onsubmit="this.submit(); this.reset(); return false;"
          >
            <div class="field is-grouped is-grouped-centered">
              <p class="control">
                <input
                  class="input"
                  type="email"
                  name="email"
                  placeholder="Your email"
                  v-model="member.email"
                  required
                />
              </p>
              <p class="control">
                <button class="button is-black" type="submit" @click="subscribe">
                  <strong>Subscribe</strong>
                </button>
              </p>
              <iframe name="hiddenFrame" width="0" height="0" border="0" style="display: none;"></iframe>
            </div>
          </form>
          <h1
            class="subtitle has-text-grey-dark"
            style="font-size:0.6rem"
          >for those interested to hear from us in the future, without us knowing much about you.</h1>
        </div>
        <div v-show="stepTwoChecked=='✅'">
          <h1 class="title is-5">Spread the word</h1>
          <h2
            class="subtitle is-6"
          >If you want to help App Club even more, share your reason for subscribing.</h2>
          <a
            class="twitter-share-button"
            target="_blank"
            rel="noopener"
            data-show-count="false"
            href="https://twitter.com/intent/tweet?text=I%20just%20subscribed%20to%20umapp.club%20@umappclub%20"
            data-size="large"
          >Tweet</a>
        </div>
      </div>

      <div id="form" class="step">
        <h1 class="title is-5">Step 3 - Join the community {{stepThreeChecked}}</h1>
        <h1
          class="subtitle has-text-grey-dark"
          style="font-size:0.6rem"
        >we will have Slack for chat, you'll be invited when it's up. ❤️</h1>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="has-text-centered" v-show="formVisible==false && formSubmitted==false">
          <a class="button is-black" href="#form" @click="formVisible=true">Send me an invitation</a>
        </div>
        <section class="section" v-show="formSubmitted">
          <div class="container has-text-centered">
            <h1 class="title">You're in!</h1>
            <h2 class="subtitle">Check your mail, we have a letter for you. 💌</h2>
            <img src="../../assets/mail.gif" alt="spongebob tearing mail excitedly" />
          </div>
        </section>

        <div v-show="formVisible">
          <form
            ref="form"
            action="https://script.google.com/macros/s/AKfycbzdg5zyVPG9_dWKnR0TaxqkOsu8t4ZJWgh1hIyJt2cRtYGsarsO/exec"
            method="post"
            target="hiddenFrame"
            onsubmit="this.submit(); this.reset(); return false;"
          >
            <div class="field">
              <label class="label">Name</label>
              <div class="control">
                <input
                  class="input"
                  type="text"
                  placeholder="My beautiful name"
                  v-model="member.name"
                  name="name"
                  required
                />
              </div>
              <p
                class="help"
              >This could your first name or a nickname - the name you'd like us/friends/family to use to refer to you.</p>
            </div>
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input
                  class="input"
                  type="email"
                  placeholder="Email address"
                  v-model="member.email"
                  name="email"
                  value
                  required
                />
              </div>
            </div>
            <div class="field">
              <label class="label">What I do</label>
              <div class="control">
                <input
                  class="input"
                  type="text"
                  placeholder="I build apps LOL"
                  v-model="member.do"
                  name="do"
                  required
                />
              </div>
              <p
                class="help"
              >Let people know what you do. This is the first thing you'd like us/friends/family to know about you.</p>
            </div>

            <div class="field">
              <label class="label">Status</label>
              <div class="control">
                <label class="radio">
                  <input
                    type="radio"
                    v-model="member.status"
                    name="status"
                    value="student"
                    required
                  />
                  Student
                </label>
                <label class="radio">
                  <input
                    type="radio"
                    v-model="member.status"
                    name="status"
                    value="working"
                    required
                  />
                  Working
                </label>
              </div>
            </div>
            <div class="field">
              <label class="label">{{member.status=="student" ? 'Course/Degree':'Title/Position'}}</label>
              <div class="control">
                <input
                  class="input"
                  type="text"
                  :placeholder="member.status=='student' ? 'My Course/Degree':'My Title/Position'"
                  v-model="member.position"
                  name="position"
                  required
                />
              </div>
            </div>
            <div class="field">
              <label
                class="label"
              >{{member.status=="student" ? 'College/University':'Company/Organization'}}</label>
              <div class="control">
                <input
                  class="input"
                  type="text"
                  :placeholder="member.status=='student' ? 'My College/University':'My Company/Organization' "
                  v-model="member.organization"
                  name="organization"
                  required
                />
              </div>
            </div>

            <div class="field">
              <label class="label">Social Profiles</label>
              <div class="control">
                <textarea
                  class="textarea"
                  placeholder="https://..."
                  v-model="member.social"
                  name="social"
                  required
                ></textarea>
              </div>
              <p
                class="help"
              >URL links to your online presence (for example LinkedIn, Twitter, Instagram, and Facebook). Separate by comma if more than one.</p>
            </div>
            <div class="field">
              <label class="label">What I wanna get from this community</label>
              <div class="control">
                <textarea
                  class="textarea"
                  placeholder="I want to ..."
                  v-model="member.get"
                  name="get"
                  required
                ></textarea>
              </div>
              <p class="help">Your idea shapes us.</p>
            </div>
            <div class="field">
              <label class="label">What I can contribute</label>
              <div class="control">
                <textarea
                  class="textarea"
                  placeholder="I can ..."
                  v-model="member.contribute"
                  name="contribute"
                  required
                ></textarea>
              </div>
              <p
                class="help"
              >We appreciate if you come with contribution in mind, however it is totally fine if you just wanna learn ;)</p>
            </div>
            <div class="field">
              <div class="control">
                <button class="button is-black" type="submit" @click="submit">Register</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</body>
</template>

<style>
.step {
  padding-block: 4%;
}
</style>
<script>
export default {
  components: {},
  data() {
    return {
      stepOneChecked: '',
      stepTwoChecked: '',
      stepThreeChecked: '*',
      formVisible: false,
      formSubmitted: false,
      member: {
        name: '',
        email: '',
        do: '',
        status: '',
        position: '',
        organization: '',
        social: '',
        get: '',
        contribute: ''
      }
    }
  },
  methods: {
    submit: function() {
      this.$refs.form.addEventListener('submit', event => {
        event.preventDefault()
        this.formSubmitted = true
        this.formVisible = false
        this.stepThreeChecked = '✅'
        location.href = '#form'
      })
    },
    subscribe: function() {
      this.$refs.subscribeForm.addEventListener('submit', event => {
        event.preventDefault()
        this.stepTwoChecked = '✅'
        let twitterScript = document.createElement('script')
        twitterScript.async = true
        twitterScript.defer = true
        twitterScript.setAttribute(
          'src',
          'https://platform.twitter.com/widgets.js'
        )
        document.head.appendChild(twitterScript)
      })
    }
  }
}
</script>