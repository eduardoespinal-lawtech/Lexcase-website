<script setup lang="ts">
const { t, locale } = useI18n()
const localePath = useLocalePath()
const isEn = computed(() => locale.value === 'en')

definePageMeta({ name: 'alternativa-clio' })

const metaTitle = computed(() =>
  isEn.value
    ? 'Lexbell vs Clio: Private Offline Alternative for Law Firms (Mac & Windows)'
    : 'Lexbell vs Clio: La Alternativa Privada y Offline para Abogados (Mac y Windows)'
)

const metaDesc = computed(() =>
  isEn.value
    ? 'Compare Lexbell and Clio. Discover why solo attorneys and law firms choose Lexbell for 100% local privacy, zero cloud dependency, and offline speed on Mac & Windows.'
    : 'Comparativa Lexbell vs Clio. Descubre por qué abogados y despachos eligen Lexbell por su privacidad 100% local, cero dependencia de la nube y velocidad offline.'
)

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
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: isEn.value ? 'Is Lexbell a direct alternative to Clio?' : '¿Es Lexbell una alternativa directa a Clio?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: isEn.value
                ? 'Yes. Lexbell provides core legal practice management: case records, court deadline tracking, client directory, and document organization, with the key difference of keeping all data 100% stored locally on your Mac or Windows computer without forced cloud servers.'
                : 'Sí. Lexbell ofrece gestión integral de despachos: expedientes, cálculo de plazos judiciales, directorio de clientes y organización de documentos, con la diferencia fundamental de almacenar los datos 100% en local en tu ordenador sin servidores externos en la nube.'
            }
          },
          {
            '@type': 'Question',
            name: isEn.value ? 'Why choose local software over cloud solutions like Clio?' : '¿Por qué elegir software local frente a la nube de Clio?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: isEn.value
                ? 'Local software guarantees complete attorney-client privilege, eliminates recurring cloud server vulnerabilities, functions seamlessly without internet in courthouses or during travel, and offers instantaneous zero-latency search on your SSD.'
                : 'El software local blinda el secreto profesional, elimina vulnerabilidades en servidores de terceros, opera sin conexión en juzgados o viajes y ofrece una velocidad de búsqueda instantánea sin latencia de red.'
            }
          },
          {
            '@type': 'Question',
            name: isEn.value ? 'What is the price difference between Lexbell and Clio?' : '¿Cuál es la diferencia de precio entre Lexbell y Clio?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: isEn.value
                ? 'Clio requires mandatory monthly subscriptions starting at $49 to $149+ per user per month. Lexbell provides a fully functional free tier for up to 50 active cases, and an affordable flat license for unlimited matters without predatory lock-in.'
                : 'Clio exige suscripciones mensuales obligatorias desde $49 hasta más de $149 USD por usuario al mes. Lexbell ofrece un plan gratuito completo de hasta 50 expedientes sin tarjeta de crédito y licencias accesibles sin tarifas abusivas.'
            }
          }
        ]
      })
    }
  ]
}))

const matrix = computed(() => [
  {
    feature: isEn.value ? 'Data Storage & Privacy' : 'Almacenamiento y Privacidad',
    lexbell: isEn.value ? '100% Local (Encrypted on your SSD, zero third-party cloud)' : '100% Local (Cifrado en tu disco, cero servidores de terceros)',
    clio: isEn.value ? 'Public Cloud (Stored on multi-tenant remote servers)' : 'Nube Pública (Alojado en servidores remotos compartidos)',
    lexbellWin: true
  },
  {
    feature: isEn.value ? 'Offline Operation' : 'Funcionamiento sin Internet',
    lexbell: isEn.value ? 'Full offline access in courtrooms, flights, and remote areas' : 'Acceso total en juzgados, aviones o zonas sin cobertura',
    clio: isEn.value ? 'Requires constant active internet connection' : 'Requiere conexión activa a internet permanente',
    lexbellWin: true
  },
  {
    feature: isEn.value ? 'Court Deadline Calculation' : 'Cálculo de Plazos Procesales',
    lexbell: isEn.value ? 'Automatic business days calculation with holiday exclusion' : 'Cálculo automático de días hábiles excluyendo festivos',
    clio: isEn.value ? 'Basic calendar or expensive add-on rules' : 'Calendario básico o complementos de pago',
    lexbellWin: true
  },
  {
    feature: isEn.value ? 'Search Speed & Latency' : 'Velocidad de Búsqueda y Respuesta',
    lexbell: isEn.value ? 'Instant (0 ms network lag, local SQLite engine)' : 'Instantánea (0 ms lag de red, motor SQLite local)',
    clio: isEn.value ? 'Dependent on internet bandwidth and server response' : 'Dependiente del ancho de banda y servidores remotos',
    lexbellWin: true
  },
  {
    feature: isEn.value ? 'Pricing Structure' : 'Estructura de Precios',
    lexbell: isEn.value ? 'Free tier up to 50 cases · No credit card required' : 'Plan gratis hasta 50 casos · Sin tarjeta de crédito',
    clio: isEn.value ? 'From $49 to $149+ per user / month mandatory' : 'Desde $49 hasta más de $149 USD / mes por usuario',
    lexbellWin: true
  },
  {
    feature: isEn.value ? 'Desktop Integration' : 'Integración con el Sistema Operativo',
    lexbell: isEn.value ? 'Native desktop app for macOS (Apple Silicon & Intel) and Windows' : 'App nativa de escritorio para macOS y Windows',
    clio: isEn.value ? 'Web browser-based SaaS interface' : 'Interfaz SaaS web dependiente del navegador',
    lexbellWin: true
  },
  {
    feature: isEn.value ? 'Specialized Matters' : 'Especialidades Cubiertas',
    lexbell: isEn.value ? 'Litigation, Immigration petitions, and Real Estate contracts' : 'Litigios, Trámites de Inmigración y Contratos Inmobiliarios',
    clio: isEn.value ? 'General legal practice management' : 'Gestión jurídica general',
    lexbellWin: true
  }
])

