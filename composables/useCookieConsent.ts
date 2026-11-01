interface CookieConsent {
  essential: boolean
  analytics: boolean
  updatedAt: string
}

const STORAGE_KEY = 'lexbell_cookie_consent'

export const useCookieConsent = () => {
  const consent = useState<CookieConsent | null>('cookie_consent', () => null)
  const isBannerVisible = useState<boolean>('cookie_banner_visible', () => false)
  const isModalOpen = useState<boolean>('cookie_modal_open', () => false)

  const init = () => {
    if (typeof window === 'undefined') return
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        consent.value = JSON.parse(stored)
        isBannerVisible.value = false
      } else {
        consent.value = null
        isBannerVisible.value = true
      }
    } catch {
      consent.value = null
      isBannerVisible.value = true
    }
  }

  const setConsent = (allowAnalytics: boolean) => {
    const data: CookieConsent = {
      essential: true,
      analytics: allowAnalytics,
      updatedAt: new Date().toISOString()
    }
    consent.value = data
    isBannerVisible.value = false
    isModalOpen.value = false

    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
      } catch (e) {
        console.warn('[Cookies] Error guardando consentimiento:', e)
      }

      if (allowAnalytics && (window as any).__initLexbellAnalytics) {
        ;(window as any).__initLexbellAnalytics()
      }
    }
  }

  const acceptAll = () => setConsent(true)
  const rejectOptional = () => setConsent(false)

  const openModal = () => {
    isModalOpen.value = true
  }

  const closeModal = () => {
    isModalOpen.value = false
  }

  return {
    consent,
    isBannerVisible,
    isModalOpen,
    init,
    setConsent,
    acceptAll,
    rejectOptional,
    openModal,
    closeModal
  }
}
