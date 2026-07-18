<script setup lang="ts">
const { t, locale } = useI18n()

definePageMeta({ name: 'privacy' })

useHead(() => ({
  title: `${t('privacy.title')} — Lexbell`,
  meta: [{ name: 'description', content: t('privacy.intro') }]
}))

/* Índice de secciones. Los IDs (slugs) son neutros y comunes a ES/EN para
   que los enlaces directos (#contacto, #seguridad, etc.) sirvan en los
   dos idiomas. Los títulos se traducen según el locale. */
const sections = computed(() => {
  const ids = [
    'resumen', 'informacion', 'permisos', 'internet', 'terceros',
    'exportacion', 'seguridad', 'sincronizacion', 'ninos',
    'derechos', 'cambios', 'contacto'
  ]
  const titles = locale.value === 'es'
    ? [
        'Resumen rápido',
        'Información que la Aplicación maneja',
        'Permisos del sistema',
        'Conexiones a internet',
        'Compartir con terceros',
        'Exportación e importación',
        'Seguridad',
        'Sincronización futura',
        'Niños',
        'Tus derechos',
        'Cambios a esta política',
        'Contacto'
      ]
    : [
        'Quick summary',
        'Information the App handles',
        'System permissions',
        'Internet connections',
        'Sharing with third parties',
        'Data export and import',
        'Security',
        'Future sync services',
        'Children',
        'Your rights',
        'Changes to this policy',
        'Contact'
      ]
  return ids.map((id, i) => ({ id, title: titles[i], n: i + 1 }))
})

const activeSection = ref('resumen')

onMounted(() => {
  if (typeof IntersectionObserver === 'undefined') return
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries.filter(e => e.isIntersecting)
      if (visible.length) {
        // Toma el más cercano al inicio del viewport
        visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        activeSection.value = (visible[0].target as HTMLElement).id
      }
    },
    { rootMargin: '-30% 0px -55% 0px', threshold: 0 }
  )
  document.querySelectorAll('.privacy-content h2[id]').forEach(el => observer.observe(el))
})
</script>

