# Estado Completo de Publicidad y Cuentas — Lexbell

Este documento contiene todo el registro técnico, configuraciones de cuentas, estados de campañas, hallazgos y próximos pasos para la promoción y adquisición de usuarios de **Lexbell**.

---

## 1. Ficha del Producto y Enlaces Oficiales

- **Nombre:** Lexbell: Legal Case Files / Expedientes Legales
- **Desarrollador:** Eduardo Luis Espinal
- **Sitio Web Oficial:** [https://lex-bell.com/](https://lex-bell.com/)
- **Mac App Store:**
  - **ID de la App:** `6791787627`
  - **Bundle ID:** `com.eduardoespinal.lexbell`
  - **Tipo en Apple:** `kind: mac-software` (macOS 12.0 Monterey o superior)
  - **URL Mac App Store:** [https://apps.apple.com/do/app/lexbell-expedientes-legales/id6791787627?mt=12](https://apps.apple.com/do/app/lexbell-expedientes-legales/id6791787627?mt=12)
- **Versión de Windows:** Descarga directa de instalador (.exe) alojado en la web.
- **Páginas de Aterrizaje con Nichos Dinámicos (Deep Links):**
  - General: `https://lex-bell.com/`
  - Abogados: `https://lex-bell.com/?nicho=abogados`
  - Migración: `https://lex-bell.com/?nicho=migracion`
  - Inmobiliarias: `https://lex-bell.com/?nicho=inmobiliario`

---

## 2. Plataformas Publicitarias: Estado de Cuentas

### A. Meta Ads (Facebook & Instagram)
- **ID de Cuenta:** `act=26745028`
- **Nombre de Cuenta:** Lexbell / Eduardo Espinal
- **Pixel de Meta:** `800461587753013`
- **Estado de Campaña:** **Borrador Completo y Listo** en [Meta Ads Manager](https://adsmanager.facebook.com/adsmanager/).
  - **Campaña:** `Lexbell — Clientes Potenciales (Descargas Mac & Windows)` (ID: `52528346061004`)
  - **Conjunto de Anuncios:** `Lexbell — Abogados, Migración e Inmobiliarias` (ID: `52528346060804`)
  - **Anuncio:** `Lexbell — Anuncio Oficial (Mac & Windows)` (ID: `52528346060604`)
  - **Públicos Objetivos:** República Dominicana, Estados Unidos, España, México, Colombia.
  - **Segmentación por Intereses:** Abogados, Derecho Procesal, Litigios, Asesoría de Visas/Migración, Bienes Raíces y Administración de Alquileres.
  - **Acción Pendiente para Publicar:** El usuario únicamente debe ingresar el método de pago en el Administrador Comercial cuando desee encender la pauta.

---

### B. Google Ads (Búsqueda y Conversiones)
- **ID de Cliente:** `570-623-1088` (Lexbell)
- **Correo Administrador:** `eduardoespinaldeaza@gmail.com`
- **Google Analytics 4 (GA4):** Vinculado (`G-RQJXEKR4QR`, Stream ID: `6034119952`).
- **Etiqueta de Conversión Web:** `AW-11517925351` (integrada directamente en el código de Nuxt en producción: `nuxt.config.ts`, `analytics.client.ts`, `useAnalytics.ts`).
- **Eventos Medidos:** Clics en descarga Mac, clics en descarga Windows y formularios de contacto.
- **Estado:** Pestaña abierta en Chrome en el creador de campañas de búsqueda (`https://ads.google.com/aw/campaigns/new`).
- **Acción Pendiente:** Recargar saldo / añadir fondos cuando se decida activar la campaña de búsqueda.

---

### C. Microsoft Advertising (Bing Ads)
- **ID de Cuenta:** `G120DT5G`
- **ID de Cuenta Interno:** `aid=188334259`, `cid=254762546`, `uid=181049384`
- **Correo Administrador:** `eduardoespinaldeaza@gmail.com`
- **Estado:** Cuenta creada bajo modalidad personal. Actualmente en revisión de verificación automática de Microsoft.
- **Acción Pendiente:** Agregar método de pago en [Microsoft Ads Billing](https://ui.ads.microsoft.com/) una vez aprobada la verificación.

---

### D. Apple Ads (Apple Search Ads) — *Hallazgo Técnico Crítico*
- **ID de Cuenta:** `24912490` (Lexbell_ads / Eduardo Luis Espinal)
- **Configuración de Cuenta Realizada:**
  - Se eliminó la razón social empresarial ficticia ("VLS") y se dejó 100% como **Persona Física / Individual** a nombre de `Eduardo Luis Espinal`.
  - Se removió el requerimiento de Tax ID / RNC que causaba el bloqueo.
  - Cuenta asociada con la cuenta de desarrollador de App Store Connect `EDUARDO ESPINAL (ID: 18235468614)`.
- **Limitación Oficial de Apple Descubierta:**
  - **Apple Search Ads no admite apps de la Mac App Store.** Su red de inventario publicitario funciona **exclusivamente en iPhone y iPad**.
  - En la API de Apple Ads y en el creador de campañas (`app-ads.apple.com`), las apps con `"kind": "mac-software"` tienen estado de elegibilidad denegado (`ineligible`).
  - Al buscar `6791787627` o `Lexbell`, Apple muestra `¿No encuentras tu app?`.
  - **Solución futura:** Si en algún momento se compila una versión de Lexbell con soporte para iPadOS / Mac Catalyst en App Store Connect, Apple Ads la habilitará de inmediato para anuncios de búsqueda en el App Store.

---

## 3. Estrategia de Anuncios Recomendada para Retomar

Cuando decidas encender la publicidad, la ruta directa y más rentable es:

1. **Meta Ads (Instagram + Facebook):**
   - **Por qué:** Los abogados, gestores consulares y agentes inmobiliarios están activos diariamente en Instagram y Facebook.
   - **Formato:** Video corto o carrusel mostrando la pantalla de Mac:
     - *Slide 1:* Pantalla de expediente y mapa de conflictos de interés para abogados.
     - *Slide 2:* Módulo de migración con seguimiento de citas consulares, números de caso y A-Number.
     - *Slide 3:* Control de contratos de alquiler y depósitos con cálculo de inflación legal.
   - **Llamado a la acción:** "Descargar gratis para Mac y Windows" -> Enlace a `https://lex-bell.com/`.

2. **Google Ads (Búsqueda Mac & Windows):**
   - **Palabras Clave Exactas:**
     - `[software para abogados mac]`
     - `[sistema de expedientes legales]`
     - `[programa de gestion judicial]`
     - `[software para asesores de migracion]`
     - `[control de casos abogados]`
   - **Segmentación por Dispositivo:** Computadoras de escritorio (macOS y Windows).
   - **Destino:** `https://lex-bell.com/?nicho=abogados` o directamente la ficha de la Mac App Store.

---

## 4. Textos y Creativos Listos para Copiar y Pegar

### Titulares (Headlines):
- **Titular 1:** Lexbell — Software Legal para Mac y PC
- **Titular 2:** Control Total de Casos y Plazos
- **Titular 3:** Tus Expedientes 100% en tu Equipo
- **Titular 4:** Para Abogados, Migración e Inmuebles

### Descripciones:
- **Opción A (Abogados):** "Gestiona casos judiciales, previene conflictos de interés y sincroniza audiencias con Apple Calendar. Descárgalo gratis para Mac y Windows."
- **Opción B (Migración):** "Controla trámites consulares, DS-160, números NVC y citas biométricas sin hojas de cálculo desordenadas."
- **Opción C (Privacidad):** "Tus datos nunca salen de tu computadora. Máxima confidencialidad legal y rapidez nativa."

---

*Archivo generado y guardado para consulta inmediata en futuras sesiones.*
