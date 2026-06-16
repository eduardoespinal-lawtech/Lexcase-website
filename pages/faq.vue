<script setup lang="ts">
const { t } = useI18n()

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
  title: `${t('faq.title')} — Lexcase`,
  meta: [{ name: 'description', content: t('faq.subtitle') }],
  script: [
    { type: 'application/ld+json', innerHTML: JSON.stringify(structured.value) }
  ]
}))
</script>

<template>
  <section class="section">
    <div class="apple-wrap text-center">
      <h1 class="h-page">{{ t('faq.title') }}</h1>
      <p class="subtitle mt-5 mx-auto" style="max-width: 720px;">{{ t('faq.subtitle') }}</p>
    </div>
  </section>

  <section class="section-tight">
    <div class="apple-wrap" style="max-width: 820px;">
      <div class="faq-list">
        <details
          v-for="(item, i) in items"
          :key="i"
          class="faq-item"
          :open="open === i"
        >
          <summary
            class="faq-summary"
            @click.prevent="toggle(i)"
          >
            <span>{{ item.q }}</span>
            <span class="faq-plus" :class="open === i ? 'is-open' : ''">+</span>
          </summary>
          <div class="faq-answer">{{ item.a }}</div>
        </details>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq-list {
  border-top: 1px solid rgba(0, 0, 0, 0.08);
}
.faq-item {
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}
.faq-summary {
  list-style: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 24px 4px;
  font-size: clamp(18px, 1.6vw, 21px);
  font-weight: 500;
  color: #1d1d1f;
  letter-spacing: -0.005em;
}
.faq-summary::-webkit-details-marker { display: none; }
.faq-plus {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #f5f5f7;
  color: #1d1d1f;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  line-height: 1;
  transition: transform .2s ease;
}
.faq-plus.is-open {
  transform: rotate(45deg);
  background: #1d1d1f;
  color: #fff;
}
.faq-answer {
  padding: 0 4px 24px;
  font-size: 17px;
  line-height: 1.55;
  color: #1d1d1f;
}
</style>
