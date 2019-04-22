<template>
  <v-container fluid pa-0 class="mb80 HeroFullHome" id="hero">
    <v-layout row wrap>
      <v-flex xs12>
        <div class="HeroProjectCurrentSlideContainer1">
          <v-parallax
            class="HeroProjectCurrentSlide"
            :class="{isActive : currentSlide == index}"
            v-for="(i, index) in dataProjects"
            :key="i.id"
            :src="i.imgCover"
            height="620"
          >
            <div class="my-black-mask"/>
          </v-parallax>
          <header-inner style="position:relative"/>
        <!-- <v-layout class="HeroProjectCurrentSlideContainer2"> -->
        <!-- <v-parallax dark :src="dataProjects[currentSlide].imgCover" height="620"> -->
          <!-- <div class="my-black-mask"/> -->
          <v-container py-0 style="position:relative;height: calc(100% - 80px)" class="MainContainer">
            <v-layout
              row
              wrap
              align-center
              align-content-space-around
              style="height: 100%;"
            >
              <v-flex xs12 md8>
                <div class="fs22 fw800">«{{ dataHero.quote }}»</div>
              </v-flex>
              <v-flex xs12 md4>
                <v-layout align-center>
                  <div class="my-white-line"/>
                  <v-avatar size="80">
                    <v-img :src="dataHero.userpic" :alt="dataHero.person"/>
                  </v-avatar>
                  <div class="ml-1">
                    <div>{{ dataHero.person }}</div>
                    <div class="fs12">{{ dataHero.position }}</div>
                  </div>
                </v-layout>
              </v-flex>
              <v-flex xs12>
                <v-layout row>
                  <v-flex xs12
                    class="HeroProjectItem"
                    v-for="(i, index) in dataProjects"
                    :key="i.id"
                    @mouseover="chooseSlide(index)"
                    style="cursor:pointer"
                    @click="onLoad(i.id)"
                    v-ripple
                  >
                    <v-layout row wrap>
                      <v-flex xs12>
                        <span class="fw800">{{ i.title }}</span>
                      </v-flex>
                      <v-flex xs12>
                        <span class="ReadMoreBtn" :class="{isActive : currentSlide == index}">
                          <span class="fs12">{{ btnReadMore.text }}</span>
                          <v-icon small color="white">{{ btnReadMore.icon }}</v-icon>
                        </span>
                      </v-flex>
                    </v-layout>
                    <div
                      class="BottomPlash"
                      :class="{isActive : currentSlide == index}"
                      :style="'background-color:' + i.heroColor"
                    />
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-container>
        <!-- </v-parallax> -->
        <!-- </v-layout> -->
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import HeaderInner from '@/components/widgets/HeaderInner'

  export default {
    components: {
      HeaderInner,
    },
    props: [
      'dataHero',
      'dataProjects'
    ],
    data () {
      return {
        // background: 'https://firebasestorage.googleapis.com/v0/b/yehorpopov-db.appspot.com/o/hero%2Fzaglushka2.jpg?alt=media&token=6930edfb-dcf3-47ca-9b34-a43a1aea5a29',
        // message: 'Равновесие между функцией, эстетикой и стоимостью реализации. Этот баланс позволяет создать гармоничное пространство вне зависимости от количества квадратных метров»',
        // userpic: 'https://firebasestorage.googleapis.com/v0/b/yehorpopov-db.appspot.com/o/hero%2Fpopov.png?alt=media&token=adec7907-af91-4cd6-8075-d9aaf587ffdd',
        // person: 'Егор Попов',
        // position: 'Главный архитектор дизайн студии',
        // comingSoon: 'В1се наши проекты вы сможете увидеть уже 20 марта',
        // isHovering: false
        btnReadMore: {
          text: 'Подробнее',
          icon: 'mdi-chevron-right'
        }
      }
    },
    computed: {
      currentSlide () {
        return this.$store.getters.currentSlide
      }
    },
    methods: {
      chooseSlide (index) {
        this.selected == index
        this.$store.dispatch('updateCurrentSlide', index)
      },
      onLoad (id) {
        this.$router.push('/project/' + id)
      }
    }
  }
</script>

<style lang="stylus">
  .HeroFullHome
    .my-black-mask
      position: absolute
      left: 0
      top: 0
      width: 100%
      height: 100%
      background-color: rgba(#000, .5);
    .my-white-line
      width: 1px
      height: 80px
      background-color: #fff
      margin: 0 14px
    .v-parallax__content
      padding: 0
    .HeroProjectCurrentSlideContainer1
      height: 620px
      position: relative
      // background-color: #000
      color: #fff
    // .HeroProjectCurrentSlideContainer2
    //   height: 620px
    //   position: relative
    //   background-color: #000
    //   color: #fff
    .HeroProjectCurrentSlide
      position: absolute
      top: 0
      left: 0
      width: 100%
      opacity: 0
      transition: opacity .4s ease
      &.isActive
        opacity: 1
    .HeroProjectItem
      padding: 220px 0 20px
      // background-color: rgba(#fff,.2)
      position: relative
      .ReadMoreBtn
        opacity: 0
        transition: opacity .4s ease
        &.isActive
          opacity: 1
      .BottomPlash
        background-color: #fff
        padding-top: 4px
        position: absolute
        bottom: 0
        left: 0
        width: 100%
        transition: padding-top .4s ease
        &.isActive
          padding-top: 14px
</style>
