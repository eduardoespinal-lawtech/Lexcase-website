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
        image: '/images/solutions/litigation.webp',
        imageAlt: 'Attorney in a suit preparing for a hearing'
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
        image: '/images/solutions/administrative.webp',
        imageAlt: 'Attorney meeting with a client to review an administrative filing'
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
        image: '/images/solutions/immigration.webp',
        imageAlt: 'Traveler at an international airport'
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
        image: '/images/solutions/real-estate.webp',
        imageAlt: 'Modern residential property at dusk'
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
        image: '/images/solutions/corporate.webp',
        imageAlt: 'Corporate attorney working on her laptop'
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
      image: '/images/solutions/litigation.webp',
      imageAlt: 'Abogado de traje preparándose para una audiencia'
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
      image: '/images/solutions/administrative.webp',
      imageAlt: 'Abogada reunida con una clienta revisando un trámite administrativo'
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
      image: '/images/solutions/immigration.webp',
      imageAlt: 'Viajero en un aeropuerto internacional'
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
      image: '/images/solutions/real-estate.webp',
      imageAlt: 'Vivienda moderna al atardecer'
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
      image: '/images/solutions/corporate.webp',
      imageAlt: 'Abogada corporativa trabajando en su computadora'
    }
  ]
})
</script>

<template>
  <div class="solutions-page">
    <section class="solutions-hero">
      <div class="solutions-wrap">
        <span class="eyebrow">{{ isEn ? 'SOLUTIONS' : 'SOLUCIONES' }}</span>
        <h1 class="solutions-hero-title">
          {{ isEn
            ? 'Built around the way you practice law'
            : 'Pensado para la forma en que ejerces el derecho'
          }}
        </h1>
        <p class="solutions-hero-subtitle">
          {{ isEn
            ? 'Whatever your specialty, Lexbell organizes your cases directly on your computer, with no internet required.'
            : 'Sea cual sea tu especialidad, Lexbell organiza tus casos directamente en tu computadora, sin necesidad de internet.'
          }}
        </p>

        <nav class="solutions-anchors" :aria-label="isEn ? 'Practice areas' : 'Áreas de práctica'">
          <a v-for="sol in solutions" :key="sol.id" :href="`#${sol.id}`" class="anchor-pill">
            {{ sol.label }}
          </a>
        </nav>
      </div>
    </section>

    <section
      v-for="(sol, idx) in solutions"
      :id="sol.id"
      :key="sol.id"
      class="solution-row"
      :class="{ 'is-alt': idx % 2 === 0 }"
    >
      <div class="solutions-wrap">
        <div class="solution-grid" :class="{ 'is-reversed': idx % 2 === 1 }">
          <img
            :src="sol.image"
            :alt="sol.imageAlt"
            class="solution-img"
            loading="lazy"
            width="1000"
            height="900"
          />

          <div class="solution-text">
            <span class="solution-eyebrow">{{ sol.label }}</span>
            <h2 class="solution-title">{{ sol.title }}</h2>
            <p v-for="(para, pIdx) in sol.paragraphs" :key="pIdx" class="solution-para">
              {{ para }}
            </p>

            <ul class="solution-highlights">
              <li v-for="(item, hIdx) in sol.highlights" :key="hIdx">
                <svg class="check-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>{{ item }}</span>
              </li>
            </ul>

            <div class="solution-actions">
              <NuxtLink :to="sol.ctaTo" class="solution-btn">
                <span>{{ sol.ctaLabel }}</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </NuxtLink>
              <NuxtLink v-if="sol.secondaryTo" :to="sol.secondaryTo" class="solution-secondary-btn">
                {{ sol.secondaryLabel }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="descargar" class="solutions-cta-section">
      <div class="solutions-wrap">
        <div class="cta-banner">
          <span class="eyebrow">{{ isEn ? 'START FREE TODAY' : 'EMPIEZA GRATIS HOY' }}</span>
          <h2 class="cta-title">
            {{ isEn ? 'Organize your legal practice today' : 'Pon orden en tu oficina legal hoy mismo' }}
          </h2>
          <p class="cta-subtitle">
            {{ isEn
              ? 'Download Lexbell for Mac or Windows. Up to 50 active cases free, 100% local and private.'
              : 'Descarga Lexbell para Mac o Windows. Hasta 50 expedientes activos gratis, 100% local y privado.'
            }}
          </p>
          <div class="mt-6">
            <AppDownload center />
          </div>
          <p class="cta-note">
            {{ isEn ? 'Installs in under 1 minute · No credit card required' : 'Instalación en menos de 1 minuto · Sin tarjeta de crédito' }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.solutions-page {
  background: var(--bg);
  color: var(--text);
}

.solutions-wrap {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 24px;
}

.solutions-hero {
  padding: clamp(56px, 7vw, 88px) 0 clamp(40px, 5vw, 56px);
  text-align: center;
  background: var(--bg);
}

.solutions-hero-title {
  font-size: clamp(32px, 4vw, 46px);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.12;
  color: var(--text);
  max-width: 740px;
  margin: 10px auto 16px;
}

.solutions-hero-subtitle {
  font-size: clamp(16px, 1.8vw, 18px);
  line-height: 1.6;
  color: var(--text-muted);
  max-width: 620px;
  margin: 0 auto;
}

.solutions-anchors {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 32px;
}

.anchor-pill {
  display: inline-flex;
  align-items: center;
  padding: 8px 16px;
  font-size: 13.5px;
  font-weight: 500;
  color: var(--text-muted);
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: 999px;
  text-decoration: none;
  transition: all 0.15s ease;
}

.anchor-pill:hover {
  color: var(--accent);
  background: var(--accent-soft);
  border-color: var(--accent-border);
}

.solution-row {
  padding: clamp(44px, 6vw, 76px) 0;
  scroll-margin-top: 64px;
  background: var(--bg);
}

.solution-row.is-alt {
  background: var(--bg-section);
}

.solution-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(28px, 5vw, 64px);
  align-items: center;
}

@media (min-width: 900px) {
  .solution-grid {
    grid-template-columns: 1fr 1fr;
  }

  .solution-grid.is-reversed .solution-img {
    order: 2;
  }
}

.solution-img {
  width: 100%;
  aspect-ratio: 10 / 9;
  object-fit: cover;
  border-radius: 20px;
  display: block;
  box-shadow: var(--shadow-card);
}

.solution-text {
  max-width: 490px;
}

.solution-eyebrow {
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 10px;
}

.solution-title {
  font-size: clamp(24px, 2.8vw, 32px);
  font-weight: 700;
  letter-spacing: -0.025em;
  line-height: 1.18;
  color: var(--text);
  margin: 0 0 16px;
}

.solution-para {
  font-size: 15.5px;
  line-height: 1.65;
  color: var(--text-muted);
  margin: 0 0 12px;
}

.solution-highlights {
  list-style: none;
  padding: 0;
  margin: 18px 0 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.solution-highlights li {
  display: flex;
  align-items: flex-start;
  gap: 9px;
  font-size: 14px;
  line-height: 1.5;
  color: var(--text);
  font-weight: 500;
}

.check-icon {
  flex-shrink: 0;
  color: var(--accent);
  margin-top: 3px;
}

.solution-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  margin-top: 24px;
}

.solution-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 11px 20px;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  background: var(--accent);
  border-radius: 10px;
  text-decoration: none;
  transition: background 0.15s ease, transform 0.15s ease;
}

