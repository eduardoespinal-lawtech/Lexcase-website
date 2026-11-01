<script setup lang="ts">
const { t, locale } = useI18n()
const localePath = useLocalePath()

useHead(() => ({
  title: `Lexbell — ${t('home.heroTitle')} ${t('home.heroTitle2')}`,
  meta: [
    { name: 'description', content: t('home.heroSubtitle') },
    { property: 'og:title', content: locale.value === 'es' ? 'Lexbell — Software de Gestión de Expedientes para Mac y Windows' : 'Lexbell — Legal Practice Management Software for Mac & Windows' },
    { property: 'og:description', content: t('home.heroSubtitle') }
  ]
}))

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
    img: locale.value === 'en' ? '/screenshots/cases-en.png' : '/screenshots/casos.png'
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
    img: locale.value === 'en' ? '/screenshots/calendar-en.png' : '/screenshots/calendario.png'
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
    img: locale.value === 'en' ? '/screenshots/documents-en.png' : '/screenshots/documentos.png'
  }
])

const currentAudience = computed(() => audiences.value.find(a => a.key === activeAudience.value) || audiences.value[0])

// FAQ Accordion state
const openFaq = ref<number | null>(null)
const toggleFaq = (idx: number) => {
  openFaq.value = openFaq.value === idx ? null : idx
}

const faqs = computed(() => [
  { q: t('faq.q1'), a: t('faq.a1') },
  { q: t('faq.q2'), a: t('faq.a2') },
  { q: t('faq.q4'), a: t('faq.a4') },
  { q: t('faq.q5'), a: t('faq.a5') },
  { q: t('faq.q8'), a: t('faq.a8') }
])
</script>

