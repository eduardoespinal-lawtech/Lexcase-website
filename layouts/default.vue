<script setup lang="ts">
const { locale, t } = useI18n()

useHead(() => ({
  htmlAttrs: { lang: locale.value },
  meta: [
    { name: 'description', content: t('seo.defaultDescription') }
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
