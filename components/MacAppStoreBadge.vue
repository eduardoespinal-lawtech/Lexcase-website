<script setup lang="ts">
withDefaults(defineProps<{ href?: string }>(), {
  href: 'https://apps.apple.com/us/app/lexcase/id6773133324?itscg=30200&itsct=apps_box_badge&mttnsubad=6773133324'
})

const { locale } = useI18n()

/* Imagen oficial servida desde el CDN de Apple Marketing Tools.
   Locale: es-es | en-us. */
const badgeSrc = computed(() => {
  const loc = locale.value === 'es' ? 'es-es' : 'en-us'
  return `https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/black/${loc}?releaseDate=1780012800`
})

const alt = computed(() =>
  locale.value === 'es' ? 'Descargar en el App Store' : 'Download on the App Store'
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
/* Caja idéntica al badge de Microsoft. Imagen oficial encajada con
   object-fit contain. */
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
}
.store-badge:hover { transform: translateY(-1px); }
.store-badge img {
  display: block;
  width: 246px;
  height: 82px;
  object-fit: contain;
}
</style>