<template>
  <div class="muse-landing">
    <!-- =================== 1. HERO SECTION (Estilo Meta Muse / Dark Tech) =================== -->
    <section class="muse-hero" id="descargar">
      <!-- Ambient Glow Orbs -->
      <div class="ambient-glow hero-glow-1" aria-hidden="true" />
      <div class="ambient-glow hero-glow-2" aria-hidden="true" />

      <div class="muse-hero-inner">
        <!-- Radiant Top Pill -->
        <div class="inline-flex justify-center mb-6">
          <div class="hero-top-pill">
            <span class="pill-spark">✦</span>
            <span>{{ locale === 'en' ? 'Next-Gen Legal Practice Management' : 'Software Legal de Próxima Generación' }}</span>
            <span class="pill-badge">{{ locale === 'en' ? 'v1.1.17 Ready' : 'v1.1.17 Disponible' }}</span>
          </div>
        </div>

        <h1 class="hero-h1">
          <span class="hero-line">{{ t('home.heroTitle') }}</span>
          <span class="hero-line gradient-text hero-h1-accent">{{ t('home.heroTitle2') }}</span>
        </h1>

        <p class="hero-p">
          {{ t('home.heroSubtitle') }}
        </p>

        <!-- Official Store Download Badges -->
        <div class="hero-downloads">
          <AppDownload center />
        </div>

        <!-- Trust Features Minimal Pill Row -->
        <div class="hero-trust-bar">
          <div class="trust-item">
            <span class="trust-dot" />
            <span>{{ locale === 'en' ? '100% Offline & Private' : '100% Sin conexión y privado' }}</span>
          </div>
          <div class="trust-item">
            <span class="trust-dot" />
            <span>{{ locale === 'en' ? 'Zero Cloud Exposure' : 'Cero exposición en la nube' }}</span>
          </div>
          <div class="trust-item">
            <span class="trust-dot" />
            <span>{{ locale === 'en' ? 'Universal macOS & Windows' : 'Nativo para Mac y Windows' }}</span>
          </div>
        </div>
      </div>

      <!-- Real Interactive Showcase with authentic Retina window -->
      <div class="hero-showcase-container">
        <AppShowcase />
      </div>
    </section>

    <!-- =================== 2. BENTO GRID DE CAPACIDADES (Estilo Meta Muse) =================== -->
    <section class="section" id="capacidades">
      <div class="apple-wrap-wide">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <span class="eyebrow">{{ locale === 'en' ? 'INTELLIGENT CAPABILITIES' : 'CAPACIDADES DE ALTO RENDIMIENTO' }}</span>
          <h2 class="h-section gradient-text">{{ locale === 'en' ? 'Designed for legal excellence.' : 'Diseñado para la excelencia jurídica.' }}</h2>
          <p class="subtitle mt-3">
            {{ locale === 'en' ? 'Every tool you need to investigate, organize, and litigate without relying on third-party servers.' : 'Cada herramienta que necesitas para investigar, organizar y litigar sin depender de servidores de terceros.' }}
          </p>
        </div>

        <!-- Bento Grid Layout -->
        <div class="bento-grid">
          <!-- Bento 1: Mapa de Vínculos (Grande 2 Cols) -->
          <div class="bento-card bento-span-2">
            <div class="bento-card-header">
              <div class="bento-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="rotate-180">
                  <circle cx="12" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"/><path d="M12 12v3"/>
                </svg>
              </div>
              <span class="bento-tag">{{ locale === 'en' ? 'Conflict Prevention' : 'Prevención de Conflictos' }}</span>
            </div>
            <h3 class="bento-title">{{ t('home.m3Title') }}</h3>
            <p class="bento-desc">{{ t('home.m3Desc') }}</p>
            <div class="bento-preview-img-wrap">
              <img
                :src="locale === 'en' ? '/screenshots/map-en.png' : '/screenshots/mapa.png'"
                :alt="locale === 'en' ? 'Relationship Graph' : 'Mapa de Vínculos'"
                class="bento-preview-img"
                loading="lazy"
                width="1200"
                height="650"
              />
            </div>
          </div>

          <!-- Bento 2: Agenda Procesal & Plazos (1 Col) -->
          <div class="bento-card">
            <div class="bento-card-header">
              <div class="bento-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect width="18" height="18" x="3" y="4" rx="2" /><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>
                </svg>
              </div>
              <span class="bento-tag">{{ locale === 'en' ? 'Statutory Deadlines' : 'Plazos Perentorios' }}</span>
            </div>
            <h3 class="bento-title">{{ t('home.m2Title') }}</h3>
            <p class="bento-desc">{{ t('home.m2Desc') }}</p>
            <div class="bento-preview-img-wrap">
              <img
                :src="locale === 'en' ? '/screenshots/calendar-en.png' : '/screenshots/calendario.png'"
                :alt="locale === 'en' ? 'Court Calendar' : 'Agenda Judicial'"
                class="bento-preview-img"
                loading="lazy"
                width="1200"
                height="650"
              />
            </div>
          </div>

          <!-- Bento 3: OCR & Búsqueda Instantánea (1 Col) -->
          <div class="bento-card">
            <div class="bento-card-header">
              <div class="bento-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
              </div>
              <span class="bento-tag">{{ locale === 'en' ? 'Instant OCR' : 'Búsqueda & OCR' }}</span>
            </div>
            <h3 class="bento-title">{{ locale === 'en' ? 'Local OCR & PDF Deep Search' : 'OCR Local y Búsqueda Profunda' }}</h3>
            <p class="bento-desc">
              {{ locale === 'en' ? 'Index and read thousands of scanned pages and PDFs in milliseconds directly on your CPU.' : 'Indexa y lee miles de páginas escaneadas y PDFs en milisegundos directamente en tu procesador.' }}
            </p>
            <div class="bento-preview-img-wrap">
              <img
                :src="locale === 'en' ? '/screenshots/documents-en.png' : '/screenshots/documentos.png'"
                :alt="locale === 'en' ? 'Documents OCR' : 'Documentos y OCR'"
                class="bento-preview-img"
                loading="lazy"
                width="1200"
                height="650"
              />
            </div>
          </div>

          <!-- Bento 4: 100% Local-First & Secreto Profesional (Grande 2 Cols) -->
          <div class="bento-card bento-span-2 bento-security-card">
            <div class="bento-card-header">
              <div class="bento-icon-box bento-icon-shield">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <span class="bento-tag bento-tag-green">{{ locale === 'en' ? 'Client Confidentiality' : 'Secreto Profesional Inviolable' }}</span>
            </div>
            <div class="security-grid">
              <div>
                <h3 class="bento-title">{{ t('whyTrust.title') }}</h3>
                <p class="bento-desc">{{ t('whyTrust.subtitle') }}</p>
                <div class="security-badges-row">
                  <span class="sec-badge">🔒 SQLite Local Cifrado</span>
                  <span class="sec-badge">⚡ Cero Latencia</span>
                  <span class="sec-badge">🛡️ Sin Rastreo de Datos</span>
                </div>
              </div>
              <div class="security-stat-box">
                <div class="stat-number">0</div>
                <div class="stat-label">{{ locale === 'en' ? 'Files uploaded to third-party clouds' : 'Archivos subidos a nubes ajenas' }}</div>
                <p class="stat-sub">{{ locale === 'en' ? 'Your case files remain strictly inside your device encrypted storage.' : 'Tus causas permanecen estrictamente en el almacenamiento seguro de tu equipo.' }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- =================== 3. ESPECIALIDADES JURÍDICAS (Audience Selector) =================== -->
    <section class="section section-dark-border" id="especialidades">
      <div class="apple-wrap-wide">
        <div class="text-center max-w-2xl mx-auto mb-12">
          <span class="eyebrow">{{ t('home.audEyebrow') }}</span>
          <h2 class="h-section gradient-text">{{ t('home.audTitle') }}</h2>
          <p class="subtitle mt-3">{{ t('home.audSubtitle') }}</p>
        </div>

        <!-- Audience Tabs -->
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
        <div class="audience-showcase-box glass-card">
          <div class="module-row" style="margin-bottom: 0;">
            <div class="module-text">
              <span class="module-eyebrow">{{ currentAudience.eyebrow }}</span>
              <h3 class="module-title gradient-text">{{ currentAudience.title }}</h3>
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
                  width="2245"
                  height="1335"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- =================== 4. MÓDULOS DE PROFUNDIDAD (Meta Muse Window Flows) =================== -->
    <section class="section">
      <div class="apple-wrap-wide">
        <div class="text-center max-w-3xl mx-auto mb-20">
          <span class="eyebrow">{{ t('home.modulesEyebrow') }}</span>
          <h2 class="h-section gradient-text">{{ t('home.modulesTitle') }}</h2>
          <p class="subtitle mt-3">{{ t('home.modulesSubtitle') }}</p>
        </div>

        <!-- Módulo 1: Expedientes (Texto Izq, Imagen Der) -->
        <div class="module-row">
          <div class="module-text">
            <span class="module-eyebrow">{{ t('home.m1Eyebrow') }}</span>
            <h3 class="module-title gradient-text">{{ t('home.m1Title') }}</h3>
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
                :src="locale === 'en' ? '/screenshots/cases-en.png' : '/screenshots/casos.png'"
                :alt="locale === 'en' ? 'Case Management in Lexbell' : 'Gestión de Expedientes en Lexbell'"
                class="apple-app-img"
                loading="lazy"
                width="2245"
                height="1335"
              />
            </div>
          </div>
        </div>

        <!-- Módulo 2: Agenda Procesal (Imagen Izq, Texto Der) -->
        <div class="module-row module-row-reverse">
          <div class="module-text">
            <span class="module-eyebrow">{{ t('home.m2Eyebrow') }}</span>
            <h3 class="module-title gradient-text">{{ t('home.m2Title') }}</h3>
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
                :src="locale === 'en' ? '/screenshots/calendar-en.png' : '/screenshots/calendario.png'"
                :alt="locale === 'en' ? 'Court Calendar and Statutory Deadlines in Lexbell' : 'Agenda Judicial y Vencimientos en Lexbell'"
                class="apple-app-img"
                loading="lazy"
                width="2245"
                height="1335"
              />
            </div>
          </div>
        </div>

        <!-- Módulo 3: Mapa de Vínculos (Texto Izq, Imagen Der) -->
        <div class="module-row">
          <div class="module-text">
            <span class="module-eyebrow">{{ t('home.m3Eyebrow') }}</span>
            <h3 class="module-title gradient-text">{{ t('home.m3Title') }}</h3>
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
                :src="locale === 'en' ? '/screenshots/map-en.png' : '/screenshots/mapa.png'"
                :alt="locale === 'en' ? 'Relationship Graph and Conflict Prevention in Lexbell' : 'Grafo de Relaciones y Prevención de Conflictos en Lexbell'"
                class="apple-app-img"
                loading="lazy"
                width="2245"
                height="1335"
              />
            </div>
          </div>
        </div>

        <!-- Módulo 4: Bóveda de Documentos (Imagen Izq, Texto Der) -->
        <div class="module-row module-row-reverse">
          <div class="module-text">
            <span class="module-eyebrow">{{ t('home.m4Eyebrow') }}</span>
            <h3 class="module-title gradient-text">{{ t('home.m4Title') }}</h3>
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
                :src="locale === 'en' ? '/screenshots/documents-en.png' : '/screenshots/documentos.png'"
                :alt="locale === 'en' ? 'Document Management and Secure Vault in Lexbell' : 'Gestión Documental y Bóveda Segura en Lexbell'"
                class="apple-app-img"
                loading="lazy"
                width="2245"
                height="1335"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- =================== 5. TABLA COMPARATIVA DARK =================== -->
    <section class="section section-dark-border">
      <div class="apple-wrap">
        <div class="text-center max-w-2xl mx-auto mb-14">
          <span class="eyebrow">{{ t('home.compareEyebrow') }}</span>
          <h2 class="h-section gradient-text">{{ t('home.compareTitle') }}</h2>
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

    <!-- =================== 6. PRECIOS TRANSPARENTES (Dark Glass) =================== -->
    <section class="section" id="precios">
      <div class="apple-wrap">
        <div class="text-center max-w-2xl mx-auto mb-14">
          <span class="eyebrow">{{ t('home.pricingEyebrow') }}</span>
          <h2 class="h-section gradient-text">{{ t('home.pricingTitle') }}</h2>
          <p class="subtitle mt-3">{{ t('home.pricingSubtitle') }}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <!-- Plan Gratuito -->
          <div class="pricing-card glass-card">
            <span class="pricing-badge">{{ locale === 'en' ? 'Free Forever' : 'Gratis para empezar' }}</span>
            <h3 class="pricing-name">{{ t('home.freePlanTitle') }}</h3>
            <div class="pricing-price gradient-text">{{ t('home.freePlanPrice') }}</div>
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
          <div class="pricing-card glass-card pricing-card-pro">
            <span class="pricing-badge pricing-badge-pro">{{ locale === 'en' ? 'Professional' : 'Recomendado para despachos' }}</span>
            <h3 class="pricing-name">{{ t('home.proPlanTitle') }}</h3>
            <div class="pricing-price gradient-text">{{ t('home.proPlanPrice') }}</div>
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

    <!-- =================== 7. PREGUNTAS FRECUENTES (Glass Accordion) =================== -->
    <section class="section section-dark-border" id="faq">
      <div class="apple-wrap max-w-3xl">
        <div class="text-center mb-12">
          <span class="eyebrow">{{ t('nav.faq') }}</span>
          <h2 class="h-section gradient-text">{{ t('faq.title') }}</h2>
          <p class="subtitle mt-3">{{ t('faq.subtitle') }}</p>
        </div>

        <div class="faq-accordion">
          <div
            v-for="(item, idx) in faqs"
            :key="idx"
            class="faq-item glass-card"
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

    <!-- =================== 8. CTA FINAL (Ambient Blue Glow) =================== -->
    <section class="muse-cta-section">
      <div class="ambient-glow cta-glow" aria-hidden="true" />
      <div class="apple-wrap text-center relative z-10">
        <span class="eyebrow">{{ t('home.ctaSectionEyebrow') }}</span>
        <h2 class="h-section gradient-text max-w-2xl mx-auto">{{ t('home.ctaSectionTitle') }}</h2>
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
/* === WRAPPER GENERAL === */
.muse-landing {
  background: #08090C;
  color: #F5F5F7;
  overflow-x: hidden;
  position: relative;
}

/* === HERO SECTION === */
.muse-hero {
  position: relative;
  background: radial-gradient(circle at 50% 0%, rgba(0, 113, 227, 0.12) 0%, transparent 60%);
  padding: 56px 24px 44px;
  text-align: center;
  overflow: hidden;
}

.hero-glow-1 {
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
  width: 650px;
  height: 400px;
  background: radial-gradient(circle, rgba(0, 113, 227, 0.35) 0%, rgba(120, 80, 255, 0.15) 50%, transparent 70%);
}

.hero-glow-2 {
  top: 300px;
  right: -100px;
  width: 450px;
  height: 450px;
  background: radial-gradient(circle, rgba(0, 113, 227, 0.18) 0%, transparent 70%);
}

.muse-hero-inner {
  max-width: 1040px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

/* Radiant Top Pill */
.hero-top-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 5px 14px;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  font-size: 13px;
  color: #E5E5EA;
  box-shadow: 0 0 20px -5px rgba(0, 113, 227, 0.3);
}

.pill-spark {
  color: #38bdf8;
  font-size: 11px;
}

.pill-badge {
  font-size: 11px;
  font-weight: 600;
  color: #38bdf8;
  background: rgba(56, 189, 248, 0.12);
  border: 1px solid rgba(56, 189, 248, 0.25);
  padding: 1px 7px;
  border-radius: 9999px;
  margin-left: 4px;
}

.hero-h1 {
  font-size: clamp(32px, 4.4vw, 56px);
  line-height: 1.12;
  letter-spacing: -0.03em;
  font-weight: 700;
  color: #FFFFFF;
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
  background: linear-gradient(135deg, #FFFFFF 0%, #2997FF 50%, #0071E3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-p {
  font-size: clamp(16px, 1.4vw, 19px);
  line-height: 1.55;
  color: #9496A1;
  margin: 18px auto 0;
  max-width: 720px;
  letter-spacing: -0.01em;
}

.hero-downloads {
  margin-top: 28px;
  display: flex;
  justify-content: center;
}

.hero-trust-bar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px 28px;
  margin-top: 22px;
  font-size: 13px;
  color: #686B78;
}

.trust-item {
  display: inline-flex;
  align-items: center;
  gap: 7px;
}

.trust-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #22c55e;
  box-shadow: 0 0 8px #22c55e;
}

