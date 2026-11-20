<script setup lang="ts">
const { t, locale } = useI18n()
const localePath = useLocalePath()

definePageMeta({ name: 'about' })

const isEn = computed(() => locale.value === 'en')

useHead(() => {
  const title = isEn.value
    ? 'About Us — Lexbell Technologies & Eduardo Espinal'
    : 'Sobre Nosotros — Lexbell Technologies y Eduardo Espinal'
  const desc = isEn.value
    ? 'Learn about the team and philosophy behind Lexbell. Desktop legal practice management software built with radical Local-First privacy for attorneys.'
    : 'Conoce la visión, el equipo y la filosofía detrás de Lexbell. Software de gestión de expedientes de escritorio con privacidad radical Local-First para abogados.'

  const pageUrl = isEn.value ? 'https://lex-bell.com/en/about/' : 'https://lex-bell.com/sobre-nosotros/'

  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    mainEntity: {
      '@type': 'Organization',
      name: 'Lexbell Technologies',
      url: 'https://lex-bell.com',
      logo: 'https://lex-bell.com/icon.png',
      founder: {
        '@type': 'Person',
        name: 'Lic. Eduardo Espinal',
        jobTitle: isEn.value ? 'Attorney & Legal Software Engineer' : 'Abogado & Ingeniero de Software Legal',
        description: isEn.value
          ? 'Specialist in Procedural Law and LegalTech architecture. Creator of Lexbell.'
          : 'Especialista en Derecho Procesal y arquitectura LegalTech. Creador de Lexbell.'
      },
      description: desc,
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'support@lex-bell.com',
        contactType: 'customer support'
      }
    }
  }

  return {
    title,
    meta: [
      { name: 'description', content: desc },
      { property: 'og:title', content: title },
      { property: 'og:description', content: desc },
      { property: 'og:url', content: pageUrl }
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(aboutSchema)
      }
    ]
  }
})
</script>

