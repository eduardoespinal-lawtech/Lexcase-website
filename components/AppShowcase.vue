<script setup lang="ts">
const isDark = ref(false)
const currentNav = ref<'cases' | 'graph' | 'calendar'>('cases')

// Tipos de casos en la app
const typeFilters = ['Todos', 'Judicial', 'Administrativo', 'Migración', 'Empresa', 'Alquiler', 'Compraventa']
const activeTypeFilter = ref('Todos')

// Expediente seleccionado en la lista
const selectedCaseIndex = ref(0)

const casesList = [
  {
    id: '1',
    tipo: 'Judicial',
    pais: 'República Dominicana',
    titulo: 'Demanda en Cobro de Pesos e Indemnización',
    numero: '024-2026-00418',
    tribunal: 'Cámara Civil y Comercial — 1ra Instancia DN',
    audiencia: '24 Oct · 9:00 AM',
    cliente: 'Construcciones del Este SRL',
    contraparte: 'Consorcio Metropolis SA',
    abogado: 'Lic. Rafael Sterling',
    honorarios: '$4,500 USD',
    cobrado: '$2,000 USD',
    pendiente: '$2,500 USD',
    fijado: true,
    documentos: 6,
    notas: 4
  },
  {
    id: '2',
    tipo: 'Migración',
    pais: 'Estados Unidos',
    titulo: 'Petición Familiar I-130 & Solicitud Visa DS-260',
    numero: 'NVC: SDO2026-98124',
    tribunal: 'National Visa Center · Sección Consular',
    audiencia: '14 Nov · Cita Consular',
    cliente: 'Roberto Méndez',
    contraparte: 'Laura Rosario Gómez (Beneficiaria)',
    abogado: 'A-Number: #208-419-882',
    honorarios: '$2,800 USD',
    cobrado: '$2,800 USD',
    pendiente: '$0 USD',
    fijado: true,
    documentos: 8,
    notas: 3
  },
  {
    id: '3',
    tipo: 'Alquiler',
    pais: 'República Dominicana',
    titulo: 'Contrato Arrendamiento Torre Ejecutiva',
    numero: 'ALQ-8525-0312',
    tribunal: 'Registro de Depósito · Banco Agrícola',
    audiencia: '15 Nov · Alerta Canon',
    cliente: 'Inmobiliaria Real SRL (Propietario)',
    contraparte: 'Soluciones Digitales SRL (Inquilino)',
    abogado: 'Bajo Ley 85-25',
    honorarios: '$1,200 USD',
    cobrado: '$1,200 USD',
    pendiente: '$0 USD',
    fijado: false,
    documentos: 3,
    notas: 2
  },
  {
    id: '4',
    tipo: 'Empresa',
    pais: 'República Dominicana',
    titulo: 'Constitución Holding Inmobiliario SRL',
    numero: 'ONAPI: 681.402 / RNC',
    tribunal: 'Cámara de Comercio y Producción',
    audiencia: '28 Oct · Entrega Registro',
    cliente: 'Grupo Financiero del Norte',
    contraparte: '3 Socios Constituyentes',
    abogado: 'Capital Social: RD$ 10,000,000',
    honorarios: '$3,000 USD',
    cobrado: '$1,500 USD',
    pendiente: '$1,500 USD',
    fijado: false,
    documentos: 5,
    notas: 1
  },
  {
    id: '5',
    tipo: 'Administrativo',
    pais: 'República Dominicana',
    titulo: 'Recurso Jerárquico Reconsideración Tributaria',
    numero: 'DGII-REC-2026-44',
    tribunal: 'Dirección General de Impuestos Internos',
    audiencia: '02 Nov · Vence Réplica',
    cliente: 'Distribuidora Panamericana SAS',
    contraparte: 'Administración Tributaria',
    abogado: 'Impugnación Liquidación',
    honorarios: '$3,800 USD',
    cobrado: '$1,900 USD',
    pendiente: '$1,900 USD',
    fijado: false,
    documentos: 12,
    notas: 5
  }
]

const currentCase = computed(() => casesList[selectedCaseIndex.value] || casesList[0])

const activeDetailTab = ref<'detalle' | 'documentos' | 'notas' | 'facturacion' | 'vinculados'>('detalle')

