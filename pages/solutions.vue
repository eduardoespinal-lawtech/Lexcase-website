<script setup lang="ts">
const { locale } = useI18n()

definePageMeta({ name: 'solutions' })

useHead(() => {
  const isEn = locale.value === 'en'
  const title = isEn
    ? 'Legal Solutions by Practice Area — Lexbell'
    : 'Soluciones Legales por Rama del Derecho — Lexbell'
  const desc = isEn
    ? 'Discover how Lexbell empowers independent litigation, administrative law, immigration, real estate, and corporate attorneys with 100% local case management.'
    : 'Descubre cómo Lexbell ayuda a abogados independientes en litigación, derecho administrativo, migración, inmobiliario y corporativo trabajando 100% local y sin internet.'

  return {
    title,
    meta: [
      { name: 'description', content: desc },
      { property: 'og:title', content: title },
      { property: 'og:description', content: desc }
    ]
  }
})

const solutions = computed(() => {
  if (locale.value === 'en') {
    return [
      {
        id: 'litigation',
        num: '01',
        tabLabel: 'Litigation & Court',
        eyebrow: 'LITIGATION & TRIAL ADVOCACY',
        title: 'Built for trial attorneys: hearings, deadlines, and courtroom focus.',
        audience: 'Independent Trial Lawyers · Litigation Boutiques · Defense Advocates',
        problem: 'Courtrooms often have zero cellular or Wi-Fi reception. Relying on cloud platforms when the judge asks for an exhibit or a procedural date puts your argument at risk.',
        howHelps: [
          'Instant offline access to the entire case file right inside the courtroom.',
          'Automated statutory deadline calculator based on business days and procedural rules.',
          'Structured party registry linking plaintiffs, defendants, judges, and court clerks.',
          'Private local vault for motions, exhibits, audio recordings, and judgments on your computer.'
        ],
        badge: 'Civil · Criminal · Labor',
        image: '/images/solutions/litigation.webp',
        imageAlt: 'Lady Justice bronze sculpture representing courtroom litigation',
        uiCard: {
          status: 'Courtroom Offline Mode · Active',
          title: 'Civil Appeal #2026-084',
          meta: '4 business days remaining · 14 local exhibits ready'
        }
      },
      {
        id: 'administrative',
        num: '02',
        tabLabel: 'Administrative & Tax',
        eyebrow: 'GOVERNMENT REGULATORY & TAX LAW',
        title: 'Strict control over filings, administrative silence, and tax audits.',
        audience: 'Tax Attorneys · Public Law Specialists · Regulatory Consultants',
        problem: 'Handling sensitive tax audits and government filings requires exact tracking of filing dates, statutory response windows, and absolute discretion with client financial data.',
        howHelps: [
          'Complete chronological log of filing numbers, official notice dates, and assigned agencies.',
          'Early warning alerts before administrative silence expires or appeal terms close.',
          'Centralized organization of agency resolutions, tax certifications, and filing receipts.',
          'Absolute confidentiality: sensitive financial and tax documents never touch external servers.'
        ],
        badge: 'Tax · Regulatory · Public Law',
        image: '/images/solutions/administrative.webp',
        imageAlt: 'Attorney reviewing and signing official administrative and tax filings',
        uiCard: {
          status: 'Statutory Term · Early Alert',
          title: 'Reconsideration Filing — Tax Authority',
          meta: 'Administrative silence window: 12 business days left'
        }
      },
      {
        id: 'immigration',
        num: '03',
        tabLabel: 'Immigration & Consular',
        eyebrow: 'IMMIGRATION & CROSS-BORDER MOBILITY',
        title: 'Flawless consular tracking for visas, residencies, and families.',
        audience: 'Immigration Attorneys · Consular Specialists · Mobility Advisors',
        problem: 'Managing dozens of applicants means tracking different embassy checklists, biometric appointments, passport expiration dates, and linked family dependents without losing a single document.',
        howHelps: [
          'Dedicated consular tracking sheet for application status, interviews, and visa issuance.',
          'Automated expiration reminders for passports, work permits, and temporary residencies.',
          'Unified family group linking primary applicants with spouses and dependents.',
          'Document control for apostilles, certified translations, and sponsor affidavits.'
        ],
        badge: 'Visas · Residencies · Consular',
        image: '/images/solutions/immigration.webp',
        imageAlt: 'International airport terminal representing global mobility and immigration law',
        uiCard: {
          status: 'Consular Docket · Family Unit (4)',
          title: 'Residency Renewal & Work Permit',
          meta: 'Alert: Primary passport expires in 45 days'
        }
      },
      {
        id: 'real-estate',
        num: '04',
        tabLabel: 'Real Estate & Leases',
        eyebrow: 'REAL ESTATE, LEASING & CLOSINGS',
        title: 'Effortless management of rental portfolios, closings, and property titles.',
        audience: 'Real Estate Attorneys · Notaries · Legal Property Managers',
        problem: 'Overseeing multiple active leases, monthly rent collection, security deposits, purchase installments, and title transfers on spreadsheets leads to missed renewals and accounting errors.',
        howHelps: [
          'Dedicated leasing module with monthly collection calendar and annual renewal notices.',
          'Clear tracking of security deposits, guarantors, and property handoff inventories.',
          'Purchase agreement timeline monitoring down payments, closing balances, and deed delivery.',
          'Organized local archive for survey plans, title certificates, and property tax clearances.'
        ],
        badge: 'Leases · Closings · Title Deeds',
        image: '/images/solutions/real-estate.webp',
        imageAlt: 'Modern architectural glass buildings representing commercial and residential real estate',
        uiCard: {
          status: 'Active Portfolio · 28 Properties',
          title: 'Commercial Lease & Title Escrow',
          meta: 'Annual renewal notice scheduled · Deposit verified'
        }
      },
      {
        id: 'corporate',
        num: '05',
        tabLabel: 'Corporate & Entities',
        eyebrow: 'CORPORATE GOVERNANCE & COMMERCIAL LAW',
        title: 'Master shareholder minutes, mercantile registries, and conflict checks.',
        audience: 'Corporate Counsel · Business Attorneys · Commercial Advisors',
        problem: 'Keeping corporate books up to date, remembering mercantile registry renewals, and ensuring you never represent an adverse party tied to an existing corporate client requires instant visibility.',
        howHelps: [
          'Interactive relationship map that flags shared shareholders, directors, and counterparties.',
          'Structured corporate archive for board minutes, bylaws amendments, and powers of attorney.',
          'Proactive reminders for annual mercantile registry renewals and corporate compliance.',
          'Instant overview of shareholding structure and active corporate officers.'
        ],
        badge: 'Shareholders · Minutes · Registry',
        image: '/images/solutions/corporate.webp',
        imageAlt: 'Executive corporate boardroom representing corporate governance and business law',
        uiCard: {
          status: 'Conflict Check · Cleared',
          title: 'Annual General Assembly & Registry',
          meta: '0 adverse party links detected · Mercantile Registry current'
        }
      }
    ]
  }

  return [
    {
      id: 'litigation',
      num: '01',
      tabLabel: 'Litigación y Juicios',
      eyebrow: 'LITIGACIÓN PENAL, CIVIL Y LABORAL',
      title: 'Diseñado para procesalistas: audiencias, plazos y sala de juicio.',
      audience: 'Abogados Litigantes · Penalistas · Civilistas y Laboralistas',
      problem: 'En la mayoría de los juzgados la señal celular es nula o inestable. Depender de un sistema en internet cuando el juez pide verificar una pieza probatoria o una fecha procesal compromete tu defensa.',
      howHelps: [
        'Acceso instantáneo y sin conexión al expediente completo en plena sala de audiencias.',
        'Cómputo automático de plazos procesales descontando fines de semana y días feriados.',
        'Ficha ordenada de partes procesales, contrapartes, jueces, secretarias y tribunales.',
        'Archivo local en tu computadora para escritos, sentencias, audios y pruebas documentales.'
      ],
      badge: 'Penal · Civil · Laboral',
      image: '/images/solutions/litigation.webp',
      imageAlt: 'Escultura de bronce de la Dama de la Justicia representando litigación y tribunales',
      uiCard: {
        status: 'Modo Sala de Audiencias · Sin Internet',
        title: 'Recurso de Apelación #2026-084',
        meta: 'Vence en 4 días hábiles · 14 pruebas listas en disco'
      }
    },
    {
      id: 'administrative',
      num: '02',
      tabLabel: 'Administrativo y Tributario',
      eyebrow: 'DERECHO ADMINISTRATIVO Y TRIBUTARIO',
      title: 'Control riguroso de recursos, silencio administrativo y fiscalizaciones.',
      audience: 'Especialistas en Derecho Administrativo · Asesores Fiscales · Consultores',
      problem: 'Los procesos ante ministerios y autoridades tributarias exigen precisión absoluta en las fechas de notificación, cómputo de silencio administrativo y máxima reserva con la información financiera del cliente.',
      howHelps: [
        'Bitácora cronológica de acuses de recibo, números de radicación y funcionarios a cargo.',
        'Alertas preventivas antes de que venzan los plazos de reconsideración o respuesta estatal.',
        'Organización directa de resoluciones, certificaciones fiscales y notificaciones oficiales.',
        'Reserva total: los estados financieros y descargos fiscales nunca salen de tu equipo.'
      ],
      badge: 'Tributario · Ministerios · Contencioso',
      image: '/images/solutions/administrative.webp',
      imageAlt: 'Abogado revisando y firmando expedientes administrativos y tributarios',
      uiCard: {
        status: 'Plazo Administrativo · Alerta Activa',
        title: 'Recurso de Reconsideración Tributaria',
        meta: 'Término de respuesta: 12 días hábiles restantes'
      }
    },
    {
      id: 'immigration',
      num: '03',
      tabLabel: 'Migración y Consular',
      eyebrow: 'DERECHO MIGRATORIO Y EXTRANJERÍA',
      title: 'Seguimiento consular impecable de visados, residencias y familias.',
      audience: 'Abogados de Extranjería · Gestores Migratorios · Asesores Consulares',
      problem: 'Coordinar decenas de solicitantes implica controlar citas de biometría, caducidad de pasaportes, apostillas y carpetas de grupos familiares completos sin extraviar un solo requisito.',
      howHelps: [
        'Ficha consular dedicada con etapa actual del trámite, número de caso y fecha de entrevista.',
        'Avisos automáticos antes del vencimiento de pasaportes, visados o permisos de residencia.',
        'Agrupación de núcleos familiares vinculando al titular con su cónyuge y dependientes.',
        'Control claro de documentos apostillados, traducciones juradas y solvencia económica.'
      ],
      badge: 'Visas · Residencias · Pasaportes',
      image: '/images/solutions/immigration.webp',
      imageAlt: 'Terminal internacional representando movilidad global y derecho migratorio',
      uiCard: {
        status: 'Control Consular · Núcleo Familiar (4)',
        title: 'Renovación de Residencia y Permiso',
        meta: 'Aviso: Pasaporte titular vence en 45 días'
      }
    },
    {
      id: 'real-estate',
      num: '04',
      tabLabel: 'Inmobiliario y Alquileres',
      eyebrow: 'ARRENDAMIENTOS, COMPRAVENTAS Y BIENES RAÍCES',
      title: 'Gestión clara de carteras de alquiler, contratos y títulos de propiedad.',
      audience: 'Abogados Inmobiliarios · Notarios · Administradores de Propiedades',
      problem: 'Llevar múltiples contratos de inquilinato, cobros mensuales, depósitos en garantía, promesas de venta y deslindes en hojas sueltas provoca olvidos en renovaciones y desorden contable.',
      howHelps: [
        'Módulo de alquileres con calendario de mensualidades, preavisos y ajustes anuales.',
        'Control detallado de depósitos en garantía, fiadores solidarios y estado del inmueble.',
        'Seguimiento de compraventas desde la firma de promesa e inicial hasta la entrega del título.',
        'Archivo ordenado para planos de mensura, certificados de título e impuestos inmobiliarios.'
      ],
      badge: 'Alquileres · Compraventa · Títulos',
      image: '/images/solutions/real-estate.webp',
      imageAlt: 'Arquitectura corporativa y residencial moderna representando derecho inmobiliario',
      uiCard: {
        status: 'Cartera Inmobiliaria · 28 Inmuebles',
        title: 'Arrendamiento Comercial y Depósito',
        meta: 'Preaviso de renovación programado · Garantía al día'
      }
    },
    {
      id: 'corporate',
      num: '05',
      tabLabel: 'Corporativo y Empresas',
      eyebrow: 'DERECHO SOCIETARIO Y MERCANTIL',
      title: 'Dominio de asambleas, registros mercantiles y vínculos entre socios.',
      audience: 'Abogados Corporativos · Asesores de Empresas · Mercantilistas',
      problem: 'Mantener al día las actas anuales de múltiples sociedades, vigilar la renovación del Registro Mercantil y evitar conflictos de interés entre socios relacionados requiere visibilidad inmediata.',
      howHelps: [
        'Mapa visual de relaciones que detecta al instante socios comunes, directivos y contrapartes.',
        'Archivo histórico de actas de asamblea, nóminas de presencia y poderes vigentes.',
        'Recordatorios oportunos para renovación de Registro Mercantil y obligaciones societarias.',
        'Consulta rápida de composición accionaria y reformas estatutarias de cada empresa.'
      ],
      badge: 'Socios · Asambleas · Registro Mercantil',
      image: '/images/solutions/corporate.webp',
      imageAlt: 'Sala de juntas ejecutiva representando gobierno corporativo y derecho societario',
      uiCard: {
        status: 'Verificación de Vínculos · Sin Conflicto',
        title: 'Asamblea General Ordinaria Anual',
        meta: '0 contrapartes cruzadas · Registro Mercantil vigente'
      }
    }
  ]
})
</script>

