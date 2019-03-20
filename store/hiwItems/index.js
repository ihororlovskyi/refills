import firebase, { DB } from '@/services/fireinit.js'

export default {

  state: {
    loadedHiwItems: []
  },

  mutations: {
    setLoadedHiwItems (state, payload) {
      state.loadedHiwItems = payload
    }
  },

  actions: {
    loadHiwItems ({commit}) {
      commit('setLoading', true)
      firebase.database().ref('hiwItems').once('value')
        .then((data) => {
          const items = []
          const obj = data.val()
          for (let key in obj) {
            items.push({
              id: key,
              title: obj[key].title,
              isPublished: obj[key].isPublished,
              img: obj[key].img,
              description: obj[key].description,
              date: obj[key].date
            })
          }
          commit('setLoadedHiwItems', items)
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
    loadedHiwItems (state) {
      return state.loadedHiwItems.filter((project) => {
        return project.isPublished
      })
    },
    // loadedHiwItemsSortedByOld (state, getters) {
    //   return getters.loadedHiwItems.sort((itemA, itemB) => {
    //     return new Date(itemA.date) - new Date(itemB.date)
    //   })
    // },
    loadedHiwItemsSortedByNew (state, getters) {
      return getters.loadedHiwItems.sort((itemA, itemB) => {
        return new Date(itemA.date) + new Date(itemB.date)
      })
    }
  }

}
