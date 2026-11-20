<script setup lang="ts">
const { locale } = useI18n()
const isEn = computed(() => locale.value === 'en')

definePageMeta({ name: 'calculadora-plazos' })

const pageTitle = computed(() =>
  isEn.value
    ? 'Court Deadline Calculator (Business Days) — Lexbell'
    : 'Cómputo de Plazos Procesales en Días Hábiles — Lexbell'
)

const pageDesc = computed(() =>
  isEn.value
    ? 'Compute exact court procedural expiration dates in business days excluding weekends and judicial holidays with exact expiration dates.'
    : 'Calcula con rigor el vencimiento exacto de tus términos judiciales en días hábiles excluyendo fines de semana con desglose día a día.'
)

useHead(() => ({
  title: pageTitle.value,
  meta: [
    { name: 'description', content: pageDesc.value },
    { property: 'og:title', content: pageTitle.value },
    { property: 'og:description', content: pageDesc.value },
    { name: 'twitter:title', content: pageTitle.value },
    { name: 'twitter:description', content: pageDesc.value }
  ]
}))
</script>

<template>
  <DeadlineCalculator />
</template>
