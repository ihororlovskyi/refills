<template>
  <section>
    <hero-zaglushka :dataHero="loadedHero"/>
    <!-- <project-page-hero :hero="hero" :release="release"/> -->
    <project-page-about :hero="hero" :release="release"/>
    <v-divider/>
    <project-page-redevelopment :redevelopment="redevelopment"/>
    <v-divider/>
    <project-page-vr :vr="vr" :release="release"/>
    <v-divider/>
    <project-page-features :features="features" :release="release"/>
    <order-content class="mb40"/>
    <other-projects :data="loadedOtherProjects"/>
    <v-divider/>
    <custom-project/>
    <how-it-works :data="howItWorks"/>
    <v-divider/>
    <contacts :data="contacts" :social="loadedSocialLinksSortedByOld" :map="false" class="mt200 mb200"/>
  </section>
</template>

<script>
  import HeroZaglushka from '@/components/widgets/HeroZaglushka'
  import OrderContent from '@/components/shared/OrderContent'
  import OtherProjects from '@/components/widgets/OtherProjects'
  import CustomProject from '@/components/widgets/CustomProject'
  import HowItWorks from '@/components/widgets/HowItWorks'
  import Contacts from '@/components/widgets/Contacts'
  import ProjectPageHero from '@/components/widgets/ProjectPageHero'
  import ProjectPageAbout from '@/components/widgets/ProjectPageAbout'
  import ProjectPageRedevelopment from '@/components/widgets/ProjectPageRedevelopment'
  import ProjectPageVr from '@/components/widgets/ProjectPageVr'
  import ProjectPageFeatures from '@/components/widgets/ProjectPageFeatures'

  // import OrderDialog from '@/components/shared/OrderDialog'
  // import BtnDownloadPresentation from '@/components/shared/BtnDownloadPresentation'
  // import BtnVirtualReality from '@/components/shared/BtnVirtualReality'

  import axios from '~/plugins/axios'
  import fetch from 'isomorphic-fetch'

  export default {
    components: {
      HeroZaglushka,
      OrderContent,
      OtherProjects,
      CustomProject,
      HowItWorks,
      Contacts,
      ProjectPageHero,
      ProjectPageAbout,
      ProjectPageRedevelopment,
      ProjectPageVr,
      ProjectPageFeatures,
      // OrderDialog,
      // BtnDownloadPresentation,
      // BtnVirtualReality
    },
    data () {
      return {
        hero: {
          btnBack: {
            linkto: '/',
            icon: 'mdi-chevron-left'
          },
          sliderImages: [
            { src: 'https://images.unsplash.com/photo-1537726235470-8504e3beef77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&h=600&q=69' },
            { src: 'https://images.unsplash.com/photo-1506812779316-934cef283429?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&h=600&q=69' },
            { src: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&h=600&q=69' },
            { src: 'https://images.unsplash.com/photo-1527005980469-e172416c200b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&h=600&q=69' }
          ],
          preTitleText: 'Дизайн проект',
          description2: 'Проект планировки квартиры<br>Дизайн проект<br>Черновая и чистовая отделка',
          prePriceText: 'Цена проекта и ремонта',
          btnReadMore: {
            text: 'Подробнее',
            icon: 'mdi-chevron-right'
          },
        },
        vr: {
          // preTitleIcon: 'mdi-virtual-reality',
          preTitleImg: '/img/icons/vr.svg',
          preTitleText: 'Проект',
          afterTitleText: 'в VR 360°',
          text: 'Рекомендуем просматривать с очками Cardboard 2. Все проекті моежем показать вам в очках у нас в офисе',
        },
        // chill: {
        //   preTitleText: 'Зоны отдыха',
        //   priceIncluded: 'В стоимость входит',
        //   text: 'Проект перепланирки квартиры<br>Дизайн проект<br>Черновая и чистовая отделка<br>Материалы для ремонта<br>Окончательная отделка пола, стен, потолка<br>Кухня<br>Двери<br>Ванная комната и туалет',
        //   feature: 'Черновая и чистовая отделка<br>Материалы для ремонта'
        // },
        // kitchen: {
        //   preTitleText: 'Кухня',
        //   priceIncluded: 'В стоимость входит',
        //   text: 'Проект перепланирки квартиры<br>Дизайн проект<br>Черновая и чистовая отделка<br>Материалы для ремонта<br>Окончательная отделка пола, стен, потолка<br>Кухня<br>Двери<br>Ванная комната и туалет',
        //   feature: 'Черновая и чистовая отделка<br>Материалы для ремонта'
        // },
        // bathroom: {
        //   preTitleText: 'Ванная комната',
        //   priceIncluded: 'В стоимость входит',
        //   text: 'Проект перепланирки квартиры<br>Дизайн проект<br>Черновая и чистовая отделка<br>Материалы для ремонта<br>Окончательная отделка пола, стен, потолка<br>Кухня<br>Двери<br>Ванная комната и туалет',
        // },
        features: {
          preTitleText: 'Особенности квартиры',
          priceIncluded: 'В стоимость входит',
          text1: 'Проект перепланирки квартиры<br>Дизайн проект<br>Черновая и чистовая отделка<br>Материалы для ремонта<br>Окончательная отделка пола, стен, потолка<br>Кухня<br>Двери<br>Ванная комната и туалет',
          text2: 'Окончательная отделка пола, стен, потолка<br>Кухня<br>Двери<br>Ванная комната и туалет',
          text3: 'Окончательная отделка пола, стен, потолка<br>Кухня<br>Двери<br>Ванная комната и туалет'
        },
        redevelopment: {
          preTitleText: 'Виды перепланировки квартиры',
          text: 'Проект перепланирки квартиры<br>Дизайн проект<br>Черновая и чистовая отделка',
          plans: [
            { src: 'https://images.unsplash.com/photo-1534840473734-95c07368722d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&h=600&q=69' },
            { src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&h=600&q=69' }
          ]
        },
        content: {
        }
      }
    },
    async asyncData({ route }) {
      const { key } = route.params
      const { data } = await axios.get(`projects/${key}.json`)
      const responseContacts = await fetch('https://yehorpopov-db.firebaseio.com/contacts.json')
      const contacts = await responseContacts.json()
      const responseHowItWorks = await fetch('https://yehorpopov-db.firebaseio.com/howItWorks.json')
      const howItWorks = await responseHowItWorks.json()
      return {
        release: data,
        howItWorks,
        contacts
      }
    },
    computed: {
      loadedSocialLinksSortedByOld () {
        return this.$store.getters.loadedSocialLinksSortedByOld
      },
      // item () {
      //   return this.$store.getters.loadedProject(this.$route.params.key)
      // },
      loadedOtherProjects () {
        return this.$store.getters.loadedOtherProjects(this.$route.params.key)
      },
      loadedHero () {
        return this.$store.getters.loadedHero
      }
    },
    head () {
      return {
        title: this.release.title,
        meta: [
          { name: 'description', content: this.release.title + ' project' },
          { property: 'og:image', content: 'https://firebasestorage.googleapis.com/v0/b/yehorpopov-db.appspot.com/o/og-images%2Fog-default.jpg?alt=media&token=9e1cdee4-d619-436b-a8bf-09b31cef09c0' }
        ]
      }
    }
  }
</script>

<style lang="stylus">
  // .ProjectsPage
  //   margin-top: 130px
</style>
