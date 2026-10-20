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
      captionTitle: isEn ? 'Active Legal Matters' : 'Expedientes en Trámite',
      captionDesc: isEn
        ? 'Court, statutory filings, claimants, defendants, and assigned attorneys—all structured in one central place.'
        : 'Tribunal, trámites procesales, demandantes, demandados y abogados vinculados en un solo expediente estructurado.'
    },
    {
      key: 'calendario' as TabKey,
      label: isEn ? 'Calendar & Deadlines' : 'Agenda y Plazos',
      icon: 'calendar',
      imgEs: '/screenshots/calendario.png',
      imgEn: '/screenshots/calendar-en.png',
      captionTitle: isEn ? 'Court Calendar & Statutory Deadlines' : 'Agenda Procesal y Plazos Perentorios',
      captionDesc: isEn
        ? 'Integrated calendar with system reminders so you never miss a court hearing or filing cutoff.'
        : 'Calendario procesal con alertas del sistema para que ninguna audiencia ni vencimiento de término expire.'
    },
    {
      key: 'mapa' as TabKey,
      label: isEn ? 'Relationship Map' : 'Mapa de Vínculos',
      icon: 'network',
      imgEs: '/screenshots/mapa.png',
      imgEn: '/screenshots/map-en.png',
      captionTitle: isEn ? 'Conflict Prevention & Relationship Graph' : 'Grafo de Relaciones y Conflictos de Interés',
      captionDesc: isEn
        ? 'Visual network graph that instantly detects cross-connections between clients, companies, and counterparties.'
        : 'Grafo interactivo que detecta al instante conexiones entre clientes, empresas y contrapartes para prevenir conflictos éticos.'
    },
    {
      key: 'documentos' as TabKey,
      label: isEn ? 'Documents & Notes' : 'Documentos y Notas',
      icon: 'folder',
      imgEs: '/screenshots/documentos.png',
      imgEn: '/screenshots/documents-en.png',
      captionTitle: isEn ? 'Local Document Vault & Backups' : 'Gestión Documental y Respaldos',
      captionDesc: isEn
        ? 'Attach files directly to cases—stored locally on your device with automatic daily backups.'
        : 'Adjunta expedientes y archivos directamente en tu disco, con búsqueda instantánea y copia de seguridad diaria.'
    }
  ]
})

const currentTab = computed(() => tabs.value.find(t => t.key === activeTab.value) || tabs.value[0])
const currentImage = computed(() => locale.value === 'en' ? currentTab.value.imgEn : currentTab.value.imgEs)
</script>

<template>
  <div class="lx-real-showcase">
    <!-- Pestañas de Navegación del Showcase -->
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
        <!-- Iconos SVG elegantes -->
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

    <!-- Marco de la Captura Real de la App -->
    <div class="showcase-frame">
      <div class="screenshot-wrapper">
        <img
          :key="currentImage"
          :src="currentImage"
          :alt="currentTab.captionTitle"
          class="app-screenshot"
          width="2880"
          height="1800"
          loading="eager"
        />
      </div>

      <!-- Pie explicativo de la vista -->
      <div class="showcase-caption">
        <div class="caption-title-row">
          <span class="caption-dot" />
          <strong class="caption-title">{{ currentTab.captionTitle }}</strong>
        </div>
        <p class="caption-desc">{{ currentTab.captionDesc }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.lx-real-showcase {
  width: 100%;
  max-width: 1160px;
  margin: 40px auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Selector de pestañas superior estilo Notion (píldoras suaves) */
.showcase-nav {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: #F1F1EF;
  padding: 4px;
  border-radius: 999px;
  border: 1px solid #E5E5E3;
  margin-bottom: 24px;
  max-width: 100%;
  overflow-x: auto;
  scrollbar-width: none;
}
.showcase-nav::-webkit-scrollbar { display: none; }

.showcase-tab-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 18px;
  border-radius: 999px;
  font-size: 13.5px;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: #5F5E5B;
  background: transparent;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  user-select: none;
}
.showcase-tab-btn:hover {
  color: #050505;
}
.showcase-tab-btn.is-active {
  background: #FFFFFF;
  color: #050505;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.04);
}

.tab-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Marco exterior estilo Notion con sombra flotante limpia */
.showcase-frame {
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  background: #FFFFFF;
  border: 1px solid #EBEBEA;
  box-shadow:
    0 24px 60px -15px rgba(0, 0, 0, 0.12),
    0 10px 24px -10px rgba(0, 0, 0, 0.06),
    0 0 0 1px rgba(0, 0, 0, 0.04);
  transition: box-shadow 0.3s ease;
}

.screenshot-wrapper {
  width: 100%;
  position: relative;
  background: #111111;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.app-screenshot {
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
  transition: opacity 0.25s ease-out;
}

/* Pie explicativo debajo de la captura estilo Notion */
.showcase-caption {
  padding: 18px 26px 20px;
  background: #FFFFFF;
  border-top: 1px solid #F1F1EF;
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: left;
}

.caption-title-row {
  display: flex;
  align-items: center;
  gap: 8px;
}
.caption-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #007AFF;
}
.caption-title {
  font-size: 14.5px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: #050505;
}
.caption-desc {
  margin: 0;
  font-size: 13.5px;
  line-height: 1.5;
  color: #5F5E5B;
}

@media (max-width: 640px) {
  .showcase-tab-btn {
    padding: 6px 12px;
    font-size: 12px;
  }
  .showcase-caption {
    padding: 14px 16px;
  }
  .caption-desc {
    font-size: 12px;
  }
}
</style>
