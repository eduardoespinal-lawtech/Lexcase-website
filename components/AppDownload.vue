<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    light?: boolean
    center?: boolean
    compact?: boolean
    showSpecs?: boolean
  }>(),
  {
    light: false,
    center: false,
    compact: false,
    showSpecs: true
  }
)

const { t, locale } = useI18n()
const config = useRuntimeConfig()
const { trackDownload } = useAnalytics()

const detectedOS = ref<'mac' | 'windows' | 'other'>('other')

onMounted(() => {
  if (typeof window !== 'undefined' && window.navigator) {
    const ua = window.navigator.userAgent.toLowerCase()
    const plat = (window.navigator.platform || '').toLowerCase()
    if (plat.includes('mac') || ua.includes('macintosh') || ua.includes('mac os')) {
      detectedOS.value = 'mac'
    } else if (plat.includes('win') || ua.includes('windows')) {
      detectedOS.value = 'windows'
    }
  }
})

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
      <!-- Apple Mac App Store Column -->
      <div class="store-item-col" :class="{ 'is-detected': detectedOS === 'mac' }">
        <span v-if="detectedOS === 'mac' && !compact" class="detected-badge">
          <span class="detected-dot"></span>
          {{ t('common.detectedForMac') }}
        </span>
        <a
          :href="appleUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="store-badge-link"
          :class="{ 'has-highlight': detectedOS === 'mac' }"
          :title="locale === 'en' ? 'Download on the Mac App Store' : 'Consíguelo en el Mac App Store'"
          @click="onStoreClick('apple')"
        >
          <img
            :src="appleBadgeSrc"
            :alt="locale === 'en' ? 'Download on the Mac App Store' : 'Consíguelo en el Mac App Store'"
            class="store-badge-img"
            width="216"
            height="57"
            loading="eager"
          />
        </a>
        <div v-if="!compact && showSpecs" class="store-specs-box">
          <span class="spec-verified">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            {{ t('common.verifiedApple') }}
          </span>
          <span class="spec-detail">{{ t('common.specsMac') }}</span>
        </div>
      </div>

      <!-- Microsoft Store Column -->
      <div class="store-item-col" :class="{ 'is-detected': detectedOS === 'windows' }">
        <span v-if="detectedOS === 'windows' && !compact" class="detected-badge">
          <span class="detected-dot"></span>
          {{ t('common.detectedForWin') }}
        </span>
        <a
          :href="microsoftUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="store-badge-link"
          :class="{ 'has-highlight': detectedOS === 'windows' }"
          :title="locale === 'en' ? 'Get it from Microsoft' : 'Obtener de Microsoft'"
          @click="onStoreClick('microsoft')"
        >
          <img
            :src="msBadgeSrc"
            :alt="locale === 'en' ? 'Get it from Microsoft' : 'Obtener de Microsoft'"
            class="store-badge-img"
            width="216"
            height="57"
            loading="eager"
          />
        </a>
        <div v-if="!compact && showSpecs" class="store-specs-box">
          <span class="spec-verified">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            {{ t('common.verifiedMicrosoft') }}
          </span>
          <span class="spec-detail">{{ t('common.specsWin') }}</span>
        </div>
      </div>
    </div>

    <!-- Micro-guarantees of trust and friction-free download -->
    <div class="store-guarantee">
      <span class="guarantee-item">✓ {{ t('common.guaranteeCases') }}</span>
      <span class="guarantee-sep">·</span>
      <span class="guarantee-item">✓ {{ t('common.guaranteeCard') }}</span>
      <span class="guarantee-sep">·</span>
      <span class="guarantee-item">✓ {{ t('common.guaranteeLocal') }}</span>
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
  gap: 16px 24px;
  align-items: flex-end;
  justify-content: center;
}

.store-item-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  gap: 6px;
}

.detected-badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #0284c7;
  background: rgba(14, 165, 233, 0.1);
  border: 1px solid rgba(14, 165, 233, 0.25);
  padding: 3px 10px;
  border-radius: 9999px;
  margin-bottom: 2px;
  transition: all 0.2s ease;
}

.detected-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #0284c7;
  display: inline-block;
  box-shadow: 0 0 0 2px rgba(14, 165, 233, 0.25);
}

.is-light .detected-badge {
  color: #38bdf8;
  background: rgba(56, 189, 248, 0.15);
  border-color: rgba(56, 189, 248, 0.3);
}
.is-light .detected-dot {
  background: #38bdf8;
}

.store-specs-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  margin-top: 4px;
}

.spec-verified {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11.5px;
  font-weight: 600;
  color: #15803d;
}
.is-light .spec-verified {
  color: #4ade80;
}

.spec-detail {
  font-size: 11px;
  color: #6b7280;
  font-weight: 500;
}
.is-light .spec-detail {
  color: #9ca3af;
}

.store-badge-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  text-decoration: none;
  line-height: 0;
  user-select: none;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.store-badge-link:hover {
  transform: translateY(-2px);
}

.store-badge-link.has-highlight {
  box-shadow: 0 0 0 2px #0ea5e9, 0 8px 24px rgba(14, 165, 233, 0.2);
  border-radius: 8px;
}

.store-badge-img {
  height: 57px;
  width: auto;
  display: block;
  border-radius: 8px;
}

.store-guarantee {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 13px;
  font-weight: 500;
  color: #4b5563;
  margin-top: 4px;
  line-height: 1.4;
  letter-spacing: -0.01em;
}

.guarantee-sep {
  opacity: 0.5;
}

.is-light .store-guarantee {
  color: #f3f4f6;
}

@media (max-width: 640px) {
  .store-buttons {
    flex-direction: column;
    width: 100%;
    gap: 16px;
    align-items: center;
  }
  .store-badge-img {
    height: 54px;
  }
}
</style>
