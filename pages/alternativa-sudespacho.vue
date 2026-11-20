<script setup lang="ts">
const { locale } = useI18n()
const isEn = computed(() => locale.value === 'en')

definePageMeta({ name: 'alternativa-sudespacho' })

const metaTitle = computed(() =>
  isEn.value
    ? 'Lexbell vs Sudespacho: Private Offline Alternative for Law Firms (Mac & Windows)'
    : 'Alternativa a Sudespacho Privada, Offline y Sin Cuotas Abusivas — Lexbell'
)

const metaDesc = computed(() =>
  isEn.value
    ? 'Looking for a Sudespacho alternative without cloud storage or costly per-user subscriptions? Discover Lexbell: 100% local, free up to 50 cases on Mac and Windows.'
    : '¿Buscas una alternativa a Sudespacho sin nube ni costosas cuotas mensuales por usuario? Descubre Lexbell: 100% local, gratis hasta 50 casos para Mac y Windows.'
)

const faqs = computed(() => [
  {
    q: isEn.value ? 'Can I migrate my cases and contacts from Sudespacho to Lexbell?' : '¿Puedo migrar mis expedientes y contactos desde Sudespacho a Lexbell?',
    a: isEn.value
      ? 'Yes. You can export your data in CSV or Excel from Sudespacho and import your contacts and matter files directly into Lexbell on your Mac or Windows computer.'
      : 'Sí. Puedes exportar tu listado de contactos y casos en CSV o Excel desde Sudespacho e importarlos en Lexbell directamente en tu ordenador Mac o Windows.'
  },
  {
    q: isEn.value ? 'Does Lexbell require an internet connection to manage cases?' : '¿Requiere Lexbell conexión a internet para gestionar expedientes?',
    a: isEn.value
      ? 'No. Unlike Sudespacho, Lexbell is 100% Local-First. You can prepare hearings, review evidence, and compute deadlines in courtrooms or during travel with zero signal.'
      : 'No. A diferencia de Sudespacho, Lexbell opera de forma 100% Local-First. Puedes preparar juicios, revisar documentos y calcular plazos en salas de vistas o viajes sin depender de internet.'
  },
  {
    q: isEn.value ? 'How much does Lexbell cost compared to Sudespacho?' : '¿Cuánto cuesta Lexbell en comparación con Sudespacho?',
    a: isEn.value
      ? 'You can use Lexbell completely free with up to 50 active cases. Upgrading to unlimited cases is just US$4.16/month (billed annually at US$49.99), with zero per-user penalties.'
      : 'Puedes usar Lexbell completamente gratis con hasta 50 expedientes activos. La versión ilimitada cuesta solo US$4.16/mes (facturado anual a US$49.99), sin recargos abusivos por usuario.'
  }
])

useHead(() => ({
  title: metaTitle.value,
  meta: [
    { name: 'description', content: metaDesc.value },
    { property: 'og:title', content: metaTitle.value },
    { property: 'og:description', content: metaDesc.value },
    { name: 'twitter:title', content: metaTitle.value },
    { name: 'twitter:description', content: metaDesc.value }
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
        }
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
}))

