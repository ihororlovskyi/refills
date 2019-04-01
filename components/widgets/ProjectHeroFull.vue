<template>
  <v-container fluid pa-0>
    <v-container py-0 class="MainContainer">
      <v-layout row wrap class="pt80 pb80">

        <v-flex xs12 class="mb40">
          <v-layout class="fs24 fw800" align-center>
            <v-btn flat icon large :to="hero.btnBack.linkto" class="ml-0 mt-1 mr-4 mb-0" style="width:50px">
              <v-icon large>{{ hero.btnBack.icon }}</v-icon>
            </v-btn>
            <h1 class="fs24 fw800">{{ hero.preTitleText }} {{ release.title }}</h1>
          </v-layout>
        </v-flex>

        <v-flex xs12 class="mb40">
          <v-carousel
            hide-delimiters
            height="600"
          >
            <v-carousel-item
              v-for="i in hero.sliderImages"
              :key="i.src"
              :src="i.src"
            />
          </v-carousel>
        </v-flex>

        <v-flex xs12 class="mb80">
          <v-layout>
            <v-flex xs2 style="height:30px;background-color:#e8ca6a"/>
            <v-flex xs2 style="height:30px;background-color:#529dc0"/>
            <v-flex xs2 style="height:30px;background-color:#f3352e"/>
            <v-flex xs2 style="height:30px;background-color:#a0683d"/>
            <v-flex xs2 style="height:30px;background-color:#eed9cd"/>
            <v-flex xs2 style="height:30px;background-color:#f2f2f2"/>
          </v-layout>
        </v-flex>

      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
  export default {
    props: [ 'hero', 'release' ]
  }
</script>

<style lang="stylus">
</style>
