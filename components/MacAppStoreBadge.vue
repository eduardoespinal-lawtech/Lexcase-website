<script setup lang="ts">
withDefaults(defineProps<{ href?: string }>(), {
  href: 'https://apps.apple.com/'
})

const { locale } = useI18n()

// Apple official badge image. Locale: en-us | es-es
const badgeSrc = computed(() => {
  const loc = locale.value === 'es' ? 'es-es' : 'en-us'
  return `https://tools.applemediaservices.com/api/badges/download-on-the-mac-app-store/black/${loc}?releaseDate=1750982400`
})

const alt = computed(() =>
  locale.value === 'es' ? 'Descargar en la Mac App Store' : 'Download on the Mac App Store'
)
</script>

<template>
  <span class="store-badge-wrapper">
    <a
      :href="href"
      class="store-link"
      rel="noopener"
      target="_blank"
      :aria-label="alt"
    >
      <img :src="badgeSrc" :alt="alt" />
    </a>
  </span>
</template>

<style scoped>
.store-badge-wrapper {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}
.store-link {
  display: inline-block;
  line-height: 0;
  transition: transform .2s ease;
}
.store-link:hover { transform: translateY(-1px); }
.store-link img {
  display: block;
  height: 40px;
  width: auto;
}
</style>
