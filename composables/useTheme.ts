export function useTheme() {
  const theme = useState<'dark' | 'light'>('lexbell-theme', () => 'dark')

  const applyTheme = (next: 'dark' | 'light') => {
    theme.value = next
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark', next === 'dark')
    }
    if (typeof localStorage !== 'undefined') {
      try {
        localStorage.setItem('lexbell-theme', next)
      } catch {
        // Ignore storage errors in restricted contexts
      }
    }
  }

  const initTheme = () => {
    if (typeof localStorage !== 'undefined') {
      try {
        const saved = localStorage.getItem('lexbell-theme')
        applyTheme(saved === 'light' ? 'light' : 'dark')
        return
      } catch {
        // Fallback to dark
      }
    }
    applyTheme('dark')
  }

  const toggleTheme = () => {
    applyTheme(theme.value === 'dark' ? 'light' : 'dark')
  }

  const isDark = computed(() => theme.value === 'dark')

  return {
    theme,
    isDark,
    initTheme,
    toggleTheme
  }
}
