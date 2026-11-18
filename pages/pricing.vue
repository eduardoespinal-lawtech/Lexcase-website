<script setup lang="ts">
const { t, locale } = useI18n()
const localePath = useLocalePath()
const isEn = computed(() => locale.value === 'en')

definePageMeta({ name: 'pricing' })

useHead(() => {
  const title = isEn.value
    ? 'Pricing Plans: Free & Pro Unlimited — Lexbell'
    : 'Planes de Precios: Gratuito y Pro Ilimitado — Lexbell'
  const desc = isEn.value
    ? 'Transparent pricing for legal case management. 15-day free Pro trial without credit card. Free forever up to 50 cases.'
    : 'Precios transparentes para gestión de expedientes legales. 15 días de prueba Pro gratis sin tarjeta. Gratis para siempre hasta 50 casos.'

  return {
    title,
    meta: [
      { name: 'description', content: desc },
      { property: 'og:title', content: title },
      { property: 'og:description', content: desc }
    ]
  }
})

// Toggle de facturación: 'monthly' o 'annual'
const billingPeriod = ref<'monthly' | 'annual'>('monthly')

// FAQs accordion
const openFaq = ref<number | null>(null)
function toggleFaq(index: number) {
  openFaq.value = openFaq.value === index ? null : index
}
</script>

