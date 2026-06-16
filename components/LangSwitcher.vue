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
    <template v-for="(l, i) in available" :key="l.code">
      <span v-if="i > 0" class="lang-sep" aria-hidden="true">·</span>
      <NuxtLink
        :to="switchLocalePath(l.code)"
        class="lang-link"
        :class="locale === l.code ? 'is-active' : ''"
        :aria-current="locale === l.code ? 'true' : undefined"
      >
        {{ l.code.toUpperCase() }}
      </NuxtLink>
    </template>
  </div>
</template>

<style scoped>
/* Mismo tamaño y color que los links del menú. Sin pill, sin fondo, sin
   borde — solo texto. El idioma activo se distingue por opacidad y peso,
   nada más. */
.lang-switch {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  line-height: 1;
  letter-spacing: -0.005em;
}
.lang-link {
  color: #1d1d1f;
  opacity: 0.55;
  text-decoration: none;
  transition: opacity .15s ease;
}
.lang-link:hover { opacity: 1; }
.is-active {
  opacity: 1;
  font-weight: 500;
}
.lang-sep {
  color: #1d1d1f;
  opacity: 0.25;
  user-select: none;
}
</style>
