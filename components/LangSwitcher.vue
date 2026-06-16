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
  <div class="lang-switch" role="group" aria-label="Language">
    <NuxtLink
      v-for="l in available"
      :key="l.code"
      :to="switchLocalePath(l.code)"
      class="lang-link"
      :class="locale === l.code ? 'lang-link-active' : ''"
      :aria-current="locale === l.code ? 'true' : undefined"
    >
      {{ l.code.toUpperCase() }}
    </NuxtLink>
  </div>
</template>

<style scoped>
.lang-switch {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  font-size: 12px;
}
.lang-link {
  padding: 4px 8px;
  border-radius: 999px;
  color: #1d1d1f;
  opacity: 0.7;
  text-decoration: none;
  letter-spacing: 0.02em;
}
.lang-link:hover { opacity: 1; }
.lang-link-active {
  background: #1d1d1f;
  color: #fff;
  opacity: 1;
}
</style>
