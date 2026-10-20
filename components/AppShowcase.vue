<script setup lang="ts">
const { t } = useI18n()

const activeTab = ref<'cases' | 'map' | 'calendar'>('cases')
const isDark = ref(true)

const tabs = computed(() => [
  { id: 'cases', label: t('showcase.tabCases') || 'Expedientes' },
  { id: 'map', label: t('showcase.tabMap') || 'Mapa de Vínculos' },
  { id: 'calendar', label: t('showcase.tabCalendar') || 'Plazos procesales' }
])
</script>

<template>
  <div class="showcase-container" :class="{ 'is-dark-theme': isDark, 'is-light-theme': !isDark }">
    <!-- Window Outer Frame -->
    <div class="window-frame">
      <!-- Window Title Bar -->
      <div class="window-titlebar">
        <div class="window-controls">
          <span class="control-dot dot-close" />
          <span class="control-dot dot-minimize" />
          <span class="control-dot dot-expand" />
        </div>

        <div class="window-search">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
          </svg>
          <span class="search-placeholder">{{ t('showcase.searchPlaceholder') || 'Buscar casos, clientes, cédulas, notas... (⌘E / Ctrl+E)' }}</span>
        </div>

        <div class="window-actions">
          <button
            class="theme-toggle-btn"
            :title="isDark ? 'Cambiar a Modo Claro' : 'Cambiar a Modo Oscuro'"
            @click="isDark = !isDark"
          >
            <span v-if="isDark" class="theme-icon">☀️ {{ t('showcase.themeLight') || 'Claro' }}</span>
            <span v-else class="theme-icon">🌙 {{ t('showcase.themeDark') || 'Oscuro' }}</span>
          </button>
          <span class="security-badge" title="Tus datos no salen de tu equipo">
            <span class="sec-dot" />
            <span>{{ t('showcase.localEncrypted') || '100% Cifrado Local' }}</span>
          </span>
        </div>
      </div>

      <!-- App Workspace Body -->
      <div class="window-body">
        <!-- Sidebar -->
        <aside class="app-sidebar">
          <div class="sidebar-brand">
            <div class="brand-avatar">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M6 8a6 6 0 0 1 12 0C18 15 18.92 15.61 20 16.33Q21 17 19.8 17H4.2Q3 17 4 16.33C5.08 15.61 6 15 6 8" />
                <path d="M10.3 19a1.94 1.94 0 0 0 3.4 0" />
              </svg>
            </div>
            <div class="brand-info">
              <span class="brand-title">Lexbell</span>
              <span class="brand-sub">Despacho Jurídico</span>
            </div>
          </div>

          <nav class="sidebar-nav">
            <button
              class="nav-item"
              :class="{ 'is-active': activeTab === 'cases' }"
              @click="activeTab = 'cases'"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect width="20" height="14" x="2" y="7" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
              <span>{{ t('showcase.navCases') || 'Expedientes' }}</span>
              <span class="nav-count">18</span>
            </button>

            <button
              class="nav-item"
              :class="{ 'is-active': activeTab === 'map' }"
              @click="activeTab = 'map'"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
              </svg>
              <span>{{ t('showcase.navMap') || 'Mapa de Vínculos' }}</span>
              <span class="nav-pill-new">PRO</span>
            </button>

            <button
              class="nav-item"
              :class="{ 'is-active': activeTab === 'calendar' }"
              @click="activeTab = 'calendar'"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect width="18" height="18" x="3" y="4" rx="2" /><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>
              </svg>
              <span>{{ t('showcase.navCalendar') || 'Plazos y Audiencias' }}</span>
              <span class="nav-count alert-count">2</span>
            </button>

            <div class="sidebar-divider" />

            <div class="nav-item is-disabled">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
              <span>{{ t('showcase.navClients') || 'Directorio de Clientes' }}</span>
              <span class="nav-count">42</span>
            </div>

            <div class="nav-item is-disabled">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
              <span>{{ t('showcase.navFinances') || 'Honorarios & Finanzas' }}</span>
            </div>
          </nav>

          <div class="sidebar-footer">
            <span class="biometric-tag">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
              </svg>
              <span>Touch ID / Hello</span>
            </span>
          </div>
        </aside>

        <!-- Main Content Area -->
        <main class="app-main">
          <!-- View 1: Expedientes Dashboard -->
          <div v-if="activeTab === 'cases'" class="cases-view">
            <div class="view-header">
              <div>
                <h3 class="view-title">{{ t('showcase.casesTitle') || 'Expedientes en Trámite' }}</h3>
                <p class="view-sub">{{ t('showcase.casesSubtitle') || 'Gestión integral organizada por naturaleza jurídica' }}</p>
              </div>
              <div class="view-filters">
                <span class="filter-pill is-active">Todos (18)</span>
                <span class="filter-pill">Judicial (8)</span>
                <span class="filter-pill">Migración (4)</span>
                <span class="filter-pill">Alquiler (3)</span>
                <span class="filter-pill">Empresa (3)</span>
              </div>
            </div>

            <div class="cards-list">
              <!-- Case Card 1: Judicial -->
              <div class="case-card">
                <div class="card-top">
                  <div class="type-badge type-judicial">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 3v18M19 8l3 8a5 5 0 0 1-6 0zV7M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1M5 8l3 8a5 5 0 0 1-6 0zV7M7 21h10"/></svg>
                    <span>Judicial · Civil</span>
                  </div>
                  <span class="status-badge status-active">En Trámite</span>
                </div>

                <div class="card-main">
                  <h4 class="card-heading">Demanda en Cobro de Pesos e Indemnización</h4>
                  <p class="card-meta">
                    <strong>Expediente:</strong> 024-2026-00418 · <em>Tercera Sala de la Cámara Civil</em>
                  </p>
                  <div class="card-parties">
                    <span><strong>Cliente:</strong> Construcciones del Este SRL</span>
                    <span><strong>Contraparte:</strong> Consorcio Metropolis SA</span>
                  </div>
                </div>

                <div class="card-bottom">
                  <div class="card-alert alert-urgent">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
                    <span><strong>Audiencia de pruebas:</strong> En 3 días (9:00 AM)</span>
                  </div>
                  <div class="card-chips">
                    <span class="chip">Honorarios: $4,500</span>
                    <span class="chip">6 documentos</span>
                  </div>
                </div>
              </div>

              <!-- Case Card 2: Migración -->
              <div class="case-card">
                <div class="card-top">
                  <div class="type-badge type-migracion">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>
                    <span>Migración · EE. UU.</span>
                  </div>
                  <span class="status-badge status-review">Fase NVC</span>
                </div>

                <div class="card-main">
                  <h4 class="card-heading">Petición Familiar I-130 & Solicitud de Visa DS-260</h4>
                  <p class="card-meta">
                    <strong>NVC Case:</strong> SDO2026-98124 · <strong>A-Number:</strong> #208-419-882
                  </p>
                  <div class="card-parties">
                    <span><strong>Peticionario:</strong> Roberto Méndez</span>
                    <span><strong>Beneficiaria:</strong> Laura Rosario Gómez</span>
                  </div>
                </div>

                <div class="card-bottom">
                  <div class="card-alert alert-info">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 14 14"/></svg>
                    <span>Cita VAC y consular programada</span>
                  </div>
                  <div class="card-chips">
                    <span class="chip">Documentación lista</span>
                  </div>
                </div>
              </div>

              <!-- Case Card 3: Alquiler / Empresa -->
              <div class="case-card">
                <div class="card-top">
                  <div class="type-badge type-alquiler">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
                    <span>Alquiler · Ley 85-25</span>
                  </div>
                  <span class="status-badge status-ok">Vigente</span>
                </div>

                <div class="card-main">
                  <h4 class="card-heading">Contrato Arrendamiento Local Corporativo</h4>
                  <p class="card-meta">
                    <strong>Inmueble:</strong> Suite 402, Torre Ejecutiva · Registro de Depósito al día
                  </p>
                  <div class="card-parties">
                    <span><strong>Arrendador:</strong> Inmobiliaria Real SRL</span>
                    <span><strong>Inquilino:</strong> Soluciones Digitales SRL</span>
                  </div>
                </div>

                <div class="card-bottom">
                  <div class="card-alert alert-neutral">
                    <span>Alerta de aumento anual: 15 de Noviembre</span>
                  </div>
                  <div class="card-chips">
                    <span class="chip">Depósito verificado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- View 2: Mapa de Vínculos (Interactive Graph representation) -->
          <div v-else-if="activeTab === 'map'" class="map-view">
            <div class="view-header">
              <div>
                <h3 class="view-title">{{ t('showcase.mapTitle') || 'Grafo de Relaciones & Conflictos de Interés' }}</h3>
                <p class="view-sub">{{ t('showcase.mapSubtitle') || 'Detecta automáticamente vínculos entre clientes, contrapartes y apoderados' }}</p>
              </div>
              <div class="graph-status">
                <span class="sec-dot" />
                <span>0 Conflictos de interés detectados</span>
              </div>
            </div>

            <div class="graph-canvas">
              <!-- SVG Graph Simulation -->
              <svg class="graph-svg" viewBox="0 0 700 280">
                <!-- Lines connecting nodes -->
                <line x1="160" y1="140" x2="350" y2="80" stroke="rgba(0,122,255,0.4)" stroke-width="2" stroke-dasharray="4 4" />
                <line x1="160" y1="140" x2="350" y2="200" stroke="rgba(0,122,255,0.4)" stroke-width="2" stroke-dasharray="4 4" />
                <line x1="350" y1="80" x2="540" y2="140" stroke="rgba(16,185,129,0.5)" stroke-width="2" />
                <line x1="350" y1="200" x2="540" y2="140" stroke="rgba(16,185,129,0.5)" stroke-width="2" />

                <!-- Nodes -->
                <!-- Center Left: Client -->
                <g class="graph-node" transform="translate(160, 140)">
                  <circle r="36" fill="#0284c7" />
                  <text y="-4" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">CLIENTE</text>
                  <text y="12" fill="#ffffff" font-size="9" text-anchor="middle">Grupo Alfa SRL</text>
                </g>

                <!-- Top Center: Case 1 -->
                <g class="graph-node" transform="translate(350, 80)">
                  <circle r="32" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
                  <text y="-4" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">CASO 0418</text>
                  <text y="10" fill="#94a3b8" font-size="8" text-anchor="middle">Cobro de Pesos</text>
                </g>

                <!-- Bottom Center: Case 2 -->
                <g class="graph-node" transform="translate(350, 200)">
                  <circle r="32" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
                  <text y="-4" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">CONTRATO</text>
                  <text y="10" fill="#94a3b8" font-size="8" text-anchor="middle">Arrendamiento</text>
                </g>

                <!-- Center Right: Counterparty / Inmueble -->
                <g class="graph-node" transform="translate(540, 140)">
                  <circle r="34" fill="#047857" />
                  <text y="-4" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">VINCULADO</text>
                  <text y="11" fill="#ffffff" font-size="8" text-anchor="middle">Socio Mayoritario</text>
                </g>
              </svg>

              <div class="graph-legend">
                <span class="legend-item"><span class="legend-dot dot-blue" /> Cliente Principal</span>
                <span class="legend-item"><span class="legend-dot dot-cyan" /> Expedientes Activos</span>
                <span class="legend-item"><span class="legend-dot dot-green" /> Partes Vinculadas</span>
              </div>
            </div>
          </div>

          <!-- View 3: Plazos y Audiencias -->
          <div v-else class="calendar-view">
            <div class="view-header">
              <div>
                <h3 class="view-title">{{ t('showcase.calendarTitle') || 'Agenda Procesal y Plazos Perentorios' }}</h3>
                <p class="view-sub">{{ t('showcase.calendarSubtitle') || 'Alertas del sistema integradas para que ningún término expire' }}</p>
              </div>
            </div>

            <div class="timeline-list">
              <div class="timeline-item is-imminent">
                <div class="timeline-badge">24 OCT</div>
                <div class="timeline-content">
                  <span class="timeline-tag">Audiencia Oral · 9:00 AM</span>
                  <h4 class="timeline-title">Demanda Civil — Presentación de testigos y conclusiones</h4>
                  <p class="timeline-sub">Juzgado de Primera Instancia · Notificación a contraparte completada</p>
                </div>
              </div>

              <div class="timeline-item">
                <div class="timeline-badge">28 OCT</div>
                <div class="timeline-content">
                  <span class="timeline-tag tag-deadline">Vencimiento de Término Procesal</span>
                  <h4 class="timeline-title">Plazo para depósito de réplica y memorándum de defensa</h4>
                  <p class="timeline-sub">Caso Administrativo ProConsumidor · EXP-4910</p>
                </div>
              </div>

              <div class="timeline-item">
                <div class="timeline-badge">14 NOV</div>
                <div class="timeline-content">
                  <span class="timeline-tag tag-consular">Cita Consular</span>
                  <h4 class="timeline-title">Entrevista de Visa de Residencia / DS-260</h4>
                  <p class="timeline-sub">Sección Consular Embajada EE. UU. · Documentos apostillados listos</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>

    <!-- Features strip below showcase -->
    <div class="showcase-features">
      <div class="feat-item">
        <span class="feat-icon">🔒</span>
        <div>
          <strong>100% Cifrado en tu Equipo</strong>
          <p>Tus casos viven en SQLite cifrado localmente. Nadie en internet tiene acceso.</p>
        </div>
      </div>
      <div class="feat-item">
        <span class="feat-icon">🚫</span>
        <div>
          <strong>Cero Telemetría</strong>
          <p>Sin Google Analytics, sin rastreo de actividad, sin servidores que filtren datos.</p>
        </div>
      </div>
      <div class="feat-item">
        <span class="feat-icon">⚡</span>
        <div>
          <strong>Funciona sin Conexión</strong>
          <p>En el tribunal, sala de audiencias o en vuelo, tus expedientes están disponibles.</p>
        </div>
      </div>
      <div class="feat-item">
        <span class="feat-icon">⚖️</span>
        <div>
          <strong>Prevención de Conflictos</strong>
          <p>El mapa de vínculos te alerta al instante si una contraparte ya es cliente.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.showcase-container {
  width: 100%;
  max-width: 1080px;
  margin: 36px auto 0;
  border-radius: 18px;
  position: relative;
  transition: all 0.3s ease;
}

