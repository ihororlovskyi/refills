import firebase, { DB } from '@/services/fireinit.js'

export default {

  state: {
    loadedHero: []
  },

  mutations: {
    setLoadedHero (state, payload) {
      state.loadedHero = payload
    }
  },

  actions: {
    loadHero ({commit}) {
      commit('setLoading', true)
      firebase.database().ref('hero').once('value')
        .then((data) => {
          const content = data.val()
          commit('setLoadedHero', content)
          commit('setLoading', false)
        })
        .catch(
          (error) => {
            console.log(error)
            commit('setLoading', false)
          }
        )
    }
  },

  getters: {
    loadedHero (state) {
      return state.loadedHero
    }
  }

}
