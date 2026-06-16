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
/* Caja idéntica al badge de Microsoft. Mismo ancho, mismo alto. La imagen
   oficial se ajusta dentro con object-fit contain — sin distorsión y sin
   modificar el arte original. Aliniación perfecta porque ambos botones
   ocupan exactamente la misma huella. */
.store-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 240px;
  height: 68px;
  vertical-align: middle;
  transition: transform .2s ease;
}
.store-badge:hover { transform: translateY(-1px); }
.store-badge img {
  display: block;
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
}
</style>
