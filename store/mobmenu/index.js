import * as types from '../mutation-types'

const state = {
  sidebarOpen: false,
  home: {
    title: 'Studio Yehor Popov',
    logoDark: 'https://firebasestorage.googleapis.com/v0/b/yehorpopov-db.appspot.com/o/logo%2Fstudio-yehor-popov-logo-dark.svg?alt=media&token=0db77e06-8c22-4c39-a4f9-0acb58b1b759',
    logoWhite: 'https://firebasestorage.googleapis.com/v0/b/yehorpopov-db.appspot.com/o/logo%2Fstudio-yehor-popov-logo-white.svg?alt=media&token=1fc33f91-1f15-4c5a-a646-3121db009370',
    url: '/',
    anchor: '#hero'
  },
  menu: [
    {
      title: 'Проекты',
      anchor: '#projects'
    },
    {
      title: 'Как мы работаем',
      anchor: '#howitworks'
    },
    // {
    //   title: 'Наши работы',
    //   anchor: '#works'
    // },
    {
      title: 'Команда',
      anchor: '#team'
    },
    {
      title: 'Контакты',
      anchor: '#contacts'
    }
  ],
  phone: {
    icon: 'mdi-phone',
    href: '+380667677171',
    text: '+380 66 767 71 71'
  }
}

const getters = {
  sidebarOpen: state => state.sidebarOpen,
  home: state => state.home,
  menu: state => state.menu,
  phone: state => state.phone
}

const actions = {
  toggleSidebar ({ commit, state }) {
    commit(types.TOGGLE_SIDEBAR)
  }
}

const mutations = {
  [types.TOGGLE_SIDEBAR] (state) {
    state.sidebarOpen = !state.sidebarOpen
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
