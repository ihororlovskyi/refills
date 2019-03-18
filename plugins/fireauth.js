// import { auth } from '@/services/fireinit.js'

export default (context) => {
  const { store } = context
  store.dispatch('loadHero')
  store.dispatch('loadProjects')
  store.dispatch('loadFeatures')
  store.dispatch('loadSocialLinks')
  store.dispatch('loadInstaworks')
  store.dispatch('loadTeamMembers')
  // return new Promise((resolve, reject) => {
  //   auth.onAuthStateChanged(user => {
  //     store.commit('setUser', user)
  //     resolve()
  //   })
  // })
}
