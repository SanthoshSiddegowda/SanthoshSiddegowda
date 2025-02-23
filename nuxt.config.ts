export default defineNuxtConfig({
  extends: '@nuxt-themes/alpine',
  

  modules: [
    '@nuxtjs/plausible',
    '@nuxt/devtools'
  ],

  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      }
    },
    baseURL: '/'
  },

  // Server configuration for EC2
  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/articles',
        '/articles/**'
      ]
    }
  },

  // Static site generation settings
  routeRules: {
    '/**': { prerender: true }
  },

  experimental: {
    payloadExtraction: false
  }
})