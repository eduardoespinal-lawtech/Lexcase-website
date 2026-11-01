<script setup lang="ts">
const { locale } = useI18n()

type TabKey = 'casos' | 'calendario' | 'mapa' | 'documentos'
const activeTab = ref<TabKey>('casos')

const tabs = computed(() => {
  const isEn = locale.value === 'en'
  return [
    {
      key: 'casos' as TabKey,
      label: isEn ? 'Cases' : 'Expedientes',
      icon: 'scale',
      imgEs: '/screenshots/casos.png',
      imgEn: '/screenshots/cases-en.png',
      alt: isEn ? 'Lexbell Cases' : 'Expedientes en Lexbell'
    },
    {
      key: 'calendario' as TabKey,
      label: isEn ? 'Calendar & Deadlines' : 'Agenda y Plazos',
      icon: 'calendar',
      imgEs: '/screenshots/calendario.png',
      imgEn: '/screenshots/calendar-en.png',
      alt: isEn ? 'Lexbell Court Calendar' : 'Agenda Judicial en Lexbell'
    },
    {
      key: 'mapa' as TabKey,
      label: isEn ? 'Relationship Map' : 'Mapa de Vínculos',
      icon: 'network',
      imgEs: '/screenshots/mapa.png',
      imgEn: '/screenshots/map-en.png',
      alt: isEn ? 'Lexbell Relationship Map' : 'Mapa de Vínculos en Lexbell'
    },
    {
      key: 'documentos' as TabKey,
      label: isEn ? 'Documents & Notes' : 'Documentos y Notas',
      icon: 'folder',
      imgEs: '/screenshots/documentos.png',
      imgEn: '/screenshots/documents-en.png',
      alt: isEn ? 'Lexbell Documents and Notes' : 'Documentos y Notas en Lexbell'
    }
  ]
})

const currentTab = computed(() => tabs.value.find(t => t.key === activeTab.value) || tabs.value[0])
const currentImage = computed(() => locale.value === 'en' ? currentTab.value.imgEn : currentTab.value.imgEs)
</script>

<template>
  <div class="lx-apple-showcase">
    <!-- Pestañas de Navegación del Showcase estilo Meta Muse / Apple Pro -->
    <div class="showcase-nav" role="tablist">
      <button
        v-for="t in tabs"
        :key="t.key"
        type="button"
        role="tab"
        :aria-selected="activeTab === t.key"
        class="showcase-tab-btn"
        :class="{ 'is-active': activeTab === t.key }"
        @click="activeTab = t.key"
      >
        <span class="tab-icon" aria-hidden="true">
          <!-- Scale -->
          <svg v-if="t.icon === 'scale'" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 3v18M19 8l3 8a5 5 0 0 1-6 0zV7M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1M5 8l3 8a5 5 0 0 1-6 0zV7M7 21h10"/>
          </svg>
          <!-- Calendar -->
          <svg v-else-if="t.icon === 'calendar'" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect width="18" height="18" x="3" y="4" rx="2" /><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>
          </svg>
          <!-- Network -->
          <svg v-else-if="t.icon === 'network'" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="rotate-180">
            <circle cx="12" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"/><path d="M12 12v3"/>
          </svg>
          <!-- Folder -->
          <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/>
          </svg>
        </span>
        <span class="tab-label">{{ t.label }}</span>
      </button>
    </div>

    <!-- Contenedor con resplandor ambiental y ventana de alta fidelidad -->
    <div class="showcase-stage">
      <div class="showcase-glow" aria-hidden="true" />
      <div class="apple-showcase-window">
        <!-- Barra de título macOS minimalista -->
        <div class="window-header">
          <div class="traffic-lights">
            <span class="light red" />
            <span class="light yellow" />
            <span class="light green" />
          </div>
          <div class="window-title">Lexbell — {{ currentTab.label }}</div>
          <div class="window-badge">{{ locale === 'en' ? 'Local Encrypted' : '100% Cifrado Local' }}</div>
        </div>
        <img
          :key="currentImage"
          :src="currentImage"
          :alt="currentTab.alt"
          class="apple-app-screenshot"
          width="2245"
          height="1335"
          loading="eager"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.lx-apple-showcase {
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

/* Selector de pestañas superior estilo Meta Muse */
.showcase-nav {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(255, 255, 255, 0.04);
  padding: 5px;
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  margin-bottom: 28px;
  max-width: 100%;
  overflow-x: auto;
  scrollbar-width: none;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: 0 8px 24px -6px rgba(0, 0, 0, 0.5);
}
.showcase-nav::-webkit-scrollbar { display: none; }

.showcase-tab-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 18px;
  border-radius: 9999px;
  font-size: 13.5px;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: #a1a1aa;
  background: transparent;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  user-select: none;
}
.showcase-tab-btn:hover {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.06);
}
.showcase-tab-btn.is-active {
  background: #0071e3;
  color: #ffffff;
  font-weight: 600;
  box-shadow: 0 0 20px -2px rgba(0, 113, 227, 0.55);
}

.tab-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Escenario y Resplandor ambiental */
.showcase-stage {
  position: relative;
  width: 100%;
}

.showcase-glow {
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -20%);
  width: 75%;
  height: 60%;
  background: radial-gradient(circle, rgba(0, 113, 227, 0.3) 0%, rgba(88, 86, 214, 0.15) 45%, transparent 70%);
  filter: blur(60px);
  pointer-events: none;
  z-index: 0;
}

/* Ventana auténtica de la aplicación flotando */
.apple-showcase-window {
  position: relative;
  z-index: 1;
  width: 100%;
  border-radius: 16px;
  background: #0d0f16;
  border: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow:
    0 24px 70px -15px rgba(0, 0, 0, 0.8),
    0 0 40px -10px rgba(0, 113, 227, 0.25);
  overflow: hidden;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
}

.apple-showcase-window:hover {
  transform: translateY(-3px);
  border-color: rgba(255, 255, 255, 0.22);
  box-shadow:
    0 30px 90px -15px rgba(0, 0, 0, 0.9),
    0 0 55px -8px rgba(0, 113, 227, 0.35);
}

.window-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 11px 16px;
  background: rgba(255, 255, 255, 0.03);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.traffic-lights {
  display: flex;
  align-items: center;
  gap: 7px;
}
.light {
  width: 11px;
  height: 11px;
  border-radius: 50%;
}
.light.red { background: #ff5f57; }
.light.yellow { background: #febc2e; }
.light.green { background: #28c840; }

.window-title {
  font-size: 12px;
  font-weight: 500;
  color: #a1a1aa;
  letter-spacing: -0.01em;
}

.window-badge {
  font-size: 11px;
  font-weight: 500;
  color: #38bdf8;
  background: rgba(56, 189, 248, 0.1);
  border: 1px solid rgba(56, 189, 248, 0.2);
  padding: 2px 8px;
  border-radius: 9999px;
}

.apple-app-screenshot {
  width: 100%;
  height: auto;
  display: block;
}

@media (max-width: 640px) {
  .showcase-tab-btn {
    padding: 6px 12px;
    font-size: 12px;
  }
  .window-badge { display: none; }
}
</style>
