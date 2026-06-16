<script setup lang="ts">
withDefaults(defineProps<{ href?: string; comingSoon?: boolean; small?: boolean }>(), {
  href: '#',
  comingSoon: true,
  small: false
})

const { t, locale } = useI18n()
</script>

<template>
  <a
    :href="comingSoon ? undefined : href"
    class="store-badge"
    :class="[small ? 'store-badge-sm' : '', comingSoon ? 'store-badge-disabled' : '']"
    rel="noopener"
    :aria-label="locale === 'es' ? 'Obtener desde Microsoft Store — próximamente' : 'Get it from Microsoft Store — coming soon'"
    :tabindex="comingSoon ? -1 : undefined"
  >
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
      <span class="store-badge-sup">{{ locale === 'es' ? 'Obtener en' : 'Get it from' }}</span>
      <span class="store-badge-main">Microsoft</span>
    </span>
    <span v-if="comingSoon" class="store-badge-tag">
      {{ locale === 'es' ? 'Próximamente' : 'Coming soon' }}
    </span>
  </a>
</template>

<style scoped>
.store-badge {
  position: relative;
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
.store-badge-disabled {
  background: #1d1d1f;
  cursor: default;
  opacity: 0.95;
}
.store-badge-disabled:hover { background: #1d1d1f; }
.store-badge-sm { height: 42px; padding: 0 13px 0 11px; border-radius: 8px; }

.store-badge-icon { width: 22px; height: 22px; flex-shrink: 0; }
.store-badge-sm .store-badge-icon { width: 18px; height: 18px; }

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

.store-badge-tag {
  position: absolute;
  top: -8px;
  right: -8px;
  font-size: 9.5px;
  font-weight: 600;
  padding: 3px 7px;
  border-radius: 999px;
  background: #ffd60a;
  color: #1d1d1f;
  letter-spacing: 0.01em;
}
</style>
