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

const { t } = useI18n()
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
</script>

<template>
  <div class="app-download-wrap" :class="{ 'is-center': center, 'is-light': light, 'is-compact': compact }">
    <!-- Action buttons row -->
    <div class="store-buttons">
      <!-- Apple App Store Button -->
      <a
        :href="appleUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="store-badge store-badge-apple"
        :class="{ 'is-detected': userOs === 'mac' }"
        :title="t('common.downloadApplePrefix') + ' ' + t('common.downloadApple')"
        @click="onStoreClick('apple')"
      >
        <span class="store-icon" aria-hidden="true">
          <!-- Apple SVG Icon -->
          <svg width="22" height="26" viewBox="0 0 170 170" fill="currentColor">
            <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.69-7.74-11.97-14.1-6.19-9.23-11.08-19.78-14.67-31.64-3.59-11.86-5.39-23.01-5.39-33.45 0-14.34 3.73-26.04 11.19-35.11 7.45-9.06 16.71-13.68 27.78-13.85 4.8 0 10.11 1.25 15.93 3.76 5.82 2.5 9.7 3.79 11.64 3.86 1.52 0 5.68-1.39 12.48-4.16 6.8-2.77 12.44-3.99 16.92-3.66 12.51.98 22.42 5.58 29.74 13.8-10.96 6.64-16.32 15.7-16.08 27.18.23 9.02 3.65 16.58 10.26 22.68 6.61 6.1 14.37 9.53 23.27 10.28-2.6 7.63-5.83 15.35-9.7 23.16zM119.22 33.15c0-7.27 2.65-14.07 7.95-20.39 5.3-6.32 11.83-10.42 19.59-12.3-.23 1.3-.41 2.37-.54 3.2-.87 7.07-3.8 13.73-8.8 19.98-5 6.25-11.36 10.15-19.08 11.7-.12-.76-.23-1.42-.32-2.19h-.8z"/>
          </svg>
        </span>
        <span class="store-text">
          <span class="store-prefix">{{ t('common.downloadApplePrefix') }}</span>
          <span class="store-name">{{ t('common.downloadApple') }}</span>
        </span>
        <span v-if="userOs === 'mac'" class="store-badge-tag" :title="t('common.recommendedMac')">
          {{ t('common.recommendedMac') }}
        </span>
      </a>

      <!-- Microsoft Store Button -->
      <a
        :href="microsoftUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="store-badge store-badge-ms"
        :class="{ 'is-detected': userOs === 'windows' }"
        :title="t('common.downloadMicrosoftPrefix') + ' ' + t('common.downloadMicrosoft')"
        @click="onStoreClick('microsoft')"
      >
        <span class="store-icon ms-icon" aria-hidden="true">
          <!-- Microsoft SVG Icon (Windows 4-tiles) -->
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="2" width="9.2" height="9.2" rx="1" fill="#F25022"/>
            <rect x="12.8" y="2" width="9.2" height="9.2" rx="1" fill="#7FBA00"/>
            <rect x="2" y="12.8" width="9.2" height="9.2" rx="1" fill="#00A4EF"/>
            <rect x="12.8" y="12.8" width="9.2" height="9.2" rx="1" fill="#FFB900"/>
          </svg>
        </span>
        <span class="store-text">
          <span class="store-prefix">{{ t('common.downloadMicrosoftPrefix') }}</span>
          <span class="store-name">{{ t('common.downloadMicrosoft') }}</span>
        </span>
        <span v-if="userOs === 'windows'" class="store-badge-tag" :title="t('common.recommendedWin')">
          {{ t('common.recommendedWin') }}
        </span>
      </a>
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
  gap: 14px;
}
.app-download-wrap.is-center {
  align-items: center;
  text-align: center;
}

.store-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  align-items: center;
  justify-content: center;
}

/* Base Store Badge Styling */
.store-badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 10px 18px;
  border-radius: 12px;
  text-decoration: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.12);
  user-select: none;
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.store-badge:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.24);
}

.store-badge:active {
  transform: translateY(0);
}

/* Apple Badge Dark High-End Style */
.store-badge-apple {
  background: #000000;
  color: #ffffff;
}
.store-badge-apple:hover {
  background: #111111;
  border-color: rgba(255, 255, 255, 0.35);
}

/* Microsoft Badge Dark High-End Style */
.store-badge-ms {
  background: #0f172a;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.16);
}
.store-badge-ms:hover {
  background: #1e293b;
  border-color: rgba(56, 189, 248, 0.45);
}

/* Tag for detected OS */
.store-badge.is-detected {
  ring: 2px solid #38bdf8;
  box-shadow: 0 0 0 2px rgba(56, 189, 248, 0.4), 0 8px 24px rgba(0, 0, 0, 0.28);
}

.store-badge-tag {
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background: rgba(56, 189, 248, 0.2);
  color: #38bdf8;
  border: 1px solid rgba(56, 189, 248, 0.4);
  padding: 2px 7px;
  border-radius: 999px;
  margin-left: 2px;
}

.store-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.store-text {
  display: flex;
  flex-direction: column;
  text-align: left;
  line-height: 1.15;
}

.store-prefix {
  font-size: 11px;
  font-weight: 400;
  letter-spacing: -0.01em;
  opacity: 0.82;
}

.store-name {
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.02em;
}

/* Store info */
.store-info {
  display: flex;
  flex-direction: column;
  gap: 5px;
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
  padding: 4px 14px;
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
  }
  .store-badge {
    width: 100%;
    justify-content: center;
  }
}
</style>
