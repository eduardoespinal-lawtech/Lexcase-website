<script setup lang="ts">
withDefaults(defineProps<{ size?: number; light?: boolean }>(), {
  size: 22,
  light: false
})
</script>

<template>
  <span class="inline-flex items-center gap-2.5 select-none">
    <!-- Badge navy con el maletín (mismo mark que favicon/app icon) -->
    <span
      class="lexbell-badge"
      :style="{ width: `${Math.round(size * 1.5)}px`, height: `${Math.round(size * 1.5)}px` }"
    >
      <svg
        :width="size"
        :height="size"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffffff"
        stroke-width="1.9"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M16 20V7a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v13" />
        <rect x="2.5" y="8" width="19" height="12" rx="2.4" />
        <line x1="2.5" y1="13.6" x2="21.5" y2="13.6" />
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
  background: linear-gradient(155deg, #1F347C 0%, #0E1D4A 100%);
  box-shadow:
    0 1px 2px rgba(14, 29, 74, 0.35),
    inset 0 1px 0 rgba(255, 255, 255, 0.12);
}
</style>
