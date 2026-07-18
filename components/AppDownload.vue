<script setup lang="ts">
withDefaults(defineProps<{ light?: boolean; compact?: boolean; center?: boolean }>(), {
  light: false,
  compact: false,
  center: false
})
const { t } = useI18n()
</script>

<template>
  <div class="app-download" :class="center ? 'is-center' : ''">
    <div class="app-download-badges">
      <MacAppStoreBadge :light="light" :compact="compact" />
      <MicrosoftStoreBadge coming-soon :light="light" :compact="compact" />
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
.app-download-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}
.app-download.is-center .app-download-badges { justify-content: center; }
.app-download-note {
  margin: 0;
  font-size: 13px;
  letter-spacing: -0.005em;
  color: var(--text-muted);
}
.app-download-note.is-light { color: rgba(255, 255, 255, 0.6); }
</style>
