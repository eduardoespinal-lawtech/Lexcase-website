<script setup lang="ts">
const { locale } = useI18n()
const isEn = computed(() => locale.value === 'en')

definePageMeta({ name: 'calculadora-plazos-mexico' })

const pageTitle = computed(() =>
  isEn.value
    ? 'Mexico Court Deadline Calculator (Business Days) — Lexbell'
    : 'Calculadora de Plazos Procesales en México (Días Hábiles) — Lexbell'
)

const pageDesc = computed(() =>
  isEn.value
    ? 'Calculate judicial and amparo deadlines in Mexico in business days, excluding weekends and official Mexican holidays.'
    : 'Calcula el vencimiento exacto de términos judiciales, civiles y de amparo en México en días hábiles con los días inhábiles oficiales precargados.'
)

const notes = computed(() => [
  {
    title: isEn.value ? 'Mexican Business-Day Deadlines' : 'Cómputo de Días Hábiles en México',
    body: isEn.value
      ? 'Excludes Saturdays, Sundays, and official Mexican holidays (MX). Adjust if the term starts the day after service.'
      : 'Excluye sábados, domingos y días inhábiles oficiales de México (MX), iniciando el cómputo al día hábil siguiente a que surta efectos la notificación.'
  },
  {
    title: isEn.value ? 'Court Vacations & Extra Suspensions' : 'Periodos Vacacionales y Acuerdos',
    body: isEn.value
      ? 'Add Judicial Branch recess periods or state-specific non-working days using the additional holidays picker.'
      : 'Agrega días de receso del Poder Judicial o acuerdos de suspensión locales en el campo de feriados adicionales.'
  }
])

const faqs = computed(() => [
  {
    q: isEn.value ? 'Does it exclude official holidays in Mexico?' : '¿Excluye automáticamente los días inhábiles oficiales en México?',
    a: isEn.value
      ? 'Yes. Mexico (MX) is pre-selected so national holidays are excluded from business-day calculations.'
      : 'Sí. México (MX) viene preseleccionado para descontar automáticamente los días de descanso obligatorio oficiales.'
  },
  {
    q: isEn.value ? 'Can I add Judicial Branch vacation days?' : '¿Puedo agregar días inhábiles por periodo vacacional del juzgado?',
    a: isEn.value
      ? 'Yes, use the additional non-working days field to include any court recess or local suspension date.'
      : 'Sí, puedes añadir cualquier fecha inhábil adicional en el selector de asuetos para ajustar el cálculo a tu circuito o tribunal local.'
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
    default-country="MX"
    default-type="business"
    :eyebrow="isEn ? 'MEXICO · PROCEDURAL DEADLINES' : 'MÉXICO · PLAZOS PROCESALES'"
    :title="isEn ? 'Mexico Court Deadline Calculator' : 'Calculadora de Plazos Procesales en México'"
    :subtitle="isEn
      ? 'Compute business-day judicial and administrative terms in Mexico with national holidays preloaded.'
      : 'Calcula términos judiciales y administrativos en días hábiles en México con los feriados oficiales precargados.'"
    :jurisdiction-notes="notes"
    :custom-faqs="faqs"
  />
</template>
