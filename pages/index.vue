<script setup lang="ts">
const { t, locale } = useI18n()
const localePath = useLocalePath()

useHead(() => ({
  title: 'Lexcase — Apple-style legal practice for Mac',
  meta: [
    { name: 'description', content: t('home.heroSubtitle') },
    { property: 'og:title', content: 'Lexcase' },
    { property: 'og:description', content: t('home.heroSubtitle') },
    { property: 'og:url', content: locale.value === 'es' ? 'https://lexcase.com.do/' : 'https://lexcase.com.do/en' }
  ],
  link: [
    { rel: 'alternate', hreflang: 'es', href: 'https://lexcase.com.do/' },
    { rel: 'alternate', hreflang: 'en', href: 'https://lexcase.com.do/en' },
    { rel: 'alternate', hreflang: 'x-default', href: 'https://lexcase.com.do/' }
  ]
}))

/* Pestañas por tipo de expediente real — cada una con su captura del
   demo data y su subtítulo describiendo los campos jurídicos específicos. */
const audiences = computed(() => [
  { id: 'judicial',       label: t('home.tabJudicial'),       subtitle: t('home.tabJudicialSub'),       img: '/screenshots/judicial.png',       alt: 'Lexcase con caso judicial Pérez vs. Banco Popular' },
  { id: 'administrativo', label: t('home.tabAdministrativo'), subtitle: t('home.tabAdministrativoSub'), img: '/screenshots/administrativo.png', alt: 'Lexcase con recurso contencioso tributario ante la DGII' },
  { id: 'migracion',      label: t('home.tabMigracion'),      subtitle: t('home.tabMigracionSub'),      img: '/screenshots/migracion.png',      alt: 'Lexcase con caso migratorio NVC Rodríguez' },
  { id: 'empresa',        label: t('home.tabEmpresa'),        subtitle: t('home.tabEmpresaSub'),        img: '/screenshots/empresa.png',        alt: 'Lexcase con constitución de sociedad Importadora del Caribe SRL' },
  { id: 'alquiler',       label: t('home.tabAlquiler'),       subtitle: t('home.tabAlquilerSub'),       img: '/screenshots/alquiler.png',       alt: 'Lexcase con contrato de alquiler Av. Anacaona 38' },
  { id: 'compraventa',    label: t('home.tabCompraventa'),    subtitle: t('home.tabCompraventaSub'),    img: '/screenshots/compraventa.png',    alt: 'Lexcase con compraventa de apartamento Bella Vista' }
])
const activeId = ref('judicial')
const active = computed(() => audiences.value.find(a => a.id === activeId.value) || audiences.value[0])
</script>

