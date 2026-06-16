<script setup lang="ts">
withDefaults(defineProps<{ href?: string; comingSoon?: boolean }>(), {
  href: 'https://apps.microsoft.com/',
  comingSoon: true
})

const { locale } = useI18n()

const supLabel = computed(() => locale.value === 'es' ? 'Obtener en' : 'Get it from')
const mainLabel = 'Microsoft'
const ariaLabel = computed(() => `${supLabel.value} ${mainLabel}`)
</script>

<template>
  <a
    :href="comingSoon ? undefined : href"
    class="store-badge"
    :class="comingSoon ? 'is-disabled' : ''"
    rel="noopener"
    target="_blank"
    :aria-label="comingSoon ? `${ariaLabel} — ${locale === 'es' ? 'próximamente' : 'coming soon'}` : ariaLabel"
    :tabindex="comingSoon ? -1 : undefined"
  >
    <span class="store-badge-inner">
      <svg
        class="store-badge-icon"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <rect x="2"  y="2"  width="9.2" height="9.2" fill="currentColor" />
        <rect x="12.8" y="2"  width="9.2" height="9.2" fill="currentColor" />
        <rect x="2"  y="12.8" width="9.2" height="9.2" fill="currentColor" />
        <rect x="12.8" y="12.8" width="9.2" height="9.2" fill="currentColor" />
      </svg>
      <span class="store-badge-text">
        <span class="store-badge-sup">{{ supLabel }}</span>
        <span class="store-badge-main">{{ mainLabel }}</span>
      </span>
    </span>
  </a>
</template>

<style scoped>
/* Pill custom — dimensiones IDÉNTICAS al badge de Apple.
   Mismo padding, mismo gap, mismo line-height, mismo tipografía. */
.store-badge {
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  width: 220px;
  height: 60px;
  padding: 0 18px;
  border-radius: 12px;
  background: #000;
  color: #fff;
  border: 1px solid #000;
  text-decoration: none;
  vertical-align: middle;
  transition: transform .2s ease, background .15s ease;
  white-space: nowrap;
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Segoe UI Variable', system-ui, sans-serif;
}
.store-badge:hover {
  background: #1a1a1a;
  transform: translateY(-1px);
}
.is-disabled {
  pointer-events: none;
  cursor: default;
}
.store-badge-inner {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  width: 100%;
}
.store-badge-icon {
  width: 26px;
  height: 26px;
  flex-shrink: 0;
}
.store-badge-text {
  display: inline-flex;
  flex-direction: column;
  line-height: 1.05;
  letter-spacing: -0.005em;
  min-width: 0;
}
.store-badge-sup {
  font-size: 11px;
  font-weight: 400;
  opacity: 0.95;
  margin-bottom: 2px;
}
.store-badge-main {
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -0.01em;
}
</style>
