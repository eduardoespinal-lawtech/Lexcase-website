<script setup lang="ts">
const { t, locale } = useI18n()
const localePath = useLocalePath()

const open = ref(false)
const route = useRoute()
watch(() => route.fullPath, () => { open.value = false })

const links = computed(() => [
  { to: localePath('index'), label: t('nav.home') },
  { to: localePath('features'), label: t('nav.features') },
  { to: localePath('blog'), label: t('nav.blog') },
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
          :href="localePath('index') + '#descargar'"
          class="site-header-cta"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          <span>{{ t('nav.downloadCTA') }}</span>
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
          <a
            :href="localePath('index') + '#descargar'"
            class="site-header-mobile-cta"
            @click="open = false"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            <span>{{ t('nav.downloadCTA') }}</span>
          </a>
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
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}
.site-header-inner {
  max-width: 1440px;
  margin: 0 auto;
  height: 54px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}
.site-header-brand {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: #050505;
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
  color: #37352F;
  text-decoration: none;
  opacity: 0.82;
  font-weight: 500;
  transition: opacity .15s ease, color .15s ease;
  letter-spacing: -0.01em;
}
.site-header-link:hover { opacity: 1; color: #000000; }
.router-link-exact-active.site-header-link { opacity: 1; font-weight: 600; color: #000000; }

.site-header-tail {
  display: flex;
  align-items: center;
  gap: 12px;
}
.site-header-burger {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 6px;
  color: #050505;
}
.site-header-burger:hover { background: rgba(0, 0, 0, 0.05); }
@media (min-width: 833px) {
  .site-header-burger { display: none; }
}

.site-header-mobile {
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  background: rgba(255, 255, 255, 0.98);
}
.site-header-mobile-inner {
  max-width: 1240px;
  margin: 0 auto;
  padding: 6px 22px 14px;
  display: flex;
  flex-direction: column;
}
.site-header-mobile-link {
  padding: 10px 0;
  font-size: 16px;
  color: #050505;
  text-decoration: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}
.site-header-mobile-link:last-child { border-bottom: 0; }

.site-header-mobile-lang {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 0 6px;
  margin-top: 4px;
}
.mobile-lang-label {
  font-size: 14px;
  font-weight: 500;
  color: #787774;
}

.site-header-cta {
  display: none;
  align-items: center;
  gap: 7px;
  background: #111827;
  color: #ffffff;
  padding: 7px 14px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.15s ease;
  white-space: nowrap;
  letter-spacing: -0.01em;
}
.site-header-cta:hover {
  background: #000000;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
@media (min-width: 640px) {
  .site-header-cta {
    display: inline-flex;
  }
}

.site-header-mobile-cta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: #111827;
  color: #ffffff;
  padding: 12px 18px;
  border-radius: 8px;
  font-size: 14.5px;
  font-weight: 600;
  text-decoration: none;
  margin-top: 14px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
.site-header-mobile-cta:active {
  background: #000000;
}

.fade-enter-active, .fade-leave-active { transition: opacity .15s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
