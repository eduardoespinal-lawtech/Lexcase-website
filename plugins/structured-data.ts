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
              email: 'support@lex-bell.com',
              sameAs: [
                'https://apps.apple.com/do/app/lexbell-expedientes-legales/id6791787627?mt=12',
                'https://apps.microsoft.com/detail/9NLZXP46J9G2'
              ],
              knowsAbout: [
                'Legal Practice Management Software',
                'Gestión de expedientes judiciales',
                'Cálculo de plazos procesales en días hábiles',
                'Directorio de clientes y partes procesales',
                'Control de visados y trámites de inmigración',
                'Gestión de contratos de alquiler y compraventa inmobiliaria',
                'Secreto profesional y privacidad de datos legales',
                'Software local-first para abogados',
                'Derecho Procesal Civil, Penal y Administrativo',
                'Alternativa a Clio para despachos de abogados',
                'Clio alternative offline-first'
              ]
            },
            {
              '@type': 'WebSite',
              '@id': 'https://lex-bell.com/#website',
              url: 'https://lex-bell.com',
              name: 'Lexbell',
              publisher: {
                '@id': 'https://lex-bell.com/#organization'
              },
              inLanguage: ['es', 'en'],
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://lex-bell.com/blog?q={search_term_string}'
                },
                'query-input': 'required name=search_term_string'
              }
            },
            {
              '@type': ['SoftwareApplication', 'Product'],
              '@id': 'https://lex-bell.com/#software',
              name: 'Lexbell',
              description:
                'Software de escritorio privado para abogados, consultores de inmigración y gestores inmobiliarios en Mac y Windows. Organiza expedientes, clientes, plazos judiciales y documentos 100% locales sin nube.',
              applicationCategory: 'BusinessApplication',
              applicationSubCategory: 'Law Practice Management Software',
              operatingSystem: 'macOS 12+, Windows 10 and 11 (64-bit)',
              url: 'https://lex-bell.com',
              sameAs: [
                'https://apps.apple.com/do/app/lexbell-expedientes-legales/id6791787627?mt=12',
                'https://apps.microsoft.com/detail/9NLZXP46J9G2'
              ],
              isSimilarTo: [
                {
                  '@type': 'Product',
                  name: 'Clio',
                  category: 'Law Practice Management Software'
                },
                {
                  '@type': 'Product',
                  name: 'MyCase',
                  category: 'Law Practice Management Software'
                },
                {
                  '@type': 'Product',
                  name: 'PracticePanther',
                  category: 'Law Practice Management Software'
                },
                {
                  '@type': 'Product',
                  name: 'Sudespacho',
                  category: 'Law Practice Management Software'
                }
              ],
              inLanguage: ['es', 'en'],
              softwareVersion: '1.0.0',
              publisher: {
                '@id': 'https://lex-bell.com/#organization'
              },
              keywords:
                'software para abogados, programa gestion expedientes, software juridico mac windows, gestion casos legales, app para organizar expedientes en mac, programa para llevar casos de clientes en mi despacho, software para abogados gratis o barato, alternativa a clio que no sea cara, software legal sin internet, calculo plazos procesales dias habiles, calculadora plazos judiciales, programa tramites visas inmigracion, software contratos alquiler compraventa, gestor de causas judiciales, organizador de pleitos y juicios, legal practice management software offline, solo attorney case tracker',
              featureList: [
                'Gestión integral de expedientes judiciales y extrajudiciales con clasificación por materia',
                'Cálculo automático de plazos procesales y términos legales en días hábiles y naturales',
                'Directorio centralizado de clientes, partes contrarias y contactos vinculados',
                'Seguimiento especializado de trámites de inmigración, visados y residencias',
                'Control de contratos inmobiliarios de arrendamiento, compraventas y fianzas',
                'Almacenamiento local cifrado de documentos asociados (Word, PDF, Excel)',
                'Editor de notas procesales confidenciales por expediente',
                'Búsqueda universal instantánea indexada en milisegundos sin latencia',
                'Funcionamiento 100% offline sin necesidad de conexión a internet',
                'Arquitectura Local-First con privacidad total y respeto al secreto profesional',
                'Copias de seguridad locales y exportación de datos bajo control del usuario',
                'Compatibilidad nativa con Apple Silicon (M1/M2/M3/M4), procesadores Intel y Windows 64-bit',
                'Nivel gratuito completo de hasta 50 expedientes activos sin tarjeta de crédito'
              ],
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
                description: 'Free tier up to 50 active cases'
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                ratingCount: '58',
                bestRating: '5',
                worstRating: '1'
              }
            },
            {
              '@type': 'ItemList',
              '@id': 'https://lex-bell.com/#site-navigation-es',
              name: 'Navegación principal de Lexbell',
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
