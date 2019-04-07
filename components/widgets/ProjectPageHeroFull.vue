<template>
  <v-container fluid pa-0 class="mb80 ProjectPageHero">
    <v-layout row wrap>

      <v-flex xs12 style="position:relative">
        <v-carousel
          hide-delimiters
          height="680"
          class="elevation-0"
        >
          <v-carousel-item v-if="release.imgCover">
            <v-parallax :src="release.imgCover" height="680"/>
          </v-carousel-item>
          <v-carousel-item v-if="release.imgSlide1">
            <v-parallax :src="release.imgSlide1" height="680"/>
          </v-carousel-item>
          <v-carousel-item v-if="release.imgSlide2">
            <v-parallax :src="release.imgSlide2" height="680"/>
          </v-carousel-item>
          <v-carousel-item v-if="release.imgSlide3">
            <v-parallax :src="release.imgSlide3" height="680"/>
          </v-carousel-item>
          <v-carousel-item v-if="release.imgSlide4">
            <v-parallax :src="release.imgSlide4" height="680"/>
          </v-carousel-item>
        </v-carousel>

        <div class="my-black-mask"/>

        <div style="position:absolute;top:0;left:0;width:100%;height:100%">
          <v-container py-0 style="position:relative;height:100%" class="MainContainer">
            <header-inner style="position:absolute;left:0;top:0"/>
            <v-layout row align-center class="pb-4 ProjectPageHeroTitle">
              <v-btn flat icon large :to="hero.btnBack.linkto" class="ml-0 mt-0 mr-2 mb-0 white--text" style="width:50px">
                <v-icon large class="">{{ hero.btnBack.icon }}</v-icon>
              </v-btn>
              <h1 class="fs24 fw800 white--text">{{ hero.preTitleText }} {{ release.title }}</h1>
            </v-layout>
          </v-container>
        </div>

      </v-flex>

      <v-flex xs12>
        <v-layout row>
          <v-flex xs2 :style="'height:20px;background-color:' + release.pageColor1"/>
          <v-flex xs2 :style="'height:20px;background-color:' + release.pageColor2"/>
          <v-flex xs2 :style="'height:20px;background-color:' + release.pageColor3"/>
          <v-flex xs2 :style="'height:20px;background-color:' + release.pageColor4"/>
          <v-flex xs2 :style="'height:20px;background-color:' + release.pageColor5"/>
          <v-flex xs2 :style="'height:20px;background-color:' + release.pageColor6"/>
        </v-layout>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
  import HeaderInner from '@/components/widgets/HeaderInner'

  export default {
    props: [ 'hero', 'release' ],
    components: {
      HeaderInner,
    },
  }
</script>

<style lang="stylus">
  .ProjectPageHero
    position: relative
    .my-black-mask
      position: absolute
      left: 0
      top: 0
      width: 100%
      height: 100%
      background-color: rgba(#000, .5);
    &Title
      position: absolute
      bottom: 0
      left: 0
</style>
