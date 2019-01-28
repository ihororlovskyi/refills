import Vue from 'vue'
import Vuex from 'vuex'
import loading from './loading'
import projects from './projects'
import features from './features'
import team from './team'
import social from './social'

Vue.use(Vuex)

const store = () => {
  return new Vuex.Store({
     modules: {
      loading: loading,
      projects: projects,
      features: features,
      team: team,
      social: social
    }
   })
}

export default store
