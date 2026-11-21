<script setup lang="ts">
import { blogPosts, type BlogPost } from '~/data/blogPosts'

const { t, locale } = useI18n()
const localePath = useLocalePath()

definePageMeta({ name: 'blog' })

useHead(() => {
  const isEn = locale.value === 'en'
  const title = isEn
    ? 'Legal Tech Blog: Privacy, Deadlines & Law Practice — Lexbell'
    : 'Blog Jurídico: Legaltech, Privacidad y Práctica Procesal — Lexbell'
  const desc = isEn
    ? 'Practical guides and insights on court deadlines, legal confidentiality, law firm management, and modern legal tech.'
    : 'Artículos y guías prácticas sobre computo de plazos procesales, secreto profesional, gestión de despachos y legaltech.'

  return {
    title,
    meta: [
      { name: 'description', content: desc },
      { property: 'og:title', content: title },
      { property: 'og:description', content: desc },
      { property: 'og:type', content: 'blog' }
    ]
  }
})

const isEn = computed(() => locale.value === 'en')
const selectedCategory = ref<string>('all')

// Reset category filter if language toggles
watch(() => locale.value, () => {
  selectedCategory.value = 'all'
})

const categories = computed(() => {
  const cats = Array.from(new Set(blogPosts.map((p) => (isEn.value ? p.category.en : p.category.es))))
  return ['all', ...cats]
})

const filteredPosts = computed(() => {
  if (selectedCategory.value === 'all') return blogPosts
  return blogPosts.filter((p) => {
    const cat = isEn.value ? p.category.en : p.category.es
    return cat === selectedCategory.value
  })
})

const featuredPost = computed<BlogPost | undefined>(() => {
  return filteredPosts.value[0]
})

const otherPosts = computed<BlogPost[]>(() => {
  return filteredPosts.value.slice(1)
})

