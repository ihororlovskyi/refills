<template>
  <div class="mb20">
    <v-btn outline large class="mx-0" slot="activator" :href="btnDownloadPresentation.url" target="_blank">
      <v-icon large left>{{ btnDownloadPresentation.icon }}</v-icon>
      {{ btnDownloadPresentation.text }}
    </v-btn>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        btnDownloadPresentation: {
          icon: 'mdi-download',
          text: 'Скачать презентацию',
          url: 'https://firebasestorage.googleapis.com/v0/b/terapolis-db.appspot.com/o/hero%2FTerapolis--One-Page.pdf?alt=media&token=6fbcf708-214d-4d72-8120-5ba29e13e476'
        }
      }
    }
  }
</script>

<style lang="stylus">
</style>