<template>
  <!-- =================== HERO con tabs por audiencia =================== -->
  <section class="apple-hero">
    <div class="apple-hero-content">
      <h1 class="apple-hero-title">
        {{ t('home.heroTitle') }}<br />
        <span class="apple-hero-title-smoke">{{ t('home.heroTitle2') }}</span>
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

      <!-- Subtítulo dinámico según el perfil activo -->
      <Transition name="hero-sub" mode="out-in">
        <p :key="active.id" class="apple-hero-subtitle">{{ active.subtitle }}</p>
      </Transition>

      <div class="apple-hero-ctas">
        <a
          href="https://apps.apple.com/us/app/lexcase/id6773133324?itscg=30200&itsct=apps_box_badge&mttnsubad=6773133324"
          class="btn-pill btn-pill-primary"
          target="_blank"
          rel="noopener"
        >
          {{ t('common.downloadMac') }}
        </a>
        <span class="apple-hero-coming">{{ t('common.comingSoonWin') }}</span>
      </div>

      <!-- Trust strip: 4 métricas duras separadas por middot -->
      <ul class="hero-trust" aria-label="Highlights">
        <li>{{ t('home.trust1') }}</li>
        <li>{{ t('home.trust2') }}</li>
        <li>{{ t('home.trust3') }}</li>
        <li>{{ t('home.trust4') }}</li>
      </ul>
    </div>

    <!-- Captura dinámica con fade entre perfiles -->
    <div class="apple-hero-screenshot mockup-float">
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
  </section>

  <!-- =================== SECTION 1: CASES =================== -->
  <section class="section section-gray">
    <div class="apple-wrap-wide grid gap-12 items-center lg:grid-cols-2">
      <div>
        <span class="eyebrow">{{ t('home.section1Eyebrow') }}</span>
        <h2 class="h-feature mt-1">{{ t('home.section1Title') }}</h2>
        <p class="subtitle mt-5">{{ t('home.section1Body') }}</p>
        <NuxtLink :to="localePath('features')" class="link-apple mt-6 inline-flex">
          {{ t('common.learnMore') }}
        </NuxtLink>
      </div>
      <div class="mockup-float rounded-[18px] overflow-hidden">
        <img
          src="/screenshots/expedientes.png"
          alt="Detalle de expediente Recurso Contencioso Tributario en Lexcase"
          class="block w-full h-auto"
          loading="lazy"
          width="1600"
          height="1000"
        />
      </div>
    </div>
  </section>

  <!-- =================== SECTION 2: CLIENTES =================== -->
  <section class="section">
    <div class="apple-wrap-wide grid gap-12 items-center lg:grid-cols-2">
      <div class="lg:order-2">
        <span class="eyebrow">{{ t('home.section2Eyebrow') }}</span>
        <h2 class="h-feature mt-1">{{ t('home.section2Title') }}</h2>
        <p class="subtitle mt-5">{{ t('home.section2Body') }}</p>
        <NuxtLink :to="localePath('features')" class="link-apple mt-6 inline-flex">
          {{ t('common.learnMore') }}
        </NuxtLink>
      </div>
      <div class="mockup-float rounded-[18px] overflow-hidden lg:order-1">
        <img
          src="/screenshots/clientes.png"
          alt="Directorio de clientes en Lexcase con cartera de contactos"
          class="block w-full h-auto"
          loading="lazy"
          width="1600"
          height="1000"
        />
      </div>
    </div>
  </section>

  <!-- =================== SECTION 3: FINANCES =================== -->
  <section class="section section-gray">
    <div class="apple-wrap-wide grid gap-12 items-center lg:grid-cols-2">
      <div>
        <span class="eyebrow">{{ t('home.section3Eyebrow') }}</span>
        <h2 class="h-feature mt-1">{{ t('home.section3Title') }}</h2>
        <p class="subtitle mt-5">{{ t('home.section3Body') }}</p>
        <NuxtLink :to="localePath('features')" class="link-apple mt-6 inline-flex">
          {{ t('common.learnMore') }}
        </NuxtLink>
      </div>
      <div class="mockup-float rounded-[18px] overflow-hidden">
        <img
          src="/screenshots/finanzas.png"
          alt="Vista de finanzas en Lexcase con KPIs y tasa BCRD"
          class="block w-full h-auto"
          loading="lazy"
          width="1600"
          height="1000"
        />
      </div>
    </div>
  </section>

  <!-- =================== SECTION 4: PRIVACY =================== -->
  <section class="section">
    <div class="apple-wrap text-center">
      <span class="eyebrow">{{ t('home.section4Eyebrow') }}</span>
      <h2 class="h-section mt-1">{{ t('home.section4Title') }}</h2>
      <p class="subtitle mt-5 mx-auto" style="max-width: 720px;">{{ t('home.section4Body') }}</p>

      <ul class="mt-10 mx-auto inline-flex flex-col gap-3 text-left" style="max-width: 540px;">
        <li class="flex items-start gap-3 text-[17px] text-ink">
          <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-ink shrink-0"></span>
          {{ t('home.section4Point1') }}
        </li>
        <li class="flex items-start gap-3 text-[17px] text-ink">
          <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-ink shrink-0"></span>
          {{ t('home.section4Point2') }}
        </li>
        <li class="flex items-start gap-3 text-[17px] text-ink">
          <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-ink shrink-0"></span>
          {{ t('home.section4Point3') }}
        </li>
      </ul>
    </div>
  </section>

  <!-- =================== CTA =================== -->
  <section class="section section-gray">
    <div class="apple-wrap text-center">
      <span class="eyebrow">{{ t('home.ctaSectionEyebrow') }}</span>
      <h2 class="h-section mt-1">{{ t('home.ctaSectionTitle') }}</h2>
      <p class="subtitle mt-5">{{ t('home.ctaSectionBody') }}</p>

      <div class="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
        <a
          href="https://apps.apple.com/us/app/lexcase/id6773133324?itscg=30200&itsct=apps_box_badge&mttnsubad=6773133324"
          class="link-apple"
          target="_blank"
          rel="noopener"
        >
          {{ t('common.downloadMac') }}
        </a>
        <span class="text-smoke text-[17px] leading-none">
          {{ t('common.comingSoonWin') }}
        </span>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* === HERO Apple/Things-style ===
   Full viewport con título gigante centrado horizontal y vertical (mucho
   espacio negativo arriba/abajo del bloque de contenido), CTA pill primario
   y captura grande que naturalmente desborda por la parte inferior del
   viewport — la sección crece a su tamaño real, así el usuario ve la mitad
   superior de la app al cargar y descubre el resto al hacer scroll. */
