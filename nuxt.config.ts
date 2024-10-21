// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  css: [
    '~/assets/css/main.css'
  ],
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

  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon']
})