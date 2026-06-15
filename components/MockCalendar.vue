<script setup lang="ts">
const days = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom']

type Event = { day: number; title: string; time: string; type: 'hearing' | 'deadline' | 'meeting' }
const events: Event[] = [
  { day: 3,  title: 'Audiencia preliminar — Pérez',  time: '09:30', type: 'hearing' },
  { day: 5,  title: 'Vence DS-260 Rodríguez',         time: '23:59', type: 'deadline' },
  { day: 8,  title: 'Reunión Avyra Capital',          time: '15:00', type: 'meeting' },
  { day: 12, title: 'Audiencia conocimiento',         time: '10:00', type: 'hearing' },
  { day: 14, title: 'Pago Reg. Mercantil',            time: '12:00', type: 'deadline' },
  { day: 18, title: 'Cita VAC consulado',             time: '08:15', type: 'hearing' },
  { day: 21, title: 'Vence depósito Anacaona 38',     time: '17:00', type: 'deadline' },
  { day: 24, title: 'Visita Cap Cana — solar',        time: '11:30', type: 'meeting' },
  { day: 27, title: 'Audiencia fondo',                time: '09:00', type: 'hearing' }
]
const eventByDay = computed(() => {
  const map = new Map<number, Event[]>()
  for (const e of events) {
    if (!map.has(e.day)) map.set(e.day, [])
    map.get(e.day)!.push(e)
  }
  return map
})

const monthDays = Array.from({ length: 30 }, (_, i) => i + 1)
const offset = 6 // first day is Sunday → offset to start on Mon
const today = 12

function dotClass(type: string) {
  return type === 'hearing'
    ? 'bg-rose-500'
    : type === 'deadline'
      ? 'bg-amber-500'
      : 'bg-emerald-500'
}
</script>

<template>
  <div class="flex h-full">
    <AppSidebarMini active="calendar" />
    <div class="flex-1 flex flex-col bg-slate-50">
      <!-- Topbar -->
      <div class="h-12 px-4 flex items-center gap-3 border-b border-navy-800/5 bg-gradient-to-b from-[#16285A] to-[#0E1D4A] text-navy-100">
        <div class="flex items-center gap-2 text-xs font-medium">
          <span class="px-2.5 py-1 rounded-md bg-white/10 border border-white/10">Junio 2026</span>
          <button class="px-2 py-1 rounded-md hover:bg-white/5">‹</button>
          <button class="px-2 py-1 rounded-md hover:bg-white/5">›</button>
        </div>
        <div class="flex items-center gap-2 ml-3 text-[10.5px]">
          <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-300/15 border border-amber-300/30 text-amber-200">
            <span class="w-1.5 h-1.5 rounded-full bg-amber-300"></span> Próximo feriado · 16 Ago · Restauración
          </span>
        </div>
        <div class="flex-1"></div>
        <div class="flex gap-1 text-[10.5px]">
          <span class="px-2 py-1 rounded-md bg-white/15 border border-white/10">Mes</span>
          <span class="px-2 py-1 rounded-md hover:bg-white/5">Semana</span>
          <span class="px-2 py-1 rounded-md hover:bg-white/5">Día</span>
        </div>
      </div>

      <div class="p-5 flex-1 flex gap-4 overflow-hidden">
        <!-- Calendar grid -->
        <div class="flex-1 bg-white rounded-xl border border-navy-800/8 overflow-hidden">
          <div class="grid grid-cols-7 text-[10px] font-semibold uppercase tracking-wider text-slate-500 border-b border-navy-800/5">
            <div v-for="d in days" :key="d" class="px-2 py-1.5 text-center">{{ d }}</div>
          </div>
          <div class="grid grid-cols-7 grid-rows-5">
            <div v-for="i in offset" :key="'b'+i" class="border-r border-b border-navy-800/5 bg-slate-50/60"></div>
            <div
              v-for="d in monthDays"
              :key="d"
              class="relative border-r border-b border-navy-800/5 h-[60px] p-1.5"
              :class="d === today ? 'bg-navy-50/60' : ''"
            >
              <span
                class="inline-flex items-center justify-center text-[10.5px] font-semibold w-5 h-5 rounded-full"
                :class="d === today ? 'bg-navy-800 text-white' : 'text-navy-800'"
              >{{ d }}</span>
              <div class="mt-1 space-y-0.5">
                <div
                  v-for="(e, i) in eventByDay.get(d) || []"
                  :key="i"
                  class="flex items-center gap-1 text-[9.5px] truncate"
                >
                  <span class="w-1.5 h-1.5 rounded-full shrink-0" :class="dotClass(e.type)"></span>
                  <span class="truncate text-navy-800/80">{{ e.title }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right panel: today's deadlines -->
        <div class="w-[180px] bg-white rounded-xl border border-navy-800/8 p-3 shrink-0">
          <h3 class="text-[10px] uppercase tracking-widest text-slate-500 font-semibold mb-2">Hoy</h3>
          <div class="space-y-2">
            <div class="rounded-lg bg-rose-50 border border-rose-100 p-2">
              <div class="flex items-center gap-1.5 text-[10px] font-semibold text-rose-700">
                <span class="w-1.5 h-1.5 rounded-full bg-rose-500"></span> Audiencia
              </div>
              <p class="text-[11px] font-semibold text-navy-800 leading-tight mt-1">Pérez vs. Caribe</p>
              <p class="text-[10px] text-slate-500">10:00 · TPI La Vega</p>
            </div>
            <div class="rounded-lg bg-amber-50 border border-amber-100 p-2">
              <div class="flex items-center gap-1.5 text-[10px] font-semibold text-amber-700">
                <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Plazo
              </div>
              <p class="text-[11px] font-semibold text-navy-800 leading-tight mt-1">Pago Reg. Mercantil</p>
              <p class="text-[10px] text-slate-500">Vence en 2 días</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
