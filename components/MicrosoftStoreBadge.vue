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
/* Misma altura exacta que el badge de Apple. Sin compensaciones. */
.store-badge {
  display: inline-flex;
  align-items: center;
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
  height: 72px;
  width: auto;
}
</style>
