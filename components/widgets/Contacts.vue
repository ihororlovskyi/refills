<template>
  <v-container py-0 class="MainContainer">
    <v-layout row wrap>
      <v-flex xs12 class="mb80">
        <v-layout row wrap>
          <v-flex xs12>
            <div class="fs24 fw800 mb40">{{ data.title }}</div>
          </v-flex>
          <v-flex xs4>
            <div class="mb20">
              <v-btn
                class="ma-0 pa-0 mr-2"
                icon
                flat
                v-for="i in social"
                v-if="i.link"
                :key="i.key"
                :href="i.link"
                target="_blank"
              >
                <v-icon v-if="i.icon">{{ i.icon }}</v-icon>
              </v-btn>
            </div>
            <div>{{ data.email }}</div>
          </v-flex>
          <v-flex xs4>
            <div>{{ data.phone }}</div>
          </v-flex>
          <v-flex xs4>
            <div v-html="data.address"/>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12 v-if="map">
        <iframe class="GoogleMap"
          :src="'https://www.google.com/maps/embed/v1/place?q=' + data.mapLocation + '&key=AIzaSyBETsKlJoUTKVLYIAe7O_CkVWwAsjiWhVw'"
          allowfullscreen
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    props: [
      'data',
      'social',
      'map'
    ]
  }
</script>

<style lang="stylus">
  .GoogleMap
    width: 100%
    height: 360px
    border: none
</style>
