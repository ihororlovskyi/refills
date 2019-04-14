export default {

  state: {
    currentSlide: 0
  },

  mutations: {
    updateCurrentSlide (state, payload) {
      state.currentSlide = payload
    }
  },

  actions: {
    updateCurrentSlide ({commit}, payload) {
      commit('updateCurrentSlide', payload)
    }
  },

  getters: {
    currentSlide (state) {
      return state.currentSlide
    }
  }

}