function formatDate(iso: string) {
  try {
    const d = new Date(iso + 'T00:00:00')
    return d.toLocaleDateString(isEn.value ? 'en-US' : 'es-DO', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  } catch {
    return iso
  }
}
</script>

<template>
  <div class="blog-index-page">
    <!-- HERO HEADER -->
    <section class="section pb-8">
      <div class="apple-wrap text-center">
        <span class="eyebrow">
          {{ isEn ? 'LEGALTECH & PRACTICE' : 'RECURSOS LEGALTECH' }}
        </span>
        <h1 class="blog-hero-title mt-2">{{ t('blog.title') }}</h1>
        <p class="subtitle mt-3 mx-auto" style="max-width: 640px;">
          {{ t('blog.subtitle') }}
        </p>

        <!-- Category Filter Tabs -->
        <div class="category-tabs mt-8">
          <button
            v-for="cat in categories"
            :key="cat"
            class="cat-pill"
            :class="{ active: selectedCategory === cat }"
            @click="selectedCategory = cat"
          >
            {{ cat === 'all' ? t('blog.allCategories') : cat }}
          </button>
        </div>
      </div>
    </section>

    <!-- MAIN CONTENT -->
    <section class="pb-24">
      <div class="apple-wrap-wide">
        <!-- FEATURED POST CARD (ESTILO EDITORIAL BANDERA CON PORTADA) -->
        <div v-if="featuredPost" class="featured-card-wrapper mb-10">
          <NuxtLink
            :to="localePath('/blog/' + featuredPost.slug + '/')"
            class="featured-card group"
          >
            <div class="featured-card-media">
              <img
                :src="featuredPost.coverImage"
                :alt="isEn ? featuredPost.title.en : featuredPost.title.es"
                class="featured-card-img"
                loading="eager"
              />
              <div class="featured-cover-overlay"></div>
              <span class="featured-pill">
                {{ isEn ? 'Featured' : 'Destacado' }}
              </span>
            </div>

            <div class="featured-card-body">
              <div class="post-meta-row">
                <span class="post-cat-badge">
                  {{ isEn ? featuredPost.category.en : featuredPost.category.es }}
                </span>
                <span class="post-dot">·</span>
                <span class="post-date">{{ formatDate(featuredPost.date) }}</span>
                <span class="post-dot">·</span>
                <span class="post-readtime">
                  <svg class="w-3.5 h-3.5 inline mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  {{ isEn ? featuredPost.readTime.en : featuredPost.readTime.es }}
                </span>
              </div>

              <h2 class="featured-title group-hover:text-blue-600 transition-colors">
                {{ isEn ? featuredPost.title.en : featuredPost.title.es }}
              </h2>

              <p class="featured-desc">
                {{ isEn ? featuredPost.description.en : featuredPost.description.es }}
              </p>

              <div class="featured-footer">
                <div class="author-block">
                  <div class="author-avatar-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0066cc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/>
                      <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/>
                      <path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/>
                    </svg>
                  </div>
                  <div>
                    <span class="author-name">{{ featuredPost.author.name }}</span>
                    <span class="author-role">
                      {{ isEn ? featuredPost.author.role.en : featuredPost.author.role.es }}
                    </span>
                  </div>
                </div>

                <span class="read-link">
                  {{ t('blog.readArticle') }}
                  <svg class="w-4 h-4 ml-1 inline-block transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </NuxtLink>
        </div>

        <!-- POSTS GRID (TARJETAS DE BLOG MODERNAS CON PORTADA VISUAL) -->
        <div v-if="otherPosts.length > 0" class="posts-grid">
          <article
            v-for="post in otherPosts"
            :key="post.slug"
            class="post-card group"
          >
            <NuxtLink
              :to="localePath('/blog/' + post.slug + '/')"
              class="post-card-inner"
            >
              <div class="post-card-thumb">
                <img
                  :src="post.coverImage"
                  :alt="isEn ? post.title.en : post.title.es"
                  class="post-card-img"
                  loading="lazy"
                />
                <div class="post-thumb-overlay"></div>
                <span class="post-thumb-badge">
                  {{ isEn ? post.category.en : post.category.es }}
                </span>
              </div>

              <div class="post-card-content">
                <div class="post-meta-row mb-3">
                  <span class="post-date text-xs text-gray-500">{{ formatDate(post.date) }}</span>
                  <span class="post-dot">·</span>
                  <span class="post-readtime">
                    <svg class="w-3.5 h-3.5 inline mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    {{ isEn ? post.readTime.en : post.readTime.es }}
                  </span>
                </div>

                <h3 class="post-title group-hover:text-blue-600 transition-colors">
                  {{ isEn ? post.title.en : post.title.es }}
                </h3>

                <p class="post-desc">
                  {{ isEn ? post.description.en : post.description.es }}
                </p>

                <div class="post-footer-row mt-auto pt-4">
                  <div class="post-card-author">
                    <div class="post-author-icon">⚖️</div>
                    <span class="post-author-name">{{ post.author.name }}</span>
                  </div>
                  <span class="read-link-sm">
                    {{ t('blog.readArticle') }}
                    <svg class="w-3.5 h-3.5 ml-0.5 inline-block transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </NuxtLink>
          </article>
        </div>

        <!-- BLOG CTA BLOCK -->
        <div class="blog-cta-box mt-14">
          <div class="blog-cta-copy">
            <span class="eyebrow">{{ isEn ? 'FREE DESKTOP APP' : 'SOFTWARE GRATUITO' }}</span>
            <h2 class="blog-cta-heading">
              {{ isEn ? 'Organize your cases and court deadlines offline' : 'Lleva tus expedientes y plazos sin depender de la nube' }}
            </h2>
            <p class="blog-cta-text">
              {{ isEn
                ? 'Start free with up to 50 active cases on Mac or Windows, or try our free court deadline calculator.'
                : 'Empieza gratis hasta 50 expedientes en Mac o Windows, o usa nuestra calculadora gratuita de plazos procesales.' }}
            </p>
            <div class="mt-4">
              <NuxtLink :to="localePath('calculadora-plazos')" class="blog-tool-link">
                {{ isEn ? 'Open Deadline Calculator →' : 'Abrir Calculadora de Plazos →' }}
              </NuxtLink>
            </div>
          </div>
          <div class="blog-cta-actions">
            <AppDownload center />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.blog-index-page {
  background: var(--bg);
}

.blog-hero-title {
  font-size: clamp(28px, 3.2vw, 40px);
  line-height: 1.16;
  font-weight: 800;
  letter-spacing: -0.025em;
  color: var(--text);
  text-wrap: balance;
}

.category-tabs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
}

.cat-pill {
  padding: 8px 18px;
  font-size: 13.5px;
  font-weight: 500;
  border-radius: 9999px;
  background: var(--bg-elevated);
  color: var(--text-muted);
  border: 1px solid var(--border);
  transition: all 0.2s ease;
  cursor: pointer;
}

.cat-pill:hover {
  border-color: var(--border-dark);
  color: var(--text);
}

.cat-pill.active {
  background: var(--brand-black);
  color: var(--bg);
  border-color: transparent;
}

/* Featured Card (Estilo Editorial con Portada Dividida) */
.featured-card-wrapper {
  background: var(--bg);
}

.featured-card {
  display: grid;
  grid-template-columns: 1fr;
  text-decoration: none;
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 20px -4px rgba(0, 0, 0, 0.05);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

@media (min-width: 900px) {
  .featured-card {
    grid-template-columns: 1.15fr 1fr;
  }
}

.featured-card:hover {
  border-color: rgba(0, 102, 204, 0.35);
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.12);
  transform: translateY(-4px);
}

:root.dark .featured-card:hover {
  box-shadow: 0 20px 44px -8px rgba(0, 0, 0, 0.5);
}

