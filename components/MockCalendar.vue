<script setup lang="ts">
/* Vista de Calendario: header con título + selector mes/semana/día, grid de 7
   columnas con celdas que muestran número de día y eventos como botones
   pequeños con emoji prefix (⚖️ audiencia, ⏱️ plazo, 🤝 reunión). Día actual
   con bg gold-500/5 y número en círculo amarillo. */
const days = ['LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SÁB', 'DOM']

type Event = { day: number; emoji: string; label: string; tone: string }
const events: Event[] = [
  { day: 3,  emoji: '⚖️', label: 'Pérez vs. Caribe',       tone: 'bg-rose-100 text-rose-700 border-rose-200' },
  { day: 5,  emoji: '⏱️', label: 'Vence DS-260',             tone: 'bg-amber-100 text-amber-700 border-amber-200' },
  { day: 8,  emoji: '🤝', label: 'Reunión Avyra',           tone: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
  { day: 12, emoji: '⚖️', label: 'Conocimiento fondo',      tone: 'bg-rose-100 text-rose-700 border-rose-200' },
  { day: 14, emoji: '⏱️', label: 'Pago Reg. Mercantil',     tone: 'bg-amber-100 text-amber-700 border-amber-200' },
  { day: 18, emoji: '⚖️', label: 'Cita VAC',                tone: 'bg-rose-100 text-rose-700 border-rose-200' },
  { day: 21, emoji: '⏱️', label: 'Depósito Anacaona',       tone: 'bg-amber-100 text-amber-700 border-amber-200' },
  { day: 24, emoji: '🤝', label: 'Visita Cap Cana',         tone: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
  { day: 27, emoji: '⚖️', label: 'Audiencia fondo',         tone: 'bg-rose-100 text-rose-700 border-rose-200' }
]
const eventByDay = computed(() => {
  const m = new Map<number, Event[]>()
  for (const e of events) {
    if (!m.has(e.day)) m.set(e.day, [])
    m.get(e.day)!.push(e)
  }
  return m
})

const today = 12
const monthDays = Array.from({ length: 30 }, (_, i) => i + 1)
const firstDayIndex = 0 // Junio 2026 comienza un lunes (ficticio para el mockup)
</script>

<template>
  <div class="flex h-full bg-white">
    <AppSidebarMini active="calendar" />

    <div class="flex-1 min-w-0 overflow-hidden flex flex-col p-5">
      <!-- Header molde unificado de la app -->
      <header class="flex items-start gap-4 mb-4">
        <div class="w-12 h-12 rounded-xl bg-amber-500/15 flex items-center justify-center shrink-0">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" class="text-amber-600">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        </div>
        <div class="flex-1 min-w-0">
          <h1 class="text-[22px] font-extrabold text-slate-900 leading-tight">Junio 2026</h1>
          <div class="flex flex-wrap items-center gap-x-2.5 gap-y-1 mt-1 text-[11.5px] font-medium text-slate-600">
            <span>9 eventos este mes</span>
            <span class="text-slate-300">·</span>
            <span>Próximo feriado: <span class="text-amber-600 font-semibold">16 ago · Restauración</span></span>
          </div>
        </div>
        <div class="inline-flex p-1 bg-slate-100 rounded-lg gap-1 shrink-0 text-[12px] font-semibold">
          <button class="px-3 py-1 rounded-md bg-white text-slate-900 shadow-sm">Mes</button>
          <button class="px-3 py-1 rounded-md text-slate-600">Semana</button>
          <button class="px-3 py-1 rounded-md text-slate-600">Día</button>
        </div>
      </header>

      <!-- Grid mes -->
      <div class="flex-1 min-h-0 rounded-2xl border border-slate-200 overflow-hidden flex flex-col">
        <!-- Day header -->
        <div class="grid grid-cols-7 bg-slate-100 border-b border-slate-200 shrink-0">
          <div v-for="d in days" :key="d" class="py-2 text-center text-[10.5px] font-bold text-slate-700 uppercase tracking-wider">{{ d }}</div>
        </div>
        <!-- Cells -->
        <div class="grid grid-cols-7 flex-1 min-h-0">
          <div v-for="i in firstDayIndex" :key="'b'+i" class="border border-slate-100 bg-slate-50/40"></div>
          <div
            v-for="d in monthDays"
            :key="d"
            class="border border-slate-100 p-1.5 flex flex-col overflow-hidden"
            :style="d === today ? 'background: rgba(245, 158, 11, 0.06); border-color: rgba(245, 158, 11, 0.3);' : 'background:#fff;'"
          >
            <div class="flex justify-between items-start mb-1">
              <span
                class="text-[10.5px] font-bold h-5 w-5 flex items-center justify-center rounded-full leading-none"
                :class="d === today ? 'bg-amber-500 text-white' : 'text-slate-700'"
              >{{ d }}</span>
              <span v-if="d === 16" class="text-[8px] font-black px-1 py-0.5 rounded bg-amber-500/10 text-amber-700 truncate" style="max-width: 70px;" title="Día del Padre">
                🎉 Padre
              </span>
            </div>
            <div class="flex-1 space-y-0.5 overflow-hidden">
              <div
                v-for="(e, i) in eventByDay.get(d) || []"
                :key="i"
                class="text-left truncate text-[9px] px-1 py-0.5 rounded font-bold border"
                :class="e.tone"
              >
                {{ e.emoji }} {{ e.label }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
