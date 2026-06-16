<script setup lang="ts">
withDefaults(defineProps<{ href?: string; small?: boolean }>(), {
  href: 'https://apps.apple.com/app/lexcase/id0000000000',
  small: false
})

const { t, locale } = useI18n()
</script>

<template>
  <a
    :href="href"
    class="store-badge"
    :class="small ? 'store-badge-sm' : ''"
    rel="noopener"
    :aria-label="locale === 'es' ? 'Descargar en la Mac App Store' : 'Download on the Mac App Store'"
  >
    <svg
      class="store-badge-icon"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
    <span class="store-badge-text">
      <span class="store-badge-sup">{{ locale === 'es' ? 'Descargar en la' : 'Download on the' }}</span>
      <span class="store-badge-main">Mac App Store</span>
    </span>
  </a>
</template>

<style scoped>
.store-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  height: 50px;
  padding: 0 16px 0 14px;
  border-radius: 10px;
  background: #000;
  color: #fff;
  border: 1px solid #000;
  transition: background .15s ease;
  text-decoration: none;
  white-space: nowrap;
}
.store-badge:hover { background: #1a1a1a; }
.store-badge-sm { height: 42px; padding: 0 13px 0 11px; border-radius: 8px; }

.store-badge-icon { width: 26px; height: 26px; flex-shrink: 0; }
.store-badge-sm .store-badge-icon { width: 22px; height: 22px; }

.store-badge-text {
  display: flex;
  flex-direction: column;
  line-height: 1.05;
  letter-spacing: -0.005em;
}
.store-badge-sup {
  font-size: 10px;
  font-weight: 400;
  opacity: 0.95;
  margin-bottom: 2px;
}
.store-badge-main {
  font-size: 19px;
  font-weight: 500;
  letter-spacing: -0.01em;
}
.store-badge-sm .store-badge-sup { font-size: 9px; }
.store-badge-sm .store-badge-main { font-size: 16px; }
</style>
