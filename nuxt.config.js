module.exports = {
  head: {
    titleTemplate: '%s | Studio Yehor Popov',
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Studio Yehor Popov" }
    ],
    link: [
      { rel: 'shortcut icon', href: 'https://firebasestorage.googleapis.com/v0/b/yehorpopov-db.appspot.com/o/favi%2Ffavicon-32.png?alt=media&token=a9c4f475-4997-46de-84d0-db23786177dc' },
      { rel: 'apple-touch-icon', href: 'https://firebasestorage.googleapis.com/v0/b/yehorpopov-db.appspot.com/o/favi%2Ffavicon-144.jpg?alt=media&token=ce62c329-c57c-438d-9910-f9167c8f51c2' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:500,800|Material+Icons' },
      { rel: 'stylesheet', href: 'https://cdn.materialdesignicons.com/3.3.92/css/materialdesignicons.min.css' },
    ]
  },
  loading: {
    color: '#e8ca6a',
    height: '5px'
  },
  // mode: 'spa',
  plugins: [
    // { src: '~plugins/google-analytics.js', ssr: false },
    '~/plugins/vuetify.js',
    '~/plugins/fireauth.js'
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
    analyze: {
      analyzerMode: 'static'
    }
  },
  generate: {
    routes: [
      '/project/-LV_1h029_YoOQLpLg0y/'
    ]
  }
}
