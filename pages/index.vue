<script setup lang="ts">
const { t, locale } = useI18n()
const localePath = useLocalePath()

useHead(() => ({
  title: `Lexbell — ${t('home.heroTitle')} ${t('home.heroTitle2')}`,
  meta: [
    { name: 'description', content: t('home.heroSubtitle') },
    { property: 'og:title', content: 'Lexbell — Software Jurídico para Mac y Windows' },
    { property: 'og:description', content: t('home.heroSubtitle') },
    { property: 'og:image', content: 'https://lex-bell.com/og-image.svg' },
    { property: 'og:url', content: locale.value === 'es' ? 'https://lex-bell.com/' : 'https://lex-bell.com/en' }
  ],
  link: [
    { rel: 'alternate', hreflang: 'es', href: 'https://lex-bell.com/' },
    { rel: 'alternate', hreflang: 'en', href: 'https://lex-bell.com/en' },
    { rel: 'alternate', hreflang: 'x-default', href: 'https://lex-bell.com/' }
  ]
}))

// FAQ Accordion state
const openFaq = ref<number | null>(null)
const toggleFaq = (idx: number) => {
  openFaq.value = openFaq.value === idx ? null : idx
}

const faqs = computed(() => [
  { q: t('faq.q1'), a: t('faq.a1') },
  { q: t('faq.q2'), a: t('faq.a2') },
  { q: t('faq.q4'), a: t('faq.a4') },
  { q: t('faq.q5'), a: t('faq.a5') },
  { q: t('faq.q8'), a: t('faq.a8') }
])
</script>

