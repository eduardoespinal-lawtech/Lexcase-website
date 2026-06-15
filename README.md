# LexCase Website

Sitio oficial de [LexCase](https://lexcase.com.do) — gestor de expedientes legales para macOS.

Construido con **Nuxt 3** (SSG), **Tailwind CSS** y **@nuxtjs/i18n** (Español / English).

## Setup

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

## Generar sitio estático

```bash
npm run generate
```

La salida queda en `.output/public/`. Ese directorio es lo que se publica en GitHub Pages.

## Despliegue (GitHub Pages)

1. Sube este repositorio a GitHub.
2. En **Settings → Pages**, elige el origen "GitHub Actions".
3. El workflow `.github/workflows/deploy.yml` construye y publica automáticamente con cada push a `main`.
4. El archivo `public/CNAME` ya apunta a `lexcase.com.do`. Configura los registros DNS de tu dominio para que apunten a GitHub Pages:
   - `A`     → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `AAAA`  → `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`
   - O un `CNAME` desde `www` hacia `<usuario>.github.io`.

## Estructura

- `pages/` — rutas (Inicio, Características, Soporte, Contacto, FAQ, Privacidad, Términos)
- `components/` — header, footer, mockups de la app real
- `i18n/locales/` — diccionarios `es.json` y `en.json`
- `server/routes/sitemap.xml.ts` — sitemap con hreflang
- `public/` — favicons, OG image, CNAME, robots.txt, .nojekyll
