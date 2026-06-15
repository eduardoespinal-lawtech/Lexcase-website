<script setup lang="ts">
const { t, locale } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()

useHead(() => ({
  title: `LexCase — ${t('home.title1')} ${t('home.title2')}`.replace(/,$/, ''),
  meta: [
    { name: 'description', content: t('home.subtitle') },
    { property: 'og:title', content: 'LexCase' },
    { property: 'og:description', content: t('home.subtitle') },
    { property: 'og:url', content: locale.value === 'es' ? 'https://lexcase.com.do/' : 'https://lexcase.com.do/en' }
  ],
  link: [
    { rel: 'alternate', hreflang: 'es', href: 'https://lexcase.com.do/' },
    { rel: 'alternate', hreflang: 'en', href: 'https://lexcase.com.do/en' },
    { rel: 'alternate', hreflang: 'x-default', href: 'https://lexcase.com.do/' }
  ]
}))

const features = computed(() => [
  { title: t('home.f1Title'), body: t('home.f1Body'), icon: 'cases' },
  { title: t('home.f2Title'), body: t('home.f2Body'), icon: 'calendar' },
  { title: t('home.f3Title'), body: t('home.f3Body'), icon: 'clients' },
  { title: t('home.f4Title'), body: t('home.f4Body'), icon: 'finances' },
  { title: t('home.f5Title'), body: t('home.f5Body'), icon: 'notes' },
  { title: t('home.f6Title'), body: t('home.f6Body'), icon: 'search' }
])

const screens = computed(() => [
  { id: 'cases',     label: t('home.screens.cases') },
  { id: 'calendar',  label: t('home.screens.calendar') },
  { id: 'finances',  label: t('home.screens.finances') },
  { id: 'clients',   label: t('home.screens.clients') }
])
const activeScreen = ref<'cases'|'calendar'|'finances'|'clients'>('cases')
</script>