<template>
  <div class="solutions-page">
    <!-- Hero Editorial Sobrio -->
    <section class="solutions-hero">
      <div class="solutions-wrap">
        <div class="hero-header-box">
          <span class="eyebrow">{{ locale === 'en' ? 'SOLUTIONS BY PRACTICE AREA' : 'SOLUCIONES POR ESPECIALIDAD' }}</span>
          <h1 class="solutions-hero-title">
            {{ locale === 'en'
              ? 'Adapted to the rhythm of your legal practice.'
              : 'Adaptado al ritmo de tu especialidad jurídica.'
            }}
          </h1>
          <p class="solutions-hero-subtitle">
            {{ locale === 'en'
              ? 'Whether you argue in courtrooms without internet, manage consular petitions, or oversee corporate governance, Lexbell organizes your entire practice directly on your computer.'
              : 'Ya sea que litigues en tribunales sin conexión, gestiones trámites consulares o administres sociedades y alquileres, Lexbell estructura tu trabajo diario directamente en tu computadora.'
            }}
          </p>
        </div>

        <!-- Barra de Navegación Rápida por Anclas -->
        <nav class="solutions-anchor-bar" aria-label="Practice areas">
          <a
            v-for="sol in solutions"
            :key="sol.id"
            :href="`#${sol.id}`"
            class="anchor-pill"
          >
            <span class="anchor-num">{{ sol.num }}</span>
            <span>{{ sol.tabLabel }}</span>
          </a>
        </nav>
      </div>
    </section>

    <!-- Secciones Editoriales Alternadas (Estilo Apple / Stripe / Notion) -->
    <div class="solutions-editorial-list">
      <section
        v-for="(sol, idx) in solutions"
        :id="sol.id"
        :key="sol.id"
        class="solution-showcase-section"
        :class="{ 'is-alt-bg': idx % 2 === 1 }"
      >
        <div class="solutions-wrap">
          <div class="showcase-grid" :class="{ 'is-reversed': idx % 2 === 1 }">
            <!-- Columna de Contenido Editorial -->
            <div class="showcase-content">
              <div class="showcase-meta-row">
                <span class="showcase-num">{{ sol.num }}</span>
                <span class="showcase-eyebrow">{{ sol.eyebrow }}</span>
              </div>

              <h2 class="showcase-title">{{ sol.title }}</h2>

              <div class="showcase-audience">
                <span class="audience-tag-label">{{ locale === 'en' ? 'Ideal for:' : 'Ideal para:' }}</span>
                <span class="audience-tag-text">{{ sol.audience }}</span>
              </div>

              <p class="showcase-problem">{{ sol.problem }}</p>

              <ul class="showcase-points">
                <li v-for="(pt, pIdx) in sol.howHelps" :key="pIdx">
                  <span class="point-check" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span>{{ pt }}</span>
                </li>
              </ul>
            </div>

            <!-- Columna Visual con Fotografía Contextual + Tarjeta Flotante -->
            <div class="showcase-visual">
              <div class="visual-frame">
                <img
                  :src="sol.image"
                  :alt="sol.imageAlt"
                  class="visual-img"
                  loading="lazy"
                  width="1000"
                  height="667"
                />
                <div class="visual-badge-top">{{ sol.badge }}</div>

                <!-- Tarjeta UI Contextual Flotante -->
                <div class="visual-ui-card">
                  <div class="ui-card-status">
                    <span class="status-dot"></span>
                    <span>{{ sol.uiCard.status }}</span>
                  </div>
                  <div class="ui-card-title">{{ sol.uiCard.title }}</div>
                  <div class="ui-card-meta">{{ sol.uiCard.meta }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.solutions-page {
  background: #ffffff;
  color: #191919;
}

.solutions-wrap {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Hero Section */
.solutions-hero {
  padding: clamp(56px, 7vw, 84px) 0 36px;
  background: #fbfbfa;
  border-bottom: 1px solid #ebebea;
}

.hero-header-box {
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
}

.solutions-hero-title {
  font-size: clamp(30px, 3.6vw, 42px);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.15;
  color: #050505;
  margin: 10px 0 16px;
}

.solutions-hero-subtitle {
  font-size: clamp(16px, 1.8vw, 18px);
  line-height: 1.6;
  color: #5f5e5b;
  margin: 0;
}

/* Quick Anchor Bar */
.solutions-anchor-bar {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin-top: 36px;
}

.anchor-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: #ffffff;
  border: 1px solid #e4e4e2;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 600;
  color: #37352f;
  text-decoration: none;
  transition: all 0.18s ease;
}

.anchor-pill:hover {
  border-color: #0066cc;
  color: #0066cc;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 102, 204, 0.08);
}

.anchor-num {
  font-size: 11px;
  font-weight: 700;
  color: #0066cc;
  background: #edf5ff;
  padding: 2px 6px;
  border-radius: 999px;
}

/* Editorial Showcase Sections */
.solution-showcase-section {
  padding: clamp(64px, 8vw, 104px) 0;
  border-bottom: 1px solid #f0f0ef;
  scroll-margin-top: 64px;
}

.solution-showcase-section.is-alt-bg {
  background: #fbfbfa;
}

.showcase-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(36px, 5vw, 68px);
  align-items: center;
}

