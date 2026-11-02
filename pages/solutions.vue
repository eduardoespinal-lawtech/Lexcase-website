<script setup lang="ts">
const { t, locale } = useI18n()

definePageMeta({ name: 'solutions' })

useHead(() => {
  const isEn = locale.value === 'en'
  const title = isEn
    ? 'Legal Solutions by Practice Area — Lexbell'
    : 'Soluciones Legales por Rama y Público Objetivo — Lexbell'
  const desc = isEn
    ? 'Discover how Lexbell empowers litigation, administrative law, immigration, real estate, and corporate attorneys with local-first case management.'
    : 'Descubre cómo Lexbell ayuda a abogados litigantes, administrativos, de migración, inmobiliarios y corporativos con gestión local de expedientes.'

  return {
    title,
    meta: [
      { name: 'description', content: desc },
      { property: 'og:title', content: title },
      { property: 'og:description', content: desc }
    ]
  }
})

const activeTab = ref(0)

const solutions = computed(() => {
  if (locale.value === 'en') {
    return [
      {
        id: 'litigation',
        tabLabel: 'Litigation & Court',
        eyebrow: 'LITIGATION & TRIAL ADVOCACY',
        title: 'Built for trial attorneys: Civil, Criminal, and Labor litigation.',
        audience: 'Solo Trial Lawyers · Litigation Firms · Defense Advocates',
        problem: 'Tight hearing schedules, strict statutory deadlines under court procedural codes, multiple parties and witnesses, and courthouses with zero cellular or Wi-Fi reception.',
        howHelps: [
          'Instant offline docket access right inside the courtroom without relying on cellular data.',
          'Automated statutory deadline calculator and hearing countdowns that keep you ahead of court calendar dates.',
          'Structured party management linking plaintiffs, defendants, co-counsels, judges, and case numbers in one view.',
          'Secure document vault for motions, exhibits, audio evidence, and judgments stored locally on your hard drive.'
        ],
        badge: 'Civil · Criminal · Labor'
      },
      {
        id: 'administrative',
        tabLabel: 'Administrative & Tax',
        eyebrow: 'GOVERNMENT REGULATORY & TAX LAW',
        title: 'Navigate administrative filings, reconsiderations, and tax authorities.',
        audience: 'Tax Attorneys · Public Law Specialists · Regulatory Consultants',
        problem: 'Complex bureaucratic procedural timelines, strict administrative silence terms, formal reconsideration appeals, and lengthy government review periods.',
        howHelps: [
          'End-to-end audit trail tracking file numbers, agency branches, hearing dates, and public official contacts.',
          'Early warning alerts before administrative silence expires or response deadlines elapse.',
          'Centralized repository for official agency resolutions, tax certifications, and certified notices.',
          'Zero leak risk: sensitive company tax audits and government submissions remain private on your computer.'
        ],
        badge: 'Tax · Government · Compliance'
      },
      {
        id: 'immigration',
        tabLabel: 'Immigration & Consular',
        eyebrow: 'IMMIGRATION & CROSS-BORDER MOBILITY',
        title: 'Complete consular tracking for visas, residencies, and family petitions.',
        audience: 'Immigration Practitioners · Global Mobility Teams · Visa Consultants',
        problem: 'Strict consular appointment windows, differing document requirements per embassy, passport and visa expirations, and tracking primary applicants alongside their dependents.',
        howHelps: [
          'Dedicated consular file sheet recording case status, consular receipts, biometric dates, and interviews.',
          'Automated alerts before passports, work permits, and temporary visas expire.',
          'Complete family unit management linking spouses, children, and sponsors under one main matter.',
          'Standardized checklist of apostilles, translations, and financial sponsor evidence.'
        ],
        badge: 'Visas · Residencies · Consular'
      },
      {
        id: 'real-estate',
        tabLabel: 'Real Estate & Leases',
        eyebrow: 'REAL ESTATE, LEASING & CLOSINGS',
        title: 'Effortlessly oversee rental portfolios, purchase agreements, and property titles.',
        audience: 'Real Estate Attorneys · Property Managers · Closing Specialists',
        problem: 'Managing dozens of active tenancy agreements, tracking rent collection dates, security deposit escrows, purchase contract terms, and title deed transfer deadlines.',
        howHelps: [
          'Leasing docket with rent collection calendar, annual price index adjustments, and renewal notice dates.',
          'Escrow and security deposit accounting with tenant and co-signer registry.',
          'Purchase agreement tracker monitoring deposit stages, balance deadlines, and title transfers.',
          'Property vault for survey plans, tax clearances (IPI), and recorded title certificates.'
        ],
        badge: 'Leases · Sales · Title Deeds'
      },
      {
        id: 'corporate',
        tabLabel: 'Corporate & M&A',
        eyebrow: 'CORPORATE GOVERNANCE & COMMERCIAL ENTITIES',
        title: 'Master shareholder minutes, corporate registries, and conflict checks.',
        audience: 'Corporate Counsel · In-house Legal Teams · Business Law Firms',
        problem: 'Annual corporate registry renewals, tracking ordinary/extraordinary shareholder resolutions, corporate bylaws changes, and the catastrophic risk of representing adverse related parties.',
        howHelps: [
          'Relationship Graph: automatically maps shared shareholders, directors, and counterparties to eliminate conflict of interest.',
          'Corporate governance archive for board minutes, shareholder registries, and authorized signatures.',
          'Timely reminders for annual mercantile registry filings and corporate tax registry updates.',
          'Instant corporate health audit with complete history of capital increases and bylaws modifications.'
        ],
        badge: 'Shareholders · Minutes · Compliance'
      }
    ]
  }

  return [
    {
      id: 'litigation',
      tabLabel: 'Litigación y Juicios',
      eyebrow: 'LITIGACIÓN PENAL, CIVIL Y LABORAL',
      title: 'Diseñado para procesalistas: audiencias, plazos y juicio oral.',
      audience: 'Abogados Litigantes · Bufetes de Litigios · Defensores Penales y Laborales',
      problem: 'Agendas saturadas de audiencias, plazos procesales fatales con días hábiles, múltiples partes (demandante, demandado, testigos, peritos) y juzgados donde no hay cobertura de internet ni señal celular.',
      howHelps: [
        'Acceso 100% offline al expediente completo en plena sala de audiencias, sin depender de Wi-Fi o datos móviles.',
        'Calculadora automática de plazos procesales según días hábiles y código de procedimiento aplicable.',
        'Registro estructurado de partes procesales, jueces, secretarías y juzgados correspondientes.',
        'Bóveda segura para escritos, sentencias, audios y pruebas documentales en el disco duro local.'
      ],
      badge: 'Penal · Civil · Laboral'
    },
    {
      id: 'administrative',
      tabLabel: 'Administrativo y Tributario',
      eyebrow: 'DERECHO ADMINISTRATIVO Y TRIBUTARIO',
      title: 'Control riguroso de recursos, silencio administrativo e impuestos.',
      audience: 'Especialistas en Derecho Administrativo · Asesores Tributarios · Consultores Regulatorios',
      problem: 'Trámites burocráticos extensos, plazos estrictos de respuesta del Estado (silencio administrativo), recursos de reconsideración o jerárquicos y revisiones fiscales sensibles.',
      howHelps: [
        'Cronología exhaustiva de radicación, fechas de notificación oficial y funcionarios a cargo.',
        'Alertas preventivas antes de que precluyan los términos de impugnación o respuesta estatal.',
        'Custodia digital de resoluciones, certificaciones tributarias y comprobantes de depósito.',
        'Cero riesgo de filtración: la información tributaria y fiscal de tus clientes nunca toca servidores en la nube.'
      ],
      badge: 'Tributario · Ministerios · Contencioso'
    },
    {
      id: 'immigration',
      tabLabel: 'Migración y Consular',
      eyebrow: 'DERECHO MIGRATORIO Y EXTRANJERÍA',
      title: 'Seguimiento consular impecable de visados, residencias y peticiones.',
      audience: 'Abogados de Extranjería · Gestores Migratorios · Asesores de Movilidad Global',
      problem: 'Citas consulares imprevistas, requisitos documentales distintos por país, vencimiento de pasaportes y permisos de trabajo, y seguimiento coordinado del solicitante y sus dependientes.',
      howHelps: [
        'Ficha consular dedicada con seguimiento de estatus (recibido, cita, entrevista, visado emitido).',
        'Alertas automáticas antes de la expiración de pasaportes, visados de trabajo o permisos de residencia.',
        'Gestión unificada de núcleos familiares vinculando al solicitante principal con sus cargas.',
        'Control documental de legalizaciones, apostillas, traducciones y formularios oficiales.'
      ],
      badge: 'Visas · Residencias · Pasaportes'
    },
    {
      id: 'real-estate',
      tabLabel: 'Inmobiliario y Alquileres',
      eyebrow: 'ARRENDAMIENTOS, COMPRAVENTAS Y BIENES RAÍCES',
      title: 'Gestión ágil de cartera de alquileres, contratos y títulos de propiedad.',
      audience: 'Abogados Inmobiliarios · Notarios · Administradores Legales de Propiedades',
      problem: 'Decenas de contratos de arrendamiento simultáneos, cobros mensuales, control de depósitos en garantía, promesas de venta y seguimiento de transferencias de títulos de propiedad.',
      howHelps: [
        'Módulo de Alquileres con calendario mensual de cobros, preavisos y aumentos anuales de canon.',
        'Registro de garantes solidarios, inventarios de inmuebles y custodia de depósitos.',
        'Cronograma de pagos de compraventa: seguimiento de firmas, abonos, saldos y entrega de bien.',
        'Bóveda para planos de deslinde, certificados de título, impuestos de transferencia e IPI.'
      ],
      badge: 'Alquileres · Compraventa · Títulos'
    },
    {
      id: 'corporate',
      tabLabel: 'Corporativo y Empresas',
      eyebrow: 'DERECHO SOCIETARIO Y MERCANTIL',
      title: 'Dominio de asambleas, nóminas de socios y prevención de conflictos.',
      audience: 'Asesores de Empresas · Departamentos Jurídicos In-House · Abogados Mercantiles',
      problem: 'Vencimientos de Registros Mercantiles, actas de asambleas ordinarias obligatorias, nóminas de socios desactualizadas y el grave riesgo deontológico de representar partes en conflicto.',
      howHelps: [
        'Mapa interactivo de vínculos: detecta al instante socios comunes, empresas filiales y contrapartes.',
        'Archivo histórico de actas de asamblea, aumentos de capital social y modificaciones de estatutos.',
        'Alertas anticipadas de renovación de Registro Mercantil, licencias comerciales y RNC.',
        'Auditoría corporativa instantánea con composición accionaria y poderes de administración vigentes.'
      ],
      badge: 'Socios · Asambleas · Registro Mercantil'
    }
  ]
})
</script>

