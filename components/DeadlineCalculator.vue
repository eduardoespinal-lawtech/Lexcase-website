<script setup lang="ts">
const props = withDefaults(defineProps<{
  defaultCountry?: string
  defaultType?: 'business' | 'francos' | 'calendar'
  eyebrow?: string
  title?: string
  subtitle?: string
  jurisdictionNotes?: Array<{ title: string; body: string }>
  customFaqs?: Array<{ q: string; a: string }>
}>(), {
  defaultCountry: '',
  defaultType: 'business',
  eyebrow: '',
  title: '',
  subtitle: '',
  jurisdictionNotes: () => [],
  customFaqs: () => []
})

const { locale } = useI18n()
const localePath = useLocalePath()
const isEn = computed(() => locale.value === 'en')

const todayIso = new Date().toISOString().slice(0, 10)

const startDate = ref<string>(todayIso)
const daysCount = ref<number>(15)
const computationType = ref<'business' | 'francos' | 'calendar'>(props.defaultType)
const startNextDay = ref<boolean>(true)
const selectedCountry = ref<string>(props.defaultCountry)
const availableCountries = ref<Array<{ code: string; name: string }>>([])
const countryHolidays = ref<Record<string, string>>({})
const loadingHolidays = ref<boolean>(false)
const holidayError = ref<boolean>(false)
const customHolidays = ref<string[]>([])
const newHolidayDate = ref<string>('')
const showBreakdown = ref<boolean>(false)
const copied = ref<boolean>(false)
const openFaq = ref<number | null>(null)

const holidayApiCache = new Map<string, Record<string, string>>()

function toggleFaq(idx: number) {
  openFaq.value = openFaq.value === idx ? null : idx
}

function setToday() {
  startDate.value = new Date().toISOString().slice(0, 10)
}

function addHoliday() {
  const val = newHolidayDate.value
  if (!val || customHolidays.value.includes(val)) return
  customHolidays.value = [...customHolidays.value, val].sort()
  newHolidayDate.value = ''
}

function removeHoliday(iso: string) {
  customHolidays.value = customHolidays.value.filter(d => d !== iso)
}

function formatHolidayChip(iso: string): string {
  const parts = iso.split('-').map(Number)
  if (parts.length !== 3) return iso
  const dt = new Date(parts[0], parts[1] - 1, parts[2], 12, 0, 0)
  return dt.toLocaleDateString(isEn.value ? 'en-US' : 'es', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  })
}

const presets = [
  { days: 5, labelEs: '5d', labelEn: '5d' },
  { days: 10, labelEs: '10d', labelEn: '10d' },
  { days: 15, labelEs: '15d', labelEn: '15d' },
  { days: 20, labelEs: '20d', labelEn: '20d' },
  { days: 30, labelEs: '30d', labelEn: '30d' }
]

function applyPreset(days: number) {
  daysCount.value = days
}

async function fetchCountries() {
  try {
    const res = await fetch('https://date.nager.at/api/v3/AvailableCountries')
    if (!res.ok) return
    const list: Array<{ countryCode: string; name: string }> = await res.json()
    const displayNames =
      typeof Intl !== 'undefined' && Intl.DisplayNames
        ? new Intl.DisplayNames([isEn.value ? 'en' : 'es'], { type: 'region' })
        : null
    availableCountries.value = list
      .map(item => ({
        code: item.countryCode,
        name: displayNames?.of(item.countryCode) || item.name
      }))
      .sort((a, b) => a.name.localeCompare(b.name, isEn.value ? 'en' : 'es'))
  } catch {
    // Graceful fallback
  }
}

async function loadCountryHolidays(countryCode: string, year: number) {
  if (!countryCode) {
    countryHolidays.value = {}
    holidayError.value = false
    return
  }

  loadingHolidays.value = true
  holidayError.value = false
  const years = [year, year + 1]
  const merged: Record<string, string> = {}

  try {
    await Promise.all(
      years.map(async y => {
        const cacheKey = `${countryCode}-${y}`
        if (holidayApiCache.has(cacheKey)) {
          Object.assign(merged, holidayApiCache.get(cacheKey))
          return
        }
        const res = await fetch(`https://date.nager.at/api/v3/PublicHolidays/${y}/${countryCode}`)
        if (!res.ok) throw new Error('Failed to load holidays')
        const items: Array<{ date: string; localName: string; name: string; global?: boolean }> =
          await res.json()
        const yearMap: Record<string, string> = {}
        for (const h of items) {
          if (h.global === false) continue
          yearMap[h.date] = isEn.value ? h.name : (h.localName || h.name)
        }
        holidayApiCache.set(cacheKey, yearMap)
        Object.assign(merged, yearMap)
      })
    )
    countryHolidays.value = merged
  } catch {
    countryHolidays.value = {}
    holidayError.value = true
  } finally {
    loadingHolidays.value = false
  }
}

