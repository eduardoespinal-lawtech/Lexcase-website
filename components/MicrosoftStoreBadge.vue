<script setup lang="ts">
withDefaults(defineProps<{ href?: string; comingSoon?: boolean }>(), {
  href: 'https://apps.microsoft.com/',
  comingSoon: true
})

const { locale } = useI18n()

/* Imagen oficial servida desde el CDN de Microsoft. */
const badgeSrc = computed(() => {
  const loc = locale.value === 'es' ? 'es' : 'en-us'
  return `https://get.microsoft.com/images/${loc}%20dark.svg`
})

const alt = computed(() =>
  locale.value === 'es' ? 'Obtener en Microsoft Store' : 'Get it from Microsoft'
)
</script>

<template>
  <a
    :href="comingSoon ? undefined : href"
    class="store-badge"
    :class="comingSoon ? 'is-disabled' : ''"
    rel="noopener"
    target="_blank"
    :aria-label="alt"
    :tabindex="comingSoon ? -1 : undefined"
  >
    <img :src="badgeSrc" :alt="alt" />
  </a>
</template>

<style scoped>
/* Misma caja exacta que Apple (220×60). El SVG oficial de Microsoft tiene
   ratio 3.66 — prácticamente el mismo que 220/60 (3.67), así que llena
   la caja casi por completo sin aire vacío. */
.store-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 220px;
  height: 60px;
  vertical-align: middle;
  transition: transform .2s ease;
  line-height: 0;
}
.store-badge:hover { transform: translateY(-1px); }
.store-badge.is-disabled {
  pointer-events: none;
  cursor: default;
}
.store-badge img {
  display: block;
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
}
</style>
