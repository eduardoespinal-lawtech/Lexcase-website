<script setup lang="ts">
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const available = computed(() =>
  (locales.value as { code: string; name: string }[]).map((l) => ({
    code: l.code,
    name: l.name
  }))
)
</script>

<template>
  <div class="inline-flex items-center rounded-full border border-current/10 bg-white/10 backdrop-blur-sm p-0.5 text-sm">
    <NuxtLink
      v-for="l in available"
      :key="l.code"
      :to="switchLocalePath(l.code)"
      class="px-3 py-1 rounded-full font-medium transition-colors"
      :class="locale === l.code
        ? 'bg-navy-800 text-white'
        : 'text-current/70 hover:text-current'"
      :aria-current="locale === l.code ? 'true' : undefined"
    >
      {{ l.code.toUpperCase() }}
    </NuxtLink>
  </div>
</template>
