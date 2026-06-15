<script setup lang="ts">
withDefaults(defineProps<{ size?: number; mono?: boolean }>(), {
  size: 32,
  mono: false
})
</script>

<template>
  <span class="inline-flex items-center gap-2 select-none">
    <svg
      :width="size"
      :height="size"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      :aria-label="'LexCase'"
      role="img"
    >
      <rect width="64" height="64" rx="14" :fill="mono ? '#0E1D4A' : '#0E1D4A'" />
      <g
        transform="translate(14 14)"
        fill="none"
        stroke="#FFFFFF"
        stroke-width="2.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M28 34V8a3 3 0 0 0-3-3H14a3 3 0 0 0-3 3v26" transform="translate(-3 0)" />
        <rect width="34" height="22" x="1" y="11" rx="3" />
      </g>
    </svg>
    <span
      class="font-semibold tracking-tight text-[17px]"
      :class="mono ? 'text-white' : 'text-navy-800'"
    >LexCase</span>
  </span>
</template>