<template>
  <main class="manus-pricing-canvas">
    <div class="manus-pricing-wrapper">

      <!-- Toggle Superior idéntico a Manus (Mensualmente | Anualmente · Ahorra 48%) -->
      <div class="flex justify-center mb-8 sm:mb-10">
        <div class="manus-exact-toggle" role="radiogroup" :aria-label="isEn ? 'Billing period' : 'Periodo de facturación'">
          <button
            type="button"
            role="radio"
            :aria-checked="billingPeriod === 'monthly'"
            class="manus-toggle-tab"
            :class="{ 'is-active': billingPeriod === 'monthly' }"
            @click="billingPeriod = 'monthly'"
          >
            {{ isEn ? 'Monthly' : 'Mensualmente' }}
          </button>

          <button
            type="button"
            role="radio"
            :aria-checked="billingPeriod === 'annual'"
            class="manus-toggle-tab"
            :class="{ 'is-active': billingPeriod === 'annual' }"
            @click="billingPeriod = 'annual'"
          >
            <span>{{ isEn ? 'Annually · Save 48%' : 'Anualmente · Ahorra 48%' }}</span>
          </button>
        </div>
      </div>

      <!-- Cuadrícula de 3 Tarjetas exactamente como la captura de Manus -->
      <div class="manus-pricing-cards-grid">

        <!-- ================= TARJETA 1 (IZQUIERDA - DESTACADA CON BORDE AZUL Y 48% OFF) ================= -->
        <div class="manus-card-box is-blue-featured">
          <!-- Cabecera de Precio e Insignia -->
          <div class="flex items-start justify-between">
            <div>
              <div class="flex items-baseline">
                <del v-if="billingPeriod === 'annual'" class="text-neutral-400 font-bold text-2xl mr-2">$7.99</del>
                <del v-else class="text-neutral-400 font-bold text-2xl mr-2">$15</del>
                <span class="manus-price-num">
                  {{ billingPeriod === 'annual' ? '$4.16' : '$7.99' }}
                </span>
                <span class="manus-price-unit">{{ isEn ? '/ mo' : '/ mes' }}</span>
              </div>
              <p class="manus-price-sub">
                {{ billingPeriod === 'annual'
                  ? (isEn ? 'billed $49.99/year, cancel anytime' : 'primer año $49.99, luego $95.88/año')
                  : (isEn ? 'first month, then $7.99/mo' : 'primer mes, luego $7.99/mes')
                }}
              </p>
            </div>

            <span class="manus-discount-badge">
              {{ billingPeriod === 'annual' ? '48% OFF' : '50% OFF' }}
            </span>
          </div>

          <!-- Categoría / Descripción Corta -->
          <p class="manus-desc-line">
            {{ isEn ? 'Standard monthly legal use' : 'Uso mensual estándar' }}
          </p>

          <!-- Botón Azul Sólido Redondeado -->
          <a href="#descargar" class="manus-btn-solid-blue">
            {{ isEn ? 'Upgrade' : 'Actualizar' }}
          </a>

          <!-- Lista de Características (En la tarjeta 1 de Manus no hay dropdown, va directo a la lista) -->
          <div class="manus-feat-list">
            <div class="manus-feat-row">
              <svg class="manus-row-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 21h5v-5"/></svg>
              <div class="manus-row-text">
                <span>{{ isEn ? 'MCP AI Connectors: Claude, Antigravity, Cursor, Codex' : 'Conectores MCP: IA local en 1 clic' }}</span>
                <span class="manus-info-tip" title="Model Context Protocol">ⓘ</span>
              </div>
            </div>

            <div class="manus-feat-row">
              <svg class="manus-row-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3z"/></svg>
              <div class="manus-row-text">
                <span>{{ isEn ? 'Unlimited active cases & document vault' : 'Expedientes activos ilimitados' }}</span>
                <span class="manus-info-tip" title="Sin restricciones de volumen">ⓘ</span>
              </div>
            </div>

            <div class="manus-feat-row">
              <svg class="manus-row-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
              <div class="manus-row-text">
                <span>{{ isEn ? 'In-depth statutory term calculator for daily tasks' : 'Cálculo procesal de plazos para tareas diarias' }}</span>
              </div>
            </div>

            <div class="manus-feat-row">
              <svg class="manus-row-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
              <div class="manus-row-text">
                <span>{{ isEn ? 'Professional PDF resolution vault for standard results' : 'Bóveda documental para resoluciones estándar' }}</span>
              </div>
            </div>

            <div class="manus-feat-row">
              <svg class="manus-row-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              <div class="manus-row-text">
                <span>{{ isEn ? 'Deontological conflict-of-interest relationship graph' : 'Mapa de vínculos para auditoría de conflictos' }}</span>
              </div>
            </div>

            <div class="manus-feat-row">
              <svg class="manus-row-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
              <div class="manus-row-text">
                <span>{{ isEn ? 'Automated daily backup to external drive or folder' : 'Respaldo automático a disco externo' }}</span>
              </div>
            </div>

            <div class="manus-feat-row">
              <svg class="manus-row-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2v7.31M14 2v7.31M8.5 2h7M14 9.3a6.5 6.5 0 1 1-4 0"/></svg>
              <div class="manus-row-text">
                <span>{{ isEn ? 'Early access to beta desktop features' : 'Acceso anticipado a funciones beta' }}</span>
              </div>
            </div>

            <div class="manus-feat-row">
              <svg class="manus-row-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/></svg>
              <div class="manus-row-text">
                <span>{{ isEn ? '20 concurrent court proceedings' : '20 expedientes concurrentes' }}</span>
              </div>
            </div>

            <div class="manus-feat-row">
              <svg class="manus-row-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              <div class="manus-row-text">
                <span>{{ isEn ? '20 scheduled court reminders' : '20 audiencias programadas' }}</span>
              </div>
            </div>
          </div>
        </div>


        <!-- ================= TARJETA 2 (CENTRO - PLAN GRATUITO $0) ================= -->
        <div class="manus-card-box">
          <!-- Cabecera de Precio -->
          <div class="flex items-start justify-between">
            <div>
              <div class="flex items-baseline">
                <span class="manus-price-num">$0</span>
                <span class="manus-price-unit">{{ isEn ? '/ mo' : '/ mes' }}</span>
              </div>
              <p class="manus-price-sub">
                {{ isEn ? 'free forever, no credit card required' : 'gratis para siempre sin tarjeta de crédito' }}
              </p>
            </div>
          </div>

          <!-- Categoría / Descripción Corta -->
          <p class="manus-desc-line">
            {{ isEn ? 'Customizable monthly starter use' : 'Uso mensual personalizable' }}
          </p>

          <!-- Botón Negro Sólido Redondeado -->
          <a href="#descargar" class="manus-btn-solid-dark">
            {{ isEn ? 'Upgrade' : 'Actualizar' }}
          </a>

          <!-- Caja de Selector / Métrica estilo Manus (con chevron ⌵) -->
          <div class="manus-dropdown-box">
            <span>{{ isEn ? 'Up to 50 active cases' : 'Hasta 50 expedientes activos' }}</span>
            <svg class="w-4 h-4 text-neutral-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
          </div>

          <!-- Lista de Características con Iconos de Manus -->
          <div class="manus-feat-list">
            <div class="manus-feat-row">
              <svg class="manus-row-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 21h5v-5"/></svg>
              <div class="manus-row-text">
                <span>{{ isEn ? 'Automatic local updates & zero cloud fees' : 'Actualizaciones periódicas sin coste de nube' }}</span>
                <span class="manus-info-tip" title="Sin suscripción obligatoria">ⓘ</span>
              </div>
            </div>

            <div class="manus-feat-row">
              <svg class="manus-row-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3z"/></svg>
              <div class="manus-row-text">
                <span>{{ isEn ? 'Up to 50 active files per month' : 'Hasta 50 expedientes activos por mes' }}</span>
                <span class="manus-info-tip" title="Sin fecha de caducidad">ⓘ</span>
              </div>
            </div>

            <div class="manus-feat-row">
              <svg class="manus-row-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
              <div class="manus-row-text">
                <span>{{ isEn ? 'Self-adjusting deep statutory deadline tracking' : 'Control de plazos con uso autoajustado' }}</span>
              </div>
            </div>

            <div class="manus-feat-row">
              <svg class="manus-row-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
              <div class="manus-row-text">
                <span>{{ isEn ? 'Local document storage for routine needs' : 'Bóveda local para necesidades cotidianas' }}</span>
              </div>
            </div>

            <div class="manus-feat-row">
              <svg class="manus-row-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              <div class="manus-row-text">
                <span>{{ isEn ? 'Client registry and case history records' : 'Registro de clientes e historial de casos' }}</span>
              </div>
            </div>

            <div class="manus-feat-row">
              <svg class="manus-row-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
              <div class="manus-row-text">
                <span>{{ isEn ? 'Manual backup and JSON export tailored to your plan' : 'Exportación manual adaptada al plan gratuito' }}</span>
              </div>
            </div>

            <div class="manus-feat-row">
              <svg class="manus-row-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2v7.31M14 2v7.31M8.5 2h7M14 9.3a6.5 6.5 0 1 1-4 0"/></svg>
              <div class="manus-row-text">
                <span>{{ isEn ? 'Standard community updates' : 'Actualizaciones estándar de la versión' }}</span>
              </div>
            </div>

            <div class="manus-feat-row">
              <svg class="manus-row-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/></svg>
              <div class="manus-row-text">
                <span>{{ isEn ? '10 concurrent active files' : '10 expedientes concurrentes' }}</span>
              </div>
            </div>

            <div class="manus-feat-row">
              <svg class="manus-row-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              <div class="manus-row-text">
                <span>{{ isEn ? '10 scheduled court hearings' : '10 audiencias programadas' }}</span>
              </div>
            </div>
          </div>
        </div>


        <!-- ================= TARJETA 3 (DERECHA - PLAN DESPACHO EN RED LOCAL) ================= -->
        <div class="manus-card-box">
          <!-- Cabecera de Precio -->
          <div class="flex items-start justify-between">
            <div>
              <div class="flex items-baseline">
                <span class="manus-price-num">
                  {{ billingPeriod === 'annual' ? '$4.16' : '$7.99' }}
                </span>
                <span class="manus-price-unit">{{ isEn ? '/ mo / seat' : '/ mes por puesto' }}</span>
              </div>
              <p class="manus-price-sub">
                {{ billingPeriod === 'annual'
                  ? (isEn ? 'billed $49.99/year per workstation' : 'facturado $49.99/año por equipo')
                  : (isEn ? 'billed monthly per workstation' : 'facturado mensualmente por equipo')
                }}
              </p>
            </div>
          </div>

          <!-- Categoría / Descripción Corta -->
          <p class="manus-desc-line">
            {{ isEn ? 'Extended productivity for law firms' : 'Uso extendido para la productividad' }}
          </p>

          <!-- Botón Negro Sólido Redondeado -->
          <a href="#descargar" class="manus-btn-solid-dark">
            {{ isEn ? 'Upgrade' : 'Actualizar' }}
          </a>

          <!-- Caja de Selector / Métrica estilo Manus (con chevron ⌵) -->
          <div class="manus-dropdown-box">
            <span>{{ isEn ? 'Local P2P Wi-Fi or Ethernet LAN' : 'Red local P2P Wi-Fi o cable Ethernet' }}</span>
            <svg class="w-4 h-4 text-neutral-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
          </div>

          <!-- Lista de Características con Iconos de Manus -->
          <div class="manus-feat-list">
            <div class="manus-feat-row">
              <svg class="manus-row-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 21h5v-5"/></svg>
              <div class="manus-row-text">
                <span>{{ isEn ? 'Real-time multi-workstation sync inside the office' : 'Sincronización en tiempo real sin nube' }}</span>
                <span class="manus-info-tip" title="Conexión P2P segura">ⓘ</span>
              </div>
            </div>

            <div class="manus-feat-row">
              <svg class="manus-row-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3z"/></svg>
              <div class="manus-row-text">
                <span>{{ isEn ? 'Unlimited shared cases across your firm' : 'Expedientes ilimitados compartidos' }}</span>
                <span class="manus-info-tip" title="Escalabilidad local">ⓘ</span>
              </div>
            </div>

            <div class="manus-feat-row">
              <svg class="manus-row-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
              <div class="manus-row-text">
                <span>{{ isEn ? 'Deep investigation for high-scale legal cases' : 'Investigación profunda para casos a gran escala' }}</span>
              </div>
            </div>

            <div class="manus-feat-row">
              <svg class="manus-row-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
              <div class="manus-row-text">
                <span>{{ isEn ? 'Shared local document repository with instant indexing' : 'Bóveda documental local con análisis de datos' }}</span>
              </div>
            </div>

            <div class="manus-feat-row">
              <svg class="manus-row-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              <div class="manus-row-text">
                <span>{{ isEn ? 'Firm-wide conflict-of-interest detection & cross-check' : 'Auditoría de conflictos para producción en lote' }}</span>
              </div>
            </div>

            <div class="manus-feat-row">
              <svg class="manus-row-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
              <div class="manus-row-text">
                <span>{{ isEn ? 'Extensive local backups adapted to heavy team usage' : 'Respaldo amplio para uso intensivo sostenido' }}</span>
              </div>
            </div>

            <div class="manus-feat-row">
              <svg class="manus-row-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2v7.31M14 2v7.31M8.5 2h7M14 9.3a6.5 6.5 0 1 1-4 0"/></svg>
              <div class="manus-row-text">
                <span>{{ isEn ? 'Early access to multi-seat beta features' : 'Acceso anticipado a funciones beta' }}</span>
              </div>
            </div>

            <div class="manus-feat-row">
              <svg class="manus-row-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/></svg>
              <div class="manus-row-text">
                <span>{{ isEn ? 'Unlimited concurrent users on LAN' : '20 tareas concurrentes por puesto' }}</span>
              </div>
            </div>

            <div class="manus-feat-row">
              <svg class="manus-row-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              <div class="manus-row-text">
                <span>{{ isEn ? 'Firm-wide synchronized calendar and reminders' : '20 tareas programadas' }}</span>
              </div>
            </div>
          </div>
        </div>

      </div>


      <!-- ================= TABLA DE COMPARATIVA COMPLETA ================= -->
      <section class="mt-20 pt-12 border-t border-[var(--border)]">
        <h2 class="font-serif text-2xl sm:text-3xl text-center mb-10 text-[var(--text)]">
          {{ isEn ? 'Compare plan features' : 'Comparativa detallada de planes' }}
        </h2>

        <div class="overflow-x-auto">
          <table class="w-full text-left text-sm border-collapse">
            <thead>
              <tr class="border-b border-[var(--border)]">
                <th class="py-3 px-4 font-semibold text-[var(--text)] w-2/5">{{ isEn ? 'Feature' : 'Característica' }}</th>
                <th class="py-3 px-4 font-semibold text-[var(--text)] text-center w-1/5 text-[#007aff]">{{ isEn ? 'Pro (Individual)' : 'Pro (Individual)' }}</th>
                <th class="py-3 px-4 font-semibold text-[var(--text)] text-center w-1/5">{{ isEn ? 'Free (Starter)' : 'Gratuito' }}</th>
                <th class="py-3 px-4 font-semibold text-[var(--text)] text-center w-1/5">{{ isEn ? 'Firm (LAN Sync)' : 'Despacho (LAN)' }}</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[var(--border)] text-[var(--text-muted)]">
              <tr>
                <td class="py-3 px-4 font-medium text-[var(--text)]">{{ isEn ? 'Active case files limit' : 'Límite de expedientes activos' }}</td>
                <td class="py-3 px-4 text-center font-semibold text-[#007aff]">{{ isEn ? 'Unlimited' : 'Ilimitados' }}</td>
                <td class="py-3 px-4 text-center font-medium">{{ isEn ? 'Up to 50' : 'Hasta 50' }}</td>
                <td class="py-3 px-4 text-center font-semibold text-[var(--text)]">{{ isEn ? 'Unlimited' : 'Ilimitados' }}</td>
              </tr>
              <tr>
                <td class="py-3 px-4 font-medium text-[var(--text)]">{{ isEn ? 'Data storage & privacy model' : 'Modelo de privacidad y almacenamiento' }}</td>
                <td class="py-3 px-4 text-center font-semibold text-[#007aff]">100% Local</td>
                <td class="py-3 px-4 text-center">100% Local</td>
                <td class="py-3 px-4 text-center font-semibold text-[var(--text)]">Local P2P LAN</td>
              </tr>
              <tr>
                <td class="py-3 px-4 font-medium text-[var(--text)]">{{ isEn ? 'MCP AI Connectors (Claude, Codex, Cursor)' : 'Conectores MCP para asistentes IA' }}</td>
                <td class="py-3 px-4 text-center text-[#007aff] font-bold">✓</td>
                <td class="py-3 px-4 text-center text-neutral-300 dark:text-neutral-700">—</td>
                <td class="py-3 px-4 text-center font-bold text-[var(--text)]">✓</td>
              </tr>
              <tr>
                <td class="py-3 px-4 font-medium text-[var(--text)]">{{ isEn ? 'Real-time multi-device sync in office' : 'Sincronización en red local en oficina' }}</td>
                <td class="py-3 px-4 text-center text-neutral-300 dark:text-neutral-700">—</td>
                <td class="py-3 px-4 text-center text-neutral-300 dark:text-neutral-700">—</td>
                <td class="py-3 px-4 text-center font-bold text-[var(--text)]">✓ (PIN 6 dígitos)</td>
              </tr>
              <tr>
                <td class="py-3 px-4 font-medium text-[var(--text)]">{{ isEn ? 'Statutory business-day & clear-day court deadlines' : 'Cómputo de plazos procesales y días hábiles' }}</td>
                <td class="py-3 px-4 text-center text-[#007aff] font-bold">✓</td>
                <td class="py-3 px-4 text-center">✓</td>
                <td class="py-3 px-4 text-center font-bold text-[var(--text)]">✓</td>
              </tr>
              <tr>
                <td class="py-3 px-4 font-medium text-[var(--text)]">{{ isEn ? 'Conflict-of-interest relationship graph' : 'Auditoría y mapa de vínculos de conflictos' }}</td>
                <td class="py-3 px-4 text-center text-[#007aff] font-bold">✓</td>
                <td class="py-3 px-4 text-center text-neutral-300 dark:text-neutral-700">—</td>
                <td class="py-3 px-4 text-center font-bold text-[var(--text)]">✓</td>
              </tr>
              <tr>
                <td class="py-3 px-4 font-medium text-[var(--text)]">{{ isEn ? 'Automated backup to external drives' : 'Respaldos automáticos a disco externo' }}</td>
                <td class="py-3 px-4 text-center text-[#007aff] font-bold">✓</td>
                <td class="py-3 px-4 text-center text-neutral-300 dark:text-neutral-700">{{ isEn ? 'Manual only' : 'Solo manual' }}</td>
                <td class="py-3 px-4 text-center font-bold text-[var(--text)]">✓</td>
              </tr>
              <tr>
                <td class="py-3 px-4 font-medium text-[var(--text)]">{{ isEn ? 'Native desktop offline speed (0 ms latency)' : 'Rendimiento nativo 0 ms de latencia' }}</td>
                <td class="py-3 px-4 text-center text-[#007aff] font-bold">✓</td>
                <td class="py-3 px-4 text-center">✓</td>
                <td class="py-3 px-4 text-center font-bold text-[var(--text)]">✓</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>


      <!-- ================= PREGUNTAS FRECUENTES (FAQ ACORDEÓN) ================= -->
      <section class="mt-20 pt-12 border-t border-[var(--border)] max-w-3xl mx-auto">
        <h2 class="font-serif text-2xl sm:text-3xl text-center mb-8 text-[var(--text)]">
          {{ isEn ? 'Frequently Asked Questions' : 'Preguntas frecuentes sobre precios' }}
        </h2>

        <div class="divide-y divide-[var(--border)] border-y border-[var(--border)]">
          <!-- FAQ 1 -->
          <div class="py-4">
            <button
              type="button"
              class="w-full flex items-center justify-between text-left py-2 font-medium text-[var(--text)] hover:text-[#007aff] transition-colors"
              @click="toggleFaq(1)"
            >
              <span>{{ isEn ? 'How does the 15-day free Pro trial work?' : '¿Cómo funciona la prueba gratuita de 15 días?' }}</span>
              <span class="text-xl leading-none text-neutral-400 font-light ml-4">
                {{ openFaq === 1 ? '−' : '+' }}
              </span>
            </button>
            <div v-show="openFaq === 1" class="pt-2 pb-3 text-sm text-[var(--text-muted)] leading-relaxed">
              {{ isEn
                ? 'When you download Lexbell, you automatically get 15 days of full Pro access with no credit card required. If you choose not to subscribe, your account automatically becomes Free forever with up to 50 active cases—you never lose your data.'
                : 'Al descargar e instalar Lexbell por primera vez, disfrutas automáticamente de 15 días con todas las funciones de Lexbell Pro sin ingresar ninguna tarjeta de crédito. Si decides no suscribirte, tu cuenta pasa automáticamente al plan gratuito de por vida (hasta 50 casos), sin perder jamás tus expedientes.'
              }}
            </div>
          </div>

          <!-- FAQ 2 -->
          <div class="py-4">
            <button
              type="button"
              class="w-full flex items-center justify-between text-left py-2 font-medium text-[var(--text)] hover:text-[#007aff] transition-colors"
              @click="toggleFaq(2)"
            >
              <span>{{ isEn ? 'What does 100% offline and zero-cloud mean for billing?' : '¿Qué significa que sea 100% local para la privacidad?' }}</span>
              <span class="text-xl leading-none text-neutral-400 font-light ml-4">
                {{ openFaq === 2 ? '−' : '+' }}
              </span>
            </button>
            <div v-show="openFaq === 2" class="pt-2 pb-3 text-sm text-[var(--text-muted)] leading-relaxed">
              {{ isEn
                ? 'Your case database, clients, court notes, and uploaded documents stay strictly inside your physical computer or local network. Lexbell servers never receive or store your client information. The app only validates your license cryptographically.'
                : 'Tus expedientes, clientes, actuaciones judiciales y documentos residen exclusivamente en tu propio disco duro o en la red local de tu oficina. Los servidores de Lexbell jamás reciben ni almacenan información de tus casos; únicamente se verifica la validez criptográfica de tu licencia.'
              }}
            </div>
          </div>

          <!-- FAQ 3 -->
          <div class="py-4">
            <button
              type="button"
              class="w-full flex items-center justify-between text-left py-2 font-medium text-[var(--text)] hover:text-[#007aff] transition-colors"
              @click="toggleFaq(3)"
            >
              <span>{{ isEn ? 'How does the LAN office sync work without cloud servers?' : '¿Cómo funciona la sincronización en red local sin nube?' }}</span>
              <span class="text-xl leading-none text-neutral-400 font-light ml-4">
                {{ openFaq === 3 ? '−' : '+' }}
              </span>
            </button>
            <div v-show="openFaq === 3" class="pt-2 pb-3 text-sm text-[var(--text-muted)] leading-relaxed">
              {{ isEn
                ? 'Computers on the same Wi-Fi or Ethernet network discover each other securely via a 6-digit PIN. Case updates sync directly between devices in real-time with zero internet latency, preserving strict attorney-client privilege.'
                : 'Los ordenadores conectados a la misma red Wi-Fi o cable Ethernet del despacho se descubren de forma segura mediante un PIN de 6 dígitos. Los cambios se sincronizan punto a punto (P2P) al instante sin pasar por ningún servidor externo en internet.'
              }}
            </div>
          </div>

          <!-- FAQ 4 -->
          <div class="py-4">
            <button
              type="button"
              class="w-full flex items-center justify-between text-left py-2 font-medium text-[var(--text)] hover:text-[#007aff] transition-colors"
              @click="toggleFaq(4)"
            >
              <span>{{ isEn ? 'Can I cancel or change my plan at any time?' : '¿Puedo cancelar o cambiar de plan en cualquier momento?' }}</span>
              <span class="text-xl leading-none text-neutral-400 font-light ml-4">
                {{ openFaq === 4 ? '−' : '+' }}
              </span>
            </button>
            <div v-show="openFaq === 4" class="pt-2 pb-3 text-sm text-[var(--text-muted)] leading-relaxed">
              {{ isEn
                ? 'Yes. You can manage your subscription directly from the Mac App Store, Microsoft Store, or customer portal. If you cancel, you will maintain Pro features until the end of the billing period, and your local data remains yours forever.'
                : 'Sí. Puedes gestionar tu suscripción en 1 clic directamente desde el Mac App Store, Microsoft Store o el portal de cliente. Si cancelas, mantendrás las funciones Pro hasta el final de tu período y todos tus expedientes guardados en local seguirán siendo tuyos para siempre.'
              }}
            </div>
          </div>
        </div>
      </section>

      <!-- Botones de Descarga al pie -->
      <div id="descargar" class="manus-download-footer-box">
        <AppDownload center />
        <p class="text-xs text-neutral-500 mt-3 text-center">
          {{ isEn ? 'Official downloads on Apple Mac App Store & Microsoft Store' : 'Descargas oficiales en Mac App Store y Microsoft Store' }}
        </p>
      </div>

    </div>
  </main>
