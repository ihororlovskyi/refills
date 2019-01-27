<template>
  <section>

    <v-container py-0 class="MainContainer">
      <v-layout row wrap>
        <div v-for="i in loadedProjectsSortedByOld">
          <router-link v-ripple :to="'/project/' + i.id + '/'" :key="i.id">
            <div>{{ i.title }}</div>
          </router-link>
        </div>
      </v-layout>
    </v-container>

    <custom-project/>

    <how-it-works :data="howItWorks"/>

    <v-divider/>

    <contacts :data="contacts" :social="loadedSocialLinksSortedByOld" :map="true" class="mt200 mb200"/>

  </section>
</template>

<script>
  import CustomProject from '@/components/widgets/CustomProject'
  import HowItWorks from '@/components/widgets/HowItWorks'
  import Contacts from '@/components/widgets/Contacts'

  import axios from '~/plugins/axios'
  import fetch from 'isomorphic-fetch'

  export default {
    components: {
      CustomProject,
      HowItWorks,
      Contacts
    },
    // async asyncData() {
    //   const { data } = await axios.get('projects.json')
    //   return { releases: data }
    // },
    async asyncData() {
      const responseContacts = await fetch('https://yehorpopov-db.firebaseio.com/contacts.json')
      const contacts = await responseContacts.json()
      const responseHowItWorks = await fetch('https://yehorpopov-db.firebaseio.com/howItWorks.json')
      const howItWorks = await responseHowItWorks.json()
      return {
        howItWorks,
        contacts
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
