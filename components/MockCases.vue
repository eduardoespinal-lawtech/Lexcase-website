<script setup lang="ts">
/* Reflejo fiel del layout real:
   sidebar navy 108px | aside crema #F6F2EC con lista | panel detalle blanco.
   Color de selección activa = #1164A3 (Lexbell blue), no navy.
   Colores por tipo (TYPE_VIS de Clients.tsx): indigo/amber/emerald/rose/cyan/violet. */
const cases = [
  { id: 'JD-0142', title: 'Pérez vs. Inversiones del Caribe', client: 'Pérez Solano, María', type: 'Judicial',       iconBg: 'bg-indigo-500/15',  iconColor: 'text-indigo-600' },
  { id: 'MIG-0089', title: 'NVC Case — Rodríguez Familia',     client: 'Rodríguez García, Luis', type: 'Migración',     iconBg: 'bg-emerald-500/15', iconColor: 'text-emerald-600', active: true },
  { id: 'AL-0021',  title: 'Contrato Av. Anacaona 38',         client: 'Capital Real Estate SRL', type: 'Alquiler',     iconBg: 'bg-cyan-500/15',    iconColor: 'text-cyan-600' },
  { id: 'EMP-0014', title: 'Constitución Avyra Capital S.R.L.', client: 'Mejía De Aza, Eduardo',  type: 'Empresa',      iconBg: 'bg-rose-500/15',    iconColor: 'text-rose-600' },
  { id: 'ADM-0007', title: 'Recurso Pro Consumidor',           client: 'Vargas Lantigua, Karla', type: 'Administrativo', iconBg: 'bg-amber-500/15', iconColor: 'text-amber-600' },
  { id: 'CV-0033',  title: 'Compraventa Solar Cap Cana',       client: 'Distribuidora Esperanza', type: 'Compraventa',  iconBg: 'bg-violet-500/15',  iconColor: 'text-violet-600' }
]

const tabs = ['Todos', 'Judicial', 'Administrativo', 'Migración', 'Empresa', 'Alquiler']
</script>

<template>
  <div class="flex h-full bg-white">
    <AppSidebarMini active="cases" />

    <!-- Aside (lista lateral) — crema, como la app real -->
    <aside class="shrink-0 w-[280px] flex flex-col" style="background: #F6F2EC;">
      <div class="px-3 pt-3.5 pb-2">
        <h1 class="text-[15px] font-bold text-slate-900 mb-3">Expedientes (6)</h1>

        <div class="relative">
          <svg class="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-600" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="Buscar expedientes…"
            class="w-full pl-8 pr-3 py-1.5 bg-white border border-slate-300 rounded-md text-[12.5px] text-slate-800 placeholder-slate-400"
            readonly
          />
        </div>
      </div>

      <div class="px-3 pb-2 flex items-center gap-1 flex-wrap">
        <button
          v-for="t in tabs"
          :key="t"
          class="text-[10.5px] font-semibold px-2 py-0.5 rounded-full"
          :class="t === 'Todos' ? 'text-white' : 'bg-slate-100 text-slate-800'"
          :style="t === 'Todos' ? 'background:#1164A3;' : ''"
        >{{ t }}</button>
      </div>

      <ul class="flex-1 overflow-hidden pb-3 space-y-px">
        <li v-for="c in cases" :key="c.id">
          <div
            class="mx-3 flex items-start gap-2.5 px-2 py-2 rounded-md select-none"
            :class="c.active ? 'text-white' : 'text-slate-800'"
            :style="c.active ? 'background:#1164A3;' : ''"
          >
            <div
              class="w-9 h-9 rounded-md flex items-center justify-center shrink-0"
              :class="c.active ? 'bg-white/20' : c.iconBg"
            >
              <!-- ícono genérico maletín — ilustrativo -->
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" :stroke="c.active ? '#fff' : 'currentColor'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" :class="c.active ? '' : c.iconColor">
                <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                <rect x="2" y="6" width="20" height="14" rx="2" />
              </svg>
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-[13px] font-semibold leading-snug" :class="c.active ? 'text-white' : 'text-slate-900'">
                {{ c.title }}
              </p>
              <p class="text-[10.5px] leading-snug" :class="c.active ? 'text-white/75' : 'text-slate-700'">
                {{ c.client }}
              </p>
            </div>
          </div>
        </li>
      </ul>
    </aside>

    <!-- Panel detalle blanco -->
    <div class="flex-1 min-w-0 overflow-hidden bg-white p-5">
      <div class="flex items-start gap-3 mb-4">
        <div class="w-11 h-11 rounded-xl bg-emerald-500/15 flex items-center justify-center shrink-0">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-600">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-[10px] font-bold uppercase tracking-widest text-slate-500">MIG-2026-0089</p>
          <h2 class="text-[20px] font-extrabold text-slate-900 leading-tight">NVC Case — Rodríguez Familia</h2>
          <p class="text-[12px] text-slate-600 mt-0.5">Rodríguez García, Luis · Migración · Apertura 03 abr 2026</p>
        </div>
      </div>

      <div class="grid grid-cols-3 gap-2.5 mb-4">
        <div class="p-3 rounded-xl bg-white border border-slate-200">
          <p class="text-[9.5px] font-bold uppercase tracking-widest text-slate-500">Estado</p>
          <p class="text-[13px] font-semibold text-slate-900 mt-1">DS-260 enviado</p>
        </div>
        <div class="p-3 rounded-xl bg-white border border-slate-200">
          <p class="text-[9.5px] font-bold uppercase tracking-widest text-slate-500">A-Number</p>
          <p class="text-[13px] font-semibold text-slate-900 mt-1 font-mono">A-123 456 789</p>
        </div>
        <div class="p-3 rounded-xl bg-white border border-slate-200">
          <p class="text-[9.5px] font-bold uppercase tracking-widest text-slate-500">NVC Case</p>
          <p class="text-[13px] font-semibold text-slate-900 mt-1 font-mono">SDO2024567890</p>
        </div>
      </div>

      <div class="rounded-xl border border-slate-200 overflow-hidden">
        <div class="px-3.5 py-2.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <p class="text-[11.5px] font-bold uppercase tracking-wider text-slate-700">Próximas gestiones</p>
          <span class="text-[10px] text-slate-500">3 pendientes</span>
        </div>
        <ul class="divide-y divide-slate-100">
          <li class="px-3.5 py-2.5 flex items-center gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0"></span>
            <span class="text-[12.5px] text-slate-800 flex-1">Cita VAC Santo Domingo</span>
            <span class="text-[11px] text-slate-500">18 jul · 08:15</span>
          </li>
          <li class="px-3.5 py-2.5 flex items-center gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></span>
            <span class="text-[12.5px] text-slate-800 flex-1">Cita consular embajada</span>
            <span class="text-[11px] text-slate-500">12 ago · 09:00</span>
          </li>
          <li class="px-3.5 py-2.5 flex items-center gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0"></span>
            <span class="text-[12.5px] text-slate-800 flex-1">Subir affidavit of support</span>
            <span class="text-[11px] text-slate-500">Sin fecha</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
