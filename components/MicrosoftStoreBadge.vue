<script setup lang="ts">
const props = withDefaults(defineProps<{ href?: string; comingSoon?: boolean; compact?: boolean; light?: boolean }>(), {
  href: 'https://apps.microsoft.com/',
  comingSoon: true,
  compact: false,
  light: false
})

const { locale } = useI18n()

/* Imagen oficial servida desde el CDN de Microsoft (sin alterar).
   Variante clara sobre fondos oscuros, oscura sobre claros. */
const badgeSrc = computed(() => {
  const loc = locale.value === 'es' ? 'es' : 'en-us'
  const variant = props.light ? 'light' : 'dark'
  return `https://get.microsoft.com/images/${loc}%20${variant}.svg`
})

const alt = computed(() =>
  locale.value === 'es' ? 'Consíguelo en Microsoft Store' : 'Get it from Microsoft'
)
</script>

<template>
  <a
    :href="comingSoon ? undefined : href"
    class="store-badge"
    :class="[comingSoon ? 'is-disabled' : '', compact ? 'is-compact' : '']"
    rel="noopener"
    target="_blank"
    :aria-label="alt"
    :tabindex="comingSoon ? -1 : undefined"
  >
    <img :src="badgeSrc" :alt="alt" />
  </a>
</template>

<style scoped>
/* Misma caja que Apple. El SVG oficial trae ~padding transparente interno;
   overflow:hidden + scale(1.08) lo compensan para igualar el ancho visible. */
.store-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 200px;
  height: 67px;
  vertical-align: middle;
  transition: transform .2s ease;
  line-height: 0;
  overflow: hidden;
}
.store-badge.is-compact { width: 160px; height: 54px; }
.store-badge:hover { transform: translateY(-1px); }
.store-badge.is-disabled {
  pointer-events: none;
  cursor: default;
  opacity: 0.55;
}
.store-badge img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  transform: scale(1.08);
  transform-origin: center center;
}
</style>
