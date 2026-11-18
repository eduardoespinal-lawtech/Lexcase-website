<script setup lang="ts">
const { t, locale } = useI18n()
const localePath = useLocalePath()

const activeTab = ref(0)
const showcaseTabs = computed(() => {
  const isEn = locale.value === 'en'
  return [
    {
      id: 'cases',
      label: isEn ? 'Case Files' : 'Expedientes',
      category: isEn ? 'Procedural Management' : 'Gestión Procesal',
      title: isEn ? 'Every case detail in one structured view' : 'Todo tu expediente en una sola vista estructurada',
      desc: isEn
        ? 'Courts, procedural steps, opposing parties, and linked contacts organized locally with zero cloud reliance.'
        : 'Tribunales, trámites procesales, partes contrarias y documentos vinculados con claridad instantánea y cero servidores ajenos.',
      img: '/screenshots/showcase-tribunal.webp',
      pastelBg: 'bg-[#eef2f6] dark:bg-[#1a2130]'
    },
    {
      id: 'calendar',
      label: isEn ? 'Calendar & Terms' : 'Plazos y Audiencias',
      category: isEn ? 'Statutory Deadlines' : 'Agenda Procesal',
      title: isEn ? 'Never miss a hearing or statutory deadline' : 'Control riguroso de audiencias y plazos perentorios',
      desc: isEn
        ? 'Monthly court calendar with automatic deadline calculation in business and calendar days, backed by native offline alerts.'
        : 'Vista mensual de audiencias con cómputo automático en días hábiles y términos francos, con alertas nativas que funcionan sin internet.',
      img: '/screenshots/showcase-calendar-month.webp',
      pastelBg: 'bg-[#f5efe6] dark:bg-[#24201b]'
    },
    {
      id: 'docs',
      label: isEn ? 'Documents' : 'Documentos',
      category: isEn ? 'Document Vault' : 'Bóveda de Archivos',
      title: isEn ? 'Folders and instant PDF previews on your disk' : 'Carpetas y vista previa de PDFs directo en tu disco',
      desc: isEn
        ? 'Organize pleadings, contracts, and exhibits locally on your computer without uploading client files to external clouds.'
        : 'Organiza escritos, contratos y resoluciones en carpetas locales sin subir la información confidencial de tus clientes a la nube.',
      img: '/screenshots/showcase-docs.webp',
      pastelBg: 'bg-[#edf3ee] dark:bg-[#19231b]'
    },
    {
      id: 'connections',
      label: isEn ? 'Conflict Map' : 'Mapa de Vínculos',
      category: isEn ? 'Ethical Audit' : 'Auditoría Deontológica',
      title: isEn ? 'Visual network of cases, companies, and parties' : 'Grafo visual de relaciones y conflictos de interés',
      desc: isEn
        ? 'Spot connections between clients, companies, and counterparties before accepting a new legal matter.'
        : 'Detecta automáticamente vínculos entre clientes, empresas y contrapartes antes de firmar cualquier mandato judicial.',
      img: '/screenshots/showcase-connections.webp',
      pastelBg: 'bg-[#f3edf5] dark:bg-[#221a26]'
    },
    {
      id: 'billing',
      label: isEn ? 'Billing & Fees' : 'Honorarios & Gastos',
      category: isEn ? 'Financial Tracking' : 'Control Financiero',
      title: isEn ? 'Track collected fees, expenses, and pending balances' : 'Control total de honorarios, suplidos y cuentas por cobrar',
      desc: isEn
        ? 'Monitor collected fees, client disbursements, and pending balances in USD or DOP per case without accounting complexity.'
        : 'Visualiza al instante honorarios cobrados, gastos procesales y saldos pendientes por expediente en DOP o USD.',
      img: '/screenshots/showcase-billing.webp',
      pastelBg: 'bg-[#edf5f4] dark:bg-[#1a2524]'
    },
    {
      id: 'ai',
      label: isEn ? 'Local AI (MCP)' : 'IA Local (MCP)',
      category: isEn ? 'Artificial Intelligence' : 'Inteligencia Artificial',
      title: isEn ? '1-Click connection with your favorite AI assistants' : 'Tu práctica jurídica potenciada por IA en 1 clic',
      desc: isEn
        ? 'Let Google Antigravity, Claude Desktop, Cursor, and Codex securely query case context in read-only mode with absolute privacy.'
        : 'Conecta Google Antigravity, Claude Desktop, Cursor y Codex con un interruptor para resumir autos y preparar escritos sin salir a la nube.',
      img: '/screenshots/showcase-cases.webp',
      pastelBg: 'bg-[#f1eff7] dark:bg-[#201d2a]'
    }
  ]
})

