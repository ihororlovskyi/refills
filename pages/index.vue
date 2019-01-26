<template>
  <section>
    <div v-for="i in loadedProjectsSortedByOld">
      <router-link v-ripple :to="'/project/' + i.id + '/'">
        <div>{{ i.title }}</div>
        <!-- <div>{{ i.id }}</div> -->
        <!-- <div>{{ i.params }}</div> -->
      </router-link>
    </div>
    <!-- {{releases}} -->
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  // async asyncData() {
  //   const { data } = await axios.get('projects.json')
  //   return { releases: data }
  // },
  computed: {
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
