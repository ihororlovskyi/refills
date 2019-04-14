<template>
  <v-container fluid pa-0>
    <v-container py-0 class="MainContainer">
      <v-layout row wrap class="pt80 pb80">
        <v-flex xs12 class="mb80">
          <div class="fs24 fw800 mb-2">
            <img :src="vr.preTitleImg" alt="" width="25px" class="mr20">
            <span class="ml-2">{{ vr.preTitleText }} {{ release.title }} {{ vr.afterTitleText }}</span>
          </div>
          <div v-html="vr.text" class="ml-5 mb40"/>
          <iframe
            width="100%"
            height="600"
            style="width: 100%; height: 600px; border: none; max-width: 100%;"
            frameborder="0"
            allow="vr,gyroscope,accelerometer,fullscreen"
            scrolling="no"
            allowfullscreen="true"
            :src="'https://kuula.co/share/' + release.kuulaId + '?fs=1&vr=0&thumbs=1&hideinst=1&chromeless=0&logo=0'"
          />
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
  export default {
    props: [ 'vr', 'release' ]
  }
</script>

<style lang="stylus">
</style>
