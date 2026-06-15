<script setup lang="ts">
defineProps<{ label: string; active?: boolean }>()
</script>

<template>
  <div
    class="relative w-full flex flex-col items-center justify-center gap-1 py-2 rounded-lg text-[10px] font-medium tracking-tight"
    :class="active ? 'text-white' : 'text-navy-100/70'"
  >
    <div
      v-if="active"
      class="absolute inset-0 rounded-lg"
      style="background: linear-gradient(180deg, #2A4598 0%, #1B3079 100%); box-shadow: inset 0 1px 0 rgba(255,255,255,0.22), 0 1px 2px rgba(0,0,0,0.3);"
    ></div>
    <div class="relative z-10">
      <slot />
    </div>
    <span class="relative z-10 truncate max-w-full px-1">{{ label }}</span>
  </div>
</template>