<template>
  <div>
    <!-- ===================== HERO ===================== -->
    <section class="relative overflow-hidden section-navy">
      <div class="absolute inset-0 pointer-events-none opacity-50 bg-radial-navy"></div>
      <div class="relative max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-12">
        <div class="max-w-3xl">
          <span class="eyebrow">{{ t('home.eyebrow') }}</span>
          <h1 class="mt-4 text-[44px] sm:text-[56px] leading-[1.05] font-semibold tracking-tight text-white">
            {{ t('home.title1') }}<br />
            <span class="text-navy-200">{{ t('home.title2') }}</span>
          </h1>
          <p class="mt-6 text-lg text-navy-100/80 max-w-2xl leading-relaxed">
            {{ t('home.subtitle') }}
          </p>
          <div class="mt-8 flex flex-wrap items-center gap-3">
            <a href="#download" class="btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
              {{ t('common.downloadMac') }}
            </a>
            <NuxtLink :to="localePath('features')" class="btn-ghost">
              {{ t('common.viewFeatures') }}
            </NuxtLink>
          </div>

          <div class="mt-10 flex flex-wrap gap-5 text-sm text-navy-200">
            <span class="inline-flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-emerald-300"></span>
              {{ t('home.trustNoTelemetry') }}
            </span>
            <span class="inline-flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-emerald-300"></span>
              {{ t('home.trustLocal') }}
            </span>
            <span class="inline-flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-emerald-300"></span>
              {{ t('home.trustNative') }}
            </span>
          </div>
        </div>

        <!-- Mockup carousel -->
        <div class="relative mt-14">
          <div class="flex gap-2 justify-center sm:justify-start text-xs">
            <button
              v-for="s in screens"
              :key="s.id"
              class="px-3.5 py-1.5 rounded-full font-medium transition-colors"
              :class="activeScreen === s.id
                ? 'bg-white text-navy-800'
                : 'bg-white/5 border border-white/10 text-navy-100 hover:bg-white/10'"
              @click="activeScreen = s.id as any"
            >
              {{ s.label }}
            </button>
          </div>

          <div class="mt-5 relative">
            <div class="absolute inset-x-10 top-10 bottom-0 rounded-3xl bg-gradient-to-b from-white/5 to-transparent blur-2xl"></div>
            <div class="relative max-w-5xl">
              <MacWindow title="LexCase">
                <div class="h-[460px] w-full">
                  <MockCases     v-if="activeScreen === 'cases'" />
                  <MockCalendar  v-else-if="activeScreen === 'calendar'" />
                  <MockFinances  v-else-if="activeScreen === 'finances'" />
                  <MockClients   v-else />
                </div>
              </MacWindow>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================== FEATURES ===================== -->
    <section class="section bg-white">
      <div class="max-w-7xl mx-auto px-5 sm:px-8">
        <div class="max-w-2xl">
          <span class="eyebrow">{{ t('home.featuresEyebrow') }}</span>
          <h2 class="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-navy-800">{{ t('home.featuresTitle') }}</h2>
          <p class="mt-4 text-slate-600 leading-relaxed">{{ t('home.featuresSubtitle') }}</p>
        </div>
        <div class="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="(f, i) in features"
            :key="i"
            class="card p-6 hover:shadow-md transition-shadow"
          >
            <div class="w-10 h-10 rounded-xl bg-navy-50 text-navy-800 flex items-center justify-center mb-4">
              <svg v-if="f.icon === 'cases'"     width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /><rect x="2" y="6" width="20" height="14" rx="2" /></svg>
              <svg v-else-if="f.icon === 'calendar'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
              <svg v-else-if="f.icon === 'clients'"  width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
              <svg v-else-if="f.icon === 'finances'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="14" rx="2" /><circle cx="12" cy="13" r="2.5" /><path d="M6 6V4h12v2" /></svg>
              <svg v-else-if="f.icon === 'notes'"    width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="9" y1="13" x2="15" y2="13" /><line x1="9" y1="17" x2="15" y2="17" /></svg>
              <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
            </div>
            <h3 class="text-lg font-semibold text-navy-800 leading-tight">{{ f.title }}</h3>
            <p class="mt-2 text-sm text-slate-600 leading-relaxed">{{ f.body }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================== PRIVACY ===================== -->
    <section class="section section-navy relative overflow-hidden">
      <div class="absolute inset-0 pointer-events-none opacity-60 bg-radial-navy"></div>
      <div class="relative max-w-7xl mx-auto px-5 sm:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span class="eyebrow">{{ t('home.privacyEyebrow') }}</span>
          <h2 class="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-white">{{ t('home.privacyTitle') }}</h2>
          <p class="mt-5 text-navy-100/85 leading-relaxed">{{ t('home.privacyBody') }}</p>
          <ul class="mt-6 space-y-3 text-navy-100/90">
            <li class="flex items-start gap-3">
              <span class="mt-1 w-5 h-5 rounded-full bg-emerald-400/20 border border-emerald-300/40 text-emerald-200 flex items-center justify-center shrink-0">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
              </span>
              {{ t('home.privacyPoint1') }}
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-1 w-5 h-5 rounded-full bg-emerald-400/20 border border-emerald-300/40 text-emerald-200 flex items-center justify-center shrink-0">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
              </span>
              {{ t('home.privacyPoint2') }}
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-1 w-5 h-5 rounded-full bg-emerald-400/20 border border-emerald-300/40 text-emerald-200 flex items-center justify-center shrink-0">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
              </span>
              {{ t('home.privacyPoint3') }}
            </li>
          </ul>
        </div>
        <div class="relative">
          <div class="rounded-2xl bg-white/5 border border-white/10 backdrop-blur p-6">
            <div class="flex items-center gap-3 text-sm font-semibold text-navy-100">
              <span class="w-8 h-8 rounded-lg bg-emerald-400/10 border border-emerald-300/30 text-emerald-300 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              </span>
              Sandbox macOS
            </div>
            <p class="mt-4 text-sm text-navy-100/80 leading-relaxed">
              ~/Library/Containers/<wbr>com.lexcaserd.app/
            </p>
            <div class="mt-5 grid grid-cols-2 gap-3 text-xs">
              <div class="rounded-lg bg-white/5 border border-white/10 p-3">
                <p class="text-navy-200">Telemetría</p>
                <p class="text-white font-semibold mt-1">Cero</p>
              </div>
              <div class="rounded-lg bg-white/5 border border-white/10 p-3">
                <p class="text-navy-200">Servidores propios</p>
                <p class="text-white font-semibold mt-1">Ninguno</p>
              </div>
              <div class="rounded-lg bg-white/5 border border-white/10 p-3">
                <p class="text-navy-200">Conexión externa</p>
                <p class="text-white font-semibold mt-1">BCRD (opcional)</p>
              </div>
              <div class="rounded-lg bg-white/5 border border-white/10 p-3">
                <p class="text-navy-200">Exportación</p>
                <p class="text-white font-semibold mt-1">JSON</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================== CTA ===================== -->
    <section id="download" class="section bg-white">
      <div class="max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <h2 class="text-3xl sm:text-4xl font-semibold tracking-tight text-navy-800">{{ t('home.ctaSectionTitle') }}</h2>
        <p class="mt-4 text-slate-600 leading-relaxed">{{ t('home.ctaSectionBody') }}</p>
        <div class="mt-8 flex flex-wrap justify-center gap-3">
          <a href="https://apps.apple.com/" class="btn-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
              {{ t('common.downloadMac') }}
          </a>
          <span class="inline-flex items-center gap-2 px-4 py-3 rounded-full text-sm text-slate-600 border border-slate-200">
            <span class="w-2 h-2 rounded-full bg-amber-400"></span>
            {{ t('common.comingSoonWin') }}
          </span>
        </div>
      </div>
    </section>
  </div>
</template>
