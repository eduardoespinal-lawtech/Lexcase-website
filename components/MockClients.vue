<script setup lang="ts">
const clients = [
  { initials: 'MP', name: 'Pérez Solano, María',  id: '001-1234567-8', phone: '+1 809 555 0142', cases: 3, tone: 'bg-rose-500' },
  { initials: 'LR', name: 'Rodríguez García, Luis', id: '402-2345678-9', phone: '+1 829 555 0089', cases: 2, tone: 'bg-violet-500' },
  { initials: 'KV', name: 'Vargas Lantigua, Karla', id: '001-3456789-0', phone: '+1 809 555 0007', cases: 1, tone: 'bg-sky-500' },
  { initials: 'EM', name: 'Mejía De Aza, Eduardo',  id: '001-4567890-1', phone: '+1 849 555 0014', cases: 4, tone: 'bg-emerald-500' },
  { initials: 'CR', name: 'Capital Real Estate SRL', id: 'RNC 130-12345-6', phone: '+1 809 555 0021', cases: 5, tone: 'bg-amber-500' },
  { initials: 'DE', name: 'Distribuidora Esperanza', id: 'RNC 131-67890-2', phone: '+1 809 555 0033', cases: 2, tone: 'bg-teal-500' }
]
</script>

<template>
  <div class="flex h-full">
    <AppSidebarMini active="clients" />
    <div class="flex-1 flex flex-col bg-slate-50">
      <!-- Topbar -->
      <div class="h-12 px-4 flex items-center gap-3 border-b border-navy-800/5 bg-gradient-to-b from-[#16285A] to-[#0E1D4A] text-navy-100">
        <div class="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-medium">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <span class="text-navy-200">Buscar contactos…</span>
        </div>
        <div class="flex-1"></div>
        <button class="text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 flex items-center gap-1.5">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          Nuevo cliente
        </button>
      </div>

      <div class="p-5 flex-1 overflow-hidden">
        <div class="flex items-center justify-between mb-4">
          <div>
            <h1 class="text-xl font-semibold text-navy-800 tracking-tight">Clientes</h1>
            <p class="text-xs text-slate-500 mt-0.5">Cartera completa — 6 visibles · 2 duplicados detectados</p>
          </div>
          <div class="flex gap-1.5 text-[10.5px]">
            <span class="px-2.5 py-1 rounded-full bg-navy-800 text-white">Todos</span>
            <span class="px-2.5 py-1 rounded-full bg-white border border-navy-800/10 text-navy-800/70">Con expedientes</span>
            <span class="px-2.5 py-1 rounded-full bg-white border border-navy-800/10 text-navy-800/70">Sin teléfono</span>
            <span class="px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700">Duplicados</span>
          </div>
        </div>

        <div class="bg-white rounded-xl border border-navy-800/8 overflow-hidden">
          <div
            v-for="c in clients"
            :key="c.id"
            class="grid grid-cols-[40px_1fr_140px_140px_70px] items-center px-3 py-2.5 gap-3 border-b border-navy-800/5 last:border-b-0 hover:bg-navy-50/40"
          >
            <div :class="['w-9 h-9 rounded-full text-white text-[12px] font-semibold flex items-center justify-center', c.tone]">
              {{ c.initials }}
            </div>
            <div class="min-w-0">
              <p class="text-[12.5px] font-semibold text-navy-800 truncate">{{ c.name }}</p>
              <p class="text-[10.5px] text-slate-500 truncate">{{ c.id }}</p>
            </div>
            <span class="text-[11px] text-slate-600 tabular-nums">{{ c.phone }}</span>
            <span class="text-[10.5px] text-slate-500 truncate">{{ c.cases }} expediente{{ c.cases === 1 ? '' : 's' }} activo{{ c.cases === 1 ? '' : 's' }}</span>
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 font-semibold justify-self-end">Activo</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
