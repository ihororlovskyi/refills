module.exports = {
  head: {
    titleTemplate: '%s | Studio Yehor Popov',
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Studio Yehor Popov" }
    ],
    link: [
      { rel: 'shortcut icon', href: 'https://firebasestorage.googleapis.com/v0/b/yehorpopov-db.appspot.com/o/favi%2Ffavicon-32-site.png?alt=media&token=3e5bf8f8-efce-4add-b128-ca391ce35719' },
      { rel: 'apple-touch-icon', href: 'https://firebasestorage.googleapis.com/v0/b/yehorpopov-db.appspot.com/o/favi%2Ffavicon-144-site.jpg?alt=media&token=90fa595c-ff5d-4b8d-bcf7-e98057cf4dc9' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:500,800|Material+Icons' },
      { rel: 'stylesheet', href: 'https://cdn.materialdesignicons.com/3.3.92/css/materialdesignicons.min.css' },
    ]
  },
  loading: {
    color: '#262626',
    height: '5px'
  },
  // mode: 'spa',
  plugins: [
    '~/plugins/vuetify.js',
    '~/plugins/fireauth.js',
    { src: '~/plugins/vue2-google-maps.js', ssr: false },
    '~/plugins/vue-scrollactive.js'
  ],
  modules: [
    ['@nuxtjs/google-tag-manager', {
      id: 'GTM-5JV4W4M',
      pageTracking: true,
      dev: false
    }],
  ],
  css: [
    { src: '~/assets/css/main.css', lang: 'css'},
    { src: '~/assets/css/app.styl', lang: 'styl'}
  ],
  // router: {
  //   middleware: 'router-auth'
  // },
  vendor: [
    'firebase',
    'vuetify'
  ],
  build: {
    transpile: [
      'vue2-google-maps'
    ],
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        // config.module.rules.push({
        //   enforce: 'pre',
        //   test: /\.(js|vue)$/,
        //   loader: 'eslint-loader',
        //   exclude: /(node_modules)/
        // })
      }
    },
    extractCSS: true,
    // analyze: {
    //   analyzerMode: 'static'
    // }
  },
  generate: {
    routes: [
      '/project/mnm-one/',
      '/project/slp-bar/',
      '/project/old-school/'
    ]
  }
}
