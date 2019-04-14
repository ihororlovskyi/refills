<template>
  <div class="mb20">
    <v-btn class="ma-0"
      outline
      large
      slot="activator"
      :href="btnVirtualReality.kuulaPost + kuulaId"
      target="_blank"
      :style="'width:' + customWidth"
    >
      <img :src="btnVirtualReality.img" alt="" width="25px" class="mr20">
      {{ btnVirtualReality.text }}
    </v-btn>
  </div>
</template>

<script>
  export default {
    props: [
      'customWidth',
      'kuulaId'
    ],
    data () {
      return {
        btnVirtualReality: {
          img: '/img/icons/vr.svg',
          text: 'Смотреть в VR 360°',
          kuulaPost: 'https://kuula.co/post/'
        }
      }
    }
  }
</script>

<style lang="stylus">
</style>
