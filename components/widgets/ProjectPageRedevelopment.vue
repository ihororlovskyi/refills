<template>
  <v-container fluid pa-0>
    <v-container py-0 class="MainContainer">
      <v-layout row wrap class="pt80 pb80">
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
            class="elevation-0"
          >
            <v-carousel-item
              v-for="i in redevelopment.plans"
              :key="i.src"
              :src="i.src"
            >
              <!-- <v-parallax :src="i.src" height="600"/> -->
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
  export default {
    props: [ 'redevelopment' ]
  }
</script>

<style lang="stylus">
</style>
