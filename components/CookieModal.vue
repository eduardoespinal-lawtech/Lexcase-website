<script setup lang="ts">
const { t } = useI18n()
const emit = defineEmits<{ (e: 'close'): void }>()

const analyticsConsent = ref(false)

onMounted(() => {
  if (typeof window !== 'undefined') {
    try {
      const stored = localStorage.getItem('lexbell_cookie_consent')
      if (stored) {
        const parsed = JSON.parse(stored)
        analyticsConsent.value = parsed.analytics === true
      }
    } catch {
      // Ignorar errores de parsing
    }
  }
})

const saveConsent = (allowAnalytics: boolean) => {
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem('lexbell_cookie_consent', JSON.stringify({
        essential: true,
        analytics: allowAnalytics,
        updatedAt: new Date().toISOString()
      }))
    } catch {
      // Ignorar
    }
  }
  emit('close')
}

const acceptAll = () => saveConsent(true)
const rejectOptional = () => saveConsent(false)
const savePreferences = () => saveConsent(analyticsConsent.value)
</script>

<template>
  <div class="cookie-backdrop" @click.self="emit('close')" role="dialog" aria-modal="true" :aria-label="t('cookies.modalTitle')">
    <div class="cookie-modal">
      <!-- Header -->
      <div class="cookie-header">
        <div class="cookie-header-text">
          <h3 class="cookie-title">{{ t('cookies.modalTitle') }}</h3>
          <p class="cookie-desc">{{ t('cookies.modalDesc') }}</p>
        </div>
        <button
          type="button"
          class="cookie-close-btn"
          @click="emit('close')"
          :aria-label="t('cookies.close')"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <!-- Categories -->
      <div class="cookie-body">
        <!-- Esenciales -->
        <div class="cookie-item">
          <div class="cookie-item-info">
            <div class="cookie-item-head">
              <span class="cookie-item-title">{{ t('cookies.essentialTitle') }}</span>
              <span class="cookie-badge">{{ t('cookies.alwaysActive') }}</span>
            </div>
            <p class="cookie-item-desc">{{ t('cookies.essentialDesc') }}</p>
          </div>
          <div class="cookie-switch-wrap">
            <input type="checkbox" checked disabled class="cookie-checkbox" />
          </div>
        </div>

        <!-- Analíticas -->
        <div class="cookie-item">
          <div class="cookie-item-info">
            <div class="cookie-item-head">
              <span class="cookie-item-title">{{ t('cookies.analyticsTitle') }}</span>
            </div>
            <p class="cookie-item-desc">{{ t('cookies.analyticsDesc') }}</p>
          </div>
          <label class="cookie-toggle-label">
            <input
              type="checkbox"
              v-model="analyticsConsent"
              class="cookie-checkbox"
            />
          </label>
        </div>
      </div>

      <!-- Footer Buttons -->
      <div class="cookie-footer">
        <button
          type="button"
          @click="rejectOptional"
          class="cookie-btn cookie-btn-subtle"
        >
          {{ t('cookies.rejectOptional') }}
        </button>
        <button
          type="button"
          @click="savePreferences"
          class="cookie-btn cookie-btn-secondary"
        >
          {{ t('cookies.savePrefs') }}
        </button>
        <button
          type="button"
          @click="acceptAll"
          class="cookie-btn cookie-btn-primary"
        >
          {{ t('cookies.acceptAll') }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cookie-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  animation: fadeIn 0.15s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.cookie-modal {
  background: #FFFFFF;
  border-radius: 16px;
  max-width: 540px;
  width: 100%;
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.18), 0 2px 8px rgba(0, 0, 0, 0.08);
  border: 1px solid #EBEBEA;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.cookie-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  padding: 24px 24px 16px;
  border-bottom: 1px solid #F0F0EE;
}

.cookie-title {
  font-size: 18px;
  font-weight: 700;
  color: #111111;
  margin: 0 0 6px;
  letter-spacing: -0.01em;
}

.cookie-desc {
  font-size: 13px;
  line-height: 1.5;
  color: #666664;
  margin: 0;
}

.cookie-close-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  color: #777775;
  padding: 4px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s ease;
  flex-shrink: 0;
}

.cookie-close-btn:hover {
  background: #F4F4F2;
  color: #111111;
}

.cookie-body {
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.cookie-item {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 16px;
  background: #F9F9F8;
  border-radius: 12px;
  border: 1px solid #EDEDEC;
}

.cookie-item-info {
  flex: 1;
}

.cookie-item-head {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 4px;
}

.cookie-item-title {
  font-size: 13.5px;
  font-weight: 600;
  color: #111111;
}

.cookie-badge {
  font-size: 11px;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 999px;
  background: #E8F5E9;
  color: #2E7D32;
  letter-spacing: 0.02em;
}

.cookie-item-desc {
  font-size: 12.5px;
  line-height: 1.45;
  color: #666664;
  margin: 0;
}

.cookie-switch-wrap,
.cookie-toggle-label {
  display: flex;
  align-items: center;
  margin-top: 2px;
}

.cookie-checkbox {
  width: 18px;
  height: 18px;
  accent-color: #0071E3;
  cursor: pointer;
}

.cookie-checkbox:disabled {
  cursor: not-allowed;
  opacity: 0.7;
}

.cookie-footer {
  padding: 16px 24px 20px;
  background: #FAFAFA;
  border-top: 1px solid #F0F0EE;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: flex-end;
}

.cookie-btn {
  font-size: 13px;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.15s ease;
  border: 1px solid transparent;
}

.cookie-btn-subtle {
  background: transparent;
  color: #555553;
}

.cookie-btn-subtle:hover {
  background: #EDEDEB;
  color: #111111;
}

.cookie-btn-secondary {
  background: #FFFFFF;
  border-color: #D6D6D4;
  color: #111111;
}

.cookie-btn-secondary:hover {
  background: #F4F4F2;
  border-color: #B5B5B3;
}

.cookie-btn-primary {
  background: #0071E3;
  color: #FFFFFF;
  font-weight: 600;
}

.cookie-btn-primary:hover {
  background: #005BB5;
}

@media (max-width: 480px) {
  .cookie-footer {
    flex-direction: column-reverse;
  }
  .cookie-btn {
    width: 100%;
    text-align: center;
  }
}
</style>
