<template>
  <v-app>

    <v-container fluid pa-0 class="Header">
      <v-container pa-0 class="MainContainer">
        <v-layout>
          <v-flex xs8 sm6 md4>
            <router-link class="fw800 px-3" :to="home.url" exact v-ripple>
              <v-icon left color="#262626">{{ home.icon }}</v-icon>
              <span>{{ home.title }}</span>
            </router-link>
          </v-flex>

          <v-flex class="hidden-sm-and-down" v-if="$route.path === '/'">
            <scrollactive
              active-class="nuxt-link-active"
              :offset="80"
              :duration="800"
              bezier-easing-value=".5,0,.35,1"
              class="scrollactive"
              v-on:itemchanged="onItemChanged"
              :modifyUrl="false"
            >
              <a class="scrollactive-item px-3"
                v-for="i in menu"
                :key="i.anchor"
                :href="i.anchor"
                v-ripple
              >{{ i.title }}</a>
            </scrollactive>
          </v-flex>

          <v-flex class="text-xs-right">
            <a class="hidden-md-and-down px-3" :href="'tel:' + phone">{{ phone }}</a>
            <a class="hidden-sm-only px-2"
              v-for="i in loadedSocialLinksSortedByOld"
              :key="i.key"
              :href="i.link"
              target="_blank"
              v-ripple
            >
              <v-icon small color="#262626">{{ i.icon }}</v-icon>
            </a>
            <a class="hidden-md-and-up px-4" @click.stop="drawer = !drawer">
              <v-icon small color="#262626">mdi-menu</v-icon>
            </a>
          </v-flex>

        </v-layout>
      </v-container>
    </v-container>

    <v-content class="mt100">
      <nuxt/>
    </v-content>

    <v-navigation-drawer
      v-model="drawer"
      app
      right
      disable-resize-watcher
    >
      <v-list>
        <v-list-tile exact :to="home.url">
          <v-list-tile-action>
            <v-icon large color="#262626">{{ home.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ home.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-divider/>

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
        </v-list-tile>

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
          :href="'tel:' + phone"
          target="_blank"
        >
          <v-list-tile-action>
            <v-icon color="#262626">{{ phoneIcon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ phone }}</v-list-tile-title>
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
        drawer: false,
        home: { key: 'home', title: 'Studio Yehor Popov', icon: 'mdi-circle', url: '/', anchor: '#home' },
        menu: [
          { key: 'projects', title: 'Проекты', url: '/', anchor: '#projects' },
          { key: 'howitworks', title: 'Как мы работаем', url: '/', anchor: '#howitworks' },
          // { key: 'works', title: 'Наши работы', url: '/', anchor: '#works' },
          { key: 'team', title: 'Команда', url: '/', anchor: '#team' },
          { key: 'contacts', title: 'Контакты', url: '/', anchor: '#contacts' }
        ],
        phone: '+380 95 126 36 80',
        phoneIcon: 'mdi-phone'
      }
    },
    computed: {
      loadedSocialLinksSortedByOld () {
        return this.$store.getters.loadedSocialLinksSortedByOld
      },
      loadedProjectsSortedByOld () {
        return this.$store.getters.loadedProjectsSortedByOld
      }
    },
    methods: {
      onItemChanged(event, currentItem, lastActiveItem) {
        // your logic
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
      display: inline-flex
      justify-content: flex-start
      align-items: center
      height: 64px
      text-decoration: none
      transition: background-color .5s ease
      color: #262626
      &:hover,
      &.nuxt-link-active
        background-color: #f7f7f7
</style>
