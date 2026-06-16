<script setup lang="ts">
const { t } = useI18n()

definePageMeta({ name: 'contact' })

useHead(() => ({
  title: `${t('contact.title')} — Lexcase`,
  meta: [{ name: 'description', content: t('contact.subtitle') }]
}))
</script>

<template>
  <section class="section">
    <div class="apple-wrap text-center">
      <h1 class="h-page">{{ t('contact.title') }}</h1>
      <p class="subtitle mt-5 mx-auto" style="max-width: 720px;">{{ t('contact.subtitle') }}</p>
    </div>
  </section>

  <section class="section-tight section-gray">
    <div class="apple-wrap grid gap-6 md:grid-cols-2">
      <a href="mailto:support@lexcase.com.do" class="contact-card contact-card-link">
        <p class="contact-eyebrow">{{ t('contact.emailTitle') }}</p>
        <p class="contact-email">support@lexcase.com.do</p>
        <p class="contact-hint">{{ t('contact.emailHint') }}</p>
      </a>

      <div class="contact-card">
        <p class="contact-eyebrow">{{ t('contact.responseTitle') }}</p>
        <p class="contact-body">{{ t('contact.responseBody') }}</p>
      </div>

      <div class="contact-card md:col-span-2">
        <p class="contact-eyebrow">{{ t('contact.developerTitle') }}</p>
        <p class="contact-body">{{ t('contact.developerBody') }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-card {
  background: #fff;
  border-radius: 18px;
  padding: 32px 30px;
}
.contact-card-link {
  text-decoration: none;
  transition: transform .2s ease;
}
.contact-card-link:hover {
  transform: translateY(-2px);
}
.contact-eyebrow {
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #6e6e73;
  margin: 0 0 12px;
}
.contact-email {
  font-size: 17px;
  font-weight: 500;
  letter-spacing: -0.005em;
  color: #1d1d1f;
  margin: 0;
  word-break: normal;
  overflow-wrap: anywhere;
}
.contact-hint {
  margin-top: 8px;
  font-size: 15px;
  color: #6e6e73;
}
.contact-body {
  font-size: 16px;
  line-height: 1.5;
  color: #1d1d1f;
  margin: 0;
}
</style>
