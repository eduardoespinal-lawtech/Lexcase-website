<script setup lang="ts">
const { t, locale } = useI18n()

definePageMeta({ name: 'features' })

useHead(() => ({
  title: `${t('features.title')} — Lexcase`,
  meta: [{ name: 'description', content: t('features.subtitle') }]
}))

const caseTypes = computed(() => [
  { name: t('features.sp1TypeJudicial'), tone: 'tone-indigo' },
  { name: t('features.sp1TypeAdmin'),    tone: 'tone-amber' },
  { name: t('features.sp1TypeMig'),      tone: 'tone-emerald' },
  { name: t('features.sp1TypeEmp'),      tone: 'tone-rose' },
  { name: t('features.sp1TypeAlq'),      tone: 'tone-cyan' },
  { name: t('features.sp1TypeCv'),       tone: 'tone-violet' }
])

const tiles = computed(() => [
  { icon: 'search',    title: t('features.tile1Title'), body: t('features.tile1Body') },
  { icon: 'keyboard',  title: t('features.tile2Title'), body: t('features.tile2Body') },
  { icon: 'users',     title: t('features.tile3Title'), body: t('features.tile3Body') },
  { icon: 'backup',    title: t('features.tile4Title'), body: t('features.tile4Body') },
  { icon: 'notes',     title: t('features.tile5Title'), body: t('features.tile5Body') },
  { icon: 'design',    title: t('features.tile6Title'), body: t('features.tile6Body') }
])
</script>

<template>
  <!-- HERO -->
  <section class="section">
    <div class="apple-wrap text-center">
      <h1 class="h-page">{{ t('features.title') }}</h1>
      <p class="subtitle mt-6 mx-auto" style="max-width: 720px;">{{ t('features.subtitle') }}</p>
    </div>
  </section>

  <!-- ========= SPOTLIGHT 1 · Expedientes ========= -->
  <section class="section section-gray">
    <div class="apple-wrap-wide grid gap-12 items-center lg:grid-cols-2">
      <div>
        <span class="eyebrow">{{ t('features.sp1Eyebrow') }}</span>
        <h2 class="h-feature mt-2">{{ t('features.sp1Title') }}</h2>
        <p class="subtitle mt-5">{{ t('features.sp1Body') }}</p>
        <div class="mt-8 flex flex-wrap gap-2">
          <span v-for="tt in caseTypes" :key="tt.name" class="case-chip" :class="tt.tone">
            {{ tt.name }}
          </span>
        </div>
      </div>
      <div class="mockup-float rounded-[22px] overflow-hidden">
        <img
          src="/screenshots/expedientes.png"
          alt="Detalle de expediente en Lexcase"
          class="block w-full h-auto"
          loading="lazy"
        />
      </div>
    </div>
  </section>

  <!-- ========= SPOTLIGHT 2 · Plazos y audiencias ========= -->
  <section class="section">
    <div class="apple-wrap-wide grid gap-12 items-center lg:grid-cols-2">
      <div class="lg:order-2">
        <span class="eyebrow">{{ t('features.sp2Eyebrow') }}</span>
        <h2 class="h-feature mt-2">{{ t('features.sp2Title') }}</h2>
        <p class="subtitle mt-5">{{ t('features.sp2Body') }}</p>
      </div>
      <div class="mockup-float rounded-[22px] overflow-hidden lg:order-1">
        <img
          src="/screenshots/plazos.png"
          alt="Lista de plazos procesales en Lexcase"
          class="block w-full h-auto"
          loading="lazy"
        />
      </div>
    </div>
  </section>

  <!-- ========= SPOTLIGHT 3 · Finanzas ========= -->
  <section class="section section-gray">
    <div class="apple-wrap-wide grid gap-12 items-center lg:grid-cols-2">
      <div>
        <span class="eyebrow">{{ t('features.sp3Eyebrow') }}</span>
        <h2 class="h-feature mt-2">{{ t('features.sp3Title') }}</h2>
        <p class="subtitle mt-5">{{ t('features.sp3Body') }}</p>
      </div>
      <div class="mockup-float rounded-[22px] overflow-hidden">
        <img
          src="/screenshots/finanzas.png"
          alt="Sección de finanzas con tasa BCRD en vivo"
          class="block w-full h-auto"
          loading="lazy"
        />
      </div>
    </div>
  </section>

  <!-- ========= SPOTLIGHT 4 · Privacidad (texto centrado, full-bleed minimal) ========= -->
  <section class="section">
    <div class="apple-wrap text-center">
      <span class="eyebrow">{{ t('features.sp4Eyebrow') }}</span>
      <h2 class="h-section mt-2">{{ t('features.sp4Title') }}</h2>
      <p class="subtitle mt-6 mx-auto" style="max-width: 720px;">{{ t('features.sp4Body') }}</p>

      <div class="privacy-stat-row">
        <div class="privacy-stat">
          <div class="privacy-stat-num">0</div>
          <div class="privacy-stat-label">{{ locale === 'es' ? 'Servidores nuestros' : 'Our servers' }}</div>
        </div>
        <div class="privacy-stat">
          <div class="privacy-stat-num">0</div>
          <div class="privacy-stat-label">Trackers</div>
        </div>
        <div class="privacy-stat">
          <div class="privacy-stat-num">100%</div>
          <div class="privacy-stat-label">Local</div>
        </div>
      </div>
    </div>
  </section>

  <!-- ========= TILES · And everything else ========= -->
  <section class="section section-gray">
    <div class="apple-wrap text-center">
      <span class="eyebrow">{{ t('features.moreEyebrow') }}</span>
      <h2 class="h-section mt-2">{{ t('features.moreTitle') }}</h2>
    </div>

    <div class="apple-wrap-wide mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      <article v-for="(tile, i) in tiles" :key="i" class="ft-tile">
        <div class="ft-tile-icon">
          <svg v-if="tile.icon === 'search'" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
          <svg v-else-if="tile.icon === 'keyboard'" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="14" rx="2"/><line x1="6" y1="10" x2="6" y2="10"/><line x1="10" y1="10" x2="10" y2="10"/><line x1="14" y1="10" x2="14" y2="10"/><line x1="18" y1="10" x2="18" y2="10"/><line x1="6" y1="14" x2="6" y2="14"/><line x1="18" y1="14" x2="18" y2="14"/><line x1="10" y1="14" x2="14" y2="14"/></svg>
          <svg v-else-if="tile.icon === 'users'" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          <svg v-else-if="tile.icon === 'backup'" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          <svg v-else-if="tile.icon === 'notes'" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="15" y2="17"/></svg>
          <svg v-else width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>
        </div>
        <h3 class="ft-tile-title">{{ tile.title }}</h3>
        <p class="ft-tile-body">{{ tile.body }}</p>
      </article>
    </div>
  </section>
