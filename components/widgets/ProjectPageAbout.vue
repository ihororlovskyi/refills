<template>
  <v-container fluid pa-0>
    <v-container py-0 class="MainContainer">
      <v-layout row wrap class="pt80 pb80">

        <v-flex xs12>
          <v-layout row align-center class="pb80 ProjectPageHeroTitle">
            <v-btn flat icon large :to="hero.btnBack.linkto" class="ml-0 mt-0 mr-2 mb-0" style="width:50px">
              <v-icon large class="">{{ hero.btnBack.icon }}</v-icon>
            </v-btn>
            <h1 class="fs24 fw800">{{ hero.preTitleText }} {{ release.title }}</h1>
          </v-layout>
        </v-flex>

        <v-flex xs12 sm6 md4>
          <btn-order-dialog customWidth="280px"/>
          <btn-download-presentation customWidth="280px"/>
          <btn-virtual-reality customWidth="280px" :kuulaId="release.kuulaId"/>
        </v-flex>
        <v-flex xs12 sm6 md3 offset-md1>
          <div v-html="release.descriptionHero1" class="mb20"/>
        </v-flex>
        <v-flex sm12 md3 offset-md1>
          <div class="mb20">{{ hero.prePriceText }} <b>{{ release.price }}</b></div>
          <div v-html="release.descriptionHero2" class="mb20"/>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
  import BtnOrderDialog from '@/components/shared/BtnOrderDialog'
  import BtnDownloadPresentation from '@/components/shared/BtnDownloadPresentation'
  import BtnVirtualReality from '@/components/shared/BtnVirtualReality'

  export default {
    props: [ 'hero', 'release' ],
    components: {
      BtnOrderDialog,
      BtnDownloadPresentation,
      BtnVirtualReality
    },
  }
</script>

<style lang="stylus">
</style>
