<script setup lang="ts">
const { t, locale } = useI18n()
const isEn = computed(() => locale.value === 'en')

definePageMeta({ name: 'calculadora-plazos' })

// Current local date in YYYY-MM-DD
const todayIso = new Date().toISOString().slice(0, 10)

// Reactive form state
const startDate = ref<string>(todayIso)
const daysCount = ref<number>(15)
const computationType = ref<'business' | 'calendar'>('business')
const startNextDay = ref<boolean>(true)
const showBreakdown = ref<boolean>(false)
const openFaq = ref<number | null>(null)

function toggleFaq(idx: number) {
  openFaq.value = openFaq.value === idx ? null : idx
}

// Quick preset buttons
const presets = [
  { days: 5, labelEs: '5 días', labelEn: '5 days' },
  { days: 10, labelEs: '10 días', labelEn: '10 days' },
  { days: 15, labelEs: '15 días', labelEn: '15 days' },
  { days: 20, labelEs: '20 días', labelEn: '20 days' },
  { days: 30, labelEs: '30 días', labelEn: '30 days' }
]

function applyPreset(days: number) {
  daysCount.value = days
}

interface DayStep {
  date: Date
  formatted: string
  dayName: string
  isWeekend: boolean
  isCounted: boolean
  businessDayNumber?: number
  isFinal: boolean
}