.hero-showcase-container {
  max-width: 1140px;
  margin: 36px auto 0;
  position: relative;
  z-index: 2;
}

/* === BENTO GRID SECTION === */
.bento-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

@media (min-width: 860px) {
  .bento-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .bento-span-2 {
    grid-column: span 2;
  }
}

.bento-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 32px;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  display: flex;
  flex-direction: column;
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.25s ease, box-shadow 0.25s ease;
  overflow: hidden;
  position: relative;
}

.bento-card:hover {
  transform: translateY(-2px);
  border-color: rgba(255, 255, 255, 0.16);
  box-shadow: 0 16px 40px -10px rgba(0, 0, 0, 0.7), 0 0 30px -8px rgba(0, 113, 227, 0.25);
}

.bento-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.bento-icon-box {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(0, 113, 227, 0.12);
  border: 1px solid rgba(0, 113, 227, 0.25);
  color: #2997ff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.bento-icon-shield {
  background: rgba(34, 197, 94, 0.12);
  border-color: rgba(34, 197, 94, 0.25);
  color: #22c55e;
}

.bento-tag {
  font-size: 11.5px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 3px 10px;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.06);
  color: #a1a1aa;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.bento-tag-green {
  background: rgba(34, 197, 94, 0.1);
  color: #4ade80;
  border-color: rgba(34, 197, 94, 0.2);
}

