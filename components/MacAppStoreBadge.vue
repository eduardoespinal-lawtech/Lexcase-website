<script setup lang="ts">
withDefaults(defineProps<{ href?: string }>(), {
  href: 'https://apps.apple.com/'
})

const { locale } = useI18n()

/* Imagen oficial servida desde el CDN de Apple. */
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
/* Caja idéntica al badge de Microsoft (220×60). La imagen oficial se ajusta
   dentro con object-fit contain sin distorsionar. */
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
.store-badge img {
  display: block;
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
}
</style>
