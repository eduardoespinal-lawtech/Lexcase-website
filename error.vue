<script setup lang="ts">
const props = defineProps<{ error: { statusCode: number; message: string } }>()
const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-white">
    <div class="text-center px-6">
      <p class="text-[12px] uppercase tracking-widest text-smoke font-semibold">Lexcase</p>
      <h1 class="mt-3 text-[88px] leading-none font-semibold tracking-tight text-ink">{{ error.statusCode }}</h1>
      <p class="mt-4 text-smoke text-[19px]">{{ error.message || 'Página no encontrada' }}</p>
      <button class="btn-pill btn-pill-primary mt-8" @click="handleError">Volver al inicio</button>
    </div>
  </div>
</template>
