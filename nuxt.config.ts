// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    // 'assets/css/style.css',
    '~/assets/css/style.scss'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/css/_mixin.scss" as *;',
        },
      },
    },
  },
  app: {
    head: {
      title: 'Nuxt3 Test',
      meta: [
        { name: 'description', content: 'Everything about Nuxt3'}
      ],
      // link: [
      //   { rel: 'stylesheet', href: 'assets/css/style.css' }
      // ]
    }
  }
})
