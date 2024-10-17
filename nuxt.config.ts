import process from 'node:process'

const IS_PROD = process.env.NUXT_PUBLIC_NODE_ENV === 'production'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Enable SPA mode for preview env or SSR (SSG) mode for production env
  ssr: IS_PROD,

  site: {
    url: 'https://saaasup.vercel.app',
    name: 'SaaSup',
    description: 'Saasup introduces a cost-effective service dashboard, organized services in a single inbox, and efficient business process management through a unified dashboard',
  },

  schemaOrg: {
    enabled: IS_PROD,
    identity: 'Organization',
  },

  sitemap: {
    enabled: IS_PROD,
  },

  robots: {
    enabled: IS_PROD,
  },

  ogImage: {
    enabled: IS_PROD,
  },

  linkChecker: {
    enabled: IS_PROD,
  },

  seoExperiments: {
    enabled: IS_PROD,
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
    '@nuxt/fonts', // https://fonts.nuxt.com
    '@nuxt/icon', // https://github.com/nuxt-modules/icon
    '@nuxt/eslint', // https://eslint.nuxt.com/
    '@nuxtjs/html-validator', // https://html-validator.nuxtjs.org/
    '@vueuse/nuxt', // https://vueuse.org/nuxt/README.html#vueuse-nuxt
    'vue3-carousel-nuxt', // https://github.com/gaetansenn/vue3-carousel-nuxt
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
      '@storyblok/nuxt', // https://github.com/storyblok/storyblok-nuxt
      {
        accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
        apiOptions: {
          region: 'eu',
        },
      },
    ],
    [
      '@nuxtjs/i18n', // https://i18n.nuxtjs.org/
      {
        baseUrl: 'https://saaasup.vercel.app',
        strategy: 'prefix_except_default',
        lazy: true,
        langDir: 'locales',
        locales: [
          { code: 'en', language: 'en-US', name: 'English', file: 'en.yaml' },
          { code: 'uk', language: 'uk-UA', name: 'Українська', file: 'uk.yaml' },
        ],
        defaultLocale: 'en',
        detectBrowserLanguage: false,
      },
    ],
    [
      '@nuxtjs/seo', // https://nuxtseo.com/
      {
        redirectToCanonicalSiteUrl: true,
      },
    ],
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

  devtools: {
    enabled: true,
  },

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
