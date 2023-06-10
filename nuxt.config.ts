// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