const matrix = computed(() => [
  {
    feature: isEn.value ? 'Data Custody & Privacy' : 'Custodia de Datos y Privacidad',
    lexbell: isEn.value ? '100% Local on SSD (Encrypted SQLite)' : '100% local en tu disco (SQLite cifrado)',
    competitor: isEn.value ? 'Third-party cloud servers (SaaS)' : 'Nube compartida en servidores de terceros'
  },
  {
    feature: isEn.value ? 'Offline Courtroom Access' : 'Acceso Offline en Tribunales',
    lexbell: isEn.value ? 'Instant native offline execution' : 'Nativo e ininterrumpido sin internet',
    competitor: isEn.value ? 'Requires browser and stable Wi-Fi/4G' : 'Requiere navegador y conexión constante'
  },
  {
    feature: isEn.value ? 'Pricing Model' : 'Modelo de Precios',
    lexbell: isEn.value ? 'Free up to 50 cases · Pro US$4.16/mo' : 'Gratis hasta 50 casos · Pro US$4.16/mes',
    competitor: isEn.value ? 'From 30–60 €/user/month + setup fees' : 'Desde 30 a 60 €/mes por usuario + cuotas'
  },
  {
    feature: isEn.value ? 'Conflict of Interest Detection' : 'Detección de Conflictos de Interés',
    lexbell: isEn.value ? 'Interactive relationship graph included' : 'Mapa interactivo de vínculos incluido',
    competitor: isEn.value ? 'Basic manual text search only' : 'Búsqueda manual básica por texto'
  },
  {
    feature: isEn.value ? 'System Speed' : 'Velocidad y Rendimiento',
    lexbell: isEn.value ? 'Instant native Mac & PC responsiveness' : 'Instantánea en procesador de tu equipo',
    competitor: isEn.value ? 'Subject to server latency and web load' : 'Sujeta a latencia web y caídas de servidor'
  },
  {
    feature: isEn.value ? 'Data Lock-in' : 'Permanencia y Dependencia',
    lexbell: isEn.value ? 'Zero lock-in, database is yours on disk' : 'Sin ataduras, la base de datos es tuya',
    competitor: isEn.value ? 'Access blocked if subscription lapses' : 'Acceso condicionado al pago recurrente'
  }
])
</script>