/* Outer Window Frame */
.window-frame {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 30px 90px -20px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.12);
  display: flex;
  flex-direction: column;
}

/* Dark theme colors */
.is-dark-theme .window-frame {
  background: #0f172a;
  color: #f1f5f9;
  border: 1px solid rgba(255, 255, 255, 0.12);
}
.is-dark-theme .window-titlebar {
  background: #090d16;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}
.is-dark-theme .app-sidebar {
  background: #0c1222;
  border-right: 1px solid rgba(255, 255, 255, 0.08);
}
.is-dark-theme .app-main {
  background: #0f172a;
}
.is-dark-theme .case-card {
  background: #1e293b;
  border: 1px solid rgba(255, 255, 255, 0.08);
}
.is-dark-theme .case-card:hover {
  border-color: rgba(56, 189, 248, 0.35);
}

/* Light theme colors */
.is-light-theme .window-frame {
  background: #ffffff;
  color: #1e293b;
  border: 1px solid rgba(0, 0, 0, 0.12);
  box-shadow: 0 30px 80px -20px rgba(0, 62, 153, 0.22), 0 0 0 1px rgba(0, 0, 0, 0.08);
}
.is-light-theme .window-titlebar {
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
}
.is-light-theme .app-sidebar {
  background: #f1f5f9;
  border-right: 1px solid #e2e8f0;
}
.is-light-theme .app-main {
  background: #ffffff;
}
.is-light-theme .case-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}
.is-light-theme .case-card:hover {
  border-color: rgba(2, 132, 199, 0.4);
}

