export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  components: true,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'share-vie-rikugien',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '駒込駅から徒歩５分。１日、コワーキングスペースのような使い方をしていただいて大丈夫です！シェアハウスへ遊びにきませんか？' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'klavier.page' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:title', property: 'og:title', content: 'share-vie-rikugien' },
      { hid: 'og:description', property: 'og:description', content: '駒込駅から徒歩５分。１日、コワーキングスペースのような使い方をしていただいて大丈夫です！シェアハウスへ遊びにきませんか？' },
      { hid: 'og:image', property: 'og:image', content: '/main.jpg' },
      { hid: 'og:url', property: 'og:url', content: 'https://sv-rikugien.klavier.page' },
    ],
    link: [
      { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/gridlex/2.3.1/gridlex.min.css" },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'canonical', href: 'https://sv-rikugien.klavier.page' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/google-fonts',
    '@nuxt/image'
  ],

  googleFonts: {
    families: {
      'Noto+Sans+JP': true,
      'Sofia': true,
    },
    display: 'swap'
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/google-gtag'
  ],

  'google-gtag': {
    id: 'G-BWQVKNN17X',
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://sv-rikugien.klavier.page/'
  },
  router: {
    extendRoutes (routes, resolve) {
      routes.push({
        name: '404error',
        path: '*',
        component: resolve('~/pages/index.vue')
      })
    }
 },
}