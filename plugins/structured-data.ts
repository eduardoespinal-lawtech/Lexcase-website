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
            'App de escritorio para gestionar expedientes legales: casos, plazos, clientes y finanzas, todo local en tu equipo. Para Mac y Windows.',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'macOS 11+, Windows 10 and 11',
          url: 'https://lex-bell.com',
          inLanguage: ['es', 'en'],
          softwareVersion: '0.1.0',
          publisher: {
            '@type': 'Organization',
            name: 'ICLVS Legal Intelligence LLC',
            email: 'soporte@lex-bell.com',
            url: 'https://lex-bell.com'
          }
        })
      }
    ]
  })
})