.featured-card-media {
  position: relative;
  width: 100%;
  min-height: 260px;
  height: 100%;
  overflow: hidden;
  background: var(--bg-elevated);
}

.featured-card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  display: block;
  transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
}

.featured-card:hover .featured-card-img {
  transform: scale(1.04);
}

.featured-cover-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.2) 100%);
  pointer-events: none;
}

.featured-pill {
  position: absolute;
  top: 16px;
  left: 16px;
  background: #0066cc;
  color: #ffffff;
  padding: 5px 12px;
  border-radius: 999px;
  font-weight: 700;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  box-shadow: 0 4px 12px rgba(0, 102, 204, 0.35);
  z-index: 2;
}

.featured-card-body {
  padding: clamp(24px, 3.5vw, 36px);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.post-meta-row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 12.5px;
  color: var(--text-light);
}

.post-cat-badge {
  background: var(--accent-soft);
  color: var(--accent);
  padding: 3px 10px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 11.5px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.post-dot {
  color: var(--border-dark);
}

.featured-title {
  font-size: clamp(22px, 2.5vw, 32px);
  line-height: 1.25;
  font-weight: 700;
  letter-spacing: -0.025em;
  color: var(--text);
  margin-top: 12px;
  margin-bottom: 12px;
  text-wrap: balance;
}

.featured-desc {
  font-size: clamp(14.5px, 1.2vw, 16px);
  line-height: 1.6;
  color: var(--text-muted);
  max-width: 880px;
  margin-bottom: 24px;
  text-wrap: pretty;
}

.featured-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  padding-top: 18px;
  border-top: 1px solid var(--border);
}

.author-block {
  display: flex;
  align-items: center;
  gap: 10px;
}

.author-avatar-icon {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  color: var(--icon-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
}

.author-name {
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: var(--text);
}

.author-role {
  display: block;
  font-size: 11px;
  color: var(--text-light);
}

.read-link {
  font-size: 13.5px;
  font-weight: 600;
  color: var(--accent);
  display: inline-flex;
  align-items: center;
}

/* Posts Grid (Tarjetas de Blog Modernas con Portada) */
.posts-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 28px;
}

@media (min-width: 768px) {
  .posts-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.post-card {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 18px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 16px -4px rgba(0, 0, 0, 0.05);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.post-card:hover {
  transform: translateY(-4px);
  border-color: rgba(0, 102, 204, 0.35);
  box-shadow: 0 18px 36px -10px rgba(0, 0, 0, 0.12);
}

:root.dark .post-card:hover {
  box-shadow: 0 18px 38px -8px rgba(0, 0, 0, 0.45);
}

.post-card-inner {
  text-decoration: none;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.post-card-thumb {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: var(--bg-elevated);
  border-bottom: 1px solid var(--border);
}

.post-card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  display: block;
  transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
}

.post-card:hover .post-card-img {
  transform: scale(1.05);
}

.post-thumb-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.2) 100%);
  pointer-events: none;
}

.post-thumb-badge {
  position: absolute;
  top: 14px;
  left: 14px;
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  color: #ffffff;
  font-size: 11px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 999px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  z-index: 2;
}

.post-card-content {
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.post-card-author {
  display: flex;
  align-items: center;
  gap: 6px;
}

.post-author-icon {
  font-size: 14px;
}

.post-author-name {
  font-size: 12.5px;
  font-weight: 500;
  color: var(--text-light);
}

.post-title {
  font-size: 18.5px;
  line-height: 1.35;
  font-weight: 700;
  letter-spacing: -0.015em;
  color: var(--text);
  margin-bottom: 10px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.post-desc {
  font-size: 14px;
  line-height: 1.55;
  color: var(--text-muted);
  margin-bottom: 18px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.post-footer-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--border);
  padding-top: 14px;
}

.read-link-sm {
  font-size: 13px;
  font-weight: 600;
  color: var(--accent);
  display: inline-flex;
  align-items: center;
}

/* Blog CTA Box */
.blog-cta-box {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: clamp(28px, 4vw, 44px);
  display: grid;
  grid-template-columns: 1fr;
  gap: 28px;
  align-items: center;
}

@media (min-width: 860px) {
  .blog-cta-box {
    grid-template-columns: 1.25fr 1fr;
    gap: 36px;
  }
}

.blog-cta-heading {
  font-size: clamp(22px, 2.6vw, 30px);
  font-weight: 800;
  color: var(--text);
  letter-spacing: -0.025em;
  line-height: 1.2;
  margin: 0 0 10px;
  text-wrap: balance;
}

.blog-cta-text {
  font-size: 15px;
  line-height: 1.55;
  color: var(--text-muted);
  margin: 0;
  text-wrap: pretty;
}

.blog-tool-link {
  display: inline-flex;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  color: var(--accent);
  text-decoration: none;
}

.blog-tool-link:hover {
  text-decoration: underline;
}

.blog-cta-actions {
  display: flex;
  justify-content: center;
}
</style>
