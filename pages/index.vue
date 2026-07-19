<script setup lang="ts">
const { t, locale } = useI18n()
const localePath = useLocalePath()

useHead(() => ({
  title: `Lexbell — ${t('home.heroTitle')} ${t('home.heroTitle2')}`,
  meta: [
    { name: 'description', content: t('home.heroSubtitle') },
    { property: 'og:title', content: 'Lexbell' },
    { property: 'og:description', content: t('home.heroSubtitle') },
    { property: 'og:url', content: locale.value === 'es' ? 'https://lex-bell.com/' : 'https://lex-bell.com/en' }
  ],
  link: [
    { rel: 'alternate', hreflang: 'es', href: 'https://lex-bell.com/' },
    { rel: 'alternate', hreflang: 'en', href: 'https://lex-bell.com/en' },
    { rel: 'alternate', hreflang: 'x-default', href: 'https://lex-bell.com/' }
  ]
}))

/* Seis tipos de expediente — cada uno con su icono de línea (sin capturas). */
/* Iconos idénticos a los que usa la app (lucide): Judicial=scale,
   Administrativo=landmark, Migración=tickets-plane, Empresa=building-2,
   Alquiler=warehouse, Compraventa=handshake. */
const types = computed(() => [
  { label: t('home.tabJudicial'),       sub: t('home.tabJudicialSub'),       paths: ['M12 3v18', 'm19 8 3 8a5 5 0 0 1-6 0zV7', 'M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1', 'm5 8 3 8a5 5 0 0 1-6 0zV7', 'M7 21h10'] },
  { label: t('home.tabAdministrativo'), sub: t('home.tabAdministrativoSub'), paths: ['M10 18v-7', 'M11.119 2.205a2 2 0 0 1 1.762 0l7.84 3.846A.5.5 0 0 1 20.5 7h-17a.5.5 0 0 1-.22-.949z', 'M14 18v-7', 'M18 18v-7', 'M3 22h18', 'M6 18v-7'] },
  { label: t('home.tabMigracion'),      sub: t('home.tabMigracionSub'),      paths: ['M10.5 17h1.227a2 2 0 0 0 1.345-.52L18 12', 'm12 13.5 3.794.506', 'm3.173 8.18 11-5a2 2 0 0 1 2.647.993L18.56 8', 'M6 10V8', 'M6 14v1', 'M6 19v2'] },
  { label: t('home.tabEmpresa'),        sub: t('home.tabEmpresaSub'),        paths: ['M10 12h4', 'M10 8h4', 'M14 21v-3a2 2 0 0 0-4 0v3', 'M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2', 'M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16'] },
  { label: t('home.tabAlquiler'),       sub: t('home.tabAlquilerSub'),       paths: ['M18 21V10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v11', 'M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 1.132-1.803l7.95-3.974a2 2 0 0 1 1.837 0l7.948 3.974A2 2 0 0 1 22 8z', 'M6 13h12', 'M6 17h12'] },
  { label: t('home.tabCompraventa'),    sub: t('home.tabCompraventaSub'),    paths: ['m11 17 2 2a1 1 0 1 0 3-3', 'm14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4', 'm21 3 1 11h-2', 'M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3', 'M3 4h8'] }
])
</script>

