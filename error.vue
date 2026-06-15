<script setup lang="ts">
const props = defineProps<{ error: { statusCode: number; message: string } }>()

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-white">
    <div class="text-center px-6">
      <p class="text-sm uppercase tracking-widest text-navy-500 font-semibold">LexCase</p>
      <h1 class="mt-3 text-6xl font-semibold text-navy-800">{{ error.statusCode }}</h1>
      <p class="mt-3 text-slate-600">{{ error.message || 'Página no encontrada' }}</p>
      <button class="btn-primary mt-8" @click="handleError">Volver al inicio</button>
    </div>
  </div>
</template>