const faqs = computed(() => [
  {
    q: isEn.value ? 'Why do law firms migrate from Clio to Lexbell?' : '¿Por qué bufetes y abogados independientes migran de Clio a Lexbell?',
    a: isEn.value
      ? 'The two biggest drivers are strict data confidentiality and cost predictability. Lawyers handling sensitive litigation or corporate cases prefer knowing their files are physically on their computer rather than exposed on external cloud servers, while avoiding paying hundreds of dollars every month per team member.'
      : 'Los dos motivos principales son la confidencialidad absoluta del secreto profesional y el ahorro económico. Quienes llevan litigios sensibles prefieren tener la certeza de que sus datos están en su propio ordenador físico en lugar de en la nube de un tercero, además de evitar pagar cientos de dólares al mes por usuario.'
  },
  {
    q: isEn.value ? 'Can I work in courthouses without Wi-Fi?' : '¿Puedo consultar mis expedientes en audiencias o juzgados sin internet?',
    a: isEn.value
      ? 'Yes, absolutely. Lexbell was engineered offline-first. You have complete access to all your cases, notes, clients, and deadlines even in basements, rural venues, or aircraft with zero Wi-Fi connectivity.'
      : 'Sí, totalmente. Lexbell está diseñado local-first. Tienes acceso completo e instantáneo a todos tus expedientes, notas, clientes y plazos procesales en salas de audiencias sin cobertura, viajes o juzgados sin Wi-Fi.'
  },
  {
    q: isEn.value ? 'How do backups work in Lexbell?' : '¿Cómo se hacen las copias de seguridad en Lexbell si no usa la nube?',
    a: isEn.value
      ? 'You retain complete ownership of your database. With a single click, you can generate an encrypted backup file to store on an external drive, Time Machine, or your firm\'s authorized private network drive.'
      : 'Tú eres el único dueño de tu información. Con un solo clic puedes generar una copia de seguridad cifrada y guardarla en un disco externo, Time Machine o la carpeta privada que tu despacho decida.'
  }
])
</script>

