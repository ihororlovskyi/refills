<template>
  <section>
    <div class="text-xs-center pa40" style="max-width:800px;margin:auto;">
      <div class="text-xs-center fs24 fw800 mb40">{{ loadedPopupUserContacted.popupOrderTitle }}</div>
      <v-avatar size="80" class="mb20">
        <img :src="loadedPopupUserContacted.popupPhoto" alt="avatar">
      </v-avatar>
      <div v-if="!userContacted">
        <div class="mb20" v-html="loadedPopupUserContacted.popupOrderMessage"/>
        <div class="fs12 mb40">{{ loadedPopupUserContacted.popupPerson }}</div>
        <div class="" style="width:290px;margin:auto">

          <!-- <form action="https://formspree.io/bri.aime@gmail.com" method="post">
            <input type="text" name="name" placeholder="Телефон" style="border:1px solid #000">
            <input type="email" name="_replyto" placeholder="Email" style="border:1px solid #000">
            <textarea rows="5" placeholder="Текст" name="message" style="border:1px solid #000"/>
            <input name="_next" :value="'https://yehorpopov.com' + $nuxt.$route.path" style="display:none">
            <br>
            <input type="submit" value="Отправить">
          </form> -->

          <v-text-field
            label="Телефон"
            v-model="phone"
            append-icon="mdi-phone"
            box
            counter
            maxlength="13"
          />
          <v-text-field
            label="Email"
            v-model="email"
            append-icon="mdi-email-outline"
            box
          />
        </div>
        <div class="red--text">{{ error }}</div>
        <v-btn
          depressed
          large
          class="mx-0"
          color="#262626"
          dark
          @click="onSend"
        >
          <img :src="btnSend.img" alt="" width="25px" class="mr20">
          {{ btnSend.text }}
        </v-btn>
      </div>
      <div class="" v-else>
        <div class="mb20">
          <span v-html="loadedPopupUserContacted.popupOrderMessageThanks"/>&nbsp;<span>{{ loadedСontacts.phone }}</span>
        </div>
        <div class="fs12 mb40">{{ loadedPopupUserContacted.popupPerson }}</div>
      </div>
    </div>
  </section>
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        btnSend: {
          img: '/img/icons/send.svg',
          text: 'Отправить',
        },

        error: '',

        users: {},
        id: '',
        phone: '+38',
        email: '',
        date: '',
        url: this.$route.path
      }
    },
    computed: {
      loadedСontacts () {
        return this.$store.getters.loadedСontacts
      },
      userContacted () {
        return this.$store.getters.userContacted
      },
      loadedPopupUserContacted () {
        return this.$store.getters.loadedPopupUserContacted
      }
    },
    methods: {
      onSend () {
        if (this.phone.length < 13) {
          this.error = 'Телефон содержит 13 символов, сейчас ' + this.phone.length
          return
        }
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!pattern.test(this.email)) {
          this.error = 'Email указан не корректно'
          return
        }
        this.error = ''
        axios.get('https://sheetdb.io/api/v1/pgqj45n2a6cgc')
          .then((response) => {
            this.users = response
            this.id = response.data.length
            this.id += 1;
            let user = {
              id: this.id,
              phone: this.phone,
              email: this.email,
              date: new Date().toISOString(),
              url: this.url
            }
            // if (this.users.data.includes(user)) {
            //   this.error = 'Телефон уже есть'
            // } else {
            //   this.error = 'Телефон новый'
            // }
            let saveUser = {
              data: [
                user
              ]
            }
            this.users.data.push(user)
            axios.post('https://sheetdb.io/api/v1/pgqj45n2a6cgc', saveUser)
          })
        this.$store.dispatch('toggleUserContacted')
      }
    }
  }
</script>

<style lang="stylus">
</style>
