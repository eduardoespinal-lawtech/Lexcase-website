# Documento de Actualización para la Web de Lexbell (lex-bell.com)

Este documento contiene todos los textos promocionales, explicativos y las claves de traducción (**i18n**) listos para actualizar el sitio web oficial de Lexbell con las nuevas características:
1. **Conectores MCP (Inteligencia Artificial local en 1 clic)**: Claude Desktop, Cursor, Google Antigravity y OpenAI Codex.
2. **Compartir en oficina (Red local)**: Colaboración en tiempo real entre equipos en la misma oficina sin nube.
3. **Incorporación a Lexbell Premium**: Acceso dentro del plan de suscripción y prueba gratuita de 15 días.
4. **Centro de Ayuda y Comentarios**: Soporte directo, preguntas frecuentes, términos y licencias.

---

## 1. Textos para la Página de Inicio (`index.vue` / Hero & Novedades)

### 🇪🇸 Español
- **Etiqueta (Badge / Eyebrow):** `NUEVO EN LEXBELL`
- **Titular Principal (H1 / H2):**  
  **Conecta tu despacho con la Inteligencia Artificial y colabora en red local**
- **Subtítulo:**  
  Lexbell ahora integra conectores en un clic con los principales asistentes de IA (*Claude Desktop, Cursor, Antigravity y Codex*) mediante el protocolo MCP, y te permite compartir expedientes en tiempo real con tu equipo de oficina sin subir nada a la nube.
- **Llamado a la acción (CTA):**  
  `Descargar gratis · 15 días de prueba Pro`

---

### 🇬🇧 English (`/en`)
- **Badge / Eyebrow:** `NEW IN LEXBELL`
- **Main Headline:**  
  **Power your legal practice with local AI & collaborate on your office network**
- **Subtitle:**  
  Lexbell now connects in one click with leading AI assistants (*Claude Desktop, Cursor, Antigravity, and Codex*) through the Model Context Protocol, and enables real-time case sharing across your office local network without cloud servers.
- **Call to Action (CTA):**  
  `Download free · 15-day Pro trial`

---

## 2. Textos para la Sección de Características (`features.vue`)

### Bloque A: Conectores MCP (IA en tu equipo)
#### 🇪🇸 Español
- **Subtítulo:** `INTELIGENCIA ARTIFICIAL LOCAL`
- **Título:** `Conectores MCP: Tu práctica jurídica potenciada por IA`
- **Descripción:**  
  Conecta Lexbell directamente con tus asistentes y agentes de inteligencia artificial en un solo clic: **Google Antigravity**, **Claude Desktop**, **Cursor** y **OpenAI Codex**.
- **Puntos destacados:**
  1. **Acceso contextual seguro:** Permite a tu asistente consultar expedientes, partes, plazos y notas para resumir autos o preparar escritos.
  2. **100% Privado y Local:** Funciona mediante un servidor MCP en tu propio ordenador en modo *solo lectura*. Ningún dato procesal ni confidencial se transfiere a nubes externas ni entrena modelos ajenos.
  3. **Configuración sin código:** Activa los conectores con un solo interruptor; Lexbell configura los archivos de tu asistente automáticamente.

#### 🇬🇧 English
- **Eyebrow:** `LOCAL ARTIFICIAL INTELLIGENCE`
- **Title:** `MCP Connectors: Your law practice powered by local AI`
- **Description:**  
  Seamlessly link Lexbell to your favorite AI assistants in a single click: **Google Antigravity**, **Claude Desktop**, **Cursor**, and **OpenAI Codex**.
- **Bullet Points:**
  1. **Secure contextual access:** Let your AI assistant read case context, deadlines, and notes to summarize orders or draft filings.
  2. **100% Private & Local:** Powered by a local *read-only* MCP server on your machine. Client data never leaves your device or trains third-party models.
  3. **Zero-config setup:** Toggle connectors on with one switch; Lexbell configures client settings automatically.

---

### Bloque B: Compartir en oficina (Red local en tiempo real)
#### 🇪🇸 Español
- **Subtítulo:** `COLABORACIÓN SIN NUBE`
- **Título:** `Compartir en oficina: Trabajo en equipo dentro de tu red local`
- **Descripción:**  
  Trabaja en tiempo real con los demás abogados y colaboradores de tu despacho a través de la red local de la oficina (Wi-Fi o cable).
- **Puntos destacados:**
  1. **Sincronización instantánea:** Crea o actualiza expedientes, eventos y notas desde un equipo y los demás lo verán de inmediato.
  2. **Protección con PIN:** Conexión protegida mediante código de seguridad de 6 dígitos generado por el equipo anfitrión.
  3. **Secreto profesional garantizado:** Toda la comunicación ocurre exclusivamente dentro de tu red física, sin intermediarios ni servidores en internet.

#### 🇬🇧 English
- **Eyebrow:** `COLLABORATION WITHOUT CLOUD`
- **Title:** `Share in Office: Teamwork across your local network`
- **Description:**  
  Collaborate in real time with colleagues and staff across your firm over your office's local network (Wi-Fi or Ethernet).