const prevTab = () => {
  activeTab.value = (activeTab.value - 1 + showcaseTabs.value.length) % showcaseTabs.value.length
}
const nextTab = () => {
  activeTab.value = (activeTab.value + 1) % showcaseTabs.value.length
}

const openFaq = ref<number | null>(null)
const toggleFaq = (idx: number) => {
  openFaq.value = openFaq.value === idx ? null : idx
}

const faqs = computed(() => [
  { q: t('faq.q1'), a: t('faq.a1') },
  { q: t('faq.q2'), a: t('faq.a2') },
  { q: t('faq.q3'), a: t('faq.a3') },
  { q: t('faq.q4'), a: t('faq.a4') },
  { q: t('faq.q11'), a: t('faq.a11') },
  { q: t('faq.q12'), a: t('faq.a12') }
])

const toolkitTiles = computed(() => {
  const isEn = locale.value === 'en'
  return [
    {
      title: isEn ? 'Instant Global Search' : 'Búsqueda Global Instantánea',
      desc: isEn
        ? 'Find any case, client, tax ID, or hearing note in milliseconds with keyboard shortcut (⌘E / Ctrl+E).'
        : 'Encuentra expedientes, cédulas, clientes o notas procesales en milisegundos con el atajo (⌘E / Ctrl+E).',
      icon: 'search'
    },
    {
      title: isEn ? 'Native Keyboard Shortcuts' : 'Atajos de Teclado Nativos',
      desc: isEn
        ? 'Create cases, log hearings, and add tasks without touching the mouse. Built for keyboard-first efficiency.'
        : 'Nuevo caso, contacto, tarea o audiencia sin despegar las manos del teclado. ⌘ en Mac y Ctrl en Windows.',
      icon: 'keyboard'
    },
    {
      title: isEn ? 'Automatic Daily Backups' : 'Respaldos Automáticos Diarios',
      desc: isEn
        ? 'Automated scheduled JSON backups to any local drive, USB stick, or external folder you choose.'
        : 'Exportación programada a la carpeta o disco externo que elijas en formato estándar abierto JSON.',
      icon: 'backup'
    },
    {
      title: isEn ? 'Rich Text Notes Editor' : 'Editor de Notas Enriquecido',
      desc: isEn
        ? 'Draft hearing notes, strategy points, and client interview summaries directly inside each matter.'
        : 'Redacta notas de audiencia, puntos de derecho y resúmenes de reuniones directamente en cada caso.',
      icon: 'notes'
    },
    {
      title: isEn ? '90% Duplicate Detection' : 'Detección de Duplicados al 90%',
      desc: isEn
        ? 'Fuzzy-match algorithms detect existing clients and companies even when names have typos or missing accents.'
        : 'Algoritmo de coincidencia difusa que detecta clientes o empresas repetidas aunque cambie el nombre.',
      icon: 'users'
    },
    {
      title: isEn ? '100% Native Architecture' : 'Arquitectura 100% Nativa',
      desc: isEn
        ? 'Blazing fast desktop app for macOS (Apple Silicon & Intel) and 64-bit Windows with zero web latency.'
        : 'Rendimiento instantáneo (0 ms de lag) en macOS (Apple Silicon e Intel) y Windows 10/11 sin recargas web.',
      icon: 'desktop'
    }
  ]
})

useHead(() => {
  const isEn = locale.value === 'en'
  const title = isEn
    ? 'Lexbell: Legal Practice Management Software for Mac & Windows'
    : 'Lexbell: Software de Gestión de Casos para Abogados (Mac y Windows)'
  const desc = isEn
    ? 'Private desktop legal practice management software for Mac & Windows. Manage cases, court deadlines, clients, and documents 100% offline on your device.'
    : 'Software privado de gestión de expedientes para abogados en Mac y Windows. Organiza casos, clientes, plazos judiciales y documentos 100% locales en tu equipo.'

  return {
    title,
    meta: [
      { name: 'description', content: desc },
      { property: 'og:title', content: title },
      { property: 'og:description', content: desc },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: desc }
    ]
  }
})
</script>

