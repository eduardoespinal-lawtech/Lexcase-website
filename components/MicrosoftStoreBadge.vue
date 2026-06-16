<script setup lang="ts">
withDefaults(defineProps<{ href?: string; comingSoon?: boolean }>(), {
  href: 'https://apps.microsoft.com/',
  comingSoon: true
})

const { locale } = useI18n()

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
/* Caja idéntica al badge de Apple — misma huella exacta. */
/* Caja idéntica a la huella natural del badge de Apple a height 72px.
   - Apple SVG ratio 3.9025 (156.10054/40) → ancho natural 72 × 3.9025 = 281px.
   - Microsoft SVG ratio 3.6591 (161/44) — más estrecho de fábrica.
   Forzamos a Microsoft a 281×72 con object-fit contain para que el bounding
   box sea idéntico al Apple. El SVG queda centrado dentro sin distorsión. */
.store-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 281px;
  height: 72px;
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
