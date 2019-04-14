<template>
  <v-container fluid pa-0>
    <v-container py-0 class="MainContainer">
      <v-layout row wrap class="pt80 pb80">
        <v-flex xs12 sm8 class="mb80">
          <div class="fs24 fw800">{{ redevelopment.preTitleText }}</div>
        </v-flex>
        <v-flex xs12 sm4 class="mb80">
          <div v-html="release.descriptionPlan"/>
        </v-flex>
        <v-flex xs12 sm10 offset-sm1>
          <v-img :src="release.imgPlan"/>
          <!-- <v-carousel
            hide-delimiters
            height="600"
            class="elevation-0"
          >
            <v-carousel-item>
              <v-parallax :src="release.imgPlan" height="600"/>
            </v-carousel-item>
          </v-carousel> -->
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
  export default {
    props: [ 'redevelopment', 'release' ]
  }
</script>

<style lang="stylus">
</style>
