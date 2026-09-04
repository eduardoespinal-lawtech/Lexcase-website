// SoftwareApplication JSON-LD — injected on every page
export default defineNuxtPlugin(() => {
  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'Lexbell',
          description:
            'App de escritorio para gestionar expedientes legales: casos, plazos, documentos y notas, todo local en tu equipo. Para Mac y Windows.',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'macOS 12+, Windows 10 and 11',
          url: 'https://lex-bell.com',
          inLanguage: ['es', 'en'],
          softwareVersion: '1.0.0',
          publisher: {
            '@type': 'Organization',
            name: 'Lexbell',
            email: 'support@lex-bell.com',
            url: 'https://lex-bell.com'
          }
        })
      }
    ]
  })
})