.solution-btn:hover {
  background: var(--accent-hover);
  transform: translateY(-1px);
}

.solution-secondary-btn {
  display: inline-flex;
  align-items: center;
  padding: 11px 16px;
  font-size: 14px;
  font-weight: 600;
  color: var(--text);
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 10px;
  text-decoration: none;
  transition: border-color 0.15s ease, color 0.15s ease;
}

.solution-secondary-btn:hover {
  border-color: var(--border-dark);
}

.solutions-cta-section {
  padding: clamp(56px, 7vw, 88px) 0;
  background: var(--bg);
}

.cta-banner {
  max-width: 780px;
  margin: 0 auto;
  padding: clamp(36px, 5vw, 56px) clamp(24px, 4vw, 48px);
  text-align: center;
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 24px;
}

.cta-title {
  font-size: clamp(26px, 3vw, 34px);
  font-weight: 700;
  letter-spacing: -0.025em;
  line-height: 1.15;
  color: var(--text);
  margin: 10px auto 12px;
}

.cta-subtitle {
  font-size: 16px;
  line-height: 1.6;
  color: var(--text-muted);
  max-width: 520px;
  margin: 0 auto;
}

.cta-note {
  margin-top: 16px;
  font-size: 13px;
  color: var(--text-light);
}
</style>
