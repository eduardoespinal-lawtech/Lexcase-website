<script setup lang="ts">
const { t, locale } = useI18n()
const localePath = useLocalePath()
const isEn = computed(() => locale.value === 'en')

definePageMeta({ name: 'features' })

useHead(() => {
  const title = isEn.value
    ? 'Features: Case Management, Deadlines & Clients — Lexbell'
    : 'Características: Gestión de Casos, Plazos y Clientes — Lexbell'
  const desc = isEn.value
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
  <main class="manus-page">
    <div class="manus-container">

      <!-- ================= HERO ================= -->
      <section class="text-center pt-12 pb-16 lg:pt-16 lg:pb-20">
        <span class="manus-eyebrow">{{ isEn ? 'CORE CAPABILITIES' : 'CAPACIDADES DEL SISTEMA' }}</span>
        <h1 class="manus-section-title">
          {{ t('features.title') }}
        </h1>
        <p class="manus-section-subtitle">
          {{ t('features.subtitle') }}
        </p>
      </section>

      <!-- ================= SPOTLIGHTS 50/50 MANUS STYLE ================= -->
      <div class="flex flex-col gap-6 lg:gap-8">

        <!-- 1. Expedientes -->
        <article id="expedientes" class="manus-card grid grid-cols-1 md:grid-cols-2 items-center">
          <div class="p-8 md:p-12 text-left">
            <span class="manus-card-eyebrow">{{ t('features.sp1Eyebrow') }}</span>
            <h2 class="manus-card-title mt-2">
              {{ t('features.sp1Title') }}
            </h2>
            <p class="manus-card-desc mt-4">
              {{ t('features.sp1Body') }}
            </p>
            <div class="mt-6 flex flex-wrap gap-2">
              <span v-for="tt in caseTypes" :key="tt.name" class="manus-pill-tag">
                {{ tt.name }}
              </span>
            </div>
          </div>
          <div class="p-4 md:p-8">
            <div class="manus-mockup-frame bg-[#f1f5f9] dark:bg-[#192231]">
              <img
                src="/screenshots/showcase-cases.webp?v=1.1.22"
                :alt="isEn ? 'Cases in Lexbell' : 'Expedientes en Lexbell'"
                class="w-full h-auto block rounded-[10px] shadow-sm"
                loading="lazy"
                width="2000"
                height="1185"
              />
            </div>
          </div>
        </article>

        <!-- 2. Agenda procesal y plazos (Invertido) -->
        <article id="agenda" class="manus-card grid grid-cols-1 md:grid-cols-2 items-center">
          <div class="p-4 md:p-8 md:order-1">
            <div class="manus-mockup-frame bg-[#fef7ee] dark:bg-[#261e14]">
              <img
                src="/screenshots/showcase-calendar-month.webp?v=1.1.22"
                :alt="isEn ? 'Procedural Calendar in Lexbell' : 'Agenda Procesal en Lexbell'"
                class="w-full h-auto block rounded-[10px] shadow-sm"
                loading="lazy"
                width="2000"
                height="1185"
              />
            </div>
          </div>
          <div class="p-8 md:p-12 text-left md:order-2">
            <span class="manus-card-eyebrow">{{ t('features.sp2Eyebrow') }}</span>
            <h2 class="manus-card-title mt-2">
              {{ t('features.sp2Title') }}
            </h2>
            <p class="manus-card-desc mt-4">
              {{ t('features.sp2Body') }}
            </p>
            <div class="mt-6">
              <NuxtLink :to="localePath('deadline-calculator')" class="manus-inline-link">
                <span>{{ isEn ? 'Open free deadline calculator' : 'Probar calculadora de plazos' }}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </NuxtLink>
            </div>
          </div>
        </article>

        <!-- 3. Documentos y Bóveda -->
        <article id="documentos" class="manus-card grid grid-cols-1 md:grid-cols-2 items-center">
          <div class="p-8 md:p-12 text-left">
            <span class="manus-card-eyebrow">{{ t('features.sp3Eyebrow') }}</span>
            <h2 class="manus-card-title mt-2">
              {{ t('features.sp3Title') }}
            </h2>
            <p class="manus-card-desc mt-4">
              {{ t('features.sp3Body') }}
            </p>
            <div class="mt-6 flex flex-col gap-2.5">
              <div class="flex items-center gap-2.5 text-sm text-[var(--text)]">
                <svg class="w-4 h-4 text-emerald-500 shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3.5 8.5 6.5 11.5 12.5 4.5" /></svg>
                <span>{{ isEn ? 'Visor PDF integrado con búsqueda en el texto' : 'Visor PDF integrado con búsqueda en el texto' }}</span>
              </div>
              <div class="flex items-center gap-2.5 text-sm text-[var(--text)]">
                <svg class="w-4 h-4 text-emerald-500 shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3.5 8.5 6.5 11.5 12.5 4.5" /></svg>
                <span>{{ isEn ? 'Archivos almacenados en tu disco, nunca en servidores remotos' : 'Archivos almacenados en tu disco, nunca en servidores remotos' }}</span>
              </div>
            </div>
          </div>
          <div class="p-4 md:p-8">
            <div class="manus-mockup-frame bg-[#eefbf3] dark:bg-[#16271c]">
              <img
                src="/screenshots/showcase-docs.webp?v=1.1.22"
                :alt="isEn ? 'Document Vault in Lexbell' : 'Bóveda de Documentos en Lexbell'"
                class="w-full h-auto block rounded-[10px] shadow-sm"
                loading="lazy"
                width="2000"
                height="1185"
              />
            </div>
          </div>
        </article>

        <!-- 4. Conectores MCP (IA Local) -> Invertido -->
        <article id="ia-mcp" class="manus-card grid grid-cols-1 md:grid-cols-2 items-center">
          <div class="p-4 md:p-8 md:order-1">
            <div class="manus-mockup-frame bg-[#f5f3ff] dark:bg-[#201c2d]">
              <div class="p-6 flex flex-col gap-4 w-full">
                <div class="flex items-center justify-between pb-3 border-b border-[var(--border)]">
                  <div class="flex items-center gap-2">
                    <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span class="text-xs font-semibold text-[var(--text)] uppercase tracking-wider">Local MCP Server · Port 3845</span>
                  </div>
                  <span class="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">Read-Only</span>
                </div>
                <div class="grid grid-cols-2 gap-2.5 text-left">
                  <div class="p-3 rounded-lg bg-[var(--card-bg)] border border-[var(--border)] flex items-center gap-2.5 shadow-xs">
                    <span class="w-2 h-2 rounded-full bg-blue-500"></span>
                    <div>
                      <div class="text-xs font-semibold text-[var(--text)]">Antigravity</div>
                      <div class="text-[10.5px] text-[var(--text-muted)]">Google IDE</div>
                    </div>
                  </div>
                  <div class="p-3 rounded-lg bg-[var(--card-bg)] border border-[var(--border)] flex items-center gap-2.5 shadow-xs">
                    <span class="w-2 h-2 rounded-full bg-amber-500"></span>
                    <div>
                      <div class="text-xs font-semibold text-[var(--text)]">Claude</div>
                      <div class="text-[10.5px] text-[var(--text-muted)]">Desktop App</div>
                    </div>
                  </div>
                  <div class="p-3 rounded-lg bg-[var(--card-bg)] border border-[var(--border)] flex items-center gap-2.5 shadow-xs">
                    <span class="w-2 h-2 rounded-full bg-indigo-500"></span>
                    <div>
                      <div class="text-xs font-semibold text-[var(--text)]">Cursor</div>
                      <div class="text-[10.5px] text-[var(--text-muted)]">Context Agent</div>
                    </div>
                  </div>
                  <div class="p-3 rounded-lg bg-[var(--card-bg)] border border-[var(--border)] flex items-center gap-2.5 shadow-xs">
                    <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <div>
                      <div class="text-xs font-semibold text-[var(--text)]">Codex</div>
                      <div class="text-[10.5px] text-[var(--text-muted)]">OpenAI Local</div>
                    </div>
                  </div>
                </div>
                <div class="text-xs text-[var(--text-muted)] flex items-center gap-2 pt-2 border-t border-[var(--border)]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  <span>{{ isEn ? 'Client data never leaves your device or trains third-party models.' : 'Tus expedientes nunca salen de tu ordenador ni entrenan modelos.' }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="p-8 md:p-12 text-left md:order-2">
            <span class="manus-card-eyebrow">{{ t('features.mcpEyebrow') }}</span>
            <h2 class="manus-card-title mt-2">
              {{ t('features.mcpTitle') }}
            </h2>
            <p class="manus-card-desc mt-4">
              {{ t('features.mcpBody') }}
            </p>
            <div class="mt-6 flex flex-col gap-2.5">
              <div class="flex items-start gap-3">
                <span class="w-4 h-4 text-emerald-500 shrink-0 mt-0.5">
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3.5 8.5 6.5 11.5 12.5 4.5" /></svg>
                </span>
                <span class="text-sm text-[var(--text)]"><strong>{{ t('features.mcpPoint1Title') }}:</strong> {{ t('features.mcpPoint1Desc') }}</span>
              </div>
              <div class="flex items-start gap-3">
                <span class="w-4 h-4 text-emerald-500 shrink-0 mt-0.5">
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3.5 8.5 6.5 11.5 12.5 4.5" /></svg>
                </span>
                <span class="text-sm text-[var(--text)]"><strong>{{ t('features.mcpPoint2Title') }}:</strong> {{ t('features.mcpPoint2Desc') }}</span>
              </div>
              <div class="flex items-start gap-3">
                <span class="w-4 h-4 text-emerald-500 shrink-0 mt-0.5">
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3.5 8.5 6.5 11.5 12.5 4.5" /></svg>
                </span>
                <span class="text-sm text-[var(--text)]"><strong>{{ t('features.mcpPoint3Title') }}:</strong> {{ t('features.mcpPoint3Desc') }}</span>
              </div>
            </div>
          </div>
        </article>

        <!-- 5. Compartir en oficina (Red Local LAN) -->
        <article id="oficina" class="manus-card grid grid-cols-1 md:grid-cols-2 items-center">
          <div class="p-8 md:p-12 text-left">
            <span class="manus-card-eyebrow">{{ t('features.lanEyebrow') }}</span>
            <h2 class="manus-card-title mt-2">
              {{ t('features.lanTitle') }}
            </h2>
            <p class="manus-card-desc mt-4">
              {{ t('features.lanBody') }}
            </p>
            <div class="mt-6 flex flex-col gap-2.5">
              <div class="flex items-start gap-3">
                <span class="w-4 h-4 text-emerald-500 shrink-0 mt-0.5">
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3.5 8.5 6.5 11.5 12.5 4.5" /></svg>
                </span>
                <span class="text-sm text-[var(--text)]"><strong>{{ t('features.lanPoint1Title') }}:</strong> {{ t('features.lanPoint1Desc') }}</span>
              </div>
              <div class="flex items-start gap-3">
                <span class="w-4 h-4 text-emerald-500 shrink-0 mt-0.5">
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3.5 8.5 6.5 11.5 12.5 4.5" /></svg>
                </span>
                <span class="text-sm text-[var(--text)]"><strong>{{ t('features.lanPoint2Title') }}:</strong> {{ t('features.lanPoint2Desc') }}</span>
              </div>
              <div class="flex items-start gap-3">
                <span class="w-4 h-4 text-emerald-500 shrink-0 mt-0.5">
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3.5 8.5 6.5 11.5 12.5 4.5" /></svg>
                </span>
                <span class="text-sm text-[var(--text)]"><strong>{{ t('features.lanPoint3Title') }}:</strong> {{ t('features.lanPoint3Desc') }}</span>
              </div>
            </div>
          </div>
          <div class="p-4 md:p-8">
            <div class="manus-mockup-frame bg-[#eff6ff] dark:bg-[#15233a]">
              <div class="p-6 flex flex-col gap-4 w-full">
                <div class="flex items-center justify-between pb-3 border-b border-[var(--border)]">
                  <div class="flex items-center gap-2">
                    <span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    <span class="text-xs font-semibold text-[var(--text)] uppercase tracking-wider">{{ isEn ? 'Host Workstation' : 'Servidor Local Despacho' }}</span>
                  </div>
                  <span class="text-xs font-mono bg-blue-500/10 text-blue-500 px-2 py-0.5 rounded">192.168.1.42</span>
                </div>
                <div class="flex items-center justify-between bg-[var(--card-bg)] p-3.5 rounded-lg border border-[var(--border)] shadow-xs">
                  <div>
                    <div class="text-[10.5px] font-semibold text-[var(--text-muted)] uppercase tracking-wider">{{ isEn ? 'Security PIN' : 'PIN de Conexión' }}</div>
                    <div class="text-xl font-mono font-bold tracking-widest text-[var(--text)] mt-0.5">849 201</div>
                  </div>
                  <span class="text-xs text-emerald-500 font-medium">{{ isEn ? 'Office LAN' : 'Red Local Activa' }}</span>
                </div>
                <div class="grid grid-cols-2 gap-2.5">
                  <div class="p-2.5 rounded-lg bg-[var(--card-bg)] border border-[var(--border)] text-left shadow-xs">
                    <div class="text-xs font-semibold text-[var(--text)] truncate">MacBook Pro · Abogado</div>
                    <div class="text-[10.5px] text-emerald-500">Sincronizado</div>
                  </div>
                  <div class="p-2.5 rounded-lg bg-[var(--card-bg)] border border-[var(--border)] text-left shadow-xs">
                    <div class="text-xs font-semibold text-[var(--text)] truncate">ThinkPad · Secretaría</div>
                    <div class="text-[10.5px] text-emerald-500">Sincronizado</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        <!-- 6. Mapa de Vínculos y Conflictos -> Invertido -->
        <article id="conflictos" class="manus-card grid grid-cols-1 md:grid-cols-2 items-center">
          <div class="p-4 md:p-8 md:order-1">
            <div class="manus-mockup-frame bg-[#fdf2f4] dark:bg-[#2a171c]">
              <img
                src="/screenshots/showcase-connections.webp?v=1.1.22"
                :alt="isEn ? 'Relationship and Conflict Map in Lexbell' : 'Mapa de Vínculos y Conflictos en Lexbell'"
                class="w-full h-auto block rounded-[10px] shadow-sm"
                loading="lazy"
                width="2000"
                height="1185"
              />
            </div>
          </div>
          <div class="p-8 md:p-12 text-left md:order-2">
            <span class="manus-card-eyebrow">{{ t('features.sp5Eyebrow') }}</span>
            <h2 class="manus-card-title mt-2">
              {{ t('features.sp5Title') }}
            </h2>
            <p class="manus-card-desc mt-4">
              {{ t('features.sp5Body') }}
            </p>
          </div>
        </article>

        <!-- 7. Honorarios y Gastos -->
        <article class="manus-card grid grid-cols-1 md:grid-cols-2 items-center">
          <div class="p-8 md:p-12 text-left">
            <span class="manus-card-eyebrow">{{ isEn ? 'FEES & EXPENSES' : 'HONORARIOS Y GASTOS' }}</span>
            <h2 class="manus-card-title mt-2">
              {{ isEn ? 'Control fees, advances, and pending balances.' : 'Controla honorarios, gastos y saldos por cobrar.' }}
            </h2>
            <p class="manus-card-desc mt-4">
              {{ isEn
                ? 'Keep track of collected fees, client disbursements, and overdue balances per case in USD or DOP without complex accounting software.'
                : 'Visualiza al instante cuánto has cobrado, los gastos reembolsables y el saldo pendiente de cada expediente en DOP o USD, sin programas contables complejos.' }}
            </p>
          </div>
          <div class="p-4 md:p-8">
            <div class="manus-mockup-frame bg-[#f8fafc] dark:bg-[#18212e]">
              <img
                src="/screenshots/showcase-billing.webp?v=1.1.22"
                :alt="isEn ? 'Billing and Fees Control in Lexbell' : 'Facturación y Control de Honorarios en Lexbell'"
                class="w-full h-auto block rounded-[10px] shadow-sm"
                loading="lazy"
                width="2000"
                height="1185"
              />
            </div>
          </div>
        </article>

      </div>


      <!-- ================= PRIVACIDAD Y SEGURIDAD ================= -->
      <section class="mt-24 text-center">
        <span class="manus-eyebrow">{{ t('features.sp4Eyebrow') }}</span>
        <h2 class="manus-section-title mt-2">{{ t('features.sp4Title') }}</h2>
        <p class="manus-section-subtitle mt-4 mx-auto" style="max-width: 680px;">{{ t('features.sp4Body') }}</p>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto mt-12">
          <div class="p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--border)] text-center">
            <div class="text-4xl font-bold font-serif text-[var(--text)]">0</div>
            <div class="text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold mt-1">Trackers</div>
          </div>
          <div class="p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--border)] text-center">
            <div class="text-4xl font-bold font-serif text-[var(--text)]">0</div>
            <div class="text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold mt-1">{{ isEn ? 'Telemetry' : 'Telemetría' }}</div>
          </div>
          <div class="p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--border)] text-center">
            <div class="text-4xl font-bold font-serif text-[var(--text)]">100%</div>
            <div class="text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold mt-1">{{ isEn ? 'Local & Private' : 'Privado y Local' }}</div>
          </div>
        </div>
      </section>


      <!-- ================= TOOLKIT TILES (MANUS 3-COLUMNS) ================= -->
      <section class="mt-28">
        <div class="text-center mb-14">
          <span class="manus-eyebrow">{{ t('features.moreEyebrow') }}</span>
          <h2 class="manus-section-title mt-2">{{ t('features.moreTitle') }}</h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div
            v-for="(tile, i) in tiles"
            :key="i"
            class="p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--border)] flex flex-col justify-between hover:border-[var(--border-dark)] transition-all"
          >
            <div>
              <div class="w-10 h-10 rounded-xl bg-blue-500/10 text-[#007aff] flex items-center justify-center mb-4">
                <svg v-if="tile.icon === 'search'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                <svg v-else-if="tile.icon === 'keyboard'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="14" rx="2"/><line x1="6" y1="10" x2="6" y2="10"/><line x1="10" y1="10" x2="10" y2="10"/><line x1="14" y1="10" x2="14" y2="10"/><line x1="18" y1="10" x2="18" y2="10"/><line x1="6" y1="14" x2="6" y2="14"/><line x1="18" y1="14" x2="18" y2="14"/><line x1="10" y1="14" x2="14" y2="14"/></svg>
                <svg v-else-if="tile.icon === 'users'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                <svg v-else-if="tile.icon === 'backup'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                <svg v-else-if="tile.icon === 'notes'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="15" y2="17"/></svg>
                <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>
              </div>
              <h3 class="text-[16px] font-semibold text-[var(--text)] mb-2">{{ tile.title }}</h3>
              <p class="text-[13.5px] leading-relaxed text-[var(--text-muted)]">{{ tile.body }}</p>
            </div>
          </div>
        </div>
      </section>


      <!-- ================= BANNER CTA FINAL MANUS AMBIENT GLOW ================= -->
      <section id="descargar" class="pt-24 pb-20">
        <div class="manus-final-cta-card">
          <div class="manus-ambient-glow" aria-hidden="true"></div>

          <span class="manus-final-badge">{{ isEn ? 'START FREE TODAY' : 'EMPIEZA GRATIS HOY' }}</span>

          <h2 class="manus-final-title">
            {{ isEn ? 'Bring order and privacy to your legal practice' : 'Pon orden y privacidad en tu despacho legal' }}
          </h2>

          <p class="manus-final-sub">
            {{ isEn
              ? 'Download Lexbell for Mac or Windows. Up to 50 active cases free forever, 100% local and private.'
              : 'Descarga Lexbell para Mac o Windows. Hasta 50 expedientes activos gratis para siempre, 100% local y privado.' }}
          </p>

          <div class="manus-final-downloads">
            <AppDownload center />
          </div>

          <p class="manus-final-note">
            {{ isEn ? 'Installs in under 1 minute · No credit card required' : 'Instalación en menos de 1 minuto · Sin tarjeta de crédito' }}
          </p>
        </div>
      </section>

    </div>
  </main>
</template>

<style scoped>
/* =================== SISTEMA DE CARACTERÍSTICAS RÉPLICA EXACTA DE MANUS =================== */
.manus-page {
  background: var(--bg);
  color: var(--text);
  overflow-x: hidden;
}

.manus-container {
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 24px;
}

.manus-eyebrow {
  display: inline-block;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 12px;
}

.manus-section-title {
  font-family: Newsreader, Charter, "Bitstream Charter", "Sitka Text", Cambria, Georgia, serif;
  font-size: clamp(32px, 4.4vw, 48px);
  font-weight: 600;
  line-height: 1.15;
  letter-spacing: -0.025em;
  color: var(--text);
  margin: 0 auto 16px;
  max-width: 680px;
  text-wrap: balance;
}

.manus-section-subtitle {
  font-size: 16px;
  line-height: 24px;
  color: var(--text-muted);
  font-weight: 400;
  margin: 0 auto;
  max-width: 680px;
  text-wrap: balance;
}

/* === TARJETAS 50/50 MANUS STYLE === */
.manus-card {
  position: relative;
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 18px;
  overflow: hidden;
}

.manus-card-eyebrow {
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #007aff;
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
  font-size: 15px;
  line-height: 23px;
  color: var(--text-muted);
  margin: 0;
}

.manus-pill-tag {
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  border-radius: 999px;
  background: var(--bg-subtle);
  border: 1px solid var(--border);
  font-size: 12.5px;
  font-weight: 500;
  color: var(--text);
}

.manus-inline-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 500;
  color: #007aff;
  text-decoration: none;
  transition: gap 0.2s ease;
}

.manus-inline-link:hover {
  gap: 10px;
}

.manus-mockup-frame {
  width: 100%;
  border-radius: 14px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border);
  transition: transform 0.25s ease;
}

.manus-mockup-frame:hover {
  transform: translateY(-2px);
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
  position: relative;
  z-index: 1;
  text-wrap: balance;
}

.manus-final-sub {
  font-size: 16px;
  line-height: 24px;
  color: #94a3b8;
  max-width: 680px;
  margin: 0 auto 32px;
  position: relative;
  z-index: 1;
  text-wrap: balance;
}

.manus-final-downloads {
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
}

.manus-final-note {
  font-size: 13px;
  font-weight: 500;
  color: #64748b;
  margin: 16px 0 0;
  position: relative;
  z-index: 1;
}
</style>