.bento-title {
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #FFFFFF;
  margin: 0 0 10px;
}

.bento-desc {
  font-size: 14.5px;
  line-height: 1.6;
  color: #9496A1;
  margin: 0 0 24px;
}

.bento-preview-img-wrap {
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: #0d0f16;
  margin-top: auto;
}

.bento-preview-img {
  width: 100%;
  height: auto;
  display: block;
}

.security-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  align-items: center;
}

@media (min-width: 768px) {
  .security-grid {
    grid-template-columns: 1.4fr 1fr;
  }
}

.security-badges-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
}

.sec-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 12px;
  font-weight: 500;
  color: #e5e5ea;
}

.security-stat-box {
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 24px;
  text-align: center;
}

.stat-number {
  font-size: 64px;
  font-weight: 800;
  line-height: 1;
  color: #22c55e;
  text-shadow: 0 0 30px rgba(34, 197, 94, 0.35);
  margin-bottom: 8px;
}

.stat-label {
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 6px;
}

.stat-sub {
  font-size: 12.5px;
  color: #9496a1;
  line-height: 1.45;
  margin: 0;
}

/* === ESPECIALIDADES / AUDIENCE SELECTOR === */
.section-dark-border {
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  background: #0a0b10;
}

.audience-nav-wrap {
  display: flex;
  justify-content: center;
  margin-bottom: 36px;
}

