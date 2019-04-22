import * as types from '../mutation-types'

export default {

  state: {
    userContacted: false
  },

  mutations: {
    [types.TOGGLE_USER_CONTACTED] (state) {
      state.userContacted = !state.userContacted
    }
  },

  actions: {
    toggleUserContacted ({ commit, state }) {
      commit(types.TOGGLE_USER_CONTACTED)
    }
  },

  getters: {
    userContacted: state => state.userContacted,
  }

}
