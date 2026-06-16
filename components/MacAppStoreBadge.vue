<script setup lang="ts">
withDefaults(defineProps<{ href?: string }>(), {
  href: 'https://apps.apple.com/'
})

const { locale } = useI18n()

const badgeSrc = computed(() => {
  const loc = locale.value === 'es' ? 'es-es' : 'en-us'
  return `https://tools.applemediaservices.com/api/badges/download-on-the-mac-app-store/black/${loc}?releaseDate=1750982400`
})

const alt = computed(() =>
  locale.value === 'es' ? 'Descargar en la Mac App Store' : 'Download on the Mac App Store'
)
</script>

<template>
  <a
    :href="href"
    class="store-badge"
    rel="noopener"
    target="_blank"
    :aria-label="alt"
  >
    <img :src="badgeSrc" :alt="alt" />
  </a>
</template>

<style scoped>
/* Tamaño idéntico al badge de Microsoft: mismo ancho fijo, alto natural
   según la proporción nativa del SVG. Aliniados por su centro vertical
   en el contenedor flex padre. Sin fondo, sin borde — el SVG ya lleva
   su propio botón con esquinas redondeadas. */
.store-badge {
  display: inline-block;
  width: 175px;
  line-height: 0;
  transition: transform .2s ease;
  vertical-align: middle;
}
.store-badge:hover { transform: translateY(-1px); }
.store-badge img {
  display: block;
  width: 100%;
  height: auto;
}
</style>
