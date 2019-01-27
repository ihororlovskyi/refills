<template>
  <v-app>

      <v-toolbar flat fixed color="white">

        <v-toolbar-items class="hidden-xs-only">
          <v-btn flat :to="home.url" exact>
            <v-icon left>{{ home.icon }}</v-icon>
            <span>{{ home.title }}</span>
          </v-btn>
        </v-toolbar-items>

        <v-spacer class="hidden-md-and-down"/>
        <v-toolbar-items class="hidden-md-and-down">
          <v-btn flat v-for="i in menu" :key="i.key" @click="$vuetify.goTo(10000)">
            <span>{{ i.title }}</span>
          </v-btn>
        </v-toolbar-items>
        <v-spacer class="hidden-md-and-down"/>
        <v-toolbar-items class="hidden-md-and-down">
          <v-btn
            flat
            v-for="i in loadedSocialLinksSortedByOld"
            v-if="i.link"
            :key="i.key"
            :href="i.link"
            target="_blank"
          >
            <v-icon small v-if="i.icon">{{ i.icon }}</v-icon>
          </v-btn>
        </v-toolbar-items>

        <v-spacer class="hidden-lg-and-up"/>
        <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-lg-and-up">
          <v-icon>mdi-menu</v-icon>
        </v-toolbar-side-icon>

      </v-toolbar>

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
            <v-icon>{{ home.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ home.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-divider/>

        <v-list-tile
          v-for="i in menu"
          :key="i.key"
          @click="onLoadPage(i.url)"
        >
          <v-list-tile-action>
            <v-icon>{{ i.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ i.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-divider/>

        <v-list-tile
          v-for="i in loadedSocialLinksSortedByOld"
          v-if="i.link"
          :key="i.key"
          :href="i.link"
          target="_blank"
        >
          <v-list-tile-action>
            <v-icon small v-if="i.icon">{{ i.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-if="i.title">{{ i.title }}</v-list-tile-title>
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
        home: { key: 'home', title: 'Studio Yehor Popov', icon: 'mdi-circle', url: '/' },
        menu: [
          { key: 'projects', title: 'Проекты', url: '/' },
          { key: 'howitworks', title: 'Как мы работаем', url: '/' },
          // { key: 'works', title: 'Наши работы', url: '/' },
          { key: 'team', title: 'Команда', url: '/' },
          { key: 'contacts', title: 'Контакты', url: '/' }
        ]
      }
    },
    computed: {
      loadedSocialLinksSortedByOld () {
        return this.$store.getters.loadedSocialLinksSortedByOld
      }
    },
    methods: {
      onLoadPage (url) {
        this.$router.push(url)
        this.$vuetify.goTo(10000)
      }
    }
  }
</script>

<style lang="stylus">
</style>
