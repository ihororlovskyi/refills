<template>
  <v-container py-0 class="MainContainer">
    <v-layout row wrap class="mb80">
      <v-flex xs12 sm4 v-for="i in data" :key="i.title" class="mb20">
        <div class="pr-4">
          <div class="fs26 fw800">{{ i.title }}</div>
          <div class="">{{ i.description }}</div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    props: [
      'data'
    ]
  }
</script>

<style lang="stylus">
  .Features
    &Item
      padding-right 20px
      &Title
        // font-weight 800
        // font-size 32px
      &Description
        // display block
</style>
