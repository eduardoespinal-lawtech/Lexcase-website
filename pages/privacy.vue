<script setup lang="ts">
const { t, locale } = useI18n()
const localePath = useLocalePath()

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
    'resumen', 'responsable', 'informacion', 'permisos', 'internet',
    'sincronizacion', 'encargados', 'base-legal', 'terceros', 'exportacion',
    'seguridad', 'derechos', 'ninos', 'cambios', 'contacto'
  ]
  const titles = locale.value === 'es'
    ? [
        'Resumen rápido',
        'Quién es responsable',
        'Información que la Aplicación maneja',
        'Permisos del sistema',
        'Conexiones a internet',
        'Sincronización con tu teléfono',
        'Proveedores y transferencias internacionales',
        'Base jurídica del tratamiento',
        'Compartir con terceros',
        'Exportación, importación y borrado',
        'Seguridad',
        'Tus derechos',
        'Niños',
        'Cambios a esta política',
        'Contacto'
      ]
    : [
        'Quick summary',
        'Who is responsible',
        'Information the App handles',
        'System permissions',
        'Internet connections',
        'Sync with your phone',
        'Providers and international transfers',
        'Legal basis for processing',
        'Sharing with third parties',
        'Export, import and deletion',
        'Security',
        'Your rights',
        'Children',
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
            <li>Tus expedientes, clientes, notas, calendario y documentos viven <strong>en tu equipo</strong>, cifrados. Por defecto, nada sale de él.</li>
            <li>La <strong>sincronización con tu teléfono</strong> todavía no está disponible. Cuando lo esté, será opcional (incluida en Lexbell Premium): una copia de esos datos se guardará en nuestro servidor solo para llevarla a tu iPhone, y se borrará al cerrar sesión.</li>
            <li>No hace falta correo, nombre ni contraseña: la cuenta del despacho es <strong>anónima</strong>.</li>
            <li>Lexbell <strong>no rastrea</strong> tu actividad, no vende datos y no usa analíticas ni publicidad.</li>
          </ul>

          <h2 id="responsable">2. Quién es responsable</h2>
          <p>El responsable del tratamiento de los datos que describe esta Política es <strong>Eduardo Espinal</strong>, desarrollador de Lexbell, con domicilio en Santo Domingo, República Dominicana. Puedes escribirnos a <a href="mailto:support@lex-bell.com">support@lex-bell.com</a> para cualquier asunto de privacidad.</p>
          <p>Los datos de tus clientes y de las personas que aparecen en tus expedientes los introduces tú en el ejercicio de tu profesión. Respecto a ellos <strong>tú eres el responsable</strong> y nosotros solo actuamos como <strong>encargado del tratamiento</strong> cuando activas la sincronización, siguiendo tus instrucciones (ver la sección 6 y la cláusula de encargo de los <NuxtLink :to="localePath('terms')">Términos</NuxtLink>).</p>

          <h2 id="informacion">3. Información que la Aplicación maneja</h2>
          <p>Lexbell guarda en tu equipo la información que tú mismo introduces:</p>
          <ul>
            <li><strong>Personas:</strong> nombre, documento de identidad, teléfono, correo, dirección y observaciones de clientes, contrapartes y otros intervinientes.</li>
            <li><strong>Expedientes:</strong> datos del caso según su tipo (judicial, administrativo, migración, empresa, alquiler, compraventa).</li>
            <li><strong>Calendario:</strong> audiencias, plazos, tareas y reuniones que programes.</li>
            <li><strong>Notas:</strong> notas de cada expediente, con sus imágenes y tablas.</li>
            <li><strong>Documentos:</strong> archivos que adjuntas a cada expediente (se copian a tu equipo).</li>
          </ul>
          <p>Todo se guarda en el contenedor privado de la Aplicación (en macOS, <code>~/Library/Containers/com.eduardoespinal.lexbell/</code>; en Windows, la carpeta de datos de la aplicación), <strong>cifrado con AES-256</strong> y con la llave protegida por el llavero del sistema. No sale de tu equipo salvo que exportes una copia o actives la sincronización.</p>

          <h2 id="permisos">4. Permisos del sistema que Lexbell solicita</h2>
          <table>
            <thead>
              <tr><th>Permiso</th><th>Para qué lo usa</th></tr>
            </thead>
            <tbody>
              <tr><td>Carpetas seleccionadas</td><td>Elegir dónde guardar copias de seguridad y documentos exportados.</td></tr>
              <tr><td>Notificaciones</td><td>Avisarte cuando se acercan audiencias o plazos.</td></tr>
              <tr><td>Calendario</td><td>Copiar tus plazos al calendario del sistema, si lo activas en Ajustes.</td></tr>
              <tr><td>Touch ID</td><td>Bloquear la Aplicación con tu huella. La huella nunca sale del equipo: Lexbell solo recibe «sí» o «no».</td></tr>
              <tr><td>Cámara (iPhone)</td><td>Leer el código QR de la clave del despacho. No se toma ninguna foto.</td></tr>
            </tbody>
          </table>
          <p>Todos los permisos son revocables desde los <strong>ajustes de privacidad</strong> de tu sistema operativo.</p>

          <h2 id="internet">5. Conexiones a internet</h2>
          <p>Lexbell funciona <strong>sin conexión</strong> para todas sus funciones de gestión de expedientes. Se conecta a internet solo en dos casos:</p>
          <ul>
            <li>La <strong>suscripción</strong> (activarla o restaurarla), que gestiona la App Store de Apple. Apple cobra; nosotros no recibimos ni procesamos tus datos de pago.</li>
            <li>La <strong>sincronización con tu teléfono</strong>, descrita en la sección siguiente, cuando esté disponible y solo si tú la activas.</li>
          </ul>
          <p>Lexbell no descarga código adicional ni envía informes de uso, errores o telemetría.</p>

          <h2 id="sincronizacion">6. Sincronización con tu teléfono</h2>
          <p><strong>Todavía no está disponible:</strong> la versión actual de la Aplicación no envía ningún dato a ningún servidor. Cuando la ofrezcamos, avisaremos dentro de la Aplicación y funcionará así: será <strong>opcional</strong>, formará parte de Lexbell Premium y no empezará hasta que tú pulses «Generar clave» en Ajustes → Sincronizar. A partir de ahí:</p>
          <ul>
            <li><strong>Qué se sube:</strong> tus expedientes, las personas de cada expediente, las notas, los eventos del calendario y los documentos adjuntos, hasta 7 GB por despacho.</li>
            <li><strong>Con qué cuenta:</strong> una cuenta <strong>anónima</strong>, sin correo, nombre ni contraseña. El despacho se identifica con un código aleatorio y una clave de 20 símbolos que solo tú ves en tu equipo y que introduces o escaneas en tu iPhone.</li>
            <li><strong>Para qué:</strong> únicamente para entregar tus datos a tu teléfono y mantener las dos copias iguales. No leemos, analizamos, perfilamos, vendemos ni usamos esos datos para ningún otro fin. Solo accederíamos a ellos, de forma limitada, para diagnosticar un fallo que tú nos reportes.</li>
            <li><strong>Dónde:</strong> en la base de datos y el almacenamiento que contratamos a Supabase, alojados en centros de datos de Amazon Web Services (ver la sección 7).</li>
            <li><strong>Cuánto tiempo:</strong> mientras la sincronización esté activa. Cuando <strong>cierras sesión</strong> en tu equipo o <strong>generas otra clave</strong>, el despacho entero —datos, archivos y las cuentas de tus aparatos— se borra del servidor de inmediato. El proveedor puede conservar copias de seguridad técnicas durante un breve periodo, tras el cual desaparecen definitivamente.</li>
            <li><strong>Cómo viaja y se guarda:</strong> cifrado en tránsito (TLS) y cifrado en reposo por el proveedor; las reglas del servidor solo permiten a cada aparato ver su propio despacho; la clave tiene límite de intentos.</li>
          </ul>
          <p>Tu equipo sigue siendo la copia completa: si dejas de sincronizar no pierdes nada.</p>

          <h2 id="encargados">7. Proveedores y transferencias internacionales</h2>
          <p>Para prestar la sincronización usamos estos proveedores, que tratan los datos por nuestra cuenta y bajo contrato:</p>
          <table>
            <thead>
              <tr><th>Proveedor</th><th>Qué hace</th><th>Dónde</th></tr>
            </thead>
            <tbody>
              <tr><td>Supabase, Inc.</td><td>Base de datos, autenticación anónima y almacenamiento de archivos.</td><td>Centros de datos de Amazon Web Services en la Unión Europea (Fráncfort, Alemania).</td></tr>
              <tr><td>Apple</td><td>Cobro de la suscripción a través de la App Store, con su propia política de privacidad.</td><td>Según tu país de la App Store.</td></tr>
            </tbody>
          </table>
          <p>Tus datos sincronizados se guardan <strong>dentro de la Unión Europea</strong>. Supabase, Inc. es una empresa estadounidense que puede acceder a ellos de forma limitada para operar el servicio; ese acceso se ampara en las <strong>cláusulas contractuales tipo</strong> aprobadas por la Comisión Europea, incorporadas en su acuerdo de tratamiento de datos, junto con su evaluación de impacto de la transferencia y las medidas técnicas descritas en la sección 6. Puedes pedirnos una copia de esas garantías en <a href="mailto:support@lex-bell.com">support@lex-bell.com</a>.</p>

          <h2 id="base-legal">8. Base jurídica del tratamiento</h2>
          <p>Para quienes se encuentran en la Unión Europea, tratamos datos con estas bases del Reglamento General de Protección de Datos (RGPD):</p>
          <ul>
            <li><strong>Ejecución del contrato</strong> (art. 6.1.b): hacer funcionar la Aplicación y la suscripción que has contratado.</li>
            <li><strong>Tu consentimiento</strong> (art. 6.1.a): la sincronización con tu teléfono, que solo se activa cuando tú generas la clave. Puedes retirarlo en cualquier momento cerrando sesión; entonces se borra todo del servidor.</li>
            <li><strong>Interés legítimo</strong> (art. 6.1.f): la seguridad del servicio, como el límite de intentos al introducir la clave.</li>
          </ul>
          <p>Respecto a los datos de tus clientes, la base jurídica la determinas tú como responsable; nosotros los tratamos exclusivamente por tu cuenta y según tus instrucciones.</p>

          <h2 id="terceros">9. Compartir información con terceros</h2>
          <p>Lexbell <strong>no vende ni cede tus datos</strong>. No tenemos socios publicitarios ni analíticas. Solo los proveedores de la sección 7 tratan datos por nuestra cuenta, y solo en la medida necesaria. Entregaríamos información a una autoridad únicamente si una ley nos obligara a ello.</p>

          <h2 id="exportacion">10. Exportación, importación y borrado</h2>
          <p>La Aplicación te permite:</p>
          <ul>
            <li><strong>Exportar</strong> una copia de seguridad, protegida con contraseña, a la ubicación que elijas.</li>
            <li><strong>Importar</strong> una copia de seguridad previa, restaurando tus datos.</li>
            <li><strong>Borrar</strong> toda la información local en cualquier momento desde Ajustes o eliminando la Aplicación, y toda la copia del servidor cerrando sesión.</li>
          </ul>

          <h2 id="seguridad">11. Seguridad</h2>
          <p>En tu equipo, los datos se guardan cifrados con AES-256, con la llave en el llavero del sistema, y puedes exigir Touch ID para abrir la Aplicación. En el servidor, los datos viajan cifrados, se guardan cifrados y solo tu despacho puede verlos. Para sumar protección, te recomendamos:</p>
          <ul>
            <li>Mantener tus dispositivos actualizados</li>
            <li>Activar el cifrado de disco (FileVault en Mac, BitLocker en Windows)</li>
            <li>Guardar la clave del despacho en un lugar seguro y no compartirla</li>
          </ul>

          <h2 id="derechos">12. Tus derechos</h2>
          <p>Tienes derecho a acceder a tus datos, rectificarlos, suprimirlos, recibirlos en un formato portable, limitar u oponerte a su tratamiento y retirar tu consentimiento. En la práctica:</p>
          <ul>
            <li>Todo lo que hay en tu equipo lo ves, corriges, exportas y borras tú directamente desde la Aplicación, sin pedirnos nada.</li>
            <li>La copia del servidor se borra entera cuando cierras sesión o generas otra clave.</li>
            <li>Para cualquier otra solicitud, escríbenos a <a href="mailto:support@lex-bell.com">support@lex-bell.com</a>. Respondemos en un plazo máximo de un mes.</li>
          </ul>
          <p>Si estás en la Unión Europea y crees que no hemos atendido tus derechos, puedes reclamar ante la autoridad de protección de datos de tu país (en España, la Agencia Española de Protección de Datos).</p>

          <h2 id="ninos">13. Niños</h2>
          <p>Lexbell está dirigida a profesionales del derecho. No está diseñada para personas menores de 16 años y no recolecta deliberadamente información de menores.</p>

          <h2 id="cambios">14. Cambios a esta política</h2>
          <p>Cualquier cambio importante se reflejará actualizando la fecha al inicio del documento y publicando la versión nueva en esta misma URL. Si el cambio afecta a cómo tratamos tus datos sincronizados, te lo avisaremos además dentro de la Aplicación.</p>

          <h2 id="contacto">15. Contacto</h2>
          <p>Si tienes preguntas, dudas o solicitudes sobre privacidad:</p>
          <ul>
            <li><strong>Correo:</strong> <a href="mailto:support@lex-bell.com">support@lex-bell.com</a></li>
            <li><strong>Responsable:</strong> Eduardo Espinal, Santo Domingo, República Dominicana</li>
            <li><strong>Aplicación:</strong> Lexbell para Mac y Windows (y, cuando esté disponible, Lexbell para iPhone)</li>
          </ul>
        </template>

        <!-- ENGLISH -->
        <template v-else>
          <h2 id="resumen">1. Quick summary</h2>
          <ul>
            <li>Your cases, contacts, notes, calendar and documents live <strong>on your device</strong>, encrypted. By default, nothing leaves it.</li>
            <li><strong>Sync with your phone</strong> is not available yet. When it is, it will be optional (part of Lexbell Premium): a copy of that data will be kept on our server only to deliver it to your iPhone, and deleted when you sign out.</li>
            <li>No email, name or password is needed: the firm account is <strong>anonymous</strong>.</li>
            <li>Lexbell <strong>does not track</strong> your activity, does not sell data, and uses no analytics or advertising.</li>
          </ul>

          <h2 id="responsable">2. Who is responsible</h2>
          <p>The data controller for the processing described in this Policy is <strong>Eduardo Espinal</strong>, developer of Lexbell, based in Santo Domingo, Dominican Republic. You can write to <a href="mailto:support@lex-bell.com">support@lex-bell.com</a> about any privacy matter.</p>
          <p>The data about your clients and the people in your cases is entered by you in the course of your profession. For that data <strong>you are the controller</strong>, and we act only as a <strong>processor</strong> when you turn on sync, following your instructions (see section 6 and the processing clause in the <NuxtLink :to="localePath('terms')">Terms</NuxtLink>).</p>

          <h2 id="informacion">3. Information the App handles</h2>
          <p>Lexbell stores on your device the information you enter yourself:</p>
          <ul>
            <li><strong>People:</strong> name, ID number, phone, email, address and notes about clients, opposing parties and other participants.</li>
            <li><strong>Cases:</strong> case data depending on its type (judicial, administrative, immigration, business, rental, real estate sale).</li>
            <li><strong>Calendar:</strong> hearings, deadlines, tasks and meetings you schedule.</li>
            <li><strong>Notes:</strong> notes on each case, with their images and tables.</li>
            <li><strong>Documents:</strong> files you attach to each case (copied to your device).</li>
          </ul>
          <p>Everything is stored in the App's private container (on macOS, <code>~/Library/Containers/com.eduardoespinal.lexbell/</code>; on Windows, the application data folder), <strong>encrypted with AES-256</strong> with the key protected by the system keychain. It does not leave your device unless you export a backup or turn on sync.</p>

          <h2 id="permisos">4. System permissions Lexbell requests</h2>
          <table>
            <thead>
              <tr><th>Permission</th><th>Used for</th></tr>
            </thead>
            <tbody>
              <tr><td>User-selected folders</td><td>Choosing where to save backups and exported documents.</td></tr>
              <tr><td>Notifications</td><td>Alerting you when hearings or deadlines are approaching.</td></tr>
              <tr><td>Calendar</td><td>Copying your deadlines to the system calendar, if you enable it in Settings.</td></tr>
              <tr><td>Touch ID</td><td>Locking the App with your fingerprint. The fingerprint never leaves the device: Lexbell only receives "yes" or "no".</td></tr>
              <tr><td>Camera (iPhone)</td><td>Reading the QR code of the firm key. No photo is taken.</td></tr>
            </tbody>
          </table>
          <p>All permissions can be revoked from your operating system's <strong>privacy settings</strong>.</p>

          <h2 id="internet">5. Internet connections</h2>
          <p>Lexbell works <strong>offline</strong> for all its case-management features. It connects to the internet in only two cases:</p>
          <ul>
            <li>The <strong>subscription</strong> (activating or restoring it), handled by Apple's App Store. Apple bills you; we do not receive or process your payment data.</li>
            <li><strong>Sync with your phone</strong>, described in the next section, once available and only if you turn it on.</li>
          </ul>
          <p>Lexbell does not download additional code and sends no usage reports, crash reports or telemetry.</p>

          <h2 id="sincronizacion">6. Sync with your phone</h2>
          <p><strong>Not available yet:</strong> the current version of the App sends no data to any server. When we offer it, we will announce it inside the App and it will work like this: it will be <strong>optional</strong>, part of Lexbell Premium, and will not start until you press "Generate key" in Settings → Sync. From then on:</p>
          <ul>
            <li><strong>What is uploaded:</strong> your cases, the people in each case, notes, calendar events and attached documents, up to 7 GB per firm.</li>
            <li><strong>Which account:</strong> an <strong>anonymous</strong> account, with no email, name or password. The firm is identified by a random code and a 20-character key that only you see on your computer and that you type or scan on your iPhone.</li>
            <li><strong>Purpose:</strong> solely to deliver your data to your phone and keep both copies identical. We do not read, analyze, profile, sell or use that data for any other purpose. We would access it, in a limited way, only to diagnose a problem you report to us.</li>
            <li><strong>Where:</strong> in the database and file storage we contract from Supabase, hosted in Amazon Web Services data centers (see section 7).</li>
            <li><strong>How long:</strong> for as long as sync is on. When you <strong>sign out</strong> on your computer or <strong>generate a new key</strong>, the whole firm —data, files and the accounts of your devices— is deleted from the server immediately. The provider may keep technical backups for a short period, after which they are gone for good.</li>
            <li><strong>How it travels and is stored:</strong> encrypted in transit (TLS) and encrypted at rest by the provider; server rules let each device see only its own firm; the key has an attempt limit.</li>
          </ul>
          <p>Your computer remains the complete copy: if you stop syncing you lose nothing.</p>

          <h2 id="encargados">7. Providers and international transfers</h2>
          <p>To provide sync we use these providers, which process data on our behalf under contract:</p>
          <table>
            <thead>
              <tr><th>Provider</th><th>What it does</th><th>Where</th></tr>
            </thead>
            <tbody>
              <tr><td>Supabase, Inc.</td><td>Database, anonymous authentication and file storage.</td><td>Amazon Web Services data centers in the European Union (Frankfurt, Germany).</td></tr>
              <tr><td>Apple</td><td>Subscription billing through the App Store, under its own privacy policy.</td><td>Depends on your App Store country.</td></tr>
            </tbody>
          </table>
          <p>Your synced data is stored <strong>within the European Union</strong>. Supabase, Inc. is a US company that may access it in a limited way to operate the service; that access relies on the <strong>Standard Contractual Clauses</strong> approved by the European Commission, incorporated in its data processing agreement, together with its transfer impact assessment and the technical measures described in section 6. You can request a copy of those safeguards at <a href="mailto:support@lex-bell.com">support@lex-bell.com</a>.</p>

          <h2 id="base-legal">8. Legal basis for processing</h2>
          <p>For people in the European Union, we process data on these bases under the General Data Protection Regulation (GDPR):</p>
          <ul>
            <li><strong>Performance of a contract</strong> (Art. 6(1)(b)): running the App and the subscription you purchased.</li>
            <li><strong>Your consent</strong> (Art. 6(1)(a)): sync with your phone, which only starts when you generate the key. You can withdraw it at any time by signing out; everything is then deleted from the server.</li>
            <li><strong>Legitimate interest</strong> (Art. 6(1)(f)): the security of the service, such as the attempt limit when entering the key.</li>
          </ul>
          <p>For your clients' data, you determine the legal basis as controller; we process it exclusively on your behalf and under your instructions.</p>

          <h2 id="terceros">9. Sharing information with third parties</h2>
          <p>Lexbell <strong>does not sell or hand over your data</strong>. We have no advertising partners and no analytics. Only the providers in section 7 process data on our behalf, and only as far as necessary. We would disclose information to an authority only if required by law.</p>

          <h2 id="exportacion">10. Export, import and deletion</h2>
          <p>The App lets you:</p>
          <ul>
            <li><strong>Export</strong> a password-protected backup to a location you choose.</li>
            <li><strong>Import</strong> a previous backup, restoring your data.</li>
            <li><strong>Delete</strong> all local information at any time from Settings or by uninstalling the App, and the entire server copy by signing out.</li>
          </ul>

          <h2 id="seguridad">11. Security</h2>
          <p>On your device, data is stored encrypted with AES-256, with the key in the system keychain, and you can require Touch ID to open the App. On the server, data travels encrypted, is stored encrypted, and only your firm can see it. To add protection, we recommend:</p>
          <ul>
            <li>Keeping your devices up to date</li>
            <li>Enabling full-disk encryption (FileVault on Mac, BitLocker on Windows)</li>
            <li>Keeping the firm key in a safe place and not sharing it</li>
          </ul>

          <h2 id="derechos">12. Your rights</h2>
          <p>You have the right to access your data, correct it, delete it, receive it in a portable format, restrict or object to its processing, and withdraw your consent. In practice:</p>
          <ul>
            <li>Everything on your device is viewed, corrected, exported and deleted by you directly in the App, without asking us.</li>
            <li>The server copy is deleted entirely when you sign out or generate a new key.</li>
            <li>For any other request, write to <a href="mailto:support@lex-bell.com">support@lex-bell.com</a>. We reply within one month at most.</li>
          </ul>
          <p>If you are in the European Union and believe we have not honored your rights, you can lodge a complaint with your country's data protection authority.</p>

          <h2 id="ninos">13. Children</h2>
          <p>Lexbell is intended for legal professionals. It is not designed for individuals under 16 and does not knowingly collect information from minors.</p>

          <h2 id="cambios">14. Changes to this policy</h2>
          <p>Any material change will be reflected by updating the date at the top of the document and publishing the new version at this same URL. If a change affects how we handle your synced data, we will also notify you inside the App.</p>

          <h2 id="contacto">15. Contact</h2>
          <p>If you have questions, concerns or requests regarding privacy:</p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:support@lex-bell.com">support@lex-bell.com</a></li>
            <li><strong>Controller:</strong> Eduardo Espinal, Santo Domingo, Dominican Republic</li>
            <li><strong>App:</strong> Lexbell for Mac and Windows (and, once available, Lexbell for iPhone)</li>
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
