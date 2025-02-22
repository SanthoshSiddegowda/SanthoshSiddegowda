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

  // Static site generation settings
  nitro: {
    preset: 'static',
    output: {
      dir: '.output/public',
      publicDir: 'public'
    }
  },

  // Ensure static generation
  routeRules: {
    '/**': { prerender: true }
  }
})