// Colores oficiales por tipo (fuente: utils/caseFormatters.ts de la app real)
const getTypeColor = (tipo: string) => {
  switch (tipo) {
    case 'Judicial': return { bg: '#3B82F6', text: '#3478F6', label: 'JUDICIAL' }
    case 'Administrativo': return { bg: '#F59E0B', text: '#D97706', label: 'ADMINISTRATIVO' }
    case 'Migración': return { bg: '#10B981', text: '#059669', label: 'MIGRACIÓN' }
    case 'Empresa': return { bg: '#64748B', text: '#475569', label: 'EMPRESA' }
    case 'Alquiler': return { bg: '#06B6D4', text: '#0891B2', label: 'ALQUILER' }
    case 'Compraventa': return { bg: '#8B5CF6', text: '#7C3AED', label: 'COMPRAVENTA' }
    default: return { bg: '#64748B', text: '#475569', label: tipo.toUpperCase() }
  }
}
</script>

<template>
  <div class="lx-app-window" :class="isDark ? 'is-dark' : 'is-light'">
    <!-- Window Bar con controles macOS -->
    <div class="lx-titlebar">
      <div class="lx-traffic-lights">
        <span class="lx-light lx-close" />
        <span class="lx-light lx-min" />
        <span class="lx-light lx-zoom" />
      </div>

      <div class="lx-titlebar-center">
        <span class="lx-window-app-name">Lexbell</span>
        <span class="lx-window-sep">—</span>
        <span class="lx-window-case-name">{{ currentCase.titulo }}</span>
      </div>

      <div class="lx-titlebar-right">
        <!-- Switch Modo Claro / Modo Oscuro -->
        <button
          type="button"
          class="lx-theme-btn"
          :title="isDark ? 'Cambiar a Modo Claro' : 'Cambiar a Modo Oscuro'"
          @click="isDark = !isDark"
        >
          <span v-if="isDark" class="lx-theme-mode">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
            <span>Claro</span>
          </span>
          <span v-else class="lx-theme-mode">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            <span>Oscuro</span>
          </span>
        </button>
      </div>
    </div>

    <!-- Contenedor Principal (Flex Horizontal) -->
    <div class="lx-body">
      <!-- 1. ACTIVITY BAR LATERAL (82px idéntica a IconSidebar.tsx) -->
      <nav class="lx-sidebar">
        <div class="lx-sidebar-drag" />

        <div class="lx-sidebar-group">
          <!-- Botón Casos (CasesGlyph: 4 círculos 2x2) -->
          <button
            class="lx-nav-btn"
            :class="{ 'is-active': currentNav === 'cases' }"
            @click="currentNav = 'cases'"
          >
            <span class="lx-nav-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" :fill="currentNav === 'cases' ? 'currentColor' : 'none'" stroke="currentColor" stroke-width="2">
                <circle cx="6.5" cy="6.5" r="4" />
                <circle cx="17.5" cy="6.5" r="4" />
                <circle cx="6.5" cy="17.5" r="4" />
                <circle cx="17.5" cy="17.5" r="4" />
              </svg>
            </span>
            <span class="lx-nav-label">Casos</span>
          </button>

          <!-- Botón Contactos -->
          <button class="lx-nav-btn" @click="currentNav = 'cases'">
            <span class="lx-nav-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="9.5" r="3.6" />
                <path d="M6.2 19.3a6.5 6.5 0 0 1 11.6 0A9.96 9.96 0 0 1 12 22a9.96 9.96 0 0 1-5.8-2.7Z" />
              </svg>
            </span>
            <span class="lx-nav-label">Contactos</span>
          </button>

          <!-- Botón Agenda con Badge Rojo de Alerta perentoria -->
          <button
            class="lx-nav-btn"
            :class="{ 'is-active': currentNav === 'calendar' }"
            @click="currentNav = 'calendar'"
          >
            <span class="lx-nav-icon relative">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <rect width="18" height="18" x="3" y="4" rx="2.5" />
                <path d="M7.5 1.5v4.5M16.5 1.5v4.5M3 9.5h18" />
              </svg>
              <!-- Urgencia Badge -->
              <span class="lx-badge-urgency">2</span>
            </span>
            <span class="lx-nav-label">Agenda</span>
          </button>

          <!-- Botón Finanzas -->
          <button class="lx-nav-btn" @click="currentNav = 'cases'">
            <span class="lx-nav-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
                <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
                <circle cx="16" cy="9" r="2.9" />
                <circle cx="6" cy="5" r="3" />
              </svg>
            </span>
            <span class="lx-nav-label">Finanzas</span>
          </button>

          <!-- Botón Documentos -->
          <button class="lx-nav-btn" @click="currentNav = 'cases'">
            <span class="lx-nav-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <path d="M4 20a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2" />
                <path d="m5.2 20 2.1-7.1A2 2 0 0 1 9.22 11.5H20a1.8 1.8 0 0 1 1.74 2.25l-1.34 4.75A2 2 0 0 1 18.48 20H5.2Z" />
              </svg>
            </span>
            <span class="lx-nav-label">Documentos</span>
          </button>

          <!-- Separador fino -->
          <div class="lx-sidebar-sep" />

          <!-- Botón Archivo -->
          <button class="lx-nav-btn" @click="currentNav = 'cases'">
            <span class="lx-nav-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <rect width="20" height="5" x="2" y="3" rx="1" />
                <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8M10 12h4" />
              </svg>
            </span>
            <span class="lx-nav-label">Archivo</span>
          </button>

          <!-- Botón Mapa (MapGlyph: GitFork invertido) -->
          <button
            class="lx-nav-btn"
            :class="{ 'is-active': currentNav === 'graph' }"
            @click="currentNav = 'graph'"
          >
            <span class="lx-nav-icon">
              <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="rotate-180">
                <circle cx="12" cy="18" r="3" :fill="currentNav === 'graph' ? 'currentColor' : 'none'" />
                <circle cx="6" cy="6" r="3" :fill="currentNav === 'graph' ? 'currentColor' : 'none'" />
                <circle cx="18" cy="6" r="3" :fill="currentNav === 'graph' ? 'currentColor' : 'none'" />
                <path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9" />
                <path d="M12 12v3" />
              </svg>
            </span>
            <span class="lx-nav-label">Mapa</span>
          </button>
        </div>

        <div class="lx-sidebar-bottom">
          <button class="lx-nav-btn" @click="currentNav = 'cases'">
            <span class="lx-nav-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </span>
            <span class="lx-nav-label">Ajustes</span>
          </button>
        </div>
      </nav>

      <!-- 2. VISTA CASOS: SPLIT LIST + DETAIL -->
      <div v-if="currentNav === 'cases'" class="lx-split-view">
        <!-- 2A. LISTA DE EXPEDIENTES (300px, fondo #EFEEEB / #1C1C1C) -->
        <aside class="lx-cases-list-panel">
          <!-- Top de lista: buscador y botón crear caso -->
          <div class="lx-list-top">
            <div class="lx-search-box">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              <span>Buscar... ⌘F</span>
            </div>
            <button class="lx-add-case-btn" title="Nuevo expediente (⌘N)">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><path d="M5 12h14M12 5v14"/></svg>
            </button>
          </div>

          <!-- Barra de filtros de tipos -->
          <div class="lx-type-pills">
            <button
              v-for="tp in typeFilters"
              :key="tp"
              class="lx-type-pill"
              :class="{ 'is-selected': activeTypeFilter === tp }"
              @click="activeTypeFilter = tp"
            >
              {{ tp }}
            </button>
          </div>

          <!-- Filas de Casos (CaseRow) -->
          <div class="lx-rows-container">
            <div
              v-for="(item, idx) in casesList"
              :key="item.id"
              class="lx-case-row"
              :class="{ 'is-selected': selectedCaseIndex === idx }"
              @click="selectedCaseIndex = idx"
            >
              <!-- CaseTypeIcon (w-[29px] h-[29px] rounded-lg sólido con icono blanco) -->
              <span
                class="lx-case-type-icon"
                :style="{ backgroundColor: getTypeColor(item.tipo).bg }"
              >
                <!-- Scale -->
                <svg v-if="item.tipo === 'Judicial'" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2">
                  <path d="M12 3v18M19 8l3 8a5 5 0 0 1-6 0zV7M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1M5 8l3 8a5 5 0 0 1-6 0zV7M7 21h10"/>
                </svg>
                <!-- Plane -->
                <svg v-else-if="item.tipo === 'Migración'" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2">
                  <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>
                </svg>
                <!-- House -->
                <svg v-else-if="item.tipo === 'Alquiler'" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2">
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                </svg>
                <!-- Building2 -->
                <svg v-else-if="item.tipo === 'Empresa'" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2">
                  <path d="M10 12h4M10 8h4M14 21v-3a2 2 0 0 0-4 0v3M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"/>
                </svg>
                <!-- Landmark -->
                <svg v-else width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2">
                  <path d="M10 18v-7M11.119 2.205a2 2 0 0 1 1.762 0l7.84 3.846A.5.5 0 0 1 20.5 7h-17a.5.5 0 0 1-.22-.949zM14 18v-7M18 18v-7M3 22h18M6 18v-7"/>
                </svg>
              </span>

              <div class="lx-case-row-meta">
                <div class="lx-row-title-wrap">
                  <p class="lx-row-title">{{ item.titulo }}</p>
                  <span v-if="item.fijado" class="lx-pin-icon" title="Fijado">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 17v5M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V5a1 1 0 0 1 1-1 1 1 0 0 0 1-1V2H7v1a1 1 0 0 0 1 1 1 1 0 0 1 1 1z"/></svg>
                  </span>
                </div>
                <p class="lx-row-sub">{{ item.numero }} · {{ item.audiencia }}</p>
              </div>
            </div>
          </div>
        </aside>

        <!-- 2B. DETALLE DEL EXPEDIENTE (CaseDetail, fondo #F6F5F3 / #171717) -->
        <main class="lx-case-detail-panel">
          <!-- Header de Identidad del Caso (CaseHeader.tsx) -->
          <div class="lx-detail-header">
            <p
              class="lx-case-category"
              :style="{ color: getTypeColor(currentCase.tipo).text }"
            >
              {{ getTypeColor(currentCase.tipo).label }} · {{ currentCase.pais.toUpperCase() }}
              <span class="lx-case-info-circle">ⓘ</span>
            </p>
            <h2 class="lx-case-title">{{ currentCase.titulo }}</h2>
          </div>

          <!-- Barra de Pestañas (TabsBar.tsx) -->
          <div class="lx-detail-tabs-bar">
            <button
              class="lx-detail-tab"
              :class="{ 'is-active': activeDetailTab === 'detalle' }"
              @click="activeDetailTab = 'detalle'"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
              <span>Detalle</span>
            </button>
            <button
              class="lx-detail-tab"
              :class="{ 'is-active': activeDetailTab === 'documentos' }"
              @click="activeDetailTab = 'documentos'"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/></svg>
              <span>Documentos</span>
              <span class="lx-tab-badge">{{ currentCase.documentos }}</span>
            </button>
            <button
              class="lx-detail-tab"
              :class="{ 'is-active': activeDetailTab === 'notas' }"
              @click="activeDetailTab = 'notas'"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"/><path d="M15 3v5h5"/></svg>
              <span>Notas</span>
              <span class="lx-tab-badge">{{ currentCase.notas }}</span>
            </button>
            <button
              class="lx-detail-tab"
              :class="{ 'is-active': activeDetailTab === 'facturacion' }"
              @click="activeDetailTab = 'facturacion'"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"/><circle cx="16" cy="9" r="2.9"/></svg>
              <span>Facturación</span>
            </button>
            <button
              class="lx-detail-tab"
              :class="{ 'is-active': activeDetailTab === 'vinculados' }"
              @click="activeDetailTab = 'vinculados'"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
              <span>Vinculados</span>
            </button>
          </div>

          <!-- Módulos Colapsables de Información Jurídica -->
          <div class="lx-modules-list">
            <!-- MÓDULO 1: Tribunal / Órgano -->
            <div class="lx-module-card">
              <div class="lx-module-header">
                <div class="lx-module-title-box">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#3478F6" stroke-width="2.2"><path d="M12 3v18M19 8l3 8a5 5 0 0 1-6 0zV7M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1M5 8l3 8a5 5 0 0 1-6 0zV7M7 21h10"/></svg>
                  <span class="lx-mod-name">Tribunal y Trámites</span>
                </div>
                <span class="lx-mod-badge">Expediente Oficial</span>
              </div>
              <div class="lx-module-grid">
                <div class="lx-field">
                  <span class="lx-label">Tribunal / Sede</span>
                  <span class="lx-val">{{ currentCase.tribunal }}</span>
                </div>
                <div class="lx-field">
                  <span class="lx-label">Número de Expediente</span>
                  <span class="lx-val font-mono">{{ currentCase.numero }}</span>
                </div>
                <div class="lx-field lx-field-alert">
                  <span class="lx-label">Próxima Audiencia / Plazo</span>
                  <span class="lx-val lx-val-urgent">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 14 14"/></svg>
                    {{ currentCase.audiencia }}
                  </span>
                </div>
              </div>
            </div>

            <!-- MÓDULO 2: Clientes y Contrapartes -->
            <div class="lx-module-card">
              <div class="lx-module-header">
                <div class="lx-module-title-box">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="9.5" r="3.6"/><path d="M6.2 19.3a6.5 6.5 0 0 1 11.6 0"/></svg>
                  <span class="lx-mod-name">Partes del Caso</span>
                </div>
                <span class="lx-mod-link">Ver en mapa ›</span>
              </div>
              <div class="lx-module-grid">
                <div class="lx-field">
                  <span class="lx-label">Cliente (Demandante / Solicitante)</span>
                  <span class="lx-val font-medium text-accent">{{ currentCase.cliente }}</span>
                </div>
                <div class="lx-field">
                  <span class="lx-label">Contraparte</span>
                  <span class="lx-val">{{ currentCase.contraparte }}</span>
                </div>
                <div class="lx-field">
                  <span class="lx-label">Abogado Oponente / Referencia</span>
                  <span class="lx-val">{{ currentCase.abogado }}</span>
                </div>
              </div>
            </div>

            <!-- MÓDULO 3: Finanzas y Honorarios -->
            <div class="lx-module-card">
              <div class="lx-module-header">
                <div class="lx-module-title-box">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="2.2"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"/><circle cx="16" cy="9" r="2.9"/></svg>
                  <span class="lx-mod-name">Honorarios y Finanzas</span>
                </div>
              </div>
              <div class="lx-fin-row">
                <div class="lx-fin-col">
                  <span class="lx-label">Pactado</span>
                  <span class="lx-fin-amount">{{ currentCase.honorarios }}</span>
                </div>
                <div class="lx-fin-col">
                  <span class="lx-label">Cobrado</span>
                  <span class="lx-fin-amount text-emerald">{{ currentCase.cobrado }}</span>
                </div>
                <div class="lx-fin-col">
                  <span class="lx-label">Pendiente</span>
                  <span class="lx-fin-amount text-amber">{{ currentCase.pendiente }}</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <!-- 3. VISTA MAPA DE VÍNCULOS (GraphView.tsx) -->
      <div v-else-if="currentNav === 'graph'" class="lx-full-graph-view">
        <div class="lx-graph-toolbar">
          <div class="lx-graph-info">
            <span class="lx-graph-badge">HUB DE RELACIONES</span>
            <h3 class="lx-graph-title">Mapa de Vínculos & Prevención de Conflictos de Interés</h3>
          </div>
          <div class="lx-graph-chip-safe">
            <span class="lx-safe-dot" />
            <span>0 Conflictos de interés</span>
          </div>
        </div>

        <div class="lx-graph-canvas">
          <svg class="lx-graph-svg" viewBox="0 0 800 320">
            <!-- Líneas de grafo -->
            <line x1="200" y1="160" x2="400" y2="90" stroke="rgba(52, 120, 246, 0.45)" stroke-width="2" stroke-dasharray="3 3" />
            <line x1="200" y1="160" x2="400" y2="230" stroke="rgba(52, 120, 246, 0.45)" stroke-width="2" stroke-dasharray="3 3" />
            <line x1="400" y1="90" x2="620" y2="160" stroke="rgba(16, 185, 129, 0.5)" stroke-width="2" />
            <line x1="400" y1="230" x2="620" y2="160" stroke="rgba(16, 185, 129, 0.5)" stroke-width="2" />

            <!-- Nodos -->
            <g transform="translate(200, 160)">
              <circle r="42" fill="#3478F6" filter="drop-shadow(0 4px 10px rgba(52,120,246,0.4))" />
              <text y="-5" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">CLIENTE</text>
              <text y="12" fill="#ffffff" font-size="9" text-anchor="middle">Construcciones SRL</text>
            </g>

            <g transform="translate(400, 90)">
              <circle r="36" fill="#1C1C1C" stroke="#3478F6" stroke-width="2.5" />
              <text y="-4" fill="#3478F6" font-size="10" font-weight="bold" text-anchor="middle">CASO CIVIL</text>
              <text y="11" fill="#94A3B8" font-size="8" text-anchor="middle">Cobro de Pesos</text>
            </g>

            <g transform="translate(400, 230)">
              <circle r="36" fill="#1C1C1C" stroke="#06B6D4" stroke-width="2.5" />
              <text y="-4" fill="#06B6D4" font-size="10" font-weight="bold" text-anchor="middle">ALQUILER</text>
              <text y="11" fill="#94A3B8" font-size="8" text-anchor="middle">Torre Ejecutiva</text>
            </g>

            <g transform="translate(620, 160)">
              <circle r="40" fill="#10B981" filter="drop-shadow(0 4px 10px rgba(16,185,129,0.3))" />
              <text y="-5" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">PARTE VINCULADA</text>
              <text y="12" fill="#ffffff" font-size="8" text-anchor="middle">Consorcio Metropolis</text>
            </g>
          </svg>
        </div>
      </div>

      <!-- 4. VISTA AGENDA / CALENDARIO (CalendarView.tsx) -->
      <div v-else class="lx-calendar-view">
        <div class="lx-cal-header">
          <h3 class="lx-cal-title">Agenda Judicial & Plazos Perentorios</h3>
          <span class="lx-cal-month">Octubre 2026</span>
        </div>
        <div class="lx-cal-items-list">
          <div class="lx-cal-item is-urgent">
            <span class="lx-cal-date-badge">24 OCT</span>
            <div class="lx-cal-content">
              <span class="lx-cal-urgency-tag">AUDIENCIA INMINENTE · 9:00 AM</span>
              <h4 class="lx-cal-event-title">Demanda Civil en Cobro de Pesos — Comparecencia y Medidas de Instrucción</h4>
              <p class="lx-cal-sub">Cámara Civil y Comercial de Primera Instancia · Notificaciones completadas</p>
            </div>
          </div>
          <div class="lx-cal-item">
            <span class="lx-cal-date-badge">28 OCT</span>
            <div class="lx-cal-content">
              <span class="lx-cal-deadline-tag">TÉRMINO PROCESAL · VENCE EN 9 DÍAS</span>
              <h4 class="lx-cal-event-title">Vencimiento para Depósito de Escrito de Réplica Tributaria</h4>
              <p class="lx-cal-sub">Dirección General de Impuestos Internos · Caso DGII-REC-2026-44</p>
            </div>
          </div>
          <div class="lx-cal-item">
            <span class="lx-cal-date-badge">14 NOV</span>
            <div class="lx-cal-content">
              <span class="lx-cal-consular-tag">CITA CONSULAR EE. UU.</span>
              <h4 class="lx-cal-event-title">Entrevista Consular Visa Inmigrante Familiar (DS-260)</h4>
              <p class="lx-cal-sub">Sección Consular Embajada EE. UU. · Documentos y VAC listos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* ==========================================================================
   VENTANA NATIVA LEXBELL (1:1 con el código fuente real de la aplicación)
   ========================================================================== */
.lx-app-window {
  width: 100%;
  max-width: 1080px;
  margin: 36px auto 0;
  border-radius: 14px;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI Variable", "Segoe UI", Roboto, sans-serif;
  box-shadow: 0 25px 70px -15px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1);
  text-align: left;
  user-select: none;
  transition: background-color 0.2s ease, border-color 0.2s ease;
}

/* Modo Claro: paleta real (#E8E6E1 sidebar, #EFEEEB lista, #F6F5F3 detalle) */
.lx-app-window.is-light {
  background: #F6F5F3;
  color: #0F0F0F;
  border: 1px solid rgba(0, 0, 0, 0.12);
  box-shadow: 0 25px 70px -15px rgba(0, 40, 120, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.08);
}

/* Modo Oscuro: paleta real (--lx-n1b #161616 sidebar, --lx-canvas #1C1C1C lista, #171717 detalle) */
.lx-app-window.is-dark {
  background: #171717;
  color: #E8E8EA;
  border: 1px solid #3A3A3A;
}

/* ----------------- TITLEBAR NATIVA CON SEMÁFOROS MAC ----------------- */
.lx-titlebar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 38px;
  padding: 0 16px;
  border-bottom: 1px solid;
}
.is-light .lx-titlebar {
  background: #E8E6E1;
  border-color: #D5D3CE;
}
.is-dark .lx-titlebar {
  background: #161616;
  border-color: #262626;
}

