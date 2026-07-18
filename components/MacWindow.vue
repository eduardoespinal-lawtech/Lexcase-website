<script setup lang="ts">
withDefaults(defineProps<{ title?: string; tone?: 'light' | 'dark' }>(), {
  title: 'Lexbell',
  tone: 'light'
})
</script>

<template>
  <div
    class="relative overflow-hidden rounded-[18px] border shadow-glow"
    :class="tone === 'dark' ? 'bg-[#0E1D4A] border-white/10' : 'bg-white border-navy-800/10'"
  >
    <!-- Titlebar (macOS) -->
    <div
      class="h-9 px-3 flex items-center gap-2 border-b"
      :class="tone === 'dark'
        ? 'bg-gradient-to-b from-[#16285A] to-[#0E1D4A] border-white/5'
        : 'bg-gradient-to-b from-slate-100 to-slate-50 border-navy-800/10'"
    >
      <span class="w-3 h-3 rounded-full bg-[#FF5F57] shadow-inner"></span>
      <span class="w-3 h-3 rounded-full bg-[#FEBC2E] shadow-inner"></span>
      <span class="w-3 h-3 rounded-full bg-[#28C840] shadow-inner"></span>
      <span
        class="ml-3 text-[11px] font-medium tracking-tight"
        :class="tone === 'dark' ? 'text-navy-100/70' : 'text-navy-800/60'"
      >{{ title }}</span>
    </div>

    <!-- Slot for window content (full-bleed) -->
    <div class="relative">
      <slot />
    </div>
  </div>
</template>
