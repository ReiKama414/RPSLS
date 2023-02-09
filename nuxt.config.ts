import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  typescript: {
    strict: true
  },
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
            additionalData: '@import "assets/sass/global.sass"',
        }
      }
    }
  },
  modules: ['@nuxtjs/tailwindcss'],
})