<template>
  <v-app>

    <v-container fluid pa-0 class="Header" v-if="headerHello">
      <v-container py-0 class="MainContainer">

        <scrollactive
          active-class="is-active"
          :offset="100"
          :duration="800"
          bezier-easing-value=".5,0,.35,1"
          class="scrollactive"
          v-on:itemchanged="onItemChanged"
          :modifyUrl="false"
        >
          <v-layout>
            <v-flex xs8 sm6 md4>
              <a class="scrollactive-item fw800 px-3" :href="home.anchor" v-ripple v-if="$route.path === '/'">
                <img :src="home.logo" :alt="home.title" width="25px"/>
                <span class="ml-3">{{ home.title }}</span>
              </a>

              <router-link class="fw800 px-3" :to="home.url" v-ripple v-else>
                <img :src="home.logo" :alt="home.title" width="25px"/>
                <span class="ml-3">{{ home.title }}</span>
              </router-link>
            </v-flex>

            <v-flex class="hidden-sm-and-down" v-if="$route.path === '/'">
              <v-layout>
                <!-- <a class="scrollactive-item scrollactive-item--select px-3"
                  v-for="i in menu"
                  :key="i.anchor"
                  :href="i.anchor"
                  v-ripple
                >{{ i.title }}</a> -->
              </v-layout>
            </v-flex>

            <v-flex>
              <v-layout justify-end>
                <!-- <a class="hidden-md-and-down px-3" :href="'tel:' + phone.href">{{ phone.text }}</a>
                <a class="hidden-sm-and-down px-2"
                  v-for="i in loadedSocialLinksSortedByOld"
                  :key="i.key"
                  :href="i.link"
                  target="_blank"
                  v-ripple
                >
                  <v-icon small color="#262626">{{ i.icon }}</v-icon>
                </a>
                <a class="hidden-md-and-up px-4" @click.stop="drawer = !drawer">
                  <v-icon color="#262626">mdi-menu</v-icon>
                </a> -->
                <a class="hidden-xs-only px-3" :href="'tel:' + phone.href">{{ phone.text }}</a>
                <a class="hidden-xs-only px-2"
                  v-for="i in loadedSocialLinksSortedByOld"
                  :key="i.key"
                  :href="i.link"
                  target="_blank"
                  v-ripple
                >
                  <v-icon small color="#262626">{{ i.icon }}</v-icon>
                </a>
                <a class="hidden-sm-and-up px-4" @click="handleClick">
                  <v-icon color="#262626">mdi-menu</v-icon>
                </a>
              </v-layout>
            </v-flex>

          </v-layout>
        </scrollactive>
      </v-container>
    </v-container>

    <v-content>
      <nuxt v-scroll="onScroll"/>
    </v-content>

    <v-navigation-drawer
      v-model="sidebarOpen"
      app
      right
      disable-resize-watcher
    >
      <v-list>
        <v-list-tile exact :to="home.url">
          <v-list-tile-action>
            <img :src="home.logo" :alt="home.title" width="32px"/>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ home.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <!-- <v-divider/>

        <v-subheader>Проекты</v-subheader>

        <v-list-tile
          v-for="i in loadedProjectsSortedByOld"
          :key="i.key"
          :to="'/project/' + i.id + '/'"
        >
          <v-list-tile-action>
            <v-avatar size="34">
              <v-img :src="i.imgCover" :alt="i.title"/>
            </v-avatar>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ i.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile> -->

        <v-divider/>

        <v-subheader>Следите за нами</v-subheader>

        <v-list-tile
          v-for="i in loadedSocialLinksSortedByOld"
          :key="i.key"
          :href="i.link"
          target="_blank"
        >
          <v-list-tile-action>
            <v-icon color="#262626">{{ i.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ i.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-divider/>

        <v-subheader>Быстрая связь</v-subheader>

        <v-list-tile
          :href="'tel:' + phone.href"
          target="_blank"
        >
          <v-list-tile-action>
            <v-icon color="#262626">{{ phone.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ phone.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-divider/>

      </v-list>
    </v-navigation-drawer>

  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        // drawer: false,
        offsetTop: 0,
        headerHello: false,
        home: {
          title: 'Studio Yehor Popov',
          logo: 'https://firebasestorage.googleapis.com/v0/b/yehorpopov-db.appspot.com/o/logo%2Fstudio-yehor-popov-logo-dark.svg?alt=media&token=0db77e06-8c22-4c39-a4f9-0acb58b1b759',
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
    },
    computed: {
      loadedSocialLinksSortedByOld () {
        return this.$store.getters.loadedSocialLinksSortedByOld
      },
      loadedProjectsSortedByOld () {
        return this.$store.getters.loadedProjectsSortedByOld
      },
      sidebarOpen () {
        return this.$store.state.mobmenu.sidebarOpen
      }
    },
    methods: {
      onItemChanged(event, currentItem, lastActiveItem) {
      },
      onScroll (e) {
        this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
        if (this.offsetTop > 80) {
          return this.headerHello = true
        } else {
          return this.headerHello = false
        }
      },
      handleClick () {
        this.$store.dispatch('toggleSidebar')
      }
    }
  }
</script>

<style lang="stylus">
  .Header
    position: fixed
    z-index: 4
    background-color: #fff
    width: 100%
    a
      display: flex
      justify-content: flex-start
      align-items: center
      height: 80px
      max-width: 220px
      text-decoration: none
      transition: background-color .5s ease
      color: #262626
      &:hover,
      &.scrollactive-item--select.is-active
        background-color: #f7f7f7
</style>