.audience-nav {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(255, 255, 255, 0.04);
  padding: 5px;
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  max-width: 100%;
  overflow-x: auto;
  scrollbar-width: none;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}
.audience-nav::-webkit-scrollbar { display: none; }

.audience-tab-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 20px;
  border-radius: 9999px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: #a1a1aa;
  background: transparent;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  user-select: none;
}
.audience-tab-btn:hover {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.05);
}
.audience-tab-btn.is-active {
  background: #0071e3;
  color: #ffffff;
  font-weight: 600;
  box-shadow: 0 0 16px -2px rgba(0, 113, 227, 0.55);
}

.audience-showcase-box {
  padding: clamp(28px, 4vw, 56px);
}

/* === MÓDULOS DE PROFUNDIDAD (Flows) === */
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
    grid-template-columns: 1fr 1.3fr;
    gap: 64px;
  }
  .module-row-reverse {
    grid-template-columns: 1.3fr 1fr;
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
  color: #2997ff;
  margin-bottom: 8px;
}

.module-title {
  font-size: clamp(24px, 2.6vw, 34px);
  line-height: 1.18;
  letter-spacing: -0.02em;
  font-weight: 700;
  margin: 0 0 16px;
}

.module-desc {
  font-size: 15.5px;
  line-height: 1.65;
  color: #9496A1;
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
  color: #e5e5ea;
  line-height: 1.45;
}

