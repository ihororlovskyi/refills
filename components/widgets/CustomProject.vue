<template>
  <v-container fluid pa-0 style="background-color:#f7f7f7;">
    <v-container py-0 class="MainContainer">
      <v-layout row wrap class="pt80 pb80">
        <v-flex xs12 class="mb40">
          <div class="fs24 fw800">{{ data.widgetTitle }}</div>
        </v-flex>
        <v-flex xs12 sm8 class="mb80">
          <div v-html="data.description"/>
        </v-flex>
        <v-flex xs12 sm4 class="mb80">
          <div class="mb20">{{ data.prePriceText }} <b>{{ data.price }}</b></div>
          <btn-order-dialog/>
        </v-flex>
        <v-flex xs12>
          <v-parallax :src="data.img" height="300"/>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
  import BtnOrderDialog from '@/components/shared/BtnOrderDialog'

  export default {
    components: {
      BtnOrderDialog
    },
    props: [
      'data'
    ]
  }
</script>

<style lang="stylus">
</style>
