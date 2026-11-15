export function useTheme() {
  const theme = useState<'dark' | 'light'>('lexbell-theme', () => 'light')

  const applyTheme = (next: 'dark' | 'light', persist = false) => {
    theme.value = next
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark', next === 'dark')
    }
    if (persist && typeof localStorage !== 'undefined') {
      try {
        localStorage.setItem('lexbell-theme', next)
      } catch {
        // Ignore storage errors in restricted contexts
      }
    }
  }

  const getSystemTheme = (): 'dark' | 'light' => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    return 'light'
  }

  const initTheme = () => {
    let saved: string | null = null
    if (typeof localStorage !== 'undefined') {
      try {
        saved = localStorage.getItem('lexbell-theme')
      } catch {
        saved = null
      }
    }

    if (saved === 'dark' || saved === 'light') {
      applyTheme(saved)
    } else {
      applyTheme(getSystemTheme())
    }

    if (typeof window !== 'undefined' && window.matchMedia) {
      const mq = window.matchMedia('(prefers-color-scheme: dark)')
      mq.addEventListener('change', (e) => {
        try {
          const override = localStorage.getItem('lexbell-theme')
          if (override === 'dark' || override === 'light') return
        } catch {
          // Ignore storage errors
        }
        applyTheme(e.matches ? 'dark' : 'light')
      })
    }
  }

  const toggleTheme = () => {
    applyTheme(theme.value === 'dark' ? 'light' : 'dark', true)
  }

  const isDark = computed(() => theme.value === 'dark')

  return {
    theme,
    isDark,
    initTheme,
    toggleTheme
  }
}
