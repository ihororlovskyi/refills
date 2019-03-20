// import { auth } from '@/services/fireinit.js'

export default (context) => {
  const { store } = context
  store.dispatch('loadHero')
  store.dispatch('loadProjects')
  store.dispatch('loadCustomProject')
  store.dispatch('loadFeatures')
  store.dispatch('loadSocialLinks')
  store.dispatch('loadInstaworks')
  store.dispatch('loadTeam')
  store.dispatch('loadTeamMembers')
  // return new Promise((resolve, reject) => {
  //   auth.onAuthStateChanged(user => {
  //     store.commit('setUser', user)
  //     resolve()
  //   })
  // })
}
