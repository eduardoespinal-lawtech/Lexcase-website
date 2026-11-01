<script setup lang="ts">
const { t } = useI18n()

definePageMeta({ name: 'contact' })

useHead(() => ({
  title: `${t('contact.title')} — Lexbell`,
  meta: [
    { name: 'description', content: t('contact.subtitle') },
    { property: 'og:title', content: `${t('contact.title')} — Lexbell` },
    { property: 'og:description', content: t('contact.subtitle') }
  ]
}))
</script>

<template>
  <div class="contact-page">
    <section class="section">
      <div class="apple-wrap text-center">
        <span class="eyebrow">{{ t('nav.contact') }}</span>
        <h1 class="h-display mt-2">{{ t('contact.title') }}</h1>
        <p class="subtitle mt-4 mx-auto" style="max-width: 680px;">{{ t('contact.subtitle') }}</p>
      </div>
    </section>

    <section class="section section-gray">
      <div class="apple-wrap grid gap-6 md:grid-cols-2">
        <a href="mailto:support@lex-bell.com" class="contact-card contact-card-link">
          <div class="contact-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
          </div>
          <p class="contact-eyebrow">{{ t('contact.emailTitle') }}</p>
          <p class="contact-email">support@lex-bell.com</p>
          <p class="contact-hint">{{ t('contact.emailHint') }}</p>
        </a>

        <div class="contact-card">
          <div class="contact-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
          </div>
          <p class="contact-eyebrow">{{ t('contact.responseTitle') }}</p>
          <p class="contact-body">{{ t('contact.responseBody') }}</p>
        </div>

        <div class="contact-card md:col-span-2">
          <div class="contact-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
            </svg>
          </div>
          <p class="contact-eyebrow">{{ t('contact.developerTitle') }}</p>
          <p class="contact-body">{{ t('contact.developerBody') }}</p>
        </div>
      </div>
    </section>

    <!-- CTA FINAL NOTION -->
    <section class="notion-cta-section" id="descargar">
      <div class="apple-wrap text-center">
        <span class="eyebrow">{{ t('home.ctaSectionEyebrow') }}</span>
        <h2 class="h-section max-w-2xl mx-auto">{{ t('home.ctaSectionTitle') }}</h2>
        <p class="subtitle max-w-xl mx-auto mt-4 mb-8">
          {{ t('home.ctaSectionBody') }}
        </p>
        <div class="flex justify-center">
          <AppDownload center />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.contact-page {
  background: #08090c;
  color: #f5f5f7;
}

.contact-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 32px 28px;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.contact-card-link {
  text-decoration: none;
  display: block;
}

.contact-card-link:hover {
  transform: translateY(-2px);
  border-color: rgba(255, 255, 255, 0.18);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.6), 0 0 25px -5px rgba(0, 113, 227, 0.25);
}

.contact-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(0, 113, 227, 0.12);
  border: 1px solid rgba(0, 113, 227, 0.25);
  color: #2997ff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
}

.contact-eyebrow {
  font-size: 11.5px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #a1a1aa;
  margin: 0 0 10px;
}

.contact-email {
  font-size: 19px;
  font-weight: 600;
  letter-spacing: -0.015em;
  color: #2997ff;
  margin: 0;
  word-break: normal;
  overflow-wrap: anywhere;
}

.contact-hint {
  margin-top: 8px;
  font-size: 14.5px;
  color: #9496a1;
}

.contact-body {
  font-size: 15px;
  line-height: 1.6;
  color: #e5e5ea;
  margin: 0;
}

/* === CTA Final === */
.notion-cta-section {
  background: radial-gradient(circle at 50% 100%, rgba(0, 113, 227, 0.22) 0%, #08090C 70%);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding: clamp(60px, 8vh, 90px) 24px;
}
</style>
