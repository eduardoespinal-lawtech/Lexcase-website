<script setup lang="ts">
const { locale, t } = useI18n()
const route = useRoute()
const switchLocalePath = useSwitchLocalePath()

const currentUrl = computed(() => {
  const p = route.path === '/' ? '' : route.path.replace(/\/$/, '')
  return `https://lex-bell.com${p}`
})

const esUrl = computed(() => {
  const p = switchLocalePath('es') || '/'
  return `https://lex-bell.com${p === '/' ? '' : p}`
})

const enUrl = computed(() => {
  const p = switchLocalePath('en') || '/en'
  return `https://lex-bell.com${p === '/' ? '' : p}`
})

useHead(() => ({
  htmlAttrs: { lang: locale.value },
  meta: [
    { name: 'description', content: t('seo.defaultDescription') },
    { property: 'og:url', content: currentUrl.value },
    { property: 'og:site_name', content: 'Lexbell' },
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
  </div>
</template>
