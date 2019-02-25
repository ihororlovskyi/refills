<template>
  <section>
    <v-container pa-0 class="MainContainer HeaderInside">

        <scrollactive
          active-class="is-active"
          :offset="100"
          :duration="800"
          bezier-easing-value=".5,0,.35,1"
          class="scrollactive"
          v-on:itemchanged="onItemChanged"
          :modifyUrl="false"
        >
          <v-layout>
            <v-flex xs8 sm6 md4>
              <a class="scrollactive-item fw800 px-3" :href="home.anchor" v-ripple v-if="$route.path === '/'">
                <img :src="home.logo" :alt="home.title" width="25px"/>
                <span class="ml-3">{{ home.title }}</span>
              </a>

              <router-link class="fw800 px-3" :to="home.url" v-ripple v-else>
                <img :src="home.logo" :alt="home.title" width="25px"/>
                <span class="ml-3">{{ home.title }}</span>
              </router-link>
            </v-flex>

            <v-flex>
              <v-layout justify-end>
                <a class="hidden-xs-only px-3" :href="'tel:' + phone.href">{{ phone.text }}</a>
                <a class="hidden-xs-only px-2"
                  v-for="i in loadedSocialLinksSortedByOld"
                  :key="i.key"
                  :href="i.link"
                  target="_blank"
                  v-ripple
                >
                  <v-icon small color="#fff">{{ i.icon }}</v-icon>
                </a>
                <a class="hidden-sm-and-up px-4" @click.stop="drawer = !drawer">
                  <v-icon color="#fff">mdi-menu</v-icon>
                </a>
              </v-layout>
            </v-flex>

          </v-layout>
        </scrollactive>

    </v-container>

  </section>
</template>

<script>
  export default {
    data () {
      return {
        drawer: false,
        home: {
          title: 'Studio Yehor Popov',
          logo: 'https://firebasestorage.googleapis.com/v0/b/yehorpopov-db.appspot.com/o/logo%2Fstudio-yehor-popov-logo-white.svg?alt=media&token=1fc33f91-1f15-4c5a-a646-3121db009370',
          url: '/',
          anchor: '#hero'
        },
        menu: [
          {
            title: 'Проекты',
            anchor: '#projects'
          },
          {
            title: 'Как мы работаем',
            anchor: '#howitworks'
          },
          // {
          //   title: 'Наши работы',
          //   anchor: '#works'
          // },
          {
            title: 'Команда',
            anchor: '#team'
          },
          {
            title: 'Контакты',
            anchor: '#contacts'
          }
        ],
        phone: {
          icon: 'mdi-phone',
          href: '+380951263680',
          text: '+380 95 126 36 80'
        }
      }
    },
    computed: {
      loadedSocialLinksSortedByOld () {
        return this.$store.getters.loadedSocialLinksSortedByOld
      },
      loadedProjectsSortedByOld () {
        return this.$store.getters.loadedProjectsSortedByOld
      }
    },
    methods: {
      onItemChanged(event, currentItem, lastActiveItem) {
      }
    }
  }
</script>

<style lang="stylus">
  .HeaderInside
    // position: fixed
    // position: relative
    // z-index: 4
    // background-color: #fff
    // width: 100%
    a
      display: flex
      justify-content: flex-start
      align-items: center
      height: 80px
      max-width: 220px
      text-decoration: none
      transition: background-color .5s ease
      color: #fff
      &:hover,
      &.scrollactive-item--select.is-active
        background-color: rgba(#fff,.25)
</style>
