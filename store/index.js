export const state = () => ({
  blogPosts: [],
  teamPosts: [],
  meetupPosts: [],
  schoolPosts: []
})

export const mutations = {
  setBlogPosts(state, list) {
    state.blogPosts = list
  },
  setTeamPosts(state, list) {
    state.teamPosts = list
  },
  setMeetupPosts(state, list) {
    state.meetupPosts = list
  },
  setSchoolPosts(state, list) {
    state.schoolPosts = list
  }
}

export const actions = {
  async nuxtServerInit({
    commit
  }) {
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
    let meetupFiles = await require.context(
      '~/assets/content/meetup/',
      false,
      /\.json$/
    )
    let meetupPosts = meetupFiles.keys().map(key => {
      let res = meetupFiles(key)
      res.slug = key.slice(2, -5)
      return res
    })
    let schoolFiles = await require.context(
      '~/assets/content/school/',
      false,
      /\.json$/
    )
    let schoolPosts = schoolFiles.keys().map(key => {
      let res = schoolFiles(key)
      res.slug = key.slice(2, -5)
      return res
    })
    await commit('setBlogPosts', blogPosts)
    await commit('setTeamPosts', teamPosts)
    await commit('setMeetupPosts', meetupPosts)
    await commit('setSchoolPosts', schoolPosts)
  }
}