<template>
  <!-- =================== HERO =================== -->
  <section class="hero">
    <div class="hero-inner">
      <img src="/icon.svg" alt="Lexbell" class="hero-icon" width="92" height="92" />
      <h1 class="hero-title">
        {{ t('home.heroTitle') }}<br />
        <span class="hero-title-accent">{{ t('home.heroTitle2') }}</span>
      </h1>
      <p class="hero-sub">{{ t('home.heroSubtitle') }}</p>

      <div class="hero-ctas">
        <AppDownload light center />
      </div>

      <ul class="hero-trust" aria-label="Highlights">
        <li>{{ t('home.trust1') }}</li>
        <li>{{ t('home.trust2') }}</li>
        <li>{{ t('home.trust3') }}</li>
        <li>{{ t('home.trust4') }}</li>
      </ul>
    </div>
  </section>

  <!-- =================== SEIS TIPOS DE EXPEDIENTE (icon grid) =================== -->
  <section class="section">
    <div class="apple-wrap-wide">
      <div class="bento-head">
        <span class="eyebrow">{{ t('home.audienceEyebrow') }}</span>
        <h2 class="h-feature mt-1">{{ t('home.audienceTitle') }}</h2>
        <p class="subtitle mt-4" style="max-width: 680px; font-size: clamp(17px,1.8vw,21px);">{{ t('home.audienceBody') }}</p>
      </div>

      <div class="type-grid mt-12">
        <article v-for="ty in types" :key="ty.label" class="type-card">
          <span class="card-icon" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path v-for="(d, i) in ty.paths" :key="i" :d="d" />
            </svg>
          </span>
          <h3 class="type-name">{{ ty.label }}</h3>
          <p class="type-sub">{{ ty.sub }}</p>
        </article>
      </div>
    </div>
  </section>

  <!-- =================== BENTO DE CAPACIDADES =================== -->
  <section class="section section-gray">
    <div class="apple-wrap-wide">
      <div class="bento-head">
        <span class="eyebrow">{{ t('home.section1Eyebrow') }}</span>
        <h2 class="h-feature mt-1">{{ t('home.section1Title') }}</h2>
      </div>

      <div class="bento mt-12">
        <!-- Expedientes -->
        <article class="bento-card bento-wide">
          <span class="card-icon" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
              <rect width="20" height="14" x="2" y="7" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
          </span>
          <h3 class="card-title">{{ t('home.cardCasesTitle') }}</h3>
          <p class="card-body" style="max-width: 640px;">{{ t('home.section1Body') }}</p>
          <NuxtLink :to="localePath('features')" class="link-apple mt-4 inline-flex">{{ t('common.learnMore') }}</NuxtLink>
        </article>

        <!-- Mapa de vínculos -->
        <article class="bento-card">
          <span class="card-icon" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
          </span>
          <h3 class="card-title">{{ t('home.mapTitle') }}</h3>
          <p class="card-body">{{ t('home.mapBody') }}</p>
        </article>

        <!-- Clientes -->
        <article class="bento-card">
          <span class="card-icon" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </span>
          <h3 class="card-title">{{ t('home.section2Title') }}</h3>
          <p class="card-body">{{ t('home.section2Body') }}</p>
        </article>

        <!-- Finanzas -->
        <article class="bento-card">
          <span class="card-icon" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 16v5" /><path d="M16 14.639V21" /><path d="M20 10.656V21" /><path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15" /><path d="M4 18.463V21" /><path d="M8 14.656V21" />
            </svg>
          </span>
          <h3 class="card-title">{{ t('home.section3Title') }}</h3>
          <p class="card-body">{{ t('home.section3Body') }}</p>
        </article>

        <!-- Privacidad -->
        <article class="bento-card">
          <span class="card-icon" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" />
            </svg>
          </span>
          <h3 class="card-title">{{ t('home.section4Title') }}</h3>
          <p class="card-body">{{ t('home.section4Body') }}</p>
        </article>
      </div>
    </div>
  </section>

  <!-- =================== CTA OSCURO =================== -->
  <section class="section section-dark">
    <div class="apple-wrap text-center" style="position: relative; z-index: 1;">
      <span class="eyebrow">{{ t('home.ctaSectionEyebrow') }}</span>
      <h2 class="h-section mt-1">{{ t('home.ctaSectionTitle') }}</h2>
      <div class="mt-8 flex justify-center">
        <AppDownload light center />
      </div>
    </div>
  </section>
</template>

<style scoped>
/* === HERO — ciruela profunda, minimalista === */
.hero {
  position: relative;
  background:
    radial-gradient(85% 55% at 50% 6%, rgba(192, 107, 180, 0.34) 0%, rgba(192, 107, 180, 0) 60%),
    linear-gradient(180deg, #3F1B3A 0%, #2A1228 55%, #1C0C1B 100%);
  padding: clamp(80px, 13vh, 140px) 22px clamp(72px, 10vh, 120px);
  overflow: hidden;
}
.hero-inner {
  position: relative;
  z-index: 1;
  max-width: 820px;
  margin: 0 auto;
  text-align: center;
}
.hero-icon {
  width: 92px;
  height: 92px;
  border-radius: 22px;
  margin: 0 auto 30px;
  display: block;
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.14) inset,
    0 18px 40px -12px rgba(0, 0, 0, 0.55),
    0 0 60px -8px rgba(192, 107, 180, 0.55);
}
.hero-title {
  font-size: clamp(44px, 7vw, 84px);
  line-height: 1.05;
  letter-spacing: -0.025em;
  font-weight: 600;
  color: #fff;
  margin: 0;
}
.hero-title-accent {
  background: linear-gradient(110deg, #ffffff 0%, #F0C9E6 45%, #C06BB4 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.hero-sub {
  font-size: clamp(18px, 1.7vw, 22px);
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.74);
  margin: 22px auto 0;
  max-width: 640px;
  font-weight: 400;
  letter-spacing: -0.005em;
}
.hero-ctas {
  margin-top: 34px;
  display: inline-flex;
  align-items: center;
  gap: 22px;
  flex-wrap: wrap;
  justify-content: center;
}
.hero-coming { font-size: 15px; color: rgba(255, 255, 255, 0.55); line-height: 1; }
.hero-trust {
  list-style: none;
  margin: 32px auto 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.62);
  letter-spacing: -0.005em;
  font-weight: 500;
}
.hero-trust li { display: inline-flex; align-items: center; }
.hero-trust li + li::before {
  content: "·";
  margin: 0 14px;
  color: rgba(255, 255, 255, 0.3);
}

/* === Rejilla de tipos (icon-driven, técnica) === */
.bento-head { max-width: 760px; }
.type-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 14px;
}
@media (min-width: 640px) { .type-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 960px) { .type-grid { grid-template-columns: repeat(3, 1fr); } }
.type-card {
  background: #fff;
  border: 1px solid var(--divider);
  border-radius: 16px;
  padding: 22px;
  transition: border-color .2s ease, box-shadow .2s ease, transform .2s ease;
}
.type-card:hover {
  border-color: rgba(168, 71, 155, 0.32);
  box-shadow: 0 14px 34px -22px rgba(94, 41, 87, 0.34);
  transform: translateY(-2px);
}
.type-card .card-icon { width: 42px; height: 42px; margin-bottom: 14px; }
.type-name {
  font-size: 17px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--text);
  margin: 0;
}
.type-sub {
  font-size: 14px;
  line-height: 1.5;
  color: var(--text-muted);
  margin: 6px 0 0;
}
</style>
