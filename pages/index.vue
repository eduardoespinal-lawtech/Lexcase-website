<script setup lang="ts">
const { t, locale } = useI18n()
const localePath = useLocalePath()

const activeTab = ref(0)
const showcaseTabs = computed(() => {
  const isEn = locale.value === 'en'
  return [
    {
      id: 'cases',
      label: isEn ? 'Case Files' : 'Expedientes',
      title: isEn ? 'Every case detail in one structured view' : 'Todo tu expediente en una sola vista estructurada',
      desc: isEn
        ? 'Courts, procedural steps, opposing parties, and linked contacts organized locally.'
        : 'Tribunales, trámites, partes procesales y contactos vinculados con claridad instantánea.',
      img: '/screenshots/showcase-tribunal.webp'
    },
    {
      id: 'calendar',
      label: isEn ? 'Calendar' : 'Calendario',
      title: isEn ? 'Never miss a hearing or statutory deadline' : 'Control visual de audiencias y plazos fatales',
      desc: isEn
        ? 'Monthly court calendar with native alerts that work even without internet.'
        : 'Vista mensual de audiencias y términos procesales con alertas nativas sin conexión.',
      img: '/screenshots/showcase-calendar-month.webp'
    },
    {
      id: 'docs',
      label: isEn ? 'Documents' : 'Documentos',
      title: isEn ? 'Folders and instant PDF previews on your disk' : 'Carpetas y vista previa de PDFs directo en tu disco',
      desc: isEn
        ? 'Organize pleadings, deeds, and exhibits locally without uploading client files to the cloud.'
        : 'Organiza escritos, certificaciones y anexos sin subir los documentos de tus clientes a la nube.',
      img: '/screenshots/showcase-docs.webp'
    },
    {
      id: 'billing',
      label: isEn ? 'Billing' : 'Facturación',
      title: isEn ? 'Track fees, expenses, and pending balances' : 'Control total de honorarios, gastos y saldos',
      desc: isEn
        ? 'Monitor collected fees, client advances, and pending balances in USD or DOP.'
        : 'Visualiza honorarios cobrados, suplidos y cuentas por cobrar por expediente en DOP o USD.',
      img: '/screenshots/showcase-billing.webp'
    },
    {
      id: 'tasks',
      label: isEn ? 'Tasks' : 'Tareas',
      title: isEn ? 'Procedural checklists grouped by case' : 'Diligencias y tareas pendientes por caso',
      desc: isEn
        ? 'Keep every filing, notification, and court follow-up tracked to completion.'
        : 'No dejes ninguna notificación, depósito o gestión procesal pendiente en el día a día.',
      img: '/screenshots/showcase-tasks.webp'
    },
    {
      id: 'connections',
      label: isEn ? 'Conflict Map' : 'Conexiones',
      title: isEn ? 'Visual network of cases, companies, and parties' : 'Mapa visual de relaciones y conflictos de interés',
      desc: isEn
        ? 'Spot connections between clients, counterparties, and related cases in seconds.'
        : 'Detecta vínculos entre clientes, empresas y contrapartes antes de aceptar un nuevo caso.',
      img: '/screenshots/showcase-connections.webp'
    }
  ]
})

const faqs = computed(() => [
  { q: t('faq.q1'), a: t('faq.a1') },
  { q: t('faq.q2'), a: t('faq.a2') },
  { q: t('faq.q3'), a: t('faq.a3') },
  { q: t('faq.q4'), a: t('faq.a4') }
])

const comparisonRows = computed(() => [
  { title: t('home.cRow1Title'), lexbell: t('home.cRow1Lexbell'), cloud: t('home.cRow1Cloud'), manual: t('home.cRow1Manual'), manualType: 'cross' },
  { title: t('home.cRow2Title'), lexbell: t('home.cRow2Lexbell'), cloud: t('home.cRow2Cloud'), manual: t('home.cRow2Manual'), manualType: 'partial' },
  { title: t('home.cRow3Title'), lexbell: t('home.cRow3Lexbell'), cloud: t('home.cRow3Cloud'), manual: t('home.cRow3Manual'), manualType: 'cross' },
  { title: t('home.cRow4Title'), lexbell: t('home.cRow4Lexbell'), cloud: t('home.cRow4Cloud'), manual: t('home.cRow4Manual'), manualType: 'cross' },
  { title: t('home.cRow5Title'), lexbell: t('home.cRow5Lexbell'), cloud: t('home.cRow5Cloud'), manual: t('home.cRow5Manual'), manualType: 'partial' },
  { title: t('home.cRow6Title'), lexbell: t('home.cRow6Lexbell'), cloud: t('home.cRow6Cloud'), manual: t('home.cRow6Manual'), manualType: 'partial' },
  { title: t('home.cRow7Title'), lexbell: t('home.cRow7Lexbell'), cloud: t('home.cRow7Cloud'), manual: t('home.cRow7Manual'), manualType: 'partial' }
])

