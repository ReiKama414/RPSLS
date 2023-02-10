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

  app: {
    head: {
      charset: 'UTF-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'My App',
      meta: [
        { name: 'description', content: 'My amazing site.' }
      ],
    }
  },

  modules: ['@nuxtjs/tailwindcss'],
})