.bullet-check {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: rgba(0, 113, 227, 0.18);
  color: #2997ff;
  border: 1px solid rgba(0, 113, 227, 0.35);
  flex-shrink: 0;
  margin-top: 2px;
}

.apple-window-box {
  width: 100%;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: #0d0f16;
  box-shadow: 0 20px 50px -15px rgba(0, 0, 0, 0.8), 0 0 30px -10px rgba(0, 113, 227, 0.2);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease;
}

.apple-window-box:hover {
  transform: translateY(-2px);
  border-color: rgba(255, 255, 255, 0.2);
}

.apple-app-img {
  width: 100%;
  height: auto;
  display: block;
}

/* === PRECIOS === */
.pricing-card {
  padding: 36px 30px;
  display: flex;
  flex-direction: column;
}

.pricing-card-pro {
  border-color: rgba(0, 113, 227, 0.45);
  box-shadow: 0 0 35px -5px rgba(0, 113, 227, 0.25);
  position: relative;
}

.pricing-badge {
  display: inline-block;
  align-self: flex-start;
  padding: 4px 10px;
  border-radius: 9999px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background: rgba(255, 255, 255, 0.06);
  color: #a1a1aa;
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 16px;
}

.pricing-badge-pro {
  background: rgba(0, 113, 227, 0.15);
  color: #38bdf8;
  border-color: rgba(0, 113, 227, 0.35);
}

.pricing-name {
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #FFFFFF;
  margin: 0 0 8px;
}

.pricing-price {
  font-size: 34px;
  font-weight: 800;
  letter-spacing: -0.03em;
  margin-bottom: 12px;
}

.pricing-desc {
  font-size: 14px;
  line-height: 1.5;
  color: #9496A1;
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
  color: #E5E5EA;
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
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.12);
}
.pricing-btn-dark:hover {
  background: rgba(255, 255, 255, 0.14);
  transform: translateY(-1px);
}

.pricing-btn-pro {
  background: #0071e3;
  color: #ffffff;
  box-shadow: 0 0 20px -2px rgba(0, 113, 227, 0.55);
}
.pricing-btn-pro:hover {
  background: #0077ed;
  box-shadow: 0 0 25px 0 rgba(0, 113, 227, 0.7);
  transform: translateY(-1px);
}

/* === FAQ ACORDEÓN === */
.faq-accordion {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.faq-item {
  overflow: hidden;
  transition: border-color 0.2s ease, background-color 0.2s ease;
}

.faq-item.is-open {
  border-color: rgba(255, 255, 255, 0.18);
  background: rgba(255, 255, 255, 0.04);
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
  color: #F5F5F7;
  gap: 16px;
}

.faq-chevron {
  transition: transform 0.2s ease;
  flex-shrink: 0;
  color: #9496A1;
}

.faq-item.is-open .faq-chevron {
  transform: rotate(180deg);
  color: #38bdf8;
}

.faq-answer {
  padding: 0 22px 20px;
  font-size: 14.5px;
  line-height: 1.6;
  color: #9496A1;
}

.faq-answer p {
  margin: 0;
}

/* === CTA FINAL (Radiant Blue) === */
.muse-cta-section {
  position: relative;
  background: radial-gradient(circle at 50% 100%, rgba(0, 113, 227, 0.22) 0%, #08090C 70%);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding: clamp(70px, 9vh, 110px) 24px;
  overflow: hidden;
}

.cta-glow {
  bottom: -150px;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 350px;
  background: radial-gradient(circle, rgba(0, 113, 227, 0.4) 0%, rgba(88, 86, 214, 0.2) 50%, transparent 70%);
}
</style>
