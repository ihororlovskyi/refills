<template>
  <v-container py-0 class="MainContainer" v-if="username">
    <v-layout row wrap class="mt200 mb80">

      <v-flex xs6 class="mb20">
        <div class="fs24 fw800 mb20">{{ data.title }}</div>
        <div v-if="username"><a :href="instapage" target="_blank">@{{ username }}</a></div>
        <div class="mb20">{{ data.description }}</div>
      </v-flex>

      <v-flex xs6 class="text-xs-right mb20">
        <v-btn depressed large class="mx-0" :href="instapage" target="_blank" color="#262626" dark>
          <v-icon left>{{ btnFollow.icon }}</v-icon>
          {{ btnFollow.text }}
        </v-btn>
      </v-flex>

      <v-layout row wrap class="mb-5">
        <v-flex xs6 sm4 md3 v-for="i in grams" :key="i.id" class="pa-3">
          <a :href="i.link" target="_blank">
            <v-img :aspect-ratio="1/1" :src="i.images.standard_resolution.url" :alt="i.text" />
          </a>
        </v-flex>
      </v-layout>

      <v-flex xs12 class="text-xs-center" v-if="next_url">
        <v-btn @click="getMoreGrams" depressed large class="mx-0" color="#262626" dark>
          <v-icon left>{{ btnLoadMore.icon }}</v-icon>
          {{ btnLoadMore.text }}
        </v-btn>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
  import axios from 'axios'
  // import fetch from 'isomorphic-fetch'

  export default {
    props: [
      'data'
    ],
    data () {
      return {
        btnFollow: {
          text: 'Follow',
          icon: 'mdi-instagram'
        },
        btnLoadMore: {
          text: 'Больше',
          icon: 'mdi-chevron-down'
        },

        // access_token: '176908350.1677ed0.3c30032e917a430e8d1f65eae2223b1e',
        // url: 'https://api.instagram.com/v1/users/self/media/recent/',
        // username: this.data.data[0].user.username,
        // grams: this.data.data,
        // next_url: this.data.pagination.next_url,
        // error: false

        // access_token: '9623749496.1677ed0.5cccdc1243a64052b555b888c62b7770', // yehor_reality
        // access_token: '176908350.1677ed0.3c30032e917a430e8d1f65eae2223b1e', // ihor orlovskyi
        access_token: this.data.access_token,

        url: 'https://api.instagram.com/v1/users/self/media/recent/',
        username: '',
        grams: [],
        next_url: '',
        loading: true,
        error: false
      }
    },
    computed: {
      instapage() {
        return 'https://www.instagram.com/' + this.username
      }
    },
    methods: {
      getGrams() {
        axios.get(this.url + '?access_token=' + this.access_token)
          .then(({data}) => {
            this.grams = data.data
            this.username = data.data[0].user.username
            this.next_url = data.pagination.next_url
            this.loading = false
          })
          .catch(function (error) {
            console.log(error)
            this.error = true
          })
      },
      getMoreGrams() {
        axios.get(this.next_url)
          .then(({data}) => {
            this.grams = this.grams.concat(data.data)
            this.next_url = data.pagination.next_url
          })
          .catch(function (error) {
            console.log(error)
            this.error = true
          })
      }
    },
    created() {
      if (typeof window !== 'undefined') {
        this.getGrams()
      }
    }
  }
</script>

<style lang="stylus">
</style>
