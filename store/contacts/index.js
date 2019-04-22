import firebase, { DB } from '@/services/fireinit.js'

export default {

  state: {
    loadedСontacts: []
  },

  mutations: {
    setLoadedСontacts (state, payload) {
      state.loadedСontacts = payload
    }
  },

  actions: {
    loadContacts ({commit}) {
      commit('setLoading', true)
      firebase.database().ref('contacts').once('value')
        .then((data) => {
          const content = data.val()
          commit('setLoadedСontacts', content)
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
    loadedСontacts (state) {
      return state.loadedСontacts
    }
  }

}
