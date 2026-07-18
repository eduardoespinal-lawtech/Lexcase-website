<script setup lang="ts">
withDefaults(defineProps<{ light?: boolean; center?: boolean }>(), {
  light: false,
  center: false
})
const { t } = useI18n()

/* Mac: ficha del App Store. Windows: instalador (GitHub Releases del repo de la app). */
const MAC = 'https://apps.apple.com/us/app/lexbell/id6773133324'
const WIN = 'https://github.com/eduardoespinal-lawtech/LEXBELL/releases/latest'
</script>

<template>
  <div class="app-download" :class="center ? 'is-center' : ''">
    <div class="app-download-links">
      <a
        :href="MAC"
        class="btn-pill"
        :class="light ? 'btn-pill-light' : 'btn-pill-primary'"
        target="_blank"
        rel="noopener"
      >{{ t('common.downloadMac') }}</a>
      <a
        :href="WIN"
        class="btn-pill"
        :class="light ? 'btn-pill-light' : 'btn-pill-primary'"
        target="_blank"
        rel="noopener"
      >{{ t('common.downloadWin') }}</a>
    </div>
    <p class="app-download-note" :class="light ? 'is-light' : ''">{{ t('common.availabilityNote') }}</p>
  </div>
</template>

<style scoped>
.app-download {
  display: inline-flex;
  flex-direction: column;
  gap: 12px;
}
.app-download.is-center { align-items: center; }
.app-download-links {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}
.app-download.is-center .app-download-links { justify-content: center; }
.app-download-note {
  margin: 0;
  font-size: 13px;
  letter-spacing: -0.005em;
  color: var(--text-muted);
}
.app-download-note.is-light { color: rgba(255, 255, 255, 0.6); }
</style>
