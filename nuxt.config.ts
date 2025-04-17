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
    
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ],
      script: [
        {
          src: `https://www.googletagmanager.com/gtag/js?id=G-DCTDKH2RDN`,
          async: true
        },
        {
          children: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DCTDKH2RDN');
          `
        }
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
        '/articles/code-police-journey',
        '/articles/code-police-ai-code-reviewer'
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