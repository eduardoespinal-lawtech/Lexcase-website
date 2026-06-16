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
    class="store-button"
    rel="noopener"
    target="_blank"
    :aria-label="alt"
  >
    <img :src="badgeSrc" :alt="alt" />
  </a>
</template>

<style scoped>
/* Sin fondo propio del contenedor — el SVG oficial de Apple ya trae su
   botón negro con sus propias esquinas redondeadas. Si añadimos un fondo
   adicional al contenedor, aparece una franja/raya alrededor del SVG.
   Solo controlamos la altura; el ancho lo dicta la proporción nativa. */
.store-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 52px;
  background: transparent;
  transition: transform .2s ease;
  vertical-align: middle;
}
.store-button:hover { transform: translateY(-1px); }
.store-button img {
  display: block;
  height: 52px;
  width: auto;
}
</style>
