// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/foundation.scss" as *;',
        },
      },
    },
  },

  css: [
    '@/assets/scss/global.scss',
    '@/node_modules/modern-normalize/modern-normalize.css',
  ],

  modules: [
    // https://www.npmjs.com/package/@vueuse/nuxt
    '@vueuse/nuxt',
    // https://www.npmjs.com/package/@nuxtjs/google-fonts
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Nunito: [300, 400, 600, 700],
        },
      },
    ],
    // https://github.com/nuxt-modules/icon
    'nuxt-icon',
  ],

  components: [
    {
      path: '~/components/base',
      prefix: 'Base',
    },
    '~/components',
  ],

  typescript: {
    strict: true,
    shim: false,
  },

  devtools: { enabled: true },
})
