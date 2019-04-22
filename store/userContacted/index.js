export default {

  state: {
    userContacted: false
  },

  mutations: {
    setUserContacted (state, payload) {
      state.loading = payload
    }
  },

  actions: {
  },

  getters: {
    userContacted (state) {
      return state.userContacted
    }
  }

}
