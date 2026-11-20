<script setup lang="ts">
const { locale } = useI18n()
const isEn = computed(() => locale.value === 'en')

definePageMeta({ name: 'calculadora-plazos-peru' })

const pageTitle = computed(() =>
  isEn.value
    ? 'Peru Court Deadline Calculator (Business Days · CPC & LPAG) — Lexbell'
    : 'Calculadora de Plazos Procesales en Perú (Días Hábiles · CPC y LPAG) — Lexbell'
)

const pageDesc = computed(() =>
  isEn.value
    ? 'Calculate judicial and administrative deadlines in Peru in business days, excluding Saturdays, Sundays, and Peruvian national holidays.'
    : 'Calcula el vencimiento exacto de plazos procesales y administrativos en Perú en días hábiles, excluyendo fines de semana y feriados oficiales de Perú (PE).'
)

const notes = computed(() => [
  {
    title: isEn.value ? 'Peruvian Business Days (CPC & LPAG)' : 'Días Hábiles en Perú (CPC y LPAG)',
    body: isEn.value
      ? 'Excludes Saturdays, Sundays, and Peruvian national holidays (PE), starting on the business day following notification.'
      : 'Excluye sábados, domingos y feriados nacionales en Perú (PE), iniciando el cómputo al día hábil siguiente de la notificación.'
  },
  {
    title: isEn.value ? 'Non-Working Public Sector Days' : 'Días No Laborables y Vacaciones Judiciales',
    body: isEn.value
      ? 'Add government-decreed non-working days or Judicial Branch recess dates using the additional non-working days picker.'
      : 'Añade días no laborables decretados para el sector público o vacaciones judiciales en el selector de feriados adicionales.'
  }
])

const faqs = computed(() => [
  {
    q: isEn.value ? 'Does it include Peru’s national holidays automatically?' : '¿Incluye automáticamente los feriados nacionales de Perú?',
    a: isEn.value
      ? 'Yes. Peru (PE) is pre-selected so official national holidays are excluded from business-day counts.'
      : 'Sí. Perú (PE) viene preseleccionado para descontar automáticamente los feriados oficiales nacionales en el cálculo de días hábiles.'
  },
  {
    q: isEn.value ? 'How can I add non-working days decreed by the government?' : '¿Cómo agrego días no laborables compensables o feriados judiciales?',
    a: isEn.value
      ? 'Use the additional non-working days picker to add any specific date so it is excluded from the deadline calculation.'
      : 'Usa el selector de asuetos adicionales para agregar cualquier fecha no laborable y excluirla del cómputo.'
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
    default-country="PE"
    default-type="business"
    :eyebrow="isEn ? 'PERU · PROCEDURAL DEADLINES' : 'PERÚ · PLAZOS PROCESALES'"
    :title="isEn ? 'Peru Court Deadline Calculator' : 'Calculadora de Plazos Procesales en Perú'"
    :subtitle="isEn
      ? 'Compute business-day judicial and administrative deadlines in Peru with national holidays preloaded.'
      : 'Calcula plazos procesales y administrativos en días hábiles en Perú con los feriados oficiales precargados.'"
    :jurisdiction-notes="notes"
    :custom-faqs="faqs"
  />
</template>
