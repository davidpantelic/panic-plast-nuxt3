// https://nuxt.com/docs/api/configuration/nuxt-config
// import { resolve } from 'path'
export default {
  typescript: {
    shim: false, // Disable TypeScript shims
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  devServer: {
    port: 4000
  },
  css: [
    '~/assets/css/main.css'
  ],
  image: {
    format: ['webp', 'jpeg', 'jpg', 'png'],
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
      '2xl': 1536
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    config: {
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
            suse: ['SUSE', 'sans-serif']
          },
          colors: {
            'brand-black': '#081107',
            'brand-grey-1': '#4A4A4A',
            'brand-grey-2': '#D3D3D3',
            // 'brand-green': '#4CAF50',
            'brand-green': '#acbc90',
            'brand-yellow': '#FFF8DC'
          },
          transitionDuration: {
            DEFAULT: '500ms'
          }
        }
      }
    }
  },
  // routeRules: {
  //   '/': { prerender: true }
  // },
  app: {
    head: {
      title: 'Panić Plast',
      charset: 'utf-8',
      htmlAttrs: {
        lang: 'sr'
      },
      meta: [
        { name: 'description', content: 'Plasticni rezervoari, plasticne septicke jame, plasticni pontoni, plasticne kace, plasticne cevi. Za domacinstva i proizvodnje. Kvalitetno, povoljno, dugotrajno i ekoloski ispravno.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        // Open Graph (OG) meta tags for social media
        { property: 'og:title', content: 'Panić Plast' },
        { property: 'og:description', content: 'Plasticni rezervoari, plasticne septicke jame, plasticni pontoni, plasticne kace, plasticne cevi. Za domacinstva i proizvodnje. Kvalitetno, povoljno, dugotrajno i ekoloski ispravno.' },
        { property: 'og:image', content: '/social_share.jpg' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://panic-plast.rs' },
        // Twitter Card meta tags
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Panić Plast' },
        { name: 'twitter:description', content: 'Plasticni rezervoari, plasticne septicke jame, plasticni pontoni, plasticne kace, plasticne cevi. Za domacinstva i proizvodnje. Kvalitetno, povoljno, dugotrajno i ekoloski ispravno.' },
        { name: 'twitter:image', content: '/social_share.jpg' },
        // other
        { name: 'msapplication-TileColor', content: '#081107' },
        { name: 'theme-color', content: '#081107' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#acbc90' },
        { rel: 'canonical', href: 'https://panic-plast.rs' },
      ],
    },
  },
  modules: ['@nuxt/ui', '@nuxtjs/tailwindcss', '@nuxt/icon', '@nuxt/image']
  // 'nuxt-vitalizer'
  // 'nuxt-mail'
}