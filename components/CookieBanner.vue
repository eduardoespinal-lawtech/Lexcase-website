<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const { isBannerVisible, acceptAll, rejectOptional, openModal } = useCookieConsent()
</script>

<template>
  <Transition name="slide-up">
    <div
      v-if="isBannerVisible"
      class="cookie-banner"
      role="region"
      :aria-label="t('cookies.title')"
    >
      <div class="cookie-banner-inner">
        <div class="cookie-banner-content">
          <div class="cookie-banner-header">
            <span class="cookie-banner-icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </span>
            <span class="cookie-banner-title">{{ t('cookies.title') }}</span>
          </div>
          <p class="cookie-banner-text">
            {{ t('cookies.bannerText') }}
            <NuxtLink :to="localePath('cookies')" class="cookie-banner-link">
              {{ t('nav.cookiePolicy') }}
            </NuxtLink>
          </p>
        </div>

        <div class="cookie-banner-actions">
          <button
            type="button"
            @click="rejectOptional"
            class="cookie-banner-btn cookie-banner-btn-secondary"
          >
            {{ t('cookies.rejectNonEssential') }}
          </button>
          <button
            type="button"
            @click="openModal"
            class="cookie-banner-btn cookie-banner-btn-subtle"
          >
            {{ t('cookies.customize') }}
          </button>
          <button
            type="button"
            @click="acceptAll"
            class="cookie-banner-btn cookie-banner-btn-primary"
          >
            {{ t('cookies.acceptAll') }}
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.cookie-banner {
  position: fixed;
  bottom: 20px;
  right: 20px;
  max-width: 460px;
  width: calc(100% - 40px);
  z-index: 9990;
}

.cookie-banner-inner {
  background: var(--card-bg);
  border-radius: 16px;
  padding: 20px;
  box-shadow: var(--shadow-card);
  border: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.cookie-banner-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 6px;
}

.cookie-banner-icon {
  color: var(--accent);
  display: inline-flex;
}

.cookie-banner-title {
  font-size: 14px;
  font-weight: 700;
  color: var(--text);
  letter-spacing: -0.01em;
}

.cookie-banner-text {
  font-size: 13px;
  line-height: 1.5;
  color: var(--text-muted);
  margin: 0;
}

.cookie-banner-link {
  color: var(--accent);
  text-decoration: underline;
  margin-left: 4px;
}

.cookie-banner-actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 8px;
}

.cookie-banner-btn {
  font-size: 12.5px;
  font-weight: 600;
  padding: 7px 14px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.15s ease;
  border: 1px solid transparent;
}

.cookie-banner-btn-subtle {
  background: transparent;
  color: var(--text-muted);
}

.cookie-banner-btn-subtle:hover {
  background: var(--bg-elevated);
  color: var(--text);
}

.cookie-banner-btn-secondary {
  background: var(--bg-elevated);
  border-color: var(--border);
  color: var(--text);
}

.cookie-banner-btn-secondary:hover {
  background: var(--bg-subtle);
  border-color: var(--border-dark);
}

.cookie-banner-btn-primary {
  background: #0071E3;
  color: #FFFFFF;
}

.cookie-banner-btn-primary:hover {
  background: #005BB5;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

@media (max-width: 480px) {
  .cookie-banner {
    bottom: 12px;
    right: 12px;
    left: 12px;
    width: auto;
  }
  .cookie-banner-actions {
    flex-direction: column-reverse;
  }
  .cookie-banner-btn {
    width: 100%;
    text-align: center;
  }
}
</style>
