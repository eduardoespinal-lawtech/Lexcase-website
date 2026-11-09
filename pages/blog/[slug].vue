<script setup lang="ts">
import { getBlogPostBySlug, blogPosts, type BlogPost } from '~/data/blogPosts'

const route = useRoute()
const { t, locale } = useI18n()
const localePath = useLocalePath()

const slug = computed(() => {
  const s = route.params.slug
  return Array.isArray(s) ? s[0] : (s as string)
})

const post = computed<BlogPost | undefined>(() => {
  return getBlogPostBySlug(slug.value)
})

// If post doesn't exist, throw 404
if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Artículo no encontrado', fatal: true })
}

const isEn = computed(() => locale.value === 'en')
const postTitle = computed(() => (isEn.value ? post.value?.title.en : post.value?.title.es) || '')
const postDescription = computed(() => (isEn.value ? post.value?.description.en : post.value?.description.es) || '')
const postCategory = computed(() => (isEn.value ? post.value?.category.en : post.value?.category.es) || '')
const postReadTime = computed(() => (isEn.value ? post.value?.readTime.en : post.value?.readTime.es) || '')
const postAuthorRole = computed(() => (isEn.value ? post.value?.author.role.en : post.value?.author.role.es) || '')
const postKeywords = computed(() => (isEn.value ? post.value?.keywords.en : post.value?.keywords.es) || [])
const postContent = computed(() => (isEn.value ? post.value?.content.en : post.value?.content.es) || '')

const currentUrl = computed(() => {
  const p = route.path.replace(/\/+$/, '')
  return `https://lex-bell.com${p}/`
})

const formattedDate = computed(() => {
  if (!post.value) return ''
  try {
    const d = new Date(post.value.date + 'T00:00:00')
    return d.toLocaleDateString(isEn.value ? 'en-US' : 'es-DO', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  } catch {
    return post.value.date
  }
})

// Related posts
const relatedPosts = computed(() => {
  if (!post.value) return []
  return blogPosts.filter((p) => p.slug !== post.value?.slug).slice(0, 2)
})

// Social share links
const copied = ref(false)
function copyLink() {
  if (process.client) {
    navigator.clipboard.writeText(window.location.href)
    copied.value = true
    setTimeout(() => { copied.value = false }, 3000)
  }
}

const shareTwitterUrl = computed(() => {
  return `https://twitter.com/intent/tweet?text=${encodeURIComponent(postTitle.value)}&url=${encodeURIComponent(currentUrl.value)}`
})

const shareLinkedInUrl = computed(() => {
  return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl.value)}`
})

const shareWhatsAppUrl = computed(() => {
  return `https://api.whatsapp.com/send?text=${encodeURIComponent(postTitle.value + ' ' + currentUrl.value)}`
})

// Reading progress bar percentage
const readingProgress = ref(0)
const updateProgress = () => {
  if (typeof window === 'undefined') return
  const scrollTop = window.scrollY || document.documentElement.scrollTop
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  if (docHeight <= 0) {
    readingProgress.value = 0
    return
  }
  const pct = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100))
  readingProgress.value = pct
}

onMounted(() => {
  window.addEventListener('scroll', updateProgress, { passive: true })
  updateProgress()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateProgress)
})

// Table of Contents extraction & Heading IDs
interface TocItem {
  id: string
  text: string
}

const toc = computed<TocItem[]>(() => {
  if (!postContent.value) return []
  const matches = [...postContent.value.matchAll(/<h2>(.*?)<\/h2>/g)]
  return matches.map((m, idx) => {
    const rawText = m[1].replace(/<[^>]*>/g, '').trim()
    return { id: `sec-${idx + 1}`, text: rawText }
  })
})

const postContentWithIds = computed(() => {
  if (!postContent.value) return ''
  let idx = 0
  return postContent.value.replace(/<h2>(.*?)<\/h2>/g, (_, inner) => {
    idx++
    return `<h2 id="sec-${idx}">${inner}</h2>`
  })
})

