<script setup lang="ts">
const { t, locale } = useI18n()

definePageMeta({ name: 'pricing' })

useHead(() => {
  const isEn = locale.value === 'en'
  const title = isEn
    ? 'Pricing: Free Plan & Pro Unlimited — Lexbell'
    : 'Precios: Plan Gratuito y Pro Ilimitado — Lexbell'
  const desc = isEn
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

const openFaq = ref<number | null>(null)
const toggleFaq = (idx: number) => {
  openFaq.value = openFaq.value === idx ? null : idx
}

const pricingFaqs = computed(() => {
  if (locale.value === 'en') {
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
        a: 'Yes, absolutely. Because Lexbell is local-first, your SQLite database and all attached documents are stored directly on your computer. You never lose access to your records.'
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
      a: 'Sí, totalmente. Al ser una aplicación local, tu base de datos SQLite y todos tus documentos se guardan directamente en tu disco duro. Nunca pierdes el acceso a tu información.'
    }
  ]
})
</script>

<template>
  <div class="pricing-page">
    <!-- Header Hero -->
    <section class="pricing-hero">
      <div class="pricing-wrap text-center max-w-3xl mx-auto">
        <span class="eyebrow">{{ t('home.pricingEyebrow') }}</span>
        <h1 class="pricing-hero-title">{{ t('home.pricingTitle') }}</h1>
        <p class="pricing-hero-subtitle mt-4">
          {{ t('home.pricingSubtitle') }}
        </p>
      </div>
    </section>

    <!-- Cards de Precios -->
    <section class="pricing-cards-section">
      <div class="pricing-wrap">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <!-- Plan Gratuito -->
          <div class="pricing-card pricing-card-free">
            <span class="pricing-badge">{{ t('home.freePlanBadge') }}</span>
            <h2 class="pricing-name">{{ t('home.freePlanTitle') }}</h2>
            <div class="pricing-price">{{ t('home.freePlanPrice') }}</div>
            <p class="pricing-period">{{ t('home.freePlanPeriod') }}</p>
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

          <!-- Plan Pro Anual (Recomendado) -->
          <div class="pricing-card pricing-card-pro">
            <span class="pricing-badge pricing-badge-pro">{{ t('home.proAnnualBadge') }}</span>
            <h2 class="pricing-name">{{ t('home.proAnnualTitle') }}</h2>
            <div class="pricing-price">{{ t('home.proAnnualPrice') }}</div>
            <p class="pricing-period">{{ t('home.proAnnualPeriod') }}</p>
            <p class="pricing-desc">{{ t('home.proAnnualDesc') }}</p>
            <ul class="pricing-features">
              <li>✓ {{ t('home.proAnnualFeature1') }}</li>
              <li>✓ {{ t('home.proAnnualFeature2') }}</li>
              <li>✓ {{ t('home.proAnnualFeature3') }}</li>
              <li>✓ {{ t('home.proAnnualFeature4') }}</li>
              <li>✓ {{ t('home.proAnnualFeature5') }}</li>
              <li>✓ {{ t('home.proAnnualFeature6') }}</li>
            </ul>
            <a href="#descargar" class="pricing-btn pricing-btn-pro">
              {{ t('home.proAnnualCTA') }}
            </a>
          </div>

          <!-- Plan Pro Mensual -->
          <div class="pricing-card pricing-card-monthly">
            <span class="pricing-badge">{{ t('home.proMonthlyBadge') }}</span>
            <h2 class="pricing-name">{{ t('home.proMonthlyTitle') }}</h2>
            <div class="pricing-price">{{ t('home.proMonthlyPrice') }}</div>
            <p class="pricing-period">{{ t('home.proMonthlyPeriod') }}</p>
            <p class="pricing-desc">{{ t('home.proMonthlyDesc') }}</p>
            <ul class="pricing-features">
              <li>✓ {{ t('home.proMonthlyFeature1') }}</li>
              <li>✓ {{ t('home.proMonthlyFeature2') }}</li>
              <li>✓ {{ t('home.proMonthlyFeature3') }}</li>
              <li>✓ {{ t('home.proMonthlyFeature4') }}</li>
              <li>✓ {{ t('home.proMonthlyFeature5') }}</li>
              <li>✓ {{ t('home.proMonthlyFeature6') }}</li>
            </ul>
            <a href="#descargar" class="pricing-btn pricing-btn-dark">
              {{ t('home.proMonthlyCTA') }}
            </a>
          </div>
        </div>

        <!-- Caja explicativa transparente sobre el período de prueba -->
        <div class="trial-info-wrapper max-w-5xl mx-auto mt-14">
          <div class="trial-info-box">
            <div class="trial-info-header">
              <div class="trial-info-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
                </svg>
              </div>
              <h3 class="trial-info-title">{{ t('home.pricingTrialNoteTitle') }}</h3>
            </div>
            <div class="trial-points-grid">
              <div class="trial-point-item">
                <span class="trial-point-num">1</span>
                <div>
                  <h4 class="trial-point-heading">{{ t('home.trialPoint1Title') }}</h4>
                  <p class="trial-point-body">{{ t('home.trialPoint1Desc') }}</p>
                </div>
              </div>
              <div class="trial-point-item">
                <span class="trial-point-num">2</span>
                <div>
                  <h4 class="trial-point-heading">{{ t('home.trialPoint2Title') }}</h4>
                  <p class="trial-point-body">{{ t('home.trialPoint2Desc') }}</p>
                </div>
              </div>
              <div class="trial-point-item">
                <span class="trial-point-num">3</span>
                <div>
                  <h4 class="trial-point-heading">{{ t('home.trialPoint3Title') }}</h4>
                  <p class="trial-point-body">{{ t('home.trialPoint3Desc') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ de Precios -->
    <section class="pricing-faq-section">
      <div class="pricing-wrap max-w-3xl mx-auto">
        <div class="text-center mb-10">
          <span class="eyebrow">{{ t('nav.faq') }}</span>
          <h2 class="h-section">{{ locale === 'en' ? 'Frequently Asked Questions about Pricing' : 'Preguntas Frecuentes sobre Precios' }}</h2>
        </div>

        <div class="faq-accordion">
          <div
            v-for="(item, idx) in pricingFaqs"
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
.pricing-page {
  background: #ffffff;
  color: #191919;
}

.pricing-wrap {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.pricing-hero {
  padding: clamp(60px, 9vw, 96px) 0 40px;
  background: #fbfbfa;
  border-bottom: 1px solid #ebebea;
}

.pricing-hero-title {
  font-size: clamp(32px, 5vw, 48px);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.15;
  color: #050505;
  margin-top: 10px;
}

.pricing-hero-subtitle {
  font-size: clamp(16px, 2vw, 19px);
  line-height: 1.55;
  color: #5f5e5b;
}

.pricing-cards-section {
  padding: clamp(60px, 8vw, 84px) 0;
}

.pricing-card {
  background: #ffffff;
  border: 1px solid #ebebea;
  border-radius: 16px;
  padding: 36px 30px;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.pricing-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
}

.pricing-card-pro {
  border-color: #0066cc;
  box-shadow: 0 10px 32px rgba(0, 102, 204, 0.08);
}

.pricing-badge {
  display: inline-block;
  align-self: flex-start;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
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

.pricing-period {
  font-size: 13px;
  font-weight: 600;
  color: #0066cc;
  margin: -6px 0 12px;
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
  background: #2b2b2b;
}

.pricing-btn-pro {
  background: #0066cc;
  color: #ffffff;
}

.pricing-btn-pro:hover {
  background: #0052a3;
}

.trial-info-wrapper {
  margin-top: 36px;
}

.trial-info-box {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  padding: 26px 28px;
}

.trial-info-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
}

.trial-info-icon {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: #e0f2fe;
  color: #0284c7;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.trial-info-title {
  font-size: 16px;
  font-weight: 700;
  color: #0f172a;
  margin: 0;
  letter-spacing: -0.01em;
}

.trial-points-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
}

.trial-point-item {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.trial-point-num {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #0066cc;
  color: #ffffff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  flex-shrink: 0;
  margin-top: 2px;
}

.trial-point-heading {
  font-size: 14.5px;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 4px;
}

.trial-point-body {
  font-size: 13.5px;
  line-height: 1.5;
  color: #475569;
  margin: 0;
}

.pricing-faq-section {
  padding: clamp(60px, 7vw, 84px) 0;
  background: #fbfbfa;
  border-top: 1px solid #ebebea;
}

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
