<template>
  <section>
    <hero-full-home :dataHero="loadedHero" :dataProjects="loadedProjectsAtHero"/>
    <!-- <hero-home :dataHero="loadedHero" :dataProjects="loadedProjectsAtHero"/> -->
    <features :data="loadedFeaturesSortedByOld"/>
    <v-divider/>
    <projects :data="loadedProjectsSortedByOld"/>
    <custom-project :data="loadedCustomProject"/>
    <hiw :dataItems="loadedHiwItemsSortedByNew" :dataHiwWidget="loadedHiwWidget"/>
    <v-divider/>
    <instaworks :data="loadedInstaworks"/>
    <v-divider/>
    <about :dataAboutWidget="loadedAboutWidget"/>
    <v-divider/>
    <team :dataTeam="loadedTeam" :dataTeamMembers="loadedTeamMembersSortedByOld"/>
    <v-divider/>
    <contacts :data="loadedСontacts" :social="loadedSocialLinksSortedByOld" :map="true" class="mt200 mb200"/>
    <div style="padding-bottom:200px"/>
  </section>
</template>

<script>
  import HeroFullHome from '@/components/widgets/HeroFullHome'
  // import HeroHome from '@/components/widgets/HeroHome'
  import Features from '@/components/widgets/Features'
  import Projects from '@/components/widgets/Projects'
  import CustomProject from '@/components/widgets/CustomProject'
  import Hiw from '@/components/widgets/Hiw'
  import About from '@/components/widgets/About'
  import Instaworks from '@/components/widgets/Instaworks'
  import Team from '@/components/widgets/Team'
  import Contacts from '@/components/widgets/Contacts'

  import axios from '~/plugins/axios'
  import fetch from 'isomorphic-fetch'

  export default {
    components: {
      HeroFullHome,
      // HeroHome,
      Features,
      Projects,
      CustomProject,
      Hiw,
      About,
      Instaworks,
      Team,
      Contacts
    },
    // async asyncData() {
    //   const responseContacts = await fetch('https://yehorpopov-db.firebaseio.com/contacts.json')
    //   const contacts = await responseContacts.json()
    //   return {
    //     contacts
    //   }
    // },
    computed: {
      loadedСontacts () {
        return this.$store.getters.loadedСontacts
      },
      loadedHiwWidget () {
        return this.$store.getters.loadedHiwWidget
      },
      loadedAboutWidget () {
        return this.$store.getters.loadedAboutWidget
      },
      loadedHiwItemsSortedByNew () {
        return this.$store.getters.loadedHiwItemsSortedByNew
      },
      loadedHero () {
        return this.$store.getters.loadedHero
      },
      loadedProjectsAtHero () {
        return this.$store.getters.loadedProjectsAtHero
      },
      loadedProjectsSortedByOld () {
        return this.$store.getters.loadedProjectsSortedByOld
      },
      loadedFeaturesSortedByOld () {
        return this.$store.getters.loadedFeaturesSortedByOld
      },
      loadedSocialLinksSortedByOld () {
        return this.$store.getters.loadedSocialLinksSortedByOld
      },
      loadedTeam () {
        return this.$store.getters.loadedTeam
      },
      loadedTeamMembersSortedByOld () {
        return this.$store.getters.loadedTeamMembersSortedByOld
      },
      loadedCustomProject () {
        return this.$store.getters.loadedCustomProject
      },
      loadedInstaworks () {
        return this.$store.getters.loadedInstaworks
      }
    },
    head: {
      title: 'Home',
      meta: [
        { name: 'description', content: 'Home page of Studio Yehor Popov' },
        { property: 'og:image', content: 'https://firebasestorage.googleapis.com/v0/b/yehorpopov-db.appspot.com/o/og-images%2Fog-default.jpg?alt=media&token=9e1cdee4-d619-436b-a8bf-09b31cef09c0' }
      ]
    }
  }
</script>

<style lang="stylus">
</style>