</template>

<style scoped>
/* === Chips de tipo de expediente (spotlight 1) === */
.case-chip {
  display: inline-flex;
  align-items: center;
  padding: 7px 14px;
  border-radius: 999px;
  font-size: 13.5px;
  font-weight: 500;
  letter-spacing: -0.005em;
  line-height: 1;
}
.tone-indigo  { background: rgba(99, 102, 241, 0.12);  color: #4338ca; }
.tone-amber   { background: rgba(245, 158, 11, 0.14);  color: #b45309; }
.tone-emerald { background: rgba(16, 185, 129, 0.14);  color: #047857; }
.tone-rose    { background: rgba(244, 63, 94, 0.14);   color: #be123c; }
.tone-cyan    { background: rgba(6, 182, 212, 0.14);   color: #0e7490; }
.tone-violet  { background: rgba(139, 92, 246, 0.14);  color: #6d28d9; }

/* === Stat row del spotlight de privacidad === */
.privacy-stat-row {
  margin-top: 56px;
  display: inline-flex;
  gap: 64px;
  flex-wrap: wrap;
  justify-content: center;
}
.privacy-stat-num {
  font-size: clamp(48px, 5vw, 64px);
  font-weight: 600;
  letter-spacing: -0.03em;
  color: #1d1d1f;
  line-height: 1;
}
.privacy-stat-label {
  margin-top: 8px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #6e6e73;
}

/* === Tiles minimalistas (sin tarjeta, solo icono + texto) === */
.ft-tile { text-align: left; }
.ft-tile-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: #fff;
  color: #1d1d1f;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}
.ft-tile-title {
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: #1d1d1f;
  margin: 0 0 8px;
}
.ft-tile-body {
  font-size: 16px;
  line-height: 1.5;
  color: #6e6e73;
  margin: 0;
}
</style>
