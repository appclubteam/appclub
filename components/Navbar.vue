<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link to="/" class="navbar-item">
        <img src="../assets/logo.jpg" height="100%" alt="App Club logo" />
      </nuxt-link>
    </div>

    <div id="topnavbar" class="navbar-menu">
      <div class="navbar-end">
        <nuxt-link to="/team" class="navbar-item">The Team</nuxt-link>
        <nuxt-link to="/join" class="navbar-item">
          <a class="button is-black">
            <strong>Join the Club</strong>
          </a>
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>