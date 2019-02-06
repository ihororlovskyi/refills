import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBe9QRJoT1Cm90GZDf4HRNNfz0pvSRscoE',
    libraries: 'places'
  }
})