@media (min-width: 900px) {
  .showcase-grid {
    grid-template-columns: 1.05fr 0.95fr;
  }

  .showcase-grid.is-reversed .showcase-content {
    order: 2;
  }

  .showcase-grid.is-reversed .showcase-visual {
    order: 1;
  }
}

/* Content Column */
.showcase-meta-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}

.showcase-num {
  font-size: 12px;
  font-weight: 800;
  color: #0066cc;
  letter-spacing: 0.04em;
}

.showcase-eyebrow {
  font-size: 11.5px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #6b6b68;
}

.showcase-title {
  font-size: clamp(24px, 3vw, 33px);
  font-weight: 800;
  letter-spacing: -0.025em;
  line-height: 1.2;
  color: #050505;
  margin: 0 0 18px;
}

.showcase-audience {
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: #f4f4f2;
  border: 1px solid #e6e6e4;
  border-radius: 8px;
  margin-bottom: 20px;
  font-size: 12.5px;
}

.audience-tag-label {
  font-weight: 700;
  color: #191919;
}

.audience-tag-text {
  color: #5f5e5b;
  font-weight: 500;
}

.showcase-problem {
  font-size: 15.5px;
  line-height: 1.65;
  color: #4a4946;
  margin: 0 0 24px;
}

.showcase-points {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
  border-top: 1px solid #ebebea;
  padding-top: 22px;
}

