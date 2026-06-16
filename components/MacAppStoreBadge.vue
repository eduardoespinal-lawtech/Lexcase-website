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
/* Both store badges use the exact same button box dimensions so they are
   perfectly aligned and visually identical in size. The badge artwork is
   centered inside via object-fit, preserving its native aspect ratio. */
.store-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 52px;
  border-radius: 10px;
  background: #000;
  overflow: hidden;
  transition: transform .2s ease;
  vertical-align: middle;
}
.store-button:hover { transform: translateY(-1px); }
.store-button img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
