<script setup lang="ts">
const { t, locale } = useI18n()
const localePath = useLocalePath()
const { openModal } = useCookieConsent()

const year = new Date().getFullYear()

const productLinks = computed(() => [
  { to: localePath('features'), label: t('nav.features') },
  { to: localePath('pricing'), label: t('nav.pricing') },
  { to: localePath('alternativa-clio'), label: t('footer.clioAlt') }
])

const solutionLinks = computed(() => [
  { to: localePath('solutions'), label: t('footer.litigation') },
  { to: localePath('solutions'), label: t('footer.administrative') },
  { to: localePath('solutions'), label: t('footer.immigration') },
  { to: localePath('solutions'), label: t('footer.realEstate') },
  { to: localePath('solutions'), label: t('footer.corporate') }
])

const resourceLinks = computed(() => [
  { to: localePath('calculadora-plazos'), label: t('footer.calculator') },
  { to: localePath('blog'), label: t('nav.blog') },
  { to: localePath('faq'), label: t('nav.faq') },
  { to: localePath('/blog/secreto-profesional-abogados-nube-seguridad/'), label: t('footer.guide') }
])

const legalLinks = computed(() => [
  { to: localePath('contact'), label: t('nav.contact') },
  { to: localePath('support'), label: t('nav.support') },
  { to: localePath('terms'), label: t('nav.termsOfUse') },
  { to: localePath('privacy'), label: t('nav.privacyPolicy') },
  { to: localePath('cookies'), label: t('nav.cookiePolicy') },
  { isAction: true, label: t('nav.manageCookies'), action: openModal }
])
</script>

<template>
  <footer class="manus-footer">
    <div class="manus-footer-inner">
      <!-- Tagline en Serif Itálico estilo Manus -->
      <div class="manus-footer-hero">
        <h2 class="manus-footer-tagline">
          {{ locale === 'en' ? 'Professional secrecy by design. Local AI.' : 'Secreto profesional por diseño. Inteligencia local.' }}
        </h2>
      </div>

      <!-- Grid de Enlaces estilo Manus -->
      <div class="manus-footer-grid">
        <!-- Col 1: Marca & Resumen -->
        <div class="manus-footer-col manus-brand-col">
          <NuxtLink :to="localePath('index')" class="manus-footer-brand" :aria-label="t('common.brand')">
            <LogoMark light />
          </NuxtLink>
          <p class="manus-footer-summary">
            {{ t('footer.tagline') }}
          </p>
        </div>

        <!-- Col 2: Producto -->
        <div class="manus-footer-col">
          <h3 class="manus-col-title">{{ t('footer.product') }}</h3>
          <ul class="manus-col-list">
            <li v-for="link in productLinks" :key="link.to">
              <NuxtLink :to="link.to" class="manus-footer-link">{{ link.label }}</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Col 3: Soluciones -->
        <div class="manus-footer-col">
          <h3 class="manus-col-title">{{ t('footer.solutions') }}</h3>
          <ul class="manus-col-list">
            <li v-for="(link, idx) in solutionLinks" :key="idx">
              <NuxtLink :to="link.to" class="manus-footer-link">{{ link.label }}</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Col 4: Recursos -->
        <div class="manus-footer-col">
          <h3 class="manus-col-title">{{ t('footer.resources') }}</h3>
          <ul class="manus-col-list">
            <li v-for="link in resourceLinks" :key="link.to">
              <NuxtLink :to="link.to" class="manus-footer-link">{{ link.label }}</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Col 5: Legal & Soporte -->
        <div class="manus-footer-col">
          <h3 class="manus-col-title">{{ t('footer.legal') }}</h3>
          <ul class="manus-col-list">
            <li v-for="link in legalLinks" :key="link.label">
              <button
                v-if="link.isAction"
                type="button"
                @click="link.action"
                class="manus-footer-link manus-footer-btn"
              >
                {{ link.label }}
              </button>
              <NuxtLink v-else :to="link.to" class="manus-footer-link">{{ link.label }}</NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <!-- Barra Inferior -->
      <div class="manus-footer-bottom">
        <div class="manus-footer-copy">
          © {{ year }} Lexbell Technologies. {{ t('footer.rights') }}
        </div>
        <div class="manus-footer-extra">
          <span>macOS & Windows · 100% Offline</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* === FOOTER OSCURO ELEGANTE EXACTO ESTILO MANUS (#1a1a19) === */
.manus-footer {
  width: 100%;
  background: #1a1a19;
  color: #ffffff;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.manus-footer-inner {
  max-width: 1080px;
  margin: 0 auto;
  padding: 80px 24px 48px;
  display: flex;
  flex-direction: column;
  gap: 48px;
}

@media (min-width: 1024px) {
  .manus-footer-inner {
    padding: 100px 24px 56px;
    gap: 60px;
  }
}

/* Tagline Superior Serif Itálico estilo Manus */
.manus-footer-hero {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 40px;
}

.manus-footer-tagline {
  font-family: Newsreader, Charter, "Bitstream Charter", "Sitka Text", Cambria, Georgia, serif;
  font-size: clamp(26px, 3.5vw, 38px);
  font-style: italic;
  font-weight: 400;
  line-height: 1.25;
  color: #ffffff;
  margin: 0;
  max-width: 780px;
}

/* Grid de Enlaces */
.manus-footer-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px 24px;
}

@media (min-width: 768px) {
  .manus-footer-grid {
    grid-template-columns: 1.8fr 1fr 1fr 1fr 1fr;
    gap: 32px;
  }
}

.manus-brand-col {
  grid-column: span 2;
}

@media (min-width: 768px) {
  .manus-brand-col {
    grid-column: span 1;
  }
}

.manus-footer-brand {
  display: inline-flex;
  margin-bottom: 14px;
  text-decoration: none;
}

.manus-footer-summary {
  font-size: 14px;
  line-height: 1.6;
  color: #a3a3a3;
  margin: 0;
  max-width: 280px;
}

.manus-footer-col {
  display: flex;
  flex-direction: column;
}

.manus-col-title {
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  margin: 0 0 14px;
  letter-spacing: -0.01em;
}

.manus-col-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.manus-footer-link {
  font-size: 14px;
  color: #a3a3a3;
  text-decoration: none;
  transition: color 0.15s ease;
  line-height: 1.4;
}

.manus-footer-link:hover {
  color: #ffffff;
  text-decoration: underline;
}

.manus-footer-btn {
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  font-size: 14px;
  cursor: pointer;
  text-align: left;
}

/* Barra inferior */
.manus-footer-bottom {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding-top: 28px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 14px;
  color: #737373;
}

.manus-footer-copy {
  line-height: 1.5;
}

.manus-footer-extra {
  font-size: 13px;
  color: #737373;
}
</style>
