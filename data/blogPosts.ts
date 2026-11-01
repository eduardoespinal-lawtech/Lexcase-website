export interface BlogPost {
  slug: string
  title: string
  description: string
  category: string
  date: string
  readTime: string
  author: {
    name: string
    role: string
    avatar?: string
  }
  keywords: string[]
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'computo-plazos-procesales-dias-habiles-rd',
    title: 'Cómputo de plazos procesales en días hábiles: Guía práctica para abogados y litigantes',
    description: 'Aprende las reglas fundamentales para el cómputo de plazos procesales, diferencias entre términos francos y hábiles, feriados judiciales y cómo automatizar alertas para blindar tu despacho contra la caducidad.',
    category: 'Práctica Procesal',
    date: '2026-10-28',
    readTime: '6 min de lectura',
    author: {
      name: 'Equipo Legal de Lexbell',
      role: 'Especialistas en Derecho Procesal y LegalTech'
    },
    keywords: [
      'cómputo plazos procesales',
      'días hábiles derecho procesal',
      'plazos francos no francos',
      'caducidad instancia',
      'calendario judicial',
      'términos procesales república dominicana'
    ],
    content: `
      <p class="lead">Uno de los mayores temores de cualquier abogado litigante es la inadmisibilidad o caducidad procesal por error en el cómputo de un término. En el ejercicio diario, calcular si un plazo es franco, si vence en día inhábil o cómo computar los feriados judiciales puede ser la diferencia entre salvar o perder un caso crucial.</p>

      <h2>1. Reglas fundamentales del cómputo procesal: Dies a quo y Dies ad quem</h2>
      <p>La regla general universal del derecho procesal, consagrada en la mayoría de los códigos procesales civiles y doctrinas de tradición continental (incluyendo el artículo 1033 del Código de Procedimiento Civil), establece que en el cómputo de los plazos determinados por días:</p>
      <ul>
        <li><strong>Dies a quo:</strong> El día en que se notifica el acto o resolución procesal no se cuenta dentro del plazo. El cómputo inicia formalmente a las 00:00 horas del día siguiente.</li>
        <li><strong>Dies ad quem:</strong> Es el día final en que expira la oportunidad procesal para interponer la demanda, recurso o escrito de conclusiones.</li>
      </ul>

      <h2>2. Plazos Francos vs. Plazos No Francos: La distinción crítica</h2>
      <p>El error más recurrente en los estrados judiciales ocurre al confundir un plazo ordinario (no franco) con un <strong>plazo franco</strong>:</p>
      <ul>
        <li><strong>Plazo Ordinario (No Franco):</strong> No se cuenta el día de la notificación (dies a quo), pero sí se cuenta el día del vencimiento (dies ad quem). Por ejemplo, en un plazo de 3 días notificado un lunes, vencería el jueves a la medianoche.</li>
        <li><strong>Plazo Franco:</strong> Por disposición expresa de la ley procesal, no se cuenta ni el día del acto que da origen al plazo ni el día de la expiración. Esto significa que al término legal siempre se le suman dos días enteros adicionales de gracia (uno al inicio y otro al final). Es común en recursos de apelación y oposiciones civiles.</li>
      </ul>

      <div class="callout-box">
        <strong>Regla de oro:</strong> Si la ley no califica expresamente un término como "franco", el plazo debe interpretarse y computarse conforme a la regla ordinaria. Nunca asumas que un plazo es franco sin constatar el texto literal de la norma procesal aplicable a tu jurisdicción.
      </div>

      <h2>3. Días hábiles y la prórroga por día feriado o inhábil</h2>
      <p>¿Qué sucede cuando el último día del plazo cae en sábado, domingo o día de fiesta nacional? En prácticamente todas las legislaciones procesales modernas rige el principio de prórroga automática:</p>
      <p>Si el día del vencimiento es legalmente no laborable para los tribunales de justicia, el término se prorroga ipso jure hasta el primer día hábil siguiente a la hora habitual de cierre de secretaría.</p>
      <p>Sin embargo, ten presente las siguientes particularidades:</p>
      <ul>
        <li><strong>Plazos en horas:</strong> Rigen de momento a momento y generalmente no admiten interrupciones ni prórrogas por días feriados (frecuentes en materia de medidas cautelares urgentes o habeas corpus).</li>
        <li><strong>Feriados decretados imprevistos:</strong> Huelgas judiciales o decretos presidenciales de última hora obligan a verificar las resoluciones de la Suprema Corte de Justicia sobre suspensión formal de plazos para ese día específico.</li>
      </ul>

      <h2>4. Errores habituales que ponen en riesgo la vigencia de tus expedientes</h2>
      <ol>
        <li><strong>Confiar en la memoria o agendas de papel:</strong> Anotar plazos en agendas físicas o cuadernos dispersos impide recibir recordatorios oportunos cuando estás fuera de la oficina o en audiencia.</li>
        <li><strong>Calendarios genéricos sin lógica legal:</strong> Herramientas como Google Calendar no entienden de plazos francos ni feriados judiciales; solo marcan eventos puntuales sin avisos de preparación previa.</li>
        <li><strong>No calcular el tiempo de redacción y visado:</strong> Recordar que un plazo vence "mañana" no deja margen para redactar un recurso de casación riguroso ni recopilar anexos notariados.</li>
      </ol>

      <h2>5. Cómo automatizar tus plazos procesales con Lexbell</h2>
      <p>En <strong>Lexbell</strong> diseñamos un módulo de <strong>Agenda y Plazos Procesales</strong> pensado específicamente por y para litigantes:</p>
      <ul>
        <li><strong>Alertas preventivas inteligentes:</strong> Configura avisos con 15 días, 7 días, 48 horas y la mañana del vencimiento, integrados directamente a las notificaciones nativas de tu Mac o Windows.</li>
        <li><strong>Vínculo directo con el expediente:</strong> Cada plazo está asociado al número de caso, tribunal, cliente y documentos relevantes, permitiéndote abrir la pieza con un solo clic.</li>
        <li><strong>100% Local y Privado:</strong> Tus fechas, audiencias y estrategias no se comparten con servidores de terceros; viven bajo tu custodia y con total confidencialidad.</li>
      </ul>
    `
  },
  {
    slug: 'secreto-profesional-abogados-nube-seguridad',
    title: 'El secreto profesional en la era digital: Por qué la nube pone en riesgo la confidencialidad de tu bufete',
    description: 'El deber de confidencialidad del abogado frente a las brechas de seguridad en plataformas cloud. Descubre por qué la arquitectura Local-First es el nuevo estándar deontológico para despachos jurídicos modernos.',
    category: 'Seguridad & Deontología',
    date: '2026-10-25',
    readTime: '7 min de lectura',
    author: {
      name: 'Equipo Legal de Lexbell',
      role: 'Especialistas en Derecho Procesal y LegalTech'
    },
    keywords: [
      'secreto profesional abogados',
      'seguridad expedientes legales',
      'software legal local first',
      'privacidad clientes bufete',
      'cloud vs local abogados',
      'deontología jurídica seguridad'
    ],
    content: `
      <p class="lead">El secreto profesional no es solo un privilegio: es la obligación deontológica angular de la abogacía. Todo cliente deposita en su defensor información financiera sensible, secretos de familia, fórmulas corporativas y detalles que jamás confiaría a nadie más. Sin embargo, en la carrera por digitalizar los bufetes, miles de profesionales han entregado inadvertidamente esos datos a servidores en la nube sin medir las consecuencias jurídicas.</p>

      <h2>1. La naturaleza jurídica del secreto profesional en el mundo digital</h2>
      <p>Tanto en el derecho penal como en los códigos de ética de los Colegios de Abogados de Iberoamérica, la revelación del secreto profesional acarrea sanciones disciplinarias, inhabilitación y responsabilidad civil por daños y perjuicios.</p>
      <p>Cuando un bufete contrata un software de gestión basado exclusivamente en la nube (SaaS), se produce una <strong>cesión de custodia</strong> de los datos a una corporación tecnológica. La pregunta que todo socio director debe formularse es:</p>
      <blockquote>¿Quién tiene realmente la llave de acceso a las declaraciones confidenciales, contratos no públicos y notas procesales de tus clientes?</blockquote>

      <h2>2. Los tres riesgos ocultos del modelo Cloud para un despacho jurídico</h2>

      <h3>A. Jurisdicción y extraterritorialidad normativa</h3>
      <p>La inmensa mayoría de las plataformas web alojan sus bases de datos en centros de datos ubicados en Estados Unidos o la Unión Europea. Esto somete los expedientes de tu bufete a normativas foráneas como el <strong>US CLOUD Act</strong>, que faculta a tribunales extranjeros a solicitar a los proveedores de la nube el acceso a los datos almacenados, sin notificar necesariamente al titular del despacho.</p>

      <h3>B. Ataques de cadena de suministro (Supply Chain Attacks)</h3>
      <p>Un bufete pequeño o mediano puede tener buenos estándares internos de seguridad, pero si el proveedor SaaS del software legal sufre una brecha, los datos de miles de despachos quedan expuestos en masa en la Dark Web. Los ciberdelincuentes no buscan atacar a tu firma en particular; buscan atacar al proveedor que concentra la información de cientos de firmas.</p>

      <h3>C. Pérdida de control por caídas de servicio o cancelaciones</h3>
      <p>Si la plataforma sufre una caída imprevista durante una mañana en la que debes comparecer a audiencia preliminar, quedas completamente incomunicado de tus notas del caso. Asimismo, si decides cambiar de proveedor, muchos servicios imponen formatos cerrados o tarifas exorbitantes para exportar tus archivos históricos.</p>

      <div class="callout-box">
        <strong>El veredicto técnico:</strong> Para información ultraconfidencial de litigios penales, arbitrajes internacionales, derecho de familia o fusiones corporativas, el almacenamiento centralizado en la nube de terceros representa un riesgo desproporcionado respecto a sus beneficios.
      </div>

      <h2>3. La revolución 'Local-First': Máxima tecnología con soberanía absoluta</h2>
      <p>Frente a las limitaciones de la nube, ha surgido una arquitectura de software superior: <strong>Local-First</strong> (primero lo local). En esta filosofía:</p>
      <ul>
        <li><strong>Los datos residen en tu máquina:</strong> La base de datos (SQLite de grado industrial con cifrado de alto estándar) se guarda íntegramente en el disco duro de tu computadora.</li>
        <li><strong>Velocidad instantánea:</strong> La búsqueda de expedientes, clientes y notas se ejecuta a la velocidad de tu procesador (Apple Silicon o Intel/AMD), sin latencia de red ni pantallas de carga.</li>
        <li><strong>Operación 100% offline:</strong> Puedes trabajar en aviones, tribunales sin señal Wi-Fi o zonas rurales con la misma eficiencia que en tu despacho.</li>
        <li><strong>Copias de seguridad bajo tu control:</strong> Realiza respaldos cifrados con un clic hacia una memoria USB, Time Machine o tu almacenamiento personal seguro.</li>
      </ul>

      <h2>4. El compromiso inquebrantable de Lexbell con la confidencialidad</h2>
      <p>Lexbell nació precisamente para subsanar esta vulnerabilidad deontológica. Diseñamos una aplicación de escritorio nativa para <strong>macOS</strong> y <strong>Windows</strong> con un principio rector claro:</p>
      <p><em>Nosotros no vemos tus datos, no los recopilamos en nuestros servidores, no entrenamos inteligencias artificiales con tus documentos y no podemos ser obligados a revelar lo que no poseemos.</em></p>
      <p>Tus casos, documentos, clientes y notas procesales permanecen donde siempre debieron estar: en tus manos y bajo tu custodia profesional.</p>
    `
  },
  {
    slug: 'mejores-programas-gestion-expedientes-abogados-2026',
    title: 'Mejores programas de gestión de expedientes para abogados en Mac y Windows en 2026',
    description: 'Comparativa exhaustiva de software de gestión legal para despachos jurídicos en 2026. Analizamos privacidad, velocidad, prevención de conflictos, compatibilidad y coste total.',
    category: 'Tecnología Legal',
    date: '2026-10-20',
    readTime: '8 min de lectura',
    author: {
      name: 'Equipo Legal de Lexbell',
      role: 'Especialistas en Derecho Procesal y LegalTech'
    },
    keywords: [
      'mejor software para abogados',
      'programa gestión expedientes despacho',
      'software jurídico mac y windows',
      'alternativas software legal',
      'gestión despachos abogados 2026',
      'lexbell vs saas legal'
    ],
    content: `
      <p class="lead">La digitalización de un despacho de abogados ya no es un lujo tecnológico; es un imperativo de supervivencia profesional. Sin embargo, muchos profesionales se encuentran atrapados entre dos extremos indeseables: el caos de hojas de Excel desactualizadas o la trampa de plataformas web complejas con mensualidades abusivas que nunca llegan a amortizarse.</p>

      <h2>1. Criterios para evaluar un software de gestión jurídica en 2026</h2>
      <p>Antes de contratar o instalar cualquier herramienta, un abogado o socio de despacho debe exigir el cumplimiento de 5 pilares básicos:</p>
      <ol>
        <li><strong>Curva de aprendizaje inmediata:</strong> Si necesitas un curso de 10 horas para registrar un caso y anotar una audiencia, el equipo abandonará el programa en menos de un mes.</li>
        <li><strong>Privacidad y secreto profesional:</strong> ¿Dónde se almacenan los expedientes de tus clientes? ¿Tienes la certeza de que no están expuestos a ciberataques en la nube?</li>
        <li><strong>Detección de conflictos de interés:</strong> La capacidad de comprobar si un nuevo cliente o contraparte guarda vínculo con expedientes anteriores de tu bufete.</li>
        <li><strong>Rendimiento sin internet:</strong> Posibilidad de consultar y redactar notas de juicio en audiencias o desplazamientos sin depender de la señal móvil.</li>
        <li><strong>Modelo de precio transparente:</strong> Evitar contratos forzosos con cargos por usuario que encarecen el presupuesto anual.</li>
      </ol>

      <h2>2. Análisis de las soluciones del mercado</h2>

      <h3>A. Hojas de Cálculo (Excel / Google Sheets)</h3>
      <p><strong>Lo bueno:</strong> No requiere costo adicional y casi todos los colaboradores saben escribir en una celda.</p>
      <p><strong>Lo malo:</strong> Carece de avisos de plazos procesales, no indexa documentos, es muy propensa a borrados accidentales de fórmulas y se vuelve inmanejable cuando el bufete supera los 30 expedientes activos.</p>

      <h3>B. Suites Cloud Tradicionales (Clio, Sudespacho, BaseNet)</h3>
      <p><strong>Lo bueno:</strong> Módulos muy completos pensados para firmas corporativas de decenas de abogados.</p>
      <p><strong>Lo malo:</strong> Precios que oscilan entre 40 y 100 dólares mensuales <em>por cada usuario</em>, interfaces lentas cargadas de opciones innecesarias y almacenamiento en servidores ajenos que compromete la soberanía de los datos.</p>

      <h3>C. Herramientas de productividad general (Notion, Obsidian, Trello)</h3>
      <p><strong>Lo bueno:</strong> Gran capacidad de personalización visual.</p>
      <p><strong>Lo malo:</strong> Requieren configurar manualmente bases de datos relacionales complejas, carecen de lógica procesal nativa y no ofrecen integración especializada para el cálculo de términos jurídicos.</p>

      <h3>D. Lexbell: La solución nativa Local-First</h3>
      <p><strong>Lo bueno:</strong> Aplicación de escritorio nativa para Mac y Windows. Extremadamente fluida, 100% privada y cifrada en tu máquina, con <strong>Mapa de Vínculos</strong> interactivo para prevenir conflictos de interés, agenda procesal integrada y descarga oficial verificada en la Mac App Store y Microsoft Store.</p>
      <p><strong>Lo malo:</strong> Requiere descargar la aplicación en tu computadora de trabajo en lugar de acceder mediante un navegador web genérico.</p>

      <h2>3. Tabla comparativa directa</h2>

      <div class="compare-table-wrap my-6">
        <table class="compare-table">
          <thead>
            <tr>
              <th>Característica</th>
              <th class="lexbell-col">Lexbell</th>
              <th>Plataformas Cloud (SaaS)</th>
              <th>Excel / Hojas de Cálculo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Privacidad de los datos</strong></td>
              <td class="lexbell-col">100% Local y cifrado en tu disco</td>
              <td>En servidores de terceros</td>
              <td>Local o nube compartida</td>
            </tr>
            <tr>
              <td><strong>Disponibilidad sin conexión</strong></td>
              <td class="lexbell-col">Ininterrumpida (Offline nativo)</td>
              <td>Limitada o nula</td>
              <td>Parcial</td>
            </tr>
            <tr>
              <td><strong>Mapa de vínculos y conflictos</strong></td>
              <td class="lexbell-col">Integrado y visual</td>
              <td>Solo en planes Enterprise muy costosos</td>
              <td>No disponible</td>
            </tr>
            <tr>
              <td><strong>Velocidad y fluidez</strong></td>
              <td class="lexbell-col">Instantánea (Cero latencia)</td>
              <td>Depende de la conexión web</td>
              <td>Media</td>
            </tr>
            <tr>
              <td><strong>Plan de entrada gratuito</strong></td>
              <td class="lexbell-col">Hasta 50 expedientes sin tarjeta</td>
              <td>Pruebas de solo 7 o 14 días</td>
              <td>Incluido en suite ofimática</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>4. Conclusión: ¿Cuál elegir para tu bufete?</h2>
      <p>Si lideras una firma con cientos de integrantes repartidos en múltiples países que requieren facturación corporativa masiva, un SaaS Enterprise tradicional puede tener sentido a pesar de sus altos costos y riesgos de privacidad.</p>
      <p>Sin embargo, para el abogado litigante individual, asesores legales, notarías y despachos boutique que valoran la <strong>discreción profesional, la rapidez de respuesta y el control absoluto de sus casos</strong>, <strong>Lexbell</strong> representa la opción más equilibrada, moderna y segura del mercado actual.</p>
    `
  }
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts
}
