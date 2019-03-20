import Vue from 'vue'
import Vuex from 'vuex'
import loading from './loading'
import hero from './hero'
import projects from './projects'
import features from './features'
import team from './team'
import teamMembers from './teamMembers'
import social from './social'
import instaworks from './instaworks'
import customProject from './customProject'
import mobmenu from './mobmenu'

Vue.use(Vuex)

const store = () => {
  return new Vuex.Store({
     modules: {
      loading,
      hero,
      projects,
      features,
      team,
      teamMembers,
      social,
      instaworks,
      customProject,
      mobmenu
    }
   })
}

export default store
