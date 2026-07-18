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
      { href: 'mailto:soporte@lex-bell.com', label: 'soporte@lex-bell.com' }
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
      <div class="site-footer-top">
        <AppDownload light compact />
        <p class="site-footer-availability">{{ t('footer.availability') }}</p>
      </div>

      <hr class="site-footer-hr" />

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
        <p>© {{ year }} ICLVS Legal Intelligence LLC. {{ t('footer.rights') }}</p>
        <p>lex-bell.com</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background: #180A15;
  color: rgba(255, 255, 255, 0.60);
  font-size: 12px;
  line-height: 1.5;
}
.site-footer-inner {
  max-width: 1240px;
  margin: 0 auto;
  padding: 30px 22px;
}
.site-footer-top {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
}
.site-footer-availability {
  margin: 0;
  font-size: 12px;
  letter-spacing: -0.005em;
  max-width: 460px;
}
.site-footer-hr {
  border: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.10);
  margin: 18px 0;
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
  font-size: 12px;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 10px;
  letter-spacing: -0.005em;
}
.site-footer-ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.site-footer-link {
  color: rgba(255, 255, 255, 0.60);
  text-decoration: none;
}
.site-footer-link:hover { color: #ffffff; text-decoration: underline; }
.site-footer-base {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 12px;
  font-size: 12px;
}
</style>