// Computation Engine
const calculation = computed(() => {
  if (!startDate.value || !daysCount.value || daysCount.value <= 0) {
    return null
  }

  const parts = startDate.value.split('-').map(Number)
  if (parts.length !== 3) return null

  // Create date at noon local time to avoid timezone drift
  const current = new Date(parts[0], parts[1] - 1, parts[2], 12, 0, 0)
  const steps: DayStep[] = []

  let countedDays = 0
  const targetDays = Math.min(Math.max(1, daysCount.value), 365)
  const dayNameLocale = isEn.value ? 'en-US' : 'es-DO'

  if (startNextDay.value) {
    current.setDate(current.getDate() + 1)
  }

  let safetyCounter = 0
  while (countedDays < targetDays && safetyCounter < 600) {
    safetyCounter++
    const dayOfWeek = current.getDay() // 0 = Sunday, 6 = Saturday
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6

    const dayName = current.toLocaleDateString(dayNameLocale, { weekday: 'long' })
    const formatted = current.toLocaleDateString(dayNameLocale, {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    })

    if (computationType.value === 'business') {
      if (!isWeekend) {
        countedDays++
        steps.push({
          date: new Date(current),
          formatted,
          dayName,
          isWeekend: false,
          isCounted: true,
          businessDayNumber: countedDays,
          isFinal: countedDays === targetDays
        })
      } else {
        steps.push({
          date: new Date(current),
          formatted,
          dayName,
          isWeekend: true,
          isCounted: false,
          isFinal: false
        })
      }
    } else {
      countedDays++
      steps.push({
        date: new Date(current),
        formatted,
        dayName,
        isWeekend,
        isCounted: true,
        businessDayNumber: countedDays,
        isFinal: countedDays === targetDays
      })
    }

    if (countedDays < targetDays) {
      current.setDate(current.getDate() + 1)
    }
  }

  const lastStep = steps[steps.length - 1]
  const expirationDateFormatted = lastStep
    ? lastStep.date.toLocaleDateString(dayNameLocale, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    : ''

  return {
    expirationDateFormatted,
    totalCalendarDays: steps.length,
    countedDays,
    steps
  }
})

// FAQ Items
const faqs = computed(() => [
  {
    q: isEn.value
      ? 'How is the computation starting date determined?'
      : '¿Cómo se determina el inicio del cómputo del plazo?',
    a: isEn.value
      ? 'Under modern civil, administrative, and criminal procedural codes, the date of notification is considered "dies a quo" and is excluded from the calculation. The procedural clock starts ticking on the following legal business day.'
      : 'En la gran mayoría de códigos procesales civiles, penales y contenciosos, el día de la entrega del acto no se cuenta ("dies a quo non computatur in termino"). El plazo formal comienza a correr al día hábil inmediatamente posterior.'
  },
  {
    q: isEn.value
      ? 'What happens if the expiration day falls on a non-working day?'
      : '¿Qué ocurre si el vencimiento cae en un día inhábil?',
    a: isEn.value
      ? 'When a procedural deadline ends on a Saturday, Sunday, or official holiday, it is automatically extended to the next available business day at court secretariat opening hours.'
      : 'Por mandato legal procesal, si el último día de un plazo resulta ser inhábil (sábado, domingo o festivo oficial), el plazo se prorroga automáticamente hasta el primer día hábil siguiente a la hora reglamentaria de secretaría.'
  },
  {
    q: isEn.value
      ? 'Can Lexbell track deadlines automatically across all my matters?'
      : '¿Puede Lexbell controlar todos mis plazos automáticamente?',
    a: isEn.value
      ? 'Yes. Instead of computing dates manually one by one, Lexbell allows you to associate deadlines to each case, automatically calculates business days, and delivers native desktop alerts on your Mac and Windows before any deadline expires.'
      : 'Sí. En lugar de calcular plazos manualmente en cada acto, Lexbell vincula los plazos a cada expediente, calcula los días hábiles en segundo plano y te envía notificaciones nativas en tu Mac y Windows antes de que venza cualquier término judicial.'
  }
])

// SEO Meta
const pageTitle = computed(() =>
  isEn.value
    ? 'Court Deadline Calculator (Business Days) — Lexbell'
    : 'Cómputo de Plazos Procesales en Días Hábiles — Lexbell'
)

const pageDesc = computed(() =>
  isEn.value
    ? 'Compute exact court procedural expiration dates in business days excluding weekends and judicial holidays with exact expiration dates.'
    : 'Calcula con rigor el vencimiento exacto de tus términos judiciales en días hábiles excluyendo fines de semana con desglose día a día.'
)

useHead(() => ({
  title: pageTitle.value,
  meta: [
    { name: 'description', content: pageDesc.value },
    { property: 'og:title', content: pageTitle.value },
    { property: 'og:description', content: pageDesc.value },
    { name: 'twitter:title', content: pageTitle.value },
    { name: 'twitter:description', content: pageDesc.value }
  ]
}))
</script>

<template>
  <div class="calculator-page">
    <!-- HERO SECTION (SOBER & BALANCED) -->
    <section class="calc-hero">
      <div class="apple-wrap text-center">
        <span class="eyebrow">{{ isEn ? 'LEGAL PRACTICE' : 'PRÁCTICA PROCESAL' }}</span>
        <h1 class="calc-title mt-2">
          {{ isEn ? 'Court Deadline Calculator' : 'Cómputo de Plazos Procesales' }}
        </h1>
        <p class="calc-subtitle mt-3 mx-auto">
          {{ isEn
            ? 'Accurately compute procedural expiration dates in business or calendar days.'
            : 'Calcula con rigor el vencimiento exacto de tus términos judiciales en días hábiles o naturales.'
          }}
        </p>
      </div>
    </section>

    <!-- CALCULATOR APP CARD -->
    <section class="calc-body-section">
      <div class="apple-wrap max-w-3xl mx-auto">
        <div class="calc-card">
          <!-- FORM FIELDS -->
          <div class="form-grid">
            <div class="form-group">
              <label class="form-label" for="start-date">
                {{ isEn ? 'Notification Date (Dies a quo)' : 'Fecha de Notificación (Dies a quo)' }}
              </label>
              <input
                id="start-date"
                v-model="startDate"
                type="date"
                class="form-input"
              />
              <span class="form-hint">
                {{ isEn ? 'Date when the notice or court act was received.' : 'Fecha en que se recibió el acto procesal.' }}
              </span>
            </div>

            <div class="form-group">
              <label class="form-label" for="days-count">
                {{ isEn ? 'Term (Number of Days)' : 'Término Procesal (Días)' }}
              </label>
              <input
                id="days-count"
                v-model.number="daysCount"
                type="number"
                min="1"
                max="365"
                class="form-input"
              />
              <span class="form-hint">
                {{ isEn ? 'Number of days to compute.' : 'Duración del plazo legal concedido.' }}
              </span>
            </div>
          </div>

          <!-- PRESETS -->
          <div class="presets-row">
            <span class="presets-caption">{{ isEn ? 'Quick presets:' : 'Plazos frecuentes:' }}</span>
            <div class="presets-pills">
              <button
                v-for="p in presets"
                :key="p.days"
                type="button"
                class="preset-pill"
                :class="{ 'is-active': daysCount === p.days }"
                @click="applyPreset(p.days)"
              >
                {{ isEn ? p.labelEn : p.labelEs }}
              </button>
            </div>
          </div>

          <!-- COMPUTATION TYPE SELECTOR -->
          <div class="calc-options-box">
            <div class="computation-selector">
              <button
                type="button"
                class="comp-tab"
                :class="{ 'is-active': computationType === 'business' }"
                @click="computationType = 'business'"
              >
                <span class="comp-tab-title">{{ isEn ? 'Business Days' : 'Días Hábiles' }}</span>
                <span class="comp-tab-sub">{{ isEn ? 'Excludes Saturdays and Sundays' : 'Excluye sábados y domingos' }}</span>
              </button>

              <button
                type="button"
                class="comp-tab"
                :class="{ 'is-active': computationType === 'calendar' }"
                @click="computationType = 'calendar'"
              >
                <span class="comp-tab-title">{{ isEn ? 'Calendar Days' : 'Días Naturales' }}</span>
                <span class="comp-tab-sub">{{ isEn ? 'Consecutive calendar days' : 'Cuenta días corridos continuos' }}</span>
              </button>
            </div>

            <label class="checkbox-row mt-4">
              <input
                v-model="startNextDay"
                type="checkbox"
                class="checkbox-input"
              />
              <span class="checkbox-text">
                {{ isEn
                  ? 'Start computation on the next business day (standard procedural rule)'
                  : 'El cómputo inicia el día hábil siguiente a la notificación (regla general procesal)'
                }}
              </span>
            </label>
          </div>

          <!-- RESULT CARD (PROFESSIONAL LEGAL DESIGN) -->
          <div v-if="calculation" class="calc-result-panel">
            <div class="result-top">
              <span class="result-badge">{{ isEn ? 'EXPIRATION DATE (DIES AD QUEM)' : 'FECHA DE VENCIMIENTO JUDICIAL (DIES AD QUEM)' }}</span>
              <div class="result-date">
                {{ calculation.expirationDateFormatted }}
              </div>
              <div class="result-meta-row">
                <span class="result-meta-item">
                  <strong>{{ calculation.countedDays }}</strong> {{ isEn ? 'business days counted' : 'días computados' }}
                </span>
                <span class="meta-dot">·</span>
                <span class="result-meta-item">
                  <strong>{{ calculation.totalCalendarDays }}</strong> {{ isEn ? 'calendar days elapsed' : 'días naturales transcurridos' }}
                </span>
              </div>
            </div>

            <!-- TOGGLE BREAKDOWN -->
            <div class="breakdown-toggle-container">
              <button
                type="button"
                class="breakdown-btn"
                @click="showBreakdown = !showBreakdown"
              >
                <span>{{ showBreakdown ? (isEn ? 'Hide audit breakdown' : 'Ocultar desglose procesal') : (isEn ? 'View day-by-day audit breakdown' : 'Ver desglose procesal día a día') }}</span>
                <svg
                  class="chevron-icon"
                  :class="{ 'is-open': showBreakdown }"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>

            <!-- AUDIT TABLE (CLEAN LIGHT DESIGN) -->
            <div v-if="showBreakdown" class="audit-table-wrapper">
              <table class="audit-table">
                <thead>
                  <tr>
                    <th>{{ isEn ? 'Date' : 'Fecha' }}</th>
                    <th>{{ isEn ? 'Day' : 'Día' }}</th>
                    <th>{{ isEn ? 'Classification' : 'Calificación Procesal' }}</th>
                    <th class="text-right">{{ isEn ? 'Count' : 'Cómputo' }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(st, idx) in calculation.steps"
                    :key="idx"
                    :class="{ 'row-weekend': st.isWeekend, 'row-final': st.isFinal }"
                  >
                    <td class="font-mono text-[13px]">{{ st.formatted }}</td>
                    <td class="capitalize">{{ st.dayName }}</td>
                    <td>
                      <span v-if="st.isFinal" class="status-chip chip-final">
                        {{ isEn ? 'Expiration Date' : 'Día de Vencimiento' }}
                      </span>
                      <span v-else-if="st.isWeekend" class="status-chip chip-weekend">
                        {{ isEn ? 'Non-working (Weekend)' : 'Inhábil (Fin de semana)' }}
                      </span>
                      <span v-else class="status-chip chip-business">
                        {{ isEn ? 'Business day' : 'Día hábil procesal' }}
                      </span>
                    </td>
                    <td class="text-right font-mono font-semibold">
                      {{ st.businessDayNumber ? `#${st.businessDayNumber}` : '—' }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ SECTION (NOTION ACCORDION) -->
    <section class="calc-faq-section">
      <div class="apple-wrap max-w-3xl mx-auto">
        <div class="text-center mb-10">
          <span class="eyebrow">{{ isEn ? 'PROCEDURAL CRITERIA' : 'CRITERIOS PROCESALES' }}</span>
          <h2 class="h-section mt-2">{{ isEn ? 'Frequently Asked Questions about Deadlines' : 'Preguntas Frecuentes sobre Plazos' }}</h2>
        </div>

        <div class="faq-accordion">
          <div
            v-for="(item, idx) in faqs"
            :key="idx"
            class="faq-item"
            :class="{ 'is-open': openFaq === idx }"
          >
            <button
              type="button"
              class="faq-question-btn"
              :aria-expanded="openFaq === idx"
              @click="toggleFaq(idx)"
            >
              <span>{{ item.q }}</span>
              <svg class="faq-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div v-show="openFaq === idx" class="faq-answer">
              <p>{{ item.a }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.calculator-page {
  background: #ffffff;
  color: #191919;
}

/* HERO SECTION */
.calc-hero {
  padding: clamp(48px, 6vw, 68px) 24px 32px;
  background: #ffffff;
}

.calc-title {
  font-size: clamp(30px, 3.6vw, 42px);
  font-weight: 800;
  letter-spacing: -0.025em;
  line-height: 1.15;
  color: #050505;
}

.calc-subtitle {
  font-size: 16px;
  line-height: 1.55;
  color: #5f5e5b;
  max-width: 580px;
}

/* BODY SECTION & CARD */
.calc-body-section {
  padding: 0 24px clamp(50px, 6vw, 70px);
  background: #ffffff;
}

.calc-card {
  background: #ffffff;
  border: 1px solid #ebebea;
  border-radius: 16px;
  padding: clamp(24px, 4vw, 36px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
}

.form-grid {
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr;
}

@media (min-width: 640px) {
  .form-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-label {
  font-size: 13.5px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 6px;
}

.form-input {
  width: 100%;
  padding: 11px 14px;
  border: 1px solid #d1d5db;
  border-radius: 9px;
  font-size: 14.5px;
  color: #0f172a;
  background: #ffffff;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
  font-family: inherit;
}

.form-input:focus {
  outline: none;
  border-color: #0066cc;
  box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.1);
}

.form-hint {
  font-size: 12px;
  color: #64748b;
  margin-top: 5px;
}

/* PRESETS */
.presets-row {
  margin-top: 20px;
  padding-top: 18px;
  border-top: 1px solid #f1f5f9;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.presets-caption {
  font-size: 12px;
  font-weight: 600;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.presets-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.preset-pill {
  padding: 6px 14px;
  font-size: 13px;
  font-weight: 600;
  border-radius: 999px;
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  color: #334155;
  cursor: pointer;
  transition: all 0.15s ease;
}

.preset-pill:hover {
  background: #e2e8f0;
  color: #0f172a;
}

.preset-pill.is-active {
  background: #0066cc;
  border-color: #0066cc;
  color: #ffffff;
}

/* OPTIONS BOX */
.calc-options-box {
  margin-top: 22px;
  padding: 18px;
  background: #f8fafc;
  border: 1px solid #edf2f7;
  border-radius: 12px;
}

.computation-selector {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}

@media (min-width: 640px) {
  .computation-selector {
    grid-template-columns: 1fr 1fr;
  }
}

.comp-tab {
  padding: 12px 14px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  text-align: left;
  cursor: pointer;
  transition: all 0.15s ease;
}

.comp-tab:hover {
  border-color: #cbd5e1;
}

.comp-tab.is-active {
  border-color: #0066cc;
  background: #f0f7ff;
  box-shadow: 0 1px 3px rgba(0, 102, 204, 0.08);
}

.comp-tab-title {
  display: block;
  font-size: 13.5px;
  font-weight: 700;
  color: #0f172a;
}

.comp-tab.is-active .comp-tab-title {
  color: #0066cc;
}

.comp-tab-sub {
  display: block;
  font-size: 11.5px;
  color: #64748b;
  margin-top: 2px;
}

.checkbox-row {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  cursor: pointer;
}

.checkbox-input {
  margin-top: 2px;
  accent-color: #0066cc;
}

.checkbox-text {
  font-size: 13px;
  color: #334155;
  line-height: 1.45;
}

/* RESULT PANEL (PROFESSIONAL LEGAL STYLE) */
.calc-result-panel {
  margin-top: 28px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-left: 4px solid #0066cc;
  border-radius: 12px;
  padding: 24px 26px;
}

.result-top {
  text-align: left;
}

.result-badge {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #0066cc;
  margin-bottom: 6px;
}

.result-date {
  font-size: clamp(22px, 3.2vw, 28px);
  font-weight: 800;
  color: #0f172a;
  letter-spacing: -0.02em;
  text-transform: capitalize;
  line-height: 1.25;
}

.result-meta-row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
  font-size: 13px;
  color: #64748b;
}

.meta-dot {
  color: #cbd5e1;
}

.breakdown-toggle-container {
  margin-top: 18px;
  padding-top: 14px;
  border-top: 1px solid #e2e8f0;
}

.breakdown-btn {
  background: transparent;
  border: none;
  padding: 0;
  color: #0066cc;
  font-size: 13.5px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  transition: color 0.15s ease;
}

.breakdown-btn:hover {
  color: #0052a3;
}

.chevron-icon {
  transition: transform 0.2s ease;
}

.chevron-icon.is-open {
  transform: rotate(180deg);
}

/* AUDIT TABLE */
.audit-table-wrapper {
  margin-top: 16px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  overflow-x: auto;
  max-height: 380px;
  overflow-y: auto;
}

.audit-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
  text-align: left;
}

.audit-table th {
  padding: 10px 14px;
  background: #f8fafc;
  color: #475569;
  font-weight: 600;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  border-bottom: 1px solid #e2e8f0;
  position: sticky;
  top: 0;
  z-index: 1;
}

.audit-table td {
  padding: 10px 14px;
  border-bottom: 1px solid #f1f5f9;
  color: #1e293b;
}

.row-weekend {
  background: #fafafa;
  color: #94a3b8;
}

.row-final {
  background: #eff6ff;
  font-weight: 700;
}

.status-chip {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 6px;
  font-size: 11.5px;
  font-weight: 600;
}

.chip-business {
  background: #ecfdf5;
  color: #059669;
}

.chip-weekend {
  background: #f1f5f9;
  color: #64748b;
}

.chip-final {
  background: #0066cc;
  color: #ffffff;
}

/* FAQ SECTION */
.calc-faq-section {
  padding: clamp(60px, 7vw, 84px) 24px;
  background: #fbfbfa;
  border-top: 1px solid #ebebea;
}

.faq-accordion {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.faq-item {
  background: #ffffff;
  border: 1px solid #ebebea;
  border-radius: 12px;
  overflow: hidden;
  transition: border-color 0.2s ease;
}

.faq-item.is-open {
  border-color: #d3d3d0;
}

.faq-question-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 22px;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  font-size: 15.5px;
  font-weight: 600;
  color: #050505;
}

.faq-chevron {
  color: #8b8a86;
  transition: transform 0.2s ease;
  flex-shrink: 0;
  margin-left: 12px;
}

.faq-item.is-open .faq-chevron {
  transform: rotate(180deg);
  color: #0066cc;
}

.faq-answer {
  padding: 0 22px 18px;
  font-size: 14.5px;
  line-height: 1.6;
  color: #5f5e5b;
}

.faq-answer p {
  margin: 0;
}
</style>
