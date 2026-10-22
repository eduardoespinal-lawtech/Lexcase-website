// SoftwareApplication & WebSite JSON-LD — injected on every page
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
              operatingSystem: 'macOS 12+, Windows 10 and 11',
              url: 'https://lex-bell.com',
              inLanguage: ['es', 'en'],
              softwareVersion: '1.0.0',
              publisher: {
                '@id': 'https://lex-bell.com/#organization'
              }
            }
          ]
        })
      }
    ]
  })
})
