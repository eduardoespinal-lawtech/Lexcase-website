<script setup lang="ts">
const { locale } = useI18n()
const isEn = computed(() => locale.value === 'en')

definePageMeta({ name: 'calculadora-plazos-colombia' })

const pageTitle = computed(() =>
  isEn.value
    ? 'Colombia Court Deadline Calculator (Business Days · CGP & CPACA) — Lexbell'
    : 'Calculadora de Términos Judiciales en Colombia (Días Hábiles · CGP y CPACA) — Lexbell'
)

const pageDesc = computed(() =>
  isEn.value
    ? 'Calculate procedural deadlines in Colombia in business days excluding weekends and Colombian holidays (Ley Emiliani).'
    : 'Calcula términos judiciales y administrativos en Colombia en días hábiles, excluyendo fines de semana y festivos oficiales de Colombia (CO).'
)

const notes = computed(() => [
  {
    title: isEn.value ? 'Colombian Business Days (CGP & CPACA)' : 'Términos en Días Hábiles (CGP y CPACA)',
    body: isEn.value
      ? 'Excludes Saturdays, Sundays, and Colombian national holidays (including Monday-shifted Ley Emiliani holidays).'
      : 'Excluye sábados, domingos y festivos nacionales en Colombia (incluidos los festivos trasladados a lunes por la Ley Emiliani).'
  },
  {
    title: isEn.value ? 'Judicial Holidays & Suspensions' : 'Vacancia Judicial y Suspensiones',
    body: isEn.value
      ? 'Add Rama Judicial vacation days (such as Semana Santa or year-end recess) using the additional non-working days selector.'
      : 'Añade días de vacancia judicial (Semana Santa o cierre de fin de año) mediante el selector de feriados adicionales.'
  }
])

const faqs = computed(() => [
  {
    q: isEn.value ? 'Does it automatically exclude Colombia’s Monday holidays?' : '¿Excluye automáticamente los festivos trasladados de Colombia?',
    a: isEn.value
      ? 'Yes. Colombia (CO) is pre-selected and loads the official calendar of Colombian national holidays for the calculation year.'
      : 'Sí. Colombia (CO) viene preseleccionado y carga automáticamente el calendario oficial de festivos nacionales del año en curso.'
  },
  {
    q: isEn.value ? 'How do I account for judicial recess (vacancia judicial)?' : '¿Cómo incluyo la vacancia judicial de la Rama Judicial?',
    a: isEn.value
      ? 'Use the additional non-working days picker to add any judicial closure dates so they are skipped in the day-by-day breakdown.'
      : 'Usa el selector de asuetos adicionales para agregar las fechas de vacancia judicial o suspensión de términos.'
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
    default-country="CO"
    default-type="business"
    :eyebrow="isEn ? 'COLOMBIA · PROCEDURAL TERMS' : 'COLOMBIA · TÉRMINOS JUDICIALES'"
    :title="isEn ? 'Colombia Court Deadline Calculator' : 'Calculadora de Términos Judiciales en Colombia'"
    :subtitle="isEn
      ? 'Compute business-day judicial and administrative terms in Colombia with national holidays preloaded.'
      : 'Calcula términos procesales en días hábiles en Colombia con los festivos oficiales precargados.'"
    :jurisdiction-notes="notes"
    :custom-faqs="faqs"
  />
</template>
