import process from 'node:process'

const IS_PROD = process.env.NUXT_PUBLIC_NODE_ENV === 'production'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Enable SPA mode for preview env or SSR (SSG) mode for production env
  ssr: IS_PROD,

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'SaaSup',
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
          additionalData: '@use "@/assets/scss/main.scss" as *;',
          // TODO: get rid of after updating to Dart Sass 2.0.0
          // https://sass-lang.com/documentation/breaking-changes/legacy-js-api/
          silenceDeprecations: ['legacy-js-api'],
        },
      },
    },
  },

  css: [
    '@/assets/scss/utils.scss',
    '@/assets/scss/global.scss',
    '@/node_modules/modern-normalize/modern-normalize.css',
  ],

  runtimeConfig: {
    public: {
      NODE_ENV: process.env.NODE_ENV || 'production',
      // Used https://web3forms.com as contact form API service.
      // Alternatives: https://fabform.io/, https://resend.com/ etc.
      // The Access Key is not a secret API Key.
      // It can be Public and it's safe to use it in the client-side code.
      // It works as an alias to your email address.
      contactFormApiUrl: 'https://api.web3forms.com',
      contactFormApiAccessKey: 'ef9a2aa0-f815-4096-a39f-8aae818042da',
    },
  },

  modules: [
    // https://github.com/storyblok/storyblok-nuxt
    [
      '@storyblok/nuxt',
      {
        accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
        apiOptions: {
          region: 'eu',
        },
      },
    ],
    // https://www.npmjs.com/package/@vueuse/nuxt
    '@vueuse/nuxt',
    // https://github.com/nuxt-modules/icon
    '@nuxt/icon',
    // https://github.com/nuxt/image
    [
      '@nuxt/image',
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
    // https://www.npmjs.com/package/@nuxtjs/google-fonts,
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Nunito: [300, 400, 600, 700, 800],
        },
      },
    ],
    // https://github.com/gaetansenn/vue3-carousel-nuxt
    'vue3-carousel-nuxt',
    // https://eslint.nuxt.com/
    '@nuxt/eslint',
    // https://html-validator.nuxtjs.org/
    '@nuxtjs/html-validator',
  ],

  components: [
    {
      path: '~/components',
      // auto-import components based only on its name, not path
      pathPrefix: false,
    },
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

  experimental: {
    // Fully typed routing 💪
    typedPages: true,
  },

  compatibilityDate: '2024-07-03',
})
