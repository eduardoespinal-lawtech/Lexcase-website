// Static sitemap for GitHub Pages — prerendered at build time
// Routes are kept in sync with nuxt.config.ts i18n.pages configuration
import { defineEventHandler } from 'h3'

const BASE = 'https://lexcase.com.do'
const today = new Date().toISOString().slice(0, 10)

type Entry = { es: string; en: string; priority: string }

const entries: Entry[] = [
  { es: '/',              en: '/en',          priority: '1.0' },
  { es: '/caracteristicas', en: '/en/features', priority: '0.9' },
  { es: '/soporte',       en: '/en/support',  priority: '0.7' },
  { es: '/contacto',      en: '/en/contact',  priority: '0.7' },
  { es: '/faq',           en: '/en/faq',      priority: '0.7' },
  { es: '/privacidad',    en: '/en/privacy',  priority: '0.5' },
  { es: '/terminos',      en: '/en/terms',    priority: '0.5' }
]

export default defineEventHandler((event) => {
  event.node.res.setHeader('Content-Type', 'application/xml; charset=utf-8')

  const urls = entries.flatMap((e) => {
    const altEs = `<xhtml:link rel="alternate" hreflang="es" href="${BASE}${e.es}"/>`
    const altEn = `<xhtml:link rel="alternate" hreflang="en" href="${BASE}${e.en}"/>`
    const altDefault = `<xhtml:link rel="alternate" hreflang="x-default" href="${BASE}${e.es}"/>`
    return [
      `<url>
        <loc>${BASE}${e.es}</loc>
        <lastmod>${today}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>${e.priority}</priority>
        ${altEs}
        ${altEn}
        ${altDefault}
      </url>`,
      `<url>
        <loc>${BASE}${e.en}</loc>
        <lastmod>${today}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>${e.priority}</priority>
        ${altEs}
        ${altEn}
        ${altDefault}
      </url>`
    ]
  })

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>`
})
