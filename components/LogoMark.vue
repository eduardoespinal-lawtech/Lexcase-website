<script setup lang="ts">
withDefaults(defineProps<{ light?: boolean }>(), {
  light: false
})
</script>

<template>
  <span
    class="lexbell-wordmark select-none"
    :class="light ? 'text-white' : 'text-[var(--text)]'"
  >
    Lexbell
  </span>
</template>

<style scoped>
.lexbell-wordmark {
  display: inline-flex;
  align-items: center;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1;
}
</style>
