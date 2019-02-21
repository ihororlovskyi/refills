<template>
  <v-container fluid pa-0 class="mb80">
    <v-container pa-0>
      <v-layout row wrap>
        <v-flex xs12>
          <v-parallax dark :src="background" height="620">
            <v-layout
              align-center
              justify-center
              wrap
            >
              <v-flex xs12 md8>
                <div>{{ message }}</div>
              </v-flex>
              <v-flex xs12 md4>
                <v-layout align-center>
                  <v-avatar size="80">
                    <v-img :src="userpic" :alt="yehorpopov"/>
                  </v-avatar>
                  <div class="ml-3">
                    <div>{{ yehorpopov }}</div>
                    <div>{{ position }}</div>
                  </div>
                </v-layout>
              </v-flex>
              <v-flex xs12>
                <div>{{ btnReadMore.text }}</div>
              </v-flex>
            </v-layout>
          </v-parallax>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
  export default {
    props: [
      'data'
    ],
    data () {
      return {
        background: 'https://firebasestorage.googleapis.com/v0/b/yehorpopov-db.appspot.com/o/hero%2Fzaglushka.jpg?alt=media&token=c4a7de76-59d3-4cdb-bd29-5905ade8c695',
        message: 'Выберите дизайн проект, а мы сделаем перепланировку, ремонт и архитекторский надзор за 60 дней',
        userpic: 'https://images.unsplash.com/photo-1495147334217-fcb3445babd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=160&h=160&q=69',
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
</style>
