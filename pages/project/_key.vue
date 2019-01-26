<template>
  <section>

    <h1>{{ release.title }}</h1>
  </section>
</template>

<script>
  import axios from '~/plugins/axios'

  export default {
    async asyncData({ route }) {
      const { key } = route.params
      const { data } = await axios.get(`projects/${key}.json`)
      return { release: data }
    },
    head () {
      return {
        title: this.release.title,
        meta: [
          { name: 'description', content: this.release.tracks_number + ' tracks ' + this.release.style + ' ' + this.release.format + ', ' + this.release.date.split('-')[0] },
          { property: 'og:image', content: 'https://content.sentimony.com/assets/img/releases/og-images/' + this.release.cat_no + '/' + this.release.slug + '.jpg' }
        ]
      }
    }
  }
</script>

<style lang="stylus">
</style>
