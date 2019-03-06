<template>
  <v-navigation-drawer
    v-model="sidebarOpen"
    app
    right
    disable-resize-watcher
  >
    <v-list>
      <v-list-tile exact :to="home.url">
        <v-list-tile-action>
          <img :src="home.logoDark" :alt="home.title" width="32px"/>
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
</template>

<script>
  export default {
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
    }
  }
</script>

<style lang="stylus">
</style>
