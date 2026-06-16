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
</script>

<template>
  <!-- =================== HERO =================== -->
  <section class="section pt-16 sm:pt-20">
    <div class="apple-wrap text-center">
      <span class="eyebrow">{{ t('home.heroEyebrow') }}</span>
      <h1 class="h-display mt-1">
        {{ t('home.heroTitle') }}<br />
        <span class="text-smoke">{{ t('home.heroTitle2') }}</span>
      </h1>
      <p class="subtitle mt-5 mx-auto" style="max-width: 720px;">
        {{ t('home.heroSubtitle') }}
      </p>

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

      <p class="mt-6 text-smoke text-[14px]">{{ t('home.platformsLine') }}</p>
    </div>

    <!-- Hero shot: captura real con expedientes y panel de plazos -->
    <div class="apple-wrap-wide mt-14 sm:mt-20">
      <div class="mockup-float rounded-[18px] overflow-hidden">
        <img
          src="/screenshots/plazos.png"
          alt="Lexcase mostrando expedientes activos con panel de plazos procesales"
          class="block w-full h-auto"
          loading="eager"
          width="1600"
          height="1000"
        />
      </div>
    </div>
  </section>

  <!-- =================== AUDIENCE: ¿PARA QUIÉN? =================== -->
  <section class="section">
    <div class="apple-wrap text-center">
      <span class="eyebrow">{{ t('home.audienceEyebrow') }}</span>
      <h2 class="h-section mt-2">{{ t('home.audienceTitle') }}</h2>
      <p class="subtitle mt-6 mx-auto" style="max-width: 720px;">{{ t('home.audienceBody') }}</p>
    </div>

    <div class="apple-wrap-wide mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <article class="audience-card">
        <div class="audience-icon icon-indigo">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
            <path d="m14 13-7.5 7.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L11 10" />
            <path d="m16 16 6-6" />
            <path d="m8 8 6-6" />
            <path d="m9 7 8 8" />
            <path d="m21 11-8-8" />
          </svg>
        </div>
        <h3 class="audience-title">{{ t('home.audience1Title') }}</h3>
        <p class="audience-body">{{ t('home.audience1Body') }}</p>
      </article>

      <article class="audience-card">
        <div class="audience-icon icon-cyan">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        </div>
        <h3 class="audience-title">{{ t('home.audience2Title') }}</h3>
        <p class="audience-body">{{ t('home.audience2Body') }}</p>
      </article>

      <article class="audience-card">
        <div class="audience-icon icon-emerald">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
            <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.2.6-.6.5-1.1z" />
          </svg>
        </div>
        <h3 class="audience-title">{{ t('home.audience3Title') }}</h3>
        <p class="audience-body">{{ t('home.audience3Body') }}</p>
      </article>

      <article class="audience-card">
        <div class="audience-icon icon-rose">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
            <rect x="4" y="2" width="16" height="20" rx="2" />
            <line x1="9" y1="6" x2="15" y2="6" />
            <line x1="9" y1="10" x2="15" y2="10" />
            <line x1="9" y1="14" x2="13" y2="14" />
          </svg>
        </div>
        <h3 class="audience-title">{{ t('home.audience4Title') }}</h3>
        <p class="audience-body">{{ t('home.audience4Body') }}</p>
      </article>
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
/* Tarjetas "Para quién" — fondo gris suave dentro de sección blanca, estilo
   Apple cards. Icono coloreado por tipo según paleta de la app real. */
.audience-card {
  background: #f5f5f7;
  border-radius: 18px;
  padding: 30px 26px;
  text-align: left;
  transition: transform .2s ease;
}
.audience-card:hover { transform: translateY(-2px); }
.audience-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
}
.icon-indigo  { background: rgba(99, 102, 241, 0.14);  color: #4f46e5; }
.icon-cyan    { background: rgba(6, 182, 212, 0.14);   color: #0e7490; }
.icon-emerald { background: rgba(16, 185, 129, 0.14);  color: #047857; }
.icon-rose    { background: rgba(244, 63, 94, 0.14);   color: #be123c; }
.audience-title {
  font-size: 19px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: #1d1d1f;
  margin: 0 0 8px;
}
.audience-body {
  font-size: 15px;
  line-height: 1.5;
  color: #6e6e73;
  margin: 0;
}
</style>
