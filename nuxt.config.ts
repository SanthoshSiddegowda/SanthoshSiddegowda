export default defineNuxtConfig({
  extends: '@nuxt-themes/alpine',

  modules: [
    '@nuxtjs/plausible',
    '@nuxt/devtools'
  ],

  compatibilityDate: '2025-02-20',

  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      }
    }
  },

  // Add nitro config for static generation
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/contact'
      ]
    }
  },

  colorMode: {
    preference: 'light'
  }
})