onMounted(() => {
  fetchCountries()
  if (selectedCountry.value) {
    const year = Number(startDate.value?.slice(0, 4)) || new Date().getFullYear()
    loadCountryHolidays(selectedCountry.value, year)
  }
})

watch(
  [selectedCountry, () => startDate.value?.slice(0, 4)],
  ([country, yearStr]) => {
    const year = Number(yearStr) || new Date().getFullYear()
    loadCountryHolidays(country, year)
  }
)

interface DayStep {
  date: Date
  formatted: string
  dayName: string
  isWeekend: boolean
  holidayName?: string
  isCounted: boolean
  businessDayNumber?: number
  isFinal: boolean
}

const calculation = computed(() => {
  if (!startDate.value || !daysCount.value || daysCount.value <= 0) {
    return null
  }

  const parts = startDate.value.split('-').map(Number)
  if (parts.length !== 3) return null

  const current = new Date(parts[0], parts[1] - 1, parts[2], 12, 0, 0)
  const steps: DayStep[] = []
  const customHolidaySet = new Set(customHolidays.value)
  const apiHolidays = countryHolidays.value

  const getHolidayName = (dt: Date): string | undefined => {
    const pad = (n: number) => String(n).padStart(2, '0')
    const iso = `${dt.getFullYear()}-${pad(dt.getMonth() + 1)}-${pad(dt.getDate())}`
    if (customHolidaySet.has(iso)) return isEn.value ? 'Holiday' : 'Feriado'
    if (selectedCountry.value && apiHolidays[iso]) return apiHolidays[iso]
    return undefined
  }

  const rawDays = Math.min(Math.max(1, daysCount.value), 365)
  const targetDays = computationType.value === 'francos' ? rawDays + 1 : rawDays
  const dayNameLocale = isEn.value ? 'en-US' : 'es'

  if (startNextDay.value || computationType.value === 'francos') {
    current.setDate(current.getDate() + 1)
  }

  let countedDays = 0
  let excludedDays = 0
  let safetyCounter = 0

  while (countedDays < targetDays && safetyCounter < 700) {
    safetyCounter++
    const dayOfWeek = current.getDay()
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6
    const holidayName = getHolidayName(current)
    const isNonWorking = isWeekend || Boolean(holidayName)

    const dayName = current.toLocaleDateString(dayNameLocale, { weekday: 'long' })
    const formatted = current.toLocaleDateString(dayNameLocale, {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    })

    if (computationType.value === 'business') {
      if (!isNonWorking) {
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
        excludedDays++
        steps.push({
          date: new Date(current),
          formatted,
          dayName,
          isWeekend,
          holidayName,
          isCounted: false,
          isFinal: false
        })
      }
    } else if (computationType.value === 'francos') {
      const isTargetReached = countedDays + 1 >= targetDays
      if (isTargetReached && isNonWorking) {
        excludedDays++
        steps.push({
          date: new Date(current),
          formatted,
          dayName,
          isWeekend,
          holidayName,
          isCounted: false,
          isFinal: false
        })
      } else {
        countedDays++
        steps.push({
          date: new Date(current),
          formatted,
          dayName,
          isWeekend,
          holidayName,
          isCounted: true,
          businessDayNumber: countedDays,
          isFinal: countedDays === targetDays
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
  const rawExp = lastStep
    ? lastStep.date.toLocaleDateString(dayNameLocale, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    : ''
  const expirationDateFormatted = rawExp ? rawExp.charAt(0).toUpperCase() + rawExp.slice(1) : ''

  return {
    expirationDateFormatted,
    totalCalendarDays: steps.length,
    countedDays: rawDays,
    excludedDays,
    steps
  }
})

async function copyResult() {
  if (!calculation.value || typeof navigator === 'undefined') return
  const summary = isEn.value
    ? `Expiration date: ${calculation.value.expirationDateFormatted} (${calculation.value.countedDays} days · ${calculation.value.totalCalendarDays} calendar days elapsed)`
    : `Vencimiento: ${calculation.value.expirationDateFormatted} (${calculation.value.countedDays} días · ${calculation.value.totalCalendarDays} días naturales)`
  try {
    await navigator.clipboard.writeText(summary)
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  } catch {
    copied.value = false
  }
}

const defaultFaqs = computed(() => [
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

const faqsToShow = computed(() => (props.customFaqs.length ? props.customFaqs : defaultFaqs.value))

const jurisdictionLinks = computed(() => [
  { route: 'calculadora-plazos-republica-dominicana', label: isEn.value ? 'Dominican Republic' : 'República Dominicana' },
  { route: 'calculadora-plazos-espana', label: isEn.value ? 'Spain' : 'España' },
  { route: 'calculadora-plazos-mexico', label: isEn.value ? 'Mexico' : 'México' },
  { route: 'calculadora-plazos-colombia', label: isEn.value ? 'Colombia' : 'Colombia' },
  { route: 'calculadora-plazos-peru', label: isEn.value ? 'Peru' : 'Perú' }
])
</script>

<template>
  <div class="calculator-page">
    <!-- HERO SECTION -->
    <section class="calc-hero">
      <div class="apple-wrap text-center">
        <span class="eyebrow">{{ eyebrow || (isEn ? 'LEGAL PRACTICE' : 'PRÁCTICA PROCESAL') }}</span>
        <h1 class="calc-title mt-2">
          {{ title || (isEn ? 'Court Deadline Calculator' : 'Cómputo de Plazos Procesales') }}
        </h1>
        <p class="calc-subtitle mt-3 mx-auto">
          {{ subtitle || (isEn
            ? 'Accurately compute procedural expiration dates in business or calendar days.'
            : 'Calcula con rigor el vencimiento exacto de tus términos judiciales en días hábiles o naturales.') }}
        </p>
      </div>
    </section>

    <!-- CALCULATOR APP CARD -->
    <section class="calc-body-section">
      <div class="calc-shell">
        <div class="calc-card">
          <div class="seg-control" role="tablist" :aria-label="isEn ? 'Computation mode' : 'Tipo de cómputo'">
            <button
              type="button"
              role="tab"
              :aria-selected="computationType === 'business'"
              class="seg-btn"
              :class="{ 'is-active': computationType === 'business' }"
              @click="computationType = 'business'"
            >
              {{ isEn ? 'Business days' : 'Días hábiles' }}
            </button>
            <button
              type="button"
              role="tab"
              :aria-selected="computationType === 'francos'"
              class="seg-btn"
              :class="{ 'is-active': computationType === 'francos' }"
              @click="computationType = 'francos'"
            >
              {{ isEn ? 'Clear days' : 'Días francos' }}
            </button>
            <button
              type="button"
              role="tab"
              :aria-selected="computationType === 'calendar'"
              class="seg-btn"
              :class="{ 'is-active': computationType === 'calendar' }"
              @click="computationType = 'calendar'"
            >
              {{ isEn ? 'Calendar days' : 'Días naturales' }}
            </button>
          </div>

          <div class="form-grid">
            <div class="form-group">
              <div class="label-row">
                <label class="form-label" for="start-date">
                  {{ isEn ? 'Notification date' : 'Fecha de notificación' }}
                </label>
                <button type="button" class="today-link" @click="setToday">
                  {{ isEn ? 'Today' : 'Hoy' }}
                </button>
              </div>
              <input id="start-date" v-model="startDate" type="date" class="form-input" />
            </div>

            <div class="form-group">
              <div class="label-row">
                <label class="form-label" for="days-count">
                  {{ isEn ? 'Term (days)' : 'Plazo (días)' }}
                </label>
                <div class="presets-inline">
                  <button
                    v-for="p in presets"
                    :key="p.days"
                    type="button"
                    class="preset-chip"
                    :class="{ 'is-active': daysCount === p.days }"
                    @click="applyPreset(p.days)"
                  >
                    {{ isEn ? p.labelEn : p.labelEs }}
                  </button>
                </div>
              </div>
              <input id="days-count" v-model.number="daysCount" type="number" min="1" max="365" class="form-input" />
            </div>
          </div>

          <div class="rules-stack">
            <label v-if="computationType !== 'francos'" class="checkbox-row">
              <input v-model="startNextDay" type="checkbox" class="checkbox-input" />
              <span class="checkbox-text">
                {{ isEn ? 'Exclude notification date (starts next day)' : 'No contar el día de la notificación (inicia al día siguiente)' }}
              </span>
            </label>

            <div v-if="computationType !== 'calendar'" class="country-holidays-row">
              <label for="country-select" class="checkbox-text">
                {{ isEn ? 'Country holidays (optional):' : 'Feriados oficiales por país (opcional):' }}
              </label>
              <div class="country-select-wrap">
                <select id="country-select" v-model="selectedCountry" class="country-select">
                  <option value="">
                    {{ isEn ? 'None (weekends only)' : 'Ninguno (solo fines de semana)' }}
                  </option>
                  <option v-for="c in availableCountries" :key="c.code" :value="c.code">
                    {{ c.name }}
                  </option>
                </select>
                <span v-if="loadingHolidays" class="holiday-status-note">
                  {{ isEn ? 'Loading…' : 'Cargando…' }}
                </span>
                <span v-else-if="holidayError" class="holiday-status-note is-error">
                  {{ isEn ? 'Unavailable' : 'No disponible' }}
                </span>
              </div>
            </div>

            <div v-if="computationType !== 'calendar'" class="custom-holidays-row">
              <div class="custom-holidays-controls">
                <span class="checkbox-text">
                  {{ isEn ? 'Additional non-working days (optional):' : 'Feriados o asuetos adicionales (opcional):' }}
                </span>
                <div class="holiday-picker-group">
                  <input v-model="newHolidayDate" type="date" class="holiday-date-input" />
                  <button type="button" class="holiday-add-btn" :disabled="!newHolidayDate" @click="addHoliday">
                    + {{ isEn ? 'Add' : 'Agregar' }}
                  </button>
                </div>
              </div>

              <div v-if="customHolidays.length" class="holiday-chips">
                <span v-for="iso in customHolidays" :key="iso" class="holiday-chip">
                  <span>{{ formatHolidayChip(iso) }}</span>
                  <button
                    type="button"
                    class="holiday-chip-remove"
                    :aria-label="isEn ? 'Remove holiday' : 'Quitar feriado'"
                    @click="removeHoliday(iso)"
                  >
                    ×
                  </button>
                </span>
              </div>
            </div>
          </div>

          <div v-if="calculation" class="calc-result">
            <div class="result-header">
              <div>
                <span class="result-label">
                  {{ isEn ? 'Expiration date' : 'Fecha de vencimiento' }}
                </span>
                <div class="result-date">
                  {{ calculation.expirationDateFormatted }}
                </div>
              </div>
              <button type="button" class="copy-btn" @click="copyResult">
                <svg v-if="!copied" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                <svg v-else width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span>{{ copied ? (isEn ? 'Copied' : 'Copiado') : (isEn ? 'Copy' : 'Copiar') }}</span>
              </button>
            </div>

            <div class="result-meta-row">
              <span><strong>{{ calculation.countedDays }}</strong> {{ isEn ? 'term days' : 'días de plazo' }}</span>
              <span class="meta-dot">·</span>
              <span><strong>{{ calculation.totalCalendarDays }}</strong> {{ isEn ? 'calendar days' : 'días naturales' }}</span>
              <template v-if="calculation.excludedDays > 0">
                <span class="meta-dot">·</span>
                <span><strong>{{ calculation.excludedDays }}</strong> {{ isEn ? 'non-working skipped' : 'inhábiles excluidos' }}</span>
              </template>
            </div>

            <div class="breakdown-toggle-container">
              <button type="button" class="breakdown-btn" @click="showBreakdown = !showBreakdown">
                <span>{{ showBreakdown ? (isEn ? 'Hide day-by-day log' : 'Ocultar desglose día a día') : (isEn ? 'View day-by-day log' : 'Ver desglose día a día') }}</span>
                <svg class="chevron-icon" :class="{ 'is-open': showBreakdown }" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>

            <div v-if="showBreakdown" class="audit-table-wrapper">
              <table class="audit-table">
                <thead>
                  <tr>
                    <th>{{ isEn ? 'Date' : 'Fecha' }}</th>
                    <th>{{ isEn ? 'Day' : 'Día' }}</th>
                    <th>{{ isEn ? 'Status' : 'Estado' }}</th>
                    <th class="text-right">#</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(st, idx) in calculation.steps"
                    :key="idx"
                    :class="{ 'row-weekend': !st.isCounted, 'row-final': st.isFinal }"
                  >
                    <td class="font-mono text-[12.5px]">{{ st.formatted }}</td>
                    <td class="capitalize">{{ st.dayName }}</td>
                    <td>
                      <span v-if="st.isFinal" class="status-chip chip-final">{{ isEn ? 'Deadline' : 'Vencimiento' }}</span>
                      <span v-else-if="st.holidayName" class="status-chip chip-weekend">{{ st.holidayName }}</span>
                      <span v-else-if="st.isWeekend && !st.isCounted" class="status-chip chip-weekend">{{ isEn ? 'Weekend' : 'Fin de semana' }}</span>
                      <span v-else class="status-chip chip-business">{{ isEn ? 'Counted' : 'Hábil' }}</span>
                    </td>
                    <td class="text-right font-mono font-semibold">{{ st.businessDayNumber ? st.businessDayNumber : '—' }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- JURISDICTION NOTES (WHEN PRESENT) -->
        <div v-if="jurisdictionNotes.length" class="notes-grid mt-8">
          <div v-for="(note, idx) in jurisdictionNotes" :key="idx" class="note-card">
            <h2 class="note-title">{{ note.title }}</h2>
            <p class="note-body">{{ note.body }}</p>
          </div>
        </div>

        <!-- JURISDICTION LINKS -->
        <div class="jurisdictions-bar mt-8">
          <span class="jurisdictions-label">
            {{ isEn ? 'Calculators by jurisdiction:' : 'Calculadoras por país:' }}
          </span>
          <div class="jurisdictions-links">
            <NuxtLink
              v-for="item in jurisdictionLinks"
              :key="item.route"
              :to="localePath(item.route)"
              class="jurisdiction-link"
            >
              {{ item.label }}
            </NuxtLink>
          </div>
        </div>

        <!-- CTA TO LEXBELL -->
        <div class="calc-cta-box mt-8">
          <h2 class="calc-cta-title">
            {{ isEn ? 'Track all your deadlines automatically in Lexbell' : 'Controla todos tus plazos automáticamente en Lexbell' }}
          </h2>
          <p class="calc-cta-sub">
            {{ isEn
              ? 'Save each deadline directly inside your case files on Mac and Windows with offline native alerts. Free up to 50 cases.'
              : 'Vincula cada plazo a su expediente en Mac y Windows con alertas nativas sin internet. Gratis hasta 50 casos.' }}
          </p>
          <div class="flex justify-center mt-5">
            <AppDownload center />
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ SECTION -->
    <section class="calc-faq-section">
      <div class="apple-wrap max-w-3xl mx-auto">
        <div class="text-center mb-10">
          <span class="eyebrow">{{ isEn ? 'PROCEDURAL CRITERIA' : 'CRITERIOS PROCESALES' }}</span>
          <h2 class="h-section mt-2">{{ isEn ? 'Frequently Asked Questions about Deadlines' : 'Preguntas Frecuentes sobre Plazos' }}</h2>
        </div>

        <div class="faq-accordion">
          <div v-for="(item, idx) in faqsToShow" :key="idx" class="faq-item" :class="{ 'is-open': openFaq === idx }">
            <button type="button" class="faq-question-btn" :aria-expanded="openFaq === idx" @click="toggleFaq(idx)">
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
.calculator-page { background: var(--bg); color: var(--text); }
.calc-hero { padding: clamp(48px, 6vw, 68px) 24px 32px; background: var(--bg); }
.calc-title { font-size: clamp(30px, 3.6vw, 42px); font-weight: 800; letter-spacing: -0.025em; line-height: 1.15; color: var(--text); }
.calc-subtitle { font-size: 16px; line-height: 1.55; color: var(--text-muted); max-width: 600px; }
.calc-body-section { padding: 0 24px clamp(50px, 6vw, 70px); background: var(--bg); }
.calc-shell { max-width: 680px; margin: 0 auto; }
.calc-card { background: var(--card-bg); border: 1px solid var(--border); border-radius: 16px; padding: clamp(20px, 3.5vw, 28px); box-shadow: var(--shadow-card); }
.seg-control { display: grid; grid-template-columns: repeat(3, 1fr); background: var(--bg-elevated); padding: 3px; border-radius: 10px; margin-bottom: 22px; }
.seg-btn { padding: 8px 10px; font-size: 13px; font-weight: 600; color: var(--text-muted); background: transparent; border: none; border-radius: 8px; cursor: pointer; transition: background-color 0.15s ease, color 0.15s ease, box-shadow 0.15s ease; }
.seg-btn.is-active { background: var(--card-bg); color: var(--text); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.14); }
.form-grid { display: grid; gap: 16px; grid-template-columns: 1fr; }
@media (min-width: 560px) { .form-grid { grid-template-columns: 1fr 1fr; } }
.form-group { display: flex; flex-direction: column; }
.label-row { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 6px; min-height: 22px; }
.form-label { font-size: 13px; font-weight: 600; color: var(--text); }
.today-link { background: transparent; border: none; padding: 0; font-size: 12px; font-weight: 600; color: var(--accent); cursor: pointer; }
.today-link:hover { text-decoration: underline; }
.form-input { width: 100%; padding: 10px 12px; border: 1px solid var(--border-dark); border-radius: 9px; font-size: 14px; color: var(--text); background: var(--bg-subtle); font-family: inherit; }
.form-input:focus { outline: none; border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-soft); }
.presets-inline { display: flex; align-items: center; gap: 4px; }
.preset-chip { padding: 2px 7px; font-size: 11.5px; font-weight: 600; border-radius: 6px; background: var(--bg-elevated); border: 1px solid transparent; color: var(--text-muted); cursor: pointer; }
.preset-chip.is-active { background: var(--accent-soft); border-color: var(--accent-border); color: var(--accent); }
.rules-stack { margin-top: 16px; display: flex; flex-direction: column; gap: 8px; }
.checkbox-row { display: flex; align-items: center; gap: 8px; cursor: pointer; }
.checkbox-input { accent-color: var(--accent); }
.checkbox-text { font-size: 13px; color: var(--text-muted); }
.custom-holidays-row { display: flex; flex-direction: column; gap: 8px; }
.country-holidays-row, .custom-holidays-controls { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 8px; }
.country-select-wrap, .holiday-picker-group { display: inline-flex; align-items: center; gap: 8px; }
.country-select, .holiday-date-input { height: 30px; padding: 0 8px; font-size: 12.5px; color: var(--text); background: var(--bg-subtle); border: 1px solid var(--border-dark); border-radius: 7px; outline: none; }
.holiday-status-note { font-size: 11.5px; color: var(--text-light); }
.holiday-status-note.is-error { color: #f59e0b; }
.holiday-add-btn { height: 30px; padding: 0 10px; font-size: 12px; font-weight: 600; color: var(--accent); background: var(--accent-soft); border: 1px solid var(--accent-border); border-radius: 7px; cursor: pointer; }
.holiday-add-btn:disabled { opacity: 0.45; cursor: default; }
.holiday-chips { display: flex; flex-wrap: wrap; gap: 6px; }
.holiday-chip { display: inline-flex; align-items: center; gap: 6px; padding: 3px 8px; font-size: 12px; font-weight: 500; color: var(--text); background: var(--bg-elevated); border: 1px solid var(--border); border-radius: 999px; }
.holiday-chip-remove { border: none; background: transparent; color: var(--icon-color); font-size: 14px; line-height: 1; padding: 0; cursor: pointer; }
.calc-result { margin-top: 24px; padding-top: 22px; border-top: 1px solid var(--border); }
.result-header { display: flex; align-items: flex-start; justify-content: space-between; gap: 16px; }
.result-label { display: block; font-size: 12px; font-weight: 600; color: var(--text-light); margin-bottom: 4px; }
.result-date { font-size: clamp(22px, 3vw, 27px); font-weight: 800; color: var(--text); letter-spacing: -0.02em; line-height: 1.2; }
.copy-btn { flex-shrink: 0; display: inline-flex; align-items: center; gap: 6px; padding: 7px 12px; border-radius: 8px; border: 1px solid var(--border); background: var(--bg-elevated); color: var(--icon-color); font-size: 12.5px; font-weight: 600; cursor: pointer; }
.result-meta-row { display: flex; align-items: center; flex-wrap: wrap; gap: 8px; margin-top: 8px; font-size: 13px; color: var(--text-muted); }
.meta-dot { color: var(--border-dark); }
.breakdown-toggle-container { margin-top: 16px; }
.breakdown-btn { background: transparent; border: none; padding: 0; color: var(--accent); font-size: 13.5px; font-weight: 600; display: inline-flex; align-items: center; gap: 6px; cursor: pointer; }
.chevron-icon { transition: transform 0.2s ease; }
.chevron-icon.is-open { transform: rotate(180deg); }
.audit-table-wrapper { margin-top: 16px; background: var(--bg-subtle); border: 1px solid var(--border); border-radius: 10px; overflow-x: auto; max-height: 380px; overflow-y: auto; }
.audit-table { width: 100%; border-collapse: collapse; font-size: 13px; text-align: left; }
.audit-table th { padding: 10px 14px; background: var(--bg-elevated); color: var(--text-muted); font-weight: 600; font-size: 11px; text-transform: uppercase; letter-spacing: 0.04em; border-bottom: 1px solid var(--border); position: sticky; top: 0; z-index: 1; }
.audit-table td { padding: 10px 14px; border-bottom: 1px solid var(--border); color: var(--text); }
.row-weekend { background: var(--bg); color: var(--text-light); }
.row-final { background: var(--accent-soft); font-weight: 700; }
.status-chip { display: inline-block; padding: 2px 8px; border-radius: 6px; font-size: 11.5px; font-weight: 600; }
.chip-business { background: rgba(16, 185, 129, 0.16); color: #34d399; }
.chip-weekend { background: var(--bg-elevated); color: var(--text-muted); }
.chip-final { background: var(--accent); color: #ffffff; }
.notes-grid { display: grid; gap: 14px; grid-template-columns: 1fr; }
@media (min-width: 600px) { .notes-grid { grid-template-columns: 1fr 1fr; } }
.note-card { background: var(--card-bg); border: 1px solid var(--border); border-radius: 14px; padding: 18px 20px; }
.note-title { font-size: 15px; font-weight: 700; color: var(--text); margin: 0 0 6px; }
.note-body { font-size: 13.5px; line-height: 1.55; color: var(--text-muted); margin: 0; }
.jurisdictions-bar { background: var(--card-bg); border: 1px solid var(--border); border-radius: 14px; padding: 16px 20px; display: flex; flex-direction: column; gap: 10px; }
.jurisdictions-label { font-size: 12.5px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-light); }
.jurisdictions-links { display: flex; flex-wrap: wrap; gap: 8px; }
.jurisdiction-link { font-size: 13px; font-weight: 600; color: var(--accent); background: var(--accent-soft); border: 1px solid var(--accent-border); padding: 5px 12px; border-radius: 999px; text-decoration: none; }
.jurisdiction-link:hover { filter: brightness(1.08); }
.calc-cta-box { background: var(--card-bg); border: 1px solid var(--border); border-radius: 16px; padding: 24px; text-align: center; }
.calc-cta-title { font-size: 18px; font-weight: 700; color: var(--text); margin: 0 0 6px; }
.calc-cta-sub { font-size: 14px; color: var(--text-muted); margin: 0; }
.calc-faq-section { padding: clamp(60px, 7vw, 84px) 24px; background: var(--bg-section); border-top: 1px solid var(--border); }
.faq-accordion { display: flex; flex-direction: column; gap: 10px; }
.faq-item { background: var(--card-bg); border: 1px solid var(--border); border-radius: 12px; overflow: hidden; }
.faq-question-btn { width: 100%; display: flex; align-items: center; justify-content: space-between; padding: 18px 22px; background: transparent; border: none; cursor: pointer; text-align: left; font-size: 15.5px; font-weight: 600; color: var(--text); }
.faq-chevron { color: var(--icon-color); transition: transform 0.2s ease; flex-shrink: 0; margin-left: 12px; }
.faq-item.is-open .faq-chevron { transform: rotate(180deg); color: var(--accent); }
.faq-answer { padding: 0 22px 18px; font-size: 14.5px; line-height: 1.6; color: var(--text-muted); }
.faq-answer p { margin: 0; }
</style>