// Schema.org Structured Data
useHead(() => {
  if (!post.value) return {}

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: postTitle.value,
    description: postDescription.value,
    image: ['https://lex-bell.com/og-image.png'],
    datePublished: post.value.date,
    dateModified: post.value.date,
    author: {
      '@type': 'Organization',
      name: post.value.author.name
    },
    publisher: {
      '@type': 'Organization',
      name: 'Lexbell',
      logo: {
        '@type': 'ImageObject',
        url: 'https://lex-bell.com/icon.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': currentUrl.value
    },
    keywords: postKeywords.value.join(', ')
  }

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: isEn.value ? 'Home' : 'Inicio',
        item: isEn.value ? 'https://lex-bell.com/en/' : 'https://lex-bell.com/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: isEn.value ? 'https://lex-bell.com/en/blog/' : 'https://lex-bell.com/blog/'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: postTitle.value,
        item: currentUrl.value
      }
    ]
  }

  const howToLd = slug.value === 'computo-plazos-procesales-dias-habiles-rd' ? {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: isEn.value ? 'How to calculate court procedural deadlines in business days' : 'Cómo calcular plazos procesales judiciales en días hábiles',
    description: isEn.value
      ? 'Step-by-step procedural guide to calculate court deadlines excluding weekends and legal judicial holidays.'
      : 'Guía paso a paso para el cómputo de plazos procesales excluyendo sábados, domingos y días festivos judiciales.',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: isEn.value ? 'Identify the notification date (dies a quo)' : 'Identificar la fecha de notificación (dies a quo)',
        text: isEn.value
          ? 'Verify the formal receipt timestamp of the judicial notification or court act.'
          : 'Verificar la fecha y hora de la entrega formal de la notificación del acto procesal.'
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: isEn.value ? 'Set computation start on the next business day' : 'Fijar el inicio del cómputo al día hábil siguiente',
        text: isEn.value
          ? 'By general civil procedure rule, the day of notification does not count; counting starts on the next business day.'
          : 'Por regla general procesal, el día de la notificación no cuenta; el plazo inicia el primer día hábil siguiente.'
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: isEn.value ? 'Exclude non-working days and judicial holidays' : 'Excluir fines de semana y festivos judiciales',
        text: isEn.value
          ? 'Count only days when court offices are officially open, skipping weekends and declared holidays.'
          : 'Contar únicamente los días en que los tribunales están oficialmente abiertos, excluyendo sábados, domingos y festivos.'
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: isEn.value ? 'Determine the final expiration date (dies ad quem)' : 'Determinar la fecha de vencimiento (dies ad quem)',
        text: isEn.value
          ? 'The deadline expires at the legal office closing hour of the final computed business day.'
          : 'El plazo vence en la última hora hábil de atención de secretaría del último día hábil computado.'
      }
    ]
  } : null

  const graphItems = [jsonLd, breadcrumbLd]
  if (howToLd) graphItems.push(howToLd)

  return {
    title: `${postTitle.value} — Lexbell`,
    meta: [
      { name: 'description', content: postDescription.value },
      { property: 'og:title', content: `${postTitle.value} — Lexbell` },
      { property: 'og:description', content: postDescription.value },
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: currentUrl.value },
      { property: 'article:published_time', content: post.value.date },
      { name: 'twitter:title', content: postTitle.value },
      { name: 'twitter:description', content: postDescription.value }
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': graphItems
        })
      }
    ]
  }
})
</script>

