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
                <img :src="home.logoDark" :alt="home.title" width="25px"/>
                <span class="ml-3">{{ home.title }}</span>
              </a>

              <router-link class="fw800 px-3" :to="home.url" v-ripple v-else>
                <img :src="home.logoDark" :alt="home.title" width="25px"/>
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

    <mob-menu/>

  </v-app>
</template>

<script>
  import MobMenu from '@/components/widgets/MobMenu'

  export default {
    components: {
      MobMenu
    },
    data () {
      return {
        headerHello: false,
        offsetTop: 0
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
      },
      home () {
        return this.$store.state.mobmenu.home
      },
      menu () {
        return this.$store.state.mobmenu.menu
      },
      phone () {
        return this.$store.state.mobmenu.phone
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
