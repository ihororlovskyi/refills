import firebase, { DB } from '@/services/fireinit.js'

export default {

  state: {
    loadedInstaworks: []
  },

  mutations: {
    setLoadedInstaworks (state, payload) {
      state.loadedInstaworks = payload
    }
  },

  actions: {
    loadInstaworks ({commit}) {
      commit('setLoading', true)
      firebase.database().ref('instaworks').once('value')
        .then((data) => {
          const instaworksContent = data.val()
          commit('setLoadedInstaworks', instaworksContent)
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
    loadedInstaworks (state) {
      return state.loadedInstaworks
    }
  }

}