<template>
  <div v-if="post" class="article-page">
    <!-- Reading Progress Bar -->
    <div class="reading-progress-track" aria-hidden="true">
      <div class="reading-progress-bar" :style="{ width: `${readingProgress}%` }" />
    </div>

    <article class="article-container">
      <!-- Breadcrumb Navigation -->
      <nav class="breadcrumb-nav mb-8" aria-label="Breadcrumb">
        <ol class="breadcrumb-list">
          <li>
            <NuxtLink :to="localePath('index')" class="breadcrumb-link">{{ t('nav.home') }}</NuxtLink>
            <span class="breadcrumb-sep">/</span>
          </li>
          <li>
            <NuxtLink :to="localePath('blog')" class="breadcrumb-link">{{ t('nav.blog') }}</NuxtLink>
            <span class="breadcrumb-sep">/</span>
          </li>
          <li class="breadcrumb-current" aria-current="page">{{ postCategory }}</li>
        </ol>
      </nav>

      <!-- Article Header -->
      <header class="article-header">
        <div class="header-meta">
          <span class="post-cat-badge">{{ postCategory }}</span>
          <span class="meta-dot">·</span>
          <span class="meta-item">{{ postReadTime }}</span>
          <span class="meta-dot">·</span>
          <time :datetime="post.date" class="meta-item">{{ formattedDate }}</time>
        </div>

        <h1 class="article-title">{{ postTitle }}</h1>
        <p class="article-lead">{{ postDescription }}</p>

        <!-- Author & Share bar -->
        <div class="author-share-bar">
          <div class="author-info">
            <div class="author-icon">⚖️</div>
            <div>
              <span class="author-name">{{ post.author.name }}</span>
              <span class="author-role">{{ postAuthorRole }}</span>
            </div>
          </div>

          <!-- Share buttons -->
          <div class="share-actions">
            <button class="share-btn" :title="t('blog.share')" @click="copyLink">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              <span>{{ copied ? t('blog.copied') : t('blog.share') }}</span>
            </button>
            <a :href="shareLinkedInUrl" target="_blank" rel="noopener noreferrer" class="share-icon-btn" title="LinkedIn">
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a :href="shareTwitterUrl" target="_blank" rel="noopener noreferrer" class="share-icon-btn" title="X / Twitter">
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a :href="shareWhatsAppUrl" target="_blank" rel="noopener noreferrer" class="share-icon-btn" title="WhatsApp">
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
              </svg>
            </a>
          </div>
        </div>
      </header>

      <hr class="header-divider" />

      <!-- TABLE OF CONTENTS (NOTION STYLE) -->
      <nav v-if="toc.length > 1" class="article-toc" aria-label="Tabla de contenidos">
        <div class="toc-header">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
          <span class="toc-title">{{ isEn ? 'Table of Contents' : 'En este artículo' }}</span>
        </div>
        <ol class="toc-list">
          <li v-for="item in toc" :key="item.id">
            <a :href="'#' + item.id" class="toc-link">{{ item.text }}</a>
          </li>
        </ol>
      </nav>

      <!-- Article Body -->
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="prose-legal article-content" v-html="postContentWithIds" />

      <!-- RELATED ARTICLES -->
      <footer v-if="relatedPosts.length > 0" class="related-section pt-12 mt-12 border-t border-gray-200">
        <h3 class="related-heading">{{ isEn ? 'Recommended Articles' : 'Artículos recomendados' }}</h3>
        <div class="related-grid mt-6">
          <NuxtLink
            v-for="rel in relatedPosts"
            :key="rel.slug"
            :to="localePath('/blog/' + rel.slug + '/')"
            class="related-card group"
          >
            <span class="post-cat-badge text-xs">{{ isEn ? rel.category.en : rel.category.es }}</span>
            <h4 class="related-card-title group-hover:text-blue-600 transition-colors">
              {{ isEn ? rel.title.en : rel.title.es }}
            </h4>
            <span class="related-read-more">{{ t('blog.readArticle') }} →</span>
          </NuxtLink>
        </div>
      </footer>
    </article>
  </div>
</template>

<style scoped>
.article-page {
  background: #ffffff;
  padding-top: 40px;
  padding-bottom: 96px;
}

.article-container {
  max-width: 860px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Reading Progress Bar */
.reading-progress-track {
  position: fixed;
  top: 54px;
  left: 0;
  width: 100%;
  height: 2.5px;
  background: transparent;
  z-index: 45;
  pointer-events: none;
}
.reading-progress-bar {
  height: 100%;
  background: #0066cc;
  transition: width 0.08s linear;
}

/* Breadcrumb Navigation */
.breadcrumb-nav {
  display: flex;
  align-items: center;
}
.breadcrumb-list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 13px;
  color: #8b8a86;
  margin: 0;
  padding: 0;
  list-style: none;
}
.breadcrumb-link {
  color: #5f5e5b;
  text-decoration: none;
  transition: color 0.15s ease;
}
.breadcrumb-link:hover {
  color: #0066cc;
}
.breadcrumb-sep {
  color: #d3d3d0;
  user-select: none;
}
.breadcrumb-current {
  color: #191919;
  font-weight: 500;
}

/* Table of Contents (Notion style) */
.article-toc {
  background: #fbfbfa;
  border: 1px solid #ebebea;
  border-radius: 12px;
  padding: 18px 22px;
  margin-bottom: 36px;
}
.toc-header {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #191919;
  font-weight: 600;
  font-size: 13.5px;
  letter-spacing: -0.01em;
  margin-bottom: 12px;
}
.toc-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.toc-link {
  color: #5f5e5b;
  text-decoration: none;
  font-size: 14.5px;
  line-height: 1.45;
  transition: color 0.15s ease, transform 0.15s ease;
  display: inline-block;
}
.toc-link:hover {
  color: #0066cc;
  transform: translateX(3px);
}

