<template>
  <v-layout row wrap class="Hiw">
    <v-flex xs12>
      <div class="fs24 fw800 mb80">{{ data.title }}</div>
    </v-flex>
    <v-layout row wrap class="HiwItem mb80" v-for="i in data.list" :key="i.title">
      <v-flex xs4>
        <img v-if="i.img" class="HiwItemImg" :src="i.img" alt="">
        <!-- <v-parallax class="mb-5" v-if="i.img" :src="i.img" height="300"/> -->
      </v-flex>
      <v-flex xs8>
        <div class="HiwItemText">
          <div class="fs24 fw800 mb20">{{ i.title }}</div>
          <p v-if="i.description" v-for="ii in i.description" :key="i.p">{{ ii.p }}</p>
          <v-btn v-if="!i.description" outline class="mx-0">
            <v-icon left>{{ btnOrder.icon }}</v-icon>
            {{ btnOrder.text }}
          </v-btn>
        </div>
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<script>
  export default {
    props: [
      'data'
    ],
    data () {
      return {
        btnOrder: {
          icon: 'mdi-ruler-square',
          text: 'Зыказать просчет проекта'
        },
      }
    }
  }
</script>

<style lang="stylus">
  .Hiw
    //
    &Item
      // margin-bottom: 80px

      &Img
        width: 100%
        display: block
        // margin-right: 38px

      &Text
        margin-left: 38px

</style>
