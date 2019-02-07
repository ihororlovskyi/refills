<template>
  <v-container py-0 class="MainContainer" id="howitworks">
    <v-layout row wrap class="pt200">
      <v-flex xs12>
        <div class="fs24 fw800 mb80">{{ data.title }}</div>
      </v-flex>
      <v-layout row wrap class="mb80" v-for="i in data.list" :key="i.title">
        <v-flex xs12 sm4>
          <v-img :aspect-ratio="1/1" v-if="i.img" :src="i.img" alt="" class="mb40"/>
          <!-- <v-parallax class="mb-5" v-if="i.img" :src="i.img" height="300"/> -->
        </v-flex>
        <v-flex xs12 sm8>
          <div class="pl40">
            <div class="fs24 fw800 mb20">{{ i.title }}</div>
            <p v-if="i.description" v-for="ii in i.description" :key="i.p">{{ ii.p }}</p>
            <div v-if="!i.description">
              <order-dialog />
              <btn-download-presentation/>
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
      'data'
    ],
    data () {
      return {
      }
    }
  }
</script>

<style lang="stylus">
</style>
