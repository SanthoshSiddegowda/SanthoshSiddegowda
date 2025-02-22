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
    }
  },

  // Add nitro config for Amplify deployment
  nitro: {
    preset: 'node-server',
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/articles'
      ]
    }
  },

  // Add server configuration
  ssr: true,
  experimental: {
    payloadExtraction: false
  }
})