</template>

<style scoped>
/* =================== SISTEMA DE PRECIOS RÉPLICA EXACTA DE MANUS =================== */
.manus-pricing-canvas {
  background: var(--bg);
  color: var(--text);
  padding: 40px 16px 80px;
  min-height: 100vh;
}

@media (min-width: 1024px) {
  .manus-pricing-canvas {
    padding: 60px 24px 100px;
  }
}

.manus-pricing-wrapper {
  max-width: 1080px;
  margin: 0 auto;
}

/* Toggle Superior idéntico a Manus */
.manus-exact-toggle {
  height: 34px;
  padding: 2.5px;
  border-radius: 9px;
  border: 1px solid var(--border);
  background: var(--bg-elevated);
  display: inline-flex;
  align-items: stretch;
  gap: 2px;
  user-select: none;
}

.manus-toggle-tab {
  height: 100%;
  padding: 0 16px;
  border-radius: 7px;
  border: none;
  background: transparent;
  color: var(--text-muted);
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s ease;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.manus-toggle-tab:hover {
  color: var(--text);
}

.manus-toggle-tab.is-active {
  background: var(--card-bg);
  color: var(--text);
  font-weight: 600;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

/* Cuadrícula de 3 Tarjetas */
.manus-pricing-cards-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  width: 100%;
}

@media (min-width: 768px) {
  .manus-pricing-cards-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    align-items: stretch;
  }
}

