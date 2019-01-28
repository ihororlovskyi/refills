<template>
  <v-container py-0 class="MainContainer" id="team">
    <v-layout row wrap class="Team mt200">
      <v-flex xs12>
        <div class="fs24 fw800 mb80">{{ dataFetch.title }}</div>
      </v-flex>
      <div class="TeamList mb40">
        <div v-for="i in dataStore" :key="i.name" class="TeamListItem mb80">
          <div class="TeamListItemMedia">
            <v-img class="TeamListItemMediaPhoto" :src="i.photo" :alt="i.name"/>
          </div>
          <div class="TeamListItemText">
            <div class="TeamListItemTextQuote fs24 fw800 mb-3" v-if="i.quote" v-html="i.quote"/>
            <div>{{ i.name }}</div>
            <div class="fs12">{{ i.position }}</div>
          </div>
        </div>
      </div>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    props: [
      'dataStore',
      'dataFetch'
    ]
  }
</script>

<style lang="stylus">
  .Team
    &List
      display: flex
      flex-direction: row
      flex-wrap: wrap
      &Item
        width: 50%
        display: flex
        flex-direction: row
        // flex-wrap: wrap
        &Media
          // display: block
          &Photo
            display: block
            width: 240px
        &Text
          margin-left: 40px
          &Quote
            margin-top: 120px
            // margin-left: -130px

        &:nth-child(1)
          width: 100%
          & .TeamListItemMediaPhoto
              width: 400px
        &:nth-child(2)
          padding-top: 80px
          padding-left: 160px
          // & .TeamListItemMedia
        &:nth-child(3)
          align-items: flex-end
          padding-bottom: 80px
          & .TeamListItemMedia
              order: 1
          & .TeamListItemText
            margin-left: 0
            margin-right: 40px
            text-align: right

</style>
