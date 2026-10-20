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

const userOs = ref<'mac' | 'windows' | 'other'>('other')

onMounted(() => {
  if (typeof window !== 'undefined' && window.navigator) {
    const ua = window.navigator.userAgent || ''
    if (/Macintosh|MacIntel|MacPPC|Mac68K|Mac OS X/i.test(ua)) {
      userOs.value = 'mac'
    } else if (/Win32|Win64|Windows/i.test(ua)) {
      userOs.value = 'windows'
    }
  }
})

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
    <!-- Action buttons row with official badges -->
    <div class="store-buttons">
      <!-- Apple Mac App Store Official Badge -->
      <div class="badge-item">
        <a
          :href="appleUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="official-badge-link"
          :class="{ 'is-os-match': userOs === 'mac' }"
          :title="locale === 'en' ? 'Download on the Mac App Store' : 'Consíguelo en el Mac App Store'"
          @click="onStoreClick('apple')"
        >
          <img
            :src="appleBadgeSrc"
            :alt="locale === 'en' ? 'Download on the Mac App Store' : 'Consíguelo en el Mac App Store'"
            class="store-badge-img"
            width="170"
            height="48"
            loading="eager"
          />
        </a>
        <span v-if="userOs === 'mac'" class="os-match-pill">
          {{ t('common.recommendedMac') }}
        </span>
      </div>

      <!-- Microsoft Store Official Badge -->
      <div class="badge-item">
        <a
          :href="microsoftUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="official-badge-link"
          :class="{ 'is-os-match': userOs === 'windows' }"
          :title="locale === 'en' ? 'Get it from Microsoft' : 'Obtener de Microsoft'"
          @click="onStoreClick('microsoft')"
        >
          <img
            :src="msBadgeSrc"
            :alt="locale === 'en' ? 'Get it from Microsoft' : 'Obtener de Microsoft'"
            class="store-badge-img"
            width="175"
            height="48"
            loading="eager"
          />
        </a>
        <span v-if="userOs === 'windows'" class="os-match-pill">
          {{ t('common.recommendedWin') }}
        </span>
      </div>
    </div>

    <!-- Pricing and Trust micro-copy -->
    <div v-if="!compact" class="store-info">
      <div class="store-info-pill">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20 6 9 17l-5-5"/>
        </svg>
        <span>{{ t('common.pricingNote') }}</span>
      </div>
      <p class="store-info-sub">{{ t('common.availabilityNote') }}</p>
    </div>
  </div>
</template>

<style scoped>
.app-download-wrap {
  display: inline-flex;
  flex-direction: column;
  gap: 16px;
}
.app-download-wrap.is-center {
  align-items: center;
  text-align: center;
}

.store-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 16px 20px;
  align-items: center;
  justify-content: center;
}

.badge-item {
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
}

.official-badge-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease, filter 0.2s ease;
  user-select: none;
  text-decoration: none;
  line-height: 0;
}

.official-badge-link:hover {
  transform: translateY(-2px);
  filter: brightness(1.08);
}

.official-badge-link:active {
  transform: translateY(0);
}

.official-badge-link.is-os-match {
  box-shadow: 0 0 0 2px #0066cc, 0 8px 24px rgba(0, 102, 204, 0.25);
}

.store-badge-img {
  height: 48px;
  width: auto;
  display: block;
  border-radius: 8px;
}

.os-match-pill {
  margin-top: 8px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background: #e6f0fa;
  color: #0066cc;
  border: 1px solid rgba(0, 102, 204, 0.2);
  padding: 3px 9px;
  border-radius: 999px;
}

/* Store info */
.store-info {
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: center;
}

.store-info-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 500;
  color: #37352F;
  background: #F1F1EF;
  padding: 5px 14px;
  border-radius: 999px;
  border: 1px solid #E5E5E3;
}

.app-download-wrap.is-light .store-info-pill {
  color: #CFE4FF;
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
}

.store-info-sub {
  margin: 0;
  font-size: 12.5px;
  color: #787774;
  letter-spacing: -0.005em;
}

.app-download-wrap.is-light .store-info-sub {
  color: rgba(255, 255, 255, 0.7);
}

@media (max-width: 640px) {
  .store-buttons {
    flex-direction: column;
    width: 100%;
    gap: 14px;
  }
  .store-badge-img {
    height: 44px;
  }
}
</style>