const testimonials = computed(() => [
  {
    id: 1,
    author: t('home.testimonial1Author'),
    role: t('home.testimonial1Role'),
    quote: t('home.testimonial1Quote'),
    avatar: '/images/testimonials/marcos-valenzuela.webp'
  },
  {
    id: 2,
    author: t('home.testimonial2Author'),
    role: t('home.testimonial2Role'),
    quote: t('home.testimonial2Quote'),
    avatar: '/images/testimonials/elena-santillan.webp'
  },
  {
    id: 3,
    author: t('home.testimonial3Author'),
    role: t('home.testimonial3Role'),
    quote: t('home.testimonial3Quote'),
    avatar: '/images/testimonials/david-henriquez.webp'
  },
  {
    id: 4,
    author: t('home.testimonial4Author'),
    role: t('home.testimonial4Role'),
    quote: t('home.testimonial4Quote'),
    avatar: '/images/testimonials/camila-rodriguez.webp'
  },
  {
    id: 5,
    author: t('home.testimonial5Author'),
    role: t('home.testimonial5Role'),
    quote: t('home.testimonial5Quote'),
    avatar: '/images/testimonials/roberto-mendez.webp'
  },
  {
    id: 6,
    author: t('home.testimonial6Author'),
    role: t('home.testimonial6Role'),
    quote: t('home.testimonial6Quote'),
    avatar: '/images/testimonials/sofia-peralta.webp'
  }
])

useHead(() => {
  const isEn = locale.value === 'en'
  const title = isEn
    ? 'Lexbell: Legal Practice Management Software for Mac & Windows'
    : 'Lexbell: Software de Gestión de Casos para Abogados (Mac y Windows)'
  const desc = isEn
    ? 'Private desktop legal practice management software for Mac & Windows. Manage cases, court deadlines, clients, and documents 100% offline on your device.'
    : 'Software privado de gestión de expedientes para abogados en Mac y Windows. Organiza casos, clientes, plazos judiciales y documentos 100% locales en tu equipo.'
  const heroImg = '/screenshots/showcase-tribunal.webp?v=1.1.22'

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
          '@type': 'SoftwareApplication',
          name: 'Lexbell',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'macOS, Windows',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD'
          },
          description: desc,
          url: isEn ? 'https://lex-bell.com/en/' : 'https://lex-bell.com/'
        })
      },
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

const openFaq = ref<number | null>(null)
const toggleFaq = (idx: number) => {
  openFaq.value = openFaq.value === idx ? null : idx
}
</script>

