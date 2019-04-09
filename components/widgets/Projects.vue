<template>
  <v-container py-0 class="MainContainer">
    <v-layout column wrap class="Projects" id="projects">
      <v-layout row wrap class="ProjectsItem mt200" v-for="i in data" :key="i.id">
        <v-flex xs12>
          <div class="fs24 fw800 mb80"
            @click="onLoad(i.id)"
            style="cursor:pointer"
            v-ripple
          >
            {{ preTitle }} {{ i.title }}
          </div>
        </v-flex>
        <v-flex xs12 sm4>
          <div class="ProjectsItemText mb-5">
            <div class="mb-5" v-html="i.description"/>
            <div class="mb-4">{{ prePrice }} <b>{{ i.price }}</b></div>
            <div class="mb20">
              <v-btn @click="onLoad(i.id)" depressed large class="mx-0 pl40" color="#262626" dark style="width:230px">
                {{ btnReadMore.text }}
                <v-icon right small>{{ btnReadMore.icon }}</v-icon>
              </v-btn>
            </div>
            <btn-virtual-reality width="230px"/>
          </div>
        </v-flex>
        <v-flex xs12 sm8 class="mb80">
          <v-carousel
            hide-delimiters
            height="600"
            class="elevation-0"
          >
            <v-carousel-item :src="i.imgCover"/>
            <v-carousel-item :src="i.imgSlide1"/>
            <v-carousel-item :src="i.imgSlide2"/>
            <v-carousel-item :src="i.imgSlide3"/>
            <v-carousel-item :src="i.imgSlide4"/>
          </v-carousel>
        </v-flex>
        <v-flex xs12>
          <v-parallax class="mb80" :src="i.imgCover" height="300"/>
          <v-divider/>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
  import BtnVirtualReality from '@/components/shared/BtnVirtualReality'

  export default {
    props: [
      'data'
    ],
    components: {
      BtnVirtualReality
    },
    data () {
      return {
        preTitle: 'Дизайн проект',
        prePrice: 'Цена проекта и ремонта',
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
    // computed: {
    //   loading () {
    //     return this.$store.getters.loading
    //   }
    // }
  }
</script>

<style lang="stylus">
  .Projects
    // display block

    &Item
      //

      &Text
        margin: 0 40px 0 0

      &Img
        width: 100%
        display: block

      &:nth-child(2n)

        & .flex

          &:nth-child(1)
            order: 0

          &:nth-child(2)
            order: 2

          &:nth-child(3)
            order: 0

          &:nth-child(4)
            order: 3

        & .ProjectsItemText
          margin: 0 0 0 40px
</style>
