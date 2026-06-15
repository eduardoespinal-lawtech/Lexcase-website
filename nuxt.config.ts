// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-15',
  devtools: { enabled: false },
  ssr: true,

  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],

  css: ['~/assets/css/main.css'],

  app: {
    baseURL: '/',
    head: {
      htmlAttrs: { lang: 'es' },
      title: 'LexCase — Gestor de expedientes legales para Mac',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#0E1D4A' },
        { name: 'description', content: 'LexCase es la plataforma profesional de gestión de expedientes legales para abogados. Expedientes, calendario, clientes y finanzas — todo local en tu Mac.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'LexCase' },
        { property: 'og:image', content: 'https://lexcase.com.do/og-image.svg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: 'https://lexcase.com.do/og-image.svg' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'mask-icon', href: '/favicon.svg', color: '#0E1D4A' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'canonical', href: 'https://lexcase.com.do/' }
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
    baseUrl: 'https://lexcase.com.do',
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
