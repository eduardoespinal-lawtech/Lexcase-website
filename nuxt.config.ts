// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-15',
  devtools: { enabled: false },
  telemetry: false,
  ssr: true,

  runtimeConfig: {
    public: {
      googleTagId: process.env.NUXT_PUBLIC_GOOGLE_TAG_ID || '', // e.g. 'G-XXXXXX' or 'AW-XXXXXX'
      metaPixelId: process.env.NUXT_PUBLIC_META_PIXEL_ID || '', // e.g. '123456789012345'
      appleStoreUrl: 'https://apps.apple.com/do/app/lexbell-expedientes-legales/id6791787627?mt=12',
      microsoftStoreUrl: 'https://apps.microsoft.com/detail/9NLZXP46J9G2'
    }
  },

  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],

  css: ['~/assets/css/main.css'],

  app: {
    baseURL: '/',
    head: {
      htmlAttrs: { lang: 'es' },
      title: 'Lexbell — Gestor de expedientes legales para Mac y Windows',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#007AFF' },
        { name: 'description', content: 'Lexbell es la app de escritorio para gestionar expedientes legales: casos, plazos, documentos y notas, todo local en tu equipo. Para Mac y Windows.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Lexbell' },
        { property: 'og:image', content: 'https://lex-bell.com/og-image.svg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: 'https://lex-bell.com/og-image.svg' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'mask-icon', href: '/favicon.svg', color: '#007AFF' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'canonical', href: 'https://lex-bell.com/' }
      ]
    }
  },

  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'es',
    locales: [
      { code: 'es', language: 'es-DO', name: 'Español', file: 'es.json' },
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' }
    ],
    langDir: 'locales/',
    detectBrowserLanguage: false,
    baseUrl: 'https://lex-bell.com',
    customRoutes: 'config',
    pages: {
      features: { es: '/caracteristicas', en: '/features' },
      support: { es: '/soporte', en: '/support' },
      contact: { es: '/contacto', en: '/contact' },
      faq: { es: '/faq', en: '/faq' },
      privacy: { es: '/privacidad', en: '/privacy' },
      terms: { es: '/terminos', en: '/terms' }
    }
  },

  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      routes: ['/', '/en', '/sitemap.xml', '/robots.txt']
    }
  },

  experimental: {
    payloadExtraction: false
  }
})
