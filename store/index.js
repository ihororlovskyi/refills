import Vue from 'vue'
import Vuex from 'vuex'
import loading from './loading'
import hero from './hero'
import slide from './slide'
import projects from './projects'
import features from './features'
import team from './team'
import teamMembers from './teamMembers'
import social from './social'
import instaworks from './instaworks'
import customProject from './customProject'
import mobmenu from './mobmenu'
import about from './about'
import hiwWidget from './hiwWidget'
import hiwItems from './hiwItems'

Vue.use(Vuex)

const store = () => {
  return new Vuex.Store({
     modules: {
      loading,
      hero,
      slide,
      projects,
      features,
      team,
      teamMembers,
      social,
      instaworks,
      customProject,
      mobmenu,
      about,
      hiwWidget,
      hiwItems
    }
   })
}

export default store