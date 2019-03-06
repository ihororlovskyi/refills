<template>
  <v-app>

    <header-fixed :headerHello="headerHello"/>

    <v-content>
      <nuxt v-scroll="onScroll"/>
    </v-content>

    <mob-menu/>

  </v-app>
</template>

<script>
  import HeaderFixed from '@/components/widgets/HeaderFixed'
  import MobMenu from '@/components/widgets/MobMenu'

  export default {
    components: {
      HeaderFixed,
      MobMenu
    },
    data () {
      return {
        headerHello: false,
        offsetTop: 0
      }
    },
    methods: {
      onScroll (e) {
        this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
        if (this.offsetTop > 80) {
          return this.headerHello = true
        } else {
          return this.headerHello = false
        }
      }
    }
  }
</script>

<style lang="stylus">
</style>
