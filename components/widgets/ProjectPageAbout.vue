<template>
  <v-container fluid pa-0>
    <v-container py-0 class="MainContainer">
      <v-layout row wrap class="pt80 pb80">
        <v-flex xs12 sm6 md4>
          <order-dialog width="280px"/>
          <btn-download-presentation width="280px"/>
          <btn-virtual-reality width="280px"/>
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
  import OrderDialog from '@/components/shared/OrderDialog'
  import BtnDownloadPresentation from '@/components/shared/BtnDownloadPresentation'
  import BtnVirtualReality from '@/components/shared/BtnVirtualReality'

  export default {
    props: [ 'hero', 'release' ],
    components: {
      OrderDialog,
      BtnDownloadPresentation,
      BtnVirtualReality
    },
  }
</script>

<style lang="stylus">
</style>
