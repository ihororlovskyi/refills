<template>
  <v-container fluid pa-0>
    <v-container py-0 class="MainContainer">
      <v-layout row wrap class="pt80 pb80">
        <v-flex xs12>
          <div class="fs24 fw800 mb80 text-xs-center">{{ features.preTitleText }}</div>
        </v-flex>
        <v-flex xs12 md4>
          <v-parallax :src="release.imgCover" height="300" class="mb40"/>
          <div v-html="release.descriptionFeature1" class="mb40"/>
        </v-flex>
        <v-flex xs12 md4>
          <v-parallax :src="release.imgCover" height="300" class="mb40"/>
          <div v-html="release.descriptionFeature2" class="mb40"/>
        </v-flex>
        <v-flex xs12 md4>
          <v-parallax :src="release.imgCover" height="300" class="mb40"/>
          <div v-html="release.descriptionFeature3" class="mb40"/>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
  export default {
    props: [ 'features', 'release' ]
  }
</script>

<style lang="stylus">
</style>
