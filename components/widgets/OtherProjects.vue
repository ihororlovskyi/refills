<template>
  <v-container fluid pa-0 style="background-color:#f7f7f7;" class="OtherProjects">
    <v-container py-0 class="MainContainer">
      <v-layout row wrap class="pt200 pb80">
        <v-flex xs12 class="mb80">
          <div class="fs24 fw800">{{ title }}</div>
        </v-flex>
        <v-flex xs12 sm6 v-for="i in data" :key="i.id">
          <v-img :aspect-ratio="3/2" :src="i.imgCover" @click="onLoad(i.id)" v-ripple style="cursor:pointer">
            <div class="my-black-mask"/>
            <v-layout column fill-height style="position:relative">
              <v-spacer/>
              <div class="pl40 pb40 white--text fs24 fw800">{{ preTitleText }}<br>{{ i.title }}</div>
            </v-layout>
          </v-img>
          <!-- <v-parallax :src="i.imgCover" height="400">
            <div class="my-black-mask"/>
            <v-layout column fill-height style="position:relative">
              <v-spacer/>
              <div class="pl40 pb40 white--text fs24 fw800">{{ preTitleText }}<br>{{ i.title }}</div>
            </v-layout>
          </v-parallax> -->
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
  export default {
    props:  [
      'data'
    ],
    data () {
      return {
        title: 'Другие дизайн проекты квартир',
        preTitleText: 'Дизайн проект',
      }
    },
    methods: {
      onLoad(url) {
        this.$router.push('/project/' + url)
      }
    }
  }
</script>

<style lang="stylus">
.OtherProjects
  position: relative
  .my-black-mask
    position: absolute
    left: 0
    top: 0
    width: 100%
    height: 100%
    background-color: rgba(#000, .25);
</style>
