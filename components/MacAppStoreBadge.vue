<script setup lang="ts">
withDefaults(defineProps<{ href?: string }>(), {
  href: 'https://apps.apple.com/'
})

const { locale } = useI18n()

const supLabel = computed(() => locale.value === 'es' ? 'Descargar en la' : 'Download on the')
const mainLabel = 'Mac App Store'
const ariaLabel = computed(() => `${supLabel.value} ${mainLabel}`)
</script>

<template>
  <a
    :href="href"
    class="store-badge"
    rel="noopener"
    target="_blank"
    :aria-label="ariaLabel"
  >
    <span class="store-badge-inner">
      <svg
        class="store-badge-icon"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
      </svg>
      <span class="store-badge-text">
        <span class="store-badge-sup">{{ supLabel }}</span>
        <span class="store-badge-main">{{ mainLabel }}</span>
      </span>
    </span>
  </a>
</template>

<style scoped>
/* Pill custom — dimensiones idénticas al badge de Microsoft.
   El layout interno también es 100% el mismo en ambos: padding, gap
   y tamaños de tipografía calzan al píxel. */
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
.store-badge-inner {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  width: 100%;
}
.store-badge-icon {
  width: 28px;
  height: 28px;
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