.lx-traffic-lights {
  display: flex;
  align-items: center;
  gap: 7px;
  width: 70px;
}
.lx-light {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
}
.lx-close { background: #FF5F56; }
.lx-min { background: #FFBD2E; }
.lx-zoom { background: #27C93F; }

.lx-titlebar-center {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 500;
  color: inherit;
  opacity: 0.85;
}
.lx-window-sep { opacity: 0.4; }
.lx-window-case-name { font-weight: 400; opacity: 0.9; }

.lx-theme-btn {
  display: inline-flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.08);
  padding: 3px 9px;
  border-radius: 6px;
  font-size: 11px;
  color: inherit;
  cursor: pointer;
  transition: all 0.15s;
}
.is-dark .lx-theme-btn {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.12);
}
.lx-theme-mode {
  display: inline-flex;
  align-items: center;
  gap: 5px;
}

/* ----------------- CUERPO DE LA APP ----------------- */
.lx-body {
  display: flex;
  min-height: 490px;
}

/* ----------------- 1. SIDEBAR VERTICAL (82px) ----------------- */
.lx-sidebar {
  width: 82px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 12px;
  border-right: 1px solid;
}
.is-light .lx-sidebar {
  background: #E8E6E1;
  border-color: #D5D3CE;
}
.is-dark .lx-sidebar {
  background: #161616;
  border-color: #262626;
}

.lx-sidebar-drag { height: 10px; }

.lx-sidebar-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  width: 100%;
}

