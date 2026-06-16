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
      { href: 'mailto:eduardoespinaldeaza@gmail.com', label: 'eduardoespinaldeaza@gmail.com' }
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
      <p class="site-footer-availability">
        {{ t('footer.availability') }}
      </p>

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
        <p>lexcase.com.do</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background: #f5f5f7;
  color: #6e6e73;
  font-size: 12px;
  line-height: 1.5;
}
.site-footer-inner {
  max-width: 1240px;
  margin: 0 auto;
  padding: 30px 22px;
}
.site-footer-availability {
  margin: 0 0 18px;
  font-size: 12px;
  letter-spacing: -0.005em;
}
.site-footer-hr {
  border: 0;
  border-top: 1px solid #d2d2d7;
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
  color: #1d1d1f;
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
  color: #6e6e73;
  text-decoration: none;
}
.site-footer-link:hover { color: #1d1d1f; text-decoration: underline; }
.site-footer-base {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 12px;
  font-size: 12px;
}
</style>