/* Titlebar */
.window-titlebar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  gap: 16px;
}
.window-controls {
  display: flex;
  gap: 7px;
  align-items: center;
}
.control-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
}
.dot-close { background: #ff5f56; }
.dot-minimize { background: #ffbd2e; }
.dot-expand { background: #27c93f; }

.window-search {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  padding: 4px 12px;
  font-size: 12px;
  flex: 1;
  max-width: 420px;
  color: #94a3b8;
}
.is-light-theme .window-search {
  background: #ffffff;
  border-color: #cbd5e1;
  color: #64748b;
}

.window-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}
.theme-toggle-btn {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 6px;
  font-size: 11px;
  padding: 3px 8px;
  color: inherit;
  cursor: pointer;
  transition: all 0.2s;
}
.is-light-theme .theme-toggle-btn {
  background: #e2e8f0;
  border-color: #cbd5e1;
}
.security-badge {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  font-weight: 500;
  color: #10b981;
}
.sec-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #10b981;
  box-shadow: 0 0 8px #10b981;
}

/* Window Body */
.window-body {
  display: flex;
  min-height: 480px;
}

/* Sidebar */
.app-sidebar {
  width: 230px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
}
.sidebar-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}
.brand-avatar {
  width: 28px;
  height: 28px;
  border-radius: 7px;
  background: linear-gradient(135deg, #0284c7, #004cb8);
  display: flex;
  align-items: center;
  justify-content: center;
}
.brand-title {
  display: block;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: -0.01em;
}
.brand-sub {
  display: block;
  font-size: 11px;
  opacity: 0.65;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
}
.nav-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  color: inherit;
  background: transparent;
  border: none;
  width: 100%;
  text-align: left;
  cursor: pointer;
  transition: all 0.15s;
}
.is-dark-theme .nav-item:hover { background: rgba(255, 255, 255, 0.05); }
.is-light-theme .nav-item:hover { background: #e2e8f0; }

.nav-item.is-active {
  background: #0284c7 !important;
  color: #ffffff !important;
}
.nav-item.is-disabled {
  opacity: 0.55;
  cursor: default;
}

.nav-count {
  margin-left: auto;
  font-size: 11px;
  background: rgba(255, 255, 255, 0.15);
  padding: 2px 6px;
  border-radius: 999px;
}
.is-light-theme .nav-count {
  background: #cbd5e1;
}
.nav-count.alert-count {
  background: #ef4444;
  color: #ffffff;
}
.nav-pill-new {
  margin-left: auto;
  font-size: 9px;
  font-weight: 800;
  background: #8b5cf6;
  color: #ffffff;
  padding: 1px 5px;
  border-radius: 4px;
}

.sidebar-divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.08);
  margin: 10px 0;
}
.is-light-theme .sidebar-divider {
  background: #e2e8f0;
}

