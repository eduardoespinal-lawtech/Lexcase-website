// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-15',
  devtools: { enabled: false },
  telemetry: false,
  ssr: true,

  runtimeConfig: {
    public: {
      googleTagId: process.env.NUXT_PUBLIC_GOOGLE_TAG_ID || '',
      googleAdsId: process.env.NUXT_PUBLIC_GOOGLE_ADS_ID || '',
      metaPixelId: process.env.NUXT_PUBLIC_META_PIXEL_ID || '',
      appleStoreUrl: process.env.NUXT_PUBLIC_APPLE_STORE_URL || 'https://apps.apple.com/do/app/lexbell-expedientes-legales/id6791787627?mt=12',
      microsoftStoreUrl: process.env.NUXT_PUBLIC_MICROSOFT_STORE_URL || 'https://apps.microsoft.com/detail/9NLZXP46J9G2'
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
        // Security HTTP Equiv Headers (para hosts estáticos como GitHub Pages)
        { 'http-equiv': 'X-Content-Type-Options', content: 'nosniff' },
        { 'http-equiv': 'X-Frame-Options', content: 'DENY' },
        { 'http-equiv': 'Referrer-Policy', content: 'strict-origin-when-cross-origin' },
        { 'http-equiv': 'Permissions-Policy', content: 'camera=(), microphone=(), geolocation=(), payment=()' },
        {
          'http-equiv': 'Content-Security-Policy',
          content: "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://connect.facebook.net; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://www.facebook.com https://www.google.com https://www.google-analytics.com; connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net https://www.facebook.com; font-src 'self'; frame-ancestors 'none';"
        },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Lexbell' },
        { property: 'og:image', content: 'https://lex-bell.com/og-image.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:type', content: 'image/png' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: 'https://lex-bell.com/og-image.png' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/icon.png' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'mask-icon', href: '/favicon.svg', color: '#007AFF' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'canonical', href: 'https://lex-bell.com/' }
      ]
    }
  },

  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'es',
    trailingSlash: true,
    locales: [
      { code: 'es', language: 'es-DO', name: 'Español', file: 'es.json' },
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' }
    ],
    langDir: 'locales/',
    detectBrowserLanguage: false,
    baseUrl: 'https://lex-bell.com',
    customRoutes: 'config',
    bundle: {
      optimizeTranslationDirective: false
    },
    pages: {
      solutions: { es: '/soluciones', en: '/solutions' },
      features: { es: '/caracteristicas', en: '/features' },
      pricing: { es: '/precios', en: '/pricing' },
      support: { es: '/soporte', en: '/support' },
      contact: { es: '/contacto', en: '/contact' },
      faq: { es: '/faq', en: '/faq' },
      privacy: { es: '/privacidad', en: '/privacy' },
      terms: { es: '/terminos', en: '/terms' },
      cookies: { es: '/politica-cookies', en: '/cookie-policy' },
      'alternativa-clio': { es: '/alternativa-clio', en: '/clio-alternative' },
      'calculadora-plazos': { es: '/calculadora-plazos', en: '/deadline-calculator' }
    }
  },

  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/en',
        '/soluciones',
        '/en/solutions',
        '/precios',
        '/en/pricing',
        '/caracteristicas',
        '/en/features',
        '/alternativa-clio',
        '/en/clio-alternative',
        '/calculadora-plazos',
        '/en/deadline-calculator',
        '/politica-cookies',
        '/en/cookie-policy',
        '/blog',
        '/en/blog',
        '/blog/computo-plazos-procesales-dias-habiles-rd',
        '/en/blog/computo-plazos-procesales-dias-habiles-rd',
        '/blog/secreto-profesional-abogados-nube-seguridad',
        '/en/blog/secreto-profesional-abogados-nube-seguridad',
        '/blog/mejores-programas-gestion-expedientes-abogados-2026',
        '/en/blog/mejores-programas-gestion-expedientes-abogados-2026',
        '/sitemap.xml',
        '/robots.txt'
      ]
    },
    routeRules: {
      '/**': {
        headers: {
          'X-Frame-Options': 'DENY',
          'X-Content-Type-Options': 'nosniff',
          'Referrer-Policy': 'strict-origin-when-cross-origin',
          'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=()',
          'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://connect.facebook.net; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://www.facebook.com https://www.google.com https://www.google-analytics.com; connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net https://www.facebook.com; font-src 'self'; frame-ancestors 'none';"
        }
      }
    }
  },

  experimental: {
    payloadExtraction: false
  }
})
