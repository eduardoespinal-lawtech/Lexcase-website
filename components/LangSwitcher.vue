<script setup lang="ts">
const { locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>

<template>
  <div class="lang-switch-pill" role="group" :aria-label="locale === 'es' ? 'Selector de idioma' : 'Language switcher'">
    <span class="lang-icon" aria-hidden="true">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    </span>
    <NuxtLink
      :to="switchLocalePath('es')"
      class="lang-pill-btn"
      :class="{ 'is-active': locale === 'es' }"
      :aria-current="locale === 'es' ? 'true' : undefined"
    >
      ES
    </NuxtLink>
    <NuxtLink
      :to="switchLocalePath('en')"
      class="lang-pill-btn"
      :class="{ 'is-active': locale === 'en' }"
      :aria-current="locale === 'en' ? 'true' : undefined"
    >
      EN
    </NuxtLink>
  </div>
</template>

<style scoped>
.lang-switch-pill {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  background: #f1f1ef;
  border: 1px solid #e5e5e3;
  border-radius: 9999px;
  padding: 2px 3px 2px 7px;
  user-select: none;
}

.lang-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #787774;
  margin-right: 2px;
}

.lang-pill-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 28px;
  height: 22px;
  padding: 0 6px;
  border-radius: 9999px;
  font-size: 11.5px;
  font-weight: 500;
  color: #787774;
  text-decoration: none;
  line-height: 1;
  letter-spacing: 0.02em;
  transition: all 0.15s ease;
}

.lang-pill-btn:hover {
  color: #111111;
}

.lang-pill-btn.is-active {
  background: #ffffff;
  color: #111111;
  font-weight: 600;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 0.5px 1px rgba(0, 0, 0, 0.04);
}
</style>
