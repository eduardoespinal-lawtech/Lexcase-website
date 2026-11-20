<script setup lang="ts">
const { locale } = useI18n()
const isEn = computed(() => locale.value === 'en')

definePageMeta({ name: 'alternativa-excel-abogados' })

const metaTitle = computed(() =>
  isEn.value
    ? 'Excel Alternative for Lawyers: Track Cases & Deadlines Error-Free — Lexbell'
    : 'Alternativa a Excel para Abogados: Controla Expedientes y Plazos sin Errores — Lexbell'
)

const metaDesc = computed(() =>
  isEn.value
    ? 'Leave broken spreadsheets and duplicated folders behind. Organize cases, hearings, business-day deadlines, and conflict checks 100% locally on Mac & Windows. Free up to 50 cases.'
    : 'Deja atrás las hojas de cálculo rotas y carpetas duplicadas. Organiza casos, audiencias, plazos hábiles y conflictos de interés 100% local en Mac y Windows. Gratis hasta 50 expedientes.'
)

const faqs = computed(() => [
  {
    q: isEn.value ? 'If I switch from Excel to Lexbell, do I lose physical control of my files?' : 'Si dejo Excel por Lexbell, ¿pierdo el control físico de mis archivos?',
    a: isEn.value
      ? 'No. Lexbell is 100% local: your case database and encrypted backups stay on your hard drive, never on third-party servers.'
      : 'No. Lexbell es 100% local: tus expedientes y copias de seguridad cifradas siguen viviendo en tu disco duro, no en servidores de terceros.'
  },
  {
    q: isEn.value ? 'How much does it cost to move from Excel to Lexbell?' : '¿Cuánto cuesta pasar de Excel a Lexbell?',
    a: isEn.value
      ? 'Nothing if you manage up to 50 active cases (free forever). If you grow beyond 50 cases, Pro unlimited is US$4.16/month billed annually (US$49.99/year).'
      : 'Nada si manejas hasta 50 expedientes activos (es gratis para siempre). Si superas ese límite, el plan Pro ilimitado cuesta US$4.16/mes en pago anual (US$49.99/año).'
  },
  {
    q: isEn.value ? 'Can my office team work together without emailing Excel files?' : '¿Puede mi equipo trabajar sin enviarse archivos de Excel por correo?',
    a: isEn.value
      ? 'Yes. Share in Office syncs cases across your local office Wi-Fi or Ethernet using a 6-digit PIN, eliminating version conflicts.'
      : 'Sí. Con Compartir en Oficina sincronizas expedientes en tiempo real dentro del Wi-Fi o red Ethernet de tu despacho mediante un PIN de 6 dígitos, sin versiones duplicadas.'
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

const problems = computed(() => [
  {
    title: isEn.value ? 'Deadlines Calculated by Hand' : 'Vencimientos calculados a mano',
    desc: isEn.value
      ? 'A broken formula or a missed court holiday in a spreadsheet can cost a procedural deadline or an appeal.'
      : 'Una fórmula rota o un feriado olvidado en una hoja de cálculo puede costar una caducidad o la pérdida de un recurso.'
  },
  {
    title: isEn.value ? 'Zero Conflict-of-Interest Checks' : 'Cero detección de conflictos de interés',
    desc: isEn.value
      ? 'Searching a client or tax ID across dozens of spreadsheets increases the risk of taking on an adverse party.'
      : 'Buscar un nombre o cédula entre decenas de archivos distintos aumenta el riesgo de aceptar a una contraparte vinculada a un cliente anterior.'
  },
  {
    title: isEn.value ? 'Duplicated Folders & Versions' : 'Carpetas y versiones duplicadas',
    desc: isEn.value
      ? 'When two people edit the same sheet or copy files (Motion_Final_v3_OK.docx), nobody knows which version is current.'
      : 'Cuando dos personas editan la misma hoja o copian documentos (Demanda_Final_v3_OK.docx), nadie sabe cuál es la versión vigente.'
  },
  {
    title: isEn.value ? 'Slow Searches & Scattered Data' : 'Búsquedas lentas y datos dispersos',
    desc: isEn.value
      ? 'Hearing notes in Word, deadlines in Calendar, and clients in Excel force you to jump across five windows per call.'
      : 'Las notas de audiencia en Word, los plazos en el calendario y los clientes en Excel obligan a saltar entre cinco ventanas para responder una llamada.'
  }
])

const matrix = computed(() => [
  {
    task: isEn.value ? 'Privacy on Your Drive' : 'Privacidad en tu disco',
    lexbell: isEn.value ? 'Encrypted local database with automated backups' : 'Base de datos cifrada con respaldos automáticos',
    excel: isEn.value ? 'Loose files without native encryption' : 'Archivos sueltos sin cifrado nativo'
  },
  {
    task: isEn.value ? 'Business-Day Deadlines' : 'Cómputo de plazos hábiles',
    lexbell: isEn.value ? 'Automatic with court holidays and native alerts' : 'Automático con feriados y alertas nativas',
    excel: isEn.value ? 'Manual counting or fragile formulas' : 'Manual o con fórmulas frágiles'
  },
  {
    task: isEn.value ? 'Conflict Detection' : 'Detección de conflictos',
    lexbell: isEn.value ? 'Automatic visual graph of parties and companies' : 'Grafo visual automático de partes y empresas',
    excel: isEn.value ? 'Manual search prone to omissions' : 'Búsqueda manual propensa a omisiones'
  },
  {
    task: isEn.value ? 'Instant Search' : 'Búsqueda de información',
    lexbell: isEn.value ? 'Instant (⌘E / Ctrl+E) across your entire practice' : 'Instantánea (⌘E / Ctrl+E) en todo el despacho',
    excel: isEn.value ? 'Opening file by file' : 'Abrir archivo por archivo'
  },
  {
    task: isEn.value ? 'Office Teamwork' : 'Trabajo en oficina',
    lexbell: isEn.value ? 'Real-time LAN sync without duplicate files' : 'Sincronización LAN en tiempo real sin duplicados',
    excel: isEn.value ? 'Version conflicts over email or USB' : 'Conflictos de copias por correo o USB'
  },
  {
    task: isEn.value ? 'Private AI Assistance' : 'Asistencia con IA privada',
    lexbell: isEn.value ? 'Read-only local MCP connectors' : 'Conectores MCP locales de solo lectura',
    excel: isEn.value ? 'Manual copy-pasting into web chats' : 'Copiar y pegar texto en chats web'
  },
  {
    task: isEn.value ? 'Cost to Start' : 'Costo para empezar',
    lexbell: isEn.value ? 'Free up to 50 active cases forever' : 'Gratis hasta 50 casos activos',
    excel: isEn.value ? 'Free (with existing Office license)' : 'Gratis (si ya tienes licencia Office)'
  }
])
</script>

<template>
  <div class="vs-page">
    <!-- HERO -->
    <section class="section">
      <div class="apple-wrap text-center">
        <span class="eyebrow">{{ isEn ? 'FROM SPREADSHEETS TO PROCEDURAL CONTROL' : 'DEL CAOS DE HOJAS DE CÁLCULO AL CONTROL PROCESAL' }}</span>
        <h1 class="h-display mt-2" style="text-wrap: balance;">
          {{ isEn ? 'The Excel Alternative for Lawyers Who Want Control Without the Cloud' : 'La alternativa a Excel para abogados que quieren control real sin irse a la nube' }}
        </h1>
        <p class="subtitle mt-5 mx-auto" style="max-width: 720px; text-wrap: pretty;">
          {{ isEn
            ? 'Keep the privacy of storing everything on your computer while eliminating deadline errors, duplicated files, and slow folder searches.'
            : 'Mantén la privacidad de guardar todo en tu computadora, pero elimina los errores en conteo de plazos, los archivos duplicados y la búsqueda lenta entre carpetas.'
          }}
        </p>
        <div class="mt-8 flex justify-center">
          <AppDownload center />
        </div>
      </div>
    </section>

    <!-- 4 HIDDEN PROBLEMS -->
    <section class="section section-gray">
      <div class="apple-wrap">
        <div class="text-center max-w-2xl mx-auto mb-12">
          <h2 class="h-section">{{ isEn ? '4 hidden risks of managing a law firm in Excel' : 'Los 4 problemas ocultos de gestionar un despacho en Excel' }}</h2>
        </div>
        <div class="grid gap-6 md:grid-cols-2">
          <div v-for="(item, idx) in problems" :key="idx" class="benefit-card">
            <h3 class="benefit-title">{{ item.title }}</h3>
            <p class="benefit-desc">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- MATRIX TABLE -->
    <section class="section">
      <div class="apple-wrap-wide">
        <div class="table-container">
          <table class="vs-table">
            <thead>
              <tr>
                <th class="th-feature">{{ isEn ? 'Daily Task' : 'Tarea diaria' }}</th>
                <th class="th-lexbell">
                  <div class="brand-header">
                    <span class="brand-pill">Lexbell</span>
                    <span class="brand-badge">{{ isEn ? 'Recommended' : 'Recomendado' }}</span>
                  </div>
                </th>
                <th class="th-competitor">{{ isEn ? 'Excel & Folders' : 'Excel y Carpetas' }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, idx) in matrix" :key="idx">
                <td class="td-feature">{{ row.task }}</td>
                <td class="td-lexbell">
                  <div class="cell-wrap">
                    <span class="check-icon">✓</span>
                    <span>{{ row.lexbell }}</span>
                  </div>
                </td>
                <td class="td-competitor">
                  <div class="cell-wrap text-muted">
                    <span>{{ row.excel }}</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- FAQ SECTION -->
    <section class="section section-gray">
      <div class="apple-wrap" style="max-width: 780px;">
        <div class="text-center mb-10">
          <span class="eyebrow">{{ isEn ? 'ANSWERS & MIGRATION' : 'PREGUNTAS FRECUENTES' }}</span>
          <h2 class="h-section mt-2">{{ isEn ? 'Frequently Asked Questions' : 'Preguntas sobre la transición' }}</h2>
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
.benefit-card {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 28px 24px;
  box-shadow: var(--shadow-card);
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
