// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_vars.scss" as *;',
        },
      },
    },
  },

  css: [
    '@/assets/scss/global.scss',
    '@/node_modules/modern-normalize/modern-normalize.css',
  ],

  modules: [
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Nunito: [400, 700, 800],
        },
      },
    ],
  ],

  typescript: {
    strict: true,
    shim: false,
  },

  devtools: { enabled: true },
})
