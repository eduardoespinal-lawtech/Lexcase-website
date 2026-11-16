<script setup lang="ts">
const { t, locale } = useI18n()

definePageMeta({ name: 'features' })

useHead(() => {
  const isEn = locale.value === 'en'
  const title = isEn
    ? 'Features: Case Management, Deadlines & Clients — Lexbell'
    : 'Características: Gestión de Casos, Plazos y Clientes — Lexbell'
  const desc = isEn
    ? 'Complete case management, automatic court deadline calculation, client records, and offline documents for Mac and Windows.'
    : 'Gestión integral de expedientes, cálculo automático de plazos procesales, control de clientes y documentos en Mac y Windows.'

  return {
    title,
    meta: [
      { name: 'description', content: desc },
      { property: 'og:title', content: title },
      { property: 'og:description', content: desc }
    ]
  }
})

const caseTypes = computed(() => [
  { name: t('features.sp1TypeJudicial') },
  { name: t('features.sp1TypeAdmin') },
  { name: t('features.sp1TypeMig') },
  { name: t('features.sp1TypeEmp') },
  { name: t('features.sp1TypeAlq') },
  { name: t('features.sp1TypeCv') }
])

const tiles = computed(() => [
  { icon: 'search',    title: t('features.tile1Title'), body: t('features.tile1Body') },
  { icon: 'keyboard',  title: t('features.tile2Title'), body: t('features.tile2Body') },
  { icon: 'users',     title: t('features.tile3Title'), body: t('features.tile3Body') },
  { icon: 'backup',    title: t('features.tile4Title'), body: t('features.tile4Body') },
  { icon: 'notes',     title: t('features.tile5Title'), body: t('features.tile5Body') },
  { icon: 'design',    title: t('features.tile6Title'), body: t('features.tile6Body') }
])
</script>

