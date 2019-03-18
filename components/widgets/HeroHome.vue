<template>
  <v-container py-0 class="MainContainer" id="hero">
    <v-layout row wrap class="mb80">
      <v-flex xs12 md4>
        <div class="fs22 fw800 mb20 pr-4">«{{ dataHero.messageHome }}»</div>
        <v-layout row align-center class="mb40 pr-4">
          <v-avatar size="80">
            <v-img :src="userpic" alt="userpic"/>
          </v-avatar>
          <div class="pl-3">
            <div class="">{{ yehorpopov }}</div>
            <div class="fs12">{{ position }}</div>
          </div>
        </v-layout>
      </v-flex>
      <v-flex xs12 md8>
        <v-layout row wrap>
          <v-flex xs4 v-for="i in dataProjects" :key="i.id">

            <v-img class="topImgItem" :src="i.imgCover" @click="onLoad(i.id)" v-ripple style="cursor:pointer">
              <!-- <v-layout column fill-height>
                <v-spacer></v-spacer>
                <div class="pl40 pb40 white--text fs24 fw800">{{ preTitleText }}<br>{{ i.title }}</div>
              </v-layout> -->
              <div :class="'topImgItem__hover'" :style="'background-color:' + i.heroColor">
                <div class="fs22 fw800 white--text mb20">{{ i.title }}</div>
                <v-btn class="mx-0 mt-3" large depressed color="#fff">
                  {{ btnReadMore.text }}
                  <v-icon right small>{{ btnReadMore.icon }}</v-icon>
                </v-btn>
              </div>
            </v-img>

            <!-- <a class="topImgItem"
              @click="onLoad(i.id)"
              :style="'background-image:url(' + i.imgCover + ')'"
              v-ripple
            >
              <div :class="'topImgItem__hover'" :style="'background-color:' + i.heroColor">
                <div class="fs22 fw800 white--text mb20">{{ i.title }}</div>
                <v-btn class="mx-0 mt-3" large depressed color="#fff">
                  {{ btnReadMore.text }}
                  <v-icon right small>{{ btnReadMore.icon }}</v-icon>
                </v-btn>
              </div>
            </a> -->

          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    props: [
      'dataHero',
      'dataProjects'
    ],
    data () {
      return {
        // message: 'Выберите дизайн проект, а мы сделаем перепланировку, ремонт и архитекторский надзор за 60 дней',
        userpic: 'https://images.unsplash.com/photo-1495147334217-fcb3445babd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=160&h=160&q=69',
        yehorpopov: 'Егор Попов',
        position: 'Главный архитектор дизайн студии',
        btnReadMore: {
          text: 'Подробнее',
          icon: 'mdi-chevron-right'
        }
      }
    },
    methods: {
      onLoad (id) {
        this.$router.push('/project/' + id)
      }
    },
    computed: {
      // loading () {
      //   return this.$store.getters.loading
      // },
      // projects () {
      //   return this.$store.getters.loadedProjectsSortedByDate
      // }
    }
  }
</script>

<style lang="stylus">
  .topImgItem
    display block
    min-height 500px
    position relative
    overflow hidden
    background-size cover
    background-position center bottom
    &:hover
      .topImgItem__hover
        bottom 0
    &__hover
      height 190px
      position absolute
      bottom -110px
      left 0
      width 100%
      transition: bottom .1s ease
      padding 10px
</style>
