export const useAnalytics = () => {
  const config = useRuntimeConfig()

  const trackDownload = (platform: 'apple' | 'microsoft') => {
    const storeName = platform === 'apple' ? 'Mac App Store' : 'Microsoft Store'
    const storeUrl = platform === 'apple'
      ? config.public.appleStoreUrl
      : config.public.microsoftStoreUrl

    // 1. Google Analytics / Google Ads event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      try {
        ;(window as any).gtag('event', 'download_click', {
          event_category: 'engagement',
          event_label: storeName,
          platform: platform,
          destination: storeUrl,
          value: 1
        })
        // Standard Ads conversion trigger if conversion label exists
        ;(window as any).gtag('event', 'conversion', {
          send_to: config.public.googleTagId,
          event_category: 'download',
          platform: platform
        })
      } catch (err) {
        console.warn('[Analytics] Google Tag error:', err)
      }
    }

    // 2. Meta Pixel (Facebook & Instagram Ads)
    if (typeof window !== 'undefined' && (window as any).fbq) {
      try {
        ;(window as any).fbq('track', 'Lead', {
          content_name: `Lexbell_${storeName}`,
          content_category: 'Software Download',
          platform: platform
        })
        ;(window as any).fbq('trackCustom', 'StoreDownloadClick', {
          store: storeName,
          platform: platform
        })
      } catch (err) {
        console.warn('[Analytics] Meta Pixel error:', err)
      }
    }

    // 3. Fallback dev logging
    if (process.dev) {
      console.log(`[Analytics] Tracked download click for: ${storeName} (${platform})`, {
        storeUrl,
        hasGtag: typeof window !== 'undefined' && !!(window as any).gtag,
        hasFbq: typeof window !== 'undefined' && !!(window as any).fbq
      })
    }
  }

  return {
    trackDownload
  }
}
