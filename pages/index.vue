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

      <div class="mt-10 flex flex-wrap items-center justify-center gap-4">
        <MacAppStoreBadge />
        <MicrosoftStoreBadge />
      </div>

      <p class="mt-6 text-smoke text-[14px]">{{ t('home.platformsLine') }}</p>
    </div>

    <!-- Mockup floating below hero -->
    <div class="apple-wrap-wide mt-14 sm:mt-20">
      <div class="mockup-float rounded-[18px] overflow-hidden">
        <MacWindow title="Lexcase">
          <div style="height: 520px;">
            <MockCases />
          </div>
        </MacWindow>
      </div>
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
        <MacWindow title="Expedientes">
          <div style="height: 440px;">
            <MockCases />
          </div>
        </MacWindow>
      </div>
    </div>
  </section>

  <!-- =================== SECTION 2: CALENDAR =================== -->
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
        <MacWindow title="Calendario">
          <div style="height: 440px;">
            <MockCalendar />
          </div>
        </MacWindow>
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
        <MacWindow title="Finanzas">
          <div style="height: 440px;">
            <MockFinances />
          </div>
        </MacWindow>
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

      <div class="mt-10 flex flex-wrap items-center justify-center gap-4">
        <MacAppStoreBadge />
        <MicrosoftStoreBadge />
      </div>
    </div>
  </section>
</template>
