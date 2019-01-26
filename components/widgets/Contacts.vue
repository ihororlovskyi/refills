<template>
  <v-layout row wrap class="Contacts mb40">
    <v-flex xs12 class="mb80">
      <v-layout row wrap>
        <v-flex xs12>
          <div class="fs24 fw800 mb40">{{ data.title }}</div>
        </v-flex>
        <v-flex xs4>
          <div class="mb-3">
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
      <v-layout row wrap class="mb-5">
        <v-flex xs12>
          <iframe class="ContactsMap"
            :src="'https://www.google.com/maps/embed/v1/place?q=' + data.mapLocation + '&key=AIzaSyBETsKlJoUTKVLYIAe7O_CkVWwAsjiWhVw'"
            allowfullscreen
          />
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
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
  .Contacts
    &Map
      width: 100%
      height: 360px
      border: none
</style>
