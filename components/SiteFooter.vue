<script setup lang="ts">
const { t } = useI18n()
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
  <footer class="site-footer">
    <div class="site-footer-inner">
      <!-- Grid Principal: Identidad de Marca + 4 Columnas de Enlaces -->
      <div class="site-footer-top">
        <!-- Columna de Marca -->
        <div class="footer-brand-col">
          <NuxtLink :to="localePath('index')" class="footer-brand-link" :aria-label="t('common.brand')">
            <LogoMark :size="20" />
          </NuxtLink>

          <p class="footer-brand-tagline">
            {{ t('footer.tagline') }}
          </p>
        </div>

        <!-- Columnas de Enlaces -->
        <div class="footer-links-grid">
          <!-- Col 1: Producto -->
          <div class="footer-col">
            <h4 class="footer-col-title">{{ t('footer.product') }}</h4>
            <ul class="footer-col-list">
              <li v-for="link in productLinks" :key="link.to">
                <NuxtLink :to="link.to" class="footer-link">{{ link.label }}</NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Col 2: Soluciones -->
          <div class="footer-col">
            <h4 class="footer-col-title">{{ t('footer.solutions') }}</h4>
            <ul class="footer-col-list">
              <li v-for="(link, idx) in solutionLinks" :key="idx">
                <NuxtLink :to="link.to" class="footer-link">{{ link.label }}</NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Col 3: Recursos -->
          <div class="footer-col">
            <h4 class="footer-col-title">{{ t('footer.resources') }}</h4>
            <ul class="footer-col-list">
              <li v-for="link in resourceLinks" :key="link.to">
                <NuxtLink :to="link.to" class="footer-link">{{ link.label }}</NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Col 4: Legal & Soporte -->
          <div class="footer-col">
            <h4 class="footer-col-title">{{ t('footer.legal') }}</h4>
            <ul class="footer-col-list">
              <li v-for="link in legalLinks" :key="link.label">
                <button
                  v-if="link.isAction"
                  type="button"
                  @click="link.action"
                  class="footer-link footer-btn"
                >
                  {{ link.label }}
                </button>
                <NuxtLink v-else :to="link.to" class="footer-link">{{ link.label }}</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr class="footer-divider" />

      <!-- Sub-Footer: Copyright -->
      <div class="site-footer-bottom">
        <div class="footer-copyright">
          © {{ year }} Lexbell Technologies. {{ t('footer.rights') }}
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background: #fbfbfa;
  color: #5f5e5b;
  font-size: 13.5px;
  line-height: 1.5;
  border-top: 1px solid #ebebea;
}

.site-footer-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 56px 24px 32px;
}

.site-footer-top {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
}

@media (min-width: 960px) {
  .site-footer-top {
    grid-template-columns: 360px 1fr;
    gap: 60px;
  }
}

/* Columna de Marca y Descargas */
.footer-brand-col {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.footer-brand-link {
  display: inline-flex;
  text-decoration: none;
  margin-bottom: 14px;
}

.footer-brand-tagline {
  font-size: 13.5px;
  line-height: 1.55;
  color: #5f5e5b;
  margin: 0;
  max-width: 330px;
}

/* Grid de Enlaces */
.footer-links-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px 24px;
}

@media (min-width: 640px) {
  .footer-links-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 28px;
  }
}

.footer-col {
  display: flex;
  flex-direction: column;
}

.footer-col-title {
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #050505;
  margin: 0 0 14px;
}

.footer-col-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-link {
  color: #5f5e5b;
  font-size: 13.5px;
  text-decoration: none;
  transition: color 0.15s ease;
}

.footer-link:hover {
  color: #0066cc;
}

.footer-btn {
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  font-size: 13.5px;
  cursor: pointer;
  text-align: left;
}

/* Divisor */
.footer-divider {
  border: 0;
  border-top: 1px solid #ebebea;
  margin: 44px 0 24px;
}

/* Sub-footer */
.site-footer-bottom {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  font-size: 12.5px;
  color: #787774;
}
</style>
