<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

definePageMeta({ name: 'support' })

useHead(() => ({
  title: `${t('support.title')} — LexCase`,
  meta: [{ name: 'description', content: t('support.subtitle') }]
}))
</script>

<template>
  <div>
    <section class="section-navy">
      <div class="max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-12">
        <span class="eyebrow">{{ t('support.eyebrow') }}</span>
        <h1 class="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-white max-w-3xl">{{ t('support.title') }}</h1>
        <p class="mt-5 text-navy-100/85 max-w-2xl leading-relaxed">{{ t('support.subtitle') }}</p>
      </div>
    </section>

    <section class="section bg-white">
      <div class="max-w-7xl mx-auto px-5 sm:px-8 grid gap-6 lg:grid-cols-2">
        <div class="card p-7">
          <div class="w-10 h-10 rounded-xl bg-navy-50 text-navy-800 flex items-center justify-center mb-4">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
          </div>
          <h2 class="text-xl font-semibold text-navy-800">{{ t('support.selfTitle') }}</h2>
          <p class="mt-3 text-slate-600 leading-relaxed">{{ t('support.selfBody') }}</p>
          <NuxtLink :to="localePath('faq')" class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy-500 hover:text-navy-800">
            {{ t('support.selfLink') }}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </NuxtLink>
        </div>

        <div class="card p-7">
          <div class="w-10 h-10 rounded-xl bg-navy-50 text-navy-800 flex items-center justify-center mb-4">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          </div>
          <h2 class="text-xl font-semibold text-navy-800">{{ t('support.emailTitle') }}</h2>
          <p class="mt-3 text-slate-600 leading-relaxed">{{ t('support.emailBody') }}</p>
          <a href="mailto:eduardoespinaldeaza@gmail.com" class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy-500 hover:text-navy-800">
            {{ t('support.emailLabel') }}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
          <p class="mt-3 font-mono text-sm text-navy-800">eduardoespinaldeaza@gmail.com</p>
        </div>

        <div class="card p-7">
          <h2 class="text-xl font-semibold text-navy-800">{{ t('support.compatTitle') }}</h2>
          <ul class="mt-4 space-y-2.5 text-sm text-slate-600 leading-relaxed">
            <li class="flex items-start gap-2.5"><span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-navy-500 shrink-0"></span>{{ t('support.compatItem1') }}</li>
            <li class="flex items-start gap-2.5"><span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-navy-500 shrink-0"></span>{{ t('support.compatItem2') }}</li>
            <li class="flex items-start gap-2.5"><span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-navy-500 shrink-0"></span>{{ t('support.compatItem3') }}</li>
            <li class="flex items-start gap-2.5"><span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-navy-500 shrink-0"></span>{{ t('support.compatItem4') }}</li>
          </ul>
        </div>

        <div class="card p-7">
          <h2 class="text-xl font-semibold text-navy-800">{{ t('support.winTitle') }}</h2>
          <p class="mt-3 text-slate-600 leading-relaxed">{{ t('support.winBody') }}</p>
          <span class="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm text-amber-700 bg-amber-50 border border-amber-200">
            <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
            {{ t('common.comingSoonWin') }}
          </span>
        </div>
      </div>
    </section>
  </div>
</template>
