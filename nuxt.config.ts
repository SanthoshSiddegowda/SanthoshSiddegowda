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
        '/articles/code-police-journey'
      ]
    }
  },

  // Static site generation settings
  routeRules: {
    '/**': { prerender: true }
  },

  experimental: {
    payloadExtraction: false
  },

  // Content module configuration
  content: {
    documentDriven: true,
    navigation: {
      fields: ['title', 'description', '_path']
    }
  }
})