<template>
  <div class="manus-page">

    <!-- =================== 1. HERO SECTION (MANUS EXACT REPLICA) =================== -->
    <section class="manus-hero-section" id="descargar">
      <div class="manus-container text-center">
        <!-- Eyebrow Pill / Badge -->
        <NuxtLink :to="localePath('features') + '#ia-mcp'" class="manus-hero-badge">
          <span class="manus-badge-dot"></span>
          <span>{{ t('home.newsBadge') }}: {{ locale === 'en' ? 'Local MCP AI & Office Network' : 'Conectores MCP & Red Local' }}</span>
          <svg class="w-3.5 h-3.5 ml-1 text-[var(--text-muted)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="9 18 15 12 9 6"/></svg>
        </NuxtLink>

        <!-- H1: Manus exact serif size (32px mobile -> 48px desktop) -->
        <h1 class="manus-hero-title">
          {{ t('home.heroTitle') }}
        </h1>

        <!-- Subtítulo: Manus exact sans size (16px, leading-6, max-w-[620px]) -->
        <p class="manus-hero-subtitle">
          {{ t('home.heroSubtitle') }}
        </p>

        <!-- CTA Principal: Píldora Negra redondeada (h-[40px] px-6 text-sm font-medium) -->
        <div class="manus-hero-cta-group">
          <AppDownload />
          <p class="manus-hero-note">
            {{ locale === 'en' ? 'Free up to 50 cases · No credit card · 100% Local on your disk' : 'Gratis hasta 50 casos · Sin tarjeta · 100% Local en tu disco' }}
          </p>
        </div>

        <!-- Collage / Lienzo Flotante estilo Manus -->
        <div class="manus-hero-canvas">
          <div class="manus-canvas-grid" aria-hidden="true"></div>

          <!-- Ventana Central de la Aplicación (Limpia sin elementos superpuestos) -->
          <div class="manus-canvas-main-window">
            <img
              src="/screenshots/showcase-tribunal.webp?v=1.1.22"
              :alt="locale === 'en' ? 'Lexbell Desktop App Interface' : 'Interfaz de la aplicación Lexbell'"
              class="w-full h-auto block rounded-[12px]"
              width="2000"
              height="1185"
              loading="eager"
              fetchpriority="high"
            />
          </div>
        </div>
      </div>
    </section>


    <!-- =================== 2. SHOWCASE CON TABS 50/50 SPLIT (MANUS REPLICA) =================== -->
    <section class="manus-section" id="producto">
      <div class="manus-container">
        <!-- Encabezado de Sección: H2 Serif (28px -> 40px) -->
        <div class="text-center max-w-[680px] mx-auto mb-10">
          <span class="manus-eyebrow">{{ locale === 'en' ? 'INSIDE LEXBELL' : 'EXPLORA LA APP POR DENTRO' }}</span>
          <h2 class="manus-section-title">
            {{ locale === 'en' ? 'Built for clarity, speed, and zero clutter' : 'Diseñada para trabajar con claridad y rapidez' }}
          </h2>
          <p class="manus-section-subtitle">
            {{ locale === 'en'
              ? 'Select a module to see how Lexbell organizes your entire legal practice locally.'
              : 'Recorre cada módulo y descubre cómo Lexbell organiza tu oficina legal sin depender de la nube.' }}
          </p>
        </div>

        <!-- Barra de Tabs en Píldora (Manus exact tabs) -->
        <div class="manus-tabs-bar" role="tablist">
          <button
            v-for="(tab, idx) in showcaseTabs"
            :key="tab.id"
            type="button"
            role="tab"
            :aria-selected="activeTab === idx"
            class="manus-tab-btn"
            :class="{ 'is-active': activeTab === idx }"
            @click="activeTab = idx"
          >
            {{ tab.label }}
          </button>
        </div>

        <!-- Tarjeta Amplia 50/50 Split (min-h-[516px] rounded-[16px]) -->
        <div class="manus-card mt-6">
          <div class="grid grid-cols-1 md:grid-cols-2 items-center min-h-[480px]">
            <!-- Columna Izquierda: Información Editorial -->
            <div class="p-8 md:p-14 flex flex-col justify-center text-left">
              <span class="manus-card-eyebrow">{{ showcaseTabs[activeTab].category }}</span>
              <h3 class="manus-card-title mt-2">
                {{ showcaseTabs[activeTab].title }}
              </h3>
              <p class="manus-card-desc mt-4">
                {{ showcaseTabs[activeTab].desc }}
              </p>
              <div class="mt-8">
                <NuxtLink :to="localePath('features')" class="manus-inline-link">
                  <span>{{ locale === 'en' ? 'Explore this feature' : 'Ver cómo funciona' }}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </NuxtLink>
              </div>
            </div>

            <!-- Columna Derecha: Contenedor Pastel con Captura de Pantalla -->
            <div class="p-4 md:p-8 h-full flex items-center justify-center">
              <div class="manus-mockup-frame" :class="showcaseTabs[activeTab].pastelBg">
                <img
                  :key="showcaseTabs[activeTab].id"
                  :src="showcaseTabs[activeTab].img"
                  :alt="showcaseTabs[activeTab].title"
                  class="w-full h-auto block rounded-[10px] shadow-sm transition-opacity duration-300"
                  width="2000"
                  height="1185"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <!-- Controles Inferiores de Paginación -->
          <div class="manus-card-controls">
            <button
              type="button"
              class="manus-ctrl-btn"
              :aria-label="locale === 'en' ? 'Previous tab' : 'Pestaña anterior'"
              @click="prevTab"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <span class="text-xs text-[var(--text-muted)] font-medium font-mono">
              0{{ activeTab + 1 }} / 0{{ showcaseTabs.length }}
            </span>
            <button
              type="button"
              class="manus-ctrl-btn"
              :aria-label="locale === 'en' ? 'Next tab' : 'Pestaña siguiente'"
              @click="nextTab"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>


    <!-- =================== 3. BLOQUES EN ZIGZAG ("SOLO LEXBELL PUEDE HACERLO") =================== -->
    <section class="manus-section">
      <div class="manus-container">
        <div class="text-center max-w-[680px] mx-auto mb-14">
          <span class="manus-eyebrow">{{ locale === 'en' ? 'WHY LEXBELL' : 'POR QUÉ LEXBELL' }}</span>
          <h2 class="manus-section-title">
            {{ locale === 'en' ? 'Built from the ground up for confidentiality' : 'Construido desde cero para la confidencialidad' }}
          </h2>
          <p class="manus-section-subtitle">
            {{ locale === 'en'
              ? 'Traditional cloud software exposes client data to external servers. Lexbell guarantees local sovereignty.'
              : 'El software web tradicional sube tus expedientes a servidores ajenos. Lexbell garantiza soberanía local.' }}
          </p>
        </div>

        <!-- Stack Vertical de 4 Bloques Alternados 50/50 -->
        <div class="flex flex-col gap-10">

          <!-- Bloque 1: Secreto Profesional (100% Local) -->
          <div class="manus-card grid grid-cols-1 md:grid-cols-2 items-center">
            <div class="p-8 md:p-14 text-left">
              <span class="manus-card-eyebrow">{{ locale === 'en' ? 'ATTORNEY-CLIENT PRIVILEGE' : 'SECRETO PROFESIONAL' }}</span>
              <h3 class="manus-card-title mt-2">
                {{ locale === 'en' ? 'Your case files remain encrypted solely on your machine.' : 'Tus expedientes viven cifrados únicamente en tu equipo.' }}
              </h3>
              <p class="manus-card-desc mt-4">
                {{ locale === 'en'
                  ? 'All cases, court records, notes, and clients are stored locally with AES-256 encryption. Zero tracking, zero third-party telemetry, and zero cloud leaks.'
                  : 'Cumple con tu deber deontológico. Todos tus expedientes, notas y documentos se almacenan de forma segura en tu propio disco. Nadie más tiene acceso.' }}
              </p>
              <div class="mt-8">
                <NuxtLink :to="localePath('features') + '#documentos'" class="manus-inline-link">
                  <span>{{ locale === 'en' ? 'Learn about our local architecture' : 'Conocer la arquitectura local' }}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </NuxtLink>
              </div>
            </div>
            <div class="p-4 md:p-8">
              <div class="manus-mockup-frame bg-[#eef2f6] dark:bg-[#1a2130]">
                <img src="/screenshots/showcase-cases.webp" alt="Casos en Lexbell" class="w-full h-auto block rounded-[10px] shadow-sm" loading="lazy" />
              </div>
            </div>
          </div>

          <!-- Bloque 2: Conectores MCP (IA Local) -> Invertido -->
          <div class="manus-card grid grid-cols-1 md:grid-cols-2 items-center">
            <div class="p-4 md:p-8 md:order-1">
              <div class="manus-mockup-frame bg-[#f1eff7] dark:bg-[#201d2a]">
                <!-- Panel Gráfico de los Conectores -->
                <div class="p-6 flex flex-col gap-3 w-full">
                  <div class="flex items-center justify-between pb-3 border-b border-[var(--border)]">
                    <div class="flex items-center gap-2">
                      <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                      <span class="text-xs font-semibold text-[var(--text)] uppercase tracking-wider">Local MCP Server · Port 3845</span>
                    </div>
                    <span class="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">Read-Only</span>
                  </div>
                  <div class="grid grid-cols-2 gap-2 text-left">
                    <div class="p-2.5 rounded-lg bg-[var(--bg)] border border-[var(--border)] flex items-center gap-2">
                      <span class="w-2 h-2 rounded-full bg-blue-500"></span>
                      <span class="text-xs font-semibold text-[var(--text)]">Google Antigravity</span>
                    </div>
                    <div class="p-2.5 rounded-lg bg-[var(--bg)] border border-[var(--border)] flex items-center gap-2">
                      <span class="w-2 h-2 rounded-full bg-amber-500"></span>
                      <span class="text-xs font-semibold text-[var(--text)]">Claude Desktop</span>
                    </div>
                    <div class="p-2.5 rounded-lg bg-[var(--bg)] border border-[var(--border)] flex items-center gap-2">
                      <span class="w-2 h-2 rounded-full bg-indigo-500"></span>
                      <span class="text-xs font-semibold text-[var(--text)]">Cursor IDE</span>
                    </div>
                    <div class="p-2.5 rounded-lg bg-[var(--bg)] border border-[var(--border)] flex items-center gap-2">
                      <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                      <span class="text-xs font-semibold text-[var(--text)]">OpenAI Codex</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-8 md:p-14 text-left md:order-2">
              <span class="manus-card-eyebrow">{{ locale === 'en' ? 'LOCAL ARTIFICIAL INTELLIGENCE' : 'INTELIGENCIA ARTIFICIAL LOCAL' }}</span>
              <h3 class="manus-card-title mt-2">
                {{ locale === 'en' ? 'MCP Connectors: Your law practice powered by local AI.' : 'Conectores MCP: Tu práctica jurídica potenciada por IA.' }}
              </h3>
              <p class="manus-card-desc mt-4">
                {{ locale === 'en'
                  ? 'Connect Google Antigravity, Claude, Cursor, and Codex directly to Lexbell in one click. Your AI assistant answers questions about cases, drafts summaries, and checks deadlines without uploading confidential files to any cloud.'
                  : 'Conecta Lexbell directamente con tus asistentes de IA en un solo clic. Funciona mediante un servidor MCP en tu propio ordenador en modo solo lectura: ningún dato procesal sale a internet ni entrena modelos ajenos.' }}
              </p>
              <div class="mt-8">
                <NuxtLink :to="localePath('features') + '#ia-mcp'" class="manus-inline-link">
                  <span>{{ locale === 'en' ? 'Explore MCP connectors' : 'Ver conectores MCP en detalle' }}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- Bloque 3: Compartir en Oficina (Red Local P2P) -->
          <div class="manus-card grid grid-cols-1 md:grid-cols-2 items-center">
            <div class="p-8 md:p-14 text-left">
              <span class="manus-card-eyebrow">{{ locale === 'en' ? 'OFFICE COLLABORATION' : 'COLABORACIÓN SIN NUBE' }}</span>
              <h3 class="manus-card-title mt-2">
                {{ locale === 'en' ? 'Share in Office: Teamwork across your local network.' : 'Compartir en oficina: Trabajo en equipo dentro de tu red local.' }}
              </h3>
              <p class="manus-card-desc mt-4">
                {{ locale === 'en'
                  ? 'Collaborate in real time with colleagues and staff across your firm over your office Wi-Fi or Ethernet. PIN-protected pairing keeps all case records insulated within your physical office.'
                  : 'Trabaja en tiempo real con los demás abogados y colaboradores de tu despacho a través de la red local (Wi-Fi o cable). Conexión protegida por PIN de 6 dígitos sin pasar jamás por servidores de internet.' }}
              </p>
              <div class="mt-8">
                <NuxtLink :to="localePath('features') + '#oficina'" class="manus-inline-link">
                  <span>{{ locale === 'en' ? 'Learn about office sharing' : 'Ver cómo compartir en oficina' }}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </NuxtLink>
              </div>
            </div>
            <div class="p-4 md:p-8">
              <div class="manus-mockup-frame bg-[#edf5f4] dark:bg-[#1a2524]">
                <div class="p-6 w-full flex flex-col gap-4 text-left">
                  <div class="p-4 rounded-xl bg-[var(--bg)] border border-[var(--border)]">
                    <div class="flex items-center justify-between">
                      <span class="text-xs font-bold text-[var(--text)] uppercase tracking-wider">Host Principal · Wi-Fi Oficina</span>
                      <span class="text-xs font-mono bg-blue-500/10 text-blue-500 px-2 py-0.5 rounded">192.168.1.42</span>
                    </div>
                    <div class="mt-3 flex items-center justify-between">
                      <div class="text-xs text-[var(--text-muted)]">PIN de Emparejamiento:</div>
                      <div class="text-lg font-mono font-bold tracking-widest text-[var(--text)]">849 201</div>
                    </div>
                  </div>
                  <div class="flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    <span>Cifrado P2P local · Cero servidores en internet</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Bloque 4: Mapa de Vínculos y Conflictos -> Invertido -->
          <div class="manus-card grid grid-cols-1 md:grid-cols-2 items-center">
            <div class="p-4 md:p-8 md:order-1">
              <div class="manus-mockup-frame bg-[#f3edf5] dark:bg-[#221a26]">
                <img src="/screenshots/showcase-connections.webp" alt="Mapa de Vínculos en Lexbell" class="w-full h-auto block rounded-[10px] shadow-sm" loading="lazy" />
              </div>
            </div>
            <div class="p-8 md:p-14 text-left md:order-2">
              <span class="manus-card-eyebrow">{{ locale === 'en' ? 'ETHICAL CONFLICT PREVENTION' : 'AUDITORÍA DEONTOLÓGICA' }}</span>
              <h3 class="manus-card-title mt-2">
                {{ locale === 'en' ? 'Instant conflict detection with the Relationship Map.' : 'Detecta conflictos de interés al instante con el Mapa de Vínculos.' }}
              </h3>
              <p class="manus-card-desc mt-4">
                {{ locale === 'en'
                  ? 'An interactive graph discovers cross-connections between individuals, corporations, and previous cases. Avoid ethical incompatibilities before taking on a new client.'
                  : 'El grafo interactivo de Lexbell descubre relaciones cruzadas entre personas físicas, empresas y casos anteriores. Identifica incompatibilidades antes de firmar cualquier mandato.' }}
              </p>
              <div class="mt-8">
                <NuxtLink :to="localePath('features') + '#conflictos'" class="manus-inline-link">
                  <span>{{ locale === 'en' ? 'Discover relationship mapping' : 'Explorar el mapa de relaciones' }}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </NuxtLink>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>


    <!-- =================== 4. GRID DE CAPACIDADES (TOOLKIT GRID 2X3) =================== -->
    <section class="manus-section">
      <div class="manus-container">
        <div class="text-center max-w-[680px] mx-auto mb-12">
          <span class="manus-eyebrow">{{ locale === 'en' ? 'LEGAL TOOLKIT' : 'CAPACIDADES CLAVE' }}</span>
          <h2 class="manus-section-title">
            {{ locale === 'en' ? 'Everything an independent legal office needs' : 'Todo lo que un despacho independiente necesita' }}
          </h2>
          <p class="manus-section-subtitle">
            {{ locale === 'en'
              ? 'Carefully crafted features that eliminate administrative friction and save hours every week.'
              : 'Detalles y herramientas pensadas para eliminar la carga administrativa y agilizar el día a día.' }}
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <article v-for="(tile, i) in toolkitTiles" :key="i" class="manus-card p-6 text-left">
            <div class="flex items-center gap-3 mb-3">
              <div class="manus-tile-icon">
                <svg v-if="tile.icon === 'search'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                <svg v-else-if="tile.icon === 'keyboard'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="20" height="14" rx="2"/><line x1="6" y1="10" x2="6" y2="10"/><line x1="10" y1="10" x2="10" y2="10"/><line x1="14" y1="10" x2="14" y2="10"/><line x1="18" y1="10" x2="18" y2="10"/></svg>
                <svg v-else-if="tile.icon === 'backup'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                <svg v-else-if="tile.icon === 'notes'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/></svg>
                <svg v-else-if="tile.icon === 'users'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/></svg>
                <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>
              </div>
              <h3 class="text-base font-semibold text-[var(--text)] tracking-tight">{{ tile.title }}</h3>
            </div>
            <p class="text-sm leading-relaxed text-[var(--text-muted)] m-0">{{ tile.desc }}</p>
          </article>
        </div>
      </div>
    </section>


    <!-- =================== 5. ECOSISTEMA DE CONECTORES (FILA DE 5) =================== -->
    <section class="manus-section">
      <div class="manus-container text-center">
        <span class="manus-eyebrow">{{ locale === 'en' ? 'LOCAL ECOSYSTEM' : 'ECOSISTEMA LOCAL' }}</span>
        <h2 class="manus-section-title">
          {{ locale === 'en' ? 'Connectors for your legal workflow' : 'Conectores para tu práctica jurídica' }}
        </h2>
        <p class="manus-section-subtitle mb-10">
          {{ locale === 'en'
            ? 'Connect with leading AI tools and local office workstations with zero configuration.'
            : 'Enlaza con los principales entornos de IA y puestos de trabajo de la oficina sin código.' }}
        </p>

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          <div class="manus-connector-card">
            <div class="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center mb-3">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
            </div>
            <div class="text-sm font-semibold text-[var(--text)]">Antigravity</div>
            <div class="text-xs text-[var(--text-muted)] mt-0.5">Google IDE</div>
          </div>

          <div class="manus-connector-card">
            <div class="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center mb-3">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
            </div>
            <div class="text-sm font-semibold text-[var(--text)]">Claude</div>
            <div class="text-xs text-[var(--text-muted)] mt-0.5">Desktop MCP</div>
          </div>

          <div class="manus-connector-card">
            <div class="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-500 flex items-center justify-center mb-3">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            </div>
            <div class="text-sm font-semibold text-[var(--text)]">Cursor</div>
            <div class="text-xs text-[var(--text-muted)] mt-0.5">Context Agent</div>
          </div>

          <div class="manus-connector-card">
            <div class="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-3">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m9 8 6 4-6 4Z"/></svg>
            </div>
            <div class="text-sm font-semibold text-[var(--text)]">Codex</div>
            <div class="text-xs text-[var(--text-muted)] mt-0.5">OpenAI Agent</div>
          </div>

          <div class="manus-connector-card is-lan col-span-2 sm:col-span-1">
            <div class="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-3">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>
            </div>
            <div class="text-sm font-semibold text-[var(--text)]">Red Local</div>
            <div class="text-xs text-emerald-600 dark:text-emerald-400 font-medium mt-0.5">PIN P2P LAN</div>
          </div>
        </div>
      </div>
    </section>


    <!-- =================== 6. PREGUNTAS FRECUENTES (ACORDEÓN LINEAL MANUS) =================== -->
    <section class="manus-section" id="faq">
      <div class="manus-container max-w-[780px]">
        <div class="text-center mb-12">
          <span class="manus-eyebrow">{{ t('nav.faq') }}</span>
          <h2 class="manus-section-title">{{ t('faq.title') }}</h2>
          <p class="manus-section-subtitle">{{ t('faq.subtitle') }}</p>
        </div>

        <div class="manus-faq-list">
          <div
            v-for="(item, idx) in faqs"
            :key="idx"
            class="manus-faq-item"
            :class="{ 'is-open': openFaq === idx }"
          >
            <button
              type="button"
              class="manus-faq-btn"
              :aria-expanded="openFaq === idx"
              @click="toggleFaq(idx)"
            >
              <span class="text-base font-medium text-[var(--text)] text-left">{{ item.q }}</span>
              <svg class="manus-faq-cross" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
            <div v-show="openFaq === idx" class="manus-faq-answer">
              <p class="text-base leading-relaxed text-[var(--text-muted)] m-0">{{ item.a }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- =================== 7. BANNER CTA FINAL (ALTO CONTRASTE + AMBIENT GLOW MANUS) =================== -->
    <section class="manus-section pt-0">
      <div class="manus-container">
        <div class="manus-final-cta-card">
          <div class="manus-ambient-glow" aria-hidden="true"></div>

          <span class="manus-final-badge">{{ locale === 'en' ? 'START FOR FREE' : 'EMPIEZA GRATIS HOY' }}</span>

          <h2 class="manus-final-title">
            {{ locale === 'en' ? 'Bring order and privacy to your legal practice' : 'Pon orden y privacidad en tu despacho legal' }}
          </h2>

          <p class="manus-final-sub">
            {{ locale === 'en'
              ? 'Download Lexbell for Mac or Windows. Up to 50 active cases free forever, 100% local and private.'
              : 'Descarga Lexbell para Mac o Windows. Hasta 50 expedientes activos gratis para siempre, 100% local y privado.' }}
          </p>

          <div class="manus-final-downloads">
            <AppDownload center />
          </div>

          <p class="manus-final-note">
            {{ locale === 'en' ? 'Installs in under 1 minute · No credit card required' : 'Instalación en menos de 1 minuto · Sin tarjeta de crédito' }}
          </p>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
/* =================== SISTEMA DE DISEÑO MANUS =================== */
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

.manus-section-title {
  font-family: Newsreader, Charter, "Bitstream Charter", "Sitka Text", Cambria, Georgia, serif;
  font-size: clamp(28px, 3.8vw, 40px);
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: var(--text);
  max-width: 680px;
  margin: 0 auto 14px;
  text-wrap: balance;
}

.manus-section-subtitle {
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: var(--text-muted);
  max-width: 680px;
  margin-left: auto;
  margin-right: auto;
  text-wrap: balance;
}

/* === 1. HERO === */
.manus-hero-section {
  padding-top: clamp(56px, 8vw, 88px);
  padding-bottom: clamp(48px, 6vw, 72px);
  background: var(--bg);
  position: relative;
}

.manus-hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 5px 14px 5px 8px;
  border-radius: 9999px;
  background: var(--card-bg);
  border: 1px solid var(--border);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: var(--text);
  text-decoration: none;
  margin-bottom: 24px;
  transition: all 0.2s ease;
}