.showcase-points li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 14.5px;
  line-height: 1.55;
  color: #191919;
  font-weight: 500;
}

.point-check {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #eaf3ff;
  color: #0066cc;
  flex-shrink: 0;
  margin-top: 1px;
}

/* Visual Column */
.visual-frame {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  background: #111111;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 20px 44px rgba(0, 0, 0, 0.08);
  aspect-ratio: 4 / 3;
}

.visual-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}

.visual-frame:hover .visual-img {
  transform: scale(1.02);
}

.visual-badge-top {
  position: absolute;
  top: 16px;
  left: 16px;
  background: rgba(15, 23, 42, 0.78);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: #ffffff;
  font-size: 11.5px;
  font-weight: 600;
  letter-spacing: 0.03em;
  padding: 6px 12px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.16);
}

.visual-ui-card {
  position: absolute;
  left: 16px;
  right: 16px;
  bottom: 16px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 14px;
  padding: 14px 18px;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
}

.ui-card-status {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #0066cc;
  margin-bottom: 4px;
}

.status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #10b981;
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.18);
}

.ui-card-title {
  font-size: 14.5px;
  font-weight: 700;
  color: #050505;
  margin-bottom: 2px;
}

.ui-card-meta {
  font-size: 12.5px;
  color: #5f5e5b;
  font-weight: 500;
}
</style>
