<script setup lang="ts">
const { t } = useI18n()

definePageMeta({ name: 'faq' })

const items = computed(() => Array.from({ length: 8 }, (_, i) => ({
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
  title: `${t('faq.title')} — Lexbell`,
  meta: [
    { name: 'description', content: t('faq.subtitle') },
    { property: 'og:title', content: `${t('faq.title')} — Lexbell` },
    { property: 'og:description', content: t('faq.subtitle') }
  ],
  script: [
    { type: 'application/ld+json', innerHTML: JSON.stringify(structured.value) }
  ]
}))
</script>

<template>
  <div class="faq-page">
    <section class="section">
      <div class="apple-wrap text-center">
        <span class="eyebrow">{{ t('nav.faq') }}</span>
        <h1 class="h-display mt-2">{{ t('faq.title') }}</h1>
        <p class="subtitle mt-4 mx-auto" style="max-width: 680px;">{{ t('faq.subtitle') }}</p>
      </div>
    </section>

    <section class="section-tight" style="padding-bottom: 80px;">
      <div class="apple-wrap" style="max-width: 820px;">
        <div class="faq-list">
          <div
            v-for="(item, i) in items"
            :key="i"
            class="faq-item"
            :class="{ 'is-open': open === i }"
          >
            <button
              type="button"
              class="faq-summary"
              :aria-expanded="open === i"
              @click="toggle(i)"
            >
              <span>{{ item.q }}</span>
              <svg class="faq-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div v-show="open === i" class="faq-answer">
              <p>{{ item.a }}</p>
            </div>
          </div>
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
.faq-page {
  background: #ffffff;
  color: #191919;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.faq-item {
  background: #ffffff;
  border: 1px solid #ebebea;
  border-radius: 12px;
  overflow: hidden;
  transition: border-color 0.2s ease;
}

.faq-item.is-open {
  border-color: #d3d3d0;
}

.faq-summary {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  font-size: 16px;
  font-weight: 600;
  color: #050505;
  gap: 16px;
}

.faq-chevron {
  transition: transform 0.2s ease;
  flex-shrink: 0;
  color: #5f5e5b;
}

.faq-item.is-open .faq-chevron {
  transform: rotate(180deg);
}

.faq-answer {
  padding: 0 24px 22px;
  font-size: 15px;
  line-height: 1.6;
  color: #5f5e5b;
}

.faq-answer p {
  margin: 0;
}

/* === CTA Final === */
.notion-cta-section {
  background: #f7f7f5;
  border-top: 1px solid #ebebea;
  padding: clamp(60px, 8vh, 90px) 24px;
}
</style>
