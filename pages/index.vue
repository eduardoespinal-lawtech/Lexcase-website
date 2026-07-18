<script setup lang="ts">
const { t, locale } = useI18n()
const localePath = useLocalePath()

useHead(() => ({
  title: 'Lexbell — Apple-style legal practice for Mac',
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

const APP_STORE = 'https://apps.apple.com/us/app/lexbell/id6773133324?itscg=30200&itsct=apps_box_badge&mttnsubad=6773133324'

/* Pestañas por tipo de expediente real — cada una con su captura del
   demo data y su subtítulo describiendo los campos jurídicos específicos. */
const audiences = computed(() => [
  { id: 'judicial',       label: t('home.tabJudicial'),       subtitle: t('home.tabJudicialSub'),       img: '/screenshots/judicial.png',       alt: 'Lexbell con caso judicial Pérez vs. Banco Popular' },
  { id: 'administrativo', label: t('home.tabAdministrativo'), subtitle: t('home.tabAdministrativoSub'), img: '/screenshots/administrativo.png', alt: 'Lexbell con recurso contencioso tributario ante la DGII' },
  { id: 'migracion',      label: t('home.tabMigracion'),      subtitle: t('home.tabMigracionSub'),      img: '/screenshots/migracion.png',      alt: 'Lexbell con caso migratorio NVC Rodríguez' },
  { id: 'empresa',        label: t('home.tabEmpresa'),        subtitle: t('home.tabEmpresaSub'),        img: '/screenshots/empresa.png',        alt: 'Lexbell con constitución de sociedad Importadora del Caribe SRL' },
  { id: 'alquiler',       label: t('home.tabAlquiler'),       subtitle: t('home.tabAlquilerSub'),       img: '/screenshots/alquiler.png',       alt: 'Lexbell con contrato de alquiler Av. Anacaona 38' },
  { id: 'compraventa',    label: t('home.tabCompraventa'),    subtitle: t('home.tabCompraventaSub'),    img: '/screenshots/compraventa.png',    alt: 'Lexbell con compraventa de apartamento Bella Vista' }
])
const activeId = ref('judicial')
const active = computed(() => audiences.value.find(a => a.id === activeId.value) || audiences.value[0])
</script>

<template>
  <!-- =================== HERO OSCURO =================== -->
  <section class="hero-dark">
    <div class="hero-dark-inner">
      <h1 class="hero-title">
        {{ t('home.heroTitle') }}<br />
        <span class="hero-title-accent">{{ t('home.heroTitle2') }}</span>
      </h1>

      <!-- Segmented control — la misma app vista desde cada perfil -->
      <div class="hero-tabs" role="tablist" :aria-label="t('home.audienceEyebrow')">
        <button
          v-for="a in audiences"
          :key="a.id"
          role="tab"
          :aria-selected="activeId === a.id"
          class="hero-tab"
          :class="activeId === a.id ? 'is-active' : ''"
          @click="activeId = a.id"
        >
          {{ a.label }}
        </button>
      </div>

      <Transition name="hero-sub" mode="out-in">
        <p :key="active.id" class="hero-sub">{{ active.subtitle }}</p>
      </Transition>

      <div class="hero-ctas">
        <a :href="APP_STORE" class="btn-pill btn-pill-light" target="_blank" rel="noopener">
          {{ t('common.downloadMac') }}
        </a>
        <span class="hero-coming">{{ t('common.comingSoonWin') }}</span>
      </div>

      <ul class="hero-trust" aria-label="Highlights">
        <li>{{ t('home.trust1') }}</li>
        <li>{{ t('home.trust2') }}</li>
        <li>{{ t('home.trust3') }}</li>
        <li>{{ t('home.trust4') }}</li>
      </ul>

      <!-- Captura flotante con resplandor -->
      <div class="hero-shot">
        <Transition name="hero-shot" mode="out-in">
          <img
            :key="active.img"
            :src="active.img"
            :alt="active.alt"
            loading="eager"
            width="1600"
            height="1000"
          />
        </Transition>
      </div>
    </div>
  </section>

  <!-- =================== BENTO DE FEATURES =================== -->
  <section class="section">
    <div class="apple-wrap-wide">
      <div class="bento-head">
        <span class="eyebrow">{{ t('home.audienceEyebrow') }}</span>
        <h2 class="h-feature mt-1">{{ t('home.audienceTitle') }}</h2>
      </div>

      <div class="bento mt-12">
        <!-- Expedientes — tarjeta ancha con captura -->
        <article class="bento-card bento-wide bento-hero-card">
          <div class="bento-hero-text">
            <span class="card-icon" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
                <rect width="20" height="14" x="2" y="7" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            </span>
            <h3 class="card-title">{{ t('home.section1Title') }}</h3>
            <p class="card-body">{{ t('home.section1Body') }}</p>
            <NuxtLink :to="localePath('features')" class="link-apple mt-4 inline-flex">{{ t('common.learnMore') }}</NuxtLink>
          </div>
          <div class="card-shot bento-hero-shot">
            <img src="/screenshots/expedientes.png" alt="Detalle de expediente en Lexbell" loading="lazy" width="1600" height="1000" />
          </div>
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
              <circle cx="8" cy="8" r="6" /><path d="M18.09 10.37A6 6 0 1 1 10.34 18" /><path d="M7 6h1v4" /><path d="m16.71 13.88.7.71-2.82 2.82" />
            </svg>
          </span>
          <h3 class="card-title">{{ t('home.section3Title') }}</h3>
          <p class="card-body">{{ t('home.section3Body') }}</p>
        </article>

        <!-- 6 tipos de expediente -->
        <article class="bento-card">
          <span class="card-icon" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
              <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" /><path d="m6.08 9.5-3.48 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59" />
            </svg>
          </span>
          <h3 class="card-title">{{ t('home.trust1') }}</h3>
          <div class="card-chips">
            <span class="type-chip">{{ t('home.tabJudicial') }}</span>
            <span class="type-chip">{{ t('home.tabAdministrativo') }}</span>
            <span class="type-chip">{{ t('home.tabMigracion') }}</span>
            <span class="type-chip">{{ t('home.tabEmpresa') }}</span>
            <span class="type-chip">{{ t('home.tabAlquiler') }}</span>
            <span class="type-chip">{{ t('home.tabCompraventa') }}</span>
          </div>
        </article>

        <!-- Privacidad — con puntos -->
        <article class="bento-card">
          <span class="card-icon" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" />
            </svg>
          </span>
          <h3 class="card-title">{{ t('home.section4Title') }}</h3>
          <p class="card-body">{{ t('home.section4Body') }}</p>
          <ul class="card-points">
            <li v-for="p in [t('home.section4Point1'), t('home.section4Point2'), t('home.section4Point3')]" :key="p">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
              {{ p }}
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>

  <!-- =================== CTA OSCURO =================== -->
  <section class="section section-dark">
    <div class="apple-wrap text-center" style="position: relative; z-index: 1;">
      <span class="eyebrow">{{ t('home.ctaSectionEyebrow') }}</span>
      <h2 class="h-section mt-1">{{ t('home.ctaSectionTitle') }}</h2>
      <p class="subtitle mt-5 mx-auto" style="max-width: 640px;">{{ t('home.ctaSectionBody') }}</p>
      <div class="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
        <a :href="APP_STORE" class="btn-pill btn-pill-light" target="_blank" rel="noopener">{{ t('common.downloadMac') }}</a>
        <span class="text-[15px]" style="color: rgba(255,255,255,0.6);">{{ t('common.comingSoonWin') }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* === HERO OSCURO === */
.hero-dark {
  position: relative;
  background:
    radial-gradient(90% 55% at 50% 8%, rgba(79, 101, 188, 0.38) 0%, rgba(79, 101, 188, 0) 58%),
    linear-gradient(180deg, #0E1D4A 0%, #0A1738 55%, #061230 100%);
  padding: clamp(72px, 12vh, 128px) 22px clamp(64px, 9vh, 110px);
  overflow: hidden;
}
.hero-dark-inner {
  position: relative;
  z-index: 1;
  max-width: 960px;
  margin: 0 auto;
  text-align: center;
}
.hero-title {
  font-size: clamp(44px, 7vw, 88px);
  line-height: 1.05;
  letter-spacing: -0.025em;
  font-weight: 600;
  color: #fff;
  margin: 0;
}
.hero-title-accent {
  background: linear-gradient(110deg, #ffffff 0%, #C7D2F5 45%, #8FA2E8 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

/* Segmented control sobre oscuro */
.hero-tabs {
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.10);
  padding: 4px;
  border-radius: 999px;
  margin: 30px auto 0;
  backdrop-filter: blur(8px);
}
.hero-tab {
  padding: 7px 14px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.005em;
  color: rgba(255, 255, 255, 0.62);
  background: transparent;
  border: none;
  cursor: pointer;
  transition: color .15s ease, background .2s ease;
  line-height: 1;
}
.hero-tab:hover { color: #fff; }
.hero-tab.is-active { background: #fff; color: #0E1D4A; }
@media (max-width: 600px) { .hero-tab { padding: 7px 11px; font-size: 11.5px; } }

.hero-sub {
  font-size: clamp(17px, 1.5vw, 21px);
  line-height: 1.45;
  color: rgba(255, 255, 255, 0.72);
  margin: 22px auto 0;
  max-width: 660px;
  min-height: 62px;
  font-weight: 400;
  letter-spacing: -0.005em;
}
.hero-ctas {
  margin-top: 32px;
  display: inline-flex;
  align-items: center;
  gap: 22px;
  flex-wrap: wrap;
  justify-content: center;
}
.hero-coming { font-size: 15px; color: rgba(255, 255, 255, 0.55); line-height: 1; }

.hero-trust {
  list-style: none;
  margin: 30px auto 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.60);
  letter-spacing: -0.005em;
  font-weight: 500;
}
.hero-trust li { display: inline-flex; align-items: center; }
.hero-trust li + li::before {
  content: "·";
  margin: 0 14px;
  color: rgba(255, 255, 255, 0.28);
}

/* Captura con resplandor y aro */
.hero-shot {
  position: relative;
  margin: clamp(44px, 7vh, 80px) auto 0;
  max-width: 1180px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.10),
    0 40px 90px -30px rgba(0, 0, 0, 0.65),
    0 0 120px -20px rgba(79, 101, 188, 0.45);
}
.hero-shot img { display: block; width: 100%; height: auto; }

/* === Bento === */
.bento-head { max-width: 720px; }
.bento-hero-card { padding: 0; overflow: hidden; }
.bento-hero-text { padding: 28px 28px 0; }
.bento-hero-shot {
  margin: 22px 0 0;
  border-radius: 0;
  border: 0;
  border-top: 1px solid rgba(14, 29, 74, 0.08);
  box-shadow: none;
}
@media (min-width: 900px) {
  .bento-hero-card { flex-direction: row; align-items: stretch; }
  .bento-hero-text { flex: 1; padding: 30px 0 30px 30px; display: flex; flex-direction: column; justify-content: center; }
  .bento-hero-shot {
    flex: 1.1;
    margin: 0;
    border-top: 0;
    border-left: 1px solid rgba(14, 29, 74, 0.08);
    display: flex;
    align-items: center;
    overflow: hidden;
  }
  .bento-hero-shot img { height: 100%; object-fit: cover; object-position: left center; }
}

/* Transiciones fade del subtítulo y captura al cambiar de tab */
.hero-sub-enter-active, .hero-sub-leave-active { transition: opacity .2s ease, transform .2s ease; }
.hero-sub-enter-from, .hero-sub-leave-to { opacity: 0; transform: translateY(4px); }
.hero-shot-enter-active, .hero-shot-leave-active { transition: opacity .28s ease; }
.hero-shot-enter-from, .hero-shot-leave-to { opacity: 0; }
</style>
