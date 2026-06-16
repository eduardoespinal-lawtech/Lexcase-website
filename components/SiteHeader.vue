<script setup lang="ts">
const { t } = useI18n()
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
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}
.site-header-inner {
  max-width: 1240px;
  margin: 0 auto;
  height: 48px;
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
  color: #1d1d1f;
}
.site-header-nav {
  display: none;
  align-items: center;
  gap: 26px;
  flex: 1;
  justify-content: center;
}
@media (min-width: 833px) {
  .site-header-nav { display: flex; }
}
.site-header-link {
  font-size: 12px;
  color: #1d1d1f;
  text-decoration: none;
  opacity: 0.88;
  transition: opacity .15s ease;
  letter-spacing: -0.005em;
}
.site-header-link:hover { opacity: 1; }
.router-link-exact-active.site-header-link { opacity: 1; font-weight: 500; }

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
  color: #1d1d1f;
}
.site-header-burger:hover { background: rgba(0, 0, 0, 0.05); }
@media (min-width: 833px) {
  .site-header-burger { display: none; }
}

.site-header-mobile {
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  background: rgba(255, 255, 255, 0.96);
}
.site-header-mobile-inner {
  max-width: 1240px;
  margin: 0 auto;
  padding: 6px 22px 12px;
  display: flex;
  flex-direction: column;
}
.site-header-mobile-link {
  padding: 10px 0;
  font-size: 17px;
  color: #1d1d1f;
  text-decoration: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}
.site-header-mobile-link:last-child { border-bottom: 0; }

.fade-enter-active, .fade-leave-active { transition: opacity .15s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
