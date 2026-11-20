<script setup lang="ts">
const { locale } = useI18n()
const isEn = computed(() => locale.value === 'en')

definePageMeta({ name: 'calculadora-plazos-espana' })

const pageTitle = computed(() =>
  isEn.value
    ? 'Spain Court Deadline Calculator (Business Days · LEC & LPACAP) — Lexbell'
    : 'Calculadora de Plazos Procesales en España (Días Hábiles · LEC y LPACAP) — Lexbell'
)

const pageDesc = computed(() =>
  isEn.value
    ? 'Calculate judicial and administrative deadlines in Spain excluding Saturdays, Sundays, and Spanish national holidays.'
    : 'Calcula plazos procesales y administrativos en España en días hábiles, excluyendo sábados, domingos y festivos nacionales (art. 130 LEC y art. 30 LPACAP).'
)

const notes = computed(() => [
  {
    title: isEn.value ? 'Business Days in Spain (Art. 130 LEC / Art. 30 LPACAP)' : 'Días Hábiles en España (LEC y LPACAP)',
    body: isEn.value
      ? 'Saturdays, Sundays, and national holidays in Spain are excluded. The computation starts the day following notification.'
      : 'Se excluyen sábados, domingos y festivos nacionales en España. El cómputo inicia al día siguiente de la notificación o acto.'
  },
  {
    title: isEn.value ? 'August & Regional Holidays' : 'Agosto Inhábil y Festivos Autonómicos',
    body: isEn.value
      ? 'Add local/regional holidays or August judicial recess days using the additional non-working days picker when applicable.'
      : 'Puedes añadir festivos autonómicos, locales o días inhábiles de agosto en el selector de asuetos adicionales.'
  }
])

const faqs = computed(() => [
  {
    q: isEn.value ? 'Are Saturdays counted as business days in Spain?' : '¿Se cuentan los sábados como días hábiles en España?',
    a: isEn.value
      ? 'No. Both under civil procedure (LEC) and administrative procedure (Law 39/2015), Saturdays, Sundays, and public holidays are non-working days.'
      : 'No. Tanto en la Ley de Enjuiciamiento Civil (art. 130) como en la Ley 39/2015 (art. 30), los sábados, domingos y festivos son inhábiles.'
  },
  {
    q: isEn.value ? 'How can I include regional or municipal holidays in Spain?' : '¿Cómo añado festivos autonómicos o de mi partido judicial?',
    a: isEn.value
      ? 'Spain national holidays (ES) load automatically. Use the additional non-working days selector to add autonomous community or municipal holidays.'
      : 'Los festivos nacionales de España (ES) se cargan automáticamente. Usa el selector de feriados adicionales para añadir los días festivos de tu comunidad autónoma o municipio.'
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
    default-country="ES"
    default-type="business"
    :eyebrow="isEn ? 'SPAIN · PROCEDURAL DEADLINES' : 'ESPAÑA · PLAZOS PROCESALES'"
    :title="isEn ? 'Spain Court Deadline Calculator' : 'Calculadora de Plazos Procesales en España'"
    :subtitle="isEn
      ? 'Compute business-day judicial and administrative deadlines in Spain with national holidays preloaded.'
      : 'Calcula términos judiciales y administrativos en días hábiles en España con los festivos nacionales precargados.'"
    :jurisdiction-notes="notes"
    :custom-faqs="faqs"
  />
</template>