<template>
  <div class="solutions-page">
    <!-- Header Hero -->
    <section class="solutions-hero">
      <div class="solutions-wrap text-center max-w-3xl mx-auto">
        <span class="eyebrow">{{ locale === 'en' ? 'PRACTICE AREAS & AUDIENCES' : 'SOLUCIONES A TU MEDIDA' }}</span>
        <h1 class="solutions-hero-title">
          {{ locale === 'en' ? 'Designed for Every Legal Practice' : 'Diseñado para cada tipo de práctica jurídica' }}
        </h1>
        <p class="solutions-hero-subtitle mt-4">
          {{ locale === 'en'
            ? 'Discover how Lexbell optimizes daily workflows for litigators, corporate counsel, administrative specialists, immigration lawyers, and real estate advisors.'
            : 'Descubre cómo Lexbell optimiza el día a día de litigantes, asesores corporativos, abogados administrativos, especialistas en extranjería y bienes raíces.'
          }}
        </p>
      </div>
    </section>

    <!-- Selector de Soluciones (Tabs Estilo Notion/Apple) -->
    <section class="solutions-tabs-nav-section">
      <div class="solutions-wrap">
        <div class="solutions-tabs-bar">
          <button
            v-for="(sol, idx) in solutions"
            :key="sol.id"
            class="solution-tab-btn"
            :class="{ 'is-active': activeTab === idx }"
            @click="activeTab = idx"
          >
            {{ sol.tabLabel }}
          </button>
        </div>
      </div>
    </section>

    <!-- Contenido Detallado de la Solución Activa -->
    <section class="solutions-detail-section">
      <div class="solutions-wrap max-w-4xl mx-auto">
        <div class="solution-card">
          <div class="solution-header">
            <span class="solution-tag">{{ solutions[activeTab].badge }}</span>
            <span class="solution-eyebrow">{{ solutions[activeTab].eyebrow }}</span>
            <h2 class="solution-title">{{ solutions[activeTab].title }}</h2>
          </div>

          <!-- A quién va dirigido -->
          <div class="solution-audience-box">
            <div class="audience-label">{{ locale === 'en' ? 'Target Audience' : 'Público Objetivo' }}:</div>
            <div class="audience-value">{{ solutions[activeTab].audience }}</div>
          </div>

          <!-- Dos Columnas: El Desafío vs Cómo Lexbell lo Resuelve -->
          <div class="solution-grid">
            <div class="solution-col solution-problem-col">
              <h3 class="col-heading text-red">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                <span>{{ locale === 'en' ? 'The Daily Struggle' : 'El Desafío Diario' }}</span>
              </h3>
              <p class="col-body">{{ solutions[activeTab].problem }}</p>
            </div>

            <div class="solution-col solution-how-col">
              <h3 class="col-heading text-blue">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                <span>{{ locale === 'en' ? 'How Lexbell Solves It' : 'Cómo te ayuda Lexbell' }}</span>
              </h3>
              <ul class="how-points-list">
                <li v-for="(pt, pIdx) in solutions[activeTab].howHelps" :key="pIdx">
                  <span class="check-bullet">✓</span>
                  <span>{{ pt }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Botón de Acción -->
          <div class="solution-card-footer">
            <a href="#descargar" class="solution-cta-btn">
              {{ locale === 'en' ? 'Try Lexbell 15 Days Free' : 'Probar Lexbell 15 días gratis' }} →
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Todas las Soluciones en Resumen Rápido -->
    <section class="solutions-overview-section">
      <div class="solutions-wrap">
        <div class="text-center max-w-2xl mx-auto mb-12">
          <span class="eyebrow">{{ locale === 'en' ? 'ALL PRACTICE AREAS' : 'TODAS LAS PRÁCTICAS' }}</span>
          <h2 class="h-section">{{ locale === 'en' ? 'One Local-First Engine, Five Specialized Workflows' : 'Un solo motor local, cinco flujos especializados' }}</h2>
          <p class="subtitle mt-3">
            {{ locale === 'en'
              ? 'No need to buy multiple fragmented tools. Lexbell adapts to every branch of law seamlessly.'
              : 'Sin necesidad de pagar herramientas dispersas. Lexbell unifica todas tus ramas con total privacidad.'
            }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div
            v-for="(sol, idx) in solutions"
            :key="sol.id"
            class="solution-quick-card"
            :class="{ 'is-active-card': activeTab === idx }"
            @click="activeTab = idx"
          >
            <span class="quick-card-badge">{{ sol.badge }}</span>
            <h3 class="quick-card-title">{{ sol.tabLabel }}</h3>
            <p class="quick-card-desc">{{ sol.problem }}</p>
            <button type="button" class="quick-card-link">
              {{ locale === 'en' ? 'View details' : 'Ver solución' }} →
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Final -->
    <section class="solutions-cta-section" id="descargar">
      <div class="solutions-wrap text-center">
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
.solutions-page {
  background: #ffffff;
  color: #191919;
}

.solutions-wrap {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.solutions-hero {
  padding: clamp(60px, 9vw, 96px) 0 40px;
  background: #fbfbfa;
  border-bottom: 1px solid #ebebea;
}

.solutions-hero-title {
  font-size: clamp(32px, 5vw, 48px);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.15;
  color: #050505;
  margin-top: 10px;
}

.solutions-hero-subtitle {
  font-size: clamp(16px, 2vw, 19px);
  line-height: 1.55;
  color: #5f5e5b;
}

/* Tabs Bar */
.solutions-tabs-nav-section {
  background: #fbfbfa;
  border-bottom: 1px solid #ebebea;
  padding: 16px 0;
  position: sticky;
  top: 54px;
  z-index: 10;
}

.solutions-tabs-bar {
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding-bottom: 4px;
  justify-content: center;
  -webkit-overflow-scrolling: touch;
}

.solution-tab-btn {
  background: #ffffff;
  border: 1px solid #ebebea;
  border-radius: 999px;
  padding: 8px 18px;
  font-size: 13.5px;
  font-weight: 600;
  color: #5f5e5b;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s ease;
}

.solution-tab-btn:hover {
  color: #050505;
  border-color: #c7c7c5;
}

.solution-tab-btn.is-active {
  background: #0066cc;
  color: #ffffff;
  border-color: #0066cc;
  box-shadow: 0 2px 8px rgba(0, 102, 204, 0.2);
}

/* Detail Section */
.solutions-detail-section {
  padding: clamp(50px, 7vw, 80px) 0;
}

.solution-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  padding: clamp(28px, 5vw, 44px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
}

.solution-tag {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 11.5px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background: #e6f0fa;
  color: #0066cc;
  margin-bottom: 12px;
}

.solution-eyebrow {
  display: block;
  font-size: 11.5px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #64748b;
  margin-bottom: 6px;
}

.solution-title {
  font-size: clamp(22px, 3.5vw, 32px);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.25;
  color: #0f172a;
  margin: 0 0 20px;
}

.solution-audience-box {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 14px 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  margin-bottom: 30px;
}

.audience-label {
  font-size: 12.5px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #475569;
}

.audience-value {
  font-size: 14.5px;
  font-weight: 600;
  color: #0f172a;
}

.solution-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

@media (min-width: 768px) {
  .solution-grid {
    grid-template-columns: 1fr 1.3fr;
  }
}

.solution-col {
  border-radius: 14px;
  padding: 24px;
}

.solution-problem-col {
  background: #fef2f2;
  border: 1px solid #fee2e2;
}

.solution-how-col {
  background: #f0f7ff;
  border: 1px solid #dbeafe;
}

.col-heading {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 15.5px;
  font-weight: 700;
  margin: 0 0 14px;
}

.col-heading.text-red {
  color: #b91c1c;
}

.col-heading.text-blue {
  color: #0369a1;
}

.col-body {
  font-size: 14px;
  line-height: 1.6;
  color: #7f1d1d;
  margin: 0;
}

.how-points-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.how-points-list li {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  font-size: 14px;
  line-height: 1.5;
  color: #0c4a6e;
}

.check-bullet {
  color: #0284c7;
  font-weight: 800;
  flex-shrink: 0;
}

.solution-card-footer {
  margin-top: 32px;
  display: flex;
  justify-content: flex-end;
}

.solution-cta-btn {
  display: inline-flex;
  align-items: center;
  padding: 12px 24px;
  border-radius: 10px;
  background: #0066cc;
  color: #ffffff;
  font-size: 14.5px;
  font-weight: 700;
  text-decoration: none;
  transition: background 0.2s ease;
}

.solution-cta-btn:hover {
  background: #0052a3;
}

/* Quick Overview Grid */
.solutions-overview-section {
  padding: clamp(50px, 7vw, 80px) 0;
  background: #fbfbfa;
  border-top: 1px solid #ebebea;
}

.solution-quick-card {
  background: #ffffff;
  border: 1px solid #ebebea;
  border-radius: 14px;
  padding: 24px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
}

.solution-quick-card:hover,
.solution-quick-card.is-active-card {
  border-color: #0066cc;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 102, 204, 0.08);
}

.quick-card-badge {
  font-size: 11px;
  font-weight: 700;
  color: #0066cc;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.quick-card-title {
  font-size: 18px;
  font-weight: 700;
  color: #050505;
  margin: 0 0 10px;
}

.quick-card-desc {
  font-size: 13.5px;
  line-height: 1.55;
  color: #5f5e5b;
  margin: 0 0 16px;
  flex: 1;
}

.quick-card-link {
  background: none;
  border: none;
  padding: 0;
  font-size: 13px;
  font-weight: 700;
  color: #0066cc;
  cursor: pointer;
  text-align: left;
}

.solutions-cta-section {
  background: #ffffff;
  border-top: 1px solid #ebebea;
  padding: clamp(60px, 8vh, 90px) 24px;
}
</style>
