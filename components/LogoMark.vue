<script setup lang="ts">
withDefaults(defineProps<{ size?: number; light?: boolean }>(), {
  size: 22,
  light: false
})
</script>

<template>
  <span class="inline-flex items-center gap-2.5 select-none">
    <!-- Badge ciruela con la campana — mismo mark que el icono real de la app -->
    <span
      class="lexbell-badge"
      :style="{ width: `${Math.round(size * 1.5)}px`, height: `${Math.round(size * 1.5)}px` }"
    >
      <svg
        :width="size"
        :height="size"
        viewBox="0 0 24 24"
        fill="#ffffff"
        stroke="#ffffff"
        stroke-width="0.4"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M6 8a6 6 0 0 1 12 0C18 15 18.92 15.61 20 16.33Q21 17 19.8 17H4.2Q3 17 4 16.33C5.08 15.61 6 15 6 8" />
        <path d="M10.3 19a1.94 1.94 0 0 0 3.4 0" />
      </svg>
    </span>
    <span
      class="font-semibold tracking-tight text-[17px] leading-none"
      :class="light ? 'text-white' : 'text-ink'"
    >Lexbell</span>
  </span>
</template>

<style scoped>
.lexbell-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 27%;
  background: linear-gradient(155deg, #B86AAC 0%, #AC56A0 50%, #974A8B 100%);
  box-shadow:
    0 1px 2px rgba(94, 41, 87, 0.35),
    inset 0 1px 0 rgba(255, 255, 255, 0.25);
}
</style>
