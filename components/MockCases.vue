<script setup lang="ts">
const cases = [
  { id: 'JD-2026-0142', title: 'Pérez vs. Inversiones del Caribe', type: 'Judicial', tone: 'bg-rose-100 text-rose-700', client: 'Pérez Solano, María', stage: 'Audiencia preliminar · 22 jun', value: 'RD$ 1,250,000' },
  { id: 'MIG-2026-0089', title: 'NVC Case — Rodríguez Familia', type: 'Migración', tone: 'bg-violet-100 text-violet-700', client: 'Rodríguez García, Luis', stage: 'DS-260 enviado · espera VAC', value: 'USD 6,500' },
  { id: 'AL-2026-0021', title: 'Contrato Avenida Anacaona 38', type: 'Alquiler', tone: 'bg-amber-100 text-amber-700', client: 'Capital Real Estate SRL', stage: 'Aumento anual sept. 2026', value: 'RD$ 95,000 / mes' },
  { id: 'EMP-2026-0014', title: 'Constitución Avyra Capital, S.R.L.', type: 'Empresa', tone: 'bg-emerald-100 text-emerald-700', client: 'Mejía De Aza, Eduardo', stage: 'Registro Mercantil radicado', value: 'RD$ 285,000' },
  { id: 'ADM-2026-0007', title: 'Recurso ante Pro Consumidor', type: 'Administrativo', tone: 'bg-sky-100 text-sky-700', client: 'Vargas Lantigua, Karla', stage: 'Plazo respuesta · 12 días', value: 'RD$ 180,000' },
  { id: 'CV-2026-0033', title: 'Compraventa Solar Cap Cana', type: 'Compraventa', tone: 'bg-teal-100 text-teal-700', client: 'Distribuidora Esperanza', stage: 'Inscripción Reg. Títulos', value: 'USD 320,000' }
]
</script>

<template>
  <div class="flex h-full">
    <AppSidebarMini active="cases" />
    <div class="flex-1 flex flex-col bg-slate-50">
      <!-- Topbar -->
      <div class="h-12 px-4 flex items-center gap-3 border-b border-navy-800/5 bg-gradient-to-b from-[#16285A] to-[#0E1D4A] text-navy-100">
        <div class="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-medium">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <span class="text-navy-200">Buscar expedientes, clientes, notas…</span>
          <kbd class="ml-2 text-[10px] px-1.5 py-0.5 rounded bg-white/10 border border-white/10">⌘E</kbd>
        </div>
        <div class="flex-1"></div>
        <button class="text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 flex items-center gap-1.5">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          Nuevo
        </button>
      </div>

      <!-- Content -->
      <div class="p-6 flex-1 overflow-hidden">
        <div class="flex items-end justify-between mb-5">
          <div>
            <h1 class="text-xl font-semibold text-navy-800 tracking-tight">Expedientes</h1>
            <p class="text-xs text-slate-500 mt-0.5">Casos legales activos — 6 visibles</p>
          </div>
          <div class="flex gap-1.5 text-[11px]">
            <span class="px-2.5 py-1 rounded-full bg-navy-800 text-white">Todos</span>
            <span class="px-2.5 py-1 rounded-full bg-white border border-navy-800/10 text-navy-800/70">Judiciales</span>
            <span class="px-2.5 py-1 rounded-full bg-white border border-navy-800/10 text-navy-800/70">Migración</span>
            <span class="px-2.5 py-1 rounded-full bg-white border border-navy-800/10 text-navy-800/70">Alquileres</span>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-3">
          <div
            v-for="c in cases"
            :key="c.id"
            class="bg-white rounded-xl border border-navy-800/8 p-3.5 hover:shadow-md transition-shadow"
          >
            <div class="flex items-center justify-between mb-2">
              <span class="text-[10px] font-mono text-slate-500">{{ c.id }}</span>
              <span class="text-[10px] font-semibold px-2 py-0.5 rounded-full" :class="c.tone">{{ c.type }}</span>
            </div>
            <h3 class="text-[13px] font-semibold text-navy-800 leading-tight mb-1">{{ c.title }}</h3>
            <p class="text-[11px] text-slate-500 truncate mb-2">{{ c.client }}</p>
            <div class="flex items-center justify-between pt-2 border-t border-navy-800/5">
              <span class="text-[10.5px] text-slate-600">{{ c.stage }}</span>
              <span class="text-[10.5px] font-semibold text-navy-800">{{ c.value }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