<template>
  <div class="features-page">
    <!-- HERO -->
    <section class="section">
      <div class="apple-wrap text-center">
        <span class="eyebrow">{{ locale === 'en' ? 'CORE CAPABILITIES' : 'CAPACIDADES DEL SISTEMA' }}</span>
        <h1 class="h-display mt-2">{{ t('features.title') }}</h1>
        <p class="subtitle mt-5 mx-auto" style="max-width: 680px;">{{ t('features.subtitle') }}</p>
      </div>
    </section>

    <!-- ========= SPOTLIGHT 1 · Expedientes ========= -->
    <section id="expedientes" class="section section-gray scroll-mt-16">
      <div class="apple-wrap-wide grid gap-12 items-center lg:grid-cols-2">
        <div>
          <span class="module-eyebrow">{{ t('features.sp1Eyebrow') }}</span>
          <h2 class="h-section mt-2">{{ t('features.sp1Title') }}</h2>
          <p class="subtitle mt-4">{{ t('features.sp1Body') }}</p>
          <div class="mt-6 flex flex-wrap gap-2">
            <span v-for="tt in caseTypes" :key="tt.name" class="type-pill">
              {{ tt.name }}
            </span>
          </div>
        </div>
        <div class="apple-window-box">
          <img
            src="/screenshots/showcase-cases.webp?v=1.1.19"
            :alt="locale === 'en' ? 'Cases in Lexbell' : 'Expedientes en Lexbell'"
            class="apple-app-img"
            loading="lazy"
            width="2000"
            height="1185"
          />
        </div>
      </div>
    </section>

    <!-- ========= SPOTLIGHT 2 · Plazos y audiencias ========= -->
    <section id="agenda" class="section scroll-mt-16">
      <div class="apple-wrap-wide grid gap-12 items-center lg:grid-cols-2">
        <div class="lg:order-2">
          <span class="module-eyebrow">{{ t('features.sp2Eyebrow') }}</span>
          <h2 class="h-section mt-2">{{ t('features.sp2Title') }}</h2>
          <p class="subtitle mt-4">{{ t('features.sp2Body') }}</p>
        </div>
        <div class="apple-window-box lg:order-1">
          <img
            src="/screenshots/showcase-calendar-month.webp?v=1.1.19"
            :alt="locale === 'en' ? 'Procedural Calendar in Lexbell' : 'Agenda Procesal en Lexbell'"
            class="apple-app-img"
            loading="lazy"
            width="2000"
            height="1185"
          />
        </div>
      </div>
    </section>

    <!-- ========= SPOTLIGHT 3 · Documentos y respaldos ========= -->
    <section id="documentos" class="section section-gray scroll-mt-16">
      <div class="apple-wrap-wide grid gap-12 items-center lg:grid-cols-2">
        <div>
          <span class="module-eyebrow">{{ t('features.sp3Eyebrow') }}</span>
          <h2 class="h-section mt-2">{{ t('features.sp3Title') }}</h2>
          <p class="subtitle mt-4">{{ t('features.sp3Body') }}</p>
        </div>
        <div class="apple-window-box">
          <img
            src="/screenshots/showcase-docs.webp?v=1.1.19"
            :alt="locale === 'en' ? 'Document Vault in Lexbell' : 'Bóveda de Documentos en Lexbell'"
            class="apple-app-img"
            loading="lazy"
            width="2000"
            height="1185"
          />
        </div>
      </div>
    </section>

    <!-- ========= SPOTLIGHT 4 · Mapa de vínculos ========= -->
    <section id="conflictos" class="section scroll-mt-16">
      <div class="apple-wrap-wide grid gap-12 items-center lg:grid-cols-2">
        <div class="lg:order-2">
          <span class="module-eyebrow">{{ t('features.sp5Eyebrow') }}</span>
          <h2 class="h-section mt-2">{{ t('features.sp5Title') }}</h2>
          <p class="subtitle mt-4">{{ t('features.sp5Body') }}</p>
        </div>
        <div class="apple-window-box lg:order-1">
          <img
            src="/screenshots/showcase-connections.webp?v=1.1.19"
            :alt="locale === 'en' ? 'Relationship and Conflict Map in Lexbell' : 'Mapa de Vínculos y Conflictos en Lexbell'"
            class="apple-app-img"
            loading="lazy"
            width="2000"
            height="1185"
          />
        </div>
      </div>
    </section>

    <!-- ========= SPOTLIGHT 5 · Facturación y Honorarios ========= -->
    <section class="section section-gray">
      <div class="apple-wrap-wide grid gap-12 items-center lg:grid-cols-2">
        <div>
          <span class="module-eyebrow">{{ locale === 'en' ? 'FEES & EXPENSES' : 'HONORARIOS Y GASTOS' }}</span>
          <h2 class="h-section mt-2">{{ locale === 'en' ? 'Control fees, advances, and pending balances.' : 'Controla honorarios, gastos y saldos por cobrar.' }}</h2>
          <p class="subtitle mt-4">
            {{ locale === 'en'
              ? 'Keep track of collected fees, client disbursements, and overdue balances per case in USD or DOP without complex accounting software.'
              : 'Visualiza al instante cuánto has cobrado, los gastos reembolsables y el saldo pendiente de cada expediente en DOP o USD, sin programas contables complejos.' }}
          </p>
        </div>
        <div class="apple-window-box">
          <img
            src="/screenshots/showcase-billing.webp?v=1.1.19"
            :alt="locale === 'en' ? 'Billing and Fees Control in Lexbell' : 'Facturación y Control de Honorarios en Lexbell'"
            class="apple-app-img"
            loading="lazy"
            width="2000"
            height="1185"
          />
        </div>
      </div>
    </section>

    <!-- ========= SPOTLIGHT · Conectores MCP (IA Local) ========= -->
    <section id="ia-mcp" class="section scroll-mt-16">
      <div class="apple-wrap-wide grid gap-12 items-center lg:grid-cols-2">
        <div>
          <span class="module-eyebrow">{{ t('features.mcpEyebrow') }}</span>
          <h2 class="h-section mt-2">{{ t('features.mcpTitle') }}</h2>
          <p class="subtitle mt-4">{{ t('features.mcpBody') }}</p>

          <div class="mt-8 space-y-4">
            <div class="flex items-start gap-3">
              <span class="feat-bullet-icon" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 8.5 6.5 11.5 12.5 4.5" /></svg>
              </span>
              <div>
                <strong class="text-sm font-semibold text-[var(--text)]">{{ t('features.mcpPoint1Title') }}:</strong>
                <span class="text-sm text-[var(--text-muted)] ml-1">{{ t('features.mcpPoint1Desc') }}</span>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <span class="feat-bullet-icon" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 8.5 6.5 11.5 12.5 4.5" /></svg>
              </span>
              <div>
                <strong class="text-sm font-semibold text-[var(--text)]">{{ t('features.mcpPoint2Title') }}:</strong>
                <span class="text-sm text-[var(--text-muted)] ml-1">{{ t('features.mcpPoint2Desc') }}</span>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <span class="feat-bullet-icon" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 8.5 6.5 11.5 12.5 4.5" /></svg>
              </span>
              <div>
                <strong class="text-sm font-semibold text-[var(--text)]">{{ t('features.mcpPoint3Title') }}:</strong>
                <span class="text-sm text-[var(--text-muted)] ml-1">{{ t('features.mcpPoint3Desc') }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Tarjeta Visual MCP -->
        <div class="mcp-visual-box">
          <div class="mcp-visual-header">
            <div class="flex items-center gap-2">
              <span class="status-dot-green"></span>
              <span class="text-xs font-semibold tracking-wide uppercase text-[var(--text-muted)]">Local MCP Server</span>
            </div>
            <span class="badge-read-only">{{ locale === 'en' ? 'Read-Only · 100% Local' : 'Solo Lectura · 100% Local' }}</span>
          </div>

          <div class="mcp-assistants-grid">
            <div class="mcp-assistant-item">
              <div class="mcp-icon-circle bg-blue-500/10 text-blue-500">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
              </div>
              <div class="text-left">
                <div class="font-semibold text-sm text-[var(--text)]">Google Antigravity</div>
                <div class="text-xs text-[var(--text-muted)]">{{ locale === 'en' ? '1-Click connection' : 'Conexión directa en 1 clic' }}</div>
              </div>
            </div>

            <div class="mcp-assistant-item">
              <div class="mcp-icon-circle bg-amber-500/10 text-amber-500">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
              </div>
              <div class="text-left">
                <div class="font-semibold text-sm text-[var(--text)]">Claude Desktop</div>
                <div class="text-xs text-[var(--text-muted)]">{{ locale === 'en' ? 'Native JSON config' : 'Configuración nativa JSON' }}</div>
              </div>
            </div>

            <div class="mcp-assistant-item">
              <div class="mcp-icon-circle bg-indigo-500/10 text-indigo-500">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              </div>
              <div class="text-left">
                <div class="font-semibold text-sm text-[var(--text)]">Cursor IDE</div>
                <div class="text-xs text-[var(--text-muted)]">{{ locale === 'en' ? 'Active case context' : 'Contexto procesal activo' }}</div>
              </div>
            </div>

            <div class="mcp-assistant-item">
              <div class="mcp-icon-circle bg-emerald-500/10 text-emerald-500">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m9 8 6 4-6 4Z"/></svg>
              </div>
              <div class="text-left">
                <div class="font-semibold text-sm text-[var(--text)]">OpenAI Codex</div>
                <div class="text-xs text-[var(--text-muted)]">{{ locale === 'en' ? 'Standard MCP protocol' : 'Protocolo MCP estándar' }}</div>
              </div>
            </div>
          </div>

          <div class="mcp-visual-footer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            <span>{{ locale === 'en' ? 'Client data never leaves your device or trains third-party models.' : 'Tus datos procesales nunca salen de tu ordenador ni entrenan modelos de terceros.' }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ========= SPOTLIGHT · Compartir en oficina (Red Local) ========= -->
    <section id="oficina" class="section section-gray scroll-mt-16">
      <div class="apple-wrap-wide grid gap-12 items-center lg:grid-cols-2">
        <div class="lg:order-2">
          <span class="module-eyebrow">{{ t('features.lanEyebrow') }}</span>
          <h2 class="h-section mt-2">{{ t('features.lanTitle') }}</h2>
          <p class="subtitle mt-4">{{ t('features.lanBody') }}</p>

          <div class="mt-8 space-y-4">
            <div class="flex items-start gap-3">
              <span class="feat-bullet-icon" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 8.5 6.5 11.5 12.5 4.5" /></svg>
              </span>
              <div>
                <strong class="text-sm font-semibold text-[var(--text)]">{{ t('features.lanPoint1Title') }}:</strong>
                <span class="text-sm text-[var(--text-muted)] ml-1">{{ t('features.lanPoint1Desc') }}</span>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <span class="feat-bullet-icon" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 8.5 6.5 11.5 12.5 4.5" /></svg>
              </span>
              <div>
                <strong class="text-sm font-semibold text-[var(--text)]">{{ t('features.lanPoint2Title') }}:</strong>
                <span class="text-sm text-[var(--text-muted)] ml-1">{{ t('features.lanPoint2Desc') }}</span>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <span class="feat-bullet-icon" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 8.5 6.5 11.5 12.5 4.5" /></svg>
              </span>
              <div>
                <strong class="text-sm font-semibold text-[var(--text)]">{{ t('features.lanPoint3Title') }}:</strong>
                <span class="text-sm text-[var(--text-muted)] ml-1">{{ t('features.lanPoint3Desc') }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Tarjeta Visual LAN -->
        <div class="lan-visual-box lg:order-1">
          <div class="lan-visual-top">
            <div class="lan-host-card">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <span class="status-dot-green"></span>
                  <span class="text-xs font-bold uppercase tracking-wider text-[var(--text)]">{{ locale === 'en' ? 'Local Host Workstation' : 'Servidor Anfitrión Local' }}</span>
                </div>
                <span class="text-xs font-mono bg-blue-500/10 text-blue-500 px-2 py-0.5 rounded">192.168.1.42</span>
              </div>
              <div class="mt-4 flex items-center justify-between bg-[var(--bg)] p-3 rounded-lg border border-[var(--border)]">
                <div>
                  <div class="text-[11px] font-semibold text-[var(--text-muted)] uppercase">{{ locale === 'en' ? 'Pairing Security PIN' : 'PIN de Emparejamiento' }}</div>
                  <div class="text-xl font-mono font-bold tracking-widest text-[var(--text)] mt-0.5">849 201</div>
                </div>
                <span class="text-xs text-emerald-500 font-medium">{{ locale === 'en' ? 'Active · Office Wi-Fi' : 'Activo · Red Oficina' }}</span>
              </div>
            </div>

            <div class="lan-connection-line">
              <div class="lan-ping-line"></div>
              <div class="lan-shield-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                <span>{{ locale === 'en' ? 'Local P2P Encryption' : 'Cifrado P2P local' }}</span>
              </div>
            </div>

            <div class="lan-peers-grid">
              <div class="lan-peer-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>
                <div class="text-left">
                  <div class="text-xs font-semibold text-[var(--text)]">MacBook Pro · Lic. Valenzuela</div>
                  <div class="text-[11px] text-emerald-500 font-medium">{{ locale === 'en' ? 'Live sync' : 'Sincronizado al instante' }}</div>
                </div>
              </div>
              <div class="lan-peer-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>
                <div class="text-left">
                  <div class="text-xs font-semibold text-[var(--text)]">ThinkPad PC · Secretaría Legal</div>
                  <div class="text-[11px] text-emerald-500 font-medium">{{ locale === 'en' ? 'Live sync' : 'Sincronizado al instante' }}</div>
                </div>
              </div>
            </div>
          </div>

          <div class="lan-visual-footer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="1" x2="23" y1="1" y2="23"/><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>
            <span>{{ locale === 'en' ? 'Zero Cloud: Sync stays strictly inside your office perimeter.' : 'Cero Nube: La sincronización nunca sale a internet ni a servidores externos.' }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ========= SPOTLIGHT 6 · Privacidad por diseño ========= -->
    <section class="section">
      <div class="apple-wrap text-center">
        <span class="module-eyebrow">{{ t('features.sp4Eyebrow') }}</span>
        <h2 class="h-section mt-2">{{ t('features.sp4Title') }}</h2>
        <p class="subtitle mt-5 mx-auto" style="max-width: 680px;">{{ t('features.sp4Body') }}</p>

        <div class="privacy-stat-row">
          <div class="privacy-stat">
            <div class="privacy-stat-num">0</div>
            <div class="privacy-stat-label">Trackers</div>
          </div>
          <div class="privacy-stat">
            <div class="privacy-stat-num">0</div>
            <div class="privacy-stat-label">{{ locale === 'es' ? 'Telemetría' : 'Telemetry' }}</div>
          </div>
          <div class="privacy-stat">
            <div class="privacy-stat-num">100%</div>
            <div class="privacy-stat-label">{{ locale === 'es' ? 'Privado y Local' : 'Private & Local' }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ========= TILES · Y todo lo demás ========= -->
    <section class="section section-gray">
      <div class="apple-wrap text-center">
        <span class="eyebrow">{{ t('features.moreEyebrow') }}</span>
        <h2 class="h-section mt-2">{{ t('features.moreTitle') }}</h2>
      </div>

      <div class="apple-wrap-wide mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        <article v-for="(tile, i) in tiles" :key="i" class="ft-tile">
          <div class="ft-tile-icon">
            <svg v-if="tile.icon === 'search'" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
            <svg v-else-if="tile.icon === 'keyboard'" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="14" rx="2"/><line x1="6" y1="10" x2="6" y2="10"/><line x1="10" y1="10" x2="10" y2="10"/><line x1="14" y1="10" x2="14" y2="10"/><line x1="18" y1="10" x2="18" y2="10"/><line x1="6" y1="14" x2="6" y2="14"/><line x1="18" y1="14" x2="18" y2="14"/><line x1="10" y1="14" x2="14" y2="14"/></svg>
            <svg v-else-if="tile.icon === 'users'" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            <svg v-else-if="tile.icon === 'backup'" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            <svg v-else-if="tile.icon === 'notes'" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="15" y2="17"/></svg>
            <svg v-else width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>
          </div>
          <h3 class="ft-tile-title">{{ tile.title }}</h3>
          <p class="ft-tile-body">{{ tile.body }}</p>
        </article>
      </div>
    </section>

    <!-- ========= CTA FINAL DE DESCARGA ========= -->
    <section class="section">
      <div class="apple-wrap text-center">
        <span class="eyebrow">{{ locale === 'en' ? 'TRY IT TODAY' : 'PRUÉBALO HOY' }}</span>
        <h2 class="h-section mt-2">{{ locale === 'en' ? 'Download Lexbell for free' : 'Descarga Lexbell gratis ahora' }}</h2>
        <p class="subtitle mt-4 mx-auto" style="max-width: 560px;">
          {{ locale === 'en'
            ? 'Start with up to 50 active cases on Mac or Windows. 100% local, offline, and without subscriptions.'
            : 'Comienza con hasta 50 expedientes activos en Mac o Windows. 100% local, sin internet y sin suscripciones obligatorias.' }}
        </p>
        <div class="mt-8 flex justify-center">
          <AppDownload center />
        </div>
        <p class="mt-3 text-[13px] font-medium text-[#6b7280]">
          {{ locale === 'en' ? 'Free up to 50 cases · No credit card required' : 'Gratis hasta 50 casos · Sin tarjeta de crédito' }}
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.features-page {
  background: var(--bg);
  color: var(--text);
}

.module-eyebrow {
  display: inline-block;
  font-size: 11.5px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--accent);
  margin-bottom: 8px;
}

.type-pill {
  display: inline-flex;
  align-items: center;
  padding: 6px 14px;
  border-radius: 999px;
  background: var(--card-bg);
  border: 1px solid var(--border);
  font-size: 13px;
  font-weight: 500;
  color: var(--text);
}

.apple-window-box {
  width: 100%;
  border-radius: 12px;
  line-height: 0;
  box-shadow:
    0 0 0 1px rgba(0, 0, 0, 0.12),
    0 12px 30px -4px rgba(0, 0, 0, 0.16),
    0 32px 64px -14px rgba(0, 0, 0, 0.28);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.apple-window-box:hover {
  transform: translateY(-2px);
  box-shadow:
    0 0 0 1px rgba(0, 0, 0, 0.15),
    0 16px 36px -4px rgba(0, 0, 0, 0.20),
    0 40px 75px -14px rgba(0, 0, 0, 0.32);
}

.apple-app-img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 12px;
}

/* === Stat row del spotlight de privacidad === */
.privacy-stat-row {
  margin-top: 48px;
  display: inline-flex;
  gap: 56px;
  flex-wrap: wrap;
  justify-content: center;
}
.privacy-stat-num {
  font-size: clamp(40px, 4.5vw, 56px);
  font-weight: 700;
  letter-spacing: -0.03em;
  color: var(--text);
  line-height: 1;
}
.privacy-stat-label {
  margin-top: 8px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-muted);
}

/* === Tiles minimalistas === */
.ft-tile { text-align: left; }
.ft-tile-icon {
  width: 42px;
  height: 42px;
  border-radius: 10px;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  color: var(--icon-color);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}
.ft-tile-title {
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.015em;
  color: var(--text);
  margin: 0 0 8px;
}
.ft-tile-body {
  font-size: 14.5px;
  line-height: 1.55;
  color: var(--text-muted);
  margin: 0;
}

/* === Bullet icon check === */
.feat-bullet-icon {
  width: 22px;
  height: 22px;
  border-radius: 9999px;
  background: rgba(0, 122, 255, 0.12);
  color: #007aff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 1px;
}

/* === Visual Box MCP === */
.mcp-visual-box {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.12);
}
.mcp-visual-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--border);
}
.status-dot-green {
  width: 8px;
  height: 8px;
  border-radius: 9999px;
  background: #10b981;
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.2);
}
.badge-read-only {
  font-size: 11px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 9999px;
  background: rgba(16, 185, 129, 0.1);
  color: #10b981;
}
.mcp-assistants-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin: 20px 0;
}
@media (max-width: 640px) {
  .mcp-assistants-grid {
    grid-template-columns: 1fr;
  }
}
.mcp-assistant-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 12px;
}
.mcp-icon-circle {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.mcp-visual-footer {
  display: flex;
  align-items: center;
  gap: 8px;
  padding-top: 16px;
  border-top: 1px solid var(--border);
  font-size: 12px;
  color: var(--text-muted);
}

/* === Visual Box LAN === */
.lan-visual-box {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.12);
}
.lan-visual-top {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.lan-host-card {
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 16px;
}
.lan-connection-line {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  position: relative;
  padding: 8px 0;
}
.lan-connection-line::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--border);
  z-index: 0;
}
.lan-shield-badge {
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--card-bg);
  border: 1px solid var(--border);
  padding: 4px 12px;
  border-radius: 9999px;
  font-size: 11px;
  font-weight: 600;
  color: var(--text-muted);
}
.lan-peers-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}
@media (max-width: 640px) {
  .lan-peers-grid {
    grid-template-columns: 1fr;
  }
}
.lan-peer-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 12px;
  color: var(--text-muted);
}
.lan-visual-footer {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid var(--border);
  font-size: 12px;
  color: var(--text-muted);
}
</style>
