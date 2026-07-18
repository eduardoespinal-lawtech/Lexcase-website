<script setup lang="ts">
/* Finanzas: una sola columna sin aside (como en la app real). Header con
   tile emerald + título + meta-row con selector de moneda; strip de 4 KPIs
   (Cobrado / Gastos / Por cobrar / Ganancia neta) usando el mismo molde
   KpiPill que la app; tabla de honorarios por expediente. */
const kpis = [
  { label: 'Cobrado',       value: 'RD$ 4,820,000', iconBg: 'bg-emerald-500/15', iconColor: 'text-emerald-600', dir: 'up'   },
  { label: 'Gastos',        value: 'RD$ 142,000',   iconBg: 'bg-rose-500/15',    iconColor: 'text-rose-600',    dir: 'down' },
  { label: 'Por cobrar',    value: 'RD$ 1,635,000', iconBg: 'bg-amber-500/15',   iconColor: 'text-amber-600',   dir: 'trend' },
  { label: 'Ganancia neta', value: 'RD$ 4,678,000', iconBg: 'bg-emerald-500/15', iconColor: 'text-emerald-600', dir: 'wallet' }
]

const rows = [
  { id: 'JD-2026-0142',  name: 'Pérez vs. Inversiones del Caribe',  type: 'Judicial',       iconBg: 'bg-indigo-500/15',  iconColor: 'text-indigo-600',  fee: 'RD$ 1,250,000', paid: 'RD$ 600,000',   status: 'Por cobrar', tone: 'bg-amber-100 text-amber-700' },
  { id: 'MIG-2026-0089', name: 'NVC Case — Rodríguez Familia',      type: 'Migración',      iconBg: 'bg-emerald-500/15', iconColor: 'text-emerald-600', fee: 'USD 6,500',     paid: 'USD 3,250',     status: 'Por cobrar', tone: 'bg-amber-100 text-amber-700' },
  { id: 'EMP-2026-0014', name: 'Constitución Avyra Capital S.R.L.', type: 'Empresa',        iconBg: 'bg-rose-500/15',    iconColor: 'text-rose-600',    fee: 'RD$ 285,000',   paid: 'RD$ 285,000',   status: 'Pagado',     tone: 'bg-emerald-100 text-emerald-700' },
  { id: 'AL-2026-0021',  name: 'Contrato Av. Anacaona 38',          type: 'Alquiler',       iconBg: 'bg-cyan-500/15',    iconColor: 'text-cyan-600',    fee: 'RD$ 95,000',    paid: 'RD$ 95,000',    status: 'Pagado',     tone: 'bg-emerald-100 text-emerald-700' },
  { id: 'ADM-2026-0007', name: 'Recurso Pro Consumidor',            type: 'Administrativo', iconBg: 'bg-amber-500/15',   iconColor: 'text-amber-600',   fee: 'RD$ 180,000',   paid: 'RD$ 90,000',    status: 'Por cobrar', tone: 'bg-amber-100 text-amber-700' },
  { id: 'CV-2026-0033',  name: 'Compraventa Solar Cap Cana',        type: 'Compraventa',    iconBg: 'bg-violet-500/15',  iconColor: 'text-violet-600',  fee: 'USD 320,000',   paid: 'USD 200,000',   status: 'Por cobrar', tone: 'bg-amber-100 text-amber-700' }
]
</script>

