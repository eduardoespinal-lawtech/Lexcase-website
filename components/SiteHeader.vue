<script setup lang="ts">
const { t, locale } = useI18n()
const localePath = useLocalePath()

const open = ref(false)
const route = useRoute()
watch(() => route.fullPath, () => { open.value = false })

const links = computed(() => [
  { to: localePath('index'), label: t('nav.home') },
  { to: localePath('features'), label: t('nav.features') },
  { to: localePath('support'), label: t('nav.support') },
  { to: localePath('faq'), label: t('nav.faq') },
  { to: localePath('contact'), label: t('nav.contact') }
])
</script>

<template>
  <header class="site-header">
    <div class="site-header-inner">
      <NuxtLink :to="localePath('index')" class="site-header-brand" :aria-label="t('common.brand')">
        <LogoMark :size="20" />
      </NuxtLink>

      <nav class="site-header-nav" aria-label="Primary">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="site-header-link"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <div class="site-header-tail">
        <LangSwitcher />
        <a
          href="#descargar"
          class="site-header-cta"
        >
          {{ locale === 'es' ? 'Descargar' : 'Download' }}
        </a>
        <button
          class="site-header-burger"
          :aria-label="open ? t('nav.close') : t('nav.menu')"
          @click="open = !open"
        >
          <svg v-if="!open" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="7" x2="21" y2="7" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="17" x2="21" y2="17" />
          </svg>
          <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </div>

    <Transition name="fade">
      <nav v-if="open" class="site-header-mobile" aria-label="Mobile">
        <div class="site-header-mobile-inner">
          <NuxtLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="site-header-mobile-link"
          >
            {{ link.label }}
          </NuxtLink>
          <div class="site-header-mobile-lang">
            <span class="mobile-lang-label">{{ locale === 'es' ? 'Idioma' : 'Language' }}</span>
            <LangSwitcher />
          </div>
        </div>
      </nav>
    </Transition>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 40;
  background: rgba(8, 9, 12, 0.75);
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}
.site-header-inner {
  max-width: 1240px;
  margin: 0 auto;
  height: 56px;
  padding: 0 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}
.site-header-brand {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
}
.site-header-nav {
  display: none;
  align-items: center;
  gap: 24px;
  flex: 1;
  justify-content: center;
}
@media (min-width: 833px) {
  .site-header-nav { display: flex; }
}
.site-header-link {
  font-size: 13.5px;
  color: #a1a1aa;
  text-decoration: none;
  font-weight: 500;
  transition: opacity .15s ease, color .15s ease;
  letter-spacing: -0.01em;
}
.site-header-link:hover { color: #ffffff; }
.router-link-exact-active.site-header-link { font-weight: 600; color: #ffffff; }

.site-header-tail {
  display: flex;
  align-items: center;
  gap: 14px;
}
.site-header-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  padding: 0 14px;
  border-radius: 9999px;
  font-size: 13px;
  font-weight: 500;
  color: #ffffff;
  background: #0071e3;
  text-decoration: none;
  transition: all .15s ease;
  box-shadow: 0 0 16px -2px rgba(0, 113, 227, 0.4);
}
.site-header-cta:hover {
  background: #0077ed;
  box-shadow: 0 0 20px 0 rgba(0, 113, 227, 0.6);
  transform: translateY(-0.5px);
}
@media (max-width: 640px) {
  .site-header-cta { display: none; }
}

.site-header-burger {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 8px;
  color: #f5f5f7;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.04);
}
.site-header-burger:hover { background: rgba(255, 255, 255, 0.08); }
@media (min-width: 833px) {
  .site-header-burger { display: none; }
}

.site-header-mobile {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(8, 9, 12, 0.96);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
}
.site-header-mobile-inner {
  max-width: 1240px;
  margin: 0 auto;
  padding: 8px 22px 18px;
  display: flex;
  flex-direction: column;
}
.site-header-mobile-link {
  padding: 12px 0;
  font-size: 16px;
  color: #f5f5f7;
  text-decoration: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}
.site-header-mobile-link:last-child { border-bottom: 0; }

.site-header-mobile-lang {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0 6px;
  margin-top: 6px;
}
.mobile-lang-label {
  font-size: 14px;
  font-weight: 500;
  color: #a1a1aa;
}

.fade-enter-active, .fade-leave-active { transition: opacity .15s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