.apple-hero {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 48px);
  padding: clamp(56px, 12vh, 120px) 22px 0;
  background: #fff;
}
.apple-hero-content {
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
}
.apple-hero-title {
  font-size: clamp(48px, 7.6vw, 92px);
  line-height: 1.04;
  letter-spacing: -0.025em;
  font-weight: 600;
  color: #1d1d1f;
  margin: 0;
}
.apple-hero-title-smoke { color: #6e6e73; }
.apple-hero-subtitle {
  font-size: clamp(18px, 1.6vw, 22px);
  line-height: 1.45;
  color: #6e6e73;
  margin: 22px auto 0;
  max-width: 680px;
  font-weight: 400;
  letter-spacing: -0.005em;
}
.apple-hero-ctas {
  margin-top: 36px;
  display: inline-flex;
  align-items: center;
  gap: 26px;
  flex-wrap: wrap;
  justify-content: center;
}
.apple-hero-coming {
  font-size: 16px;
  color: #6e6e73;
  line-height: 1;
}
.apple-hero-screenshot {
  margin: clamp(48px, 7vh, 88px) auto 0;
  width: 100%;
  max-width: 1300px;
  border-radius: 22px;
  overflow: hidden;
}
.apple-hero-screenshot img {
  display: block;
  width: 100%;
  height: auto;
}
@media (max-width: 768px) {
  .apple-hero {
    padding-top: 8vh;
    min-height: auto;
  }
}

/* === Segmented control (tabs por audiencia) — estilo Apple Compare === */
.hero-tabs {
  display: inline-flex;
  align-items: center;
  background: #f5f5f7;
  padding: 4px;
  border-radius: 999px;
  margin: 30px auto 0;
  gap: 0;
}
.hero-tab {
  padding: 7px 14px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.005em;
  color: #6e6e73;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: color .15s ease, background .2s ease, box-shadow .2s ease;
  line-height: 1;
}
.hero-tab:hover { color: #1d1d1f; }
.hero-tab.is-active {
  background: #fff;
  color: #1d1d1f;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 0 0 0.5px rgba(0, 0, 0, 0.04);
}
@media (max-width: 600px) {
  .hero-tabs { flex-wrap: wrap; justify-content: center; padding: 4px; }
  .hero-tab { padding: 7px 12px; font-size: 11.5px; }
}

/* Subtítulo dinámico: el padding y dimensiones quedan estables aunque
   cambie el texto entre tabs. */
.apple-hero-subtitle { min-height: 64px; }

/* === Trust strip de 4 métricas separadas por middot === */
.hero-trust {
  list-style: none;
  margin: 32px auto 0;
  padding: 0;
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 13px;
  color: #6e6e73;
  letter-spacing: -0.005em;
  font-weight: 500;
}
.hero-trust li { display: inline-flex; align-items: center; }
.hero-trust li + li::before {
  content: "·";
  margin: 0 14px;
  color: #d2d2d7;
  font-weight: 500;
}

/* === Transición fade del subtítulo y del screenshot al cambiar de tab === */
.hero-sub-enter-active, .hero-sub-leave-active {
  transition: opacity .2s ease, transform .2s ease;
}
.hero-sub-enter-from, .hero-sub-leave-to {
  opacity: 0;
  transform: translateY(4px);
}
.hero-shot-enter-active, .hero-shot-leave-active {
  transition: opacity .28s ease;
}
.hero-shot-enter-from, .hero-shot-leave-to {
  opacity: 0;
}
</style>
