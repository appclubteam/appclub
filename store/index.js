export const state = () => ({
  blogPosts: [],
  teamPosts: []
})

export const mutations = {
  setBlogPosts(state, list) {
    state.blogPosts = list
  }, setTeamPosts(state, list) {
    state.teamPosts = list
  }
}

export const actions = {
  async nuxtServerInit({ commit }) {
    let blogFiles = await require.context(
      '~/assets/content/blog/',
      false,
      /\.json$/
    )
    let blogPosts = blogFiles.keys().map(key => {
      let res = blogFiles(key)
      res.slug = key.slice(2, -5)
      return res
    })
    let teamFiles = await require.context(
      '~/assets/content/team/',
      false,
      /\.json$/
    )
    let teamPosts = teamFiles.keys().map(key => {
      let res = teamFiles(key)
      res.slug = key.slice(2, -5)
      return res
    })
    await commit('setBlogPosts', blogPosts)
    await commit('setTeamPosts', teamPosts)
  }
}
