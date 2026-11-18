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

// Toggle de facturación: 'annual' o 'monthly' (por defecto 'annual' para mostrar el ahorro del 48%)
const billingPeriod = ref<'annual' | 'monthly'>('annual')

const openFaq = ref<number | null>(null)
const toggleFaq = (idx: number) => {
  openFaq.value = openFaq.value === idx ? null : idx
}

const pricingFaqs = computed(() => {
  if (isEn.value) {
    return [
      {
        q: 'Do I need to enter a credit card to try the 15-day Pro trial?',
        a: 'No. You can download Lexbell directly from the Mac App Store or Microsoft Store and begin your 15-day Pro trial immediately with zero payment information required.'
      },
      {
        q: 'What happens when my 15-day trial ends?',
        a: 'If you handle 50 cases or fewer, you can continue using Lexbell 100% free forever. If you manage more than 50 cases, you can upgrade to Pro for just US$4.16/month (billed annually at US$49.99) or US$7.99/month. Your files and database remain completely safe on your local disk.'
      },
      {
        q: 'How does billing work through Apple and Microsoft stores?',
        a: 'Subscriptions are processed securely by Apple (Mac App Store) or Microsoft (Microsoft Store) using the payment method in your official operating system account. You can cancel or manage your plan at any time with one click.'
      },
      {
        q: 'Can I keep my data if I cancel my Pro subscription?',
        a: 'Yes, absolutely. Because Lexbell is local-first, all your case files and documents are stored directly on your computer. You never lose access to your records.'
      }
    ]
  }
  return [
    {
      q: '¿Necesito ingresar tarjeta de crédito para iniciar la prueba de 15 días?',
      a: 'No. Puedes descargar Lexbell directamente desde la Mac App Store o Microsoft Store e iniciar tu prueba Pro de 15 días inmediatamente sin ingresar ningún dato de pago.'
    },
    {
      q: '¿Qué ocurre al terminar los 15 días de prueba?',
      a: 'Si manejas 50 expedientes o menos, puedes continuar usando Lexbell 100% gratis para siempre. Si superas los 50 casos, puedes activar Pro por solo US$4.16/mes (facturado anualmente a US$49.99) o US$7.99/mes. Tus archivos y base de datos nunca se bloquean.'
    },
    {
      q: '¿Cómo funciona la facturación en las tiendas de Apple y Microsoft?',
      a: 'Las suscripciones se gestionan de forma 100% oficial y segura mediante Apple (Mac App Store) o Microsoft (Microsoft Store) con el método de pago vinculado a tu cuenta del sistema operativo. Puedes cancelar con un solo clic cuando lo desees.'
    },
    {
      q: '¿Puedo conservar mis expedientes si decido cancelar Pro?',
      a: 'Sí, totalmente. Al ser una aplicación local, todos tus expedientes y documentos se guardan directamente en tu propio ordenador. Nunca pierdes el acceso a tu información.'
    }
  ]
})
</script>

