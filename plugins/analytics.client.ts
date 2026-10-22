export default defineNuxtPlugin(() => {
  if (typeof window === 'undefined') return

  const config = useRuntimeConfig()
  const googleTagId = (config.public.googleTagId || '').trim()
  const googleAdsId = (config.public.googleAdsId || '').trim()
  const metaPixelId = (config.public.metaPixelId || '').trim()

  // 1. Initialize Google Tag (GA4 / Google Ads)
  if (googleTagId && !document.getElementById('google-tag-script')) {
    const script = document.createElement('script')
    script.id = 'google-tag-script'
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(googleTagId)}`
    document.head.appendChild(script)

    ;(window as any).dataLayer = (window as any).dataLayer || []
    function gtag(..._args: any[]) {
      ;(window as any).dataLayer.push(arguments)
    }
    ;(window as any).gtag = gtag
    gtag('js', new Date())
    gtag('config', googleTagId, {
      send_page_view: true
    })
    if (googleAdsId) {
      gtag('config', googleAdsId)
    }
  }

  // 2. Initialize Meta Pixel (Facebook / Instagram)
  if (metaPixelId && !document.getElementById('meta-pixel-script')) {
    ;(function (f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
      if (f.fbq) return
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
      }
      if (!f._fbq) f._fbq = n
      n.push = n
      n.loaded = !0
      n.version = '2.0'
      n.queue = []
      t = b.createElement(e)
      t.async = !0
      t.id = 'meta-pixel-script'
      t.src = v
      s = b.getElementsByTagName(e)[0]
      s.parentNode.insertBefore(t, s)
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js')

    if ((window as any).fbq) {
      ;(window as any).fbq('init', metaPixelId)
      ;(window as any).fbq('track', 'PageView')
    }
  }
})
