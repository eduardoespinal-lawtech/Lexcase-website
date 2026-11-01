<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

const year = new Date().getFullYear()
const isCookieModalOpen = ref(false)

const openCookieModal = () => {
  isCookieModalOpen.value = true
}

const sections = computed(() => [
  {
    title: t('footer.product'),
    links: [
      { to: localePath('index'),    label: t('nav.home') },
      { to: localePath('features'), label: t('nav.features') },
      { to: localePath('blog'),     label: t('nav.blog') },
      { to: localePath('support'),  label: t('nav.support') },
      { to: localePath('faq'),      label: t('nav.faq') }
    ]
  },
  {
    title: t('footer.contact'),
    links: [
      { to: localePath('contact'), label: t('nav.contact') },
      { href: 'mailto:support@lex-bell.com', label: 'support@lex-bell.com' }
    ]
  },
  {
    title: t('footer.legal'),
    links: [
      { to: localePath('terms'),   label: t('nav.termsOfUse') },
      { to: localePath('privacy'), label: t('nav.privacyPolicy') },
      { to: localePath('cookies'), label: t('nav.cookiePolicy') },
      { isAction: true, label: t('nav.manageCookies'), action: openCookieModal }
    ]
  }
])
</script>

<template>
  <footer class="site-footer">
    <div class="site-footer-inner">
      <div class="site-footer-cols">
        <div v-for="s in sections" :key="s.title" class="site-footer-col">
          <h4 class="site-footer-h4">{{ s.title }}</h4>
          <ul class="site-footer-ul">
            <li v-for="l in s.links" :key="l.label">
              <button
                v-if="l.isAction"
                type="button"
                @click="l.action"
                class="site-footer-link site-footer-btn"
              >
                {{ l.label }}
              </button>
              <NuxtLink v-else-if="l.to" :to="l.to" class="site-footer-link">{{ l.label }}</NuxtLink>
              <a v-else :href="l.href" class="site-footer-link">{{ l.label }}</a>
            </li>
          </ul>
        </div>
      </div>

      <hr class="site-footer-hr" />

      <div class="site-footer-base">
        <p>© {{ year }} Lexbell. {{ t('footer.rights') }}</p>
        <div class="site-footer-base-legal">
          <NuxtLink :to="localePath('terms')" class="site-footer-base-link">{{ t('nav.termsOfUse') }}</NuxtLink>
          <span class="site-footer-sep">·</span>
          <NuxtLink :to="localePath('privacy')" class="site-footer-base-link">{{ t('nav.privacyPolicy') }}</NuxtLink>
          <span class="site-footer-sep">·</span>
          <NuxtLink :to="localePath('cookies')" class="site-footer-base-link">{{ t('nav.cookiePolicy') }}</NuxtLink>
          <span class="site-footer-sep">·</span>
          <button type="button" @click="openCookieModal" class="site-footer-base-link site-footer-btn">
            {{ t('nav.manageCookies') }}
          </button>
        </div>
      </div>
    </div>

    <!-- Modal de Gestión de Cookies -->
    <CookieModal v-if="isCookieModalOpen" @close="isCookieModalOpen = false" />
  </footer>
</template>

<style scoped>
.site-footer {
  background: #F7F7F5;
  color: #5F5E5B;
  font-size: 13px;
  line-height: 1.5;
  border-top: 1px solid #EBEBEA;
}
.site-footer-inner {
  max-width: 1440px;
  margin: 0 auto;
  padding: 56px 24px 40px;
}
.site-footer-hr {
  border: 0;
  border-top: 1px solid #EBEBEA;
  margin: 32px 0 20px;
}
.site-footer-cols {
  display: grid;
  grid-template-columns: 1fr;
  gap: 28px;
}
@media (min-width: 600px) {
  .site-footer-cols { grid-template-columns: repeat(3, 1fr); gap: 36px; }
}
.site-footer-h4 {
  font-size: 11.5px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #050505;
  margin: 0 0 12px;
}
.site-footer-ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.site-footer-link {
  color: #5F5E5B;
  text-decoration: none;
  transition: color 0.15s ease;
}
.site-footer-link:hover { color: #000000; text-decoration: underline; }
.site-footer-btn {
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  font-size: 13px;
  cursor: pointer;
  text-align: left;
}
.site-footer-base {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  font-size: 12.5px;
  color: #787774;
}
.site-footer-base-legal {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
}
.site-footer-base-link {
  color: #787774;
  text-decoration: none;
  transition: color 0.15s ease;
}
.site-footer-base-link:hover {
  color: #111111;
  text-decoration: underline;
}
.site-footer-sep {
  color: #B5B5B3;
  user-select: none;
}
</style>
