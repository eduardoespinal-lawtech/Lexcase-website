<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

definePageMeta({ name: 'support' })

useHead(() => ({
  title: `${t('support.title')} — Lexbell`,
  meta: [{ name: 'description', content: t('support.subtitle') }]
}))
</script>

<template>
  <section class="section">
    <div class="apple-wrap text-center">
      <h1 class="h-page">{{ t('support.title') }}</h1>
      <p class="subtitle mt-5 mx-auto" style="max-width: 720px;">{{ t('support.subtitle') }}</p>
    </div>
  </section>

  <section class="section-tight section-gray">
    <div class="apple-wrap-wide grid gap-6 lg:grid-cols-2">
      <article class="support-card">
        <h2 class="support-title">{{ t('support.selfTitle') }}</h2>
        <p class="support-body">{{ t('support.selfBody') }}</p>
        <NuxtLink :to="localePath('faq')" class="link-apple mt-5">
          {{ t('support.selfLink') }}
        </NuxtLink>
      </article>

      <article class="support-card">
        <h2 class="support-title">{{ t('support.emailTitle') }}</h2>
        <p class="support-body">{{ t('support.emailBody') }}</p>
        <a href="mailto:soporte@lex-bell.com" class="link-apple mt-5">
          {{ t('support.emailLabel') }}
        </a>
        <p class="support-mail">soporte@lex-bell.com</p>
      </article>

      <article class="support-card">
        <h2 class="support-title">{{ t('support.compatTitle') }}</h2>
        <ul class="support-list">
          <li>{{ t('support.compatItem1') }}</li>
          <li>{{ t('support.compatItem2') }}</li>
          <li>{{ t('support.compatItem3') }}</li>
          <li>{{ t('support.compatItem4') }}</li>
        </ul>
      </article>

      <article class="support-card">
        <h2 class="support-title">{{ t('support.winTitle') }}</h2>
        <p class="support-body">{{ t('support.winBody') }}</p>
        <a href="mailto:soporte@lex-bell.com" class="link-apple mt-5">
          {{ t('support.emailLabel') }}
        </a>
        <p class="support-mail">soporte@lex-bell.com</p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.support-card {
  background: #fff;
  border-radius: 18px;
  padding: 32px 30px;
  display: flex;
  flex-direction: column;
}
.support-title {
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: #1d1d1f;
  margin: 0 0 12px;
}
.support-body {
  font-size: 16px;
  line-height: 1.5;
  color: #1d1d1f;
  margin: 0;
}
.support-mail {
  margin-top: 6px;
  font-family: 'SF Mono', ui-monospace, Menlo, monospace;
  font-size: 14px;
  color: #6e6e73;
}
.support-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 16px;
  line-height: 1.5;
  color: #1d1d1f;
}
.support-list li {
  display: grid;
  grid-template-columns: 14px 1fr;
  gap: 10px;
  align-items: start;
}
.support-list li::before {
  content: '';
  width: 6px;
  height: 6px;
  background: #1d1d1f;
  border-radius: 50%;
  margin-top: 9px;
}
</style>
