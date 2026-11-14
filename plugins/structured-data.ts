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
              alternateName: [
                'LexBell',
                'Lexbel',
                'Lex Bel',
                'Lex Bell',
                'Lex-bell',
                'Lex-Bell',
                'Lexb',
                'Lexbell Legal',
                'Lexbell Technologies'
              ],
              disambiguatingDescription:
                'Lexbell (también conocido o buscado como Lexbel, Lex Bel, Lex Bell, Lex-Bell o Lexb) es la empresa y plataforma de software privado para abogados y despachos jurídicos en Mac y Windows.',
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
                'Clio alternative offline-first',
                'Productividad y eficiencia para abogados',
                'Organización de oficinas de abogados y bufetes',
                'Digitalización y modernización de despachos jurídicos',
                'Control de causas, audiencias y juicios',
                'Herramientas de software para abogados independientes',
                'Sustituto de hojas de cálculo y Excel para bufetes'
              ]
            },
            {
              '@type': 'WebSite',
              '@id': 'https://lex-bell.com/#website',
              url: 'https://lex-bell.com',
              name: 'Lexbell',
              alternateName: [
                'LexBell',
                'Lexbel',
                'Lex Bel',
                'Lex Bell',
                'Lex-bell',
                'Lex-Bell',
                'Lexb',
                'Lexbell Legal',
                'Lexbell Technologies'
              ],
              publisher: {
                '@id': 'https://lex-bell.com/#organization'
              },
              inLanguage: ['es', 'en'],
              speakable: {
                '@type': 'SpeakableSpecification',
                cssSelector: ['h1', '.ms-hero-subtitle']
              },
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://lex-bell.com/blog/?q={search_term_string}'
                },
                'query-input': 'required name=search_term_string'
              }
            },
            {
              '@type': ['SoftwareApplication', 'Product'],
              '@id': 'https://lex-bell.com/#software',
              name: 'Lexbell',
              alternateName: [
                'LexBell',
                'Lexbel',
                'Lex Bel',
                'Lex Bell',
                'Lex-bell',
                'Lex-Bell',
                'Lexb'
              ],
              image: [
                'https://lex-bell.com/og-image.png',
                'https://lex-bell.com/icon.png',
                'https://lex-bell.com/screenshots/showcase-cases.webp'
              ],
              screenshot: 'https://lex-bell.com/screenshots/showcase-cases.webp',
              brand: {
                '@type': 'Brand',
                name: 'Lexbell'
              },
              sku: 'LEXBELL-DESKTOP',
              mpn: 'LEXBELL-1.0',
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
                  name: 'Smokeball',
                  category: 'Law Practice Management Software'
                },
                {
                  '@type': 'Product',
                  name: 'Filevine',
                  category: 'Law Practice Management Software'
                },
                {
                  '@type': 'Product',
                  name: 'Sudespacho',
                  category: 'Law Practice Management Software'
                },
                {
                  '@type': 'Product',
                  name: 'Quolaw',
                  category: 'Law Practice Management Software'
                },
                {
                  '@type': 'Product',
                  name: 'MN Program',
                  category: 'Law Practice Management Software'
                },
                {
                  '@type': 'Product',
                  name: 'BaseNet',
                  category: 'Law Practice Management Software'
                },
                {
                  '@type': 'Product',
                  name: 'TimeSolv',
                  category: 'Law Practice Management Software'
                }
              ],
              inLanguage: ['es', 'en'],
              softwareVersion: '1.0.0',
              publisher: {
                '@id': 'https://lex-bell.com/#organization'
              },
              keywords:
                'abogado, abogados, oficina de abogado, oficina de abogados, bufete de abogados, despacho juridico, firma legal, abogado independiente, abogado litigante, app para abogado, app para abogados, programa para abogado, programa para abogados, software abogado, software para abogados, como ser mas eficiente siendo abogado, como organizar una oficina de abogados, como gestionar casos, como organizar expedientes, como llevar casos de clientes, sistema para llevar casos legales, productividad para abogados, control de expedientes judiciales, organizador de pleitos y juicios, sustituto de excel para abogados, calculadora plazos judiciales, calculo plazos procesales dias habiles, programa tramites visas inmigracion, software contratos alquiler compraventa, alternativa a clio, alternativa a mycase, alternativa a practicepanther, alternativa a smokeball, alternativa a filevine, alternativa a sudespacho, alternativa a quolaw, lexbell, lexbel, lex bel, lex bell, lex-bell, lexb, legal practice management software offline, solo attorney productivity',
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
                validFrom: '2024-01-01',
                priceValidUntil: '2028-12-31',
                itemCondition: 'https://schema.org/NewCondition',
                availability: 'https://schema.org/InStock',
                url: 'https://lex-bell.com/#descargar',
                description: 'Free tier up to 50 active cases',
                shippingDetails: {
                  '@type': 'OfferShippingDetails',
                  shippingRate: {
                    '@type': 'MonetaryAmount',
                    value: '0',
                    currency: 'USD'
                  },
                  shippingDestination: {
                    '@type': 'DefinedRegion',
                    addressCountry: ['DO', 'US', 'ES']
                  },
                  deliveryTime: {
                    '@type': 'ShippingDeliveryTime',
                    handlingTime: {
                      '@type': 'QuantitativeValue',
                      minValue: 0,
                      maxValue: 0,
                      unitCode: 'DAY'
                    },
                    transitTime: {
                      '@type': 'QuantitativeValue',
                      minValue: 0,
                      maxValue: 0,
                      unitCode: 'DAY'
                    }
                  }
                },
                hasMerchantReturnPolicy: {
                  '@type': 'MerchantReturnPolicy',
                  applicableCountry: ['DO', 'US', 'ES'],
                  returnPolicyCategory: 'https://schema.org/MerchantReturnNotPermitted',
                  merchantReturnLink: 'https://lex-bell.com/terminos/'
                }
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
                  name: 'Planes y precios',
                  description: 'Compara planes y precios de Lexbell. Nivel gratuito de hasta 50 casos y licencias de por vida sin cuotas mensuales.',
                  url: 'https://lex-bell.com/precios/'
                },
                {
                  '@type': 'SiteNavigationElement',
                  position: 2,
                  name: 'Características del software',
                  description: 'Gestión de expedientes, cálculo de plazos judiciales, directorio de clientes y documentos 100% locales sin nube.',
                  url: 'https://lex-bell.com/caracteristicas/'
                },
                {
                  '@type': 'SiteNavigationElement',
                  position: 3,
                  name: 'Alternativa a Clio',
                  description: 'Descubre por qué Lexbell es la mejor alternativa offline y sin suscripción mensual a Clio, MyCase y PracticePanther.',
                  url: 'https://lex-bell.com/alternativa-clio/'
                },
                {
                  '@type': 'SiteNavigationElement',
                  position: 4,
                  name: 'Calculadora de plazos procesales',
                  description: 'Herramienta procesal para calcular términos y vencimientos judiciales en días hábiles y naturales sin errores.',
                  url: 'https://lex-bell.com/calculadora-plazos/'
                },
                {
                  '@type': 'SiteNavigationElement',
                  position: 5,
                  name: 'Soluciones por especialidad',
                  description: 'Software adaptado para despachos civiles, penalistas, consultores de inmigración y gestores inmobiliarios.',
                  url: 'https://lex-bell.com/soluciones/'
                },
                {
                  '@type': 'SiteNavigationElement',
                  position: 6,
                  name: 'Preguntas frecuentes',
                  description: 'Respuestas sobre privacidad local, funcionamiento sin internet, copias de seguridad y compatibilidad Mac y Windows.',
                  url: 'https://lex-bell.com/faq/'
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
                  name: 'Pricing & Plans',
                  description: 'Compare Lexbell plans. Free tier up to 50 active cases and lifetime licenses without monthly fees.',
                  url: 'https://lex-bell.com/en/pricing/'
                },
                {
                  '@type': 'SiteNavigationElement',
                  position: 2,
                  name: 'Software Features',
                  description: 'Case management, court deadline calculator, client directory, and 100% local offline document storage.',
                  url: 'https://lex-bell.com/en/features/'
                },
                {
                  '@type': 'SiteNavigationElement',
                  position: 3,
                  name: 'Clio Alternative',
                  description: 'See why Lexbell is the top offline-first, subscription-free alternative to Clio, MyCase, and PracticePanther.',
                  url: 'https://lex-bell.com/en/clio-alternative/'
                },
                {
                  '@type': 'SiteNavigationElement',
                  position: 4,
                  name: 'Court Deadline Calculator',
                  description: 'Legal deadline calculator for court terms, business days, and judicial statutory limits without errors.',
                  url: 'https://lex-bell.com/en/deadline-calculator/'
                },
                {
                  '@type': 'SiteNavigationElement',
                  position: 5,
                  name: 'Practice Solutions',
                  description: 'Tailored workflows for litigation attorneys, immigration consultants, and real estate legal managers.',
                  url: 'https://lex-bell.com/en/solutions/'
                },
                {
                  '@type': 'SiteNavigationElement',
                  position: 6,
                  name: 'Frequently Asked Questions',
                  description: 'Answers about offline privacy, zero cloud exposure, local backups, and Mac/Windows compatibility.',
                  url: 'https://lex-bell.com/en/faq/'
                }
              ]
            }
          ]
        })
      }
    ]
  })
})
