<script setup lang="ts">
const { t, locale } = useI18n()
const localePath = useLocalePath()

const faqs = computed(() => [
  { q: t('faq.q1'), a: t('faq.a1') },
  { q: t('faq.q2'), a: t('faq.a2') },
  { q: t('faq.q3'), a: t('faq.a3') },
  { q: t('faq.q4'), a: t('faq.a4') },
  { q: t('faq.q5'), a: t('faq.a5') },
  { q: t('faq.q6'), a: t('faq.a6') }
])

useHead(() => {
  const isEn = locale.value === 'en'
  const title = isEn
    ? 'Lexbell: Legal Practice Management Software for Mac & Windows'
    : 'Lexbell: Software de Gestión de Casos para Abogados (Mac y Windows)'
  const desc = isEn
    ? 'Private desktop legal practice management software for Mac & Windows. Manage cases, court deadlines, clients, and documents 100% offline on your device.'
    : 'Software privado de gestión de expedientes para abogados en Mac y Windows. Organiza casos, clientes, plazos judiciales y documentos 100% locales en tu equipo.'
  const heroImg = isEn ? '/screenshots/cases-en.webp?v=1.1.18' : '/screenshots/casos.webp?v=1.1.18'

  return {
    title,
    meta: [
      { name: 'description', content: desc },
      { property: 'og:title', content: title },
      { property: 'og:description', content: desc },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: desc }
    ],
    link: [
      {
        rel: 'preload',
        as: 'image',
        type: 'image/webp',
        href: heroImg,
        fetchpriority: 'high'
      }
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.value.map(item => ({
            '@type': 'Question',
            name: item.q,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.a
            }
          }))
        })
      }
    ]
  }
})

// Audiencias / Especialidades
type AudienceKey = 'litigio' | 'migracion' | 'inmobiliario'
const activeAudience = ref<AudienceKey>('litigio')
const route = useRoute()

onMounted(() => {
  const q = String(route.query.nicho || route.query.audience || route.query.sector || '').toLowerCase()
  const hash = (typeof window !== 'undefined' ? window.location.hash.toLowerCase() : '')
  if (q.includes('migra') || q.includes('visa') || hash.includes('migra')) {
    activeAudience.value = 'migracion'
  } else if (q.includes('inmo') || q.includes('alqui') || q.includes('real') || hash.includes('inmo') || hash.includes('alqui')) {
    activeAudience.value = 'inmobiliario'
  } else if (q.includes('abog') || q.includes('liti') || q.includes('legal') || hash.includes('abog') || hash.includes('liti')) {
    activeAudience.value = 'litigio'
  }
})

const audiences = computed(() => [
  {
    key: 'litigio' as AudienceKey,
    label: t('home.audTab1'),
    icon: 'scale',
    eyebrow: t('home.audTab1Eyebrow'),
    title: t('home.audTab1Title'),
    desc: t('home.audTab1Desc'),
    points: [
      t('home.audTab1Point1'),
      t('home.audTab1Point2'),
      t('home.audTab1Point3')
    ],
    img: locale.value === 'en' ? '/screenshots/cases-en.webp?v=1.1.18' : '/screenshots/casos.webp?v=1.1.18'
  },
  {
    key: 'migracion' as AudienceKey,
    label: t('home.audTab2'),
    icon: 'plane',
    eyebrow: t('home.audTab2Eyebrow'),
    title: t('home.audTab2Title'),
    desc: t('home.audTab2Desc'),
    points: [
      t('home.audTab2Point1'),
      t('home.audTab2Point2'),
      t('home.audTab2Point3')
    ],
    img: locale.value === 'en' ? '/screenshots/calendar-en.webp?v=1.1.18' : '/screenshots/calendario.webp?v=1.1.18'
  },
  {
    key: 'inmobiliario' as AudienceKey,
    label: t('home.audTab3'),
    icon: 'building',
    eyebrow: t('home.audTab3Eyebrow'),
    title: t('home.audTab3Title'),
    desc: t('home.audTab3Desc'),
    points: [
      t('home.audTab3Point1'),
      t('home.audTab3Point2'),
      t('home.audTab3Point3')
    ],
    img: locale.value === 'en' ? '/screenshots/documents-en.webp?v=1.1.18' : '/screenshots/documentos.webp?v=1.1.18'
  }
])

