import Vue from 'vue'
import Vuex from 'vuex'
import loading from './loading'
import projects from './projects'
import features from './features'
import team from './team'
import social from './social'
import mobmenu from './mobmenu'

Vue.use(Vuex)

const store = () => {
  return new Vuex.Store({
     modules: {
      loading,
      projects,
      features,
      team,
      social,
      mobmenu: mobmenu
    }
   })
}

export default store
