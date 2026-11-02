<script setup lang="ts">
const { t, locale } = useI18n()
const localePath = useLocalePath()
const { openModal } = useCookieConsent()
const config = useRuntimeConfig()
const { trackDownload } = useAnalytics()

const year = new Date().getFullYear()

const appleUrl = computed(() => config.public.appleStoreUrl || 'https://apps.apple.com/do/app/lexbell-expedientes-legales/id6791787627?mt=12')
const microsoftUrl = computed(() => config.public.microsoftStoreUrl || 'https://apps.microsoft.com/detail/9NLZXP46J9G2')

const appleBadgeSrc = computed(() => {
  return locale.value === 'en' ? '/mac-app-store-badge-en.svg' : '/mac-app-store-badge-es.svg'
})

const msBadgeSrc = computed(() => {
  return locale.value === 'en' ? '/microsoft-store-badge.svg' : '/microsoft-store-badge-es.svg'
})

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
  { to: localePath('blog') + '/secreto-profesional-abogados-nube-seguridad', label: t('footer.guide') }
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
  <footer class="site-footer" id="descargar">
    <div class="site-footer-inner">
      <!-- Grid Principal: Identidad de Marca + Descargas + 4 Columnas de Enlaces -->
      <div class="site-footer-top">
        <!-- Columna de Marca y Descargas Oficiales -->
        <div class="footer-brand-col">
          <NuxtLink :to="localePath('index')" class="footer-brand-link" :aria-label="t('common.brand')">
            <LogoMark :size="20" />
          </NuxtLink>

          <p class="footer-brand-tagline">
            {{ t('footer.tagline') }}
          </p>

          <!-- Indicador de Privacidad & Estado -->
          <div class="footer-status-pill">
            <span class="status-dot"></span>
            <span class="status-text">{{ t('footer.status') }}</span>
          </div>

          <!-- Botones Oficiales de Descarga Integrados -->
          <div class="footer-download-box">
            <span class="footer-download-label">
              {{ locale === 'en' ? 'Official Store Downloads' : 'Descargas Oficiales para tu Equipo' }}
            </span>

            <div class="footer-download-btns">
              <a
                :href="appleUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="footer-store-badge-link"
                :title="locale === 'en' ? 'Download on Mac App Store' : 'Consíguelo en el Mac App Store'"
                @click="trackDownload('apple')"
              >
                <img
                  :src="appleBadgeSrc"
                  :alt="locale === 'en' ? 'Download on Mac App Store' : 'Consíguelo en el Mac App Store'"
                  class="footer-store-badge-img"
                  width="180"
                  height="46"
                  loading="lazy"
                />
              </a>

              <a
                :href="microsoftUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="footer-store-badge-link"
                :title="locale === 'en' ? 'Get it from Microsoft' : 'Obtener de Microsoft'"
                @click="trackDownload('microsoft')"
              >
                <img
                  :src="msBadgeSrc"
                  :alt="locale === 'en' ? 'Get it from Microsoft' : 'Obtener de Microsoft'"
                  class="footer-store-badge-img"
                  width="180"
                  height="46"
                  loading="lazy"
                />
              </a>
            </div>

            <div class="footer-guarantees-micro">
              <span>✓ {{ locale === 'en' ? '15-Day Free Trial' : '15 Días de prueba gratis' }}</span>
              <span class="guarantee-sep">·</span>
              <span>✓ {{ locale === 'en' ? 'No card required' : 'Sin tarjeta de crédito' }}</span>
              <span class="guarantee-sep">·</span>
              <span>✓ {{ locale === 'en' ? 'Free up to 50 cases' : 'Gratis hasta 50 casos' }}</span>
            </div>
          </div>
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

      <!-- Sub-Footer: Copyright + Compatibilidad de Plataformas Oficiales -->
      <div class="site-footer-bottom">
        <div class="footer-copyright">
          © {{ year }} Lexbell Technologies. {{ t('footer.rights') }}
        </div>

        <div class="footer-platforms">
          <span class="platform-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.54c.66-.82 1.11-1.96.99-3.1-.96.04-2.13.65-2.81 1.45-.6.7-1.13 1.83-1 2.95 1.08.08 2.18-.54 2.82-1.3"/>
            </svg>
            <span>macOS</span>
          </span>

          <span class="platform-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
            </svg>
            <span>Windows</span>
          </span>

          <span class="platform-badge platform-badge-crypto">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
            <span>SQLite AES-256</span>
          </span>
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
  margin: 0 0 16px;
  max-width: 330px;
}

.footer-status-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 999px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #10b981;
  box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.2);
}

.status-text {
  font-size: 12px;
  font-weight: 600;
  color: #1e293b;
}

/* Enlaces de Descarga en el Footer */
.footer-download-box {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}

.footer-download-label {
  font-size: 11.5px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #050505;
}

.footer-download-btns {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}

.footer-store-badge-link {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  line-height: 0;
  border-radius: 8px;
  transition: transform 0.15s ease, opacity 0.15s ease;
}

.footer-store-badge-link:hover {
  transform: translateY(-2px);
  opacity: 0.92;
}

.footer-store-badge-img {
  height: 44px;
  width: auto;
  border-radius: 8px;
  display: block;
}

.footer-guarantees-micro {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  font-size: 11.5px;
  font-weight: 600;
  color: #0066cc;
  margin-top: 2px;
}

.guarantee-sep {
  color: #94a3b8;
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

.footer-platforms {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
}

.platform-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  background: #ffffff;
  border: 1px solid #ebebea;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  color: #37352f;
}

.platform-badge-crypto {
  background: #f0fdf4;
  border-color: #dcfce7;
  color: #166534;
}
</style>