<template>
  <div class="about-page">
    <!-- Hero Section -->
    <section class="section about-hero">
      <div class="apple-wrap text-center">
        <span class="eyebrow">{{ isEn ? 'ABOUT US · LEXBELL TECHNOLOGIES' : 'SOBRE NOSOTROS · LEXBELL TECHNOLOGIES' }}</span>
        <h1 class="h-display mt-3">
          {{ isEn ? 'Modern legal technology with radical privacy by design.' : 'Tecnología jurídica moderna con privacidad radical por diseño.' }}
        </h1>
        <p class="subtitle mt-4 mx-auto" style="max-width: 720px;">
          {{ isEn
            ? 'We build native desktop software for attorneys and law firms who refuse to compromise client privilege or surrender case dossiers to the cloud.'
            : 'Desarrollamos software de escritorio nativo para abogados y despachos que no negocian el secreto profesional ni ceden la custodia de sus expedientes a la nube.' }}
        </p>
      </div>
    </section>

    <!-- Fundador y Misión -->
    <section class="section section-gray">
      <div class="apple-wrap">
        <div class="founder-card grid lg:grid-cols-12 gap-8 items-center">
          <div class="lg:col-span-4 text-center lg:text-left">
            <div class="founder-avatar mx-auto lg:mx-0">
              <span class="founder-initials">EE</span>
            </div>
            <h2 class="founder-name mt-4">Lic. Eduardo Espinal</h2>
            <p class="founder-title">
              {{ isEn ? 'Attorney & Legal Software Engineer' : 'Abogado & Ingeniero de Software Legal' }}
            </p>
            <p class="founder-role text-xs text-[var(--text-muted)] mt-1">
              {{ isEn ? 'Founder & Lead Developer of Lexbell' : 'Fundador y Desarrollador Principal de Lexbell' }}
            </p>
            <div class="founder-links mt-4">
              <a href="mailto:eduardo@lex-bell.com" class="contact-pill-btn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                <span>eduardo@lex-bell.com</span>
              </a>
            </div>
          </div>

          <div class="lg:col-span-8 space-y-4 text-base text-[var(--text)] leading-relaxed">
            <h3 class="text-xl font-bold text-[var(--text)]">
              {{ isEn ? 'Why Lexbell Was Created' : 'Por qué nació Lexbell' }}
            </h3>
            <p>
              {{ isEn
                ? 'During years of courtroom practice and case management, the software landscape presented an unacceptable dilemma: fragile spreadsheet tracking with forgotten deadlines, or bloated web SaaS portals demanding $80+ per user every month while holding privileged client records hostage on distant third-party servers.'
                : 'Durante años de ejercicio en tribunales y gestión de despachos, la oferta de software imponía un dilema inaceptable: el desorden de hojas de cálculo con plazos que prescribían en silencio, o costosas plataformas web que cobran más de $80 mensuales por usuario y retienen los expedientes confidenciales en servidores externos ajenos al control del letrado.' }}
            </p>
            <p>
              {{ isEn
                ? 'Lexbell was engineered from first principles as a high-performance desktop application for macOS and Windows. Designed under the Local-First paradigm, it gives attorneys absolute data custody, sub-millisecond search speeds, conflict-of-interest detection, and 100% offline reliability in courtrooms.'
                : 'Lexbell fue concebido desde sus cimientos como una aplicación de escritorio de alto rendimiento para macOS y Windows. Diseñado bajo el paradigma Local-First, devuelve a los abogados la custodia soberana de sus datos, búsquedas instantáneas, detección preventiva de conflictos de interés y total confiabilidad sin internet en salas de juicio.' }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 3 Pilares Deontológicos -->
    <section class="section">
      <div class="apple-wrap">
        <div class="text-center max-w-2xl mx-auto mb-12">
          <span class="eyebrow">{{ isEn ? 'CORE PRINCIPLES' : 'PRINCIPIOS INNEGOCIABLES' }}</span>
          <h2 class="h-section mt-2">{{ isEn ? 'Built for Ethics, Speed, and Fair Value' : 'Diseñado para la Ética, la Velocidad y el Precio Justo' }}</h2>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <div class="pillar-card">
            <div class="pillar-icon">🔒</div>
            <h3 class="pillar-title">{{ isEn ? '1. Absolute Sovereign Custody' : '1. Soberanía Absoluta de Datos' }}</h3>
            <p class="pillar-body">
              {{ isEn
                ? 'Your client files, fee records, and court strategy live encrypted on your computer SSD (SQLite). We have zero servers holding your legal data, cannot view your dossiers, and cannot be compelled to surrender what we do not possess.'
                : 'Tus expedientes, honorarios y notas viven cifrados en el disco de tu ordenador (SQLite). No tenemos servidores que almacenen tus casos, no podemos ver tus documentos y nadie puede obligarnos a entregar lo que no poseemos.' }}
            </p>
          </div>

          <div class="pillar-card">
            <div class="pillar-icon">⚡</div>
            <h3 class="pillar-title">{{ isEn ? '2. Native Desktop Performance' : '2. Rendimiento Nativo Sin Nube' }}</h3>
            <p class="pillar-body">
              {{ isEn
                ? 'Instant navigation without browser bloat or loading spinners. Prepare submissions on flights, consult dossiers in courthouse basements with zero cellular reception, and export encrypted JSON backups with one click.'
                : 'Búsqueda instantánea sin lentitud de navegador ni ruedas de carga. Prepara audiencias en aviones, consulta expedientes en sótanos de tribunales sin señal y respalda toda tu base cifrada en un clic.' }}
            </p>
          </div>

          <div class="pillar-card">
            <div class="pillar-icon">⚖️</div>
            <h3 class="pillar-title">{{ isEn ? '3. Transparent & Fair Pricing' : '3. Modelo de Precio Ético y Claro' }}</h3>
            <p class="pillar-body">
              {{ isEn
                ? 'Every independent attorney can start completely free with up to 50 active cases and no credit card required. Upgrading to unlimited cases is an affordable license, with zero predatory per-user charges.'
                : 'Cualquier abogado independiente puede comenzar completamente gratis con hasta 50 expedientes activos, sin tarjeta de crédito. La versión ilimitada tiene un precio justo y accesible, sin tarifas abusivas por usuario.' }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Jurisdicción y Soporte -->
    <section class="section section-gray">
      <div class="apple-wrap">
        <div class="grid md:grid-cols-2 gap-8">
          <div class="info-box">
            <div class="info-badge">🇩🇴 / 🌎</div>
            <h3 class="text-xl font-bold text-[var(--text)] mt-3">
              {{ isEn ? 'Jurisdiction & Regulatory Compliance' : 'Jurisdicción y Cumplimiento Normativo' }}
            </h3>
            <p class="text-sm text-[var(--text-muted)] mt-2 leading-relaxed">
              {{ isEn
                ? 'Lexbell Technologies operates from the Dominican Republic with global distribution. Our software architecture is aligned with stringent legal professional privilege rules, GDPR principles of data minimization, and local civil procedural codes across Dominican Republic, Spain, Mexico, Colombia, and Peru.'
                : 'Lexbell Technologies opera desde República Dominicana con distribución internacional. La arquitectura de nuestro software respeta estrictamente el deber deontológico del secreto profesional, los principios de minimización de datos del RGPD y los códigos procesales de República Dominicana, España, México, Colombia y Perú.' }}
            </p>
          </div>

          <div class="info-box">
            <div class="info-badge">💬</div>
            <h3 class="text-xl font-bold text-[var(--text)] mt-3">
              {{ isEn ? 'Official Support & Store Certification' : 'Soporte Oficial y Certificación' }}
            </h3>
            <p class="text-sm text-[var(--text-muted)] mt-2 leading-relaxed">
              {{ isEn
                ? 'Direct email support is provided at support@lex-bell.com with responses within 24 business hours (Atlantic Time UTC-4). Binaries are notarized and distributed through official channels: the Apple Mac App Store and the Microsoft Windows Store.'
                : 'Atención personalizada directa en support@lex-bell.com con respuestas garantizadas en menos de 24 horas laborables (horario de República Dominicana UTC-4). Los instaladores están certificados y distribuidos por las tiendas oficiales de Apple Mac App Store y Microsoft Store.' }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Final -->
    <section class="section text-center">
      <div class="apple-wrap">
        <h2 class="h-section">{{ isEn ? 'Experience the Local-First Difference' : 'Comienza a organizar tu despacho hoy' }}</h2>
        <p class="subtitle mt-3 max-w-xl mx-auto">
          {{ isEn
            ? 'Download Lexbell from the official store. 50 active cases free forever, no credit card required.'
            : 'Descarga Lexbell desde la tienda oficial. Gratis hasta 50 expedientes activos, sin tarjeta de crédito.' }}
        </p>
        <div class="mt-6 flex flex-wrap items-center justify-center gap-4">
          <a :href="localePath('index') + '#descargar'" class="btn-primary">
            {{ isEn ? 'Download Lexbell Free' : 'Descargar Lexbell Gratis' }}
          </a>
          <NuxtLink :to="localePath('blog')" class="btn-secondary">
            {{ isEn ? 'Read our Blog & Guides' : 'Leer Guías y Blog' }}
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-page {
  background: var(--bg);
  color: var(--text);
}

.about-hero {
  padding-top: clamp(48px, 6vw, 72px);
  padding-bottom: clamp(32px, 4vw, 56px);
}

.founder-card {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: clamp(24px, 4vw, 40px);
}

.founder-avatar {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background: linear-gradient(135deg, #0066cc, #004080);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 24px rgba(0, 102, 204, 0.25);
}

.founder-initials {
  color: #ffffff;
  font-size: 32px;
  font-weight: 800;
  letter-spacing: -0.02em;
}

.founder-name {
  font-size: 20px;
  font-weight: 700;
  color: var(--text);
  letter-spacing: -0.02em;
}

.founder-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--accent);
}

.contact-pill-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  border-radius: 9999px;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  color: var(--text);
  font-size: 12px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.15s ease;
}

.contact-pill-btn:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.pillar-card {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
}

.pillar-icon {
  font-size: 32px;
  margin-bottom: 14px;
}

.pillar-title {
  font-size: 16px;
  font-weight: 700;
  color: var(--text);
  letter-spacing: -0.01em;
  margin-bottom: 10px;
}

.pillar-body {
  font-size: 14px;
  line-height: 1.6;
  color: var(--text-muted);
}

.info-box {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 28px 24px;
}

.info-badge {
  font-size: 24px;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  background: var(--brand-black);
  color: var(--bg);
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: opacity 0.15s ease, transform 0.1s ease;
}

.btn-primary:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  background: var(--bg-elevated);
  color: var(--text);
  border: 1px solid var(--border);
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: border-color 0.15s ease;
}

.btn-secondary:hover {
  border-color: var(--border-dark);
}
</style>
