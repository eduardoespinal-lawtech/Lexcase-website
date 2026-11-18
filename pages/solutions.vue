<script setup lang="ts">
const { locale } = useI18n()
const localePath = useLocalePath()
const isEn = computed(() => locale.value === 'en')

definePageMeta({ name: 'solutions' })

useHead(() => {
  const title = isEn.value
    ? 'Legal Solutions by Practice Area — Lexbell'
    : 'Soluciones Legales por Rama del Derecho — Lexbell'
  const desc = isEn.value
    ? 'Discover how Lexbell helps independent litigation, administrative, immigration, real estate, and corporate attorneys work 100% locally, without internet.'
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

interface SolutionItem {
  id: string
  label: string
  title: string
  paragraphs: string[]
  highlights: string[]
  ctaLabel: string
  ctaTo: string
  secondaryLabel?: string
  secondaryTo?: string
  image: string
  imageAlt: string
  pastelBg: string
}

const solutions = computed<SolutionItem[]>(() => {
  if (isEn.value) {
    return [
      {
        id: 'litigation',
        label: 'Litigation & Trials',
        title: 'Your entire case file in the courtroom, even without signal',
        paragraphs: [
          'Hearings pile up, procedural deadlines don’t forgive, and most courthouses have weak or no reception. When the judge asks for an exhibit or a date, you can’t wait for a page to load.',
          'Lexbell keeps every case on your computer: parties, judges, filings, evidence, and recordings.'
        ],
        highlights: [
          'Instant offline search across parties, docket numbers, and evidence',
          'Hearing calendar with advance alerts before court dates',
          'Business-day and clear-day procedural deadline tracking'
        ],
        ctaLabel: 'Explore case management',
        ctaTo: `${localePath('features')}#expedientes`,
        secondaryLabel: 'Deadline calculator',
        secondaryTo: localePath('calculadora-plazos'),
        image: '/screenshots/showcase-tribunal.webp',
        imageAlt: 'Courtroom and litigation case management in Lexbell',
        pastelBg: 'bg-[#eef2f6] dark:bg-[#1a2130]'
      },
      {
        id: 'administrative',
        label: 'Administrative & Tax',
        title: 'Strict control of filings, appeals, and government response times',
        paragraphs: [
          'Proceedings before ministries and tax authorities depend on exact notice dates, response windows, and appeal terms. One missed date can cost your client the case.',
          'Record every filing number, official notice, and responsible agency in a clear timeline while keeping financial records private on your own computer.'
        ],
        highlights: [
          'Exact notice-date tracking and appeal expiration alerts',
          'Agency and tax filing timeline organized per client',
          'Zero cloud exposure for sensitive tax and financial records'
        ],
        ctaLabel: 'Open deadline calculator',
        ctaTo: localePath('calculadora-plazos'),
        image: '/screenshots/showcase-calendar-month.webp',
        imageAlt: 'Hearing and administrative deadlines calendar in Lexbell',
        pastelBg: 'bg-[#f5efe6] dark:bg-[#24201b]'
      },
      {
        id: 'immigration',
        label: 'Immigration & Consular',
        title: 'Visas, residencies, and families organized in one place',
        paragraphs: [
          'Each applicant comes with different consular requirements, interview dates, apostilles, translations, and dependents. Following all of it in folders and spreadsheets ends in lost documents.',
          'Lexbell groups each family under one case, tracks the stage of every application, and warns you before passports, visas, or permits expire.'
        ],
        highlights: [
          'Family group linking for primary applicants and dependents',
          'Passport, visa, and residency expiration reminders',
          'Consular appointment tracking and document checklists'
        ],
        ctaLabel: 'View calendar & reminders',
        ctaTo: `${localePath('features')}#agenda`,
        image: '/screenshots/showcase-cases.webp',
        imageAlt: 'Immigration family file and client management in Lexbell',
        pastelBg: 'bg-[#edf3ee] dark:bg-[#19231b]'
      },
      {
        id: 'real-estate',
        label: 'Real Estate & Leases',
        title: 'Leases, sales, and property titles without spreadsheets',
        paragraphs: [
          'Managing multiple leases, monthly payments, security deposits, and purchase agreements by hand leads to forgotten renewals and accounting errors.',
          'Keep a monthly collection calendar, renewal notices, guarantors, and deposits for each property, from first signature to title delivery.'
        ],
        highlights: [
          'Monthly rent collection and security deposit ledger',
          'Automatic renewal and notice-period reminders',
          'Local vault for deeds, surveys, and title certificates'
        ],
        ctaLabel: 'View document vault',
        ctaTo: `${localePath('features')}#documentos`,
        image: '/screenshots/showcase-docs.webp',
        imageAlt: 'Document vault and contracts view in Lexbell',
        pastelBg: 'bg-[#edf5f4] dark:bg-[#1a2524]'
      },
      {
        id: 'corporate',
        label: 'Corporate & Business',
        title: 'Companies, partners, and minutes under control',
        paragraphs: [
          'Advising several companies means keeping minutes up to date, remembering registry renewals, and making sure you never represent a party tied to an existing client.',
          'Lexbell shows the relationships between partners, officers, and counterparties so you spot conflicts instantly.'
        ],
        highlights: [
          'Visual relationship map to detect conflicts of interest',
          'Registry renewal and corporate assembly reminders',
          'Organized bylaws, minutes, and powers of attorney'
        ],
        ctaLabel: 'View conflict & relationship map',
        ctaTo: `${localePath('features')}#conflictos`,
        image: '/screenshots/showcase-connections.webp',
        imageAlt: 'Corporate relationship and conflict map in Lexbell',
        pastelBg: 'bg-[#f3edf5] dark:bg-[#221a26]'
      }
    ]
  }

  return [
    {
      id: 'litigation',
      label: 'Litigación',
      title: 'Todo tu expediente en la sala de audiencias, aunque no haya señal',
      paragraphs: [
        'Las audiencias se acumulan, los plazos procesales no perdonan y en la mayoría de los juzgados la señal es débil o nula. Cuando el juez pide una prueba o una fecha, no puedes esperar a que cargue una página.',
        'Lexbell guarda cada caso en tu computadora: partes, jueces, escritos, pruebas y audios.'
      ],
      highlights: [
        'Búsqueda instantánea sin conexión por partes, tribunales y pruebas',
        'Agenda de audiencias con alertas previas en tu escritorio',
        'Cómputo de plazos procesales en días hábiles, francos o naturales'
      ],
      ctaLabel: 'Ver gestión de expedientes',
      ctaTo: `${localePath('features')}#expedientes`,
      secondaryLabel: 'Calculadora de plazos',
      secondaryTo: localePath('calculadora-plazos'),
      image: '/screenshots/showcase-tribunal.webp',
      imageAlt: 'Gestión procesal y audiencias en Lexbell',
      pastelBg: 'bg-[#eef2f6] dark:bg-[#1a2130]'
    },
    {
      id: 'administrative',
      label: 'Administrativo y Tributario',
      title: 'Control riguroso de recursos, trámites y plazos del Estado',
      paragraphs: [
        'Los procesos ante ministerios y autoridades tributarias dependen de fechas exactas de notificación, plazos de respuesta y términos para recurrir. Una fecha olvidada puede costarle el caso a tu cliente.',
        'Registra cada número de expediente, notificación oficial y entidad responsable en una línea de tiempo clara mientras la información financiera se queda en tu propia computadora.'
      ],
      highlights: [
        'Control exacto de notificaciones y términos para recurrir',
        'Historial ordenado por institución pública y número de trámite',
        'Cero exposición en la nube para datos fiscales y financieros'
      ],
      ctaLabel: 'Usar calculadora de plazos',
      ctaTo: localePath('calculadora-plazos'),
      image: '/screenshots/showcase-calendar-month.webp',
      imageAlt: 'Calendario de plazos administrativos en Lexbell',
      pastelBg: 'bg-[#f5efe6] dark:bg-[#24201b]'
    },
    {
      id: 'immigration',
      label: 'Migración',
      title: 'Visados, residencias y familias organizados en un solo lugar',
      paragraphs: [
        'Cada solicitante llega con requisitos consulares distintos, citas, apostillas, traducciones y dependientes. Seguir todo eso en carpetas y hojas de cálculo termina en documentos extraviados.',
        'Lexbell agrupa a cada familia en un mismo expediente, sigue la etapa de cada trámite y te avisa antes de que venzan pasaportes, visados o permisos.'
      ],
      highlights: [
        'Agrupación familiar entre solicitante principal y dependientes',
        'Alertas antes del vencimiento de pasaportes, visas y permisos',
        'Seguimiento de citas consulares, apostillas y traducciones'
      ],
      ctaLabel: 'Ver agenda y vencimientos',
      ctaTo: `${localePath('features')}#agenda`,
      image: '/screenshots/showcase-cases.webp',
      imageAlt: 'Gestión de casos de migración y grupos familiares',
      pastelBg: 'bg-[#edf3ee] dark:bg-[#19231b]'
    },
    {
      id: 'real-estate',
      label: 'Inmobiliario',
      title: 'Alquileres, compraventas y títulos sin hojas de cálculo',
      paragraphs: [
        'Llevar a mano varios contratos de alquiler, cobros mensuales, depósitos en garantía y promesas de venta provoca renovaciones olvidadas y errores en las cuentas.',
        'Ten un calendario de cobros, preavisos de renovación, fiadores y depósitos para cada inmueble, desde la primera firma hasta la entrega del título.'
      ],
      highlights: [
        'Control mensual de cobros, moras y depósitos en garantía',
        'Recordatorios de preavisos y renovaciones de contratos',
        'Bóveda local para títulos, planos y certificaciones'
      ],
      ctaLabel: 'Ver bóveda documental',
      ctaTo: `${localePath('features')}#documentos`,
      image: '/screenshots/showcase-docs.webp',
      imageAlt: 'Bóveda de documentos y contratos en Lexbell',
      pastelBg: 'bg-[#edf5f4] dark:bg-[#1a2524]'
    },
    {
      id: 'corporate',
      label: 'Corporativo',
      title: 'Empresas, socios y actas bajo control',
      paragraphs: [
        'Asesorar a varias sociedades exige mantener las actas al día, recordar la renovación del Registro Mercantil y asegurarte de no representar a una parte vinculada con un cliente actual.',
        'Lexbell muestra las relaciones entre socios, directivos y contrapartes para que detectes conflictos al instante.'
      ],
      highlights: [
        'Mapa visual de vínculos para detectar conflictos de interés',
        'Recordatorios de asambleas y renovaciones mercantiles',
        'Archivo ordenado de estatutos, actas y poderes'
      ],
      ctaLabel: 'Ver mapa de vínculos',
      ctaTo: `${localePath('features')}#conflictos`,
      image: '/screenshots/showcase-connections.webp',
      imageAlt: 'Mapa de relaciones corporativas y prevención de conflictos',
      pastelBg: 'bg-[#f3edf5] dark:bg-[#221a26]'
    }
  ]
})
</script>

<template>
  <div class="manus-page">
    <!-- Hero Section estilo Manus -->
    <section class="manus-hero-section">
      <div class="manus-container text-center">
        <span class="manus-eyebrow">{{ isEn ? 'PRACTICE AREAS & WORKFLOWS' : 'ÁREAS DE PRÁCTICA Y ESPECIALIDADES' }}</span>
        
        <h1 class="manus-hero-title">
          {{ isEn
            ? 'Built around the way you practice law'
            : 'Pensado para la forma en que ejerces el derecho'
          }}
        </h1>

        <p class="manus-hero-subtitle">
          {{ isEn
            ? 'Whatever your specialty, Lexbell organizes your cases directly on your computer, with no internet required.'
            : 'Sea cual sea tu especialidad, Lexbell organiza tus casos directamente en tu computadora, sin necesidad de internet.'
          }}
        </p>

        <!-- Barra de Anclas en Píldora estilo Manus -->
        <nav class="manus-anchors-bar" :aria-label="isEn ? 'Practice areas' : 'Áreas de práctica'">
          <a
            v-for="sol in solutions"
            :key="sol.id"
            :href="`#${sol.id}`"
            class="manus-anchor-pill"
          >
            {{ sol.label }}
          </a>
        </nav>
      </div>
    </section>

    <!-- Stack de Soluciones 50/50 Cards estilo Manus -->
    <section class="manus-section pt-0">
      <div class="manus-container">
        <div class="flex flex-col gap-10">
          <div
            v-for="(sol, idx) in solutions"
            :id="sol.id"
            :key="sol.id"
            class="manus-card grid grid-cols-1 md:grid-cols-2 items-center"
          >
            <!-- Columna Texto -->
            <div
              class="p-8 md:p-14 text-left"
              :class="{ 'md:order-2': idx % 2 === 1 }"
            >
              <span class="manus-card-eyebrow">{{ sol.label }}</span>
              <h2 class="manus-card-title mt-2">
                {{ sol.title }}
              </h2>
              
              <div class="mt-4 space-y-3">
                <p v-for="(para, pIdx) in sol.paragraphs" :key="pIdx" class="manus-card-desc">
                  {{ para }}
                </p>
              </div>

              <!-- Lista de Puntos Clave -->
              <ul class="manus-highlights-list mt-6">
                <li v-for="(item, hIdx) in sol.highlights" :key="hIdx">
                  <svg class="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>{{ item }}</span>
                </li>
              </ul>

              <!-- Botones de Acción -->
              <div class="flex flex-wrap items-center gap-3 mt-8">
                <NuxtLink :to="sol.ctaTo" class="manus-action-btn">
                  <span>{{ sol.ctaLabel }}</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                  </svg>
                </NuxtLink>

                <NuxtLink
                  v-if="sol.secondaryTo"
                  :to="sol.secondaryTo"
                  class="manus-secondary-btn"
                >
                  {{ sol.secondaryLabel }}
                </NuxtLink>
              </div>
            </div>

            <!-- Columna Visual Mockup Frame -->
            <div
              class="p-4 md:p-8"
              :class="{ 'md:order-1': idx % 2 === 1 }"
            >
              <div class="manus-mockup-frame" :class="sol.pastelBg">
                <img
                  :src="sol.image"
                  :alt="sol.imageAlt"
                  class="w-full h-auto block rounded-[10px] shadow-sm transition-opacity duration-300"
                  loading="lazy"
                  width="1000"
                  height="600"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Banner CTA Final estilo Manus Ambient Glow -->
    <section id="descargar" class="manus-section pt-0">
      <div class="manus-container">
        <div class="manus-final-cta-card">
          <div class="manus-ambient-glow" aria-hidden="true"></div>

          <span class="manus-final-badge">{{ isEn ? 'START FREE TODAY' : 'EMPIEZA GRATIS HOY' }}</span>

          <h2 class="manus-final-title">
            {{ isEn ? 'Organize your legal practice today' : 'Pon orden en tu despacho legal hoy mismo' }}
          </h2>

          <p class="manus-final-sub">
            {{ isEn
              ? 'Download Lexbell for Mac or Windows. Up to 50 active cases free forever, 100% local and private.'
              : 'Descarga Lexbell para Mac o Windows. Hasta 50 expedientes activos gratis para siempre, 100% local y privado.'
            }}
          </p>

          <div class="manus-final-downloads">
            <AppDownload center />
          </div>

          <p class="manus-final-note">
            {{ isEn ? 'Installs in under 1 minute · No credit card required' : 'Instalación en menos de 1 minuto · Sin tarjeta de crédito' }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* =================== SISTEMA DE DISEÑO MANUS - SOLUCIONES =================== */
.manus-page {
  background: var(--bg);
  color: var(--text);
  overflow-x: hidden;
}

.manus-container {
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 24px;
  padding-right: 24px;
}

.manus-section {
  padding-top: clamp(64px, 7vw, 96px);
  padding-bottom: clamp(64px, 7vw, 96px);
}

/* === TIPOGRAFÍA EXACTA ESTILO MANUS === */
.manus-eyebrow {
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 12px;
}

.manus-hero-section {
  padding-top: clamp(56px, 8vw, 88px);
  padding-bottom: clamp(36px, 5vw, 56px);
  background: var(--bg);
}

.manus-hero-title {
  font-family: Newsreader, Charter, "Bitstream Charter", "Sitka Text", Cambria, Georgia, serif;
  font-size: clamp(32px, 4.4vw, 48px);
  font-weight: 600;
  line-height: 1.15;
  letter-spacing: -0.025em;
  color: var(--text);
  max-width: 680px;
  margin: 0 auto 20px;
  text-wrap: balance;
}

.manus-hero-subtitle {
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: var(--text-muted);
  max-width: 680px;
  margin: 0 auto 28px;
  text-wrap: balance;
}

/* Anclas estilo Manus */
.manus-anchors-bar {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin-top: 10px;
}

.manus-anchor-pill {
  display: inline-flex;
  align-items: center;
  height: 36px;
  padding: 0 16px;
  border-radius: 9999px;
  font-size: 13.5px;
  font-weight: 500;
  color: var(--text-muted);
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  text-decoration: none;
  transition: all 0.15s ease;
}

.manus-anchor-pill:hover {
  color: var(--text);
  border-color: var(--border-dark);
  background: var(--card-bg);
  transform: translateY(-1px);
}

/* Tarjetas 50/50 estilo Manus */
.manus-card {
  background: var(--bg-section);
  border-radius: 16px;
  border: 1px solid var(--border);
  overflow: hidden;
  position: relative;
  scroll-margin-top: 72px;
}

.manus-card-eyebrow {
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--accent);
}

.manus-card-title {
  font-family: Newsreader, Charter, "Bitstream Charter", "Sitka Text", Cambria, Georgia, serif;
  font-size: clamp(24px, 3.2vw, 32px);
  font-weight: 600;
  line-height: 1.25;
  letter-spacing: -0.02em;
  color: var(--text);
  margin: 0;
  text-wrap: balance;
}

.manus-card-desc {
  font-size: 16px;
  line-height: 24px;
  color: var(--text-muted);
  margin: 0;
}

.manus-highlights-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.manus-highlights-list li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 14px;
  line-height: 1.5;
  color: var(--text);
  font-weight: 500;
}

.check-icon {
  flex-shrink: 0;
  color: var(--accent);
  margin-top: 2px;
}

.manus-mockup-frame {
  width: 100%;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Botones estilo Manus */
.manus-action-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 36px;
  padding: 0 16px;
  border-radius: 9999px;
  font-size: 13.5px;
  font-weight: 500;
  background: #141414;
  color: #ffffff;
  text-decoration: none;
  transition: opacity 0.15s ease, transform 0.1s ease;
}

.dark .manus-action-btn {
  background: #ffffff;
  color: #000000;
}

.manus-action-btn:hover {
  opacity: 0.9;
  transform: translateY(-0.5px);
}

.manus-secondary-btn {
  display: inline-flex;
  align-items: center;
  height: 36px;
  padding: 0 14px;
  border-radius: 9999px;
  font-size: 13.5px;
  font-weight: 500;
  color: var(--text);
  background: var(--card-bg);
  border: 1px solid var(--border);
  text-decoration: none;
  transition: border-color 0.15s ease, color 0.15s ease;
}

.manus-secondary-btn:hover {
  border-color: var(--border-dark);
}

/* === BANNER CTA FINAL MANUS AMBIENT GLOW === */
.manus-final-cta-card {
  position: relative;
  overflow: hidden;
  background: #11141c;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: clamp(48px, 6vw, 76px) clamp(24px, 5vw, 48px);
  text-align: center;
  box-shadow: 0 24px 60px -15px rgba(0, 0, 0, 0.45);
}

.manus-ambient-glow {
  position: absolute;
  bottom: -100px;
  right: -60px;
  width: 360px;
  height: 360px;
  border-radius: 9999px;
  background: radial-gradient(circle, rgba(245, 158, 11, 0.22) 0%, rgba(59, 130, 246, 0.14) 45%, transparent 70%);
  filter: blur(48px);
  pointer-events: none;
}

.manus-final-badge {
  display: inline-block;
  padding: 4px 14px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background: rgba(245, 158, 11, 0.14);
  color: #fbbf24;
  border: 1px solid rgba(245, 158, 11, 0.3);
  margin-bottom: 18px;
  position: relative;
  z-index: 1;
}

.manus-final-title {
  font-family: Newsreader, Charter, "Bitstream Charter", "Sitka Text", Cambria, Georgia, serif;
  font-size: clamp(28px, 4.2vw, 40px);
  font-weight: 600;
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin: 0 0 16px;
  text-wrap: balance;
  position: relative;
  z-index: 1;
}

.manus-final-sub {
  font-size: 16px;
  line-height: 24px;
  color: #94a3b8;
  max-width: 680px;
  margin: 0 auto 32px;
  text-wrap: balance;
  position: relative;
  z-index: 1;
}

.manus-final-downloads {
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
}

.manus-final-note {
  margin: 16px 0 0;
  font-size: 13px;
  color: #64748b;
  font-weight: 500;
  position: relative;
  z-index: 1;
}
</style>
