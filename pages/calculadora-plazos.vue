<script setup lang="ts">
const { t, locale } = useI18n()
const localePath = useLocalePath()
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

// Quick preset buttons
const presets = [
  { days: 5, labelEs: '5 días (Urgente / Trámite)', labelEn: '5 days (Urgent / Motion)' },
  { days: 10, labelEs: '10 días (Recurso ordinario)', labelEn: '10 days (Standard appeal)' },
  { days: 15, labelEs: '15 días (Contestación)', labelEn: '15 days (Pleading answer)' },
  { days: 20, labelEs: '20 días (Apelación)', labelEn: '20 days (Formal appeal)' },
  { days: 30, labelEs: '30 días (Casación / Ordinario)', labelEn: '30 days (High court / Extended)' }
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

  // Create date at midnight local time
  const current = new Date(parts[0], parts[1] - 1, parts[2], 12, 0, 0)
  const steps: DayStep[] = []

  let countedDays = 0
  const targetDays = Math.min(Math.max(1, daysCount.value), 365) // Safety cap between 1 and 365

  // Initial notification step (dies a quo)
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
      // Calendar days (every day counts)
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

// SEO Meta & Schema.org
const pageTitle = computed(() =>
  isEn.value
    ? 'Court Deadline Calculator (Business Days) — Free Legal Tech Tool | Lexbell'
    : 'Calculadora de Plazos Procesales en Días Hábiles — Herramienta Gratuita | Lexbell'
)

const pageDesc = computed(() =>
  isEn.value
    ? 'Free interactive court deadline calculator for lawyers. Compute procedural deadlines in business days excluding weekends and judicial holidays with exact expiration dates.'
    : 'Calculadora gratuita de plazos procesales en días hábiles para abogados. Calcula vencimientos judiciales excluyendo fines de semana y festivos con desglose día a día.'
)

useHead(() => ({
  title: pageTitle.value,
  meta: [
    { name: 'description', content: pageDesc.value },
    { property: 'og:title', content: pageTitle.value },
    { property: 'og:description', content: pageDesc.value },
    { name: 'twitter:title', content: pageTitle.value },
    { name: 'twitter:description', content: pageDesc.value }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'WebApplication',
            name: isEn.value ? 'Court Deadline Calculator' : 'Calculadora de Plazos Procesales',
            url: isEn.value ? 'https://lex-bell.com/en/deadline-calculator' : 'https://lex-bell.com/calculadora-plazos',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'All',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD'
            },
            description: pageDesc.value
          },
          {
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: isEn.value ? 'How are court deadlines in business days calculated?' : '¿Cómo se calculan los plazos procesales en días hábiles?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: isEn.value
                    ? 'Court procedural deadlines exclude Saturdays, Sundays, and official legal holidays. Counting typically begins on the next business day following the formal notice date (dies a quo) and ends at court office closing time on the final computed day (dies ad quem).'
                    : 'Los plazos judiciales en días hábiles excluyen sábados, domingos y festivos legales. El cómputo comienza por regla general al día siguiente hábil de la notificación (dies a quo) y concluye al término de la jornada judicial del último día hábil (dies ad quem).'
                }
              },
              {
                '@type': 'Question',
                name: isEn.value ? 'Does the day of notification count toward the deadline?' : '¿El día de la notificación cuenta dentro del plazo procesal?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: isEn.value
                    ? 'Under standard civil and criminal procedural law, the notification date itself is not counted. The clock starts running on the next legal business day.'
                    : 'En la gran mayoría de códigos procesales civiles y penales, el día de la entrega de la notificación no se computa; el plazo comienza a correr al día hábil siguiente.'
                }
              }
            ]
          }
        ]
      })
    }
  ]
}))
</script>

