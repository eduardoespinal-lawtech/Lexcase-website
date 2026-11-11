<script setup lang="ts">
const { t, locale } = useI18n()
const localePath = useLocalePath()

const faqs = computed(() => [
  { q: t('faq.q1'), a: t('faq.a1') },
  { q: t('faq.q2'), a: t('faq.a2') },
  { q: t('faq.q3'), a: t('faq.a3') },
  { q: t('faq.q4'), a: t('faq.a4') }
])

useHead(() => {
  const isEn = locale.value === 'en'
  const title = isEn
    ? 'Lexbell: Legal Practice Management Software for Mac & Windows'
    : 'Lexbell: Software de Gestión de Casos para Abogados (Mac y Windows)'
  const desc = isEn
    ? 'Private desktop legal practice management software for Mac & Windows. Manage cases, court deadlines, clients, and documents 100% offline on your device.'
    : 'Software privado de gestión de expedientes para abogados en Mac y Windows. Organiza casos, clientes, plazos judiciales y documentos 100% locales en tu equipo.'
  const heroImg = isEn ? '/screenshots/cases-en.webp?v=1.1.18' : '/screenshots/casos.webp?v=1.1.18'

  return {
    title,
    meta: [
      { name: 'description', content: desc },
      { property: 'og:title', content: title },
      { property: 'og:description', content: desc },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: desc }
    ],
    link: [
      {
        rel: 'preload',
        as: 'image',
        type: 'image/webp',
        href: heroImg,
        fetchpriority: 'high'
      }
    ],
    script: [
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
  }
})

const openFaq = ref<number | null>(null)
const toggleFaq = (idx: number) => {
  openFaq.value = openFaq.value === idx ? null : idx
}
</script>

