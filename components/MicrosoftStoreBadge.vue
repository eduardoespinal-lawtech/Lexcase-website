<script setup lang="ts">
withDefaults(defineProps<{ href?: string; comingSoon?: boolean }>(), {
  href: 'https://apps.microsoft.com/',
  comingSoon: true
})

const { locale } = useI18n()

const badgeSrc = computed(() => {
  const loc = locale.value === 'es' ? 'es' : 'en-us'
  return `https://get.microsoft.com/images/${loc}%20dark.svg`
})

const alt = computed(() =>
  locale.value === 'es' ? 'Obtener en Microsoft Store' : 'Get it from Microsoft'
)
</script>

<template>
  <span class="store-wrap">
    <a
      :href="comingSoon ? undefined : href"
      class="store-button"
      :class="comingSoon ? 'store-button-disabled' : ''"
      rel="noopener"
      target="_blank"
      :aria-label="comingSoon ? `${alt} — ${locale === 'es' ? 'próximamente' : 'coming soon'}` : alt"
      :tabindex="comingSoon ? -1 : undefined"
    >
      <img :src="badgeSrc" :alt="alt" />
    </a>
    <span v-if="comingSoon" class="store-tag" aria-hidden="true">
      {{ locale === 'es' ? 'Próximamente' : 'Coming soon' }}
    </span>
  </span>
</template>

<style scoped>
/* Sin fondo de contenedor — el SVG oficial de Microsoft trae su propio
   botón. La etiqueta amarilla flota COMPLETAMENTE por encima del botón,
   sin tocar el logo (no choca con el logo de Microsoft a la izquierda). */
.store-wrap {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 52px;
  vertical-align: middle;
  overflow: visible;
}
.store-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 52px;
  background: transparent;
  transition: transform .2s ease;
}
.store-button:hover { transform: translateY(-1px); }
.store-button img {
  display: block;
  height: 52px;
  width: auto;
}
.store-button-disabled {
  pointer-events: none;
  cursor: default;
}

/* Etiqueta amarilla "Próximamente": completamente sobre el botón, separada
   por 6px. bottom: 100% ancla la BASE de la etiqueta al borde superior del
   wrap; margin-bottom añade el aire entre etiqueta y botón.
   No invade el botón ni choca con el logo de Microsoft. */
.store-tag {
  position: absolute;
  bottom: calc(100% + 6px);
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  background: #FFD60A;
  color: #1d1d1f;
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: 999px;
  white-space: nowrap;
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.18),
    0 1px 2px rgba(0, 0, 0, 0.1);
  pointer-events: none;
}
</style>
