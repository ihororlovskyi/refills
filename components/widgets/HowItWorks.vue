<template>
  <v-container py-0 class="MainContainer">
    <v-layout row wrap class="pt200">
      <v-flex xs12>
        <div class="fs24 fw800 mb80">{{ data.title }}</div>
      </v-flex>
      <v-layout row wrap class="mb80" v-for="i in data.list" :key="i.title">
        <v-flex xs4>
          <v-img v-if="i.img" :src="i.img" alt=""/>
          <!-- <v-parallax class="mb-5" v-if="i.img" :src="i.img" height="300"/> -->
        </v-flex>
        <v-flex xs8>
          <div class="pl40">
            <div class="fs24 fw800 mb20">{{ i.title }}</div>
            <p v-if="i.description" v-for="ii in i.description" :key="i.p">{{ ii.p }}</p>
            <div v-if="!i.description">
              <order-dialog />
              <download-presentation/>
            </div>
          </div>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
  import OrderDialog from '@/components/shared/OrderDialog'
  import DownloadPresentation from '@/components/shared/DownloadPresentation'

  export default {
    components: {
      OrderDialog,
      DownloadPresentation
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
