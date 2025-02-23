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
      },
      title: 'Santhosh J S - Software Engineer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Software Engineer with expertise in Full Stack Development, Laravel, and AI Technologies' },
        { name: 'author', content: 'Santhosh J S' },
        { name: 'keywords', content: 'Software Engineer, Full Stack Development, Laravel, AI Technologies' },
        { name: 'robots', content: 'index, follow' },
        { name: 'google-site-verification', content: 'google-site-verification=49400361-5384-44be-9afb-691474950ad9' },
       
        // Open Graph
        { property: 'og:title', content: 'Santhosh J S - Software Engineer' },
        { property: 'og:description', content: 'Software Engineer with expertise in Full Stack Development, Laravel, and AI Technologies' },
        { property: 'og:image', content: 'https://cdn.qwenlm.ai/output/2b19f59c-e8dc-4e77-addf-7fc6cf6fb24c/t2i/f1980bc2-add6-4849-8c44-0a6a1a0cd60b/49400361-5384-44be-9afb-691474950ad9.png' },
        { property: 'og:url', content: 'https://santhoshsiddegowda.com' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Santhosh J S - Software Engineer' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:image:height', content: '630' },
        
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@SantoshAshGowda' },
        { name: 'twitter:title', content: 'Santhosh J S - Software Engineer' },
        { name: 'twitter:description', content: 'Software Engineer with expertise in Full Stack Development, Laravel, and AI Technologies' },
        { name: 'twitter:image', content: 'https://cdn.qwenlm.ai/output/2b19f59c-e8dc-4e77-addf-7fc6cf6fb24c/t2i/f1980bc2-add6-4849-8c44-0a6a1a0cd60b/49400361-5384-44be-9afb-691474950ad9.png' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ]
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