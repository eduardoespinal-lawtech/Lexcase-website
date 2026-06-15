<script setup lang="ts">
const { t } = useI18n()

definePageMeta({ name: 'contact' })

useHead(() => ({
  title: `${t('contact.title')} — LexCase`,
  meta: [{ name: 'description', content: t('contact.subtitle') }]
}))
</script>

<template>
  <div>
    <section class="section-navy">
      <div class="max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-12">
        <span class="eyebrow">{{ t('contact.eyebrow') }}</span>
        <h1 class="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-white">{{ t('contact.title') }}</h1>
        <p class="mt-5 text-navy-100/85 max-w-2xl leading-relaxed">{{ t('contact.subtitle') }}</p>
      </div>
    </section>

    <section class="section bg-white">
      <div class="max-w-4xl mx-auto px-5 sm:px-8 grid gap-6 md:grid-cols-2">
        <a
          href="mailto:eduardoespinaldeaza@gmail.com"
          class="card p-7 hover:shadow-md transition-shadow group"
        >
          <div class="w-10 h-10 rounded-xl bg-navy-50 text-navy-800 flex items-center justify-center mb-4">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          </div>
          <p class="text-xs uppercase tracking-widest text-slate-500 font-semibold">{{ t('contact.emailTitle') }}</p>
          <p class="mt-2 text-lg font-semibold text-navy-800 break-all">eduardoespinaldeaza@gmail.com</p>
          <p class="mt-2 text-sm text-slate-500">{{ t('contact.emailHint') }}</p>
        </a>

        <div class="card p-7">
          <p class="text-xs uppercase tracking-widest text-slate-500 font-semibold">{{ t('contact.responseTitle') }}</p>
          <p class="mt-3 text-sm text-slate-600 leading-relaxed">{{ t('contact.responseBody') }}</p>
        </div>

        <div class="card p-7 md:col-span-2">
          <p class="text-xs uppercase tracking-widest text-slate-500 font-semibold">{{ t('contact.developerTitle') }}</p>
          <p class="mt-3 text-sm text-slate-600 leading-relaxed">{{ t('contact.developerBody') }}</p>
        </div>
      </div>
    </section>
  </div>
</template>
