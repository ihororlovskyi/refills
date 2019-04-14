import firebase, { DB } from '@/services/fireinit.js'

export default {

  state: {
    loadedAboutWidget: []
  },

  mutations: {
    setLoadedAboutWidget (state, payload) {
      state.loadedAboutWidget = payload
    }
  },

  actions: {
    loadAboutWidget ({commit}) {
      commit('setLoading', true)
      firebase.database().ref('aboutWidget').once('value')
        .then((data) => {
          const content = data.val()
          commit('setLoadedAboutWidget', content)
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
    loadedAboutWidget (state) {
      return state.loadedAboutWidget
    }
  }

}