<template>
  <div class="vs-page">
    <!-- HERO -->
    <section class="section">
      <div class="apple-wrap text-center">
        <span class="eyebrow">{{ isEn ? 'LEGAL PRACTICE SOFTWARE COMPARISON' : 'COMPARATIVA DE SOFTWARE JURÍDICO' }}</span>
        <h1 class="h-display mt-2" style="text-wrap: balance;">
          {{ isEn ? 'The Private, Offline Alternative to Sudespacho' : 'La alternativa privada, offline y sin cuotas por usuario a Sudespacho' }}
        </h1>
        <p class="subtitle mt-5 mx-auto" style="max-width: 720px; text-wrap: pretty;">
          {{ isEn
            ? 'Manage cases, procedural deadlines, and legal files locally on your Mac or PC without storing confidential client records on third-party cloud servers.'
            : 'Gestiona expedientes, plazos procesales y documentos directamente en tu Mac o Windows sin subir la información confidencial de tus clientes a la nube.'
          }}
        </p>
        <div class="mt-8 flex justify-center">
          <AppDownload center />
        </div>
      </div>
    </section>

    <!-- MATRIX TABLE -->
    <section class="section section-gray">
      <div class="apple-wrap-wide">
        <div class="table-container">
          <table class="vs-table">
            <thead>
              <tr>
                <th class="th-feature">{{ isEn ? 'Criteria' : 'Criterio' }}</th>
                <th class="th-lexbell">
                  <div class="brand-header">
                    <span class="brand-pill">Lexbell</span>
                    <span class="brand-badge">{{ isEn ? 'Recommended' : 'Recomendado' }}</span>
                  </div>
                </th>
                <th class="th-competitor">Sudespacho</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, idx) in matrix" :key="idx">
                <td class="td-feature">{{ row.feature }}</td>
                <td class="td-lexbell">
                  <span class="check-icon">✓</span>
                  <span>{{ row.lexbell }}</span>
                </td>
                <td class="td-competitor">
                  <span class="cross-icon">✕</span>
                  <span>{{ row.competitor }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- 3 KEY REASONS -->
    <section class="section">
      <div class="apple-wrap">
        <div class="text-center max-w-2xl mx-auto mb-12">
          <span class="eyebrow">{{ isEn ? 'WHY SWITCH' : 'POR QUÉ CAMBIAR' }}</span>
          <h2 class="h-section mt-2">{{ isEn ? 'Three reasons attorneys choose Lexbell over Sudespacho' : 'Tres razones por las que los abogados eligen Lexbell' }}</h2>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <div class="reason-card">
            <div class="reason-icon">🛡️</div>
            <h3 class="reason-title">{{ isEn ? 'Privilege Protected by Design' : 'Secreto Profesional Blindado' }}</h3>
            <p class="reason-body">
              {{ isEn
                ? 'Your client files, accounting notes, and strategies live on your computer SSD. No third-party cloud hosts, zero risk of foreign cloud subpoenas.'
                : 'Tus expedientes y notas procesales viven en el disco duro de tu ordenador. Cero servidores en la nube y cero riesgo de filtraciones masivas.' }}
            </p>
          </div>

          <div class="reason-card">
            <div class="reason-icon">⚡</div>
            <h3 class="reason-title">{{ isEn ? 'Instant Offline Speed' : 'Velocidad Instantánea sin Internet' }}</h3>
            <p class="reason-body">
              {{ isEn
                ? 'In courthouses or hearings with poor signal, web apps freeze. Lexbell is a native desktop application that opens cases in milliseconds.'
                : 'En juzgados o salas de juicio con mala cobertura, las webs se congelan. Lexbell abre casos y documentos al instante sin depender de Wi-Fi.' }}
            </p>
          </div>

          <div class="reason-card">
            <div class="reason-icon">💰</div>
            <h3 class="reason-title">{{ isEn ? 'No Predatory Per-User Fees' : 'Sin Tarifas Abusivas por Usuario' }}</h3>
            <p class="reason-body">
              {{ isEn
                ? 'Free forever up to 50 cases. Upgrading gives unlimited dossiers for a single fair price, saving hundreds of dollars every year.'
                : 'Gratis hasta 50 expedientes para siempre. La versión Pro te da expedientes ilimitados por un precio justo, ahorrando cientos de euros al año.' }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQS -->
    <section class="section section-gray">
      <div class="apple-wrap max-w-3xl">
        <h2 class="h-section text-center mb-8">{{ isEn ? 'Frequently Asked Questions' : 'Preguntas Frecuentes' }}</h2>
        <div class="space-y-4">
          <div v-for="(f, idx) in faqs" :key="idx" class="faq-item p-5 bg-[var(--card-bg)] border border-[var(--border)] rounded-xl">
            <h3 class="font-bold text-base text-[var(--text)]">{{ f.q }}</h3>
            <p class="text-sm text-[var(--text-muted)] mt-2 leading-relaxed">{{ f.a }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- BOTTOM CTA -->
    <section class="section text-center">
      <div class="apple-wrap">
        <h2 class="h-section">{{ isEn ? 'Start organizing your practice locally today' : 'Empieza a organizar tu despacho hoy' }}</h2>
        <p class="subtitle mt-3 max-w-lg mx-auto">
          {{ isEn
            ? 'Download Lexbell from the official App Store. 50 cases free, no credit card required.'
            : 'Descarga Lexbell desde la tienda oficial. Gratis hasta 50 expedientes, sin tarjeta de crédito.' }}
        </p>
        <div class="mt-6 flex justify-center">
          <AppDownload center />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.vs-page {
  background: var(--bg);
  color: var(--text);
}
.table-container {
  overflow-x: auto;
  border-radius: 16px;
  border: 1px solid var(--border);
  background: var(--card-bg);
}
.vs-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-size: 14px;
}
.vs-table th, .vs-table td {
  padding: 16px 20px;
  border-bottom: 1px solid var(--border);
}
.th-feature { width: 30%; font-weight: 600; color: var(--text-muted); }
.th-lexbell { width: 40%; background: var(--accent-soft); }
.th-competitor { width: 30%; font-weight: 600; color: var(--text-muted); }
.brand-header { display: flex; align-items: center; gap: 8px; }
.brand-pill { font-weight: 800; font-size: 16px; color: var(--accent); }
.brand-badge {
  font-size: 11px;
  padding: 2px 8px;
  border-radius: 9999px;
  background: var(--accent);
  color: #fff;
  font-weight: 600;
}
.td-feature { font-weight: 600; color: var(--text); }
.td-lexbell {
  background: var(--accent-soft);
  color: var(--text);
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
}
.td-competitor { color: var(--text-muted); }
.check-icon { color: #16a34a; font-weight: bold; }
.cross-icon { color: #dc2626; font-weight: bold; margin-right: 6px; }
.reason-card {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 24px;
}
.reason-icon { font-size: 28px; margin-bottom: 12px; }
.reason-title { font-size: 16px; font-weight: 700; color: var(--text); margin-bottom: 8px; }
.reason-body { font-size: 13.5px; line-height: 1.55; color: var(--text-muted); }
</style>
