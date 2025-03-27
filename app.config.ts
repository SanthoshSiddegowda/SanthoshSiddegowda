// https://github.com/nuxt-themes/alpine/blob/main/nuxt.schema.ts
export default defineAppConfig({
  alpine: {
    title: 'Santhosh J S',
    description: 'Software Engineer with expertise in Full Stack Development and Cloud Technologies',
    image: {
      src: 'https://res.cloudinary.com/just-photos/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1743078687/santhosh_siddegowda_wdkp3v.jpg',
      alt: 'santhosh siddegowda',
    },
    header: {
      position: 'right', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: 'https://i.ibb.co/MxjbHnXY/image-2-removebg-preview-1.png', // path of the logo
        pathDark: 'https://i.ibb.co/MxjbHnXY/image-2-removebg-preview-1.png', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: '' // alt of the logo
      }
    },
    footer: {
      credits: {
        enabled: false, // possible value are : true | false
        repository: 'https://www.github.com/santhoshsiddegowda' // our github repository
      },
      navigation: false, // possible value are : true | false
      alignment: 'left', // possible value are : 'none' | 'left' | 'center' | 'right'
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
