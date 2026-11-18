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
  <header
    class="site-header"
    :class="{ 'is-scrolled': isScrolled }"
  >
    <div class="site-header-inner">
      <!-- Columna 1: Logo limpio -->
      <div class="site-header-left">
        <NuxtLink :to="localePath('index')" class="site-header-brand" :aria-label="t('common.brand')">
          <LogoMark />
        </NuxtLink>
      </div>

      <!-- Columna 2: Menú Central estilo Manus (14px font-medium) -->
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

      <!-- Columna 3: Controles y CTA Píldora -->
      <div class="site-header-tail">
        <button
          type="button"
          class="theme-toggle-btn"
          :aria-label="isDark ? (locale === 'es' ? 'Cambiar a modo claro' : 'Switch to light mode') : (locale === 'es' ? 'Cambiar a modo oscuro' : 'Switch to dark mode')"
          :title="isDark ? (locale === 'es' ? 'Modo claro' : 'Light mode') : (locale === 'es' ? 'Modo oscuro' : 'Dark mode')"
          @click="toggleTheme"
        >
          <svg v-if="isDark" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
          <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </button>

        <LangSwitcher />

        <a :href="localePath('index') + '#descargar'" class="manus-header-cta">
          {{ t('nav.tryFree') }}
        </a>

        <!-- Botón Móvil -->
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

    <!-- Menú Desplegable Móvil -->
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
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
              <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
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
/* === HEADER EXACTO ESTILO MANUS (h-[56px], max-w-[1080px]) === */
.site-header {
  position: sticky;
  top: 0;
  z-index: 40;
  width: 100%;
  height: 56px;
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
  max-width: 1080px;
  margin: 0 auto;
  height: 100%;
  padding: 0 24px;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
}

@media (min-width: 1024px) {
  .site-header-inner {
    grid-template-columns: 1fr auto 1fr;
  }
}

.site-header-left {
  display: flex;
  align-items: center;
}

.site-header-brand {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: var(--text);
}

/* Enlaces Centrados estilo Manus */
.site-header-nav {
  display: none;
  align-items: center;
  justify-content: center;
  gap: 4px;
}

@media (min-width: 1024px) {
  .site-header-nav {
    display: flex;
  }
}

.site-header-link {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-muted);
  text-decoration: none;
  padding: 6px 12px;
  border-radius: 8px;
  transition: color 0.15s ease, background-color 0.15s ease;
  white-space: nowrap;
}

.site-header-link:hover {
  color: var(--text);
  background: rgba(0, 0, 0, 0.04);
}

.dark .site-header-link:hover {
  background: rgba(255, 255, 255, 0.06);
}

.router-link-exact-active.site-header-link {
  font-weight: 600;
  color: var(--text);
}

/* Controles Derecha */
.site-header-tail {
  display: flex;
  align-items: center;
  justify-content: flex-end;
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

/* Botón CTA exacto de Manus: Píldora h-[32px] rounded-full */
.manus-header-cta {
  display: none;
  align-items: center;
  justify-content: center;
  height: 32px;
  min-width: 64px;
  padding: 0 14px;
  border-radius: 9999px;
  background: #141414;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  text-decoration: none;
  white-space: nowrap;
  transition: opacity 0.15s ease, transform 0.1s ease;
}

.dark .manus-header-cta {
  background: #ffffff;
  color: #000000;
}

.manus-header-cta:hover {
  opacity: 0.9;
  transform: translateY(-0.5px);
}

.manus-header-cta:active {
  opacity: 0.8;
  transform: scale(0.98);
}

@media (min-width: 640px) {
  .manus-header-cta {
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

.site-header-burger:hover {
  background: var(--bg-elevated);
}

@media (min-width: 1024px) {
  .site-header-burger {
    display: none;
  }
}

/* Móvil */
.site-header-mobile {
  border-top: 1px solid var(--border);
  background: var(--bg-subtle);
}

.site-header-mobile-inner {
  max-width: 1080px;
  margin: 0 auto;
  padding: 12px 24px 20px;
  display: flex;
  flex-direction: column;
}

.site-header-mobile-link {
  padding: 12px 0;
  font-size: 15px;
  font-weight: 500;
  color: var(--text);
  text-decoration: none;
  border-bottom: 1px solid var(--border);
}

.site-header-mobile-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 14px;
  height: 40px;
  background: #141414;
  color: #ffffff;
  border-radius: 9999px;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
}

.dark .site-header-mobile-cta {
  background: #ffffff;
  color: #000000;
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
