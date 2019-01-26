<template>
  <div class="mb20">
    <v-btn outline large class="ma-0" slot="activator" :href="btnVirtualReality.url" target="_blank">
      <v-icon large left>{{ btnVirtualReality.icon }}</v-icon>
      {{ btnVirtualReality.text }}
    </v-btn>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        btnVirtualReality: {
          icon: 'mdi-virtual-reality',
          text: 'Смотреть в VR 360°',
          url: 'https://kuula.co/embed/7YJMY'
        }
      }
    }
  }
</script>

<style lang="stylus">
</style>
