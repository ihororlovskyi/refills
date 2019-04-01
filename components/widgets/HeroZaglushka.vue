<template>
  <v-container fluid pa-0 class="mb80 HeroZaglushka">
    <v-layout row wrap>
      <v-flex xs12>
        <v-parallax dark :src="background" height="620">
          <div class="my-black-mask"/>
          <v-container py-0 style="z-index:1" class="MainContainer">
            <header-inner/>
            <v-layout
              row
              wrap
              align-center
              align-content-space-around
              style="height: calc(100% - 80px);"
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
              <v-flex xs12 class="text-xs-center">
                <div class="ComingSoon fw800">{{ comingSoon }}</div>
              </v-flex>
            </v-layout>
          </v-container>
        </v-parallax>
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
      'dataHero'
    ],
    data () {
      return {
        background: 'https://firebasestorage.googleapis.com/v0/b/yehorpopov-db.appspot.com/o/hero%2Fzaglushka2.jpg?alt=media&token=6930edfb-dcf3-47ca-9b34-a43a1aea5a29',
        // message: 'Равновесие между функцией, эстетикой и стоимостью реализации. Этот баланс позволяет создать гармоничное пространство вне зависимости от количества квадратных метров»',
        // userpic: 'https://firebasestorage.googleapis.com/v0/b/yehorpopov-db.appspot.com/o/hero%2Fpopov.png?alt=media&token=adec7907-af91-4cd6-8075-d9aaf587ffdd',
        // person: 'Егор Попов',
        // position: 'Главный архитектор дизайн студии',
        comingSoon: 'Все наши проекты вы сможете увидеть уже 20 марта'
      }
    }
  }
</script>

<style lang="stylus">
  .HeroZaglushka
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
    .ComingSoon
      background-color: #fff
      color: #262626
      display: inline-block
      padding: 10px 20px
      border-radius: 4px
</style>
