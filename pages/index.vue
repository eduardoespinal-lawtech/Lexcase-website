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
    <!-- =================== 1. HERO SECTION (MICROSOFT 365 STYLE CON LAPTOP) =================== -->
    <section class="ms-hero-section" id="descargar">
      <div class="ms-hero-inner">
        <!-- Columna Izquierda: Mensaje Directo + CTAs -->
        <div class="ms-hero-content">
          <h1 class="ms-hero-title">
            {{ t('home.heroTitle') }}
          </h1>

          <p class="ms-hero-subtitle">
            {{ t('home.heroSubtitle') }}
          </p>

          <!-- Official Store Download Badges -->
          <div class="ms-hero-downloads">
            <AppDownload />
          </div>
        </div>

        <!-- Columna Derecha: MacBook Pro frontal con la app Lexbell abierta -->
        <div class="hero-macbook-col">
          <div class="macbook-device">
            <div class="macbook-lid">
              <div class="macbook-camera"></div>
              <img
                :src="locale === 'en' ? '/screenshots/cases-en.webp?v=1.1.18' : '/screenshots/casos.webp?v=1.1.18'"
                :alt="locale === 'en' ? 'Lexbell Desktop App Interface on MacBook' : 'Interfaz de la aplicación Lexbell en MacBook'"
                class="macbook-screen"
                width="2730"
                height="1600"
                loading="eager"
                fetchpriority="high"
              />
            </div>
            <div class="macbook-base">
              <div class="macbook-notch"></div>
            </div>
            <div class="macbook-shadow"></div>
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

/* === HERO SECTION (MICROSOFT 365 STYLE: SPLIT 2 COLUMNAS CON LAPTOP) === */
.ms-hero-section {
  position: relative;
  background: #fbfbfa;
  border-bottom: 1px solid #ebebea;
  overflow: hidden;
  padding: clamp(48px, 6vw, 80px) 24px 40px;
}

.ms-hero-inner {
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  gap: clamp(36px, 5vw, 64px);
}

@media (min-width: 960px) {
  .ms-hero-inner {
    grid-template-columns: 1.05fr 1.15fr;
  }
}

.ms-hero-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}

.ms-hero-badge {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 11.5px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  background: #e6f0fa;
  color: #0066cc;
  margin-bottom: 16px;
}

.ms-hero-title {
  font-size: clamp(32px, 3.8vw, 46px);
  font-weight: 800;
  line-height: 1.14;
  letter-spacing: -0.03em;
  color: #050505;
  margin: 0 0 18px;
  text-wrap: balance;
}

.ms-hero-subtitle {
  font-size: clamp(16px, 2vw, 19px);
  line-height: 1.55;
  color: #5f5e5b;
  margin: 0 0 20px;
  max-width: 540px;
}

.ms-hero-guarantees {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  font-size: 13.5px;
  font-weight: 600;
  color: #0066cc;
  margin-bottom: 28px;
  background: #ffffff;
  padding: 8px 16px;
  border-radius: 999px;
  border: 1px solid #e1ecf7;
  box-shadow: 0 1px 3px rgba(0, 102, 204, 0.05);
}

.guarantee-dot {
  color: #94a3b8;
  font-weight: 400;
}

.ms-hero-downloads {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
}

/* Columna Derecha: MacBook Pro frontal */
.hero-macbook-col {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.macbook-device {
  width: 100%;
  max-width: 660px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.macbook-lid {
  width: 90%;
  background: #0d0d0d;
  border-radius: 14px 14px 0 0;
  padding: 10px 10px 0;
  box-shadow:
    inset 0 0 0 1.5px #2d2d2d,
    0 16px 36px rgba(0, 0, 0, 0.22);
  position: relative;
}

.macbook-camera {
  width: 6px;
  height: 6px;
  background: #1f1f1f;
  border-radius: 50%;
  position: absolute;
  top: 4px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: inset 0 0 1px #000;
}

.macbook-screen {
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  object-position: top left;
  display: block;
  border-radius: 4px 4px 0 0;
  background: #111;
}

.macbook-base {
  width: 100%;
  height: 14px;
  background: linear-gradient(180deg, #d4d4d8 0%, #a1a1aa 50%, #71717a 100%);
  border-radius: 0 0 12px 12px;
  position: relative;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.macbook-notch {
  width: 80px;
  height: 4px;
  background: #52525b;
  border-radius: 0 0 4px 4px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

.macbook-shadow {
  width: 96%;
  height: 20px;
  background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 70%);
  margin-top: -6px;
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
