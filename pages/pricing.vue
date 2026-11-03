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

const proFeatures = ['home.proFeature1', 'home.proFeature2', 'home.proFeature3']

const plans = [
  {
    id: 'free',
    key: 'freePlan',
    intro: null,
    features: ['home.freePlanFeature1', 'home.freePlanFeature2', 'home.freePlanFeature3', 'home.freePlanFeature4'],
    cta: 'home.freePlanCTA',
    featured: false
  },
  {
    id: 'annual',
    key: 'proAnnual',
    intro: 'home.proFeaturesIntro',
    features: [...proFeatures, 'home.proAnnualExtra'],
    cta: 'home.proCTA',
    featured: true
  },
  {
    id: 'monthly',
    key: 'proMonthly',
    intro: 'home.proFeaturesIntro',
    features: [...proFeatures, 'home.proMonthlyExtra'],
    cta: 'home.proCTA',
    featured: false
  }
]

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
        <div class="pricing-grid">
          <div
            v-for="plan in plans"
            :key="plan.id"
            class="pricing-card"
            :class="{ 'is-featured': plan.featured }"
          >
            <span v-if="plan.featured" class="pricing-badge">{{ t('home.proBadge') }}</span>
            <h2 class="pricing-name">{{ t(`home.${plan.key}Title`) }}</h2>
            <p class="pricing-desc">{{ t(`home.${plan.key}Desc`) }}</p>
            <div class="pricing-price">{{ t(`home.${plan.key}Price`) }}</div>
            <p class="pricing-period">{{ t(`home.${plan.key}Period`) }}</p>

            <a
              href="#descargar"
              class="pricing-btn"
              :class="plan.featured ? 'pricing-btn-primary' : 'pricing-btn-outline'"
            >
              {{ t(plan.cta) }}
            </a>
            <p class="pricing-note">
              <template v-if="plan.intro">{{ t('home.proTrialNote') }}</template>
            </p>

            <div class="pricing-divider"></div>

            <p v-if="plan.intro" class="pricing-intro">{{ t(plan.intro) }}</p>
            <ul class="pricing-features">
              <li v-for="feature in plan.features" :key="feature">
                <svg class="feature-check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>{{ t(feature) }}</span>
              </li>
            </ul>
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
  font-size: clamp(30px, 3.6vw, 42px);
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

.pricing-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  max-width: 1040px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .pricing-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.pricing-card {
  position: relative;
  background: #ffffff;
  border: 1px solid #e6e6e4;
  border-radius: 16px;
  padding: 32px 28px;
  display: flex;
  flex-direction: column;
}

.pricing-card.is-featured {
  border: 1.5px solid #0066cc;
  box-shadow: 0 12px 32px rgba(0, 102, 204, 0.08);
}

.pricing-badge {
  position: absolute;
  top: -12px;
  left: 28px;
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
  background: #0066cc;
  color: #ffffff;
}

.pricing-name {
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #050505;
  margin: 0 0 6px;
}

.pricing-desc {
  font-size: 14px;
  line-height: 1.5;
  color: #6b6b68;
  margin: 0 0 24px;
}

.pricing-price {
  font-size: 40px;
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1;
  color: #050505;
}

.pricing-period {
  font-size: 13px;
  color: #6b6b68;
  margin: 8px 0 24px;
}

.pricing-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s ease, border-color 0.2s ease;
}

.pricing-btn-primary {
  background: #0066cc;
  color: #ffffff;
  border: 1px solid #0066cc;
}

.pricing-btn-primary:hover {
  background: #0052a3;
  border-color: #0052a3;
}

.pricing-btn-outline {
  background: #ffffff;
  color: #050505;
  border: 1px solid #d4d4d2;
}

.pricing-btn-outline:hover {
  border-color: #050505;
}

.pricing-note {
  min-height: 18px;
  font-size: 12.5px;
  color: #6b6b68;
  text-align: center;
  margin: 10px 0 0;
}

.pricing-divider {
  height: 1px;
  background: #ebebea;
  margin: 24px 0;
}

.pricing-intro {
  font-size: 13.5px;
  font-weight: 600;
  color: #050505;
  margin: 0 0 14px;
}

.pricing-features {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.pricing-features li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 14px;
  line-height: 1.45;
  color: #37352f;
}

.feature-check {
  flex-shrink: 0;
  margin-top: 2px;
  color: #8a8a87;
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
