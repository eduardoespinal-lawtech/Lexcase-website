// SoftwareApplication JSON-LD — injected on every page
export default defineNuxtPlugin(() => {
  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'LexCase',
          description:
            'Gestor de expedientes legales nativo para macOS. Expedientes, calendario, clientes y finanzas — todo local en tu Mac.',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'macOS 11+',
          url: 'https://lexcase.com.do',
          inLanguage: ['es', 'en'],
          softwareVersion: '0.1.0',
          publisher: {
            '@type': 'Organization',
            name: 'ICLVS Legal Intelligence LLC',
            email: 'eduardoespinaldeaza@gmail.com',
            url: 'https://lexcase.com.do'
          },
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD'
          }
        })
      }
    ]
  })
})
