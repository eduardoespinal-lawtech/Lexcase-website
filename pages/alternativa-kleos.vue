<script setup lang="ts">
const { locale } = useI18n()
const isEn = computed(() => locale.value === 'en')

definePageMeta({ name: 'alternativa-kleos' })

const metaTitle = computed(() =>
  isEn.value
    ? 'Lexbell vs Kleos: Private Offline Alternative for Law Firms (Mac & Windows)'
    : 'Alternativa a Kleos Privada, Offline y Sin Cuotas Altas — Lexbell'
)

const metaDesc = computed(() =>
  isEn.value
    ? 'Looking for a Kleos alternative without public cloud or €49+/user/month fees? Try Lexbell on Mac and Windows: 100% local, free up to 50 cases, and private MCP AI.'
    : '¿Buscas una alternativa a Kleos sin nube ni suscripciones de 49 €/mes por usuario? Prueba Lexbell en Mac y Windows: 100% local, gratis hasta 50 casos e IA privada.'
)

const faqs = computed(() => [
  {
    q: isEn.value ? 'Can I migrate my data from Kleos to Lexbell?' : '¿Puedo migrar mis datos desde Kleos a Lexbell?',
    a: isEn.value
      ? 'Yes. You can export your contacts and case records and import them into Lexbell alongside your local document folders without losing your history.'
      : 'Sí. Puedes exportar tus contactos y expedientes e importarlos en Lexbell junto con tus carpetas locales de documentos sin perder tu historial.'
  },
  {
    q: isEn.value ? 'Do I need internet to collaborate inside my office?' : '¿Necesito internet para trabajar en equipo dentro de mi despacho?',
    a: isEn.value
      ? 'No. With Share in Office, one computer acts as a local host on your office Wi-Fi or Ethernet and team members connect with a 6-digit PIN—zero cloud servers.'
      : 'No. Con Compartir en Oficina, un equipo actúa como anfitrión en tu red Wi-Fi o Ethernet local y los demás se conectan con un PIN de 6 dígitos, sin servidores en la nube.'
  },
  {
    q: isEn.value ? 'What happens if I exceed 50 active cases?' : '¿Qué ocurre si supero los 50 expedientes gratuitos?',
    a: isEn.value
      ? 'You can upgrade to Lexbell Pro for US$4.16/month (billed annually at US$49.99) or US$7.99/month, with unlimited cases, relationship mapping, LAN sync, and local MCP AI.'
      : 'Puedes activar Lexbell Pro por US$4.16/mes (facturado US$49.99 al año) o US$7.99/mes, con expedientes ilimitados, mapa de vínculos, sincronización LAN e IA local MCP.'
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
    feature: isEn.value ? 'Hosting & Privacy' : 'Alojamiento y Privacidad',
    lexbell: isEn.value ? '100% Local & encrypted on your drive' : '100% local y cifrado en tu equipo',
    competitor: isEn.value ? 'Public cloud on third-party servers' : 'Nube pública en servidores de terceros'
  },
  {
    feature: isEn.value ? 'Offline Access' : 'Acceso sin Internet',
    lexbell: isEn.value ? '100% offline in courtrooms and travel' : 'Operación 100% offline en juzgados',
    competitor: isEn.value ? 'Requires active internet connection' : 'Requiere conexión activa a internet'
  },
  {
    feature: isEn.value ? 'Starting Price' : 'Precio Base',
    lexbell: isEn.value ? 'Free up to 50 cases · Pro US$4.16/mo (annual)' : 'Gratis hasta 50 casos · Pro US$4.16/mes (anual)',
    competitor: isEn.value ? 'From €49/user/month (Core) up to €69–€79/mo' : 'Desde 49 EUR/mes por usuario (Core) hasta 69–79 EUR/mes'
  },
  {
    feature: isEn.value ? 'Onboarding' : 'Contratación',
    lexbell: isEn.value ? 'Instant download, no sales demo required' : 'Descarga directa e inmediata sin demos',
    competitor: isEn.value ? 'Requires commercial demo request' : 'Requiere solicitud de demo comercial'
  },
  {
    feature: isEn.value ? 'Office Collaboration' : 'Colaboración en Despacho',
    lexbell: isEn.value ? 'Local LAN network sync with 6-digit PIN' : 'Red local LAN con PIN (sin servidores)',
    competitor: isEn.value ? 'Included via cloud per paid user seat' : 'Incluida vía nube por cada licencia pagada'
  },
  {
    feature: isEn.value ? 'Artificial Intelligence' : 'Inteligencia Artificial',
    lexbell: isEn.value ? 'Local MCP connectors without uploading files' : 'Conectores MCP locales sin enviar datos a la nube',
    competitor: isEn.value ? 'Cloud-integrated Kleos Expert AI' : 'Kleos Expert AI integrada en la nube'
  },
  {
    feature: isEn.value ? 'Data Ownership' : 'Propiedad de los Datos',
    lexbell: isEn.value ? 'Always yours on your disk, zero lock-in' : 'Base de datos tuya para siempre en tu disco',
    competitor: isEn.value ? 'Dependent on active subscription' : 'Dependiente de mantener la suscripción'
  }
])
</script>

