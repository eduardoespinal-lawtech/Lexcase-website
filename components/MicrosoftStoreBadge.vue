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
/* Misma caja exacta que Apple (246×82). El SVG oficial de Microsoft trae
   ~12% de padding transparente interno alrededor del botón visible. Lo
   compensamos: la caja recorta cualquier overflow (overflow:hidden) y
   escalamos el SVG por 1.08, lo que efectivamente "muerde" ese padding
   interno y hace que el botón visible llegue al mismo ancho que Apple. */
.store-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 246px;
  height: 82px;
  vertical-align: middle;
  transition: transform .2s ease;
  line-height: 0;
  overflow: hidden;
}
.store-badge:hover { transform: translateY(-1px); }
.store-badge.is-disabled {
  pointer-events: none;
  cursor: default;
}
.store-badge img {
  display: block;
  width: 246px;
  height: 82px;
  object-fit: contain;
  transform: scale(1.08);
  transform-origin: center center;
}
</style>