<template>
  <div class="calculator-page">
    <!-- HERO SECTION -->
    <section class="section">
      <div class="apple-wrap text-center">
        <span class="eyebrow">{{ isEn ? 'FREE LEGALTECH TOOL' : 'HERRAMIENTA LEGALTECH GRATUITA' }}</span>
        <h1 class="h-display mt-2" style="text-wrap: balance;">
          {{ isEn ? 'Court Deadline Calculator' : 'Calculadora de Plazos Procesales' }}
        </h1>
        <p class="subtitle mt-4 mx-auto" style="max-width: 720px; text-wrap: pretty;">
          {{ isEn
            ? 'Compute exact court procedural expiration dates in business days excluding weekends and judicial holidays. Fast, precise, and 100% free.'
            : 'Calcula con precisión procesal la fecha exacta de vencimiento judicial excluyendo sábados y domingos. Rápida, exacta y 100% gratuita.'
          }}
        </p>
      </div>
    </section>

    <!-- CALCULATOR APP CARD -->
    <section class="section section-gray">
      <div class="apple-wrap" style="max-width: 840px;">
        <div class="calc-card">
          <!-- INPUT FORM -->
          <div class="form-grid">
            <!-- NOTIFICATION DATE -->
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

            <!-- DAYS COUNT -->
            <div class="form-group">
              <label class="form-label" for="days-count">
                {{ isEn ? 'Procedural Term (Number of Days)' : 'Término Procesal (Número de Días)' }}
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
                {{ isEn ? 'Standard legal term in days.' : 'Duración legal del plazo fijado.' }}
              </span>
            </div>
          </div>

          <!-- PRESETS -->
          <div class="presets-wrap">
            <span class="presets-label">{{ isEn ? 'Quick presets:' : 'Plazos habituales:' }}</span>
            <div class="presets-buttons">
              <button
                v-for="p in presets"
                :key="p.days"
                type="button"
                class="preset-btn"
                :class="{ 'is-active': daysCount === p.days }"
                @click="applyPreset(p.days)"
              >
                {{ isEn ? p.labelEn : p.labelEs }}
              </button>
            </div>
          </div>

          <!-- COMPUTATION SETTINGS -->
          <div class="settings-wrap">
            <div class="radio-group">
              <label class="radio-label">
                <input
                  v-model="computationType"
                  type="radio"
                  value="business"
                  class="radio-input"
                />
                <span class="radio-text">
                  <strong>{{ isEn ? 'Business Days' : 'Días Hábiles Judiciales' }}</strong>
                  <small>{{ isEn ? 'Excludes Saturdays and Sundays' : 'Excluye sábados y domingos' }}</small>
                </span>
              </label>

              <label class="radio-label">
                <input
                  v-model="computationType"
                  type="radio"
                  value="calendar"
                  class="radio-input"
                />
                <span class="radio-text">
                  <strong>{{ isEn ? 'Calendar Days' : 'Días Naturales / Corridos' }}</strong>
                  <small>{{ isEn ? 'Includes all consecutive calendar days' : 'Cuenta todos los días consecutivos' }}</small>
                </span>
              </label>
            </div>

            <label class="checkbox-label mt-4">
              <input
                v-model="startNextDay"
                type="checkbox"
                class="checkbox-input"
              />
              <span class="checkbox-text">
                {{ isEn
                  ? 'Start computation on the next business day (standard civil procedure rule)'
                  : 'El cómputo inicia el día hábil siguiente a la notificación (regla procesal general)'
                }}
              </span>
            </label>
          </div>

          <!-- RESULT BOX -->
          <div v-if="calculation" class="result-box">
            <div class="result-header">
              <span class="result-eyebrow">{{ isEn ? 'FINAL EXPIRATION DATE (DIES AD QUEM)' : 'FECHA DE VENCIMIENTO FINAL (DIES AD QUEM)' }}</span>
              <div class="result-date">
                {{ calculation.expirationDateFormatted }}
              </div>
              <div class="result-metrics">
                <span class="metric-pill">
                  ✓ {{ calculation.countedDays }} {{ isEn ? 'days counted' : 'días computados' }}
                </span>
                <span class="metric-pill metric-sub">
                  🗓️ {{ calculation.totalCalendarDays }} {{ isEn ? 'calendar days elapsed' : 'días naturales transcurridos' }}
                </span>
              </div>
            </div>

            <!-- TOGGLE BREAKDOWN -->
            <div class="breakdown-toggle-wrap">
              <button
                type="button"
                class="breakdown-toggle-btn"
                @click="showBreakdown = !showBreakdown"
              >
                <span>{{ showBreakdown ? (isEn ? 'Hide day-by-day audit trail' : 'Ocultar desglose día a día') : (isEn ? 'View day-by-day audit trail' : 'Ver desglose detallado día a día') }}</span>
                <svg
                  class="chevron"
                  :class="{ 'is-open': showBreakdown }"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
            </div>

            <!-- BREAKDOWN TABLE -->
            <div v-if="showBreakdown" class="breakdown-table-wrap">
              <table class="breakdown-table">
                <thead>
                  <tr>
                    <th>{{ isEn ? 'Date' : 'Fecha' }}</th>
                    <th>{{ isEn ? 'Day' : 'Día' }}</th>
                    <th>{{ isEn ? 'Status' : 'Condición procesal' }}</th>
                    <th class="text-right">{{ isEn ? 'Count' : 'Cómputo' }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(st, idx) in calculation.steps"
                    :key="idx"
                    :class="{ 'row-weekend': st.isWeekend, 'row-final': st.isFinal }"
                  >
                    <td class="font-mono">{{ st.formatted }}</td>
                    <td class="capitalize">{{ st.dayName }}</td>
                    <td>
                      <span v-if="st.isFinal" class="badge-final">
                        ⭐ {{ isEn ? 'Expiration Date' : 'Día de vencimiento' }}
                      </span>
                      <span v-else-if="st.isWeekend" class="badge-weekend">
                        {{ isEn ? 'Weekend (Non-working)' : 'Fin de semana (Inhábil)' }}
                      </span>
                      <span v-else class="badge-business">
                        ✓ {{ isEn ? 'Business day' : 'Día hábil procesal' }}
                      </span>
                    </td>
                    <td class="text-right font-mono font-bold">
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

    <!-- FAQ & EDUCATIONAL SECTION -->
    <section class="section">
      <div class="apple-wrap" style="max-width: 780px;">
        <div class="text-center mb-10">
          <span class="eyebrow">{{ isEn ? 'PROCEDURAL RULES' : 'CRITERIOS PROCESALES' }}</span>
          <h2 class="h-section mt-2">{{ isEn ? 'Frequently Asked Questions about Deadlines' : 'Preguntas sobre Cómputo de Plazos' }}</h2>
        </div>

        <div class="faq-list">
          <div class="faq-card">
            <h3 class="faq-q">
              {{ isEn ? 'How is the computation starting date determined?' : '¿Cómo se determina el inicio del cómputo del plazo?' }}
            </h3>
            <p class="faq-a">
              {{ isEn
                ? 'Under modern civil, administrative, and criminal procedural codes, the date of notification is considered "dies a quo" and is excluded from the calculation. The procedural clock starts ticking on the following legal business day.'
                : 'En la gran mayoría de códigos procesales civiles, penales y contenciosos, el día de la entrega del acto no se cuenta ("dies a quo non computatur in termino"). El plazo formal comienza a correr al día hábil inmediatamente posterior.'
              }}
            </p>
          </div>

          <div class="faq-card">
            <h3 class="faq-q">
              {{ isEn ? 'What happens if the expiration day falls on a non-working day?' : '¿Qué ocurre si el vencimiento cae en un día inhábil?' }}
            </h3>
            <p class="faq-a">
              {{ isEn
                ? 'When a procedural deadline ends on a Saturday, Sunday, or official holiday, it is automatically extended to the next available business day at court secretariat opening hours.'
                : 'Por mandato legal procesal, si el último día de un plazo resulta ser inhábil (sábado, domingo o festivo oficial), el plazo se prorroga automáticamente hasta el primer día hábil siguiente a la hora reglamentaria de secretaría.'
              }}
            </p>
          </div>

          <div class="faq-card">
            <h3 class="faq-q">
              {{ isEn ? 'Can Lexbell track deadlines automatically across all my cases?' : '¿Puede Lexbell controlar todos mis plazos automáticamente?' }}
            </h3>
            <p class="faq-a">
              {{ isEn
                ? 'Yes. Instead of computing dates manually one by one, Lexbell allows you to associate deadlines to each case, automatically calculates business days, and delivers native desktop alerts on your Mac and Windows before any deadline expires.'
                : 'Sí. En lugar de calcular plazos manualmente en cada acto, Lexbell vincula los plazos a cada expediente, calcula los días hábiles en segundo plano y te envía notificaciones nativas en tu Mac y Windows antes de que venza cualquier término judicial.'
              }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CONVERSION CTA -->
    <section class="section section-gray">
      <div class="apple-wrap text-center">
        <h2 class="h-section" style="text-wrap: balance;">
          {{ isEn ? 'Never miss a court deadline again.' : 'No vuelvas a perder un plazo procesal.' }}
        </h2>
        <p class="subtitle mt-3 mb-8 mx-auto" style="max-width: 640px; text-wrap: pretty;">
          {{ isEn
            ? 'Lexbell organizes your court cases, computes procedural deadlines, and safeguards your legal files 100% locally on your Mac and Windows. Free up to 50 active matters.'
            : 'Lexbell organiza tus expedientes, calcula tus plazos y protege tus documentos legales 100% en tu propio ordenador. Gratis hasta 50 expedientes activos.'
          }}
        </p>
        <AppDownload center />
      </div>
    </section>
  </div>
</template>

<style scoped>
.calculator-page {
  padding-bottom: 80px;
}
.calc-card {
  background: #ffffff;
  border: 1px solid var(--border-color, #e5e7eb);
  border-radius: 20px;
  padding: 32px 36px;
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.04);
}
@media (max-width: 640px) {
  .calc-card {
    padding: 24px 20px;
  }
}
.form-grid {
  display: grid;
  gap: 24px;
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
  font-size: 14px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 8px;
}
.form-input {
  width: 100%;
  padding: 12px 16px;
  border: 1.5px solid #d1d5db;
  border-radius: 10px;
  font-size: 15px;
  color: #111827;
  background: #f9fafb;
  transition: all 0.2s ease;
  font-family: inherit;
}
.form-input:focus {
  outline: none;
  border-color: #007aff;
  background: #ffffff;
  box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.15);
}
.form-hint {
  font-size: 12px;
  color: #6b7280;
  margin-top: 6px;
}
.presets-wrap {
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid #f3f4f6;
}
.presets-label {
  font-size: 12.5px;
  font-weight: 600;
  color: #6b7280;
  display: block;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
.presets-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.preset-btn {
  padding: 8px 14px;
  font-size: 13px;
  font-weight: 600;
  border-radius: 8px;
  background: #f3f4f6;
  border: 1px solid #e5e7eb;
  color: #374151;
  cursor: pointer;
  transition: all 0.15s ease;
}
.preset-btn:hover {
  background: #e5e7eb;
  color: #111827;
}
.preset-btn.is-active {
  background: #007aff;
  color: #ffffff;
  border-color: #007aff;
}
.settings-wrap {
  margin-top: 24px;
  padding: 20px;
  background: #f8fafc;
  border-radius: 12px;
  border: 1px solid #edf2f7;
}
.radio-group {
  display: grid;
  gap: 14px;
  grid-template-columns: 1fr;
}
@media (min-width: 640px) {
  .radio-group {
    grid-template-columns: 1fr 1fr;
  }
}
.radio-label {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  cursor: pointer;
}
.radio-input {
  margin-top: 3px;
  accent-color: #007aff;
}
.radio-text {
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: #1e293b;
}
.radio-text small {
  font-size: 12px;
  color: #64748b;
  margin-top: 2px;
}
.checkbox-label {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  cursor: pointer;
}
.checkbox-input {
  margin-top: 3px;
  accent-color: #007aff;
}
.checkbox-text {
  font-size: 13.5px;
  color: #334155;
  font-weight: 500;
}
.result-box {
  margin-top: 28px;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: #ffffff;
  border-radius: 16px;
  padding: 32px 28px;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.15);
}
.result-header {
  text-align: center;
}
.result-eyebrow {
  display: block;
  font-size: 11px;
  letter-spacing: 0.12em;
  font-weight: 700;
  color: #94a3b8;
  text-transform: uppercase;
}
.result-date {
  font-size: clamp(24px, 4vw, 36px);
  font-weight: 800;
  color: #ffffff;
  margin: 12px 0 16px;
  text-transform: capitalize;
  letter-spacing: -0.02em;
}
.result-metrics {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
}
.metric-pill {
  font-size: 12.5px;
  font-weight: 600;
  padding: 6px 14px;
  border-radius: 20px;
  background: rgba(0, 122, 255, 0.25);
  border: 1px solid rgba(0, 122, 255, 0.4);
  color: #60a5fa;
}
.metric-sub {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.15);
  color: #cbd5e1;
}
.breakdown-toggle-wrap {
  margin-top: 24px;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 20px;
}
.breakdown-toggle-btn {
  background: transparent;
  border: none;
  color: #93c5fd;
  font-size: 13.5px;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: color 0.15s ease;
}
.breakdown-toggle-btn:hover {
  color: #bfdbfe;
}
.chevron {
  transition: transform 0.2s ease;
}
.chevron.is-open {
  transform: rotate(180deg);
}
.breakdown-table-wrap {
  margin-top: 20px;
  background: rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  overflow-x: auto;
  max-height: 380px;
  overflow-y: auto;
}
.breakdown-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
  text-align: left;
}
.breakdown-table th {
  padding: 10px 14px;
  background: rgba(255, 255, 255, 0.06);
  color: #94a3b8;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 11px;
  letter-spacing: 0.04em;
  position: sticky;
  top: 0;
  backdrop-filter: blur(8px);
}
.breakdown-table td {
  padding: 10px 14px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}
.row-weekend {
  opacity: 0.6;
  background: rgba(255, 255, 255, 0.02);
}
.row-final {
  background: rgba(0, 122, 255, 0.2);
  font-weight: 700;
}
.badge-business {
  color: #34d399;
  font-size: 12px;
}
.badge-weekend {
  color: #94a3b8;
  font-size: 12px;
}
.badge-final {
  color: #fbbf24;
  font-size: 12px;
  font-weight: 700;
}
.faq-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.faq-card {
  background: #ffffff;
  border: 1px solid var(--border-color, #e5e7eb);
  border-radius: 14px;
  padding: 24px 28px;
}
.faq-q {
  font-size: 16px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 8px;
}
.faq-a {
  font-size: 14.5px;
  line-height: 1.6;
  color: #4b5563;
  margin: 0;
}
</style>