- **Bullet Points:**
  1. **Instant synchronization:** Create or update cases, calendar events, and notes from one machine and others see it right away.
  2. **PIN-protected pairing:** Secure 6-digit PIN pairing ensures only authorized workstations connect.
  3. **Strict attorney-client privilege:** All data stays within your local network perimeter, completely insulated from internet servers.

---

## 3. Actualización de Lexbell Premium (`pricing.vue`)

### 🇪🇸 Español
Añadir a la lista de beneficios incluidos en **Lexbell Premium**:
- **Compartir en oficina:** Sincronización y trabajo colaborativo en tiempo real en la red local del despacho.
- **Conectores MCP (IA):** Integración nativa en 1 clic con Google Antigravity, Claude Desktop, Cursor y OpenAI Codex.

### 🇬🇧 English
Add to the **Lexbell Premium** feature checklist:
- **Share in Office:** Real-time synchronization and team collaboration over your local office network.
- **MCP AI Connectors:** 1-click native integration with Google Antigravity, Claude Desktop, Cursor, and OpenAI Codex.

---

## 4. Preguntas Frecuentes Nuevas (`faq.vue`)

### 🇪🇸 Español

**P: ¿Qué son los Conectores MCP de Lexbell y cómo funcionan?**  
**R:** El *Model Context Protocol* (MCP) es un estándar abierto desarrollado para que los asistentes de inteligencia artificial (como Claude, Cursor, Antigravity o Codex) puedan comunicarse de forma estructurada con aplicaciones de escritorio. Lexbell incorpora un servidor MCP local de solo lectura en tu equipo, lo que permite a tu asistente de IA responder preguntas sobre tus casos, redactar resúmenes o verificar fechas límite sin que tus expedientes salgan a ningún servidor en la nube.

**P: ¿Cómo funciona «Compartir en oficina» sin internet ni servidores en la nube?**  
**R:** Un equipo de tu despacho actúa como anfitrión local en tu red de Wi-Fi o cable Ethernet y genera un PIN de seguridad. Los demás ordenadores de la oficina se conectan directamente a través de la red local. Toda la sincronización viaja de máquina a máquina dentro de tu oficina sin pasar jamás por internet.

---

### 🇬🇧 English

**Q: What are Lexbell MCP Connectors and how do they work?**  
**A:** The *Model Context Protocol* (MCP) is an open industry standard that allows AI assistants (such as Claude, Cursor, Antigravity, or Codex) to securely query desktop software. Lexbell runs a local, read-only MCP server directly on your computer, enabling your AI assistant to answer questions about cases, draft summaries, or check court terms without uploading your client data to any cloud service.

**Q: How does «Share in Office» work without cloud servers or internet?**  
**A:** One computer in your office acts as a local host over Wi-Fi or Ethernet and displays a 6-digit security PIN. Other office computers discover and pair with it directly over the local network. All case updates travel machine-to-machine within your physical office, completely private from the internet.

---

## 5. Claves JSON para los archivos de traducción del sitio web (`i18n/locales`)

### En `Lexbell-Website/i18n/locales/es.json`:
```json
  "features": {
    "mcpEyebrow": "INTELIGENCIA ARTIFICIAL LOCAL",
    "mcpTitle": "Conectores MCP: Tu práctica jurídica potenciada por IA",
    "mcpBody": "Conecta Lexbell directamente con tus asistentes de IA favoritos (Google Antigravity, Claude Desktop, Cursor y OpenAI Codex) en un solo clic, con privacidad absoluta en modo solo lectura.",
    "lanEyebrow": "COLABORACIÓN EN EQUIPO",
    "lanTitle": "Compartir en oficina: Colabora en red local en tiempo real",
    "lanBody": "Sincroniza y comparte expedientes y notas con todo tu equipo a través de la red Wi-Fi o cable del despacho, sin servidores en la nube y protegido por PIN."
  },
  "pricing": {
    "featLan": "Compartir en oficina en red local",
    "featMcp": "Conectores MCP para asistentes de IA"
  }
```

### En `Lexbell-Website/i18n/locales/en.json`:
```json
  "features": {
    "mcpEyebrow": "LOCAL ARTIFICIAL INTELLIGENCE",
    "mcpTitle": "MCP Connectors: Your law practice powered by local AI",
    "mcpBody": "Connect Lexbell directly with your favorite AI assistants (Google Antigravity, Claude Desktop, Cursor, and OpenAI Codex) in one single click, with absolute privacy in read-only mode.",
    "lanEyebrow": "TEAM COLLABORATION",
    "lanTitle": "Share in Office: Real-time local network collaboration",
    "lanBody": "Sync and share cases and notes with your entire team over the office Wi-Fi or Ethernet network, without cloud servers and protected by PIN."
  },
  "pricing": {
    "featLan": "Share in office over local network",
    "featMcp": "MCP Connectors for AI assistants"
  }
```