<template>
  <main class="manus-pricing-page">
    <div class="manus-pricing-container">
      <!-- Título Principal estilo Manus (font-serif 32px a 48px) -->
      <div class="text-center max-w-[800px] mx-auto mb-6">
        <h1 class="manus-pricing-title">
          {{ isEn ? 'Lexbell Pricing Plans' : 'Planes de Precios de Lexbell' }}
        </h1>
        <p class="manus-pricing-subtitle">
          {{ isEn
            ? '15-day full Pro trial with zero credit card required. Free forever up to 50 active cases.'
            : '15 días de prueba Pro completa sin tarjeta de crédito. Gratis para siempre hasta 50 expedientes.'
          }}
        </p>
      </div>

      <!-- Toggle de Facturación estilo Manus (h-8 p-[1px] rounded-[8px]) -->
      <div class="manus-toggle-wrapper">
        <div class="manus-billing-toggle" role="radiogroup" :aria-label="isEn ? 'Billing period' : 'Periodo de facturación'">
          <button
            type="button"
            role="radio"
            :aria-checked="billingPeriod === 'monthly'"
            class="manus-toggle-btn"
            :class="{ 'is-active': billingPeriod === 'monthly' }"
            @click="billingPeriod = 'monthly'"
          >
            {{ isEn ? 'Monthly' : 'Mensual' }}
          </button>

          <button
            type="button"
            role="radio"
            :aria-checked="billingPeriod === 'annual'"
            class="manus-toggle-btn"
            :class="{ 'is-active': billingPeriod === 'annual' }"
            @click="billingPeriod = 'annual'"
          >
            <span>{{ isEn ? 'Annually · Save 48%' : 'Anual · Ahorra 48%' }}</span>
          </button>
        </div>
      </div>

      <!-- Cuadrícula de 3 Tarjetas estilo Manus -->
      <div class="manus-cards-grid">
        <!-- PLAN 1: GRATUITO (FREE) -->
        <div class="manus-plan-card">
          <div class="manus-card-top">
            <div class="flex items-center justify-between gap-2 pb-3">
              <span class="manus-plan-name">{{ isEn ? 'Free' : 'Gratuito' }}</span>
            </div>

            <div class="flex items-baseline gap-1.5 h-[56px]">
              <div class="manus-price-figure">$0</div>
              <div class="manus-price-period">{{ isEn ? '/ month' : '/ mes' }}</div>
            </div>

            <p class="manus-plan-desc">
              {{ isEn ? 'Try Lexbell on your initial case portfolio' : 'Para organizar tu práctica jurídica sin ningún costo' }}
            </p>

            <div class="pt-4">
              <a href="#descargar" class="manus-card-cta manus-cta-outline">
                {{ isEn ? 'Get started free' : 'Descargar gratis' }}
              </a>
            </div>

            <!-- Caja de Capacidad estilo Manus Credits Box -->
            <div class="manus-metric-box mt-4">
              <span class="font-semibold text-[var(--text)]">50</span>
              <span class="text-[var(--text-muted)] ml-1.5">{{ isEn ? 'active case files' : 'expedientes activos' }}</span>
            </div>
          </div>

          <div class="manus-card-bottom">
            <div class="manus-features-heading">
              {{ isEn ? 'Included with Free:' : 'Todo lo que incluye:' }}
            </div>
            <ul class="manus-features-list">
              <li>
                <svg class="manus-feat-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                <span>{{ isEn ? '100% Local on disk, zero cloud servers' : '100% Local en disco, cero nube' }}</span>
              </li>
              <li>
                <svg class="manus-feat-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                <span>{{ isEn ? 'Court calendar, deadlines, and hearing notes' : 'Agenda procesal, audiencias y plazos' }}</span>
              </li>
              <li>
                <svg class="manus-feat-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                <span>{{ isEn ? 'Instant global search across all files (⌘E)' : 'Búsqueda global instantánea (⌘E)' }}</span>
              </li>
              <li>
                <svg class="manus-feat-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                <span>{{ isEn ? 'Document vault and instant PDF preview' : 'Bóveda de documentos y vista PDF' }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- PLAN 2: PRO (DESTACADO CON CONTORNO AZUL ESTILO MANUS MAX) -->
        <div class="manus-plan-card is-featured">
          <div class="manus-card-top">
            <div class="flex items-center justify-between gap-2 pb-3">
              <span class="manus-plan-name">{{ isEn ? 'Pro' : 'Pro' }}</span>
              <span class="manus-badge-featured">{{ isEn ? 'Most popular' : 'El más popular' }}</span>
            </div>

            <div class="flex items-baseline gap-1.5 h-[56px]">
              <div class="manus-price-figure">
                {{ billingPeriod === 'annual' ? 'US$4.16' : 'US$7.99' }}
              </div>
              <div class="manus-price-period">
                {{ billingPeriod === 'annual'
                  ? (isEn ? '/ mo, billed yearly ($49.99)' : '/ mes, facturado $49.99/año')
                  : (isEn ? '/ month, billed monthly' : '/ mes, facturado mensual')
                }}
              </div>
            </div>

            <p class="manus-plan-desc">
              {{ isEn ? 'For everyday unlimited legal practice and AI workflows' : 'Para el ejercicio profesional diario sin límites y con IA' }}
            </p>

            <div class="pt-4">
              <a href="#descargar" class="manus-card-cta manus-cta-primary">
                {{ isEn ? 'Start 15-day free trial' : 'Probar 15 días gratis' }}
              </a>
            </div>

            <!-- Caja de Capacidad estilo Manus -->
            <div class="manus-metric-box is-featured mt-4">
              <span class="font-semibold text-blue-600 dark:text-blue-400">
                {{ isEn ? 'Unlimited cases' : 'Expedientes ilimitados' }}
              </span>
              <span class="text-blue-500/80 ml-1.5">· {{ isEn ? '15-day free trial' : '15 días gratis sin tarjeta' }}</span>
            </div>
          </div>

          <div class="manus-card-bottom">
            <div class="manus-features-heading text-blue-600 dark:text-blue-400 font-medium">
              {{ isEn ? 'Everything in Free, plus:' : 'Todo lo de Gratuito, más:' }}
            </div>
            <ul class="manus-features-list">
              <li>
                <svg class="manus-feat-icon text-blue-500" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                <span><strong>{{ isEn ? 'MCP AI Connectors:' : 'Conectores MCP (IA):' }}</strong> {{ isEn ? '1-click with Claude, Antigravity, Cursor & Codex' : '1 clic con Claude, Antigravity, Cursor y Codex' }}</span>
              </li>
              <li>
                <svg class="manus-feat-icon text-blue-500" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>
                <span><strong>{{ isEn ? 'Share in Office:' : 'Compartir en oficina:' }}</strong> {{ isEn ? 'Local Wi-Fi / LAN real-time sync with PIN' : 'Sincronización en red local Wi-Fi con PIN' }}</span>
              </li>
              <li>
                <svg class="manus-feat-icon text-blue-500" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
                <span>{{ isEn ? 'Conflict of interest prevention & relationship graph' : 'Prevención de conflictos y mapa de vínculos' }}</span>
              </li>
              <li>
                <svg class="manus-feat-icon text-blue-500" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                <span>{{ isEn ? 'Automated scheduled JSON backups to external drive' : 'Respaldos automáticos a disco externo' }}</span>
              </li>
              <li>
                <svg class="manus-feat-icon text-blue-500" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                <span>{{ isEn ? 'Statutory business-day & clear-day court terms' : 'Cómputo en días hábiles y términos francos' }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- PLAN 3: DESPACHO / OFICINA (OFFICE TEAM) -->
        <div class="manus-plan-card">
          <div class="manus-card-top">
            <div class="flex items-center justify-between gap-2 pb-3">
              <span class="manus-plan-name">{{ isEn ? 'Office Firm' : 'Despacho' }}</span>
              <span class="manus-badge-lan">{{ isEn ? 'Local Network' : 'Red Local' }}</span>
            </div>

            <div class="flex items-baseline gap-1.5 h-[56px]">
              <div class="manus-price-figure">
                {{ billingPeriod === 'annual' ? 'US$4.16' : 'US$7.99' }}
              </div>
              <div class="manus-price-period">
                {{ isEn ? '/ mo per device' : '/ mes por puesto' }}
              </div>
            </div>

            <p class="manus-plan-desc">
              {{ isEn ? 'For law firms collaborating inside the same office' : 'Para firmas jurídicas con varios abogados en la misma oficina' }}
            </p>

            <div class="pt-4">
              <a href="#descargar" class="manus-card-cta manus-cta-outline">
                {{ isEn ? 'Download for office' : 'Descargar para oficina' }}
              </a>
            </div>

            <!-- Caja de Capacidad estilo Manus -->
            <div class="manus-metric-box is-lan mt-4">
              <span class="font-semibold text-emerald-600 dark:text-emerald-400">
                {{ isEn ? 'Multi-workstation P2P' : 'Colaboración P2P local' }}
              </span>
              <span class="text-emerald-600/80 ml-1.5">· {{ isEn ? 'Protected with 6-digit PIN' : 'Protegido con PIN de 6 dígitos' }}</span>
            </div>
          </div>

          <div class="manus-card-bottom">
            <div class="manus-features-heading">
              {{ isEn ? 'Everything in Pro, plus:' : 'Todo lo de Pro, más:' }}
            </div>
            <ul class="manus-features-list">
              <li>
                <svg class="manus-feat-icon text-emerald-500" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>
                <span>{{ isEn ? 'Instant real-time sync across Wi-Fi or Ethernet' : 'Sincronización instantánea por Wi-Fi o cable' }}</span>
              </li>
              <li>
                <svg class="manus-feat-icon text-emerald-500" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                <span>{{ isEn ? 'PIN pairing ensures only authorized firm laptops connect' : 'Emparejamiento seguro con PIN de 6 dígitos' }}</span>
              </li>
              <li>
                <svg class="manus-feat-icon text-emerald-500" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                <span>{{ isEn ? 'Strict attorney-client privilege: zero cloud transit' : 'Secreto profesional estricto: cero nube' }}</span>
              </li>
              <li>
                <svg class="manus-feat-icon text-emerald-500" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>
                <span>{{ isEn ? 'Mix Mac & Windows seamlessly on the same LAN' : 'Mac y Windows combinables en la misma red' }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Banner de Seguridad & Deontología estilo Manus (Security & Compliance banner) -->
      <div class="manus-security-banner mt-8">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center flex-shrink-0">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <div>
            <div class="text-sm font-semibold text-[var(--text)]">
              {{ isEn ? 'Attorney-Client Privilege by Design' : 'Secreto Profesional y Soberanía Local por Diseño' }}
            </div>
            <div class="text-[13px] text-[var(--text-muted)] mt-0.5">
              {{ isEn
                ? 'Your client data never leaves your computer. AES-256 local encryption with zero tracking and zero cloud servers.'
                : 'Tus expedientes viven cifrados únicamente en tu equipo. Cifrado local AES-256 sin intermediarios ni nube.'
              }}
            </div>
          </div>
        </div>

        <NuxtLink :to="localePath('features') + '#documentos'" class="manus-banner-link">
          <span>{{ isEn ? 'Learn about security' : 'Conocer arquitectura' }}</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </NuxtLink>
      </div>

      <!-- FAQ de Precios estilo Manus (Acordeón Lineal) -->
      <section class="mt-16 max-w-[800px] mx-auto w-full" id="faq">
        <div class="text-center mb-8">
          <span class="manus-eyebrow">{{ t('nav.faq') }}</span>
          <h2 class="manus-faq-title">
            {{ isEn ? 'Frequently Asked Questions about Pricing' : 'Preguntas Frecuentes sobre Precios' }}
          </h2>
        </div>

        <div class="manus-faq-list">
          <div
            v-for="(item, idx) in pricingFaqs"
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
      </section>

      <!-- Banner CTA Final de Descarga estilo Manus Ambient Glow -->
      <section id="descargar" class="mt-16 w-full">
        <div class="manus-final-cta-card">
          <div class="manus-ambient-glow" aria-hidden="true"></div>

          <span class="manus-final-badge">{{ isEn ? 'START FREE TODAY' : 'EMPIEZA GRATIS HOY' }}</span>

          <h2 class="manus-final-title">
            {{ isEn ? 'Bring order to your legal practice today' : 'Pon orden en tu despacho legal hoy mismo' }}
          </h2>

          <p class="manus-final-sub">
            {{ isEn
              ? 'Download Lexbell for Mac or Windows. Up to 50 active cases free forever, 100% local and private.'
              : 'Descarga Lexbell para Mac o Windows. Hasta 50 expedientes activos gratis para siempre, 100% local y privado.'
            }}
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
/* =================== SISTEMA DE PRECIOS EXACTO ESTILO MANUS =================== */
.manus-pricing-page {
  background: var(--bg);
  color: var(--text);
  padding: 64px 16px 96px;
  min-height: 80vh;
}

@media (min-width: 1024px) {
  .manus-pricing-page {
    padding: 80px 24px 110px;
  }
}

.manus-pricing-container {
  max-width: 1052px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* H1 exacto estilo Manus (font-serif 32px a 48px, leading 40px a 58px) */
.manus-pricing-title {
  font-family: Newsreader, Charter, "Bitstream Charter", "Sitka Text", Cambria, Georgia, serif;
  font-size: clamp(32px, 4.4vw, 48px);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.025em;
  color: var(--text);
  margin: 0 auto 12px;
  text-wrap: balance;
}

.manus-pricing-subtitle {
  font-size: 16px;
  line-height: 24px;
  color: var(--text-muted);
  margin: 0 auto;
  text-wrap: balance;
}

/* Toggle de Facturación estilo Manus */
.manus-toggle-wrapper {
  margin-top: 24px;
  margin-bottom: 32px;
  display: flex;
  justify-content: center;
}

.manus-billing-toggle {
  height: 32px;
  padding: 2px;
  border-radius: 8px;
  border: 1px solid var(--border);
  background: var(--bg-elevated);
  display: inline-flex;
  align-items: stretch;
  font-size: 13px;
  line-height: 18px;
  font-weight: 400;
  gap: 2px;
  user-select: none;
}

.manus-toggle-btn {
  height: 100%;
  padding: 0 14px;
  border-radius: 6px;
  border: none;
  background: transparent;
  color: var(--text-muted);
  font-size: 13px;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.15s ease;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.manus-toggle-btn:hover {
  color: var(--text);
}

.manus-toggle-btn.is-active {
  background: var(--card-bg);
  color: var(--text);
  font-weight: 600;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

/* Cuadrícula de Tarjetas estilo Manus (gap 16px, rounded-2xl) */
.manus-cards-grid {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  align-items: stretch;
}

@media (min-width: 768px) {
  .manus-cards-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }
}

/* Tarjeta base estilo Manus */
.manus-plan-card {
  position: relative;
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 24px 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.manus-plan-card:hover {
  border-color: var(--border-dark);
}

/* Tarjeta destacada con contorno azul (como Manus Max) */
.manus-plan-card.is-featured {
  border-color: #007aff;
  box-shadow: 0 0 0 1px #007aff, 0 10px 30px -10px rgba(0, 122, 255, 0.25);
}

.manus-plan-name {
  font-family: Newsreader, Charter, "Bitstream Charter", "Sitka Text", Cambria, Georgia, serif;
  font-size: 22px;
  font-weight: 600;
  line-height: 28px;
  color: var(--text);
}

.manus-badge-featured {
  padding: 3px 8px;
  border-radius: 6px;
  background: #007aff;
  color: #ffffff;
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  white-space: nowrap;
}

.manus-badge-lan {
  padding: 3px 8px;
  border-radius: 6px;
  background: rgba(16, 185, 129, 0.1);
  color: #10b981;
  border: 1px solid rgba(16, 185, 129, 0.25);
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  white-space: nowrap;
}

.manus-price-figure {
  font-size: 32px;
  font-weight: 600;
  line-height: 40px;
  color: var(--text);
  font-variant-numeric: tabular-nums;
}

.manus-price-period {
  font-size: 13.5px;
  color: var(--text-muted);
}

.manus-plan-desc {
  font-size: 14px;
  line-height: 20px;
  color: var(--text-muted);
  margin: 8px 0 0;
  min-height: 40px;
}

/* Botones CTA estilo Manus (rounded-full h-[40px]) */
.manus-card-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  padding: 0 16px;
  border-radius: 9999px;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: opacity 0.15s ease, transform 0.1s ease;
}

.manus-cta-outline {
  border: 1px solid var(--border-dark);
  background: transparent;
  color: var(--text);
}

.manus-cta-outline:hover {
  background: var(--bg-elevated);
}

.manus-cta-primary {
  background: #007aff;
  color: #ffffff;
  border: 1px solid #007aff;
}

.manus-cta-primary:hover {
  opacity: 0.9;
  transform: translateY(-0.5px);
}

/* Caja de Métrica estilo Manus Credits Box */
.manus-metric-box {
  display: flex;
  align-items: center;
  height: 38px;
  padding: 0 14px;
  border-radius: 8px;
  border: 1px solid var(--border);
  background: var(--bg-subtle);
  font-size: 13px;
}

.manus-metric-box.is-featured {
  border-color: rgba(0, 122, 255, 0.35);
  background: rgba(0, 122, 255, 0.05);
}

.manus-metric-box.is-lan {
  border-color: rgba(16, 185, 129, 0.35);
  background: rgba(16, 185, 129, 0.05);
}

/* Lista de características estilo Manus */
.manus-card-bottom {
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid var(--border);
}

.manus-features-heading {
  font-size: 13px;
  line-height: 18px;
  color: var(--text-muted);
  margin-bottom: 14px;
}

.manus-features-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.manus-features-list li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 13.5px;
  line-height: 1.45;
  color: var(--text);
}

.manus-feat-icon {
  flex-shrink: 0;
  margin-top: 2px;
  color: var(--text-muted);
}

/* Banner de Seguridad estilo Manus */
.manus-security-banner {
  width: 100%;
  padding: 16px 20px;
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

@media (min-width: 768px) {
  .manus-security-banner {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

.manus-banner-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border-radius: 8px;
  border: 1px solid var(--border);
  background: var(--bg-elevated);
  font-size: 13px;
  font-weight: 500;
  color: var(--text);
  text-decoration: none;
  white-space: nowrap;
  transition: all 0.15s ease;
}

.manus-banner-link:hover {
  border-color: var(--border-dark);
}

/* Acordeón FAQ estilo Manus */
.manus-eyebrow {
  display: inline-block;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 8px;
}

.manus-faq-title {
  font-family: Newsreader, Charter, "Bitstream Charter", "Sitka Text", Cambria, Georgia, serif;
  font-size: clamp(24px, 3.2vw, 32px);
  font-weight: 600;
  line-height: 1.25;
  color: var(--text);
  margin: 0;
}

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

/* Banner CTA Final estilo Manus Ambient Glow */
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
