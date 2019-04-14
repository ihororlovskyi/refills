<template>
  <v-container py-0 class="MainContainer" id="about" v-if="dataAboutWidget.widgetIsPublished">
    <v-layout row wrap class="pt200 mb160">
      <v-flex xs12>
        <div class="fs24 fw800 mb80">{{ dataAboutWidget.widgetTitle }}</div>
      </v-flex>
      <v-flex xs12 sm6>
        <v-parallax v-if="dataAboutWidget.widgetImg" :src="dataAboutWidget.widgetImg" height="400" class="mb40"/>
      </v-flex>
      <v-flex xs12 sm6>
        <div class="pl40" v-if="dataAboutWidget.widgetDescription" v-html="dataAboutWidget.widgetDescription"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    props: [
      'dataAboutWidget'
    ]
  }
</script>

<style lang="stylus">
</style>
