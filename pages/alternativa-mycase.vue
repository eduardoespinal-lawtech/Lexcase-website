<script setup lang="ts">
const { locale } = useI18n()
const isEn = computed(() => locale.value === 'en')

definePageMeta({ name: 'alternativa-mycase' })

const metaTitle = computed(() =>
  isEn.value
    ? 'Lexbell vs MyCase: Private Offline Alternative for Lawyers (Mac & Windows)'
    : 'Alternativa a MyCase Privada, Offline y Sin Suscripciones Caras — Lexbell'
)

const metaDesc = computed(() =>
  isEn.value
    ? 'Looking for a MyCase alternative without $49+/user/month fees or cloud exposure? Try Lexbell on Mac and Windows: 100% local, free up to 50 cases.'
    : '¿Buscas una alternativa a MyCase sin pagar $49-$89/mes por usuario ni subir expedientes a la nube? Prueba Lexbell: 100% local y gratis hasta 50 casos en Mac y Windows.'
)

const faqs = computed(() => [
  {
    q: isEn.value ? 'How does Lexbell compare to MyCase in pricing?' : '¿Cómo se compara el precio de Lexbell frente a MyCase?',
    a: isEn.value
      ? 'MyCase charges $49 to $89 per user every month ($588 to $1,068 annually per seat). Lexbell offers 50 active cases free forever, with unlimited Pro access for just $49.99/year total.'
      : 'MyCase cobra de $49 a $89 dólares por usuario cada mes ($588 a $1,068 al año por persona). Lexbell te da 50 expedientes gratis para siempre y su versión Pro ilimitada cuesta solo $49.99 al año en total.'
  },
  {
    q: isEn.value ? 'Can I use Lexbell during court trials with no internet?' : '¿Puedo usar Lexbell durante juicios o audiencias sin internet?',
    a: isEn.value
      ? 'Yes. Lexbell runs 100% locally on your computer SSD. You can consult witness statements, case files, and court dates without Wi-Fi or cellular reception.'
      : 'Sí. Lexbell corre 100% en el disco de tu ordenador. Puedes consultar declaraciones, expedientes completos y fechas de audiencia sin depender de Wi-Fi o cobertura móvil.'
  },
  {
    q: isEn.value ? 'How does Lexbell protect attorney-client privilege?' : '¿Cómo protege Lexbell el secreto profesional?',
    a: isEn.value
      ? 'Your data never leaves your machine. Unlike MyCase, which stores dossiers on remote cloud servers, Lexbell uses local encrypted SQLite databases under your exclusive custody.'
      : 'Tus datos nunca salen de tu equipo. A diferencia de MyCase, que almacena los expedientes en servidores externos en la nube, Lexbell utiliza bases de datos locales cifradas bajo tu custodia soberana.'
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
    lexbell: isEn.value ? '100% Local on SSD (Encrypted SQLite)' : '100% local en tu equipo (SQLite cifrado)',
    competitor: isEn.value ? 'Remote cloud hosting on US servers' : 'Nube pública en servidores externos'
  },
  {
    feature: isEn.value ? 'Monthly Cost' : 'Costo Mensual',
    lexbell: isEn.value ? 'Free up to 50 cases · Pro $4.16/mo (annual)' : 'Gratis hasta 50 casos · Pro $4.16/mes',
    competitor: isEn.value ? '$49 – $89 / user / month' : '$49 a $89 USD / mes por usuario'
  },
  {
    feature: isEn.value ? 'Offline Courtroom Access' : 'Acceso Offline en Salas de Juicio',
    lexbell: isEn.value ? 'Native offline access with zero latency' : 'Operación nativa 100% sin conexión',
    competitor: isEn.value ? 'Requires browser & active internet' : 'Requiere navegador e internet activo'
  },
  {
    feature: isEn.value ? 'Conflict of Interest Detection' : 'Detección de Conflictos de Interés',
    lexbell: isEn.value ? 'Interactive relationship graph included' : 'Mapa interactivo de vínculos incluido',
    competitor: isEn.value ? 'Basic text query in higher-tier plans' : 'Búsqueda por texto en planes caros'
  },
  {
    feature: isEn.value ? 'Local MCP AI Assistance' : 'Asistencia de IA Local Segura',
    lexbell: isEn.value ? 'MCP protocol compatible (zero file uploads)' : 'Protocolo MCP local (sin subir archivos)',
    competitor: isEn.value ? 'Cloud-hosted AI inspecting client records' : 'IA en la nube que analiza tus datos'
  },
  {
    feature: isEn.value ? 'Data Ownership' : 'Propiedad y Portabilidad',
    lexbell: isEn.value ? 'Always yours on disk, export JSON anytime' : 'Exporta tu base completa en JSON cuando quieras',
    competitor: isEn.value ? 'Locked behind ongoing active subscription' : 'Bloqueado al cancelar la suscripción'
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
          {{ isEn ? 'The Private, Sovereign Alternative to MyCase' : 'La alternativa privada, offline y sin suscripciones caras a MyCase' }}
        </h1>
        <p class="subtitle mt-5 mx-auto" style="max-width: 720px; text-wrap: pretty;">
          {{ isEn
            ? 'Manage case files, court schedules, and client records directly on your Mac or Windows PC without uploading privileged dossiers to the cloud.'
            : 'Organiza expedientes, audiencias y documentos directamente en tu Mac o Windows sin subir información confidencial a servidores externos.'
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
                <th class="th-competitor">MyCase</th>
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
          <h2 class="h-section mt-2">{{ isEn ? 'Why law firms choose Lexbell over MyCase' : 'Por qué los despachos eligen Lexbell frente a MyCase' }}</h2>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <div class="reason-card">
            <div class="reason-icon">🔒</div>
            <h3 class="reason-title">{{ isEn ? 'Zero Cloud Privilege Leaks' : 'Secreto Profesional Total' }}</h3>
            <p class="reason-body">
              {{ isEn
                ? 'Your client dossiers and financial notes stay strictly on your personal drive. No cloud hosts, no data mining, and zero compliance risks.'
                : 'Tus expedientes y notas financieras residen únicamente en tu disco. Cero intermediarios en la nube y total cumplimiento deontológico.' }}
            </p>
          </div>

          <div class="reason-card">
            <div class="reason-icon">⚡</div>
            <h3 class="reason-title">{{ isEn ? 'Lightning Fast in Courtrooms' : 'Rendimiento Inmediato en Estrados' }}</h3>
            <p class="reason-body">
              {{ isEn
                ? 'Web browsers lag when loading bulky case files. Lexbell executes natively on Mac and PC, opening documents and deadlines in milliseconds.'
                : 'Las plataformas web son lentas cargando expedientes pesados. Lexbell corre de forma nativa en tu ordenador, abriendo casos al instante.' }}
            </p>
          </div>

          <div class="reason-card">
            <div class="reason-icon">💵</div>
            <h3 class="reason-title">{{ isEn ? 'Save $600 to $1,000+ Every Year' : 'Ahorra más de $600 al Año' }}</h3>
            <p class="reason-body">
              {{ isEn
                ? 'Never pay $49-$89 per user every month. Start free up to 50 cases and enjoy unlimited dossiers with our predictable, fair pricing.'
                : 'Deja de pagar $49 a $89 dólares mensuales por persona. Comienza gratis con hasta 50 casos y trabaja con una tarifa ética y accesible.' }}
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
        <h2 class="h-section">{{ isEn ? 'Start managing your casework locally' : 'Comienza a gestionar tus expedientes en local' }}</h2>
        <p class="subtitle mt-3 max-w-lg mx-auto">
          {{ isEn
            ? 'Download Lexbell from the official App Store. Free up to 50 cases, no credit card required.'
            : 'Descarga Lexbell desde la tienda oficial. Gratis hasta 50 casos, sin tarjeta de crédito.' }}
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
