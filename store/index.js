import Vue from 'vue'
import Vuex from 'vuex'
import loading from './loading'
import hero from './hero'
import projects from './projects'
import features from './features'
import team from './team'
import social from './social'
import instaworks from './instaworks'
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
      social,
      instaworks,
      mobmenu
    }
   })
}

export default store
