<script setup lang="ts">
const { t, locale } = useI18n()

definePageMeta({ name: 'faq' })

const items = computed(() => Array.from({ length: 10 }, (_, i) => ({
  q: t(`faq.q${i + 1}`),
  a: t(`faq.a${i + 1}`)
})))

const open = ref<number>(0)
const toggle = (i: number) => { open.value = open.value === i ? -1 : i }

const structured = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.value.map((it) => ({
    '@type': 'Question',
    name: it.q,
    acceptedAnswer: { '@type': 'Answer', text: it.a }
  }))
}))

useHead(() => ({
  title: `${t('faq.title')} — LexCase`,
  meta: [{ name: 'description', content: t('faq.subtitle') }],
  script: [
    { type: 'application/ld+json', innerHTML: JSON.stringify(structured.value) }
  ]
}))
</script>

<template>
  <div>
    <section class="section-navy">
      <div class="max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-12">
        <span class="eyebrow">{{ t('faq.eyebrow') }}</span>
        <h1 class="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-white max-w-3xl">{{ t('faq.title') }}</h1>
        <p class="mt-5 text-navy-100/85 max-w-2xl leading-relaxed">{{ t('faq.subtitle') }}</p>
      </div>
    </section>

    <section class="section bg-white">
      <div class="max-w-3xl mx-auto px-5 sm:px-8 space-y-3">
        <details
          v-for="(item, i) in items"
          :key="i"
          class="card overflow-hidden"
          :open="open === i"
          @toggle="(e) => (e.target as HTMLDetailsElement).open && (open = i)"
        >
          <summary
            class="cursor-pointer list-none px-6 py-5 flex items-center justify-between gap-4 text-navy-800 font-semibold"
            @click.prevent="toggle(i)"
          >
            <span>{{ item.q }}</span>
            <span
              class="w-7 h-7 rounded-full bg-navy-50 flex items-center justify-center text-navy-800 transition-transform"
              :class="open === i ? 'rotate-45' : ''"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            </span>
          </summary>
          <div class="px-6 pb-5 -mt-1 text-slate-600 leading-relaxed text-sm">{{ item.a }}</div>
        </details>
      </div>
    </section>
  </div>
</template>

<style scoped>
summary::-webkit-details-marker { display: none; }
</style>