.lx-nav-btn {
  position: relative;
  width: 72px;
  padding: 7px 0 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  background: transparent;
  border: none;
  border-radius: 8px;
  color: inherit;
  cursor: pointer;
  transition: background-color 0.15s ease;
}
.is-light .lx-nav-btn:hover { background: rgba(0, 0, 0, 0.04); }
.is-dark .lx-nav-btn:hover { background: rgba(255, 255, 255, 0.05); }

.is-light .lx-nav-btn.is-active {
  background: #DAD8D2;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}
.is-dark .lx-nav-btn.is-active {
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.lx-nav-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}
.lx-nav-label {
  font-size: 11px;
  font-weight: 400;
  line-height: 1.1;
  text-align: center;
}

.lx-badge-urgency {
  position: absolute;
  top: -3px;
  right: -7px;
  min-width: 15px;
  height: 15px;
  background: #FF3B30;
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
}

.lx-sidebar-sep {
  width: 32px;
  height: 1px;
  margin: 4px 0;
}
.is-light .lx-sidebar-sep { background: #D5D3CE; }
.is-dark .lx-sidebar-sep { background: #262626; }

.lx-sidebar-bottom {
  margin-top: auto;
}

/* ----------------- 2. VISTA SPLIT: LISTA + DETALLE ----------------- */
.lx-split-view {
  display: flex;
  flex: 1;
  min-width: 0;
}

/* LISTA DE CASOS (~290px) */
.lx-cases-list-panel {
  width: 290px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  border-right: 1px solid;
}
.is-light .lx-cases-list-panel {
  background: #EFEEEB;
  border-color: #DCDAD5;
}
.is-dark .lx-cases-list-panel {
  background: #1C1C1C;
  border-color: #2A2A2A;
}

.lx-list-top {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px 6px;
}
.lx-search-box {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 10px;
  border-radius: 7px;
  font-size: 12px;
  opacity: 0.75;
}
.is-light .lx-search-box {
  background: #FFFFFF;
  border: 1px solid #DFDDD8;
}
.is-dark .lx-search-box {
  background: #262626;
  border: 1px solid #333333;
}

.lx-add-case-btn {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: #3478F6;
  color: #fff;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.lx-type-pills {
  display: flex;
  gap: 5px;
  overflow-x: auto;
  padding: 4px 12px 8px;
  scrollbar-width: none;
}
.lx-type-pills::-webkit-scrollbar { display: none; }

.lx-type-pill {
  white-space: nowrap;
  font-size: 11px;
  padding: 2px 9px;
  border-radius: 999px;
  background: transparent;
  border: 1px solid rgba(0, 0, 0, 0.08);
  color: inherit;
  opacity: 0.75;
  cursor: pointer;
}
.is-dark .lx-type-pill {
  border-color: rgba(255, 255, 255, 0.1);
}
.lx-type-pill.is-selected {
  background: #3478F6;
  border-color: #3478F6;
  color: #ffffff;
  opacity: 1;
}

.lx-rows-container {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 4px 8px 12px;
}
.lx-case-row {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 10px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.15s ease;
}
.is-light .lx-case-row:hover:not(.is-selected) {
  background: #E5E3DD;
}
.is-dark .lx-case-row:hover:not(.is-selected) {
  background: #252525;
}

/* Fila Seleccionada (estilo macOS real) */
.is-light .lx-case-row.is-selected {
  background: #DFDDD7;
}
.is-dark .lx-case-row.is-selected {
  background: #383838;
}

/* Caja de icono del tipo (w-[29px] h-[29px] rounded-lg) */
.lx-case-type-icon {
  width: 29px;
  height: 29px;
  border-radius: 8px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lx-case-row-meta {
  flex: 1;
  min-width: 0;
}
.lx-row-title-wrap {
  display: flex;
  align-items: center;
  gap: 6px;
}
.lx-row-title {
  margin: 0;
  font-size: 13px;
  line-height: 1.25;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.lx-case-row.is-selected .lx-row-title {
  font-weight: 600;
}
.lx-pin-icon {
  color: #94A3B8;
  display: flex;
}
.lx-row-sub {
  margin: 2px 0 0;
  font-size: 11px;
  opacity: 0.65;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* ----------------- DETALLE DEL CASO (CaseDetail.tsx) ----------------- */
.lx-case-detail-panel {
  flex: 1;
  min-width: 0;
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow-y: auto;
}

.lx-detail-header {
  display: flex;
  flex-direction: column;
}
.lx-case-category {
  margin: 0 0 6px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.lx-case-info-circle {
  color: #3478F6;
  font-size: 13px;
  cursor: pointer;
}
.lx-case-title {
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.015em;
  line-height: 1.25;
}

/* Tabs Bar */
.lx-detail-tabs-bar {
  display: flex;
  gap: 6px;
  border-bottom: 1px solid;
  padding-bottom: 8px;
}
.is-light .lx-detail-tabs-bar { border-color: #E2E0D9; }
.is-dark .lx-detail-tabs-bar { border-color: #2E2E2E; }

.lx-detail-tab {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  font-size: 12px;
  font-weight: 500;
  border-radius: 6px;
  background: transparent;
  border: none;
  color: inherit;
  opacity: 0.7;
  cursor: pointer;
}
.lx-detail-tab.is-active {
  background: rgba(52, 120, 246, 0.12);
  color: #3478F6;
  opacity: 1;
  font-weight: 600;
}
.lx-tab-badge {
  background: rgba(0, 0, 0, 0.08);
  font-size: 10px;
  padding: 1px 6px;
  border-radius: 999px;
}
.is-dark .lx-tab-badge { background: rgba(255, 255, 255, 0.12); }

/* Módulos en Tarjetas */
.lx-modules-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.lx-module-card {
  border-radius: 12px;
  padding: 14px 16px;
  border: 1px solid;
}
.is-light .lx-module-card {
  background: #FFFFFF;
  border-color: rgba(0, 0, 0, 0.06);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
}
.is-dark .lx-module-card {
  background: #242424;
  border-color: #3A3A3A;
}

.lx-module-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}
.lx-module-title-box {
  display: flex;
  align-items: center;
  gap: 7px;
}
.lx-mod-name {
  font-size: 13px;
  font-weight: 600;
  letter-spacing: -0.01em;
}
.lx-mod-badge {
  font-size: 10px;
  padding: 2px 7px;
  border-radius: 4px;
  background: rgba(52, 120, 246, 0.1);
  color: #3478F6;
  font-weight: 600;
}
.lx-mod-link {
  font-size: 11px;
  color: #3478F6;
  cursor: pointer;
}

.lx-module-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}
.lx-field {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.lx-label {
  font-size: 10.5px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  opacity: 0.6;
}
.lx-val {
  font-size: 12.5px;
  line-height: 1.35;
}
.lx-val-urgent {
  color: #FF3B30;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.lx-fin-row {
  display: flex;
  gap: 32px;
}
.lx-fin-col {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.lx-fin-amount {
  font-size: 16px;
  font-weight: 700;
}
.text-emerald { color: #10B981; }
.text-amber { color: #F59E0B; }

/* ----------------- 3. VISTA MAPA DE VÍNCULOS (GraphView) ----------------- */
.lx-full-graph-view {
  flex: 1;
  background: #1C1C1C;
  color: #F8FAFC;
  display: flex;
  flex-direction: column;
  position: relative;
}
.lx-graph-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px;
  border-bottom: 1px solid #2C2C2C;
}
.lx-graph-badge {
  font-size: 10px;
  font-weight: 700;
  color: #3478F6;
  letter-spacing: 0.08em;
}
.lx-graph-title {
  margin: 2px 0 0;
  font-size: 14px;
  font-weight: 600;
}
.lx-graph-chip-safe {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  border-radius: 999px;
  background: rgba(16, 185, 129, 0.15);
  color: #10B981;
  font-size: 12px;
  font-weight: 600;
}
.lx-safe-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #10B981;
  box-shadow: 0 0 6px #10B981;
}

.lx-graph-canvas {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: radial-gradient(#333333 1px, transparent 1px);
  background-size: 20px 20px;
  padding: 20px;
}
.lx-graph-svg {
  width: 100%;
  max-height: 280px;
}

/* ----------------- 4. VISTA AGENDA / CALENDARIO ----------------- */
.lx-calendar-view {
  flex: 1;
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.lx-cal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.lx-cal-title {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
}
.lx-cal-month {
  font-size: 13px;
  font-weight: 600;
  color: #3478F6;
}
.lx-cal-items-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.lx-cal-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 12px 14px;
  border-radius: 10px;
  border: 1px solid;
}
.is-light .lx-cal-item {
  background: #FFFFFF;
  border-color: #E2E0D9;
}
.is-dark .lx-cal-item {
  background: #242424;
  border-color: #3A3A3A;
}
.lx-cal-item.is-urgent {
  border-left: 4px solid #FF3B30;
}
.lx-cal-date-badge {
  font-weight: 800;
  font-size: 12px;
  color: #3478F6;
  min-width: 54px;
}
.lx-cal-content {
  flex: 1;
}
.lx-cal-urgency-tag {
  font-size: 10px;
  font-weight: 700;
  color: #FF3B30;
}
.lx-cal-deadline-tag {
  font-size: 10px;
  font-weight: 700;
  color: #F59E0B;
}
.lx-cal-consular-tag {
  font-size: 10px;
  font-weight: 700;
  color: #10B981;
}
.lx-cal-event-title {
  margin: 2px 0 0;
  font-size: 13px;
  font-weight: 600;
}
.lx-cal-sub {
  margin: 2px 0 0;
  font-size: 11px;
  opacity: 0.7;
}

@media (max-width: 820px) {
  .lx-sidebar { display: none; }
  .lx-cases-list-panel { width: 100%; border-right: none; }
  .lx-case-detail-panel { display: none; }
}
</style>
