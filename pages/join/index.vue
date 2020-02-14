<template>
<body>
  <section class="section">
    <div class="container has-text-centered">
      <h1 class="title">We aims to help students who build apps, or want to.</h1>
      <h2 class="subtitle is-5">It's not what we are but we're going to be that matters.</h2>
      <FacebookInviteButton />
    </div>
  </section>
  <SignupForm />
</body>
</template>

<script>
import SignupForm from '~/components/SignupForm.vue'
import FacebookInviteButton from '~/components/FacebookInviteButton.vue'

export default {
  components: {
    SignupForm,
    FacebookInviteButton
  }
}
</script>