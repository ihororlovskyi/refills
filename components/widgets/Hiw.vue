<template>
  <v-container py-0 class="MainContainer" id="howitworks" v-if="dataHiwWidget.widgetIsPublished">
    <v-layout row wrap class="pt200">
      <v-flex xs12>
        <div class="fs24 fw800 mb80">{{ dataHiwWidget.widgetTitle }}</div>
      </v-flex>
      <v-layout row wrap class="mb80" v-for="i in dataItems" :key="i.id" v-if="i.isPublished">
        <v-flex xs12 sm4>
          <!-- <v-img :aspect-ratio="1/1" v-if="i.img" :src="i.img" alt="" class="mb40"/> -->
          <v-parallax v-if="i.img" :src="i.img" height="400" class="mb40"/>
        </v-flex>
        <v-flex xs12 sm8>
          <div class="pl40">
            <div v-if="i.title" class="fs24 fw800 mb20">{{ i.title }}</div>
            <div v-if="i.description" v-html="i.description"/>
            <div v-else>
              <order-dialog customWidth="270px"/>
              <btn-download-presentation customWidth="270px"/>
            </div>
          </div>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
  import OrderDialog from '@/components/shared/OrderDialog'
  import BtnDownloadPresentation from '@/components/shared/BtnDownloadPresentation'

  export default {
    components: {
      OrderDialog,
      BtnDownloadPresentation
    },
    props: [
      'dataItems',
      'dataHiwWidget'
    ]
  }
</script>

<style lang="stylus">
</style>
