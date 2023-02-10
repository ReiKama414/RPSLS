import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  typescript: {
    strict: true
  },

  app: {
    head: {
      title: 'Spock Rock Game | Kama',
      charset: 'UTF-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'description', content: 'Scissors cuts Paper. Paper covers Rock. Rock crushes Lizard. Lizard poisons Spock. Spock smashes Scissors. Scissors decapitates Lizard. Lizard eats Paper. Paper disproves Spock. Spock vaporizes Rock. Rock crushes scissors.' },
        { property: 'og:title', content: 'Spock Rock Game | Kama' },
        { property: 'og:description', content: 'Scissors cuts Paper. Paper covers Rock. Rock crushes Lizard. Lizard poisons Spock. Spock smashes Scissors. Scissors decapitates Lizard. Lizard eats Paper. Paper disproves Spock. Spock vaporizes Rock. Rock crushes scissors.' },
        { property: 'og:locale', content: 'zh-tw' }
      ],
    },
  },

  modules: ['@nuxtjs/tailwindcss'],
})