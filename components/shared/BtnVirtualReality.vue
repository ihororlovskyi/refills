<template>
  <div class="mb20">
    <v-btn outline large class="ma-0" slot="activator" :href="btnVirtualReality.url" target="_blank" :style="'width:' + width">
      <!-- <v-icon large left>{{ btnVirtualReality.icon }}</v-icon> -->
      <img :src="btnVirtualReality.img" alt="" width="25px" class="mr20">
      {{ btnVirtualReality.text }}
    </v-btn>
  </div>
</template>

<script>
  export default {
    props: [ 'width' ],
    data () {
      return {
        btnVirtualReality: {
          // icon: 'mdi-virtual-reality',
          img: '/img/icons/vr.svg',
          text: 'Смотреть в VR 360°',
          url: 'https://kuula.co/embed/7YJMY'
        }
      }
    }
  }
</script>

<style lang="stylus">
</style>
