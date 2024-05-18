// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  ssr: process.env.NUXT_PUBLIC_NODE_ENV === 'production',

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { name: 'description', content: 'Saasup introduces a cost-effective service dashboard, organized services in a single inbox, and efficient business process management through a unified dashboard.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'SaaSup' },
        { property: 'og:url', content: 'https://saaasup.vercel.app' },
        { property: 'og:image', content: 'https://saaasup.vercel.app/images/saasup-preview.png' },
        { property: 'og:description', content: 'Saasup introduces a cost-effective service dashboard, organized services in a single inbox, and efficient business process management through a unified dashboard.' },
        { property: 'og:site_name', content: 'SaaSup' },
        { name: 'msapplication-TileColor', content: '#da532c' },
        { name: 'theme-color', content: '#ffffff' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'apple-touch-icon',
          sizes: '114x114',
          href: '/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'mask-icon', color: '#5bbad5', href: '/safari-pinned-tab.svg' },
      ],
    },
  },

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

  runtimeConfig: {
    public: {
      NODE_ENV: process.env.NODE_ENV,
    },
  },

  modules: [
    [
      '@storyblok/nuxt', // https://github.com/storyblok/storyblok-nuxt
      {
        accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
        apiOptions: {
          region: 'eu',
        },
      },
    ],
    '@vueuse/nuxt', // https://www.npmjs.com/package/@vueuse/nuxt
    'nuxt-icon', // https://github.com/nuxt-modules/icon
    [
      '@nuxt/image', // https://github.com/nuxt/image
      {
        provider: 'storyblok',
        storyblok: {
          // replaced https://a.storyblok.com with https://a2.storyblok.com as a workaround
          // opened issue: https://github.com/storyblok/storyblok/issues/580
          baseURL: 'https://a2.storyblok.com',
        },
        // The screen sizes predefined by `@nuxt/image`:
        screens: {
          xs: 320,
          sm: 640,
          md: 768,
          lg: 1024,
          xl: 1280,
          xxl: 1536,
        },
      },
    ],
    [
      '@nuxtjs/google-fonts', // https://www.npmjs.com/package/@nuxtjs/google-fonts,
      {
        families: {
          Nunito: [300, 400, 600, 700, 800],
        },
      },
    ],
    'vue3-carousel-nuxt', // https://github.com/gaetansenn/vue3-carousel-nuxt
    '@nuxt/eslint', // https://eslint.nuxt.com/
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

  eslint: {
    config: {
      standalone: false,
    },
  },
})
