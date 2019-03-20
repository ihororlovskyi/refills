import firebase, { DB } from '@/services/fireinit.js'

export default {

  state: {
    loadedCustomProject: []
  },

  mutations: {
    setLoadedCustomProject (state, payload) {
      state.loadedCustomProject = payload
    }
  },

  actions: {
    loadCustomProject ({commit}) {
      commit('setLoading', true)
      firebase.database().ref('customProject').once('value')
        .then((data) => {
          const content = data.val()
          commit('setLoadedCustomProject', content)
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
    loadedCustomProject (state) {
      return state.loadedCustomProject
    }
  }

}
