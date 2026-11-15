<script setup lang="ts">
const { t, locale } = useI18n()
const localePath = useLocalePath()

definePageMeta({ name: 'support' })

useHead(() => {
  const isEn = locale.value === 'en'
  const title = isEn
    ? 'Help Center & Technical Support — Lexbell'
    : 'Centro de Ayuda y Soporte Técnico — Lexbell'
  const desc = isEn
    ? 'Direct technical assistance, guides, and support for Lexbell users and modern law firms on Mac and Windows.'
    : 'Asistencia técnica directa, manuales y resolución de dudas para usuarios y despachos jurídicos en Lexbell.'

  return {
    title,
    meta: [
      { name: 'description', content: desc },
      { property: 'og:title', content: title },
      { property: 'og:description', content: desc }
    ]
  }
})
</script>

<template>
  <div class="support-page">
    <section class="section">
      <div class="apple-wrap text-center">
        <span class="eyebrow">{{ locale === 'en' ? 'HELP CENTER & SUPPORT' : 'CENTRO DE ASISTENCIA Y AYUDA' }}</span>
        <h1 class="h-display mt-2">{{ t('support.title') }}</h1>
        <p class="subtitle mt-4 mx-auto" style="max-width: 680px;">{{ t('support.subtitle') }}</p>
      </div>
    </section>

    <section class="section section-gray">
      <div class="apple-wrap grid gap-6 md:grid-cols-2">
        <article class="support-card">
          <div class="support-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/><path d="9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>
          </div>
          <h2 class="support-title">{{ t('support.selfTitle') }}</h2>
          <p class="support-body">{{ t('support.selfBody') }}</p>
          <NuxtLink :to="localePath('faq')" class="support-link mt-5">
            {{ t('support.selfLink') }} →
          </NuxtLink>
        </article>

        <article class="support-card">
          <div class="support-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
          </div>
          <h2 class="support-title">{{ t('support.emailTitle') }}</h2>
          <p class="support-body">{{ t('support.emailBody') }}</p>
          <a href="mailto:support@lex-bell.com" class="support-link mt-5">
            {{ t('support.emailLabel') }} (support@lex-bell.com) →
          </a>
        </article>

        <article class="support-card md:col-span-2">
          <div class="support-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
            </svg>
          </div>
          <h2 class="support-title">{{ t('support.compatTitle') }}</h2>
          <ul class="support-list mt-3">
            <li>✓ {{ t('support.compatItem1') }}</li>
            <li>✓ {{ t('support.compatItem2') }}</li>
            <li>✓ {{ t('support.compatItem3') }}</li>
            <li>✓ {{ t('support.compatItem4') }}</li>
          </ul>
        </article>
      </div>
    </section>
  </div>
</template>

<style scoped>
.support-page {
  background: var(--bg);
  color: var(--text);
}

.support-card {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 32px 28px;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.support-card:hover {
  transform: translateY(-2px);
  border-color: var(--border-dark);
  box-shadow: var(--shadow-card);
}

.support-icon {
  width: 42px;
  height: 42px;
  border-radius: 10px;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  color: var(--icon-color);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
}

.support-title {
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.015em;
  color: var(--text);
  margin: 0 0 10px;
}

.support-body {
  font-size: 15px;
  line-height: 1.6;
  color: var(--text-muted);
  margin: 0;
}

.support-link {
  color: var(--accent);
  font-size: 14.5px;
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.support-link:hover {
  text-decoration: underline;
}

.support-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  font-size: 14.5px;
  color: var(--text-muted);
}

@media (min-width: 640px) {
  .support-list {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
