<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

const year = new Date().getFullYear()

const sections = computed(() => [
  {
    title: t('footer.product'),
    links: [
      { to: localePath('index'),    label: t('nav.home') },
      { to: localePath('features'), label: t('nav.features') },
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
      { to: localePath('privacy'), label: t('nav.privacy') },
      { to: localePath('terms'),   label: t('nav.terms') }
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
              <NuxtLink v-if="l.to" :to="l.to" class="site-footer-link">{{ l.label }}</NuxtLink>
              <a v-else :href="l.href" class="site-footer-link">{{ l.label }}</a>
            </li>
          </ul>
        </div>
      </div>

      <hr class="site-footer-hr" />

      <div class="site-footer-base">
        <p>© {{ year }} Lexbell. {{ t('footer.rights') }}</p>
      </div>
    </div>
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
  max-width: 1240px;
  margin: 0 auto;
  padding: 48px 22px 36px;
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
.site-footer-base {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 12px;
  font-size: 12.5px;
  color: #787774;
}
</style>