<template>
  <!-- Hero -->
  <section class="section">
    <div class="apple-wrap text-center">
      <span class="eyebrow">Legal</span>
      <h1 class="h-page mt-2">{{ t('privacy.title') }}</h1>
      <p class="mt-4 text-smoke text-[13px] uppercase tracking-widest font-semibold">{{ t('privacy.updated') }}</p>
      <p class="subtitle mt-7 mx-auto" style="max-width: 720px;">{{ t('privacy.intro') }}</p>
    </div>
  </section>

  <!-- TOC + content -->
  <section class="section-tight section-gray">
    <div class="apple-wrap-wide privacy-layout">
      <!-- Sticky sidebar -->
      <aside class="privacy-toc">
        <p class="privacy-toc-label">{{ locale === 'es' ? 'En este documento' : 'In this document' }}</p>
        <nav aria-label="Table of contents">
          <ol class="privacy-toc-list">
            <li v-for="s in sections" :key="s.id">
              <a
                :href="`#${s.id}`"
                class="privacy-toc-link"
                :class="activeSection === s.id ? 'is-active' : ''"
              >
                <span class="privacy-toc-num">{{ s.n }}</span>
                <span class="privacy-toc-text">{{ s.title }}</span>
              </a>
            </li>
          </ol>
        </nav>
      </aside>

      <!-- Content -->
      <article class="privacy-content prose-legal">
        <!-- ESPAÑOL -->
        <template v-if="locale === 'es'">
          <h2 id="resumen">1. Resumen rápido</h2>
          <ul>
            <li>Lexbell <strong>no recolecta</strong> información personal en servidores nuestros.</li>
            <li>Toda la información de tus expedientes, clientes, notas, calendario y finanzas vive <strong>exclusivamente en tu Mac</strong>.</li>
            <li>Lexbell <strong>no rastrea</strong> tu actividad ni comparte datos con terceros.</li>
            <li>Lexbell <strong>no usa</strong> Google Analytics, Mixpanel, Sentry, Firebase ni servicios de telemetría.</li>
          </ul>

          <h2 id="informacion">2. Información que la Aplicación maneja</h2>
          <p>Lexbell almacena localmente en tu Mac la siguiente información que tú mismo introduces:</p>
          <ul>
            <li><strong>Clientes:</strong> nombre, cédula, teléfono, correo, dirección, observaciones.</li>
            <li><strong>Expedientes:</strong> datos del caso según su tipo (judicial, administrativo, migración, empresa, alquiler, compraventa).</li>
            <li><strong>Calendario:</strong> audiencias, plazos, tareas, reuniones que programes.</li>
            <li><strong>Notas:</strong> notas adjuntas a expedientes.</li>
            <li><strong>Finanzas:</strong> honorarios, gastos y transacciones de cada expediente.</li>
          </ul>
          <p>Toda esta información se guarda en el contenedor de datos privado de la Aplicación en tu Mac (<code>~/Library/Containers/com.eduardoespinal.lexbell/</code>) y nunca sale de tu dispositivo a menos que tú decidas exportarla.</p>

          <h2 id="permisos">3. Permisos del sistema que Lexbell solicita</h2>
          <table>
            <thead>
              <tr><th>Permiso</th><th>Para qué lo usa</th></tr>
            </thead>
            <tbody>
              <tr><td>Calendario</td><td>Sincronizar audiencias y plazos con el Calendario nativo de macOS, si tú decides activarlo.</td></tr>
              <tr><td>Contactos</td><td>Importar contactos desde la libreta de direcciones de macOS, si tú lo solicitas.</td></tr>
              <tr><td>Carpetas seleccionadas</td><td>Permitirte elegir una carpeta donde la Aplicación guarda copias de respaldo automáticas.</td></tr>
              <tr><td>Notificaciones</td><td>Avisarte cuando se acercan audiencias o plazos.</td></tr>
              <tr><td>Conexión a internet</td><td>Consultar la tasa de cambio del Banco Central de la República Dominicana (BCRD) para la sección de Finanzas.</td></tr>
            </tbody>
          </table>
          <p>Todos los permisos son revocables desde <strong>Configuración del Sistema → Privacidad y seguridad</strong> de macOS.</p>

          <h2 id="internet">4. Conexiones a internet</h2>
          <p>Lexbell realiza una sola consulta a internet, y es opcional:</p>
          <ul>
            <li><strong>Banco Central de la República Dominicana (BCRD):</strong> la Aplicación consulta <code>https://www.bancentral.gov.do/</code> para obtener la tasa de cambio del día y convertir montos en USD/EUR a DOP en la sección de Finanzas. Esta consulta no envía información tuya — solo solicita la tasa pública.</li>
          </ul>
          <p>Lexbell NO se comunica con servidores nuestros, NO sube tus datos a ninguna nube y NO descarga código adicional.</p>

          <h2 id="terceros">5. Compartir información con terceros</h2>
          <p>Lexbell <strong>no comparte ninguna información tuya con terceros</strong>. No vendemos datos. No tenemos socios publicitarios. No incrustamos analíticas.</p>

          <h2 id="exportacion">6. Exportación e importación de datos</h2>
          <p>La Aplicación te permite:</p>
          <ul>
            <li><strong>Exportar</strong> una copia de seguridad en formato JSON a la ubicación que tú elijas en tu Mac.</li>
            <li><strong>Importar</strong> una copia de seguridad previa, restaurando tus datos.</li>
            <li><strong>Borrar</strong> toda la información local en cualquier momento desde la Configuración o eliminando la Aplicación.</li>
          </ul>

          <h2 id="seguridad">7. Seguridad</h2>
          <p>Tus datos viven en el contenedor sandbox de la Aplicación en tu propia Mac, protegidos por las medidas de seguridad nativas de macOS. Para sumar protección, te recomendamos:</p>
          <ul>
            <li>Mantener tu Mac actualizada</li>
            <li>Activar FileVault (cifrado completo del disco)</li>
            <li>Usar una contraseña fuerte en tu cuenta de usuario</li>
          </ul>

          <h2 id="sincronizacion">8. Servicios futuros de sincronización</h2>
          <p>Estamos evaluando ofrecer en el futuro un <strong>servicio opcional</strong> de sincronización cifrada extremo a extremo entre varias Macs (y eventualmente Windows) del mismo usuario. Si lo lanzamos, será siempre <strong>opcional</strong>, activado por ti, claramente comunicado y descrito en esta Política antes de habilitarse. Mientras tanto, Lexbell sigue siendo 100% local.</p>

          <h2 id="ninos">9. Niños</h2>
          <p>Lexbell está dirigida a profesionales del derecho. No está diseñada para personas menores de 13 años y no recolecta deliberadamente información de menores.</p>

          <h2 id="derechos">10. Tus derechos</h2>
          <p>Como toda la información vive en tu Mac, tú tienes el control total: puedes acceder, modificar, exportar o eliminar tus datos en cualquier momento desde la propia Aplicación, sin pedirnos permiso ni esperar respuesta.</p>

          <h2 id="cambios">11. Cambios a esta política</h2>
          <p>Cualquier cambio importante a esta política se reflejará actualizando la fecha al inicio del documento y publicando la versión nueva en esta misma URL. Te recomendamos revisarla periódicamente.</p>

          <h2 id="contacto">12. Contacto</h2>
          <p>Si tienes preguntas, dudas o solicitudes sobre privacidad:</p>
          <ul>
            <li><strong>Correo:</strong> <a href="mailto:soporte@lex-bell.com">soporte@lex-bell.com</a></li>
            <li><strong>Desarrollador:</strong> ICLVS Legal Intelligence LLC</li>
            <li><strong>Aplicación:</strong> Lexbell para macOS</li>
          </ul>
        </template>

        <!-- ENGLISH -->
        <template v-else>
          <h2 id="resumen">1. Quick summary</h2>
          <ul>
            <li>Lexbell <strong>does not collect</strong> personal information on our servers.</li>
            <li>All information about your cases, contacts, notes, calendar and finances lives <strong>exclusively on your Mac</strong>.</li>
            <li>Lexbell <strong>does not track</strong> your activity or share data with third parties.</li>
            <li>Lexbell <strong>does not use</strong> Google Analytics, Mixpanel, Sentry, Firebase or any telemetry service.</li>
          </ul>

          <h2 id="informacion">2. Information the App handles</h2>
          <p>Lexbell stores locally on your Mac the following information you enter yourself:</p>
          <ul>
            <li><strong>Contacts:</strong> name, ID number, phone, email, address, notes.</li>
            <li><strong>Cases:</strong> case data depending on its type (judicial, administrative, immigration, business, rental, real estate sale).</li>
            <li><strong>Calendar:</strong> hearings, deadlines, tasks and meetings you schedule.</li>
            <li><strong>Notes:</strong> notes attached to cases.</li>
            <li><strong>Finances:</strong> fees, expenses and transactions per case.</li>
          </ul>
          <p>All this information is stored in the App's private data container on your Mac (<code>~/Library/Containers/com.eduardoespinal.lexbell/</code>) and never leaves your device unless you choose to export it.</p>

          <h2 id="permisos">3. System permissions Lexbell requests</h2>
          <table>
            <thead>
              <tr><th>Permission</th><th>Used for</th></tr>
            </thead>
            <tbody>
              <tr><td>Calendar</td><td>Sync hearings and deadlines with macOS Calendar, if you choose to enable it.</td></tr>
              <tr><td>Contacts</td><td>Import contacts from macOS Address Book, on your request.</td></tr>
              <tr><td>User-selected folders</td><td>Let you choose a folder where the App writes automatic backups.</td></tr>
              <tr><td>Notifications</td><td>Alert you when hearings or deadlines are approaching.</td></tr>
              <tr><td>Internet access</td><td>Query the Central Bank of the Dominican Republic (BCRD) exchange rate for the Finances section.</td></tr>
            </tbody>
          </table>
          <p>All permissions can be revoked from <strong>System Settings → Privacy &amp; Security</strong> on macOS.</p>

          <h2 id="internet">4. Internet connections</h2>
          <p>Lexbell makes one optional internet request:</p>
          <ul>
            <li><strong>Central Bank of the Dominican Republic (BCRD):</strong> the App queries <code>https://www.bancentral.gov.do/</code> to fetch the daily exchange rate and convert USD/EUR amounts to DOP in the Finances section. This request does not send any of your information — it only retrieves a public rate.</li>
          </ul>
          <p>Lexbell does NOT communicate with our servers, does NOT upload your data to any cloud, and does NOT download additional code.</p>

          <h2 id="terceros">5. Sharing information with third parties</h2>
          <p>Lexbell <strong>does not share any of your information with third parties</strong>. We do not sell data. We have no advertising partners. We embed no analytics.</p>

          <h2 id="exportacion">6. Data export and import</h2>
          <p>The App lets you:</p>
          <ul>
            <li><strong>Export</strong> a backup in JSON format to a location you choose on your Mac.</li>
            <li><strong>Import</strong> a previous backup, restoring your data.</li>
            <li><strong>Delete</strong> all local information at any time from Settings or by uninstalling the App.</li>
          </ul>

          <h2 id="seguridad">7. Security</h2>
          <p>Your data lives in the App's sandbox container on your Mac, protected by macOS' native security measures. To add protection, we recommend:</p>
          <ul>
            <li>Keeping your Mac up to date</li>
            <li>Enabling FileVault (full-disk encryption)</li>
            <li>Using a strong password on your user account</li>
          </ul>

          <h2 id="sincronizacion">8. Future sync services</h2>
          <p>We are evaluating an <strong>optional</strong> end-to-end encrypted sync service across multiple Macs (and eventually Windows) of the same user. If we launch it, it will be strictly opt-in, clearly communicated, and documented in this Policy before being enabled. Until then, Lexbell remains 100% local.</p>

          <h2 id="ninos">9. Children</h2>
          <p>Lexbell is intended for legal professionals. It is not designed for individuals under 13 and does not knowingly collect information from minors.</p>

          <h2 id="derechos">10. Your rights</h2>
          <p>Because all data lives on your Mac, you are in full control: you can access, modify, export or delete your data at any time from within the App, without asking us or waiting for a response.</p>

          <h2 id="cambios">11. Changes to this policy</h2>
          <p>Any material change to this policy will be reflected by updating the date at the top of the document and publishing the new version at this same URL. We recommend reviewing it periodically.</p>

          <h2 id="contacto">12. Contact</h2>
          <p>If you have questions, concerns or requests regarding privacy:</p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:soporte@lex-bell.com">soporte@lex-bell.com</a></li>
            <li><strong>Developer:</strong> ICLVS Legal Intelligence LLC</li>
            <li><strong>App:</strong> Lexbell for macOS</li>
          </ul>
        </template>
      </article>
    </div>
  </section>
