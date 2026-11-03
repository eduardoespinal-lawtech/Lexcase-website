<script setup lang="ts">
const { locale } = useI18n()
const localePath = useLocalePath()

definePageMeta({ name: 'solutions' })

useHead(() => {
  const isEn = locale.value === 'en'
  const title = isEn
    ? 'Legal Solutions by Practice Area — Lexbell'
    : 'Soluciones Legales por Rama del Derecho — Lexbell'
  const desc = isEn
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

const solutions = computed(() => {
  if (locale.value === 'en') {
    return [
      {
        id: 'litigation',
        label: 'Litigation',
        title: 'Your entire case file in the courtroom, even without signal',
        paragraphs: [
          'Hearings pile up, procedural deadlines don’t forgive, and most courthouses have weak or no reception. When the judge asks for an exhibit or a date, you can’t wait for a page to load.',
          'Lexbell keeps every case on your computer: parties, judges, filings, evidence, and recordings. Deadlines are calculated in business days and your hearing calendar warns you ahead of time, so you walk into court prepared.'
        ],
        image: '/images/solutions/litigation.webp',
        imageAlt: 'Attorney in a suit preparing for a hearing'
      },
      {
        id: 'administrative',
        label: 'Administrative & Tax',
        title: 'Strict control of filings, appeals, and government response times',
        paragraphs: [
          'Proceedings before ministries and tax authorities depend on exact notice dates, response windows, and appeal terms. One missed date can cost your client the case.',
          'Record every filing number, official notice, and responsible agency in a clear timeline. Lexbell alerts you before terms expire, and your clients’ financial information stays private on your own computer.'
        ],
        image: '/images/solutions/administrative.webp',
        imageAlt: 'Attorney meeting with a client to review an administrative filing'
      },
      {
        id: 'immigration',
        label: 'Immigration',
        title: 'Visas, residencies, and families organized in one place',
        paragraphs: [
          'Each applicant comes with different consular requirements, interview dates, apostilles, translations, and dependents. Following all of it in folders and spreadsheets ends in lost documents.',
          'Lexbell groups each family under one case, tracks the stage of every application, and warns you before passports, visas, or permits expire, so no deadline catches you or your client off guard.'
        ],
        image: '/images/solutions/immigration.webp',
        imageAlt: 'Traveler at an international airport'
      },
      {
        id: 'real-estate',
        label: 'Real Estate',
        title: 'Leases, sales, and property titles without spreadsheets',
        paragraphs: [
          'Managing multiple leases, monthly payments, security deposits, and purchase agreements by hand leads to forgotten renewals and accounting errors.',
          'Keep a monthly collection calendar, renewal notices, guarantors, and deposits for each property. Follow every sale from the first signature to title delivery, with surveys and certificates always at hand.'
        ],
        image: '/images/solutions/real-estate.webp',
        imageAlt: 'Modern residential property at dusk'
      },
      {
        id: 'corporate',
        label: 'Corporate',
        title: 'Companies, partners, and minutes under control',
        paragraphs: [
          'Advising several companies means keeping minutes up to date, remembering registry renewals, and making sure you never represent a party tied to an existing client.',
          'Lexbell shows the relationships between partners, officers, and counterparties so you spot conflicts instantly. Minutes, bylaws, and powers of attorney stay organized, with reminders before every renewal.'
        ],
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
        'Lexbell guarda cada caso en tu computadora: partes, jueces, escritos, pruebas y audios. Los plazos se calculan en días hábiles y tu agenda de audiencias te avisa con tiempo, para que llegues a sala preparado.'
      ],
      image: '/images/solutions/litigation.webp',
      imageAlt: 'Abogado de traje preparándose para una audiencia'
    },
    {
      id: 'administrative',
      label: 'Administrativo y Tributario',
      title: 'Control riguroso de recursos, trámites y plazos del Estado',
      paragraphs: [
        'Los procesos ante ministerios y autoridades tributarias dependen de fechas exactas de notificación, plazos de respuesta y términos para recurrir. Una fecha olvidada puede costarle el caso a tu cliente.',
        'Registra cada número de expediente, notificación oficial y entidad responsable en una línea de tiempo clara. Lexbell te avisa antes de que venzan los términos, y la información financiera de tus clientes se queda en tu propia computadora.'
      ],
      image: '/images/solutions/administrative.webp',
      imageAlt: 'Abogada reunida con una clienta revisando un trámite administrativo'
    },
    {
      id: 'immigration',
      label: 'Migración',
      title: 'Visados, residencias y familias organizados en un solo lugar',
      paragraphs: [
        'Cada solicitante llega con requisitos consulares distintos, citas, apostillas, traducciones y dependientes. Seguir todo eso en carpetas y hojas de cálculo termina en documentos extraviados.',
        'Lexbell agrupa a cada familia en un mismo expediente, sigue la etapa de cada trámite y te avisa antes de que venzan pasaportes, visados o permisos, para que ningún plazo te sorprenda ni a ti ni a tu cliente.'
      ],
      image: '/images/solutions/immigration.webp',
      imageAlt: 'Viajero en un aeropuerto internacional'
    },
    {
      id: 'real-estate',
      label: 'Inmobiliario',
      title: 'Alquileres, compraventas y títulos sin hojas de cálculo',
      paragraphs: [
        'Llevar a mano varios contratos de alquiler, cobros mensuales, depósitos en garantía y promesas de venta provoca renovaciones olvidadas y errores en las cuentas.',
        'Ten un calendario de cobros, preavisos de renovación, fiadores y depósitos para cada inmueble. Sigue cada compraventa desde la primera firma hasta la entrega del título, con planos y certificados siempre a mano.'
      ],
      image: '/images/solutions/real-estate.webp',
      imageAlt: 'Vivienda moderna al atardecer'
    },
    {
      id: 'corporate',
      label: 'Corporativo',
      title: 'Empresas, socios y actas bajo control',
      paragraphs: [
        'Asesorar a varias sociedades exige mantener las actas al día, recordar la renovación del Registro Mercantil y asegurarte de no representar a una parte vinculada con un cliente actual.',
        'Lexbell muestra las relaciones entre socios, directivos y contrapartes para que detectes conflictos al instante. Actas, estatutos y poderes quedan ordenados, con recordatorios antes de cada renovación.'
      ],
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
        <span class="eyebrow">{{ locale === 'en' ? 'SOLUTIONS' : 'SOLUCIONES' }}</span>
        <h1 class="solutions-hero-title">
          {{ locale === 'en'
            ? 'Built around the way you practice law'
            : 'Pensado para la forma en que ejerces el derecho'
          }}
        </h1>
        <p class="solutions-hero-subtitle">
          {{ locale === 'en'
            ? 'Whatever your specialty, Lexbell organizes your cases directly on your computer, with no internet required.'
            : 'Sea cual sea tu especialidad, Lexbell organiza tus casos directamente en tu computadora, sin necesidad de internet.'
          }}
        </p>

        <nav class="solutions-anchors" :aria-label="locale === 'en' ? 'Practice areas' : 'Áreas de práctica'">
          <a v-for="sol in solutions" :key="sol.id" :href="`#${sol.id}`" class="anchor-link">
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
            <h2 class="solution-title">{{ sol.title }}</h2>
            <p v-for="(para, pIdx) in sol.paragraphs" :key="pIdx" class="solution-para">
              {{ para }}
            </p>
            <NuxtLink :to="localePath('features')" class="solution-btn">
              {{ locale === 'en' ? 'Learn more' : 'Más información' }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.solutions-page {
  background: #faf9f7;
  color: #191919;
}

.solutions-wrap {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 24px;
}

.solutions-hero {
  padding: clamp(56px, 7vw, 88px) 0 clamp(32px, 4vw, 48px);
  text-align: center;
}

.solutions-hero-title {
  font-size: clamp(30px, 3.6vw, 42px);
  font-weight: 700;
  letter-spacing: -0.025em;
  line-height: 1.15;
  color: #050505;
  max-width: 720px;
  margin: 10px auto 16px;
}

.solutions-hero-subtitle {
  font-size: clamp(16px, 1.8vw, 18px);
  line-height: 1.6;
  color: #5f5e5b;
  max-width: 620px;
  margin: 0 auto;
}

.solutions-anchors {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px 28px;
  margin-top: 32px;
}

.anchor-link {
  font-size: 14px;
  font-weight: 500;
  color: #37352f;
  text-decoration: none;
  padding-bottom: 2px;
  border-bottom: 1px solid transparent;
  transition: color 0.15s ease, border-color 0.15s ease;
}

.anchor-link:hover {
  color: #0066cc;
  border-bottom-color: #0066cc;
}

.solution-row {
  padding: clamp(32px, 5vw, 56px) 0;
  scroll-margin-top: 64px;
}

.solution-row:last-child {
  padding-bottom: clamp(64px, 8vw, 104px);
}

.solution-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(28px, 5vw, 72px);
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
  border-radius: 24px;
  display: block;
}

.solution-text {
  max-width: 460px;
}

.solution-title {
  font-size: clamp(22px, 2.4vw, 27px);
  font-weight: 600;
  letter-spacing: -0.015em;
  line-height: 1.3;
  color: #050505;
  margin: 0 0 18px;
}

.solution-para {
  font-size: 15.5px;
  line-height: 1.7;
  color: #3f3e3a;
  margin: 0 0 16px;
}

.solution-btn {
  display: inline-flex;
  align-items: center;
  margin-top: 12px;
  padding: 12px 22px;
  border-radius: 8px;
  background: #0066cc;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s ease;
}

.solution-btn:hover {
  background: #0052a3;
}
</style>
