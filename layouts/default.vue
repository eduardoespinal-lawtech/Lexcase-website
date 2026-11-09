<script setup lang="ts">
const { locale, t } = useI18n()
const route = useRoute()
const switchLocalePath = useSwitchLocalePath()
const { init } = useCookieConsent()

onMounted(() => {
  init()
})

const normalizeUrl = (path: string) => {
  if (!path || path === '/') return 'https://lex-bell.com/'
  const clean = path.replace(/\/+$/, '')
  return `https://lex-bell.com${clean}/`
}

const currentUrl = computed(() => normalizeUrl(route.path))
const esUrl = computed(() => normalizeUrl(switchLocalePath('es') || '/'))
const enUrl = computed(() => normalizeUrl(switchLocalePath('en') || '/en/'))

useHead(() => ({
  htmlAttrs: { lang: locale.value },
  meta: [
    { name: 'description', content: t('seo.defaultDescription') },
    { property: 'og:url', content: currentUrl.value },
    { property: 'og:site_name', content: 'Lexbell' },
    { property: 'og:locale', content: locale.value === 'es' ? 'es_DO' : 'en_US' },
    { property: 'og:locale:alternate', content: locale.value === 'es' ? 'en_US' : 'es_DO' },
    { property: 'og:image', content: 'https://lex-bell.com/og-image.png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:type', content: 'image/png' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:image', content: 'https://lex-bell.com/og-image.png' }
  ],
  link: [
    { rel: 'canonical', href: currentUrl.value },
    { rel: 'alternate', hreflang: 'es', href: esUrl.value },
    { rel: 'alternate', hreflang: 'en', href: enUrl.value },
    { rel: 'alternate', hreflang: 'x-default', href: esUrl.value }
  ]
}))
</script>

<template>
  <div class="min-h-screen flex flex-col bg-white">
    <SiteHeader />
    <main class="flex-1">
      <slot />
    </main>
    <SiteFooter />

    <!-- Cumplimiento de Normativa de la UE (RGPD / ePrivacy) -->
    <CookieBanner />
    <CookieModal />
  </div>
</template>
