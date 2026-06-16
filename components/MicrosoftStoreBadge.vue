<script setup lang="ts">
withDefaults(defineProps<{ href?: string; comingSoon?: boolean }>(), {
  href: 'https://apps.microsoft.com/',
  comingSoon: true
})

const { locale } = useI18n()

// Microsoft official badge image, served from get.microsoft.com.
// Locale segment: en-us | es-es (space encoded as %20)
const badgeSrc = computed(() => {
  const loc = locale.value === 'es' ? 'es' : 'en-us'
  return `https://get.microsoft.com/images/${loc}%20dark.svg`
})

const alt = computed(() =>
  locale.value === 'es' ? 'Obtener en Microsoft Store' : 'Get it from Microsoft'
)
</script>

<template>
  <span class="store-badge-wrapper">
    <a
      :href="comingSoon ? undefined : href"
      class="store-link"
      :class="comingSoon ? 'store-link-disabled' : ''"
      rel="noopener"
      target="_blank"
      :aria-label="comingSoon ? `${alt} — ${locale === 'es' ? 'próximamente' : 'coming soon'}` : alt"
      :tabindex="comingSoon ? -1 : undefined"
    >
      <img :src="badgeSrc" :alt="alt" width="180" />
    </a>
    <span v-if="comingSoon" class="store-caption">
      {{ locale === 'es' ? 'Próximamente' : 'Coming soon' }}
    </span>
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
  transition: transform .2s ease, opacity .2s ease;
}
.store-link:hover { transform: translateY(-1px); }
.store-link img { display: block; width: 180px; height: auto; }
.store-link-disabled {
  pointer-events: none;
  cursor: default;
}
.store-caption {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: #6e6e73;
  text-transform: uppercase;
}
</style>
