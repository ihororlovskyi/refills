<template>
  <v-container fluid pa-0 class="HeaderFixed" :class="headerHello ? 'is-visible' : ''">
    <v-container py-0 class="MainContainer">

      <scrollactive
        active-class="is-active"
        :offset="80"
        :duration="800"
        bezier-easing-value=".5,0,.35,1"
        class="scrollactive"
        v-on:itemchanged="onItemChanged"
        :modifyUrl="false"
        :alwaysTrack="true"
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
              <a class="scrollactive-item scrollactive-item--select px-3"
                v-for="i in menu"
                :key="i.anchor"
                :href="i.anchor"
                v-ripple
              >{{ i.title }}</a>
            </v-layout>
          </v-flex>

          <v-flex>
            <v-layout justify-end>
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
              <a class="hidden-sm-and-up px-4" @click="handleClick" v-ripple>
                <v-icon color="#262626">mdi-menu</v-icon>
              </a>
            </v-layout>
          </v-flex>

        </v-layout>
      </scrollactive>
    </v-container>
  </v-container>
</template>

<script>
  export default {
    props: [ 'headerHello' ],
    computed: {
      loadedSocialLinksSortedByOld () {
        return this.$store.getters.loadedSocialLinksSortedByOld
      },
      loadedProjectsSortedByOld () {
        return this.$store.getters.loadedProjectsSortedByOld
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
      handleClick () {
        this.$store.dispatch('toggleSidebar')
      }
    }
  }
</script>

<style lang="stylus">
  .HeaderFixed
    position: fixed
    z-index: 4
    background-color: #fff
    width: 100%
    transition: transform .3s ease
    transform: translateY(-100%)
    &.is-visible
      transform: translateY(0%)
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
      // &.scrollactive-item--select.is-active
        background-color: #f7f7f7
</style>