</template>

<style scoped>
.privacy-layout {
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 56px;
  align-items: start;
}
@media (max-width: 960px) {
  .privacy-layout { grid-template-columns: 1fr; gap: 24px; }
}

/* === Sticky TOC === */
.privacy-toc {
  position: sticky;
  top: 72px;
}
@media (max-width: 960px) {
  .privacy-toc {
    position: static;
    background: #fff;
    border-radius: 14px;
    padding: 20px 22px;
  }
}
.privacy-toc-label {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #6e6e73;
  margin: 0 0 14px;
}
.privacy-toc-list {
  list-style: none;
  margin: 0;
  padding: 0;
  border-left: 1px solid rgba(0, 0, 0, 0.08);
}
.privacy-toc-link {
  display: grid;
  grid-template-columns: 22px 1fr;
  gap: 10px;
  align-items: baseline;
  padding: 9px 0 9px 14px;
  font-size: 13px;
  line-height: 1.4;
  color: #6e6e73;
  text-decoration: none;
  border-left: 2px solid transparent;
  margin-left: -1px;
  transition: color .15s ease, border-color .15s ease;
}
.privacy-toc-link:hover {
  color: #1d1d1f;
}
.privacy-toc-link.is-active {
  color: #1d1d1f;
  border-left-color: var(--accent);
  font-weight: 500;
}
.privacy-toc-num {
  font-size: 11px;
  font-weight: 500;
  color: #a1a1a6;
  font-variant-numeric: tabular-nums;
}
.privacy-toc-link.is-active .privacy-toc-num {
  color: var(--accent);
}

/* === Content card === */
.privacy-content {
  background: #fff;
  border-radius: 22px;
  padding: 48px 56px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
}
@media (max-width: 600px) {
  .privacy-content { padding: 28px 22px; border-radius: 16px; }
}
.privacy-content h2 {
  scroll-margin-top: 80px;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  padding-top: 2.2rem;
}
.privacy-content h2:first-child {
  border-top: 0;
  padding-top: 0;
  margin-top: 0;
}
</style>
