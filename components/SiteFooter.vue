<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

const year = new Date().getFullYear()

const navLinks = computed(() => [
  { to: localePath('index'), label: t('nav.home') },
  { to: localePath('features'), label: t('nav.features') },
  { to: localePath('support'), label: t('nav.support') },
  { to: localePath('faq'), label: t('nav.faq') },
  { to: localePath('contact'), label: t('nav.contact') }
])

const legalLinks = computed(() => [
  { to: localePath('privacy'), label: t('nav.privacy') },
  { to: localePath('terms'), label: t('nav.terms') }
])
</script>

<template>
  <footer class="bg-navy-800 text-navy-100">
    <div class="max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-10">
      <div class="grid gap-12 md:grid-cols-4">
        <div class="md:col-span-2">
          <LogoMark :size="34" :mono="true" />
          <p class="mt-4 max-w-md text-sm leading-relaxed text-navy-200">
            {{ t('footer.tagline') }}
          </p>
          <div class="mt-6 flex flex-wrap gap-2 text-xs">
            <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-300"></span>
              {{ t('footer.availMac') }}
            </span>
            <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
              <span class="w-1.5 h-1.5 rounded-full bg-amber-300"></span>
              {{ t('footer.availWin') }}
            </span>
          </div>
        </div>

        <div>
          <h4 class="text-xs uppercase tracking-widest text-navy-200 font-semibold mb-4">{{ t('footer.product') }}</h4>
          <ul class="space-y-2 text-sm">
            <li v-for="l in navLinks" :key="l.to">
              <NuxtLink :to="l.to" class="hover:text-white transition-colors">{{ l.label }}</NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-xs uppercase tracking-widest text-navy-200 font-semibold mb-4">{{ t('footer.legal') }}</h4>
          <ul class="space-y-2 text-sm">
            <li v-for="l in legalLinks" :key="l.to">
              <NuxtLink :to="l.to" class="hover:text-white transition-colors">{{ l.label }}</NuxtLink>
            </li>
            <li>
              <a href="mailto:eduardoespinaldeaza@gmail.com" class="hover:text-white transition-colors">
                eduardoespinaldeaza@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-navy-200">
        <p>© {{ year }} ICLVS Legal Intelligence LLC. {{ t('footer.rights') }}</p>
        <p>lexcase.com.do</p>
      </div>
    </div>
  </footer>
</template>
