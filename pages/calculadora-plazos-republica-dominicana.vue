<script setup lang="ts">
const { locale } = useI18n()
const isEn = computed(() => locale.value === 'en')

definePageMeta({ name: 'calculadora-plazos-republica-dominicana' })

const pageTitle = computed(() =>
  isEn.value
    ? 'Dominican Republic Court Deadline Calculator (Clear & Business Days) — Lexbell'
    : 'Calculadora de Plazos Procesales en República Dominicana (Días Francos y Hábiles) — Lexbell'
)

const pageDesc = computed(() =>
  isEn.value
    ? 'Calculate procedural deadlines in the Dominican Republic excluding official holidays and weekends, including clear days (días francos) and business days.'
    : 'Calcula el vencimiento exacto de plazos procesales en República Dominicana en días francos y días hábiles, con feriados oficiales de RD precargados.'
)

const notes = computed(() => [
  {
    title: isEn.value ? 'Clear Days (Días Francos · Art. 1033 CPC)' : 'Días Francos (Art. 1033 CPC)',
    body: isEn.value
      ? 'Neither the notification date nor the expiration date counts. If the deadline ends on a weekend or Dominican holiday, it extends to the next business day.'
      : 'No se cuenta el día de la notificación ni el del vencimiento. Si el último día cae en sábado, domingo o feriado oficial en RD, el plazo se prorroga al siguiente día hábil.'
  },
  {
    title: isEn.value ? 'Official Dominican Holidays' : 'Feriados Oficiales de RD',
    body: isEn.value
      ? 'The Dominican Republic (DO) holiday calendar is pre-selected automatically, and you can add extra judicial recesses or local holidays.'
      : 'El calendario de feriados de República Dominicana (DO) viene precargado automáticamente y puedes añadir asuetos del Poder Judicial.'
  }
])

const faqs = computed(() => [
  {
    q: isEn.value ? 'How are clear days (días francos) calculated in the Dominican Republic?' : '¿Cómo se calculan los días francos en República Dominicana?',
    a: isEn.value
      ? 'Under Article 1033 of the Dominican Code of Civil Procedure, neither the day of service nor the last day of the term is counted, and if the expiration falls on a non-working day, it rolls over to the next business day.'
      : 'Conforme al artículo 1033 del Código de Procedimiento Civil dominicano, en los plazos francos no se cuenta el día de la notificación ("dies a quo") ni el del vencimiento ("dies ad quem"), prorrogándose al día hábil siguiente si cae en fin de semana o feriado.'
  },
  {
    q: isEn.value ? 'Does this calculator include Dominican official holidays?' : '¿Incluye los días feriados oficiales de República Dominicana?',
    a: isEn.value
      ? 'Yes. Country DO is pre-selected so national holidays are excluded automatically, and you can add any extraordinary judicial suspension.'
      : 'Sí. El país República Dominicana (DO) viene preseleccionado para excluir automáticamente los feriados nacionales, y puedes agregar suspensiones extraordinarias manualmente.'
  }
])

useHead(() => ({
  title: pageTitle.value,
  meta: [
    { name: 'description', content: pageDesc.value },
    { property: 'og:title', content: pageTitle.value },
    { property: 'og:description', content: pageDesc.value }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: pageTitle.value,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'All',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.value.map(item => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a }
        }))
      })
    }
  ]
}))
</script>

<template>
  <DeadlineCalculator
    default-country="DO"
    default-type="francos"
    :eyebrow="isEn ? 'DOMINICAN REPUBLIC · PROCEDURAL DEADLINES' : 'REPÚBLICA DOMINICANA · PLAZOS PROCESALES'"
    :title="isEn ? 'Dominican Republic Court Deadline Calculator' : 'Calculadora de Plazos Procesales en República Dominicana'"
    :subtitle="isEn
      ? 'Compute clear days (días francos), business days, and calendar deadlines with Dominican holidays preloaded.'
      : 'Calcula plazos en días francos, hábiles o naturales con los feriados oficiales de República Dominicana precargados.'"
    :jurisdiction-notes="notes"
    :custom-faqs="faqs"
  />
</template>
