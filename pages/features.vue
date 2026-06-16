<script setup lang="ts">
const { t } = useI18n()

definePageMeta({ name: 'features' })

useHead(() => ({
  title: `${t('features.title')} — LexCase`,
  meta: [{ name: 'description', content: t('features.subtitle') }]
}))

const groups = computed(() => [
  { title: t('features.groups.cases'),    items: [t('features.cases1'),    t('features.cases2'), t('features.cases3'), t('features.cases4')] },
  { title: t('features.groups.calendar'), items: [t('features.calendar1'), t('features.calendar2'), t('features.calendar3')] },
  { title: t('features.groups.clients'),  items: [t('features.clients1'),  t('features.clients2'), t('features.clients3')] },
  { title: t('features.groups.finances'), items: [t('features.finances1'), t('features.finances2'), t('features.finances3')] },
  { title: t('features.groups.notes'),    items: [t('features.notes1'),    t('features.notes2')] },
  { title: t('features.groups.search'),   items: [t('features.search1'),   t('features.search2'), t('features.search3')] },
  { title: t('features.groups.backup'),   items: [t('features.backup1'),   t('features.backup2'), t('features.backup3')] },
  { title: t('features.groups.design'),   items: [t('features.design1'),   t('features.design2'), t('features.design3')] }
])
</script>

<template>
  <section class="section">
    <div class="apple-wrap text-center">
      <h1 class="h-page">{{ t('features.title') }}</h1>
      <p class="subtitle mt-5 mx-auto" style="max-width: 720px;">{{ t('features.subtitle') }}</p>
    </div>
  </section>

  <section class="section-tight section-gray">
    <div class="apple-wrap-wide grid gap-8 md:grid-cols-2">
      <div v-for="(g, i) in groups" :key="i" class="feature-card">
        <h2 class="feature-card-title">{{ g.title }}</h2>
        <ul class="feature-card-list">
          <li v-for="(item, j) in g.items" :key="j">{{ item }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.feature-card {
  background: #fff;
  border-radius: 18px;
  padding: 32px 30px;
}
.feature-card-title {
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: #1d1d1f;
  margin: 0 0 14px;
}
.feature-card-list {
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
.feature-card-list li {
  display: grid;
  grid-template-columns: 14px 1fr;
  gap: 10px;
  align-items: start;
}
.feature-card-list li::before {
  content: '';
  width: 6px;
  height: 6px;
  background: #1d1d1f;
  border-radius: 50%;
  margin-top: 9px;
}
</style>