/* Tarjeta Base */
.manus-card-box {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 24px 22px 28px;
  display: flex;
  flex-direction: column;
}

/* Tarjeta Izquierda Destacada con Borde Azul (como en la captura de Manus) */
.manus-card-box.is-blue-featured {
  border: 2px solid #007aff !important;
  box-shadow: 0 4px 20px -4px rgba(0, 122, 255, 0.12);
}

/* Tipografía de Precios */
.manus-price-num {
  font-size: 34px;
  font-weight: 700;
  line-height: 1.1;
  color: var(--text);
  letter-spacing: -0.02em;
  font-variant-numeric: tabular-nums;
}

@media (min-width: 640px) {
  .manus-price-num {
    font-size: 38px;
  }
}

.manus-price-unit {
  font-size: 13.5px;
  color: var(--text-muted);
  font-weight: 400;
  margin-left: 4px;
}

.manus-price-sub {
  font-size: 12px;
  color: var(--text-muted);
  margin-top: 4px;
  margin-bottom: 0;
  min-height: 18px;
  line-height: 1.3;
}

/* Insignia de descuento */
.manus-discount-badge {
  background: #ebf5ff;
  color: #007aff;
  font-size: 11.5px;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: 5px;
  white-space: nowrap;
}

.dark .manus-discount-badge {
  background: rgba(0, 122, 255, 0.2);
  color: #60a5fa;
}

