<script setup lang="ts">
const { t, locale } = useI18n()
const localePath = useLocalePath()
const { isDark, toggleTheme } = useTheme()

const open = ref(false)
const route = useRoute()
watch(() => route.fullPath, () => { open.value = false })

const isScrolled = ref(false)
const onScroll = () => {
  if (typeof window !== 'undefined') {
    isScrolled.value = window.scrollY > 0
  }
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('scroll', onScroll)
  }
})

const links = computed(() => [
  { to: localePath('solutions'), label: t('nav.solutions') },
  { to: localePath('features'), label: t('nav.features') },
  { to: localePath('pricing'), label: t('nav.pricing') },
  { to: localePath('calculadora-plazos'), label: t('nav.calculator') },
  { to: localePath('blog'), label: t('nav.blog') }
])
</script>

<template>
  <header class="site-header" :class="{ 'is-scrolled': isScrolled }">
    <div class="site-header-inner">
      <!-- Izquierda: Logo + Pipe + Tag de Producto + Enlaces (Estilo Microsoft 365) -->
      <div class="site-header-left">
        <NuxtLink :to="localePath('index')" class="site-header-brand" :aria-label="t('common.brand')">
          <LogoMark />
          <span class="header-pipe">|</span>
          <span class="header-product-tag">{{ t('nav.productTag') }}</span>
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
      </div>

      <!-- Derecha: Selector de Idioma + Tema + Botón Acción + Móvil -->
      <div class="site-header-tail">
        <button
          type="button"
          class="theme-toggle-btn"
          :aria-label="isDark ? (locale === 'es' ? 'Cambiar a modo claro' : 'Switch to light mode') : (locale === 'es' ? 'Cambiar a modo oscuro' : 'Switch to dark mode')"
          :title="isDark ? (locale === 'es' ? 'Modo claro' : 'Light mode') : (locale === 'es' ? 'Modo oscuro' : 'Dark mode')"
          @click="toggleTheme"
        >
          <svg v-if="isDark" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
          </svg>
          <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          </svg>
        </button>
        <LangSwitcher />
        <a :href="localePath('index') + '#descargar'" class="header-trial-btn">
          {{ t('nav.tryFree') }}
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
          <a :href="localePath('index') + '#descargar'" class="site-header-mobile-cta" @click="open = false">
            {{ t('nav.tryFree') }}
          </a>
          <div class="site-header-mobile-lang">
            <span class="mobile-lang-label">{{ locale === 'es' ? 'Tema' : 'Theme' }}</span>
            <button
              type="button"
              class="theme-toggle-btn"
              :aria-label="isDark ? (locale === 'es' ? 'Cambiar a modo claro' : 'Switch to light mode') : (locale === 'es' ? 'Cambiar a modo oscuro' : 'Switch to dark mode')"
              @click="toggleTheme"
            >
              <svg v-if="isDark" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
              </svg>
              <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
            </button>
          </div>
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
  background: var(--header-bg);
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  border-bottom: 1px solid transparent;
  transition: border-bottom-color 0.2s ease, background-color 0.2s ease;
}
.site-header.is-scrolled {
  border-bottom-color: var(--header-border);
}
.site-header-inner {
  max-width: 1440px;
  margin: 0 auto;
  height: 56px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}
.site-header-left {
  display: flex;
  align-items: center;
  gap: 28px;
  flex: 1;
}
.site-header-brand {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: var(--text);
}
.header-pipe {
  color: var(--border-dark);
  font-weight: 300;
  font-size: 16px;
  margin: 0 10px;
  user-select: none;
}
.header-product-tag {
  font-size: 14px;
  font-weight: 600;
  color: var(--text);
  letter-spacing: -0.01em;
  white-space: nowrap;
}
.site-header-nav {
  display: none;
  align-items: center;
  gap: 22px;
}
@media (min-width: 960px) {
  .site-header-nav { display: flex; }
}
.site-header-link {
  font-size: 13.5px;
  color: var(--text-muted);
  text-decoration: none;
  font-weight: 500;
  transition: opacity .15s ease, color .15s ease;
  letter-spacing: -0.01em;
  white-space: nowrap;
}
.site-header-link:hover { color: var(--text); }
.router-link-exact-active.site-header-link { font-weight: 600; color: var(--text); }

.site-header-tail {
  display: flex;
  align-items: center;
  gap: 10px;
}
.theme-toggle-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 9999px;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  color: var(--icon-color);
  cursor: pointer;
  transition: background-color 0.15s ease, border-color 0.15s ease, transform 0.15s ease;
}
.theme-toggle-btn:hover {
  border-color: var(--border-dark);
  transform: translateY(-1px);
}
.header-trial-btn {
  display: none;
  align-items: center;
  justify-content: center;
  padding: 7px 18px;
  background: var(--brand-black);
  color: var(--bg);
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  letter-spacing: -0.01em;
  transition: background 0.15s ease, transform 0.1s ease;
  white-space: nowrap;
}
.header-trial-btn:hover {
  background: var(--brand-black-hover);
  transform: translateY(-1px);
}
@media (min-width: 640px) {
  .header-trial-btn {
    display: inline-flex;
  }
}

.site-header-burger {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 6px;
  color: var(--icon-color);
}
.site-header-burger:hover { background: var(--bg-elevated); }
@media (min-width: 960px) {
  .site-header-burger { display: none; }
}

.site-header-mobile {
  border-top: 1px solid var(--border);
  background: var(--bg-subtle);
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
  font-size: 15.5px;
  color: var(--text);
  text-decoration: none;
  border-bottom: 1px solid var(--border);
}
.site-header-mobile-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 14px;
  padding: 11px 16px;
  background: var(--brand-black);
  color: var(--bg);
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
}

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
  color: var(--text-muted);
}

.fade-enter-active, .fade-leave-active { transition: opacity .15s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