<template>
  <div class="notion-landing">
    <!-- =================== 1. HERO SECTION (MICROSOFT 365 STYLE CON LAPTOP) =================== -->
    <section class="ms-hero-section" id="descargar">
      <div class="ms-hero-inner">
        <!-- Columna Izquierda: Mensaje Directo + CTAs -->
        <div class="ms-hero-content">
          <span class="eyebrow">
            {{ locale === 'en' ? 'NEW IN LEXBELL · LOCAL MCP AI & OFFICE NETWORK' : 'NUEVO EN LEXBELL · IA LOCAL (MCP) Y RED DE OFICINA' }}
          </span>
          <h1 class="ms-hero-title">
            {{ t('home.heroTitle') }}
          </h1>

          <p class="ms-hero-subtitle">
            {{ t('home.heroSubtitle') }}
          </p>

          <!-- Official Store Download Badges -->
          <div class="ms-hero-downloads">
            <AppDownload />
            <p class="hero-trust-note">
              {{ locale === 'en' ? 'Free up to 50 cases · 15-day Pro trial without card · Local MCP AI & LAN' : 'Gratis hasta 50 casos · Prueba Pro 15 días sin tarjeta · IA local (MCP) y red LAN' }}
            </p>
          </div>
        </div>

        <!-- Columna Derecha: Captura real y recta de la aplicación Lexbell sobre cuadrícula -->
        <div class="hero-app-col">
          <div class="hero-app-grid" aria-hidden="true"></div>
          <div class="hero-app-frame">
            <img
              src="/screenshots/showcase-tribunal.webp?v=1.1.22"
              :alt="locale === 'en' ? 'Lexbell Desktop App Interface' : 'Interfaz de la aplicación Lexbell'"
              class="hero-app-img"
              width="2000"
              height="1185"
              loading="eager"
              fetchpriority="high"
            />
          </div>
        </div>
      </div>

      <!-- Hero Feature Pillars -->
      <div class="hero-features-grid">
        <div class="hero-feat-card">
          <div class="hero-feat-icon-box">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <h3 class="hero-feat-title">{{ t('home.heroCard1Title') }}</h3>
          <p class="hero-feat-desc">{{ t('home.heroCard1Desc') }}</p>
        </div>

        <div class="hero-feat-card">
          <div class="hero-feat-icon-box">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="rotate-180">
              <circle cx="12" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"/><path d="M12 12v3"/>
            </svg>
          </div>
          <h3 class="hero-feat-title">{{ t('home.heroCard2Title') }}</h3>
          <p class="hero-feat-desc">{{ t('home.heroCard2Desc') }}</p>
        </div>

        <div class="hero-feat-card">
          <div class="hero-feat-icon-box">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect width="18" height="18" x="3" y="4" rx="2" /><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>
            </svg>
          </div>
          <h3 class="hero-feat-title">{{ t('home.heroCard3Title') }}</h3>
          <p class="hero-feat-desc">{{ t('home.heroCard3Desc') }}</p>
        </div>

        <div class="hero-feat-card">
          <div class="hero-feat-icon-box">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>
            </svg>
          </div>
          <h3 class="hero-feat-title">{{ t('home.heroCard4Title') }}</h3>
          <p class="hero-feat-desc">{{ t('home.heroCard4Desc') }}</p>
        </div>
      </div>
    </section>

    <!-- =================== 1.2 PAÍSES SOPORTADOS Y CÓDIGOS PROCESALES =================== -->
    <section class="jurisdictions-strip border-b border-t border-[var(--border)] bg-[var(--bg)] py-7">
      <div class="apple-wrap">
        <div class="flex flex-col lg:flex-row items-center justify-between gap-5">
          <div class="text-center lg:text-left">
            <span class="text-xs font-bold uppercase tracking-wider text-[var(--accent)] block">
              {{ locale === 'en' ? 'JURISDICTIONAL COVERAGE' : 'COBERTURA JURISDICCIONAL' }}
            </span>
            <p class="text-sm font-semibold text-[var(--text)] mt-1">
              {{ locale === 'en' ? 'Procedural rules & statutory deadline calculation for:' : 'Reglas procesales y cómputo de términos legales para:' }}
            </p>
          </div>

          <div class="flex flex-wrap items-center justify-center gap-2.5">
            <NuxtLink :to="localePath('calculadora-plazos-republica-dominicana')" class="country-pill group">
              <span class="country-flag">🇩🇴</span>
              <span class="country-name">Rep. Dominicana</span>
              <span class="country-code">CPC</span>
            </NuxtLink>
            <NuxtLink :to="localePath('calculadora-plazos-espana')" class="country-pill group">
              <span class="country-flag">🇪🇸</span>
              <span class="country-name">España</span>
              <span class="country-code">LEC</span>
            </NuxtLink>
            <NuxtLink :to="localePath('calculadora-plazos-mexico')" class="country-pill group">
              <span class="country-flag">🇲🇽</span>
              <span class="country-name">México</span>
              <span class="country-code">CFPC</span>
            </NuxtLink>
            <NuxtLink :to="localePath('calculadora-plazos-colombia')" class="country-pill group">
              <span class="country-flag">🇨🇴</span>
              <span class="country-name">Colombia</span>
              <span class="country-code">CGP</span>
            </NuxtLink>
            <NuxtLink :to="localePath('calculadora-plazos-peru')" class="country-pill group">
              <span class="country-flag">🇵🇪</span>
              <span class="country-name">Perú</span>
              <span class="country-code">CPC</span>
            </NuxtLink>
            <span class="country-pill country-pill-global">
              <span class="country-flag">🌎</span>
              <span class="country-name">{{ locale === 'en' ? 'Global Practice' : 'Uso Global' }}</span>
              <span class="country-code">Mac & Win</span>
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- =================== 1.5 PRODUCT SHOWCASE INTERACTIVO (MICROSOFT 365 STYLE) =================== -->
    <section class="showcase-section" id="producto">
      <div class="apple-wrap">
        <div class="text-center max-w-2xl mx-auto mb-12">
          <span class="eyebrow">{{ locale === 'en' ? 'INSIDE LEXBELL' : 'EXPLORA LA APP POR DENTRO' }}</span>
          <h2 class="h-section">{{ locale === 'en' ? 'Built for clarity, speed, and zero clutter' : 'Diseñada para trabajar con claridad y rapidez' }}</h2>
          <p class="subtitle mt-3">
            {{ locale === 'en'
              ? 'Select a module to see how Lexbell organizes your entire legal practice locally.'
              : 'Recorre cada módulo y descubre cómo Lexbell organiza tu oficina legal sin depender de la nube.' }}
          </p>
        </div>

        <!-- Microsoft 365 Split: Acordeón Izquierda + Escenario 3D Azul Derecha -->
        <div class="ms-showcase-split">
          <div class="ms-accordion" role="tablist" aria-label="Módulos de Lexbell">
            <button
              v-for="(tab, idx) in showcaseTabs"
              :key="tab.id"
              type="button"
              role="tab"
              :aria-selected="activeTab === idx"
              class="ms-acc-item"
              :class="{ 'is-active': activeTab === idx }"
              @click="activeTab = idx"
            >
              <div class="ms-acc-header">
                <span class="ms-acc-label">{{ tab.label }}</span>
                <svg class="ms-acc-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
              <div v-show="activeTab === idx" class="ms-acc-body">
                <h3 class="ms-acc-title">{{ tab.title }}</h3>
                <p class="ms-acc-desc">{{ tab.desc }}</p>
              </div>
            </button>
          </div>

          <div class="ms-studio-stage">
            <div class="ms-studio-glow" aria-hidden="true"></div>
            <div class="ms-3d-frame">
              <img
                :key="showcaseTabs[activeTab].id"
                :src="showcaseTabs[activeTab].img"
                :alt="showcaseTabs[activeTab].title"
                class="showcase-img"
                width="2000"
                height="1185"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <!-- Bento Grid de 2 Columnas (Plazos y Contactos) -->
        <div class="bento-grid">
          <div class="bento-card">
            <div class="bento-copy">
              <span class="bento-tag">{{ locale === 'en' ? 'DEADLINE ALERTS' : 'PLAZOS FATALES' }}</span>
              <h3 class="bento-title">{{ locale === 'en' ? 'See upcoming hearings at a glance' : 'Anticipa cada vencimiento en días exactos' }}</h3>
              <p class="bento-desc">
                {{ locale === 'en'
                  ? 'Chronological list highlighting deadlines in 3, 4, or 5 days so nothing slips through.'
                  : 'Vista cronológica con alertas visuales ("En 3 días", "En 4 días") para que ningún término te tome por sorpresa.' }}
              </p>
            </div>
            <div class="bento-media">
              <img
                src="/screenshots/showcase-calendar-list.webp"
                :alt="locale === 'en' ? 'Lexbell chronological deadline list' : 'Lista cronológica de audiencias y vencimientos en Lexbell'"
                class="bento-img"
                width="2000"
                height="1185"
                loading="lazy"
              />
            </div>
          </div>

          <div class="bento-card">
            <div class="bento-copy">
              <span class="bento-tag">{{ locale === 'en' ? 'CLIENT DIRECTORY' : 'DIRECTORIO LEGAL' }}</span>
              <h3 class="bento-title">{{ locale === 'en' ? 'Every party linked to their cases' : 'Clientes y contrapartes vinculados a sus casos' }}</h3>
              <p class="bento-desc">
                {{ locale === 'en'
                  ? 'Instant search across clients, opposing parties, and attorneys with full case history.'
                  : 'Encuentra al instante clientes, contrapartes y abogados relacionados junto a todos sus expedientes.' }}
              </p>
            </div>
            <div class="bento-media">
              <img
                src="/screenshots/showcase-contacts.webp"
                :alt="locale === 'en' ? 'Lexbell contacts and parties directory' : 'Directorio de clientes y contrapartes en Lexbell'"
                class="bento-img"
                width="2000"
                height="1185"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- =================== 1.8 ECOSISTEMA LOCAL: IA PRIVADA (MCP) Y RED DE OFICINA (LAN) =================== -->
    <section class="section section-gray" id="ecosistema-local">
      <div class="apple-wrap">
        <div class="text-center max-w-2xl mx-auto mb-12">
          <span class="eyebrow">{{ locale === 'en' ? 'LOCAL ECOSYSTEM' : 'ECOSISTEMA LOCAL' }}</span>
          <h2 class="h-section">{{ locale === 'en' ? 'Private AI and office collaboration, zero cloud' : 'IA privada y trabajo en equipo, sin subir nada a la nube' }}</h2>
          <p class="subtitle mt-3">
            {{ locale === 'en'
              ? 'Built for solo attorneys and boutique law firms (1 to 10 people) who refuse to compromise client confidentiality.'
              : 'Pensado para abogados independientes y despachos boutique de 1 a 10 personas que protegen el secreto profesional.' }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bento-card" style="padding-bottom: 28px;">
            <div class="bento-copy" style="margin-bottom: 0;">
              <span class="bento-tag">{{ locale === 'en' ? 'LOCAL ARTIFICIAL INTELLIGENCE' : 'INTELIGENCIA ARTIFICIAL LOCAL' }}</span>
              <h3 class="bento-title">{{ locale === 'en' ? 'MCP Connectors: Your practice powered by local AI' : 'Conectores MCP: IA privada sobre tus expedientes' }}</h3>
              <p class="bento-desc">
                {{ locale === 'en'
                  ? 'Connect Claude Desktop, Google Antigravity, Cursor, and OpenAI Codex in one click through a local read-only MCP server. Ask about cases, summarize pleadings, and verify deadlines without uploading client data.'
                  : 'Conecta Claude Desktop, Google Antigravity, Cursor y OpenAI Codex en un clic mediante un servidor MCP local de solo lectura. Consulta casos, resume escritos y verifica plazos sin enviar datos confidenciales a servidores externos.' }}
              </p>
              <div class="mt-4 flex flex-wrap gap-2">
                <span class="lexbell-pill" style="background: var(--accent-soft); color: var(--accent); border: 1px solid var(--accent-border);">Claude Desktop</span>
                <span class="lexbell-pill" style="background: var(--accent-soft); color: var(--accent); border: 1px solid var(--accent-border);">Antigravity</span>
                <span class="lexbell-pill" style="background: var(--accent-soft); color: var(--accent); border: 1px solid var(--accent-border);">Cursor</span>
                <span class="lexbell-pill" style="background: var(--accent-soft); color: var(--accent); border: 1px solid var(--accent-border);">Codex</span>
              </div>
            </div>
          </div>

          <div class="bento-card" style="padding-bottom: 28px;">
            <div class="bento-copy" style="margin-bottom: 0;">
              <span class="bento-tag">{{ locale === 'en' ? 'OFFICE COLLABORATION (1–10 PEOPLE)' : 'COLABORACIÓN EN DESPACHO (1 A 10 PERSONAS)' }}</span>
              <h3 class="bento-title">{{ locale === 'en' ? 'Share in Office: Real-time sync over local Wi-Fi' : 'Compartir en Oficina: Red local LAN con PIN' }}</h3>
              <p class="bento-desc">
                {{ locale === 'en'
                  ? 'Coordinate cases, hearings, and tasks with partners and paralegals across your office Wi-Fi or Ethernet. 6-digit PIN pairing keeps encrypted P2P sync strictly inside your physical office.'
                  : 'Sincroniza expedientes, audiencias y tareas en tiempo real con socios y asistentes a través del Wi-Fi o cable Ethernet de tu oficina. Emparejamiento P2P cifrado con PIN de 6 dígitos, cero servidores en internet.' }}
              </p>
              <div class="mt-4 flex flex-wrap gap-2">
                <span class="lexbell-pill" style="background: var(--accent-soft); color: var(--accent); border: 1px solid var(--accent-border);">{{ locale === 'en' ? 'Local Wi-Fi / LAN' : 'Wi-Fi / Red Local' }}</span>
                <span class="lexbell-pill" style="background: var(--accent-soft); color: var(--accent); border: 1px solid var(--accent-border);">{{ locale === 'en' ? '6-Digit PIN P2P' : 'PIN P2P 6 dígitos' }}</span>
                <span class="lexbell-pill" style="background: var(--accent-soft); color: var(--accent); border: 1px solid var(--accent-border);">{{ locale === 'en' ? 'Zero Cloud Servers' : 'Cero Nube' }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- =================== 2. TABLA COMPARATIVA DE ARQUITECTURA =================== -->
    <section class="section">
      <div class="apple-wrap compare-wrap">
        <div class="text-center max-w-2xl mx-auto mb-14">
          <span class="eyebrow">{{ t('home.compareEyebrow') }}</span>
          <h2 class="h-section">{{ t('home.compareTitle') }}</h2>
          <p class="subtitle mt-3">{{ t('home.compareSubtitle') }}</p>
        </div>

        <div class="compare-table-wrap">
          <table class="compare-table" :aria-label="locale === 'en' ? 'Comparison of Lexbell versus cloud software and spreadsheets' : 'Comparativa de Lexbell frente a la nube y hojas de cálculo'">
            <thead>
              <tr>
                <th style="width: 21%;">{{ t('home.compareColFeature') }}</th>
                <th class="lexbell-col" style="width: 31%;">
                  <div class="lexbell-th-inner">
                    <span class="lexbell-pill">{{ locale === 'en' ? 'Recommended' : 'Recomendado' }}</span>
                    <span>{{ t('home.compareColLexbell') }}</span>
                  </div>
                </th>
                <th style="width: 24%;">{{ t('home.compareColCloud') }}</th>
                <th style="width: 24%;">{{ t('home.compareColManual') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, idx) in comparisonRows" :key="idx">
                <td class="compare-feature-cell">{{ row.title }}</td>
                <td class="lexbell-col">
                  <div class="compare-cell">
                    <span class="compare-badge is-check" aria-hidden="true">
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 8.5 6.5 11.5 12.5 4.5"/></svg>
                    </span>
                    <span class="compare-lexbell-text">{{ row.lexbell }}</span>
                  </div>
                </td>
                <td>
                  <div class="compare-cell">
                    <span class="compare-badge is-cross" aria-hidden="true">
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round"><path d="m4.5 4.5 7 7M11.5 4.5l-7 7"/></svg>
                    </span>
                    <span>{{ row.cloud }}</span>
                  </div>
                </td>
                <td>
                  <div class="compare-cell">
                    <span class="compare-badge" :class="row.manualType === 'partial' ? 'is-partial' : 'is-cross'" aria-hidden="true">
                      <svg v-if="row.manualType === 'partial'" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 8h8"/></svg>
                      <svg v-else viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round"><path d="m4.5 4.5 7 7M11.5 4.5l-7 7"/></svg>
                    </span>
                    <span>{{ row.manual }}</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- =================== 5. TESTIMONIOS =================== -->
    <section class="section section-gray">
      <div class="apple-wrap">
        <div class="text-center max-w-2xl mx-auto mb-12">
          <span class="eyebrow">{{ locale === 'en' ? 'TESTIMONIALS' : 'OPINIONES REALES' }}</span>
          <h2 class="h-section">{{ locale === 'en' ? 'Trusted by independent legal professionals' : 'Lo que dicen profesionales que usan Lexbell' }}</h2>
        </div>

        <!-- Testimonios de profesionales reales -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="item in testimonials" :key="item.id" class="testimonial-card">
            <p class="testimonial-quote">“{{ item.quote }}”</p>
            <div class="testimonial-author">
              <img
                :src="item.avatar"
                :alt="item.author"
                class="testimonial-avatar"
                width="44"
                height="44"
                loading="lazy"
              />
              <div class="testimonial-author-info">
                <strong>{{ item.author }}</strong>
                <span>{{ item.role }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- =================== 5. PREGUNTAS FRECUENTES (Acordeón Notion) =================== -->
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

    <!-- =================== 6. CTA FINAL DE DESCARGA =================== -->
    <section class="final-cta-section">
      <div class="apple-wrap">
        <div class="final-cta-box">
          <span class="eyebrow">{{ locale === 'en' ? 'START FOR FREE' : 'EMPIEZA GRATIS HOY' }}</span>
          <h2 class="final-cta-title">
            {{ locale === 'en' ? 'Bring order to your legal practice today' : 'Pon orden en tu oficina legal hoy mismo' }}
          </h2>
          <p class="final-cta-sub">
            {{ locale === 'en'
              ? 'Download Lexbell for Mac or Windows. Up to 50 active cases free, 100% local and private.'
              : 'Descarga Lexbell para Mac o Windows. Hasta 50 expedientes activos gratis, 100% local y privado.' }}
          </p>
          <div class="final-cta-downloads">
            <AppDownload center />
          </div>
          <p class="final-cta-note">
            {{ locale === 'en' ? 'Installs in under 1 minute · No credit card required' : 'Instalación en menos de 1 minuto · Sin tarjeta de crédito' }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* === NOTION LANDING WRAPPER === */
.notion-landing {
  background: var(--bg);
  color: var(--text);
}

/* === HERO SECTION (MICROSOFT 365 STYLE: SPLIT 2 COLUMNAS CON LAPTOP) === */
.ms-hero-section {
  position: relative;
  background: var(--bg-section);
  border-bottom: 1px solid var(--border);
  overflow: hidden;
  padding: clamp(48px, 6vw, 80px) 24px 40px;
}

.ms-hero-inner {
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  gap: clamp(36px, 5vw, 64px);
}

@media (min-width: 960px) {
  .ms-hero-inner {
    grid-template-columns: 1.05fr 1.15fr;
  }
}

.ms-hero-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}

.ms-hero-title {
  font-size: clamp(32px, 3.8vw, 46px);
  font-weight: 800;
  line-height: 1.14;
  letter-spacing: -0.03em;
  color: var(--text);
  margin: 0 0 18px;
  text-wrap: balance;
}

.ms-hero-subtitle {
  font-size: clamp(16px, 2vw, 19px);
  line-height: 1.55;
  color: var(--text-muted);
  margin: 0 0 20px;
  max-width: 540px;
}

.ms-hero-guarantees {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  font-size: 13.5px;
  font-weight: 600;
  color: var(--accent);
  margin-bottom: 28px;
  background: var(--card-bg);
  padding: 8px 16px;
  border-radius: 999px;
  border: 1px solid var(--accent-border);
  box-shadow: var(--shadow-card);
}

.guarantee-dot {
  color: #94a3b8;
  font-weight: 400;
}

.ms-hero-downloads {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
}

/* Columna Derecha: Ventana real recta (2D) sobre cuadrícula arquitectónica */
.hero-app-col {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.hero-app-grid {
  position: absolute;
  inset: -44px -36px;
  background-image:
    radial-gradient(ellipse at 50% 50%, rgba(59, 130, 246, 0.14) 0%, rgba(59, 130, 246, 0) 68%),
    linear-gradient(to right, rgba(148, 163, 184, 0.12) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(148, 163, 184, 0.12) 1px, transparent 1px);
  background-size: 100% 100%, 34px 34px, 34px 34px;
  mask-image: radial-gradient(ellipse at center, #000 42%, transparent 76%);
  -webkit-mask-image: radial-gradient(ellipse at center, #000 42%, transparent 76%);
  pointer-events: none;
}

.hero-app-frame {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 660px;
  border-radius: 14px;
  overflow: hidden;
  background: var(--card-bg);
  border: 1px solid var(--border);
  box-shadow:
    0 24px 60px -12px rgba(0, 0, 0, 0.35),
    0 6px 20px -4px rgba(0, 0, 0, 0.15);
}

.hero-app-img {
  display: block;
  width: 100%;
  height: auto;
}

/* Feature Grid Debajo de la App */
.hero-features-grid {
  position: relative;
  z-index: 2;
  max-width: 1280px;
  margin: 40px auto 0;
  padding-top: 0;
  border-top: none;
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

@media (min-width: 640px) {
  .hero-features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .hero-features-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.hero-feat-card {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.hero-feat-icon-box {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  color: var(--icon-color);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
}

.hero-feat-title {
  font-size: 15px;
  font-weight: 700;
  color: var(--text);
  margin: 0 0 4px;
  letter-spacing: -0.01em;
}

.hero-feat-desc {
  font-size: 13px;
  line-height: 1.5;
  color: var(--text-muted);
  margin: 0;
  text-wrap: pretty;
}

/* SECCIONES BASE */
.section {
  padding: clamp(60px, 8vw, 96px) 24px;
}

.section-gray {
  background: var(--bg-section);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.apple-wrap {
  max-width: 1120px;
  margin: 0 auto;
}

.eyebrow {
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--accent);
  margin-bottom: 8px;
}

.h-section {
  font-size: clamp(28px, 4.2vw, 40px);
  font-weight: 800;
  line-height: 1.18;
  letter-spacing: -0.03em;
  color: var(--text);
  margin: 0;
}

.subtitle {
  font-size: clamp(15px, 1.8vw, 17px);
  line-height: 1.55;
  color: var(--text-muted);
  margin: 0;
  text-wrap: balance;
}

/* TABLA COMPARATIVA */
.compare-wrap {
  max-width: 1340px;
}

.compare-table-wrap {
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  border-radius: 20px;
  border: 1px solid var(--border);
  background: var(--card-bg);
  box-shadow: var(--shadow-card);
}

.compare-table {
  width: 100%;
  min-width: 960px;
  border-collapse: separate;
  border-spacing: 0;
  font-size: 13.5px;
  background: var(--card-bg);
}

.compare-table th {
  padding: 18px 16px 16px;
  text-align: left;
  font-weight: 700;
  font-size: 13.5px;
  background: var(--bg-subtle);
  border-bottom: 1px solid var(--border);
  color: var(--text);
  vertical-align: bottom;
}

.compare-table td {
  padding: 15px 16px;
  border-bottom: 1px solid var(--border);
  color: var(--text-muted);
  vertical-align: middle;
  line-height: 1.45;
  transition: background-color 0.15s ease;
}

.compare-table tbody tr:hover td {
  background: var(--bg-subtle);
}

.compare-table tbody tr:hover td.lexbell-col {
  background: var(--accent-soft);
}

.compare-table tr:last-child td {
  border-bottom: none;
}

.compare-feature-cell {
  font-weight: 600;
  color: var(--text) !important;
}

.compare-table th.lexbell-col {
  background: var(--accent-soft);
  color: var(--accent);
  border-left: 1px solid var(--accent-border);
  border-right: 1px solid var(--accent-border);
  box-shadow: inset 0 3px 0 var(--accent);
}

.compare-table td.lexbell-col {
  background: var(--bg-elevated);
  border-left: 1px solid var(--accent-border);
  border-right: 1px solid var(--accent-border);
}

.lexbell-th-inner {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
}

.lexbell-pill {
  display: inline-block;
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 3px 9px;
  border-radius: 999px;
  background: #0066cc;
  color: #ffffff;
}

.compare-cell {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.compare-lexbell-text {
  font-weight: 600;
  color: var(--text);
}

.compare-badge {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  margin-top: 1px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.compare-badge svg {
  width: 12px;
  height: 12px;
}

.compare-badge.is-check {
  background: var(--accent-soft);
  color: var(--accent);
}

.compare-badge.is-cross {
  background: rgba(239, 68, 68, 0.16);
  color: #ef4444;
}

.compare-badge.is-partial {
  background: rgba(245, 158, 11, 0.16);
  color: #f59e0b;
}

/* TESTIMONIOS */
.testimonial-card {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 26px 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: var(--shadow-card);
}

.testimonial-quote {
  font-size: 14px;
  line-height: 1.55;
  color: var(--text-muted);
  margin: 0 0 18px;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 12px;
  border-top: 1px solid var(--border);
  padding-top: 14px;
}

.testimonial-avatar {
  width: 44px;
  height: 44px;
  border-radius: 9999px;
  object-fit: cover;
  flex-shrink: 0;
  border: 1px solid var(--border);
  background: var(--bg-elevated);
}

.testimonial-author-info {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.testimonial-author strong {
  font-size: 13.5px;
  color: var(--text);
  font-weight: 700;
  line-height: 1.3;
}

.testimonial-author span {
  font-size: 12px;
  color: var(--text-light);
  margin-top: 2px;
  line-height: 1.3;
}

/* FAQ ACORDEÓN */
.faq-accordion {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.faq-item {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 12px;
  overflow: hidden;
  transition: border-color 0.15s ease;
}

.faq-item.is-open {
  border-color: var(--border-dark);
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
  color: var(--text);
  gap: 16px;
}

.faq-chevron {
  transition: transform 0.2s ease;
  flex-shrink: 0;
  color: var(--icon-color);
}

.faq-item.is-open .faq-chevron {
  transform: rotate(180deg);
}

.faq-answer {
  padding: 0 22px 20px;
  font-size: 14.5px;
  line-height: 1.6;
  color: var(--text-muted);
}

.faq-answer p {
  margin: 0;
}

/* HERO TRUST NOTE */
.hero-trust-note {
  margin: 10px 0 0;
  font-size: 13px;
  color: var(--text-light);
  font-weight: 500;
}

/* PRODUCT SHOWCASE (MICROSOFT 365 SPLIT + 3D STUDIO) */
.showcase-section {
  padding: clamp(56px, 7vw, 92px) 24px;
  background: var(--bg);
  border-bottom: 1px solid var(--border);
}

.ms-showcase-split {
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  align-items: center;
}

@media (min-width: 960px) {
  .ms-showcase-split {
    grid-template-columns: 0.9fr 1.45fr;
    gap: 44px;
  }
}

.ms-accordion {
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--border);
}

.ms-acc-item {
  width: 100%;
  text-align: left;
  background: transparent;
  border: none;
  border-bottom: 1px solid var(--border);
  border-left: 3px solid transparent;
  padding: 16px 18px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.ms-acc-item:hover {
  background: var(--bg-subtle);
}

.ms-acc-item.is-active {
  border-left-color: var(--accent);
  background: var(--accent-soft);
}

.ms-acc-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.ms-acc-label {
  font-size: 16px;
  font-weight: 700;
  color: var(--text);
  letter-spacing: -0.015em;
}

.ms-acc-item.is-active .ms-acc-label {
  color: var(--accent);
}

.ms-acc-chevron {
  color: var(--icon-color);
  transition: transform 0.2s ease, color 0.2s ease;
  flex-shrink: 0;
}

.ms-acc-item.is-active .ms-acc-chevron {
  transform: rotate(180deg);
  color: var(--accent);
}

.ms-acc-body {
  margin-top: 10px;
}

.ms-acc-title {
  font-size: 14.5px;
  font-weight: 600;
  color: var(--text);
  margin: 0 0 4px;
  line-height: 1.35;
}

.ms-acc-desc {
  font-size: 13.5px;
  color: var(--text-muted);
  margin: 0;
  line-height: 1.5;
  text-wrap: pretty;
}

.ms-studio-stage {
  position: relative;
  border-radius: 24px;
  padding: clamp(24px, 3.5vw, 44px);
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  overflow: hidden;
}

.ms-studio-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 75% 25%, rgba(59, 130, 246, 0.16), transparent 55%);
  pointer-events: none;
}

.ms-3d-frame {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--border);
  background: var(--card-bg);
  transform: perspective(1600px) rotateY(-4deg) rotateX(2deg);
  box-shadow:
    18px 26px 56px -12px rgba(0, 0, 0, 0.35),
    0 6px 18px -4px rgba(0, 0, 0, 0.18);
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease;
}

.ms-studio-stage:hover .ms-3d-frame {
  transform: perspective(1600px) rotateY(0deg) rotateX(0deg) translateY(-2px);
  box-shadow:
    0 28px 64px -12px rgba(0, 0, 0, 0.4),
    0 8px 20px -4px rgba(0, 0, 0, 0.2);
}

.showcase-img {
  display: block;
  width: 100%;
  height: auto;
  animation: showcaseFadeIn 0.25s ease-out;
}

@keyframes showcaseFadeIn {
  from {
    opacity: 0.45;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* BENTO GRID */
.bento-grid {
  margin: 48px auto 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

@media (min-width: 820px) {
  .bento-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.bento-card {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 28px 28px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.bento-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-card);
}

.bento-copy {
  margin-bottom: 22px;
}

.bento-tag {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 8px;
}

.bento-title {
  font-size: 20px;
  font-weight: 700;
  color: var(--text);
  letter-spacing: -0.02em;
  margin: 0 0 8px;
  line-height: 1.25;
}

.bento-desc {
  font-size: 14px;
  line-height: 1.55;
  color: var(--text-muted);
  margin: 0;
  text-wrap: pretty;
}

.bento-media {
  border-radius: 14px 14px 0 0;
  padding: 20px 20px 0;
  overflow: hidden;
  border: 1px solid var(--border);
  border-bottom: none;
  background: var(--bg-elevated);
}

.bento-img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 8px 8px 0 0;
  border: 1px solid var(--border);
  border-bottom: none;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.22);
}

/* FINAL CTA SECTION */
.final-cta-section {
  padding: clamp(56px, 7vw, 84px) 24px;
  background: var(--bg);
  border-top: 1px solid var(--border);
}

.final-cta-box {
  max-width: 780px;
  margin: 0 auto;
  text-align: center;
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 22px;
  padding: clamp(36px, 5vw, 56px) 24px;
}

.final-cta-title {
  font-size: clamp(26px, 3.8vw, 38px);
  font-weight: 800;
  color: var(--text);
  letter-spacing: -0.03em;
  line-height: 1.15;
  margin: 0 0 12px;
  text-wrap: balance;
}

.final-cta-sub {
  font-size: 16px;
  color: var(--text-muted);
  max-width: 540px;
  margin: 0 auto 28px;
  line-height: 1.55;
  text-wrap: balance;
}

.final-cta-downloads {
  display: flex;
  justify-content: center;
}

.final-cta-note {
  margin: 14px 0 0;
  font-size: 13px;
  color: var(--text-light);
  font-weight: 500;
}

/* === JURISDICTIONS STRIP === */
.jurisdictions-strip {
  background: var(--bg);
}

.country-pill {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 6px 12px;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: 9999px;
  font-size: 12.5px;
  font-weight: 500;
  color: var(--text);
  text-decoration: none;
  transition: all 0.15s ease;
}

.country-pill:hover {
  border-color: var(--accent);
  background: var(--card-bg);
  transform: translateY(-1px);
}

.country-flag {
  font-size: 15px;
  line-height: 1;
}

.country-name {
  font-weight: 600;
  color: var(--text);
}

.country-code {
  font-size: 10px;
  padding: 1px 5px;
  border-radius: 4px;
  background: var(--border);
  color: var(--text-muted);
  font-weight: 700;
}

.country-pill-global {
  opacity: 0.9;
}
</style>
