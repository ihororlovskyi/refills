import firebase, { DB } from '@/services/fireinit.js'

export default {

  state: {
    loadedProjects: []
  },

  mutations: {
    setLoadedProjects (state, payload) {
      state.loadedProjects = payload
    }
  },

  actions: {
    loadProjects ({commit}) {
      commit('setLoading', true)
      firebase.database().ref('projects').once('value')
        .then((data) => {
          const items = []
          const obj = data.val()
          for (let key in obj) {
            items.push({
              id: key,
              title: obj[key].title,
              isPublished: obj[key].isPublished,
              price: obj[key].price,
              imgCover: obj[key].imgCover,
              atHero: obj[key].atHero,
              heroColor: obj[key].heroColor,
              pageColor1: obj[key].pageColor1,
              pageColor2: obj[key].pageColor2,
              pageColor3: obj[key].pageColor3,
              pageColor4: obj[key].pageColor4,
              pageColor5: obj[key].pageColor5,
              pageColor6: obj[key].pageColor6,
              description: obj[key].description,
              date: obj[key].date
            })
          }
          commit('setLoadedProjects', items)
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
    loadedProjects (state) {
      return state.loadedProjects.filter((project) => {
        return project.isPublished
      })
    },
    loadedProjectsSortedByOld (state, getters) {
      return getters.loadedProjects.sort((itemA, itemB) => {
        return new Date(itemA.date) - new Date(itemB.date)
      })
    },
    loadedProjectsSortedByNew (state, getters) {
      return getters.loadedProjectsSortedByOld.reverse()
    },
    loadedProjectsAtHero (state, getters) {
      return getters.loadedProjectsSortedByOld.filter((project) => {
        return project.atHero
      }).slice(0, 3)
    },
    loadedProject (state) {
      return (itemId) => {
        return state.loadedProjects.find((item) => {
          return item.id === itemId
        })
      }
    },
    loadedOtherProjects (state, getters) {
      return (itemId) => {
        return getters.loadedProjectsSortedByOld.filter((project) => {
          return project.id !== itemId
        }).slice(0, 2)
      }
    }
  }

}
