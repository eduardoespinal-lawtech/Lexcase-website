<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    light?: boolean
    center?: boolean
    compact?: boolean
  }>(),
  {
    light: false,
    center: false,
    compact: false
  }
)

const { t, locale } = useI18n()
const config = useRuntimeConfig()
const { trackDownload } = useAnalytics()

const appleUrl = computed(() => config.public.appleStoreUrl || 'https://apps.apple.com/do/app/lexbell-expedientes-legales/id6791787627?mt=12')
const microsoftUrl = computed(() => config.public.microsoftStoreUrl || 'https://apps.microsoft.com/detail/9NLZXP46J9G2')

const onStoreClick = (platform: 'apple' | 'microsoft') => {
  trackDownload(platform)
}

const appleBadgeSrc = computed(() => {
  return locale.value === 'en' ? '/mac-app-store-badge-en.svg' : '/mac-app-store-badge-es.svg'
})

const msBadgeSrc = computed(() => {
  return locale.value === 'en' ? '/microsoft-store-badge.svg' : '/microsoft-store-badge-es.svg'
})
</script>

<template>
  <div class="app-download-wrap" :class="{ 'is-center': center, 'is-light': light, 'is-compact': compact }">
    <!-- Store Badges Row -->
    <div class="store-buttons">
      <!-- Apple Mac App Store Official Badge -->
      <a
        :href="appleUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="store-badge-link"
        :title="locale === 'en' ? 'Download on the Mac App Store' : 'Consíguelo en el Mac App Store'"
        @click="onStoreClick('apple')"
      >
        <img
          :src="appleBadgeSrc"
          :alt="locale === 'en' ? 'Download on the Mac App Store' : 'Consíguelo en el Mac App Store'"
          class="store-badge-img"
          width="160"
          height="42"
          loading="eager"
        />
      </a>

      <!-- Microsoft Store Official Badge -->
      <a
        :href="microsoftUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="store-badge-link"
        :title="locale === 'en' ? 'Get it from Microsoft' : 'Obtener de Microsoft'"
        @click="onStoreClick('microsoft')"
      >
        <img
          :src="msBadgeSrc"
          :alt="locale === 'en' ? 'Get it from Microsoft' : 'Obtener de Microsoft'"
          class="store-badge-img"
          width="160"
          height="42"
          loading="eager"
        />
      </a>
    </div>
  </div>
</template>

<style scoped>
.app-download-wrap {
  display: inline-flex;
  flex-direction: column;
  gap: 12px;
}
.app-download-wrap.is-center {
  align-items: center;
  text-align: center;
}

.store-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 16px;
  align-items: center;
  justify-content: center;
}

.store-badge-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  text-decoration: none;
  line-height: 0;
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s ease;
  user-select: none;
}

.store-badge-link:hover {
  transform: translateY(-2px);
  opacity: 0.92;
}

.store-badge-link:active {
  transform: translateY(0);
}

.store-badge-img {
  height: 42px;
  width: auto;
  display: block;
  border-radius: 6px;
}

@media (max-width: 640px) {
  .store-buttons {
    flex-direction: column;
    width: 100%;
    gap: 10px;
  }
  .store-badge-img {
    height: 40px;
  }
}
</style>
