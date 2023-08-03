// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
        { property: 'og:image', content: 'https://assets.website-files.com/61d3d235e6a53f40dda1219c/6283291a1a1efcd099793c73_saasup-webflow-template.jpg' },
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

  modules: [
    // https://www.npmjs.com/package/@vueuse/nuxt
    '@vueuse/nuxt',

    // https://github.com/nuxt-modules/icon
    'nuxt-icon',

    // https://github.com/nuxt/image
    [
      '@nuxt/image',
      {
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

    // https://www.npmjs.com/package/@nuxtjs/google-fonts,
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Nunito: [300, 400, 600, 700, 800],
        },
      },
    ],
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

  devtools: { enabled: false },
})
