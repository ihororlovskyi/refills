import firebase, { DB } from '@/services/fireinit.js'

export default {

  state: {
    loadedTeamMembers: []
  },

  mutations: {
    setLoadedTeamMembers (state, payload) {
      state.loadedTeamMembers = payload
    }
  },

  actions: {
    loadTeamMembers ({commit}) {
      commit('setLoading', true)
      firebase.database().ref('teamMembers').once('value')
        .then((data) => {
          const items = []
          const obj = data.val()
          for (let key in obj) {
            items.push({
              id: key,
              name: obj[key].name,
              isPublished: obj[key].isPublished,
              position: obj[key].position,
              photo: obj[key].photo,
              quote: obj[key].quote,
              date: obj[key].date
            })
          }
          commit('setLoadedTeamMembers', items)
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
    loadedTeamMembers (state) {
      return state.loadedTeamMembers.filter((project) => {
        return project.isPublished
      })
    },
    loadedTeamMembersSortedByOld (state, getters) {
      return getters.loadedTeamMembers.sort((itemA, itemB) => {
        return new Date(itemA.date) - new Date(itemB.date)
      })
    },
    loadedTeamMembersSortedByNew (state, getters) {
      return getters.loadedTeamMembersSortedByOld.reverse()
    }
  }

}
