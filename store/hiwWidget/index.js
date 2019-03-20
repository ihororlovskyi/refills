import firebase, { DB } from '@/services/fireinit.js'

export default {

  state: {
    loadedHiwWidget: []
  },

  mutations: {
    setLoadedHiwWidget (state, payload) {
      state.loadedHiwWidget = payload
    }
  },

  actions: {
    loadHiwWidget ({commit}) {
      commit('setLoading', true)
      firebase.database().ref('hiwWidget').once('value')
        .then((data) => {
          const content = data.val()
          commit('setLoadedHiwWidget', content)
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
    loadedHiwWidget (state) {
      return state.loadedHiwWidget
    }
  }

}
