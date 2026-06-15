<script setup lang="ts">
const kpis = [
  { label: 'Ganado',     value: 'RD$ 4,820,000', tone: 'text-emerald-600', sub: '+12% vs mes ant.' },
  { label: 'Por cobrar', value: 'RD$ 1,635,000', tone: 'text-amber-600',   sub: '8 expedientes' },
  { label: 'Perdido',    value: 'RD$ 142,000',   tone: 'text-rose-600',    sub: '2 expedientes' },
  { label: 'Balance',    value: 'RD$ 4,678,000', tone: 'text-navy-800',    sub: 'Jun 2026' }
]

const rows = [
  { id: 'JD-2026-0142', name: 'Pérez vs. Inversiones',       fee: 'RD$ 1,250,000', paid: 'RD$ 600,000', status: 'Por cobrar' },
  { id: 'MIG-2026-0089', name: 'NVC — Rodríguez Familia',     fee: 'USD 6,500',     paid: 'USD 3,250',   status: 'Por cobrar' },
  { id: 'EMP-2026-0014', name: 'Constitución Avyra Capital',  fee: 'RD$ 285,000',   paid: 'RD$ 285,000', status: 'Pagado' },
  { id: 'AL-2026-0021',  name: 'Avenida Anacaona 38',         fee: 'RD$ 95,000',    paid: 'RD$ 95,000',  status: 'Pagado' },
  { id: 'ADM-2026-0007', name: 'Recurso Pro Consumidor',      fee: 'RD$ 180,000',   paid: 'RD$ 90,000',  status: 'Por cobrar' },
  { id: 'CV-2026-0033',  name: 'Solar Cap Cana',              fee: 'USD 320,000',   paid: 'USD 200,000', status: 'Por cobrar' }
]
</script>

<template>
  <div class="flex h-full">
    <AppSidebarMini active="finances" />
    <div class="flex-1 flex flex-col bg-slate-50">
      <!-- Topbar -->
      <div class="h-12 px-4 flex items-center gap-3 border-b border-navy-800/5 bg-gradient-to-b from-[#16285A] to-[#0E1D4A] text-navy-100">
        <span class="text-xs font-semibold">Finanzas</span>
        <span class="text-[10.5px] text-navy-200/80">Mostrando en DOP</span>
        <div class="flex-1"></div>
        <div class="flex items-center gap-2 text-[10.5px] bg-white/5 border border-white/10 rounded-lg px-2 py-1">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          <span class="text-navy-100">BCRD · Compra 60.80 · Venta 61.30</span>
        </div>
      </div>

      <div class="p-5 flex-1 overflow-hidden">
        <!-- KPIs -->
        <div class="grid grid-cols-4 gap-3 mb-5">
          <div
            v-for="k in kpis"
            :key="k.label"
            class="bg-white rounded-xl border border-navy-800/8 p-3"
          >
            <p class="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">{{ k.label }}</p>
            <p class="text-base font-semibold mt-1" :class="k.tone">{{ k.value }}</p>
            <p class="text-[10px] text-slate-500 mt-0.5">{{ k.sub }}</p>
          </div>
        </div>

        <!-- Table -->
        <div class="bg-white rounded-xl border border-navy-800/8 overflow-hidden">
          <div class="grid grid-cols-[110px_1fr_120px_120px_100px] px-3 py-2 text-[10px] uppercase tracking-widest text-slate-500 font-semibold border-b border-navy-800/5 bg-slate-50/80">
            <span>Expediente</span>
            <span>Cliente / Caso</span>
            <span class="text-right">Honorarios</span>
            <span class="text-right">Cobrado</span>
            <span class="text-center">Estado</span>
          </div>
          <div
            v-for="r in rows"
            :key="r.id"
            class="grid grid-cols-[110px_1fr_120px_120px_100px] px-3 py-2.5 items-center text-[11.5px] border-b border-navy-800/5 last:border-b-0"
          >
            <span class="font-mono text-[10.5px] text-slate-500">{{ r.id }}</span>
            <span class="font-medium text-navy-800 truncate pr-2">{{ r.name }}</span>
            <span class="text-right tabular-nums text-navy-800">{{ r.fee }}</span>
            <span class="text-right tabular-nums text-slate-700">{{ r.paid }}</span>
            <span class="flex justify-center">
              <span
                class="text-[10px] px-2 py-0.5 rounded-full font-semibold"
                :class="r.status === 'Pagado' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'"
              >{{ r.status }}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
