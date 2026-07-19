<script setup lang="ts">
const { t, locale } = useI18n()

definePageMeta({ name: 'features' })

useHead(() => ({
  title: `${t('features.title')} — Lexbell`,
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
          <span v-for="tt in caseTypes" :key="tt.name" class="type-chip">
            {{ tt.name }}
          </span>
        </div>
      </div>
      <div class="spot-panel">
        <span class="spot-badge" aria-hidden="true">
          <svg width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <rect width="20" height="14" x="2" y="7" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          </svg>
        </span>
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
      <div class="spot-panel lg:order-1">
        <span class="spot-badge" aria-hidden="true">
          <svg width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" />
          </svg>
        </span>
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
      <div class="spot-panel">
        <span class="spot-badge" aria-hidden="true">
          <svg width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 16v5" /><path d="M16 14.639V21" /><path d="M20 10.656V21" /><path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15" /><path d="M4 18.463V21" /><path d="M8 14.656V21" />
          </svg>
        </span>
      </div>
    </div>
  </section>

  <!-- ========= SPOTLIGHT 5 · Mapa de vínculos ========= -->
  <section class="section">
    <div class="apple-wrap-wide grid gap-12 items-center lg:grid-cols-2">
      <div class="lg:order-2">
        <span class="eyebrow">{{ t('features.sp5Eyebrow') }}</span>
        <h2 class="h-feature mt-2">{{ t('features.sp5Title') }}</h2>
        <p class="subtitle mt-5">{{ t('features.sp5Body') }}</p>
      </div>
      <div class="spot-panel lg:order-1">
        <span class="spot-badge" aria-hidden="true">
          <svg width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
          </svg>
        </span>
      </div>
    </div>
  </section>

  <!-- ========= SPOTLIGHT 4 · Privacidad (texto centrado, full-bleed minimal) ========= -->
  <section class="section section-gray">
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
  <section class="section">
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
/* === Panel visual icon-driven de cada spotlight (sin capturas) === */
.spot-panel {
  position: relative;
  border-radius: 22px;
  aspect-ratio: 16 / 11;
  background: radial-gradient(120% 100% at 50% 0%, #F7E9F4 0%, #ffffff 72%);
  border: 1px solid var(--divider);
  display: grid;
  place-items: center;
  overflow: hidden;
  box-shadow:
    0 0 0 1px rgba(94, 41, 87, 0.05),
    0 30px 60px -22px rgba(94, 41, 87, 0.24);
}
.spot-panel::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(94, 41, 87, 0.11) 1px, transparent 1px);
  background-size: 22px 22px;
  mask-image: radial-gradient(120% 90% at 50% 42%, #000 28%, transparent 74%);
  -webkit-mask-image: radial-gradient(120% 90% at 50% 42%, #000 28%, transparent 74%);
}
.spot-badge {
  position: relative;
  z-index: 1;
  width: 108px;
  height: 108px;
  border-radius: 28px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(155deg, #B86AAC 0%, #AC56A0 50%, #974A8B 100%);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.25),
    0 18px 42px -14px rgba(151, 74, 139, 0.7);
}

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
  background: var(--brand-tint);
  color: var(--accent);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
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
