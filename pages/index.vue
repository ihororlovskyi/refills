<template>
  <section>
    <hero :data="loadedProjectsAtHero"/>
    <features :data="features"/>
    <v-divider/>
    <projects :data="loadedProjectsSortedByOld"/>
    <custom-project/>
    <how-it-works :data="howItWorks"/>
    <v-divider/>
    <works/>
    <v-divider/>
    <team :data="team"/>
    <v-divider/>
    <contacts :data="contacts" :social="loadedSocialLinksSortedByOld" :map="true" class="mt200 mb200"/>

    <div style="padding-bottom:800px"/>

  </section>
</template>

<script>
  import Hero from '@/components/widgets/Hero'
  import Features from '@/components/widgets/Features'
  import Projects from '@/components/widgets/Projects'
  import CustomProject from '@/components/widgets/CustomProject'
  import HowItWorks from '@/components/widgets/HowItWorks'
  import Works from '@/components/widgets/Works'
  import Team from '@/components/widgets/Team'
  import Contacts from '@/components/widgets/Contacts'

  import axios from '~/plugins/axios'
  import fetch from 'isomorphic-fetch'

  export default {
    components: {
      Hero,
      Features,
      Projects,
      CustomProject,
      HowItWorks,
      Works,
      Team,
      Contacts
    },
    // async asyncData() {
    //   const { data } = await axios.get('projects.json')
    //   return { releases: data }
    // },
    async asyncData() {
      const responseFeatures = await fetch('https://yehorpopov-db.firebaseio.com/features.json')
      const features = await responseFeatures.json()
      const responseHowItWorks = await fetch('https://yehorpopov-db.firebaseio.com/howItWorks.json')
      const howItWorks = await responseHowItWorks.json()
      const responseTeam = await fetch('https://yehorpopov-db.firebaseio.com/team.json')
      const team = await responseTeam.json()
      const responseContacts = await fetch('https://yehorpopov-db.firebaseio.com/contacts.json')
      const contacts = await responseContacts.json()
      return {
        features,
        howItWorks,
        team,
        contacts
      }
    },
    computed: {
      loadedProjectsAtHero () {
        return this.$store.getters.loadedProjectsAtHero
      },
      loadedProjectsSortedByOld () {
        return this.$store.getters.loadedProjectsSortedByOld
      },
      loadedSocialLinksSortedByOld () {
        return this.$store.getters.loadedSocialLinksSortedByOld
      }
    },
    head: {
      title: 'Releases',
      meta: [
        { name: 'description', content: 'Releases of Sentimony Records' },
        { property: 'og:image', content: 'https://firebasestorage.googleapis.com/v0/b/sentimony-db.appspot.com/o/og%2Fog-default.jpg?alt=media&token=85a8d7a3-ab49-4cff-9df9-fd3e2478e780' }
      ]
    }
  }
</script>

<style lang="stylus">
</style>
