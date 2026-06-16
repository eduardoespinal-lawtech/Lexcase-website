<script setup lang="ts">
/* Misma estructura que Cases en la app real: sidebar navy + aside crema con
   lista + detalle blanco. Avatares con iniciales en bg coloreado.
   Selección activa = #1164A3. */
const clients = [
  { id: 1, name: 'Pérez Solano, María',          initials: 'MP', phone: '+1 809 555 0142', avatarBg: 'bg-rose-100',    avatarText: 'text-rose-700' },
  { id: 2, name: 'Rodríguez García, Luis',       initials: 'LR', phone: '+1 829 555 0089', avatarBg: 'bg-violet-100',  avatarText: 'text-violet-700', active: true },
  { id: 3, name: 'Vargas Lantigua, Karla',       initials: 'KV', phone: '+1 809 555 0007', avatarBg: 'bg-sky-100',     avatarText: 'text-sky-700' },
  { id: 4, name: 'Mejía De Aza, Eduardo',        initials: 'EM', phone: '+1 849 555 0014', avatarBg: 'bg-emerald-100', avatarText: 'text-emerald-700' },
  { id: 5, name: 'Capital Real Estate SRL',      initials: 'CR', phone: '+1 809 555 0021', avatarBg: 'bg-amber-100',   avatarText: 'text-amber-700' },
  { id: 6, name: 'Distribuidora Esperanza',      initials: 'DE', phone: '+1 809 555 0033', avatarBg: 'bg-teal-100',    avatarText: 'text-teal-700' }
]
const tabs = ['Todos', 'Con expedientes', 'Sin teléfono', 'Activos', 'Duplicados']
</script>

<template>
  <div class="flex h-full bg-white">
    <AppSidebarMini active="clients" />

    <aside class="shrink-0 w-[280px] flex flex-col" style="background: #F6F2EC;">
      <div class="px-3 pt-3.5 pb-2">
        <h1 class="text-[15px] font-bold text-slate-900 mb-3">Contactos (6)</h1>

        <div class="relative">
          <svg class="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-600" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="Buscar contactos…"
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
        <li v-for="c in clients" :key="c.id">
          <div
            class="mx-3 flex items-start gap-2.5 px-2 py-2 rounded-md select-none"
            :class="c.active ? 'text-white' : 'text-slate-800'"
            :style="c.active ? 'background:#1164A3;' : ''"
          >
            <div
              class="w-9 h-9 rounded-md flex items-center justify-center font-bold text-[11px] shrink-0"
              :class="c.active ? 'bg-white/20 text-white' : `${c.avatarBg} ${c.avatarText}`"
            >
              {{ c.initials }}
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-[13px] font-semibold leading-snug" :class="c.active ? 'text-white' : 'text-slate-900'">
                {{ c.name }}
              </p>
              <p class="text-[10.5px] leading-snug tabular-nums" :class="c.active ? 'text-white/75' : 'text-slate-700'">
                {{ c.phone }}
              </p>
            </div>
          </div>
        </li>
      </ul>
    </aside>

    <!-- Detalle blanco -->
    <div class="flex-1 min-w-0 overflow-hidden bg-white p-5">
      <div class="flex items-start gap-3 mb-4">
        <div class="w-14 h-14 rounded-xl bg-violet-100 text-violet-700 font-bold text-[20px] flex items-center justify-center shrink-0">LR</div>
        <div class="flex-1 min-w-0">
          <h2 class="text-[20px] font-extrabold text-slate-900 leading-tight">Rodríguez García, Luis</h2>
          <p class="text-[12px] text-slate-600 mt-1">Cédula 402-2345678-9 · Cliente desde abr 2025</p>
          <div class="flex gap-2 mt-2.5">
            <span class="text-[10.5px] font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">Activo</span>
            <span class="text-[10.5px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">2 expedientes</span>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-2.5 mb-4">
        <div class="p-3 rounded-xl bg-white border border-slate-200">
          <p class="text-[9.5px] font-bold uppercase tracking-widest text-slate-500">Teléfono</p>
          <p class="text-[13px] font-semibold text-slate-900 mt-1 tabular-nums">+1 829 555 0089</p>
        </div>
        <div class="p-3 rounded-xl bg-white border border-slate-200">
          <p class="text-[9.5px] font-bold uppercase tracking-widest text-slate-500">Correo</p>
          <p class="text-[12.5px] font-semibold text-slate-900 mt-1 truncate">luis.rodriguez@correo.do</p>
        </div>
        <div class="p-3 rounded-xl bg-white border border-slate-200 col-span-2">
          <p class="text-[9.5px] font-bold uppercase tracking-widest text-slate-500">Dirección</p>
          <p class="text-[13px] text-slate-800 mt-1">C/ Las Flores 142, Ens. Naco, Santo Domingo</p>
        </div>
      </div>

      <div class="rounded-xl border border-slate-200 overflow-hidden">
        <div class="px-3.5 py-2.5 bg-slate-50 border-b border-slate-200">
          <p class="text-[11.5px] font-bold uppercase tracking-wider text-slate-700">Expedientes vinculados</p>
        </div>
        <ul class="divide-y divide-slate-100">
          <li class="px-3.5 py-2.5 flex items-center gap-3">
            <div class="w-7 h-7 rounded-md bg-emerald-500/15 flex items-center justify-center shrink-0">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-emerald-600"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.2.6-.6.5-1.1z"/></svg>
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-[13px] font-semibold text-slate-900 truncate">NVC Case — Rodríguez Familia</p>
              <p class="text-[10.5px] text-slate-600">MIG-2026-0089 · Migración</p>
            </div>
            <span class="text-[10.5px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">Activo</span>
          </li>
          <li class="px-3.5 py-2.5 flex items-center gap-3">
            <div class="w-7 h-7 rounded-md bg-rose-500/15 flex items-center justify-center shrink-0">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-rose-600"><path d="M3 21h18"/><path d="M5 21V7l8-4v18"/><path d="M19 21V11l-6-4"/></svg>
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-[13px] font-semibold text-slate-900 truncate">Constitución LLC Florida</p>
              <p class="text-[10.5px] text-slate-600">EMP-2026-0021 · Empresa</p>
            </div>
            <span class="text-[10.5px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">Activo</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