<template>
  <div class="vs-page">
    <!-- HERO -->
    <section class="section">
      <div class="apple-wrap text-center">
        <span class="eyebrow">{{ isEn ? 'LEGAL SOFTWARE COMPARISON' : 'COMPARATIVA DE SOFTWARE JURÍDICO' }}</span>
        <h1 class="h-display mt-2" style="text-wrap: balance;">
          {{ isEn ? 'The Private, Offline Alternative to Kleos' : 'La alternativa privada y offline a Kleos para abogados y despachos boutique' }}
        </h1>
        <p class="subtitle mt-5 mx-auto" style="max-width: 720px; text-wrap: pretty;">
          {{ isEn
            ? 'Manage cases, deadlines, and documents directly on your Mac or Windows without uploading confidential data to the cloud or paying €49+/user/month.'
            : 'Controla expedientes, plazos y documentos directamente en tu Mac o Windows sin subir información confidencial a la nube ni pagar desde 49 €/mes por usuario.'
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
                <th class="th-feature">{{ isEn ? 'Capability / Standard' : 'Criterio' }}</th>
                <th class="th-lexbell">
                  <div class="brand-header">
                    <span class="brand-pill">Lexbell</span>
                    <span class="brand-badge">{{ isEn ? 'Recommended' : 'Recomendado' }}</span>
                  </div>
                </th>
                <th class="th-competitor">Kleos (Wolters Kluwer)</th>
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
                <td class="td-competitor">
                  <div class="cell-wrap text-muted">
                    <span>{{ row.competitor }}</span>
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
            <h3 class="benefit-title">{{ isEn ? 'Real Per-Seat Savings' : 'Ahorro real por usuario' }}</h3>
            <p class="benefit-desc">
              {{ isEn
                ? 'In a 3-attorney firm, cloud SaaS easily exceeds €1,700/year. With Lexbell you start free up to 50 cases and sync over your office LAN at a fraction of the cost.'
                : 'En un despacho de 3 abogados, una suscripción SaaS supera fácilmente los 1.700 € al año. Con Lexbell empiezas gratis hasta 50 expedientes y trabajas en red local por una fracción del costo.'
              }}
            </p>
          </div>
          <div class="benefit-card">
            <h3 class="benefit-title">{{ isEn ? 'Zero Internet Dependency' : 'Cero dependencia de internet' }}</h3>
            <p class="benefit-desc">
              {{ isEn
                ? 'Even if courthouse Wi-Fi drops or you pause your plan, your case database remains intact and accessible on your computer.'
                : 'Si se cae el Wi-Fi del juzgado o decides cancelar tu plan, tus expedientes siguen intactos y accesibles en tu computadora.'
              }}
            </p>
          </div>
          <div class="benefit-card">
            <h3 class="benefit-title">{{ isEn ? 'Private AI Under Your Control' : 'IA privada bajo tu control' }}</h3>
            <p class="benefit-desc">
              {{ isEn
                ? 'Connect Claude, Antigravity, Cursor, or Codex via read-only local MCP to summarize pleadings and check deadlines without sending cases to external servers.'
                : 'Conecta Claude, Antigravity, Cursor o Codex mediante MCP local de solo lectura para resumir escritos y revisar plazos sin subir tus casos a servidores externos.'
              }}
            </p>
          </div>
        </div>

        <!-- TRANSPARENT FIT BOX -->
        <div class="fit-grid mt-12">
          <div class="fit-card">
            <h3 class="benefit-title">{{ isEn ? 'When to choose Kleos' : '¿Cuándo elegir Kleos?' }}</h3>
            <p class="benefit-desc">
              {{ isEn
                ? 'Choose Kleos if your firm in Spain strictly requires direct LexNET integration, VeriFactu billing, or a web client portal.'
                : 'Elige Kleos si tu despacho en España necesita obligatoriamente integración directa con LexNET, facturación con VeriFactu o portal web para clientes.'
              }}
            </p>
          </div>
          <div class="fit-card fit-card-accent">
            <h3 class="benefit-title">{{ isEn ? 'When to choose Lexbell' : '¿Cuándo elegir Lexbell?' }}</h3>
            <p class="benefit-desc">
              {{ isEn
                ? 'Choose Lexbell if you prioritize strict local privilege on your disk, native Mac/Windows speed, offline courtroom access, local MCP AI, and fair pricing for 1–10 person practices.'
                : 'Elige Lexbell si priorizas el secreto profesional absoluto en tu disco, velocidad nativa en Mac y Windows, trabajo offline en audiencias, IA local y precios justos para prácticas de 1 a 10 personas.'
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
  background: var(--bg);
  color: var(--text);
  padding-bottom: 80px;
}
.table-container {
  overflow-x: auto;
  border-radius: 16px;
  border: 1px solid var(--border);
  background: var(--card-bg);
  box-shadow: var(--shadow-card);
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
  border-bottom: 1px solid var(--border);
}
.vs-table tr:last-child td {
  border-bottom: none;
}
.th-feature {
  width: 28%;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-light);
  background: var(--bg-subtle);
}
.th-lexbell {
  width: 38%;
  background: var(--accent-soft);
  border-left: 2px solid var(--accent);
  border-right: 2px solid var(--accent);
}
.th-competitor {
  width: 34%;
  font-size: 14px;
  font-weight: 600;
  color: var(--text-light);
  background: var(--bg-subtle);
}
.brand-header {
  display: flex;
  align-items: center;
  gap: 10px;
}
.brand-pill {
  font-size: 18px;
  font-weight: 700;
  color: var(--accent);
}
.brand-badge {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  background: var(--accent);
  color: #ffffff;
  padding: 2px 8px;
  border-radius: 10px;
}
.td-feature {
  font-weight: 600;
  color: var(--text);
  font-size: 14.5px;
}
.td-lexbell {
  background: var(--bg-elevated);
  border-left: 2px solid var(--accent);
  border-right: 2px solid var(--accent);
  font-weight: 500;
  color: var(--text);
  font-size: 14px;
}
.td-competitor {
  color: var(--text-muted);
  font-size: 14px;
}
.cell-wrap {
  display: flex;
  align-items: flex-start;
  gap: 8px;
}
.check-icon {
  color: var(--accent);
  font-weight: 800;
  flex-shrink: 0;
}
.benefit-card,
.fit-card {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 28px 24px;
  box-shadow: var(--shadow-card);
}
.fit-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}
@media (min-width: 768px) {
  .fit-grid {
    grid-template-columns: 1fr 1fr;
  }
}
.fit-card-accent {
  border-color: var(--accent-border);
  background: linear-gradient(180deg, var(--accent-soft) 0%, var(--card-bg) 45%);
}
.benefit-title {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 8px;
  color: var(--text);
}
.benefit-desc {
  font-size: 14px;
  line-height: 1.6;
  color: var(--text-muted);
  margin: 0;
}
.faq-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.faq-card {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 24px 28px;
}
.faq-q {
  font-size: 16px;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 8px;
}
.faq-a {
  font-size: 14.5px;
  line-height: 1.6;
  color: var(--text-muted);
  margin: 0;
}
</style>
