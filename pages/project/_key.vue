<template>
  <section class="mt100">
    <v-container py-0 class="MainContainer">
      <v-layout row wrap>

        <v-flex xs12 class="mb40">
          <v-layout class="fs24 fw800" align-center>
            <v-btn flat icon large :to="btnBack.linkto" class="ml-0 mt-1 mr-4 mb-0" style="width:50px">
              <v-icon large>{{ btnBack.icon }}</v-icon>
            </v-btn>
            <h1 class="fs24 fw800">{{ preTitleText }} {{ release.title }}</h1>
          </v-layout>
        </v-flex>

        <v-flex xs12 class="mb40">
          <v-carousel
            hide-delimiters
            height="600"
        >
            <v-carousel-item
              v-for="i in content.sliderImages"
              :key="i.src"
              :src="i.src"
            />
          </v-carousel>
        </v-flex>

        <v-flex xs12 class="mb80">
          <v-layout>
            <v-flex xs2 style="height:30px;background-color:#e8ca6a"/>
            <v-flex xs2 style="height:30px;background-color:#529dc0"/>
            <v-flex xs2 style="height:30px;background-color:#f3352e"/>
            <v-flex xs2 style="height:30px;background-color:#a0683d"/>
            <v-flex xs2 style="height:30px;background-color:#eed9cd"/>
            <v-flex xs2 style="height:30px;background-color:#f2f2f2"/>
          </v-layout>
        </v-flex>

        <v-flex xs12 class="mb80">
          <v-layout row wrap>
            <v-flex xs3>
              <order-dialog width="280px"/>
              <btn-download-presentation width="280px"/>
              <btn-virtual-reality width="280px"/>
            </v-flex>
            <v-flex xs3 offset-xs1>
              <div v-html="release.description" class="mb20"/>
            </v-flex>
            <v-flex xs3 offset-xs1>
              <div v-html="description2" class="mb20"/>
              <div class="mb20">{{ prePriceText }} <b>{{ release.price }}</b></div>
            </v-flex>
          </v-layout>
        </v-flex>

        <v-flex xs12>
          <contacts :data="contacts" :social="loadedSocialLinksSortedByOld" :map="false"/>
        </v-flex>

        <v-flex xs12 class="mb200">
          <v-divider/>
        </v-flex>

        <v-flex xs12 class="mb80">
          <div class="fs24 fw800 mb-2">
            <!-- <v-icon large class="mr-1">{{ vr.preTitleIcon }}</v-icon> -->
            <img :src="vr.preTitleImg" alt="" width="25px" class="mr20">
            <span class="ml-2">{{ vr.preTitleText }} {{ release.title }} {{ vr.afterTitleText }}</span>
          </div>
          <div v-html="vr.text" class="ml-5 mb40"/>
          <iframe
            width="100%"
            height="600"
            style="width: 100%; height: 600px; border: none; max-width: 100%;"
            frameborder="0"
            allow="vr,gyroscope,accelerometer,fullscreen"
            scrolling="no"
            allowfullscreen="true"
            src="https://kuula.co/share/7YJMY?fs=1&vr=0&thumbs=1&hideinst=1&chromeless=0&logo=0"
          />
          <!-- <script src="https://static.kuula.io/embed.js" data-kuula="https://kuula.co/share/7YJMY?fs=1&vr=0&zoom=1&thumbs=1&hideinst=1&chromeless=0&logo=0" data-width="100%" data-height="600px"></script> -->
        </v-flex>

        <v-flex xs12 class="mb200">
          <v-divider/>
        </v-flex>

        <v-flex xs12 class="mb80">
          <div class="fs24 fw800 mb80">{{ chill.preTitleText }} {{ release.title }}</div>
          <v-layout row wrap class="mb80">
            <v-flex xs8>
              <v-carousel
                hide-delimiters
                height="600"
            >
                <v-carousel-item
                  v-for="i in content.sliderImages"
                  :key="i.src"
                  :src="i.src"
                />
              </v-carousel>
            </v-flex>
            <v-flex xs4>
              <div class="pl40">
                <div v-html="chill.priceIncluded" class="mb20"/>
                <div v-html="chill.text"/>
              </div>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex xs4>
              <v-parallax :src="release.imgCover" height="300" class="mb40"/>
              <div v-html="chill.feature"/>
            </v-flex>
            <v-flex xs4>
              <v-parallax :src="release.imgCover" height="300" class="mb40"/>
              <div v-html="chill.feature"/>
            </v-flex>
            <v-flex xs4>
              <v-parallax :src="release.imgCover" height="300" class="mb40"/>
              <div v-html="chill.feature"/>
            </v-flex>
          </v-layout>
        </v-flex>

        <v-flex xs12 class="mb200">
          <v-divider/>
        </v-flex>

        <v-flex xs12 class="mb80">
          <div class="fs24 fw800 mb80 text-xs-right">{{ kitchen.preTitleText }}</div>
          <v-layout row wrap class="mb80">
            <v-flex xs4>
              <div class="pr40">
                <div v-html="kitchen.priceIncluded" class="mb20"/>
                <div v-html="kitchen.text"/>
              </div>
            </v-flex>
            <v-flex xs8>
              <v-carousel
                hide-delimiters
                height="600"
          >
                <v-carousel-item
                  v-for="i in content.sliderImages"
                  :key="i.src"
                  :src="i.src"
                />
              </v-carousel>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex xs4>
              <v-parallax :src="release.imgCover" height="300" class="mb40"/>
              <div v-html="kitchen.feature"/>
            </v-flex>
            <v-flex xs4>
              <v-parallax :src="release.imgCover" height="300" class="mb40"/>
              <div v-html="kitchen.feature"/>
            </v-flex>
            <v-flex xs4>
              <v-parallax :src="release.imgCover" height="300" class="mb40"/>
              <div v-html="kitchen.feature"/>
            </v-flex>
          </v-layout>
        </v-flex>

        <v-flex xs12 class="mb200">
          <v-divider/>
        </v-flex>

        <v-flex xs12 class="mb80">
          <div class="fs24 fw800 mb80">{{ bathroom.preTitleText }}</div>
          <v-layout row wrap>
            <v-flex xs8>
              <v-carousel
                hide-delimiters
                height="600"
              >
                <v-carousel-item
                  v-for="i in content.sliderImages"
                  :key="i.src"
                  :src="i.src"
                />
              </v-carousel>
            </v-flex>
            <v-flex xs4>
              <div class="pl40">
                <div v-html="bathroom.priceIncluded" class="mb20"/>
                <div v-html="bathroom.text"/>
              </div>
            </v-flex>
          </v-layout>
        </v-flex>

        <v-flex xs12 class="mb200">
          <v-divider/>
        </v-flex>

        <v-flex xs12 class="mb80">
          <div class="fs24 fw800 mb80 text-xs-center">{{ features.preTitleText }}</div>
          <v-layout row wrap>
            <v-flex xs4>
              <v-parallax :src="release.imgCover" height="400"/>
            </v-flex>
            <v-flex xs4>
              <div class="pa40">
                <div v-html="features.priceIncluded" class="mb20"/>
                <div v-html="features.text1"/>
              </div>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex xs4>
              <div class="pa40 text-xs-right">
                <div v-html="features.priceIncluded" class="mb20"/>
                <div v-html="features.text2"/>
              </div>
            </v-flex>
            <v-flex xs4>
              <v-parallax :src="release.imgCover" height="600"/>
            </v-flex>
            <v-flex xs4>
              <div class="pa40">
                <div v-html="features.priceIncluded" class="mb20"/>
                <div v-html="features.text1"/>
              </div>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex xs4>
              <v-parallax :src="release.imgCover" height="400"/>
            </v-flex>
            <v-flex xs4>
              <div class="pa40">
                <div v-html="features.priceIncluded" class="mb20"/>
                <div v-html="features.text1"/>
              </div>
            </v-flex>
            <v-flex xs4>
              <v-parallax :src="release.imgCover" height="400"/>
            </v-flex>
          </v-layout>
        </v-flex>

        <v-flex xs12 class="mb200">
          <v-divider/>
        </v-flex>

        <v-flex xs12 class="mb160">
          <v-layout row wrap>
            <v-flex xs8 class="mb80">
              <div class="fs24 fw800">{{ redevelopment.preTitleText }}</div>
            </v-flex>
            <v-flex xs4 class="mb80">
              <div v-html="redevelopment.text"/>
            </v-flex>
            <v-flex xs12>
              <v-carousel
                hide-delimiters
                height="600"
              >
                <v-carousel-item
                  v-for="i in content.plans"
                  :key="i.src"
                  :src="i.src"
                />
              </v-carousel>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>

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
  import OrderContent from '@/components/shared/OrderContent'
  import OtherProjects from '@/components/widgets/OtherProjects'
  import CustomProject from '@/components/widgets/CustomProject'
  import HowItWorks from '@/components/widgets/HowItWorks'
  import Contacts from '@/components/widgets/Contacts'

  import OrderDialog from '@/components/shared/OrderDialog'
  import BtnDownloadPresentation from '@/components/shared/BtnDownloadPresentation'
  import BtnVirtualReality from '@/components/shared/BtnVirtualReality'

  import axios from '~/plugins/axios'
  import fetch from 'isomorphic-fetch'

  export default {
    components: {
      OrderContent,
      OtherProjects,
      CustomProject,
      HowItWorks,
      Contacts,
      OrderDialog,
      BtnDownloadPresentation,
      BtnVirtualReality
    },
    data () {
      return {
        btnBack: {
          linkto: '/',
          icon: 'mdi-chevron-left'
        },
        preTitleText: 'Дизайн проект',
        description2: 'Проект планировки квартиры<br>Дизайн проект<br>Черновая и чистовая отделка',
        prePriceText: 'Цена проекта и ремонта',
        btnReadMore: {
          text: 'Подробнее',
          icon: 'mdi-chevron-right'
        },
        vr: {
          // preTitleIcon: 'mdi-virtual-reality',
          preTitleImg: '/img/icons/vr.svg',
          preTitleText: 'Проект',
          afterTitleText: 'в VR 360°',
          text: 'Рекомендуем просматривать с очками Cardboard 2. Все проекті моежем показать вам в очках у нас в офисе',
        },
        chill: {
          preTitleText: 'Зоны отдыха',
          priceIncluded: 'В стоимость входит',
          text: 'Проект перепланирки квартиры<br>Дизайн проект<br>Черновая и чистовая отделка<br>Материалы для ремонта<br>Окончательная отделка пола, стен, потолка<br>Кухня<br>Двери<br>Ванная комната и туалет',
          feature: 'Черновая и чистовая отделка<br>Материалы для ремонта'
        },
        kitchen: {
          preTitleText: 'Кухня',
          priceIncluded: 'В стоимость входит',
          text: 'Проект перепланирки квартиры<br>Дизайн проект<br>Черновая и чистовая отделка<br>Материалы для ремонта<br>Окончательная отделка пола, стен, потолка<br>Кухня<br>Двери<br>Ванная комната и туалет',
          feature: 'Черновая и чистовая отделка<br>Материалы для ремонта'
        },
        bathroom: {
          preTitleText: 'Ванная комната',
          priceIncluded: 'В стоимость входит',
          text: 'Проект перепланирки квартиры<br>Дизайн проект<br>Черновая и чистовая отделка<br>Материалы для ремонта<br>Окончательная отделка пола, стен, потолка<br>Кухня<br>Двери<br>Ванная комната и туалет',
        },
        features: {
          preTitleText: 'Особенности квартиры',
          priceIncluded: 'В стоимость входит',
          text1: 'Проект перепланирки квартиры<br>Дизайн проект<br>Черновая и чистовая отделка<br>Материалы для ремонта<br>Окончательная отделка пола, стен, потолка<br>Кухня<br>Двери<br>Ванная комната и туалет',
          text2: 'Окончательная отделка пола, стен, потолка<br>Кухня<br>Двери<br>Ванная комната и туалет',
        },
        redevelopment: {
          preTitleText: 'Виды перепланировки квартиры',
          text: 'Проект перепланирки квартиры<br>Дизайн проект<br>Черновая и чистовая отделка',
        },
        content: {
          sliderImages: [
            { src: 'https://images.unsplash.com/photo-1537726235470-8504e3beef77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&h=600&q=69' },
            { src: 'https://images.unsplash.com/photo-1506812779316-934cef283429?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&h=600&q=69' },
            { src: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&h=600&q=69' },
            { src: 'https://images.unsplash.com/photo-1527005980469-e172416c200b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&h=600&q=69' }
          ],
          plans: [
            { src: 'https://images.unsplash.com/photo-1534840473734-95c07368722d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&h=600&q=69' },
            { src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&h=600&q=69' }
          ]
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
