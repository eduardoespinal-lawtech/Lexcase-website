<script setup lang="ts">
withDefaults(defineProps<{ light?: boolean; center?: boolean }>(), {
  light: false,
  center: false
})
const { t } = useI18n()
</script>

<template>
  <div class="app-download" :class="center ? 'is-center' : ''">
    <p class="app-download-stores" :class="light ? 'is-light' : ''">{{ t('common.availableStores') }}</p>
    <p class="app-download-note" :class="light ? 'is-light' : ''">{{ t('common.availabilityNote') }}</p>
  </div>
</template>

<style scoped>
.app-download {
  display: inline-flex;
  flex-direction: column;
  gap: 6px;
}
.app-download.is-center { align-items: center; text-align: center; }
.app-download-stores {
  margin: 0;
  font-size: 17px;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: var(--text);
}
.app-download-stores.is-light { color: #fff; }
.app-download-note {
  margin: 0;
  font-size: 13px;
  letter-spacing: -0.005em;
  color: var(--text-muted);
}
.app-download-note.is-light { color: rgba(255, 255, 255, 0.6); }
</style>
