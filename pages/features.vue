<script setup lang="ts">
const { t } = useI18n()

definePageMeta({ name: 'features' })

useHead(() => ({
  title: `${t('features.title')} — LexCase`,
  meta: [
    { name: 'description', content: t('features.subtitle') }
  ]
}))

const groups = computed(() => [
  { title: t('features.groups.cases'), icon: 'cases', items: [t('features.cases1'), t('features.cases2'), t('features.cases3'), t('features.cases4')] },
  { title: t('features.groups.calendar'), icon: 'calendar', items: [t('features.calendar1'), t('features.calendar2'), t('features.calendar3')] },
  { title: t('features.groups.clients'), icon: 'clients', items: [t('features.clients1'), t('features.clients2'), t('features.clients3')] },
  { title: t('features.groups.finances'), icon: 'finances', items: [t('features.finances1'), t('features.finances2'), t('features.finances3')] },
  { title: t('features.groups.notes'), icon: 'notes', items: [t('features.notes1'), t('features.notes2')] },
  { title: t('features.groups.search'), icon: 'search', items: [t('features.search1'), t('features.search2'), t('features.search3')] },
  { title: t('features.groups.backup'), icon: 'backup', items: [t('features.backup1'), t('features.backup2'), t('features.backup3')] },
  { title: t('features.groups.design'), icon: 'design', items: [t('features.design1'), t('features.design2'), t('features.design3')] }
])
</script>

<template>
  <div>
    <section class="section-navy">
      <div class="max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-12">
        <span class="eyebrow">{{ t('features.eyebrow') }}</span>
        <h1 class="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-white max-w-3xl">{{ t('features.title') }}</h1>
        <p class="mt-5 text-navy-100/85 max-w-2xl leading-relaxed">{{ t('features.subtitle') }}</p>
      </div>
    </section>

    <section class="section bg-white">
      <div class="max-w-7xl mx-auto px-5 sm:px-8 grid gap-6 md:grid-cols-2">
        <div v-for="(g, i) in groups" :key="i" class="card p-6">
          <div class="flex items-center gap-3 mb-4">
            <span class="w-10 h-10 rounded-xl bg-navy-50 text-navy-800 flex items-center justify-center">
              <svg v-if="g.icon === 'cases'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /><rect x="2" y="6" width="20" height="14" rx="2" /></svg>
              <svg v-else-if="g.icon === 'calendar'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
              <svg v-else-if="g.icon === 'clients'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
              <svg v-else-if="g.icon === 'finances'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="14" rx="2" /><circle cx="12" cy="13" r="2.5" /><path d="M6 6V4h12v2" /></svg>
              <svg v-else-if="g.icon === 'notes'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="9" y1="13" x2="15" y2="13" /><line x1="9" y1="17" x2="15" y2="17" /></svg>
              <svg v-else-if="g.icon === 'search'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
              <svg v-else-if="g.icon === 'backup'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /></svg>
            </span>
            <h2 class="text-lg font-semibold text-navy-800">{{ g.title }}</h2>
          </div>
          <ul class="space-y-2.5 text-sm text-slate-600 leading-relaxed">
            <li v-for="(item, j) in g.items" :key="j" class="flex items-start gap-2.5">
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-navy-500 shrink-0"></span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