const currentAudience = computed(() => audiences.value.find(a => a.key === activeAudience.value) || audiences.value[0])

// FAQ Accordion state
const openFaq = ref<number | null>(null)
const toggleFaq = (idx: number) => {
  openFaq.value = openFaq.value === idx ? null : idx
}
</script>

<template>
  <div class="notion-landing">
    <!-- =================== 1. HERO SECTION (Estilo Apple / Notion) =================== -->
    <section class="notion-hero" id="descargar">
      <div class="notion-hero-inner">
        <h1 class="hero-h1">
          <span class="hero-line">{{ t('home.heroTitle') }}</span>
          <span class="hero-line hero-h1-accent">{{ t('home.heroTitle2') }}</span>
        </h1>

        <p class="hero-p">
          {{ t('home.heroSubtitle') }}
        </p>

        <!-- Official Store Download Badges -->
        <div class="hero-downloads">
          <AppDownload center />
        </div>
      </div>

      <!-- Hero Feature Pillars (Estilo Minimalista Muse / Linear) -->
      <div class="hero-features-grid">
        <div class="hero-feat-card">
          <div class="hero-feat-icon-box">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
          <h3 class="hero-feat-title">{{ t('home.heroCard1Title') }}</h3>
          <p class="hero-feat-desc">{{ t('home.heroCard1Desc') }}</p>
        </div>

        <div class="hero-feat-card">
          <div class="hero-feat-icon-box">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="rotate-180">
              <circle cx="12" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"/><path d="M12 12v3"/>
            </svg>
          </div>
          <h3 class="hero-feat-title">{{ t('home.heroCard2Title') }}</h3>
          <p class="hero-feat-desc">{{ t('home.heroCard2Desc') }}</p>
        </div>

        <div class="hero-feat-card">
          <div class="hero-feat-icon-box">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect width="18" height="18" x="3" y="4" rx="2" /><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>
            </svg>
          </div>
          <h3 class="hero-feat-title">{{ t('home.heroCard3Title') }}</h3>
          <p class="hero-feat-desc">{{ t('home.heroCard3Desc') }}</p>
        </div>

        <div class="hero-feat-card">
          <div class="hero-feat-icon-box">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>
            </svg>
          </div>
          <h3 class="hero-feat-title">{{ t('home.heroCard4Title') }}</h3>
          <p class="hero-feat-desc">{{ t('home.heroCard4Desc') }}</p>
        </div>
      </div>
    </section>

    <!-- =================== 2. ESPECIALIDADES (Audience Selector Estilo Notion) =================== -->
    <section class="section" id="especialidades">
      <div class="apple-wrap-wide">
        <div class="text-center max-w-2xl mx-auto mb-10">
          <span class="eyebrow">{{ t('home.audEyebrow') }}</span>
          <h2 class="h-section">{{ t('home.audTitle') }}</h2>
          <p class="subtitle mt-3">{{ t('home.audSubtitle') }}</p>
        </div>

        <!-- Notion Style Audience Tabs -->
        <div class="audience-nav-wrap">
          <div class="audience-nav" role="tablist">
            <button
              v-for="aud in audiences"
              :key="aud.key"
              type="button"
              role="tab"
              :aria-selected="activeAudience === aud.key"
              class="audience-tab-btn"
              :class="{ 'is-active': activeAudience === aud.key }"
              @click="activeAudience = aud.key"
            >
              <!-- Icon -->
              <svg v-if="aud.icon === 'scale'" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v18M19 8l3 8a5 5 0 0 1-6 0zV7M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1M5 8l3 8a5 5 0 0 1-6 0zV7M7 21h10"/></svg>
              <svg v-else-if="aud.icon === 'plane'" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>
              <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              <span>{{ aud.label }}</span>
            </button>
          </div>
        </div>

        <!-- Active Audience Content Showcase -->
        <div class="audience-showcase-box">
          <div class="module-row" style="margin-bottom: 0;">
            <div class="module-text">
              <span class="module-eyebrow">{{ currentAudience.eyebrow }}</span>
              <h3 class="module-title">{{ currentAudience.title }}</h3>
              <p class="module-desc">{{ currentAudience.desc }}</p>
              <ul class="module-bullets">
                <li v-for="(point, pIdx) in currentAudience.points" :key="pIdx">
                  <span class="bullet-check">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </span>
                  <span>{{ point }}</span>
                </li>
              </ul>
            </div>
            <div class="module-visual">
              <div class="apple-window-box">
                <img
                  :key="currentAudience.img"
                  :src="currentAudience.img"
                  :alt="currentAudience.title"
                  class="apple-app-img"
                  loading="lazy"
                  width="2730"
                  height="1600"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- =================== 3. TRES PILARES FUNDAMENTALES (Notion Cards) =================== -->
    <section class="section section-gray">
      <div class="apple-wrap">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <span class="eyebrow">{{ t('home.pillarsEyebrow') }}</span>
          <h2 class="h-section">{{ t('home.pillarsTitle') }}</h2>
          <p class="subtitle mt-3">{{ t('home.pillarsSubtitle') }}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Pilar 1 -->
          <div class="pillar-card">
            <div class="pillar-icon-box">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <h3 class="pillar-title">{{ t('home.pillar1Title') }}</h3>
            <p class="pillar-desc">{{ t('home.pillar1Desc') }}</p>
          </div>

          <!-- Pilar 2 -->
          <div class="pillar-card">
            <div class="pillar-icon-box">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
              </svg>
            </div>
            <h3 class="pillar-title">{{ t('home.pillar2Title') }}</h3>
            <p class="pillar-desc">{{ t('home.pillar2Desc') }}</p>
          </div>

          <!-- Pilar 3 -->
          <div class="pillar-card">
            <div class="pillar-icon-box">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
              </svg>
            </div>
            <h3 class="pillar-title">{{ t('home.pillar3Title') }}</h3>
            <p class="pillar-desc">{{ t('home.pillar3Desc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- =================== 4. MÓDULOS DE PROFUNDIDAD (Ventana de app flotante estilo Apple) =================== -->
    <section class="section">
      <div class="apple-wrap-wide">
        <div class="text-center max-w-3xl mx-auto mb-20">
          <span class="eyebrow">{{ t('home.modulesEyebrow') }}</span>
          <h2 class="h-section">{{ t('home.modulesTitle') }}</h2>
          <p class="subtitle mt-3">{{ t('home.modulesSubtitle') }}</p>
        </div>

        <!-- Módulo 1: Expedientes (Texto Izq, Imagen Der) -->
        <div class="module-row">
          <div class="module-text">
            <span class="module-eyebrow">{{ t('home.m1Eyebrow') }}</span>
            <h3 class="module-title">{{ t('home.m1Title') }}</h3>
            <p class="module-desc">{{ t('home.m1Desc') }}</p>
            <ul class="module-bullets">
              <li>
                <span class="bullet-check">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                <span>{{ t('home.m1Point1') }}</span>
              </li>
              <li>
                <span class="bullet-check">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                <span>{{ t('home.m1Point2') }}</span>
              </li>
              <li>
                <span class="bullet-check">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                <span>{{ t('home.m1Point3') }}</span>
              </li>
            </ul>
          </div>
          <div class="module-visual">
            <div class="apple-window-box">
              <img
                :src="locale === 'en' ? '/screenshots/cases-en.webp?v=1.1.18' : '/screenshots/casos.webp?v=1.1.18'"
                :alt="locale === 'en' ? 'Case Management in Lexbell' : 'Gestión de Expedientes en Lexbell'"
                class="apple-app-img"
                loading="lazy"
                width="2730"
                height="1600"
              />
            </div>
          </div>
        </div>

        <!-- Módulo 2: Agenda Procesal (Imagen Izq, Texto Der) -->
        <div class="module-row module-row-reverse">
          <div class="module-text">
            <span class="module-eyebrow">{{ t('home.m2Eyebrow') }}</span>
            <h3 class="module-title">{{ t('home.m2Title') }}</h3>
            <p class="module-desc">{{ t('home.m2Desc') }}</p>
            <ul class="module-bullets">
              <li>
                <span class="bullet-check">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                <span>{{ t('home.m2Point1') }}</span>
              </li>
              <li>
                <span class="bullet-check">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                <span>{{ t('home.m2Point2') }}</span>
              </li>
              <li>
                <span class="bullet-check">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                <span>{{ t('home.m2Point3') }}</span>
              </li>
            </ul>
          </div>
          <div class="module-visual">
            <div class="apple-window-box">
              <img
                :src="locale === 'en' ? '/screenshots/calendar-en.webp?v=1.1.18' : '/screenshots/calendario.webp?v=1.1.18'"
                :alt="locale === 'en' ? 'Court Calendar and Statutory Deadlines in Lexbell' : 'Agenda Judicial y Vencimientos en Lexbell'"
                class="apple-app-img"
                loading="lazy"
                width="2730"
                height="1600"
              />
            </div>
          </div>
        </div>

        <!-- Módulo 3: Mapa de Vínculos (Texto Izq, Imagen Der) -->
        <div class="module-row">
          <div class="module-text">
            <span class="module-eyebrow">{{ t('home.m3Eyebrow') }}</span>
            <h3 class="module-title">{{ t('home.m3Title') }}</h3>
            <p class="module-desc">{{ t('home.m3Desc') }}</p>
            <ul class="module-bullets">
              <li>
                <span class="bullet-check">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                <span>{{ t('home.m3Point1') }}</span>
              </li>
              <li>
                <span class="bullet-check">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                <span>{{ t('home.m3Point2') }}</span>
              </li>
              <li>
                <span class="bullet-check">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                <span>{{ t('home.m3Point3') }}</span>
              </li>
            </ul>
          </div>
          <div class="module-visual">
            <div class="apple-window-box">
              <img
                :src="locale === 'en' ? '/screenshots/map-en.webp?v=1.1.18' : '/screenshots/mapa.webp?v=1.1.18'"
                :alt="locale === 'en' ? 'Relationship Graph and Conflict Prevention in Lexbell' : 'Grafo de Relaciones y Prevención de Conflictos en Lexbell'"
                class="apple-app-img"
                loading="lazy"
                width="2730"
                height="1600"
              />
            </div>
          </div>
        </div>

        <!-- Módulo 4: Bóveda de Documentos (Imagen Izq, Texto Der) -->
        <div class="module-row module-row-reverse">
          <div class="module-text">
            <span class="module-eyebrow">{{ t('home.m4Eyebrow') }}</span>
            <h3 class="module-title">{{ t('home.m4Title') }}</h3>
            <p class="module-desc">{{ t('home.m4Desc') }}</p>
            <ul class="module-bullets">
              <li>
                <span class="bullet-check">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                <span>{{ t('home.m4Point1') }}</span>
              </li>
              <li>
                <span class="bullet-check">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                <span>{{ t('home.m4Point2') }}</span>
              </li>
              <li>
                <span class="bullet-check">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                <span>{{ t('home.m4Point3') }}</span>
              </li>
            </ul>
          </div>
          <div class="module-visual">
            <div class="apple-window-box">
              <img
                :src="locale === 'en' ? '/screenshots/documents-en.webp?v=1.1.18' : '/screenshots/documentos.webp?v=1.1.18'"
                :alt="locale === 'en' ? 'Document Management and Secure Vault in Lexbell' : 'Gestión Documental y Bóveda Segura en Lexbell'"
                class="apple-app-img"
                loading="lazy"
                width="2730"
                height="1600"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- =================== 5. TABLA COMPARATIVA NOTION =================== -->
    <section class="section section-gray">
      <div class="apple-wrap">
        <div class="text-center max-w-2xl mx-auto mb-14">
          <span class="eyebrow">{{ t('home.compareEyebrow') }}</span>
          <h2 class="h-section">{{ t('home.compareTitle') }}</h2>
          <p class="subtitle mt-3">{{ t('home.compareSubtitle') }}</p>
        </div>

        <div class="compare-table-wrap">
          <table class="compare-table" :aria-label="locale === 'en' ? 'Comparison of Lexbell versus cloud software' : 'Comparativa de Lexbell frente a la nube'">
            <thead>
              <tr>
                <th style="width: 38%;">{{ t('home.compareColFeature') }}</th>
                <th class="lexbell-col" style="width: 32%;">{{ t('home.compareColLexbell') }}</th>
                <th style="width: 30%;">{{ t('home.compareColCloud') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>{{ t('home.cRow1Title') }}</strong></td>
                <td class="lexbell-col">✓ {{ t('home.cRow1Lexbell') }}</td>
                <td>✗ {{ t('home.cRow1Cloud') }}</td>
              </tr>
              <tr>
                <td><strong>{{ t('home.cRow2Title') }}</strong></td>
                <td class="lexbell-col">✓ {{ t('home.cRow2Lexbell') }}</td>
                <td>✗ {{ t('home.cRow2Cloud') }}</td>
              </tr>
              <tr>
                <td><strong>{{ t('home.cRow3Title') }}</strong></td>
                <td class="lexbell-col">✓ {{ t('home.cRow3Lexbell') }}</td>
                <td>✗ {{ t('home.cRow3Cloud') }}</td>
              </tr>
              <tr>
                <td><strong>{{ t('home.cRow4Title') }}</strong></td>
                <td class="lexbell-col">✓ {{ t('home.cRow4Lexbell') }}</td>
                <td>✗ {{ t('home.cRow4Cloud') }}</td>
              </tr>
              <tr>
                <td><strong>{{ t('home.cRow5Title') }}</strong></td>
                <td class="lexbell-col">✓ {{ t('home.cRow5Lexbell') }}</td>
                <td>✗ {{ t('home.cRow5Cloud') }}</td>
              </tr>
              <tr>
                <td><strong>{{ t('home.cRow6Title') }}</strong></td>
                <td class="lexbell-col">✓ {{ t('home.cRow6Lexbell') }}</td>
                <td>✗ {{ t('home.cRow6Cloud') }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- =================== 6. PRECIOS TRANSPARENTES (Notion Cards) =================== -->
    <section class="section" id="precios">
      <div class="apple-wrap">
        <div class="text-center max-w-2xl mx-auto mb-14">
          <span class="eyebrow">{{ t('home.pricingEyebrow') }}</span>
          <h2 class="h-section">{{ t('home.pricingTitle') }}</h2>
          <p class="subtitle mt-3">{{ t('home.pricingSubtitle') }}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <!-- Plan Gratuito -->
          <div class="pricing-card pricing-card-free">
            <span class="pricing-badge">{{ locale === 'en' ? 'Free Forever' : 'Gratis para empezar' }}</span>
            <h3 class="pricing-name">{{ t('home.freePlanTitle') }}</h3>
            <div class="pricing-price">{{ t('home.freePlanPrice') }}</div>
            <p class="pricing-desc">{{ t('home.freePlanDesc') }}</p>
            <ul class="pricing-features">
              <li>✓ {{ t('home.freePlanFeature1') }}</li>
              <li>✓ {{ t('home.freePlanFeature2') }}</li>
              <li>✓ {{ t('home.freePlanFeature3') }}</li>
              <li>✓ {{ t('home.freePlanFeature4') }}</li>
              <li>✓ {{ t('home.freePlanFeature5') }}</li>
              <li>✓ {{ t('home.freePlanFeature6') }}</li>
            </ul>
            <a href="#descargar" class="pricing-btn pricing-btn-dark">
              {{ t('home.freePlanCTA') }}
            </a>
          </div>

          <!-- Plan Ilimitado -->
          <div class="pricing-card pricing-card-pro">
            <span class="pricing-badge pricing-badge-pro">{{ locale === 'en' ? 'Professional' : 'Recomendado para despachos' }}</span>
            <h3 class="pricing-name">{{ t('home.proPlanTitle') }}</h3>
            <div class="pricing-price">{{ t('home.proPlanPrice') }}</div>
            <p class="pricing-desc">{{ t('home.proPlanDesc') }}</p>
            <ul class="pricing-features">
              <li>✓ {{ t('home.proPlanFeature1') }}</li>
              <li>✓ {{ t('home.proPlanFeature2') }}</li>
              <li>✓ {{ t('home.proPlanFeature3') }}</li>
              <li>✓ {{ t('home.proPlanFeature4') }}</li>
              <li>✓ {{ t('home.proPlanFeature5') }}</li>
            </ul>
            <a href="#descargar" class="pricing-btn pricing-btn-pro">
              {{ t('home.proPlanCTA') }}
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- =================== 7. PREGUNTAS FRECUENTES (Acordeón Notion) =================== -->
    <section class="section section-gray" id="faq">
      <div class="apple-wrap max-w-3xl">
        <div class="text-center mb-12">
          <span class="eyebrow">{{ t('nav.faq') }}</span>
          <h2 class="h-section">{{ t('faq.title') }}</h2>
          <p class="subtitle mt-3">{{ t('faq.subtitle') }}</p>
        </div>

        <div class="faq-accordion">
          <div
            v-for="(item, idx) in faqs"
            :key="idx"
            class="faq-item"
            :class="{ 'is-open': openFaq === idx }"
          >
            <button
              type="button"
              class="faq-question-btn"
              :aria-expanded="openFaq === idx"
              @click="toggleFaq(idx)"
            >
              <span>{{ item.q }}</span>
              <svg class="faq-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div v-show="openFaq === idx" class="faq-answer">
              <p>{{ item.a }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- =================== 8. CTA FINAL (Notion Clean Banner) =================== -->
    <section class="notion-cta-section">
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
/* === NOTION LANDING WRAPPER === */
.notion-landing {
  background: #ffffff;
  color: #191919;
}

/* === HERO SECTION === */
.notion-hero {
  position: relative;
  background: #ffffff;
  padding: clamp(56px, 7vw, 84px) 24px clamp(48px, 6vw, 68px);
  text-align: center;
}

.notion-hero-inner {
  max-width: 1120px;
  margin: 0 auto;
}

.hero-h1 {
  font-size: clamp(32px, 4.2vw, 54px);
  line-height: 1.15;
  letter-spacing: -0.025em;
  font-weight: 700;
  color: #111111;
  margin: 0 auto;
  text-wrap: balance;
}

.hero-line {
  display: block;
}

@media (min-width: 768px) {
  .hero-line {
    white-space: nowrap;
  }
}

.hero-h1-accent {
  color: #0066cc;
}

.hero-p {
  font-size: clamp(17px, 1.5vw, 20px);
  line-height: 1.6;
  color: #5f5e5b;
  margin: 20px auto 0;
  max-width: 780px;
  letter-spacing: -0.01em;
}

.hero-downloads {
  margin-top: 28px;
  display: flex;
  justify-content: center;
}

/* === HERO VALUE CARDS (Estilo Minimalista Muse / Linear) === */
.hero-features-grid {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 16px;
  max-width: 1120px;
  margin: 44px auto 0;
  text-align: left;
}

@media (min-width: 640px) {
  .hero-features-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .hero-features-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 18px;
  }
}

.hero-feat-card {
  background: #ffffff;
  border: 1px solid #e5e5e3;
  border-radius: 14px;
  padding: 22px 20px;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
}

.hero-feat-card:hover {
  border-color: #d1d1cf;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  transform: translateY(-2px);
}

.hero-feat-icon-box {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: #f4f4f2;
  color: #0066cc;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 14px;
  border: 1px solid #e9e9e7;
}

.hero-feat-title {
  font-size: 15.5px;
  font-weight: 600;
  color: #111111;
  margin: 0 0 8px 0;
  letter-spacing: -0.015em;
  line-height: 1.3;
}

.hero-feat-desc {
  font-size: 13px;
  line-height: 1.55;
  color: #5f5e5b;
  margin: 0;
}

/* === ESPECIALIDADES / AUDIENCE SELECTOR === */
.audience-nav-wrap {
  display: flex;
  justify-content: center;
  margin-bottom: 36px;
}
.audience-nav {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #f1f1ef;
  padding: 5px;
  border-radius: 999px;
  border: 1px solid #e5e5e3;
  max-width: 100%;
  overflow-x: auto;
  scrollbar-width: none;
}
.audience-nav::-webkit-scrollbar { display: none; }
.audience-tab-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 20px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: #5f5e5b;
  background: transparent;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  user-select: none;
}
.audience-tab-btn:hover {
  color: #050505;
}
.audience-tab-btn.is-active {
  background: #ffffff;
  color: #050505;
  font-weight: 600;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
.audience-showcase-box {
  background: #fbfbfa;
  border: 1px solid #ebebea;
  border-radius: 20px;
  padding: clamp(28px, 4vw, 56px);
}

/* === PILARES (Cards) === */
.pillar-card {
  background: #ffffff;
  border: 1px solid #ebebea;
  border-radius: 14px;
  padding: 32px 26px;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  display: flex;
  flex-direction: column;
}

.pillar-card:hover {
  transform: translateY(-2px);
  border-color: #d3d3d0;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.05);
}

.pillar-icon-box {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: #f1f1ef;
  color: #050505;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.pillar-title {
  font-size: 19px;
  font-weight: 600;
  letter-spacing: -0.015em;
  color: #050505;
  margin: 0 0 10px;
}

.pillar-desc {
  font-size: 14.5px;
  line-height: 1.6;
  color: #5f5e5b;
  margin: 0;
}

/* === MÓDULOS DE PROFUNDIDAD (Ventana de app flotante estilo Apple) === */
.module-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  align-items: center;
  margin-bottom: clamp(70px, 9vw, 110px);
}

.module-row:last-child {
  margin-bottom: 0;
}

@media (min-width: 960px) {
  .module-row {
    grid-template-columns: 1fr 1.55fr;
    gap: 72px;
  }
  .module-row-reverse {
    grid-template-columns: 1.55fr 1fr;
  }
  .module-row-reverse .module-text {
    order: 2;
  }
  .module-row-reverse .module-visual {
    order: 1;
  }
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

.module-title {
  font-size: clamp(24px, 2.6vw, 34px);
  line-height: 1.18;
  letter-spacing: -0.02em;
  font-weight: 700;
  color: #050505;
  margin: 0 0 16px;
}

.module-desc {
  font-size: 15.5px;
  line-height: 1.65;
  color: #5f5e5b;
  margin: 0 0 24px;
}

.module-bullets {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.module-bullets li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 14.5px;
  font-weight: 500;
  color: #191919;
  line-height: 1.45;
}

.bullet-check {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #e6f0fa;
  color: #0066cc;
  flex-shrink: 0;
  margin-top: 2px;
}

.module-visual {
  width: 100%;
}

.apple-window-box {
  width: 100%;
  border-radius: 12px;
  line-height: 0;
  box-shadow:
    0 0 0 1px rgba(0, 0, 0, 0.12),
    0 12px 30px -4px rgba(0, 0, 0, 0.16),
    0 32px 64px -14px rgba(0, 0, 0, 0.28);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
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

/* === PRECIOS === */
.pricing-card {
  background: #ffffff;
  border: 1px solid #ebebea;
  border-radius: 16px;
  padding: 36px 30px;
  display: flex;
  flex-direction: column;
}

.pricing-card-pro {
  border-color: #0066cc;
  box-shadow: 0 10px 32px rgba(0, 102, 204, 0.08);
}

.pricing-badge {
  display: inline-block;
  align-self: flex-start;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background: #f1f1ef;
  color: #37352f;
  margin-bottom: 16px;
}

.pricing-badge-pro {
  background: #e6f0fa;
  color: #0066cc;
}

.pricing-name {
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #050505;
  margin: 0 0 8px;
}

.pricing-price {
  font-size: 32px;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: #050505;
  margin-bottom: 12px;
}

.pricing-desc {
  font-size: 14px;
  line-height: 1.5;
  color: #5f5e5b;
  margin: 0 0 24px;
}

.pricing-features {
  list-style: none;
  padding: 0;
  margin: 0 0 32px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 14px;
  color: #37352f;
  flex: 1;
}

.pricing-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
  text-align: center;
}

.pricing-btn-dark {
  background: #050505;
  color: #ffffff;
}
.pricing-btn-dark:hover {
  background: #262626;
  transform: translateY(-1px);
}

.pricing-btn-pro {
  background: #0066cc;
  color: #ffffff;
}
.pricing-btn-pro:hover {
  background: #0052a3;
  transform: translateY(-1px);
}

/* === FAQ ACORDEÓN === */
.faq-accordion {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.faq-item {
  background: #ffffff;
  border: 1px solid #ebebea;
  border-radius: 12px;
  overflow: hidden;
  transition: border-color 0.2s ease;
}

.faq-item.is-open {
  border-color: #d3d3d0;
}

.faq-question-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 22px;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  font-size: 15.5px;
  font-weight: 600;
  color: #050505;
  gap: 16px;
}

.faq-chevron {
  transition: transform 0.2s ease;
  flex-shrink: 0;
  color: #5f5e5b;
}

.faq-item.is-open .faq-chevron {
  transform: rotate(180deg);
}

.faq-answer {
  padding: 0 22px 20px;
  font-size: 14.5px;
  line-height: 1.6;
  color: #5f5e5b;
}

.faq-answer p {
  margin: 0;
}

/* === CTA FINAL NOTION === */
.notion-cta-section {
  background: #f7f7f5;
  border-top: 1px solid #ebebea;
  padding: clamp(60px, 8vh, 90px) 24px;
}
</style>
