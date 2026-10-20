<script setup lang="ts">
const { t, locale } = useI18n()

definePageMeta({ name: 'features' })

useHead(() => ({
  title: `${t('features.title')} — Lexbell`,
  meta: [{ name: 'description', content: t('features.subtitle') }]
}))

const caseTypes = computed(() => [
  { name: t('features.sp1TypeJudicial') },
  { name: t('features.sp1TypeAdmin') },
  { name: t('features.sp1TypeMig') },
  { name: t('features.sp1TypeEmp') },
  { name: t('features.sp1TypeAlq') },
  { name: t('features.sp1TypeCv') }
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
  <div class="features-page">
    <!-- HERO -->
    <section class="section">
      <div class="apple-wrap text-center">
        <span class="eyebrow">{{ t('nav.features') }}</span>
        <h1 class="h-display mt-2">{{ t('features.title') }}</h1>
        <p class="subtitle mt-5 mx-auto" style="max-width: 680px;">{{ t('features.subtitle') }}</p>
      </div>
    </section>

    <!-- ========= SPOTLIGHT 1 · Expedientes ========= -->
    <section class="section section-gray">
      <div class="apple-wrap-wide grid gap-12 items-center lg:grid-cols-2">
        <div>
          <span class="module-eyebrow">{{ t('features.sp1Eyebrow') }}</span>
          <h2 class="h-section mt-2">{{ t('features.sp1Title') }}</h2>
          <p class="subtitle mt-4">{{ t('features.sp1Body') }}</p>
          <div class="mt-6 flex flex-wrap gap-2">
            <span v-for="tt in caseTypes" :key="tt.name" class="type-pill">
              {{ tt.name }}
            </span>
          </div>
        </div>
        <div class="apple-window-box">
          <img
            :src="locale === 'en' ? '/screenshots/cases-en.png' : '/screenshots/casos.png'"
            alt="Expedientes en Lexbell"
            class="apple-app-img"
            loading="lazy"
            width="2245"
            height="1335"
          />
        </div>
      </div>
    </section>

    <!-- ========= SPOTLIGHT 2 · Plazos y audiencias ========= -->
    <section class="section">
      <div class="apple-wrap-wide grid gap-12 items-center lg:grid-cols-2">
        <div class="lg:order-2">
          <span class="module-eyebrow">{{ t('features.sp2Eyebrow') }}</span>
          <h2 class="h-section mt-2">{{ t('features.sp2Title') }}</h2>
          <p class="subtitle mt-4">{{ t('features.sp2Body') }}</p>
        </div>
        <div class="apple-window-box lg:order-1">
          <img
            :src="locale === 'en' ? '/screenshots/calendar-en.png' : '/screenshots/calendario.png'"
            alt="Agenda Procesal en Lexbell"
            class="apple-app-img"
            loading="lazy"
            width="2245"
            height="1335"
          />
        </div>
      </div>
    </section>

    <!-- ========= SPOTLIGHT 3 · Documentos y respaldos ========= -->
    <section class="section section-gray">
      <div class="apple-wrap-wide grid gap-12 items-center lg:grid-cols-2">
        <div>
          <span class="module-eyebrow">{{ t('features.sp3Eyebrow') }}</span>
          <h2 class="h-section mt-2">{{ t('features.sp3Title') }}</h2>
          <p class="subtitle mt-4">{{ t('features.sp3Body') }}</p>
        </div>
        <div class="apple-window-box">
          <img
            :src="locale === 'en' ? '/screenshots/documents-en.png' : '/screenshots/documentos.png'"
            alt="Bóveda de Documentos en Lexbell"
            class="apple-app-img"
            loading="lazy"
            width="2245"
            height="1335"
          />
        </div>
      </div>
    </section>

    <!-- ========= SPOTLIGHT 4 · Mapa de vínculos ========= -->
    <section class="section">
      <div class="apple-wrap-wide grid gap-12 items-center lg:grid-cols-2">
        <div class="lg:order-2">
          <span class="module-eyebrow">{{ t('features.sp5Eyebrow') }}</span>
          <h2 class="h-section mt-2">{{ t('features.sp5Title') }}</h2>
          <p class="subtitle mt-4">{{ t('features.sp5Body') }}</p>
        </div>
        <div class="apple-window-box lg:order-1">
          <img
            :src="locale === 'en' ? '/screenshots/map-en.png' : '/screenshots/mapa.png'"
            alt="Mapa de Vínculos y Conflictos en Lexbell"
            class="apple-app-img"
            loading="lazy"
            width="2245"
            height="1335"
          />
        </div>
      </div>
    </section>

    <!-- ========= SPOTLIGHT 5 · Privacidad por diseño ========= -->
    <section class="section section-gray">
      <div class="apple-wrap text-center">
        <span class="module-eyebrow">{{ t('features.sp4Eyebrow') }}</span>
        <h2 class="h-section mt-2">{{ t('features.sp4Title') }}</h2>
        <p class="subtitle mt-5 mx-auto" style="max-width: 680px;">{{ t('features.sp4Body') }}</p>

        <div class="privacy-stat-row">
          <div class="privacy-stat">
            <div class="privacy-stat-num">0</div>
            <div class="privacy-stat-label">Trackers</div>
          </div>
          <div class="privacy-stat">
            <div class="privacy-stat-num">0</div>
            <div class="privacy-stat-label">{{ locale === 'es' ? 'Telemetría' : 'Telemetry' }}</div>
          </div>
          <div class="privacy-stat">
            <div class="privacy-stat-num">AES-256</div>
            <div class="privacy-stat-label">{{ locale === 'es' ? 'Cifrado Local' : 'Local Encryption' }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ========= TILES · Y todo lo demás ========= -->
    <section class="section">
      <div class="apple-wrap text-center">
        <span class="eyebrow">{{ t('features.moreEyebrow') }}</span>
        <h2 class="h-section mt-2">{{ t('features.moreTitle') }}</h2>
      </div>

      <div class="apple-wrap-wide mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        <article v-for="(tile, i) in tiles" :key="i" class="ft-tile">
          <div class="ft-tile-icon">
            <svg v-if="tile.icon === 'search'" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
            <svg v-else-if="tile.icon === 'keyboard'" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="14" rx="2"/><line x1="6" y1="10" x2="6" y2="10"/><line x1="10" y1="10" x2="10" y2="10"/><line x1="14" y1="10" x2="14" y2="10"/><line x1="18" y1="10" x2="18" y2="10"/><line x1="6" y1="14" x2="6" y2="14"/><line x1="18" y1="14" x2="18" y2="14"/><line x1="10" y1="14" x2="14" y2="14"/></svg>
            <svg v-else-if="tile.icon === 'users'" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            <svg v-else-if="tile.icon === 'backup'" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            <svg v-else-if="tile.icon === 'notes'" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="15" y2="17"/></svg>
            <svg v-else width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>
          </div>
          <h3 class="ft-tile-title">{{ tile.title }}</h3>
          <p class="ft-tile-body">{{ tile.body }}</p>
        </article>
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
.features-page {
  background: #ffffff;
  color: #191919;
}

.module-eyebrow {
  display: inline-block;
  font-size: 11.5px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #0066cc;
  margin-bottom: 8px;
}

.type-pill {
  display: inline-flex;
  align-items: center;
  padding: 6px 14px;
  border-radius: 999px;
  background: #ffffff;
  border: 1px solid #ebebea;
  font-size: 13px;
  font-weight: 500;
  color: #191919;
}

.apple-window-box {
  width: 100%;
  border-radius: 12px;
  line-height: 0;
  box-shadow:
    0 0 0 1px rgba(0, 0, 0, 0.12),
    0 12px 30px -4px rgba(0, 0, 0, 0.16),
    0 32px 64px -14px rgba(0, 0, 0, 0.28);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.apple-window-box:hover {
  transform: translateY(-2px);
  box-shadow:
    0 0 0 1px rgba(0, 0, 0, 0.15),
    0 16px 36px -4px rgba(0, 0, 0, 0.20),
    0 40px 75px -14px rgba(0, 0, 0, 0.32);
}

.apple-app-img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 12px;
}

/* === Stat row del spotlight de privacidad === */
.privacy-stat-row {
  margin-top: 48px;
  display: inline-flex;
  gap: 56px;
  flex-wrap: wrap;
  justify-content: center;
}
.privacy-stat-num {
  font-size: clamp(40px, 4.5vw, 56px);
  font-weight: 700;
  letter-spacing: -0.03em;
  color: #050505;
  line-height: 1;
}
.privacy-stat-label {
  margin-top: 8px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #5f5e5b;
}

/* === Tiles minimalistas === */
.ft-tile { text-align: left; }
.ft-tile-icon {
  width: 42px;
  height: 42px;
  border-radius: 10px;
  background: #f1f1ef;
  color: #050505;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}
.ft-tile-title {
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.015em;
  color: #050505;
  margin: 0 0 8px;
}
.ft-tile-body {
  font-size: 14.5px;
  line-height: 1.55;
  color: #5f5e5b;
  margin: 0;
}

/* === CTA Final === */
.notion-cta-section {
  background: #f7f7f5;
  border-top: 1px solid #ebebea;
  padding: clamp(60px, 8vh, 90px) 24px;
}
</style>