.sidebar-footer {
  margin-top: auto;
  padding-top: 10px;
}
.biometric-tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  color: #10b981;
  opacity: 0.85;
}

/* Main Area */
.app-main {
  flex: 1;
  padding: 20px 24px;
  overflow-x: hidden;
}

.view-header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 18px;
}
.view-title {
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.01em;
}
.view-sub {
  margin: 2px 0 0;
  font-size: 12px;
  opacity: 0.7;
}

.view-filters {
  display: flex;
  gap: 6px;
}
.filter-pill {
  font-size: 11px;
  padding: 3px 9px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  cursor: pointer;
}
.is-light-theme .filter-pill {
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
}
.filter-pill.is-active {
  background: #0284c7;
  color: #ffffff;
}

/* Cards List */
.cards-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.case-card {
  border-radius: 12px;
  padding: 14px 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: border-color 0.2s;
}

.card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.type-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 6px;
}
.type-judicial {
  background: rgba(2, 132, 199, 0.16);
  color: #38bdf8;
}
.type-migracion {
  background: rgba(168, 85, 247, 0.16);
  color: #c084fc;
}
.type-alquiler {
  background: rgba(16, 185, 129, 0.16);
  color: #34d399;
}

.is-light-theme .type-judicial { background: #e0f2fe; color: #0369a1; }
.is-light-theme .type-migracion { background: #f3e8ff; color: #7e22ce; }
.is-light-theme .type-alquiler { background: #d1fae5; color: #047857; }

.status-badge {
  font-size: 10px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 4px;
}
.status-active { background: rgba(56, 189, 248, 0.15); color: #38bdf8; }
.status-review { background: rgba(234, 179, 8, 0.15); color: #facc15; }
.status-ok { background: rgba(16, 185, 129, 0.15); color: #34d399; }

.card-heading {
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.01em;
}
.card-meta {
  margin: 4px 0 0;
  font-size: 12px;
  opacity: 0.8;
}
.card-parties {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  font-size: 12px;
  margin-top: 6px;
  opacity: 0.9;
}

.card-bottom {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding-top: 8px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}
.is-light-theme .card-bottom {
  border-top-color: #f1f5f9;
}

.card-alert {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
}
.alert-urgent { color: #f87171; }
.alert-info { color: #38bdf8; }
.alert-neutral { color: #94a3b8; }

.card-chips {
  display: flex;
  gap: 6px;
}
.chip {
  font-size: 10px;
  padding: 2px 6px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.06);
  opacity: 0.8;
}
.is-light-theme .chip {
  background: #f1f5f9;
}

/* Map View */
.map-view {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.graph-status {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: #10b981;
  background: rgba(16, 185, 129, 0.1);
  padding: 4px 10px;
  border-radius: 999px;
}
.graph-canvas {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.is-light-theme .graph-canvas {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
}
.graph-svg {
  width: 100%;
  max-height: 240px;
}
.graph-legend {
  display: flex;
  gap: 16px;
  margin-top: 10px;
  font-size: 11px;
}
.legend-item {
  display: flex;
  align-items: center;
  gap: 6px;
}
.legend-dot { width: 8px; height: 8px; border-radius: 50%; }
.dot-blue { background: #0284c7; }
.dot-cyan { background: #38bdf8; }
.dot-green { background: #047857; }

/* Timeline View */
.timeline-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.timeline-item {
  display: flex;
  gap: 16px;
  background: rgba(255, 255, 255, 0.04);
  padding: 14px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.08);
}
.is-light-theme .timeline-item {
  background: #ffffff;
  border-color: #e2e8f0;
}
.timeline-item.is-imminent {
  border-left: 4px solid #ef4444;
}
.timeline-badge {
  font-weight: 800;
  font-size: 13px;
  color: #38bdf8;
  width: 60px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.timeline-tag {
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  color: #ef4444;
}
.timeline-tag.tag-deadline { color: #f59e0b; }
.timeline-tag.tag-consular { color: #a855f7; }
.timeline-title {
  margin: 3px 0 0;
  font-size: 13px;
  font-weight: 600;
}
.timeline-sub {
  margin: 2px 0 0;
  font-size: 11px;
  opacity: 0.75;
}

/* Features Strip below Showcase */
.showcase-features {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 16px;
  margin-top: 24px;
}
@media (min-width: 640px) {
  .showcase-features {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) {
  .showcase-features {
    grid-template-columns: repeat(4, 1fr);
  }
}
.feat-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 16px;
  border-radius: 12px;
  text-align: left;
}
.feat-icon {
  font-size: 20px;
  line-height: 1;
}
.feat-item strong {
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 4px;
}
.feat-item p {
  margin: 0;
  font-size: 12px;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.7);
}

@media (max-width: 768px) {
  .app-sidebar {
    display: none;
  }
  .window-search {
    display: none;
  }
}
</style>
