<template>
  <v-layout row wrap class="Hiw">
    <v-flex xs12>
      <div class="fs24 fw800 mb80">{{ data.title }}</div>
    </v-flex>
    <v-layout row wrap class="HiwItem mb80" v-for="i in data.list" :key="i.title">
      <v-flex xs4>
        <img v-if="i.img" class="HiwItemImg" :src="i.img" alt="">
        <!-- <v-parallax class="mb-5" v-if="i.img" :src="i.img" height="300"/> -->
      </v-flex>
      <v-flex xs8>
        <div class="HiwItemText">
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
  .Hiw
    //
    &Item
      // margin-bottom: 80px

      &Img
        width: 100%
        display: block
        // margin-right: 38px

      &Text
        margin-left: 38px

</style>