<template>
  <div class="vs-page">
    <!-- HERO -->
    <section class="section">
      <div class="apple-wrap text-center">
        <span class="eyebrow">{{ isEn ? 'SOFTWARE COMPARISON' : 'COMPARATIVA DE SOFTWARE JURÍDICO' }}</span>
        <h1 class="h-display mt-2" style="text-wrap: balance;">
          {{ isEn ? 'The Private, Offline Alternative to Clio' : 'La Alternativa Privada y Offline a Clio' }}
        </h1>
        <p class="subtitle mt-5 mx-auto" style="max-width: 720px; text-wrap: pretty;">
          {{ isEn
            ? 'Compare Lexbell and Clio point by point. Total data confidentiality on your Mac and Windows, zero internet dependency, and no predatory monthly cloud subscriptions.'
            : 'Compara Lexbell y Clio punto por punto. Confidencialidad total en tu Mac y Windows, cero dependencia de conexión a internet y sin suscripciones forzosas en la nube.'
          }}
        </p>
      </div>
    </section>

    <!-- MATRIX TABLE -->
    <section class="section section-gray">
      <div class="apple-wrap-wide">
        <div class="table-container">
          <table class="vs-table">
            <thead>
              <tr>
                <th class="th-feature">{{ isEn ? 'Capability / Standard' : 'Capacidad / Estándar' }}</th>
                <th class="th-lexbell">
                  <div class="brand-header">
                    <span class="brand-pill">Lexbell</span>
                    <span class="brand-badge">{{ isEn ? 'Recommended' : 'Recomendado' }}</span>
                  </div>
                </th>
                <th class="th-clio">Clio</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, idx) in matrix" :key="idx">
                <td class="td-feature">{{ row.feature }}</td>
                <td class="td-lexbell">
                  <div class="cell-wrap">
                    <span class="check-icon">✓</span>
                    <span>{{ row.lexbell }}</span>
                  </div>
                </td>
                <td class="td-clio">
                  <div class="cell-wrap text-muted">
                    <span>{{ row.clio }}</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- VALUE PROPOSITIONS -->
    <section class="section">
      <div class="apple-wrap">
        <div class="grid gap-8 md:grid-cols-3">
          <div class="benefit-card">
            <div class="benefit-icon">🛡️</div>
            <h3 class="benefit-title">{{ isEn ? 'True Confidentiality' : 'Secreto Profesional Real' }}</h3>
            <p class="benefit-desc">
              {{ isEn
                ? 'Your clients trust you with sensitive matters. Storing files locally ensures compliance with professional ethics without third-party exposure.'
                : 'Tus clientes confían en ti datos críticos. Almacenar localmente garantiza el secreto profesional sin riesgos de filtración en servidores externos.'
              }}
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">⚡</div>
            <h3 class="benefit-title">{{ isEn ? 'Instant Offline Speed' : 'Velocidad Offline Inmediata' }}</h3>
            <p class="benefit-desc">
              {{ isEn
                ? 'Search thousands of records in under 5 milliseconds. No spinning loaders, no web browser crashes, no lost courtroom moments.'
                : 'Busca entre miles de expedientes en milisegundos. Sin tiempos de espera en el navegador, sin caídas de conexión en plena audiencia.'
              }}
            </p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">💼</div>
            <h3 class="benefit-title">{{ isEn ? 'Fair, Predictable Pricing' : 'Precios Justos y Transparentes' }}</h3>
            <p class="benefit-desc">
              {{ isEn
                ? 'Start completely free up to 50 matters. Upgrade only when your practice grows, without locking your database behind a monthly paywall.'
                : 'Comienza gratis con hasta 50 expedientes activos. Escala sin que tu base de datos quede secuestrada si decides pausar un pago.'
              }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ SECTION -->
    <section class="section section-gray">
      <div class="apple-wrap" style="max-width: 780px;">
        <div class="text-center mb-10">
          <span class="eyebrow">{{ isEn ? 'ANSWERS & MIGRATION' : 'PREGUNTAS FRECUENTES' }}</span>
          <h2 class="h-section mt-2">{{ isEn ? 'Frequently Asked Questions' : 'Preguntas sobre la Comparativa' }}</h2>
        </div>
        <div class="faq-list">
          <div v-for="(item, idx) in faqs" :key="idx" class="faq-card">
            <h3 class="faq-q">{{ item.q }}</h3>
            <p class="faq-a">{{ item.a }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.vs-page {
  padding-bottom: 80px;
}
.table-container {
  overflow-x: auto;
  border-radius: 16px;
  border: 1px solid var(--border-color, #e5e7eb);
  background: #ffffff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
}
.vs-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  min-width: 680px;
}
.vs-table th,
.vs-table td {
  padding: 18px 24px;
  border-bottom: 1px solid var(--border-color, #f3f4f6);
}
.vs-table tr:last-child td {
  border-bottom: none;
}
.th-feature {
  width: 32%;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #6b7280;
  background: #fafafa;
}
.th-lexbell {
  width: 38%;
  background: #f0f7ff;
  border-left: 2px solid #007aff;
  border-right: 2px solid #007aff;
}
.th-clio {
  width: 30%;
  font-size: 14px;
  font-weight: 600;
  color: #6b7280;
  background: #fafafa;
}
.brand-header {
  display: flex;
  align-items: center;
  gap: 10px;
}
.brand-pill {
  font-size: 18px;
  font-weight: 700;
  color: #007aff;
}
.brand-badge {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  background: #007aff;
  color: #ffffff;
  padding: 2px 8px;
  border-radius: 10px;
}
.td-feature {
  font-weight: 600;
  color: #111827;
  font-size: 14.5px;
}
.td-lexbell {
  background: #f8fbff;
  border-left: 2px solid #007aff;
  border-right: 2px solid #007aff;
  font-weight: 500;
  color: #0f172a;
  font-size: 14px;
}
.td-clio {
  color: #64748b;
  font-size: 14px;
}
.cell-wrap {
  display: flex;
  align-items: flex-start;
  gap: 8px;
}
.check-icon {
  color: #007aff;
  font-weight: 800;
  flex-shrink: 0;
}
.benefit-card {
  background: #ffffff;
  border: 1px solid var(--border-color, #e5e7eb);
  border-radius: 16px;
  padding: 32px 24px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.02);
}
.benefit-icon {
  font-size: 32px;
  margin-bottom: 16px;
}
.benefit-title {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 8px;
  color: #111827;
}
.benefit-desc {
  font-size: 14px;
  line-height: 1.6;
  color: #4b5563;
}
.faq-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.faq-card {
  background: #ffffff;
  border: 1px solid var(--border-color, #e5e7eb);
  border-radius: 14px;
  padding: 24px 28px;
}
.faq-q {
  font-size: 16px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 8px;
}
.faq-a {
  font-size: 14.5px;
  line-height: 1.6;
  color: #4b5563;
  margin: 0;
}
</style>
