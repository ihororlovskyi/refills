import firebase, { DB } from '@/services/fireinit.js'

export default {

  state: {
    loadedPopupUserContacted: []
  },

  mutations: {
    setLoadedPopupUserContacted (state, payload) {
      state.loadedPopupUserContacted = payload
    }
  },

  actions: {
    loadPopupUserContacted ({commit}) {
      commit('setLoading', true)
      firebase.database().ref('popupUserContacted').once('value')
        .then((data) => {
          const content = data.val()
          commit('setLoadedPopupUserContacted', content)
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
    loadedPopupUserContacted (state) {
      return state.loadedPopupUserContacted
    }
  }

}
