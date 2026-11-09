// Static sitemap for GitHub Pages — prerendered at build time
// Routes are kept in sync with nuxt.config.ts i18n.pages configuration
// Note: All directory routes use trailing slashes because GitHub Pages serves static folders
import { defineEventHandler } from 'h3'

const BASE = 'https://lex-bell.com'
const today = new Date().toISOString().slice(0, 10)

type Entry = { es: string; en: string; priority: string }

const entries: Entry[] = [
  { es: '/',                                                        en: '/en/',                                                       priority: '1.0' },
  { es: '/soluciones/',                                             en: '/en/solutions/',                                             priority: '0.9' },
  { es: '/precios/',                                                en: '/en/pricing/',                                               priority: '0.9' },
  { es: '/caracteristicas/',                                        en: '/en/features/',                                              priority: '0.9' },
  { es: '/calculadora-plazos/',                                     en: '/en/deadline-calculator/',                                   priority: '0.9' },
  { es: '/alternativa-clio/',                                       en: '/en/clio-alternative/',                                      priority: '0.9' },
  { es: '/blog/',                                                   en: '/en/blog/',                                                  priority: '0.85' },
  { es: '/blog/computo-plazos-procesales-dias-habiles-rd/',         en: '/en/blog/computo-plazos-procesales-dias-habiles-rd/',         priority: '0.8' },
  { es: '/blog/secreto-profesional-abogados-nube-seguridad/',       en: '/en/blog/secreto-profesional-abogados-nube-seguridad/',       priority: '0.8' },
  { es: '/blog/mejores-programas-gestion-expedientes-abogados-2026/', en: '/en/blog/mejores-programas-gestion-expedientes-abogados-2026/', priority: '0.8' },
  { es: '/soporte/',                                                en: '/en/support/',                                               priority: '0.7' },
  { es: '/contacto/',                                               en: '/en/contact/',                                               priority: '0.7' },
  { es: '/faq/',                                                    en: '/en/faq/',                                                   priority: '0.7' },
  { es: '/privacidad/',                                             en: '/en/privacy/',                                               priority: '0.5' },
  { es: '/terminos/',                                               en: '/en/terms/',                                                 priority: '0.5' },
  { es: '/politica-cookies/',                                       en: '/en/cookie-policy/',                                         priority: '0.5' }
]

export default defineEventHandler((event) => {
  event.node.res.setHeader('Content-Type', 'application/xml; charset=utf-8')

  const urls = entries.flatMap((e) => {
    const locEs = `${BASE}${e.es}`
    const locEn = `${BASE}${e.en}`
    const altEs = `<xhtml:link rel="alternate" hreflang="es" href="${locEs}"/>`
    const altEn = `<xhtml:link rel="alternate" hreflang="en" href="${locEn}"/>`
    const altDefault = `<xhtml:link rel="alternate" hreflang="x-default" href="${locEs}"/>`
    return [
      `<url>
        <loc>${locEs}</loc>
        <lastmod>${today}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>${e.priority}</priority>
        ${altEs}
        ${altEn}
        ${altDefault}
      </url>`,
      `<url>
        <loc>${locEn}</loc>
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
