// Script to notify IndexNow (Bing, Copilot, Perplexity, Naver, Seznam) of all website URLs
const HOST = 'lex-bell.com'
const KEY = 'f6d8924bce714e82b7f03561a0f983de'
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`

const URLS = [
  `https://${HOST}/`,
  `https://${HOST}/en`,
  `https://${HOST}/caracteristicas`,
  `https://${HOST}/en/features`,
  `https://${HOST}/alternativa-clio`,
  `https://${HOST}/en/clio-alternative`,
  `https://${HOST}/blog`,
  `https://${HOST}/en/blog`,
  `https://${HOST}/blog/computo-plazos-procesales-dias-habiles-rd`,
  `https://${HOST}/en/blog/computo-plazos-procesales-dias-habiles-rd`,
  `https://${HOST}/blog/secreto-profesional-abogados-nube-seguridad`,
  `https://${HOST}/en/blog/secreto-profesional-abogados-nube-seguridad`,
  `https://${HOST}/blog/mejores-programas-gestion-expedientes-abogados-2026`,
  `https://${HOST}/en/blog/mejores-programas-gestion-expedientes-abogados-2026`,
  `https://${HOST}/faq`,
  `https://${HOST}/en/faq`,
  `https://${HOST}/soporte`,
  `https://${HOST}/en/support`,
  `https://${HOST}/contacto`,
  `https://${HOST}/en/contact`,
  `https://${HOST}/privacidad`,
  `https://${HOST}/en/privacy`,
  `https://${HOST}/terminos`,
  `https://${HOST}/en/terms`,
  `https://${HOST}/llms.txt`,
  `https://${HOST}/llms-full.txt`
]

async function pingIndexNow() {
  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: URLS
  }

  console.log(`[IndexNow] Pinging api.indexnow.org for ${URLS.length} URLs...`)

  try {
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(payload)
    })

    if (res.ok || res.status === 200 || res.status === 202) {
      console.log(`[IndexNow] Success! Status: ${res.status} (${res.statusText || 'Accepted'})`)
    } else {
      const text = await res.text()
      console.warn(`[IndexNow] Server responded with status ${res.status}:`, text)
    }
  } catch (err) {
    console.error('[IndexNow] Ping failed:', err.message)
  }
}

pingIndexNow()
