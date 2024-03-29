// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: false
  },
  modules: ['@nuxt/content', "@nuxt/image"],
  css: ['~/assets/css/theme.scss'],
  content: {
    highlight: {
      theme: 'one-dark-pro',
      preload: ['typescript', 'javascript']
    }
  },
  app: {
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: 'https://emoji.gg/assets/emoji/thonk.png'
        }
      ],
      htmlAttrs: {
        lang: 'pt-BR'
      }
    }
  }
});