<template>
  <div class="flex h-full bg-white">
    <AppSidebarMini active="finances" />

    <div class="flex-1 min-w-0 overflow-y-auto">
      <div class="px-5 py-5 space-y-4">
        <!-- Header con tile + título + selector de moneda -->
        <header class="flex items-start gap-4">
          <div class="w-12 h-12 rounded-xl bg-emerald-500/15 flex items-center justify-center shrink-0">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-600">
              <rect x="2" y="6" width="20" height="14" rx="2" />
              <circle cx="12" cy="13" r="2.5" />
              <path d="M6 6V4h12v2" />
            </svg>
          </div>
          <div class="flex-1 min-w-0">
            <h1 class="text-[22px] font-extrabold text-slate-900 leading-tight">Finanzas</h1>
            <div class="flex flex-wrap items-center gap-x-2.5 gap-y-1 mt-1 text-[11.5px] font-medium text-slate-600">
              <span>6 expedientes activos</span>
              <span class="text-slate-300">·</span>
              <span>Mostrando en <span class="text-emerald-600 font-semibold">Peso Dominicano</span></span>
            </div>
          </div>
          <div class="inline-flex p-1 bg-slate-100 rounded-lg gap-1 shrink-0 text-[12px] font-semibold">
            <button class="px-3 py-1 rounded-md bg-white text-emerald-600 shadow-sm">DOP</button>
            <button class="px-3 py-1 rounded-md text-slate-600">USD</button>
            <button class="px-3 py-1 rounded-md text-slate-600">EUR</button>
          </div>
        </header>

        <!-- KPI strip -->
        <div class="grid grid-cols-4 gap-2.5">
          <div v-for="k in kpis" :key="k.label" class="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200">
            <div class="w-8 h-8 rounded-md flex items-center justify-center shrink-0" :class="k.iconBg">
              <svg v-if="k.dir === 'up'"     width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" :class="k.iconColor"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
              <svg v-else-if="k.dir === 'down'" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" :class="k.iconColor"><line x1="7" y1="7" x2="17" y2="17"/><polyline points="17 7 17 17 7 17"/></svg>
              <svg v-else-if="k.dir === 'trend'" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" :class="k.iconColor"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
              <svg v-else width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" :class="k.iconColor"><rect x="2" y="6" width="20" height="14" rx="2"/><circle cx="12" cy="13" r="2.5"/></svg>
            </div>
            <div class="min-w-0 flex-1">
              <p class="text-[9.5px] font-bold uppercase tracking-widest text-slate-600 leading-tight">{{ k.label }}</p>
              <p class="text-[12.5px] font-semibold text-slate-900 truncate leading-tight mt-0.5 tabular-nums">{{ k.value }}</p>
            </div>
          </div>
        </div>

        <!-- Tabla por expediente -->
        <div class="rounded-xl border border-slate-200 overflow-hidden">
          <div class="grid grid-cols-[1fr_120px_120px_100px] px-3 py-2 text-[10px] uppercase tracking-widest text-slate-600 font-bold border-b border-slate-200 bg-slate-50">
            <span>Expediente</span>
            <span class="text-right">Honorarios</span>
            <span class="text-right">Cobrado</span>
            <span class="text-center">Estado</span>
          </div>
          <div
            v-for="r in rows"
            :key="r.id"
            class="grid grid-cols-[1fr_120px_120px_100px] px-3 py-2.5 items-center text-[11.5px] border-b border-slate-100 last:border-b-0"
          >
            <div class="flex items-center gap-2.5 min-w-0">
              <div class="w-7 h-7 rounded-md flex items-center justify-center shrink-0" :class="r.iconBg">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" :class="r.iconColor">
                  <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  <rect x="2" y="6" width="20" height="14" rx="2" />
                </svg>
              </div>
              <div class="min-w-0">
                <p class="font-semibold text-slate-900 truncate text-[12px] leading-tight">{{ r.name }}</p>
                <p class="text-[10px] text-slate-500 leading-tight mt-0.5 font-mono">{{ r.id }}</p>
              </div>
            </div>
            <span class="text-right tabular-nums text-slate-900 font-semibold">{{ r.fee }}</span>
            <span class="text-right tabular-nums text-slate-700">{{ r.paid }}</span>
            <span class="flex justify-center">
              <span class="text-[10px] px-2 py-0.5 rounded-full font-semibold" :class="r.tone">{{ r.status }}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
