import firebase, { DB } from '@/services/fireinit.js'

export default {

  state: {
    loadedFeatures: []
  },

  mutations: {
    setLoadedFeatures (state, payload) {
      state.loadedFeatures = payload
    }
  },

  actions: {
    loadFeatures ({commit}) {
      commit('setLoading', true)
      firebase.database().ref('features').once('value')
        .then((data) => {
          const items = []
          const obj = data.val()
          for (let key in obj) {
            items.push({
              id: key,
              title: obj[key].title,
              isPublished: obj[key].isPublished,
              description: obj[key].description,
              date: obj[key].date
            })
          }
          commit('setLoadedFeatures', items)
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
    loadedFeatures (state) {
      return state.loadedFeatures.filter((project) => {
        return project.isPublished
      })
    },
    loadedFeaturesSortedByOld (state, getters) {
      return getters.loadedFeatures.sort((itemA, itemB) => {
        return new Date(itemA.date) - new Date(itemB.date)
      })
    },
    loadedFeaturesSortedByNew (state, getters) {
      return getters.loadedFeaturesSortedByOld.reverse()
    }
  }

}
