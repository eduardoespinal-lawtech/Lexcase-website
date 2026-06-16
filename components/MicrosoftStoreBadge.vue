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
/* Wrapper has the same 180x52 footprint as the Apple badge so flex parents
   align both buttons by their bounding boxes — same top, same bottom, same
   center, every time. The yellow tag is absolutely positioned over the
   button corner without affecting the wrap's bounding box. */
.store-wrap {
  position: relative;
  display: inline-block;
  width: 180px;
  height: 52px;
  vertical-align: middle;
  /* Allow the tag to overflow above without clipping. */
  overflow: visible;
}
.store-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background: #000;
  overflow: hidden;
  transition: transform .2s ease;
}
.store-button:hover { transform: translateY(-1px); }
.store-button img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.store-button-disabled {
  pointer-events: none;
  cursor: default;
}

/* Yellow "Próximamente" tag, centered horizontally over the top edge of
   the Microsoft button. Sits ON TOP of the icon area without covering the
   Microsoft logo (the logo is on the left, the tag stays centered above). */
.store-tag {
  position: absolute;
  top: -11px;
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