<template>
  <div class="notion-landing">
    <!-- =================== 1. HERO SECTION =================== -->
    <section class="notion-hero" id="descargar">
      <div class="notion-hero-inner">
        <!-- Floating announcement pill -->
        <div class="notion-pill">
          <span>{{ t('home.badge') }}</span>
        </div>

        <h1 class="hero-h1">
          {{ t('home.heroTitle') }}<br />
          <span class="hero-h1-accent">{{ t('home.heroTitle2') }}</span>
        </h1>

        <p class="hero-p">
          {{ t('home.heroSubtitle') }}
        </p>

        <!-- Official Store Download Buttons -->
        <div class="hero-downloads">
          <AppDownload center />
        </div>

        <!-- Trust checkmarks -->
        <ul class="hero-trust-list" aria-label="Beneficios clave">
          <li>
            <svg class="trust-check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6 9 17l-5-5"/></svg>
            <span>{{ t('home.trust1') }}</span>
          </li>
          <li>
            <svg class="trust-check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6 9 17l-5-5"/></svg>
            <span>{{ t('home.trust2') }}</span>
          </li>
          <li>
            <svg class="trust-check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6 9 17l-5-5"/></svg>
            <span>{{ t('home.trust3') }}</span>
          </li>
          <li>
            <svg class="trust-check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6 9 17l-5-5"/></svg>
            <span>{{ t('home.trust4') }}</span>
          </li>
        </ul>
      </div>

      <!-- Real Interactive Showcase with authentic Retina screenshots -->
      <div class="hero-showcase-container">
        <AppShowcase />
      </div>
    </section>

    <!-- =================== 2. TRES PILARES FUNDAMENTALES (Notion Cards) =================== -->
    <section class="section section-gray">
      <div class="apple-wrap">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <span class="eyebrow">{{ t('home.pillarsEyebrow') }}</span>
          <h2 class="h-section">{{ t('home.pillarsTitle') }}</h2>
          <p class="subtitle mt-3">{{ t('home.pillarsSubtitle') }}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Pilar 1 -->
          <div class="pillar-card">
            <div class="pillar-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <h3 class="pillar-title">{{ t('home.pillar1Title') }}</h3>
            <p class="pillar-desc">{{ t('home.pillar1Desc') }}</p>
          </div>

          <!-- Pilar 2 -->
          <div class="pillar-card">
            <div class="pillar-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
              </svg>
            </div>
            <h3 class="pillar-title">{{ t('home.pillar2Title') }}</h3>
            <p class="pillar-desc">{{ t('home.pillar2Desc') }}</p>
          </div>

          <!-- Pilar 3 -->
          <div class="pillar-card">
            <div class="pillar-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
              </svg>
            </div>
            <h3 class="pillar-title">{{ t('home.pillar3Title') }}</h3>
            <p class="pillar-desc">{{ t('home.pillar3Desc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- =================== 3. MÓDULOS DE PROFUNDIDAD (Alternating Notion Layouts) =================== -->
    <section class="section">
      <div class="apple-wrap-wide">
        <div class="text-center max-w-3xl mx-auto mb-20">
          <span class="eyebrow">{{ t('home.modulesEyebrow') }}</span>
          <h2 class="h-section">{{ t('home.modulesTitle') }}</h2>
          <p class="subtitle mt-3">{{ t('home.modulesSubtitle') }}</p>
        </div>

        <!-- Módulo 1: Expedientes (Texto Izq, Imagen Der) -->
        <div class="module-row">
          <div class="module-text">
            <span class="module-eyebrow">{{ t('home.m1Eyebrow') }}</span>
            <h3 class="module-title">{{ t('home.m1Title') }}</h3>
            <p class="module-desc">{{ t('home.m1Desc') }}</p>
            <ul class="module-bullets">
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#007AFF" stroke-width="2.5"><path d="M20 6 9 17l-5-5"/></svg>
                <span>{{ t('home.m1Point1') }}</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#007AFF" stroke-width="2.5"><path d="M20 6 9 17l-5-5"/></svg>
                <span>{{ t('home.m1Point2') }}</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#007AFF" stroke-width="2.5"><path d="M20 6 9 17l-5-5"/></svg>
                <span>{{ t('home.m1Point3') }}</span>
              </li>
            </ul>
          </div>
          <div class="module-visual">
            <div class="mac-window-frame">
              <div class="mac-titlebar">
                <span class="mac-dot close"></span>
                <span class="mac-dot min"></span>
                <span class="mac-dot max"></span>
                <span class="mac-title">Lexbell — {{ locale === 'en' ? 'Active Cases' : 'Expedientes en Trámite' }}</span>
              </div>
              <img
                :src="locale === 'en' ? '/screenshots/cases-en.png' : '/screenshots/casos.png'"
                alt="Gestión de Expedientes en Lexbell"
                class="module-img"
                loading="lazy"
                width="2880"
                height="1800"
              />
            </div>
          </div>
        </div>

        <!-- Módulo 2: Agenda Procesal (Imagen Izq, Texto Der) -->
        <div class="module-row module-row-reverse">
          <div class="module-text">
            <span class="module-eyebrow">{{ t('home.m2Eyebrow') }}</span>
            <h3 class="module-title">{{ t('home.m2Title') }}</h3>
            <p class="module-desc">{{ t('home.m2Desc') }}</p>
            <ul class="module-bullets">
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#007AFF" stroke-width="2.5"><path d="M20 6 9 17l-5-5"/></svg>
                <span>{{ t('home.m2Point1') }}</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#007AFF" stroke-width="2.5"><path d="M20 6 9 17l-5-5"/></svg>
                <span>{{ t('home.m2Point2') }}</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#007AFF" stroke-width="2.5"><path d="M20 6 9 17l-5-5"/></svg>
                <span>{{ t('home.m2Point3') }}</span>
              </li>
            </ul>
          </div>
          <div class="module-visual">
            <div class="mac-window-frame">
              <div class="mac-titlebar">
                <span class="mac-dot close"></span>
                <span class="mac-dot min"></span>
                <span class="mac-dot max"></span>
                <span class="mac-title">Lexbell — {{ locale === 'en' ? 'Court Calendar' : 'Agenda Procesal' }}</span>
              </div>
              <img
                :src="locale === 'en' ? '/screenshots/calendar-en.png' : '/screenshots/calendario.png'"
                alt="Agenda Judicial y Vencimientos en Lexbell"
                class="module-img"
                loading="lazy"
                width="2880"
                height="1800"
              />
            </div>
          </div>
        </div>

        <!-- Módulo 3: Mapa de Vínculos (Texto Izq, Imagen Der) -->
        <div class="module-row">
          <div class="module-text">
            <span class="module-eyebrow">{{ t('home.m3Eyebrow') }}</span>
            <h3 class="module-title">{{ t('home.m3Title') }}</h3>
            <p class="module-desc">{{ t('home.m3Desc') }}</p>
            <ul class="module-bullets">
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#007AFF" stroke-width="2.5"><path d="M20 6 9 17l-5-5"/></svg>
                <span>{{ t('home.m3Point1') }}</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#007AFF" stroke-width="2.5"><path d="M20 6 9 17l-5-5"/></svg>
                <span>{{ t('home.m3Point2') }}</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#007AFF" stroke-width="2.5"><path d="M20 6 9 17l-5-5"/></svg>
                <span>{{ t('home.m3Point3') }}</span>
              </li>
            </ul>
          </div>
          <div class="module-visual">
            <div class="mac-window-frame">
              <div class="mac-titlebar">
                <span class="mac-dot close"></span>
                <span class="mac-dot min"></span>
                <span class="mac-dot max"></span>
                <span class="mac-title">Lexbell — {{ locale === 'en' ? 'Conflict Graph' : 'Grafo de Relaciones' }}</span>
              </div>
              <img
                :src="locale === 'en' ? '/screenshots/map-en.png' : '/screenshots/mapa.png'"
                alt="Grafo de Relaciones y Prevención de Conflictos en Lexbell"
                class="module-img"
                loading="lazy"
                width="2880"
                height="1800"
              />
            </div>
          </div>
        </div>

        <!-- Módulo 4: Bóveda de Documentos (Imagen Izq, Texto Der) -->
        <div class="module-row module-row-reverse">
          <div class="module-text">
            <span class="module-eyebrow">{{ t('home.m4Eyebrow') }}</span>
            <h3 class="module-title">{{ t('home.m4Title') }}</h3>
            <p class="module-desc">{{ t('home.m4Desc') }}</p>
            <ul class="module-bullets">
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#007AFF" stroke-width="2.5"><path d="M20 6 9 17l-5-5"/></svg>
                <span>{{ t('home.m4Point1') }}</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#007AFF" stroke-width="2.5"><path d="M20 6 9 17l-5-5"/></svg>
                <span>{{ t('home.m4Point2') }}</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#007AFF" stroke-width="2.5"><path d="M20 6 9 17l-5-5"/></svg>
                <span>{{ t('home.m4Point3') }}</span>
              </li>
            </ul>
          </div>
          <div class="module-visual">
            <div class="mac-window-frame">
              <div class="mac-titlebar">
                <span class="mac-dot close"></span>
                <span class="mac-dot min"></span>
                <span class="mac-dot max"></span>
                <span class="mac-title">Lexbell — {{ locale === 'en' ? 'Document Vault' : 'Gestión Documental' }}</span>
              </div>
              <img
                :src="locale === 'en' ? '/screenshots/documents-en.png' : '/screenshots/documentos.png'"
                alt="Gestión Documental y Bóveda Segura en Lexbell"
                class="module-img"
                loading="lazy"
                width="2880"
                height="1800"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- =================== 4. TABLA COMPARATIVA NOTION =================== -->
    <section class="section section-gray">
      <div class="apple-wrap">
        <div class="text-center max-w-2xl mx-auto mb-14">
          <span class="eyebrow">{{ t('home.compareEyebrow') }}</span>
          <h2 class="h-section">{{ t('home.compareTitle') }}</h2>
          <p class="subtitle mt-3">{{ t('home.compareSubtitle') }}</p>
        </div>

        <div class="compare-table-wrap">
          <table class="compare-table" aria-label="Comparativa de Lexbell frente a la nube">
            <thead>
              <tr>
                <th style="width: 38%;">{{ t('home.compareColFeature') }}</th>
                <th class="lexbell-col" style="width: 32%;">{{ t('home.compareColLexbell') }}</th>
                <th style="width: 30%;">{{ t('home.compareColCloud') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>{{ t('home.cRow1Title') }}</strong></td>
                <td class="lexbell-col">✓ {{ t('home.cRow1Lexbell') }}</td>
                <td>✗ {{ t('home.cRow1Cloud') }}</td>
              </tr>
              <tr>
                <td><strong>{{ t('home.cRow2Title') }}</strong></td>
                <td class="lexbell-col">✓ {{ t('home.cRow2Lexbell') }}</td>
                <td>✗ {{ t('home.cRow2Cloud') }}</td>
              </tr>
              <tr>
                <td><strong>{{ t('home.cRow3Title') }}</strong></td>
                <td class="lexbell-col">✓ {{ t('home.cRow3Lexbell') }}</td>
                <td>✗ {{ t('home.cRow3Cloud') }}</td>
              </tr>
              <tr>
                <td><strong>{{ t('home.cRow4Title') }}</strong></td>
                <td class="lexbell-col">✓ {{ t('home.cRow4Lexbell') }}</td>
                <td>✗ {{ t('home.cRow4Cloud') }}</td>
              </tr>
              <tr>
                <td><strong>{{ t('home.cRow5Title') }}</strong></td>
                <td class="lexbell-col">✓ {{ t('home.cRow5Lexbell') }}</td>
                <td>✗ {{ t('home.cRow5Cloud') }}</td>
              </tr>
              <tr>
                <td><strong>{{ t('home.cRow6Title') }}</strong></td>
                <td class="lexbell-col">✓ {{ t('home.cRow6Lexbell') }}</td>
                <td>✗ {{ t('home.cRow6Cloud') }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- =================== 5. PRECIOS TRANSPARENTES (Notion Cards) =================== -->
    <section class="section" id="precios">
      <div class="apple-wrap">
        <div class="text-center max-w-2xl mx-auto mb-14">
          <span class="eyebrow">{{ t('home.pricingEyebrow') }}</span>
          <h2 class="h-section">{{ t('home.pricingTitle') }}</h2>
          <p class="subtitle mt-3">{{ t('home.pricingSubtitle') }}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <!-- Plan Gratuito -->
          <div class="pricing-card pricing-card-free">
            <span class="pricing-badge">{{ locale === 'en' ? 'Free Forever' : 'Gratis para empezar' }}</span>
            <h3 class="pricing-name">{{ t('home.freePlanTitle') }}</h3>
            <div class="pricing-price">{{ t('home.freePlanPrice') }}</div>
            <p class="pricing-desc">{{ t('home.freePlanDesc') }}</p>
            <ul class="pricing-features">
              <li>✓ {{ t('home.freePlanFeature1') }}</li>
              <li>✓ {{ t('home.freePlanFeature2') }}</li>
              <li>✓ {{ t('home.freePlanFeature3') }}</li>
              <li>✓ {{ t('home.freePlanFeature4') }}</li>
              <li>✓ {{ t('home.freePlanFeature5') }}</li>
              <li>✓ {{ t('home.freePlanFeature6') }}</li>
            </ul>
            <a href="#descargar" class="pricing-btn pricing-btn-dark">
              {{ t('home.freePlanCTA') }}
            </a>
          </div>

          <!-- Plan Ilimitado -->
          <div class="pricing-card pricing-card-pro">
            <span class="pricing-badge pricing-badge-pro">{{ locale === 'en' ? 'Professional' : 'Para despachos' }}</span>
            <h3 class="pricing-name">{{ t('home.proPlanTitle') }}</h3>
            <div class="pricing-price">{{ t('home.proPlanPrice') }}</div>
            <p class="pricing-desc">{{ t('home.proPlanDesc') }}</p>
            <ul class="pricing-features">
              <li>✓ {{ t('home.proPlanFeature1') }}</li>
              <li>✓ {{ t('home.proPlanFeature2') }}</li>
              <li>✓ {{ t('home.proPlanFeature3') }}</li>
              <li>✓ {{ t('home.proPlanFeature4') }}</li>
              <li>✓ {{ t('home.proPlanFeature5') }}</li>
            </ul>
            <a href="#descargar" class="pricing-btn pricing-btn-outline">
              {{ t('home.proPlanCTA') }}
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- =================== 6. PREGUNTAS FRECUENTES (Acordeón Notion) =================== -->
    <section class="section section-gray" id="faq">
      <div class="apple-wrap max-w-3xl">
        <div class="text-center mb-12">
          <span class="eyebrow">{{ t('nav.faq') }}</span>
          <h2 class="h-section">{{ t('faq.title') }}</h2>
          <p class="subtitle mt-3">{{ t('faq.subtitle') }}</p>
        </div>

        <div class="faq-accordion">
          <div
            v-for="(item, idx) in faqs"
            :key="idx"
            class="faq-item"
            :class="{ 'is-open': openFaq === idx }"
          >
            <button
              type="button"
              class="faq-question-btn"
              :aria-expanded="openFaq === idx"
              @click="toggleFaq(idx)"
            >
              <span>{{ item.q }}</span>
              <svg class="faq-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div v-show="openFaq === idx" class="faq-answer">
              <p>{{ item.a }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- =================== 7. CTA FINAL (Notion Clean Banner) =================== -->
    <section class="notion-cta-section">
      <div class="apple-wrap text-center">
        <span class="eyebrow">{{ t('home.ctaSectionEyebrow') }}</span>
        <h2 class="h-section max-w-2xl mx-auto">{{ t('home.ctaSectionTitle') }}</h2>
        <p class="subtitle max-w-xl mx-auto mt-4 mb-8">
          {{ t('home.ctaSectionBody') }}
        </p>

        <div class="flex justify-center">
          <AppDownload center />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* === NOTION LANDING WRAPPER === */
.notion-landing {
  background: #ffffff;
  color: #191919;
}

/* === HERO SECTION === */
.notion-hero {
  position: relative;
  background: #ffffff;
  padding: clamp(64px, 9vh, 96px) 24px clamp(50px, 7vh, 80px);
  text-align: center;
}

.notion-hero-inner {
  max-width: 860px;
  margin: 0 auto;
}

.hero-h1 {
  font-size: clamp(38px, 5.2vw, 68px);
  line-height: 1.08;
  letter-spacing: -0.035em;
  font-weight: 700;
  color: #050505;
  margin: 0;
}

.hero-h1-accent {
  color: #0066cc;
}

.hero-p {
  font-size: clamp(17px, 1.7vw, 21px);
  line-height: 1.55;
  color: #5f5e5b;
  margin: 22px auto 0;
  max-width: 680px;
  letter-spacing: -0.01em;
}

.hero-downloads {
  margin-top: 36px;
  display: flex;
  justify-content: center;
}

.hero-trust-list {
  list-style: none;
  margin: 28px auto 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 12px 24px;
  font-size: 13.5px;
  font-weight: 500;
  color: #5f5e5b;
}

.hero-trust-list li {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.trust-check {
  color: #10b981;
}

.hero-showcase-container {
  max-width: 1180px;
  margin: 48px auto 0;
}

/* === PILARES (Cards) === */
.pillar-card {
  background: #ffffff;
  border: 1px solid #ebebea;
  border-radius: 14px;
  padding: 32px 26px;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  display: flex;
  flex-direction: column;
}

.pillar-card:hover {
  transform: translateY(-2px);
  border-color: #d3d3d0;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.05);
}

.pillar-icon-box {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: #f1f1ef;
  color: #050505;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.pillar-title {
  font-size: 19px;
  font-weight: 600;
  letter-spacing: -0.015em;
  color: #050505;
  margin: 0 0 10px;
}

.pillar-desc {
  font-size: 14.5px;
  line-height: 1.6;
  color: #5f5e5b;
  margin: 0;
}

/* === MÓDULOS DE PROFUNDIDAD (Alternating) === */
.module-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  align-items: center;
  margin-bottom: clamp(70px, 9vw, 110px);
}

.module-row:last-child {
  margin-bottom: 0;
}

@media (min-width: 960px) {
  .module-row {
    grid-template-columns: 1fr 1.25fr;
    gap: 64px;
  }
  .module-row-reverse {
    grid-template-columns: 1.25fr 1fr;
  }
  .module-row-reverse .module-text {
    order: 2;
  }
  .module-row-reverse .module-visual {
    order: 1;
  }
}

.module-eyebrow {
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #0066cc;
  margin-bottom: 8px;
}

.module-title {
  font-size: clamp(24px, 2.6vw, 34px);
  line-height: 1.18;
  letter-spacing: -0.02em;
  font-weight: 700;
  color: #050505;
  margin: 0 0 16px;
}

.module-desc {
  font-size: 15.5px;
  line-height: 1.65;
  color: #5f5e5b;
  margin: 0 0 24px;
}

.module-bullets {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.module-bullets li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 14.5px;
  font-weight: 500;
  color: #191919;
  line-height: 1.45;
}

.module-visual {
  width: 100%;
}

.module-img {
  width: 100%;
  height: auto;
  display: block;
}

/* === PRECIOS === */
.pricing-card {
  background: #ffffff;
  border: 1px solid #ebebea;
  border-radius: 16px;
  padding: 36px 30px;
  display: flex;
  flex-direction: column;
}

.pricing-card-pro {
  border-color: #0066cc;
  box-shadow: 0 8px 30px rgba(0, 102, 204, 0.08);
}

.pricing-badge {
  display: inline-block;
  align-self: flex-start;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 11.5px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  background: #f1f1ef;
  color: #37352f;
  margin-bottom: 16px;
}

.pricing-badge-pro {
  background: #e6f0fa;
  color: #0066cc;
}

.pricing-name {
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #050505;
  margin: 0 0 8px;
}

.pricing-price {
  font-size: 32px;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: #050505;
  margin-bottom: 12px;
}

.pricing-desc {
  font-size: 14px;
  line-height: 1.5;
  color: #5f5e5b;
  margin: 0 0 24px;
}

.pricing-features {
  list-style: none;
  padding: 0;
  margin: 0 0 32px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 14px;
  color: #37352f;
  flex: 1;
}

.pricing-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
  text-align: center;
}

.pricing-btn-dark {
  background: #050505;
  color: #ffffff;
}
.pricing-btn-dark:hover {
  background: #262626;
  transform: translateY(-1px);
}

.pricing-btn-outline {
  background: transparent;
  color: #0066cc;
  border: 1px solid #0066cc;
}
.pricing-btn-outline:hover {
  background: #f0f7ff;
}

/* === FAQ ACORDEÓN === */
.faq-accordion {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.faq-item {
  background: #ffffff;
  border: 1px solid #ebebea;
  border-radius: 12px;
  overflow: hidden;
  transition: border-color 0.2s ease;
}

.faq-item.is-open {
  border-color: #d3d3d0;
}

.faq-question-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 22px;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  font-size: 15.5px;
  font-weight: 600;
  color: #050505;
  gap: 16px;
}

.faq-chevron {
  transition: transform 0.2s ease;
  flex-shrink: 0;
  color: #5f5e5b;
}

.faq-item.is-open .faq-chevron {
  transform: rotate(180deg);
}

.faq-answer {
  padding: 0 22px 20px;
  font-size: 14.5px;
  line-height: 1.6;
  color: #5f5e5b;
}

.faq-answer p {
  margin: 0;
}

/* === CTA FINAL NOTION === */
.notion-cta-section {
  background: #f7f7f5;
  border-top: 1px solid #ebebea;
  padding: clamp(80px, 11vh, 120px) 24px;
}
</style>