.manus-hero-badge:hover {
  border-color: var(--border-dark);
  transform: translateY(-1px);
}

.manus-badge-dot {
  width: 7px;
  height: 7px;
  border-radius: 9999px;
  background: #007aff;
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

.manus-hero-cta-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-bottom: 48px;
}

.manus-hero-note {
  font-size: 13px;
  color: var(--text-light);
  font-weight: 500;
  margin: 0;
}

/* === LIENZO FLOTANTE HERO === */
.manus-hero-canvas {
  position: relative;
  max-width: 980px;
  margin: 0 auto;
  padding: 16px;
}

.manus-canvas-grid {
  position: absolute;
  inset: -30px -20px;
  background-image:
    radial-gradient(ellipse at 50% 50%, rgba(59, 130, 246, 0.12) 0%, transparent 65%),
    linear-gradient(to right, rgba(148, 163, 184, 0.1) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(148, 163, 184, 0.1) 1px, transparent 1px);
  background-size: 100% 100%, 32px 32px, 32px 32px;
  mask-image: radial-gradient(ellipse at center, #000 40%, transparent 75%);
  -webkit-mask-image: radial-gradient(ellipse at center, #000 40%, transparent 75%);
  pointer-events: none;
}

.manus-canvas-main-window {
  position: relative;
  z-index: 1;
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 14px;
  box-shadow:
    0 20px 48px -12px rgba(0, 0, 0, 0.2),
    0 6px 16px -4px rgba(0, 0, 0, 0.08);
}

/* === 2. TABS & CARDS 50/50 === */
.manus-tabs-bar {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
}

.manus-tab-btn {
  height: 40px;
  padding: 0 18px;
  border-radius: 9999px;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-muted);
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.2s ease;
}

.manus-tab-btn:hover {
  color: var(--text);
  background: rgba(0, 0, 0, 0.03);
}

.dark .manus-tab-btn:hover {
  background: rgba(255, 255, 255, 0.04);
}

.manus-tab-btn.is-active {
  color: var(--text);
  background: var(--card-bg);
  border-color: var(--border);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
}

/* Tarjeta amplia estilo Manus (sin bordes duros, tonalidad suave) */
.manus-card {
  background: var(--bg-section);
  border-radius: 16px;
  border: 1px solid var(--border);
  overflow: hidden;
  position: relative;
}

.manus-card-eyebrow {
  font-size: 14px;
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

.manus-inline-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 600;
  color: var(--text);
  text-decoration: none;
  transition: gap 0.2s ease;
}

.manus-inline-link:hover {
  gap: 9px;
  color: var(--accent);
}

.manus-mockup-frame {
  width: 100%;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.manus-card-controls {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  padding: 14px 24px;
  border-top: 1px solid var(--border);
}

.manus-ctrl-btn {
  width: 34px;
  height: 34px;
  border-radius: 9999px;
  background: var(--card-bg);
  border: 1px solid var(--border);
  color: var(--text);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.manus-ctrl-btn:hover {
  border-color: var(--border-dark);
}

/* === 4. TOOLKIT === */
.manus-tile-icon {
  width: 34px;
  height: 34px;
  border-radius: 8px;
  background: var(--bg);
  border: 1px solid var(--border);
  color: var(--text);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

/* === 5. CONECTORES === */
.manus-connector-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 14px;
  background: var(--bg-section);
  border: 1px solid var(--border);
  border-radius: 14px;
  transition: all 0.2s ease;
}

.manus-connector-card:hover {
  border-color: var(--border-dark);
  transform: translateY(-2px);
}

.manus-connector-card.is-lan {
  border-color: rgba(16, 185, 129, 0.25);
  background: rgba(16, 185, 129, 0.03);
}

/* === 6. FAQ LINEAL === */
.manus-faq-list {
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--border);
}

.manus-faq-item {
  border-bottom: 1px solid var(--border);
}

.manus-faq-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  background: transparent;
  border: none;
  cursor: pointer;
}

.manus-faq-cross {
  color: var(--text-muted);
  transition: transform 0.25s ease;
  flex-shrink: 0;
  margin-left: 16px;
}

.manus-faq-item.is-open .manus-faq-cross {
  transform: rotate(45deg);
}

.manus-faq-answer {
  padding-bottom: 20px;
  text-align: left;
}

/* === 7. FINAL CTA (MANUS EXACT AMBIENT GLOW) === */
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
