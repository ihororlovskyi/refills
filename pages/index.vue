<template>
  <section>
    <div v-for="i in loadedProjectsSortedByOld">
      <router-link v-ripple :to="'/project/' + i.id + '/'">
        <div>{{ i.title }}</div>
        <!-- <div>{{ i.id }}</div> -->
        <!-- <div>{{ i.params }}</div> -->
      </router-link>
    </div>

    <v-flex xs12>
      <custom-project/>
    </v-flex>

    <v-flex xs12>
      <how-it-works :data="howItWorks"/>
    </v-flex>

    <v-flex xs12 class="mb200">
      <v-divider/>
    </v-flex>

    <v-flex xs12>
      <contacts :data="contacts" :social="loadedSocialLinksSortedByOld" :map="true"/>
    </v-flex>

  </v-layout>
</section>
</template>

<script>
  import CustomProject from '@/components/CustomProject'
  import Contacts from '@/components/Contacts'
  import HowItWorks from '@/components/HowItWorks'

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