<template>
  <div class="notion-landing">
    <!-- =================== 1. HERO SECTION (CURSOR STYLE CON VENTANA DESKTOP) =================== -->
    <section class="cursor-hero-section" id="descargar">
      <div class="cursor-hero-inner">
        <!-- Encabezado: Título + Subtítulo + CTAs Oficiales -->
        <div class="cursor-hero-header">
          <h1 class="cursor-hero-title ms-hero-title">
            {{ t('home.heroTitle') }}
          </h1>

          <p class="cursor-hero-subtitle ms-hero-subtitle">
            {{ t('home.heroSubtitle') }}
          </p>

          <!-- Official Store Download Badges -->
          <div class="cursor-hero-downloads">
            <AppDownload />
          </div>
        </div>

        <!-- Marco Exterior y Ventana Desktop Flotante (Inspirado en Cursor con paleta Lexbell) -->
        <div class="cursor-hero-preview-frame">
          <div class="cursor-desktop-window">
            <!-- Barra de título de la ventana nativa de macOS -->
            <div class="window-titlebar">
              <div class="window-controls">
                <span class="window-dot window-dot-close"></span>
                <span class="window-dot window-dot-min"></span>
                <span class="window-dot window-dot-max"></span>
              </div>
              <div class="window-title">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="window-title-icon"><path d="M6 8a6 6 0 0 1 12 0C18 15 18.92 15.61 20 16.33Q21 17 19.8 17H4.2Q3 17 4 16.33C5.08 15.61 6 15 6 8"></path><path d="M10.3 19a1.94 1.94 0 0 0 3.4 0"></path></svg>
                <span>Lexbell Desktop — {{ locale === 'en' ? 'Cases & Court Deadlines' : 'Expedientes y Plazos Procesales' }}</span>
              </div>
              <div class="window-spacer"></div>
            </div>

            <!-- Captura de la aplicación nativa en gran formato -->
            <div class="window-body">
              <img
                :src="locale === 'en' ? '/screenshots/cases-en.webp?v=1.1.18' : '/screenshots/casos.webp?v=1.1.18'"
                :alt="locale === 'en' ? 'Lexbell Desktop App Interface' : 'Interfaz de la aplicación Lexbell en escritorio'"
                class="window-screenshot"
                width="2730"
                height="1600"
                loading="eager"
                fetchpriority="high"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Hero Feature Pillars -->
      <div class="hero-features-grid">
        <div class="hero-feat-card">
          <div class="hero-feat-icon-box">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <h3 class="hero-feat-title">{{ t('home.heroCard1Title') }}</h3>
          <p class="hero-feat-desc">{{ t('home.heroCard1Desc') }}</p>
        </div>

        <div class="hero-feat-card">
          <div class="hero-feat-icon-box">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="rotate-180">
              <circle cx="12" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"/><path d="M12 12v3"/>
            </svg>
          </div>
          <h3 class="hero-feat-title">{{ t('home.heroCard2Title') }}</h3>
          <p class="hero-feat-desc">{{ t('home.heroCard2Desc') }}</p>
        </div>

        <div class="hero-feat-card">
          <div class="hero-feat-icon-box">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect width="18" height="18" x="3" y="4" rx="2" /><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>
            </svg>
          </div>
          <h3 class="hero-feat-title">{{ t('home.heroCard3Title') }}</h3>
          <p class="hero-feat-desc">{{ t('home.heroCard3Desc') }}</p>
        </div>

        <div class="hero-feat-card">
          <div class="hero-feat-icon-box">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>
            </svg>
          </div>
          <h3 class="hero-feat-title">{{ t('home.heroCard4Title') }}</h3>
          <p class="hero-feat-desc">{{ t('home.heroCard4Desc') }}</p>
        </div>
      </div>
    </section>

    <!-- =================== 2. TABLA COMPARATIVA DE ARQUITECTURA =================== -->
    <section class="section">
      <div class="apple-wrap">
        <div class="text-center max-w-2xl mx-auto mb-14">
          <span class="eyebrow">{{ t('home.compareEyebrow') }}</span>
          <h2 class="h-section">{{ t('home.compareTitle') }}</h2>
          <p class="subtitle mt-3">{{ t('home.compareSubtitle') }}</p>
        </div>

        <div class="compare-table-wrap">
          <table class="compare-table" :aria-label="locale === 'en' ? 'Comparison of Lexbell versus cloud software and spreadsheets' : 'Comparativa de Lexbell frente a la nube y hojas de cálculo'">
            <thead>
              <tr>
                <th style="width: 31%;">{{ t('home.compareColFeature') }}</th>
                <th class="lexbell-col" style="width: 27%;">{{ t('home.compareColLexbell') }}</th>
                <th style="width: 21%;">{{ t('home.compareColCloud') }}</th>
                <th style="width: 21%;">{{ t('home.compareColManual') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>{{ t('home.cRow1Title') }}</strong></td>
                <td class="lexbell-col">✓ {{ t('home.cRow1Lexbell') }}</td>
                <td>✗ {{ t('home.cRow1Cloud') }}</td>
                <td>✗ {{ t('home.cRow1Manual') }}</td>
              </tr>
              <tr>
                <td><strong>{{ t('home.cRow2Title') }}</strong></td>
                <td class="lexbell-col">✓ {{ t('home.cRow2Lexbell') }}</td>
                <td>✗ {{ t('home.cRow2Cloud') }}</td>
                <td>~ {{ t('home.cRow2Manual') }}</td>
              </tr>
              <tr>
                <td><strong>{{ t('home.cRow3Title') }}</strong></td>
                <td class="lexbell-col">✓ {{ t('home.cRow3Lexbell') }}</td>
                <td>✗ {{ t('home.cRow3Cloud') }}</td>
                <td>✗ {{ t('home.cRow3Manual') }}</td>
              </tr>
              <tr>
                <td><strong>{{ t('home.cRow4Title') }}</strong></td>
                <td class="lexbell-col">✓ {{ t('home.cRow4Lexbell') }}</td>
                <td>✗ {{ t('home.cRow4Cloud') }}</td>
                <td>✗ {{ t('home.cRow4Manual') }}</td>
              </tr>
              <tr>
                <td><strong>{{ t('home.cRow5Title') }}</strong></td>
                <td class="lexbell-col">✓ {{ t('home.cRow5Lexbell') }}</td>
                <td>✗ {{ t('home.cRow5Cloud') }}</td>
                <td>~ {{ t('home.cRow5Manual') }}</td>
              </tr>
              <tr>
                <td><strong>{{ t('home.cRow6Title') }}</strong></td>
                <td class="lexbell-col">✓ {{ t('home.cRow6Lexbell') }}</td>
                <td>✗ {{ t('home.cRow6Cloud') }}</td>
                <td>~ {{ t('home.cRow6Manual') }}</td>
              </tr>
              <tr>
                <td><strong>{{ t('home.cRow7Title') }}</strong></td>
                <td class="lexbell-col">✓ {{ t('home.cRow7Lexbell') }}</td>
                <td>✗ {{ t('home.cRow7Cloud') }}</td>
                <td>~ {{ t('home.cRow7Manual') }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- =================== 5. TESTIMONIOS =================== -->
    <section class="section section-gray">
      <div class="apple-wrap">
        <div class="text-center max-w-2xl mx-auto mb-12">
          <span class="eyebrow">{{ locale === 'en' ? 'TESTIMONIALS' : 'OPINIONES REALES' }}</span>
          <h2 class="h-section">{{ locale === 'en' ? 'Trusted by independent legal professionals' : 'Lo que dicen profesionales que usan Lexbell' }}</h2>
        </div>

        <!-- Testimonios de profesionales reales -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div class="testimonial-card">
            <div class="testimonial-stars" aria-label="5 estrellas">★★★★★</div>
            <p class="testimonial-quote">“{{ t('home.testimonial1Quote') }}”</p>
            <div class="testimonial-author">
              <strong>{{ t('home.testimonial1Author') }}</strong>
              <span>{{ t('home.testimonial1Role') }}</span>
            </div>
          </div>
          <div class="testimonial-card">
            <div class="testimonial-stars" aria-label="5 estrellas">★★★★★</div>
            <p class="testimonial-quote">“{{ t('home.testimonial2Quote') }}”</p>
            <div class="testimonial-author">
              <strong>{{ t('home.testimonial2Author') }}</strong>
              <span>{{ t('home.testimonial2Role') }}</span>
            </div>
          </div>
          <div class="testimonial-card">
            <div class="testimonial-stars" aria-label="5 estrellas">★★★★★</div>
            <p class="testimonial-quote">“{{ t('home.testimonial3Quote') }}”</p>
            <div class="testimonial-author">
              <strong>{{ t('home.testimonial3Author') }}</strong>
              <span>{{ t('home.testimonial3Role') }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- =================== 5. PREGUNTAS FRECUENTES (Acordeón Notion) =================== -->
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
  </div>
</template>

<style scoped>
/* === NOTION LANDING WRAPPER === */
.notion-landing {
  background: #ffffff;
  color: #191919;
}

/* === HERO SECTION (CURSOR STYLE CON VENTANA DESKTOP FLOTANTE) === */
.cursor-hero-section {
  position: relative;
  background: #fbfbfa;
  border-bottom: 1px solid #ebebea;
  overflow: hidden;
  padding: clamp(48px, 6vw, 80px) 24px clamp(44px, 5vw, 64px);
}

.cursor-hero-inner {
  max-width: 1240px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.cursor-hero-header {
  max-width: 820px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  margin-bottom: clamp(28px, 3.5vw, 44px);
}

.cursor-hero-title {
  font-size: clamp(34px, 4vw, 50px);
  font-weight: 800;
  line-height: 1.13;
  letter-spacing: -0.035em;
  color: #050505;
  margin: 0 0 18px;
  text-wrap: balance;
}

.cursor-hero-subtitle {
  font-size: clamp(16px, 1.9vw, 19px);
  line-height: 1.55;
  color: #5f5e5b;
  margin: 0 0 24px;
  max-width: 640px;
}

.cursor-hero-downloads {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
}

/* Marco Exterior y Ventana Desktop Flotante (Inspirado en Cursor con paleta Lexbell) */
.cursor-hero-preview-frame {
  width: 100%;
  background: linear-gradient(180deg, #f5f5f4 0%, #ebebea 100%);
  border: 1px solid #e2e2e0;
  border-radius: clamp(14px, 2vw, 22px);
  padding: clamp(12px, 2.8vw, 36px);
  box-shadow:
    inset 0 1px 1px rgba(255, 255, 255, 0.95),
    0 16px 36px -12px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
}

.cursor-desktop-window {
  width: 100%;
  background: #ffffff;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.09);
  box-shadow:
    0 24px 60px -12px rgba(0, 0, 0, 0.16),
    0 8px 22px -6px rgba(0, 0, 0, 0.08),
    0 0 0 1px rgba(0, 0, 0, 0.03);
  overflow: hidden;
}

.window-titlebar {
  height: 38px;
  background: #fbfbfa;
  border-bottom: 1px solid #ebebea;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  user-select: none;
}

.window-controls {
  display: flex;
  align-items: center;
  gap: 7px;
  width: 70px;
}

.window-dot {
  width: 11px;
  height: 11px;
  border-radius: 50%;
  display: inline-block;
}

.window-dot-close {
  background: #ff5f56;
  border: 0.5px solid #e0443e;
}

.window-dot-min {
  background: #ffbd2e;
  border: 0.5px solid #dea123;
}

.window-dot-max {
  background: #27c93f;
  border: 0.5px solid #1aab29;
}

.window-title {
  font-size: 12px;
  font-weight: 500;
  color: #6b7280;
  letter-spacing: -0.01em;
  display: flex;
  align-items: center;
  gap: 6px;
}

.window-title-icon {
  color: #0066cc;
}

.window-spacer {
  width: 70px;
}

.window-body {
  position: relative;
  background: #ffffff;
  line-height: 0;
}

.window-screenshot {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

/* Feature Grid Debajo de la Laptop */
.hero-features-grid {
  max-width: 1280px;
  margin: 48px auto 0;
  padding-top: 36px;
  border-top: 1px solid #ebebea;
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

@media (min-width: 640px) {
  .hero-features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .hero-features-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.hero-feat-card {
  background: #ffffff;
  border: 1px solid #ebebea;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.hero-feat-icon-box {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: #f1f5f9;
  color: #0066cc;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
}

.hero-feat-title {
  font-size: 15px;
  font-weight: 700;
  color: #050505;
  margin: 0 0 4px;
  letter-spacing: -0.01em;
}

.hero-feat-desc {
  font-size: 13px;
  line-height: 1.5;
  color: #5f5e5b;
  margin: 0;
}

/* SECCIONES BASE */
.section {
  padding: clamp(60px, 8vw, 96px) 24px;
}

.section-gray {
  background: #fbfbfa;
  border-top: 1px solid #ebebea;
  border-bottom: 1px solid #ebebea;
}

.apple-wrap {
  max-width: 1120px;
  margin: 0 auto;
}

.eyebrow {
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #0066cc;
  margin-bottom: 8px;
}

.h-section {
  font-size: clamp(28px, 4.2vw, 40px);
  font-weight: 800;
  line-height: 1.18;
  letter-spacing: -0.03em;
  color: #050505;
  margin: 0;
}

.subtitle {
  font-size: clamp(15px, 1.8vw, 17px);
  line-height: 1.55;
  color: #5f5e5b;
  margin: 0;
}

/* TABLA COMPARATIVA */
.compare-table-wrap {
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.compare-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  font-size: 14px;
  border: 1px solid #ebebea;
  border-radius: 12px;
  overflow: hidden;
  background: #ffffff;
}

.compare-table th {
  padding: 14px 18px;
  text-align: left;
  font-weight: 700;
  font-size: 13px;
  background: #fbfbfa;
  border-bottom: 1px solid #ebebea;
  color: #050505;
}

.compare-table td {
  padding: 14px 18px;
  border-bottom: 1px solid #ebebea;
  color: #5f5e5b;
  vertical-align: middle;
}

.compare-table tr:last-child td {
  border-bottom: none;
}

.compare-table .lexbell-col {
  background: #f8fafc;
  font-weight: 600;
  color: #0066cc;
}

/* TESTIMONIOS */
.testimonial-card {
  background: #ffffff;
  border: 1px solid #ebebea;
  border-radius: 16px;
  padding: 26px 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
}

.testimonial-stars {
  color: #f59e0b;
  font-size: 15px;
  letter-spacing: 2px;
  margin-bottom: 12px;
}

.testimonial-quote {
  font-size: 14px;
  line-height: 1.55;
  color: #334155;
  margin: 0 0 18px;
}

.testimonial-author {
  display: flex;
  flex-direction: column;
  border-top: 1px solid #f1f5f9;
  padding-top: 12px;
}

.testimonial-author strong {
  font-size: 13.5px;
  color: #0f172a;
  font-weight: 700;
}

.testimonial-author span {
  font-size: 12px;
  color: #64748b;
  margin-top: 2px;
}

/* FAQ ACORDEÓN */
.faq-accordion {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.faq-item {
  background: #ffffff;
  border: 1px solid #ebebea;
  border-radius: 12px;
  overflow: hidden;
  transition: border-color 0.15s ease;
}

.faq-item.is-open {
  border-color: #c7c7c5;
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
</style>
