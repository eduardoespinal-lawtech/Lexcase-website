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

// Audiencias / Especialidades (Los 6 módulos de Lexbell)
type AudienceKey = 'judicial' | 'administrativo' | 'migracion' | 'empresa' | 'alquiler' | 'compraventa'
const activeAudience = ref<AudienceKey>('judicial')
const route = useRoute()

onMounted(() => {
  const q = String(route.query.nicho || route.query.audience || route.query.sector || '').toLowerCase()
  const hash = (typeof window !== 'undefined' ? window.location.hash.toLowerCase() : '')
  if (q.includes('admin') || hash.includes('admin')) {
    activeAudience.value = 'administrativo'
  } else if (q.includes('migra') || q.includes('visa') || hash.includes('migra')) {
    activeAudience.value = 'migracion'
  } else if (q.includes('empre') || q.includes('corp') || hash.includes('empre')) {
    activeAudience.value = 'empresa'
  } else if (q.includes('alqui') || q.includes('arrend') || hash.includes('alqui')) {
    activeAudience.value = 'alquiler'
  } else if (q.includes('compra') || q.includes('venta') || hash.includes('compra')) {
    activeAudience.value = 'compraventa'
  } else if (q.includes('abog') || q.includes('liti') || q.includes('judic') || hash.includes('judic')) {
    activeAudience.value = 'judicial'
  }
})

