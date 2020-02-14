<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand is-flex">
      <nuxt-link to="/" class="navbar-item">
        <img src="../assets/logo.jpg" height="100%" alt="App Club logo" />
      </nuxt-link>
    </div>
    <div class="navbar-menu">
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

<style>
.navbar-item {
  display: flex;
}

.navbar,
.navbar-menu,
.navbar-start,
.navbar-end {
  align-items: stretch;
  display: flex;
  padding: 0;
}

.navbar-menu {
  flex-grow: 1;
  flex-shrink: 0;
  box-shadow: none;
}
.navbar-start {
  justify-content: flex-start;
  margin-right: auto;
}
.navbar-end {
  justify-content: flex-end;
  margin-left: auto;
}
.navbar .container {
  display: flex;
}
.navbar-item {
  display: flex;
  align-items: center;
}
</style>