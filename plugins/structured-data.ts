// SoftwareApplication, WebSite & SiteNavigationElement JSON-LD — for Google & Bing Sitelinks / Deep Links
export default defineNuxtPlugin(() => {
  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Organization',
              '@id': 'https://lex-bell.com/#organization',
              name: 'Lexbell',
              url: 'https://lex-bell.com',
              logo: 'https://lex-bell.com/icon.png',
              email: 'support@lex-bell.com'
            },
            {
              '@type': 'WebSite',
              '@id': 'https://lex-bell.com/#website',
              url: 'https://lex-bell.com',
              name: 'Lexbell',
              publisher: {
                '@id': 'https://lex-bell.com/#organization'
              },
              inLanguage: ['es', 'en']
            },
            {
              '@type': 'SoftwareApplication',
              '@id': 'https://lex-bell.com/#software',
              name: 'Lexbell',
              description:
                'App de escritorio para gestionar expedientes legales: casos, plazos, documentos y notas, todo local en tu equipo. Para Mac y Windows.',
              applicationCategory: 'BusinessApplication',
              applicationSubCategory: 'Law Practice Management Software',
              operatingSystem: 'macOS 12+, Windows 10 and 11 (64-bit)',
              url: 'https://lex-bell.com',
              inLanguage: ['es', 'en'],
              softwareVersion: '1.0.0',
              publisher: {
                '@id': 'https://lex-bell.com/#organization'
              },
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
                description: 'Free tier up to 50 active cases'
              }
            },
            {
              '@type': 'ItemList',
              '@id': 'https://lex-bell.com/#site-navigation-es',
              name: 'Navegación principal de Lexbell',
              inLanguage: 'es',
              itemListElement: [
                {
                  '@type': 'SiteNavigationElement',
                  position: 1,
                  name: 'Características',
                  description: 'Gestión integral de expedientes, cálculo de plazos, clientes y documentos locales.',
                  url: 'https://lex-bell.com/caracteristicas'
                },
                {
                  '@type': 'SiteNavigationElement',
                  position: 2,
                  name: 'Descargar',
                  description: 'Instalador oficial para Mac y Windows con versión gratuita de hasta 50 casos.',
                  url: 'https://lex-bell.com/#descargar'
                },
                {
                  '@type': 'SiteNavigationElement',
                  position: 3,
                  name: 'Blog Jurídico',
                  description: 'Artículos y guías sobre plazos procesales, secreto profesional y legaltech.',
                  url: 'https://lex-bell.com/blog'
                },
                {
                  '@type': 'SiteNavigationElement',
                  position: 4,
                  name: 'Preguntas Frecuentes',
                  description: 'Respuestas sobre privacidad local, licencias, compatibilidad y seguridad.',
                  url: 'https://lex-bell.com/faq'
                },
                {
                  '@type': 'SiteNavigationElement',
                  position: 5,
                  name: 'Soporte',
                  description: 'Centro de ayuda y asistencia técnica directa para usuarios y despachos.',
                  url: 'https://lex-bell.com/soporte'
                },
                {
                  '@type': 'SiteNavigationElement',
                  position: 6,
                  name: 'Contacto',
                  description: 'Canal directo para consultas comerciales, técnicas y sugerencias.',
                  url: 'https://lex-bell.com/contacto'
                }
              ]
            },
            {
              '@type': 'ItemList',
              '@id': 'https://lex-bell.com/#site-navigation-en',
              name: 'Lexbell Main Navigation',
              inLanguage: 'en',
              itemListElement: [
                {
                  '@type': 'SiteNavigationElement',
                  position: 1,
                  name: 'Features',
                  description: 'Complete case management, court deadlines, client records, and offline documents.',
                  url: 'https://lex-bell.com/en/features'
                },
                {
                  '@type': 'SiteNavigationElement',
                  position: 2,
                  name: 'Download',
                  description: 'Official desktop installer for Mac & Windows with free tier up to 50 active cases.',
                  url: 'https://lex-bell.com/en/#download'
                },
                {
                  '@type': 'SiteNavigationElement',
                  position: 3,
                  name: 'Legal Tech Blog',
                  description: 'Guides and insights on court deadlines, privacy standards, and law firm tech.',
                  url: 'https://lex-bell.com/en/blog'
                },
                {
                  '@type': 'SiteNavigationElement',
                  position: 4,
                  name: 'FAQ',
                  description: 'Answers about local offline storage, licenses, compatibility, and backups.',
                  url: 'https://lex-bell.com/en/faq'
                },
                {
                  '@type': 'SiteNavigationElement',
                  position: 5,
                  name: 'Support',
                  description: 'Help center and direct assistance for law firms and legal professionals.',
                  url: 'https://lex-bell.com/en/support'
                },
                {
                  '@type': 'SiteNavigationElement',
                  position: 6,
                  name: 'Contact',
                  description: 'Direct communication channel for licensing inquiries, technical questions, and support.',
                  url: 'https://lex-bell.com/en/contact'
                }
              ]
            }
          ]
        })
      }
    ]
  })
})
