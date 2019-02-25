<template>
  <v-container fluid pa-0 class="mb80">
    <!-- <v-container pa-0 class="mb80"> -->
      <v-layout row wrap>
        <v-flex xs12>
          <v-parallax dark :src="background" height="620">
            <div class="my-black-mask"/>
            <!-- <app-header/> -->
            <v-container pa-0 style="z-index:1" class="MainContainer">
              <v-layout
                align-center
                wrap
                align-content-space-around
                style="height: 100%;"
              >
                <v-flex xs12 md8>
                  <div class="fs22 fw800">{{ message }}</div>
                </v-flex>
                <v-flex xs12 md4>
                  <v-layout align-center>
                    <div class="my-white-line"/>
                    <v-avatar size="80">
                      <v-img :src="userpic" :alt="yehorpopov"/>
                    </v-avatar>
                    <div class="ml-1">
                      <div>{{ yehorpopov }}</div>
                      <div class="fs12">{{ position }}</div>
                    </div>
                  </v-layout>
                </v-flex>
                <v-flex xs12 class="text-xs-center">
                  <v-btn large>{{ btnReadMore.text }}</v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-parallax>
        </v-flex>
      </v-layout>
    <!-- </v-container> -->
  </v-container>
</template>

<script>
  // import AppHeader from '@/components/widgets/Header'

  export default {
    // components: {
    //   AppHeader,
    // },
    props: [
      'data'
    ],
    data () {
      return {
        background: 'https://firebasestorage.googleapis.com/v0/b/yehorpopov-db.appspot.com/o/hero%2Fzaglushka2.jpg?alt=media&token=6930edfb-dcf3-47ca-9b34-a43a1aea5a29',
        message: 'Я ищу равновесие между функциональностью и эстетикой. Этот баланс создаёт гармоничное пространствоб вне зависимости от количества квадратных метров',
        userpic: 'https://firebasestorage.googleapis.com/v0/b/yehorpopov-db.appspot.com/o/hero%2Fpopov.png?alt=media&token=adec7907-af91-4cd6-8075-d9aaf587ffdd',
        yehorpopov: 'Егор Попов',
        position: 'Главный архитектор дизайн студии',
        btnReadMore: {
          text: 'Все наши проекты вы сможете увидеть уже 1 марта',
          // icon: 'mdi-chevron-right'
        }
      }
    }
  }
</script>

<style lang="stylus">
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
</style>