/* Línea de descripción / categoría */
.manus-desc-line {
  font-size: 14px;
  font-weight: 500;
  color: var(--text);
  margin-top: 18px;
  margin-bottom: 14px;
}

/* Botones Redondeados estilo Manus */
.manus-btn-solid-blue {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 38px;
  padding: 0 16px;
  border-radius: 9999px;
  background: #007aff;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: opacity 0.15s ease, transform 0.1s ease;
  margin-bottom: 16px;
}

.manus-btn-solid-blue:hover {
  opacity: 0.9;
  transform: translateY(-0.5px);
}

.manus-btn-solid-dark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 38px;
  padding: 0 16px;
  border-radius: 9999px;
  background: #171717;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: opacity 0.15s ease, transform 0.1s ease;
  margin-bottom: 12px;
}

.dark .manus-btn-solid-dark {
  background: #ffffff;
  color: #000000;
}

.manus-btn-solid-dark:hover {
  opacity: 0.9;
  transform: translateY(-0.5px);
}

/* Caja Dropdown / Selector estilo Manus */
.manus-dropdown-box {
  width: 100%;
  height: 38px;
  padding: 0 14px;
  border-radius: 9px;
  border: 1px solid var(--border);
  background: var(--bg-subtle);
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  font-size: 13px;
  font-weight: 500;
  color: var(--text);
}

/* Lista de Características con Iconos */
.manus-feat-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.manus-feat-row {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 13px;
  line-height: 1.4;
  color: var(--text);
}

.manus-row-icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  margin-top: 1.5px;
  color: var(--text-muted);
}

.manus-row-text {
  flex: 1;
  display: flex;
  align-items: baseline;
  gap: 5px;
}

.manus-info-tip {
  font-size: 11.5px;
  color: var(--text-muted);
  cursor: help;
  user-select: none;
  opacity: 0.75;
}

.manus-info-tip:hover {
  opacity: 1;
}

/* Caja de descarga inferior */
.manus-download-footer-box {
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
