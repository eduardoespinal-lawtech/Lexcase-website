<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

const open = ref(false)
const route = useRoute()
watch(() => route.fullPath, () => { open.value = false })

const links = computed(() => [
  { to: localePath('features'), label: t('nav.features') },
  { to: localePath('support'), label: t('nav.support') },
  { to: localePath('faq'), label: t('nav.faq') },
  { to: localePath('contact'), label: t('nav.contact') }
])
</script>

<template>
  <header class="sticky top-0 z-40 backdrop-blur-md bg-white/80 border-b border-navy-800/5">
    <div class="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
      <NuxtLink :to="localePath('index')" class="flex items-center" :aria-label="t('common.brand')">
        <LogoMark :size="30" />
      </NuxtLink>

      <nav class="hidden md:flex items-center gap-1">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="px-3 py-2 rounded-full text-sm font-medium text-navy-800/80 hover:text-navy-800 hover:bg-navy-50 transition-colors"
          :exact-active-class="'text-navy-800 bg-navy-50'"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <div class="flex items-center gap-3">
        <LangSwitcher class="text-navy-800" />
        <button
          class="md:hidden p-2 rounded-lg hover:bg-navy-50 text-navy-800"
          :aria-label="open ? t('nav.close') : t('nav.menu')"
          @click="open = !open"
        >
          <svg v-if="!open" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
          <svg v-else width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </div>

    <Transition name="fade">
      <nav v-if="open" class="md:hidden border-t border-navy-800/5 bg-white">
        <div class="max-w-7xl mx-auto px-5 py-3 flex flex-col gap-1">
          <NuxtLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="px-3 py-2 rounded-lg text-sm font-medium text-navy-800/80 hover:text-navy-800 hover:bg-navy-50"
          >
            {{ link.label }}
          </NuxtLink>
        </div>
      </nav>
    </Transition>
  </header>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity .18s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