.back-link {
  display: inline-flex;
  align-items: center;
  font-size: 13.5px;
  font-weight: 500;
  color: #5f5e5b;
  text-decoration: none;
  transition: color 0.15s ease;
}

.back-link:hover {
  color: #0066cc;
}

.article-header {
  margin-bottom: 32px;
}

.header-meta {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 13px;
  color: #8b8a86;
  margin-bottom: 16px;
}

.post-cat-badge {
  background: #eef4ff;
  color: #0066cc;
  padding: 3px 10px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 11.5px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.meta-dot {
  color: #d3d3d0;
}

.article-title {
  font-size: clamp(30px, 4.2vw, 46px);
  line-height: 1.18;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: #191919;
  margin-bottom: 18px;
  text-wrap: balance;
}

.article-lead {
  font-size: clamp(17px, 1.6vw, 20px);
  line-height: 1.55;
  color: #5f5e5b;
  margin-bottom: 28px;
  text-wrap: pretty;
}

.author-share-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  padding-top: 18px;
}

.author-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.author-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #f4f4f2;
  border: 1px solid #ebebea;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}

.author-name {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #191919;
}

.author-role {
  display: block;
  font-size: 12px;
  color: #8b8a86;
}

.share-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.share-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 8px;
  background: #f4f4f2;
  color: #5f5e5b;
  font-size: 12.5px;
  font-weight: 500;
  border: 1px solid #ebebea;
  cursor: pointer;
  transition: all 0.15s ease;
}

.share-btn:hover {
  background: #e8e8e6;
  color: #191919;
}

.share-icon-btn {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: #f4f4f2;
  border: 1px solid #ebebea;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #5f5e5b;
  text-decoration: none;
  transition: all 0.15s ease;
}

.share-icon-btn:hover {
  background: #e8e8e6;
  color: #0066cc;
}

.header-divider {
  border: 0;
  border-top: 1px solid #ebebea;
  margin: 28px 0 36px;
}

/* Article Prose styling enhancements */
:deep(.article-content) {
  font-size: 17.5px;
  line-height: 1.72;
  color: #242424;
}

:deep(.article-content p) {
  margin: 1.25rem 0;
}

:deep(.article-content a) {
  color: #0066cc;
  text-decoration: underline;
  text-decoration-thickness: 1.5px;
  text-underline-offset: 3px;
  font-weight: 500;
  transition: color 0.15s ease;
}

:deep(.article-content a:hover) {
  color: #004c99;
}

:deep(.article-content p.lead) {
  font-size: 20px;
  line-height: 1.6;
  color: #191919;
  font-weight: 500;
  margin-bottom: 2rem;
}

:deep(.article-content h2) {
  scroll-margin-top: 80px;
  margin-top: 2.8rem;
  margin-bottom: 1rem;
  font-size: 26px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #191919;
}

:deep(.article-content h3) {
  margin-top: 2rem;
  margin-bottom: 0.6rem;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: #191919;
}

:deep(.article-content ul),
:deep(.article-content ol) {
  margin: 1.25rem 0;
  padding-left: 1.6rem;
}

:deep(.article-content li) {
  margin: 0.5rem 0;
}

:deep(.article-content blockquote) {
  border-left: 3px solid #0066cc;
  padding: 12px 20px;
  margin: 1.8rem 0;
  background: #f8fafc;
  border-radius: 0 8px 8px 0;
  font-size: 18.5px;
  font-style: italic;
  color: #1e293b;
}

:deep(.article-content .callout-box) {
  background: #fbfbfa;
  border: 1px solid #ebebea;
  border-left: 4px solid #050505;
  border-radius: 8px;
  padding: 18px 22px;
  margin: 2rem 0;
  font-size: 16px;
  line-height: 1.6;
}

/* Related articles */
.related-heading {
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.015em;
  color: #191919;
}

.related-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

@media (min-width: 640px) {
  .related-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.related-card {
  display: block;
  text-decoration: none;
  background: #fbfbfa;
  border: 1px solid #ebebea;
  border-radius: 14px;
  padding: 20px;
  transition: all 0.2s ease;
}

.related-card:hover {
  border-color: #d3d3d0;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
  transform: translateY(-2px);
}

.related-card-title {
  font-size: 16px;
  line-height: 1.35;
  font-weight: 600;
  color: #191919;
  margin-top: 10px;
  margin-bottom: 12px;
}

.related-read-more {
  font-size: 13px;
  font-weight: 600;
  color: #0066cc;
}
</style>