const audiences = computed(() => [
  {
    key: 'judicial' as AudienceKey,
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
    key: 'administrativo' as AudienceKey,
    label: t('home.audTab2'),
    icon: 'landmark',
    eyebrow: t('home.audTab2Eyebrow'),
    title: t('home.audTab2Title'),
    desc: t('home.audTab2Desc'),
    points: [
      t('home.audTab2Point1'),
      t('home.audTab2Point2'),
      t('home.audTab2Point3')
    ],
    img: locale.value === 'en' ? '/screenshots/documents-en.webp?v=1.1.18' : '/screenshots/documentos.webp?v=1.1.18'
  },
  {
    key: 'migracion' as AudienceKey,
    label: t('home.audTab3'),
    icon: 'plane',
    eyebrow: t('home.audTab3Eyebrow'),
    title: t('home.audTab3Title'),
    desc: t('home.audTab3Desc'),
    points: [
      t('home.audTab3Point1'),
      t('home.audTab3Point2'),
      t('home.audTab3Point3')
    ],
    img: locale.value === 'en' ? '/screenshots/calendar-en.webp?v=1.1.18' : '/screenshots/calendario.webp?v=1.1.18'
  },
  {
    key: 'empresa' as AudienceKey,
    label: t('home.audTab4'),
    icon: 'briefcase',
    eyebrow: t('home.audTab4Eyebrow'),
    title: t('home.audTab4Title'),
    desc: t('home.audTab4Desc'),
    points: [
      t('home.audTab4Point1'),
      t('home.audTab4Point2'),
      t('home.audTab4Point3')
    ],
    img: locale.value === 'en' ? '/screenshots/map-en.webp?v=1.1.18' : '/screenshots/mapa.webp?v=1.1.18'
  },
  {
    key: 'alquiler' as AudienceKey,
    label: t('home.audTab5'),
    icon: 'key',
    eyebrow: t('home.audTab5Eyebrow'),
    title: t('home.audTab5Title'),
    desc: t('home.audTab5Desc'),
    points: [
      t('home.audTab5Point1'),
      t('home.audTab5Point2'),
      t('home.audTab5Point3')
    ],
    img: locale.value === 'en' ? '/screenshots/calendar-en.webp?v=1.1.18' : '/screenshots/calendario.webp?v=1.1.18'
  },
  {
    key: 'compraventa' as AudienceKey,
    label: t('home.audTab6'),
    icon: 'file-text',
    eyebrow: t('home.audTab6Eyebrow'),
    title: t('home.audTab6Title'),
    desc: t('home.audTab6Desc'),
    points: [
      t('home.audTab6Point1'),
      t('home.audTab6Point2'),
      t('home.audTab6Point3')
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

        <div class="hero-desc-group">
          <p class="hero-p">
            {{ t('home.heroSubtitle') }}
          </p>
          <p class="hero-p-sub">
            {{ t('home.heroSubtitle2') }}
          </p>
        </div>

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
              <svg v-else-if="aud.icon === 'landmark'" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg>
              <svg v-else-if="aud.icon === 'plane'" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>
              <svg v-else-if="aud.icon === 'briefcase'" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
              <svg v-else-if="aud.icon === 'key'" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="7.5" cy="15.5" r="4.5"/><path d="M21 2l-9.6 9.6M15.5 7.5l3 3M18.5 4.5l3 3"/></svg>
              <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
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

    <!-- =================== 3. ARQUITECTURA & INGENIERÍA (Bento Grid con Micro-Diagramas Ilustrados) =================== -->
    <section class="section section-gray" id="arquitectura">
      <div class="apple-wrap-wide">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="eyebrow">{{ t('home.pillarsEyebrow') }}</span>
          <h2 class="h-section">{{ t('home.pillarsTitle') }}</h2>
          <p class="subtitle mt-3">{{ t('home.pillarsSubtitle') }}</p>
        </div>

        <div class="bento-grid-2x2">
          <!-- Card 1: Buscador Instantáneo & OCR -->
          <div class="bento-card">
            <div class="bento-content">
              <span class="bento-eyebrow">{{ t('home.bento1Eyebrow') }}</span>
              <h3 class="bento-title">{{ t('home.bento1Title') }}</h3>
              <p class="bento-desc">{{ t('home.bento1Desc') }}</p>
            </div>
            <div class="bento-drawing-wrap">
              <div class="drawing-search-box">
                <!-- Search bar -->
                <div class="micro-search-bar">
                  <div class="search-bar-left">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="search-icon">
                      <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    <span class="search-input-text">2026-081 Ramirez</span>
                    <span class="blinking-caret"></span>
                  </div>
                  <span class="latency-badge">⚡ 0.2 ms</span>
                </div>
                <!-- Search results -->
                <div class="micro-search-results">
                  <div class="search-res-item is-active">
                    <div class="res-badge res-badge-case">Expediente</div>
                    <div class="res-details">
                      <div class="res-headline">Exp. 2026-081 · Carlos Ramírez vs. Costa Real</div>
                      <div class="res-subline">Civil y Comercial · Tribunal Colegiado · Coincidencia alfanumérica</div>
                    </div>
                    <span class="res-enter-key">⏎</span>
                  </div>
                  <div class="search-res-item">
                    <div class="res-badge res-badge-ocr">PDF OCR</div>
                    <div class="res-details">
                      <div class="res-headline">Contrato_Arrendamiento_2026.pdf</div>
                      <div class="res-subline">...pág. 3: "...comparece el Sr. <span class="res-highlight">Carlos Ramírez</span> en calidad de..."</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Card 2: Grafo de Vínculos y Prevención de Conflictos -->
          <div class="bento-card">
            <div class="bento-content">
              <span class="bento-eyebrow">{{ t('home.bento2Eyebrow') }}</span>
              <h3 class="bento-title">{{ t('home.bento2Title') }}</h3>
              <p class="bento-desc">{{ t('home.bento2Desc') }}</p>
            </div>
            <div class="bento-drawing-wrap">
              <div class="drawing-graph-box">
                <svg viewBox="0 0 380 180" class="graph-vector" fill="none">
                  <!-- Connection Lines -->
                  <line x1="75" y1="85" x2="190" y2="60" stroke="#0066cc" stroke-width="2" stroke-dasharray="3 3" opacity="0.6" />
                  <line x1="190" y1="60" x2="305" y2="85" stroke="#ef4444" stroke-width="2" stroke-dasharray="4 3" />
                  <path d="M 305 85 Q 280 145 200 145" stroke="#ef4444" stroke-width="2" stroke-opacity="0.8" />

                  <!-- Node 1: Cliente -->
                  <g transform="translate(75, 85)">
                    <circle r="20" fill="#e6f0fa" stroke="#0066cc" stroke-width="2" />
                    <circle cx="0" cy="-4" r="5" stroke="#0066cc" stroke-width="1.8" fill="none" />
                    <path d="M -8 11 C -8 5 8 5 8 11" stroke="#0066cc" stroke-width="1.8" fill="none" />
                    <text y="32" text-anchor="middle" class="svg-node-title">María Soto</text>
                    <text y="43" text-anchor="middle" class="svg-node-sub">Cliente</text>
                  </g>

                  <!-- Node 2: Expediente Actual -->
                  <g transform="translate(190, 60)">
                    <circle r="24" fill="#0066cc" stroke="#ffffff" stroke-width="2.5" />
                    <rect x="-7" y="-7" width="14" height="14" rx="2" stroke="#ffffff" stroke-width="1.8" fill="none" />
                    <line x1="-4" y1="-2" x2="4" y2="-2" stroke="#ffffff" stroke-width="1.5" />
                    <line x1="-4" y1="2" x2="4" y2="2" stroke="#ffffff" stroke-width="1.5" />
                    <text y="-32" text-anchor="middle" class="svg-node-accent">Exp. 2026-081</text>
                    <text y="-21" text-anchor="middle" class="svg-node-sub">Caso en Curso</text>
                  </g>

                  <!-- Node 3: Contraparte -->
                  <g transform="translate(305, 85)">
                    <circle r="20" fill="#fee2e2" stroke="#ef4444" stroke-width="2" />
                    <circle cx="0" cy="-4" r="5" stroke="#ef4444" stroke-width="1.8" fill="none" />
                    <path d="M -8 11 C -8 5 8 5 8 11" stroke="#ef4444" stroke-width="1.8" fill="none" />
                    <text y="32" text-anchor="middle" class="svg-node-title">Carlos Vega</text>
                    <text y="43" text-anchor="middle" class="svg-node-alert">Contraparte</text>
                  </g>

                  <!-- Node 4: Caso Anterior -->
                  <g transform="translate(200, 145)">
                    <rect x="-45" y="-12" width="90" height="24" rx="6" fill="#f4f4f5" stroke="#d4d4d8" stroke-width="1.5" />
                    <text y="4" text-anchor="middle" class="svg-node-sub">Exp. 2024-110</text>
                  </g>
                </svg>

                <div class="graph-conflict-alert">
                  <span class="conflict-pulse"></span>
                  <span class="conflict-text">Vínculo detectado: Contraparte en Exp. 2024-110</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Card 3: Plazos y Audiencias -->
          <div class="bento-card">
            <div class="bento-content">
              <span class="bento-eyebrow">{{ t('home.bento3Eyebrow') }}</span>
              <h3 class="bento-title">{{ t('home.bento3Title') }}</h3>
              <p class="bento-desc">{{ t('home.bento3Desc') }}</p>
            </div>
            <div class="bento-drawing-wrap">
              <div class="drawing-deadline-box">
                <div class="deadline-micro-card">
                  <div class="deadline-card-top">
                    <div class="deadline-meta-left">
                      <span class="deadline-tag-hearing">Audiencia de Juicio Oral</span>
                      <h4 class="deadline-title-text">Audiencia Preliminar y Conciliación</h4>
                      <p class="deadline-sub-text">Exp. 2026-081 · Juzgado 2do de Primera Instancia Civil</p>
                    </div>
                    <div class="deadline-countdown-circle">
                      <span class="count-big">3</span>
                      <span class="count-small">DÍAS</span>
                    </div>
                  </div>

                  <!-- Progress timeline -->
                  <div class="deadline-progress-container">
                    <div class="deadline-bar-bg">
                      <div class="deadline-bar-fill" style="width: 82%;"></div>
                    </div>
                    <div class="deadline-bar-dates">
                      <span>Notificado: 12 Octubre</span>
                      <span class="deadline-target-date">Jueves 5 Noviembre · 09:30 AM</span>
                    </div>
                  </div>

                  <!-- Calendar sync bottom bar -->
                  <div class="deadline-sync-bar">
                    <div class="sync-left">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Sincronizado con Apple Calendar & Outlook</span>
                    </div>
                    <span class="sync-tag-active">Alerta 24h</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Card 4: Arquitectura Local Cero Nube -->
          <div class="bento-card">
            <div class="bento-content">
              <span class="bento-eyebrow">{{ t('home.bento4Eyebrow') }}</span>
              <h3 class="bento-title">{{ t('home.bento4Title') }}</h3>
              <p class="bento-desc">{{ t('home.bento4Desc') }}</p>
            </div>
            <div class="bento-drawing-wrap">
              <div class="drawing-architecture-box">
                <div class="arch-flow-diagram">
                  <!-- Device Safe Box -->
                  <div class="arch-device-container">
                    <div class="arch-header-row">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                        <line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
                      </svg>
                      <span>Tu Ordenador (Mac / Windows)</span>
                    </div>
                    <div class="arch-items-list">
                      <div class="arch-data-item">
                        <div class="arch-item-icon">DB</div>
                        <div class="arch-item-text">
                          <span class="arch-item-title">lexbell_data.db</span>
                          <span class="arch-item-desc">SQLite WAL · Cifrado Local</span>
                        </div>
                      </div>
                      <div class="arch-data-item">
                        <div class="arch-item-icon ocr-icon">DOC</div>
                        <div class="arch-item-text">
                          <span class="arch-item-title">Bóveda de Documentos</span>
                          <span class="arch-item-desc">PDFs, Contratos y Escritos en tu Disco</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Barrier / Lock -->
                  <div class="arch-firewall-barrier">
                    <div class="barrier-vertical-line"></div>
                    <div class="barrier-icon-badge" title="Cero conexión externa">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                      </svg>
                    </div>
                    <div class="barrier-vertical-line"></div>
                  </div>

                  <!-- Cloud Blocked -->
                  <div class="arch-cloud-container">
                    <div class="arch-cloud-header">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="1" y1="1" x2="23" y2="23"/>
                        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 0 1 2.5 8.24"/>
                      </svg>
                      <span>Nube Externa</span>
                    </div>
                    <div class="cloud-zero-pill">
                      <span class="cloud-zero-number">0 bytes</span>
                      <span class="cloud-zero-desc">Sin telemetría ni servidores remotos</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
            <span class="pricing-badge pricing-badge-pro">{{ locale === 'en' ? 'Solo Professional' : 'Para profesionales independientes' }}</span>
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

.hero-desc-group {
  margin: 22px auto 0;
  max-width: 840px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.hero-p {
  font-size: clamp(17px, 1.45vw, 19.5px);
  line-height: 1.5;
  color: #27272a;
  margin: 0;
  letter-spacing: -0.01em;
  text-wrap: balance;
}

.hero-p-sub {
  font-size: clamp(15px, 1.3vw, 17px);
  line-height: 1.55;
  color: #52525b;
  margin: 0;
  letter-spacing: -0.01em;
  text-wrap: balance;
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

/* === BENTO GRID 2x2 (MICRO-DIAGRAMAS ILUSTRADOS ESTILO LINEAR / APPLE) === */
.bento-grid-2x2 {
  display: grid;
  grid-template-columns: 1fr;
  gap: 28px;
}

@media (min-width: 960px) {
  .bento-grid-2x2 {
    grid-template-columns: repeat(2, 1fr);
  }
}

.bento-card {
  background: #ffffff;
  border: 1px solid #ebebea;
  border-radius: 20px;
  padding: 32px 28px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease, border-color 0.25s ease;
  position: relative;
}

.bento-card:hover {
  transform: translateY(-3px);
  border-color: #d3d3d0;
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.06);
}

.bento-content {
  margin-bottom: 24px;
}

.bento-eyebrow {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #0066cc;
  margin-bottom: 8px;
}

.bento-title {
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #050505;
  margin: 0 0 8px;
  line-height: 1.28;
}

.bento-desc {
  font-size: 14px;
  line-height: 1.55;
  color: #5f5e5b;
  margin: 0;
}

.bento-drawing-wrap {
  background: #fafaf9;
  border: 1px solid #f0f0ee;
  border-radius: 14px;
  padding: 20px 18px;
  min-height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

/* --- DIBUJO 1: BUSCADOR INSTANTÁNEO --- */
.drawing-search-box {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.micro-search-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  border: 1.5px solid #0066cc;
  border-radius: 10px;
  padding: 9px 14px;
  box-shadow: 0 4px 14px rgba(0, 102, 204, 0.1);
}

.search-bar-left {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 13.5px;
  color: #111111;
  font-weight: 500;
}

.search-icon {
  color: #0066cc;
  flex-shrink: 0;
}

.blinking-caret {
  display: inline-block;
  width: 2px;
  height: 15px;
  background: #0066cc;
  margin-left: 1px;
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.latency-badge {
  font-size: 10.5px;
  font-weight: 600;
  color: #059669;
  background: #ecfdf5;
  padding: 3px 8px;
  border-radius: 6px;
  letter-spacing: 0.02em;
}

.micro-search-results {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.search-res-item {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #ffffff;
  border: 1px solid #ebebea;
  border-radius: 9px;
  padding: 10px 12px;
  transition: all 0.2s ease;
}

.search-res-item.is-active {
  background: #f0f7ff;
  border-color: #bad9fb;
}

.res-badge {
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  padding: 3px 6px;
  border-radius: 5px;
  flex-shrink: 0;
}

.res-badge-case {
  background: #0066cc;
  color: #ffffff;
}

.res-badge-ocr {
  background: #f3f4f6;
  color: #4b5563;
  border: 1px solid #e5e7eb;
}

.res-details {
  flex: 1;
  min-width: 0;
}

.res-headline {
  font-size: 12.5px;
  font-weight: 600;
  color: #111111;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.res-subline {
  font-size: 11px;
  color: #6b7280;
  margin-top: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.res-highlight {
  background: #fef08a;
  color: #854d0e;
  padding: 0 3px;
  border-radius: 3px;
  font-weight: 600;
}

.res-enter-key {
  font-size: 11px;
  color: #0066cc;
  font-weight: 600;
  background: #e6f0fa;
  padding: 2px 6px;
  border-radius: 4px;
}

/* --- DIBUJO 2: GRAFO DE VÍNCULOS --- */
.drawing-graph-box {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.graph-vector {
  width: 100%;
  max-width: 380px;
  height: auto;
  overflow: visible;
}

.svg-node-title {
  font-size: 11px;
  font-weight: 600;
  fill: #111111;
}

.svg-node-sub {
  font-size: 9.5px;
  font-weight: 500;
  fill: #6b7280;
}

.svg-node-accent {
  font-size: 11px;
  font-weight: 700;
  fill: #0066cc;
}

.svg-node-alert {
  font-size: 9.5px;
  font-weight: 700;
  fill: #dc2626;
}

.graph-conflict-alert {
  margin-top: 10px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #fef2f2;
  border: 1px solid #fee2e2;
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 11.5px;
  font-weight: 600;
  color: #dc2626;
}

.conflict-pulse {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #ef4444;
  box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7);
  animation: pulse-red 2s infinite;
}

@keyframes pulse-red {
  0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7); }
  70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(239, 68, 68, 0); }
  100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); }
}

/* --- DIBUJO 3: PLAZOS Y AUDIENCIAS --- */
.drawing-deadline-box {
  width: 100%;
}

.deadline-micro-card {
  background: #ffffff;
  border: 1px solid #ebebea;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
}

.deadline-card-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
}

.deadline-meta-left {
  flex: 1;
}

.deadline-tag-hearing {
  display: inline-block;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #d97706;
  background: #fef3c7;
  padding: 2px 7px;
  border-radius: 5px;
  margin-bottom: 6px;
}

.deadline-title-text {
  font-size: 13.5px;
  font-weight: 700;
  color: #111111;
  margin: 0;
  line-height: 1.3;
}

.deadline-sub-text {
  font-size: 11px;
  color: #6b7280;
  margin: 3px 0 0;
}

.deadline-countdown-circle {
  width: 46px;
  height: 46px;
  border-radius: 12px;
  background: #fffbeb;
  border: 1.5px solid #fde68a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.count-big {
  font-size: 17px;
  font-weight: 800;
  color: #d97706;
  line-height: 1;
}

.count-small {
  font-size: 8.5px;
  font-weight: 700;
  color: #b45309;
  letter-spacing: 0.05em;
  margin-top: 1px;
}

.deadline-progress-container {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.deadline-bar-bg {
  width: 100%;
  height: 6px;
  background: #f3f4f6;
  border-radius: 999px;
  overflow: hidden;
}

.deadline-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #f59e0b, #ef4444);
  border-radius: 999px;
}

.deadline-bar-dates {
  display: flex;
  justify-content: space-between;
  font-size: 10.5px;
  color: #6b7280;
  font-weight: 500;
}

.deadline-target-date {
  color: #d97706;
  font-weight: 600;
}

.deadline-sync-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
  border-top: 1px solid #f3f4f6;
  font-size: 11px;
}

.sync-left {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #0066cc;
  font-weight: 500;
}

.sync-tag-active {
  font-size: 10px;
  font-weight: 600;
  color: #059669;
  background: #ecfdf5;
  padding: 2px 6px;
  border-radius: 4px;
}

/* --- DIBUJO 4: ARQUITECTURA CERO NUBE --- */
.drawing-architecture-box {
  width: 100%;
}

.arch-flow-diagram {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 10px;
}

.arch-device-container {
  background: #ffffff;
  border: 1px solid #d1d5db;
  border-radius: 12px;
  padding: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
}

.arch-header-row {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11.5px;
  font-weight: 700;
  color: #111111;
  margin-bottom: 10px;
  padding-bottom: 8px;
  border-bottom: 1px solid #f3f4f6;
}

.arch-header-row svg {
  color: #0066cc;
}

.arch-items-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.arch-data-item {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 6px 8px;
}

.arch-item-icon {
  font-size: 9px;
  font-weight: 800;
  background: #0066cc;
  color: #ffffff;
  padding: 2px 5px;
  border-radius: 4px;
  letter-spacing: 0.04em;
}

.arch-item-icon.ocr-icon {
  background: #475569;
}

.arch-item-text {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.arch-item-title {
  font-size: 11px;
  font-weight: 600;
  color: #0f172a;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.arch-item-desc {
  font-size: 9.5px;
  color: #64748b;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.arch-firewall-barrier {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

.barrier-vertical-line {
  width: 2px;
  height: 28px;
  background: #e2e8f0;
}

.barrier-icon-badge {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #050505;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

.barrier-icon-badge svg {
  color: #ffffff;
}

.arch-cloud-container {
  background: #fafafa;
  border: 1px dashed #d4d4d8;
  border-radius: 12px;
  padding: 14px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  opacity: 0.85;
}

.arch-cloud-header {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11.5px;
  font-weight: 600;
  color: #71717a;
  margin-bottom: 8px;
}

.cloud-zero-pill {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cloud-zero-number {
  font-size: 16px;
  font-weight: 800;
  color: #ef4444;
}

.cloud-zero-desc {
  font-size: 9.5px;
  color: #a1a1aa;
  margin-top: 2px;
  line-height: 1.25;
}

/* === DARK MODE ADAPTATION (ALTO CONTRASTE, SIN ICONOS OPACOS) === */
@media (prefers-color-scheme: dark) {
  .bento-card {
    background: #141414;
    border-color: #2a2a2a;
  }
  .bento-card:hover {
    border-color: #404040;
    box-shadow: 0 16px 36px rgba(0, 0, 0, 0.4);
  }
  .bento-title {
    color: #ffffff;
  }
  .bento-desc {
    color: #a3a3a3;
  }
  .bento-drawing-wrap {
    background: #0a0a0a;
    border-color: #222222;
  }
  .micro-search-bar {
    background: #1a1a1a;
    border-color: #3b82f6;
  }
  .search-bar-left {
    color: #ffffff;
  }
  .search-icon {
    color: #60a5fa;
  }
  .blinking-caret {
    background: #60a5fa;
  }
  .search-res-item {
    background: #1a1a1a;
    border-color: #2d2d2d;
  }
  .search-res-item.is-active {
    background: #1e293b;
    border-color: #3b82f6;
  }
  .res-headline {
    color: #ffffff;
  }
  .res-subline {
    color: #94a3b8;
  }
  .res-badge-ocr {
    background: #27272a;
    color: #e4e4e7;
    border-color: #3f3f46;
  }
  .svg-node-title {
    fill: #ffffff;
  }
  .svg-node-sub {
    fill: #9ca3af;
  }
  .deadline-micro-card {
    background: #1a1a1a;
    border-color: #2e2e2e;
  }
  .deadline-title-text {
    color: #ffffff;
  }
  .deadline-sub-text {
    color: #a1a1aa;
  }
  .deadline-countdown-circle {
    background: #272210;
    border-color: #78350f;
  }
  .deadline-sync-bar {
    border-top-color: #2d2d2d;
  }
  .sync-left {
    color: #60a5fa;
  }
  .arch-device-container {
    background: #1a1a1a;
    border-color: #333333;
  }
  .arch-header-row {
    color: #ffffff;
    border-bottom-color: #262626;
  }
  .arch-header-row svg {
    color: #60a5fa;
  }
  .arch-data-item {
    background: #222222;
    border-color: #333333;
  }
  .arch-item-title {
    color: #ffffff;
  }
  .arch-item-desc {
    color: #94a3b8;
  }
  .barrier-vertical-line {
    background: #333333;
  }
  .barrier-icon-badge {
    background: #2563eb;
  }
  .arch-cloud-container {
    background: #111111;
    border-color: #333333;
  }
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
