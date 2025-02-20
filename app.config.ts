// https://github.com/nuxt-themes/alpine/blob/main/nuxt.schema.ts
export default defineAppConfig({
  alpine: {
    title: 'Santhosh J S',
    description: 'Software Engineer with expertise in Full Stack Development and Cloud Technologies',
    image: {
      src: '/social-card-preview.jpg',
      alt: 'An image showcasing my project',
      width: 400,
      height: 300
    },
    header: {
      position: 'right', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: '/logo.svg', // path of the logo
        pathDark: '/logo-dark.svg', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: 'Santhosh J S' // alt of the logo
      }
    },
    footer: {
      credits: {
        enabled: false, // possible value are : true | false
        repository: 'https://www.github.com/santhoshsiddegowda' // our github repository
      },
      navigation: false, // possible value are : true | false
      alignment: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: 'Follow me on' // string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      twitter: 'SantoshAshGowda',
      github: 'santhoshsiddegowda',
      linkedin: {
        label: 'LinkedIn',
        icon: 'uil:linkedin',
        href: 'https://www.linkedin.com/in/santhoshsiddegowda'
      }
    },
    form: {
      successMessage: 'Message sent. Thank you for contacting me!'
    }
  }
})
