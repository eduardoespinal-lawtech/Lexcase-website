<script setup lang="ts">
import { blogPosts, type BlogPost } from '~/data/blogPosts'

const { t, locale } = useI18n()
const localePath = useLocalePath()

definePageMeta({ name: 'blog' })

useHead(() => {
  const isEn = locale.value === 'en'
  const title = isEn
    ? 'Lexbell Blog: Legaltech, Privacy & Procedural Practice'
    : 'Blog de Lexbell: Legaltech, Privacidad y Práctica Procesal'
  const desc = isEn
    ? 'Practical guides and insights on court deadlines, legal confidentiality, law firm management, and modern local legal tech.'
    : 'Artículos y guías prácticas sobre cómputo de plazos procesales, secreto profesional, gestión de despachos y legaltech local.'

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

const postThumbnails: Record<string, string> = {
  'secreto-profesional-abogados-nube-seguridad': '/images/blog/secreto-profesional.webp',
  'computo-plazos-procesales-dias-habiles-rd': '/images/blog/plazos-procesales.webp',
  'mejores-programas-gestion-expedientes-abogados-2026': '/images/blog/software-abogados.webp'
}

function getPostImage(slug: string) {
  return postThumbnails[slug] || '/images/blog/software-abogados.webp'
}

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
  <main class="manus-blog-page">
    <div class="manus-blog-wrapper">
      <!-- Encabezado + Artículo Destacado estilo Manus -->
      <section class="manus-blog-section">
        <!-- Título H1 estilo Manus (28px a 40px, font-weight 600, tracking -0.8px) -->
        <h1 class="manus-blog-title">
          Blog
        </h1>

        <!-- Tarjeta de Artículo Destacado estilo Manus (Aspect ratio 16:9 con zoom suave al hover) -->
        <NuxtLink
          v-if="featuredPost"
          :to="localePath('/blog/' + featuredPost.slug + '/')"
          class="manus-featured-card group"
        >
          <div class="manus-featured-img-wrap">
            <img
              :src="getPostImage(featuredPost.slug)"
              :alt="isEn ? featuredPost.title.en : featuredPost.title.es"
              class="manus-blog-img"
              loading="eager"
            />
          </div>

          <div class="manus-featured-content">
            <div class="manus-meta-row">
              <span>{{ isEn ? featuredPost.category.en : featuredPost.category.es }}</span>
              <span>·</span>
              <span>{{ formatDate(featuredPost.date) }}</span>
            </div>

            <h2 class="manus-featured-title">
              {{ isEn ? featuredPost.title.en : featuredPost.title.es }}
            </h2>

            <p class="manus-featured-excerpt">
              {{ isEn ? featuredPost.description.en : featuredPost.description.es }}
            </p>
          </div>
        </NuxtLink>
      </section>

      <!-- Publicaciones Recientes + Filtro por Categoría + Grid de 3 Columnas estilo Manus -->
      <section class="manus-blog-section">
        <div class="w-full flex flex-col gap-4">
          <h2 class="manus-section-title">
            {{ isEn ? 'Recent posts' : 'Publicaciones recientes' }}
          </h2>

          <!-- Pestañas de Filtro Horizontales estilo Manus -->
          <div class="manus-filter-row" role="tablist">
            <button
              v-for="cat in categories"
              :key="cat"
              type="button"
              role="tab"
              :aria-selected="selectedCategory === cat"
              class="manus-filter-tab"
              :class="{ 'is-active': selectedCategory === cat }"
              @click="selectedCategory = cat"
            >
              {{ cat === 'all' ? (isEn ? 'All' : 'Todo') : cat }}
            </button>
          </div>
        </div>

        <!-- Grid de 3 Columnas estilo Manus -->
        <div v-if="otherPosts.length > 0" class="manus-grid-3">
          <NuxtLink
            v-for="post in otherPosts"
            :key="post.slug"
            :to="localePath('/blog/' + post.slug + '/')"
            class="manus-card-post group"
          >
            <div class="manus-post-img-wrap">
              <img
                :src="getPostImage(post.slug)"
                :alt="isEn ? post.title.en : post.title.es"
                class="manus-blog-img"
                loading="lazy"
              />
            </div>

            <div class="manus-post-body">
              <h3 class="manus-post-title">
                {{ isEn ? post.title.en : post.title.es }}
              </h3>

              <div class="manus-meta-row">
                <span>{{ isEn ? post.category.en : post.category.es }}</span>
                <span>·</span>
                <span>{{ formatDate(post.date) }}</span>
              </div>
            </div>
          </NuxtLink>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>
/* =================== SISTEMA DE BLOG EXACTO ESTILO MANUS =================== */
.manus-blog-page {
  background: var(--bg);
  color: var(--text);
  min-height: 100vh;
}

.manus-blog-wrapper {
  max-width: 1032px;
  margin: 0 auto;
  padding: 32px 16px 80px;
  display: flex;
  flex-direction: column;
  gap: 48px;
}

@media (min-width: 1024px) {
  .manus-blog-wrapper {
    padding: 64px 24px 120px;
    gap: 72px;
  }
}

.manus-blog-section {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
}

@media (min-width: 1024px) {
  .manus-blog-section {
    gap: 32px;
  }
}

/* Título H1 estilo Manus: 28px móvil / 40px desktop, weight 600, leading 1.2, tracking -0.8px */
.manus-blog-title {
  font-size: 28px;
  line-height: 1.2;
  font-weight: 600;
  letter-spacing: -0.8px;
  color: var(--text);
  margin: 0;
  text-align: left;
}

@media (min-width: 1024px) {
  .manus-blog-title {
    font-size: 40px;
  }
}

/* Tarjeta de Artículo Destacado estilo Manus */
.manus-featured-card {
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  text-decoration: none;
  width: 100%;
  cursor: pointer;
}

@media (min-width: 1024px) {
  .manus-featured-card {
    flex-direction: row;
    gap: 48px;
    align-items: center;
  }
}

.manus-featured-img-wrap {
  width: 100%;
  aspect-ratio: 16 / 9;
  border: 1px solid var(--border);
  border-radius: 8px;
  overflow: hidden;
  background: var(--bg-section);
}

@media (min-width: 1024px) {
  .manus-featured-img-wrap {
    flex: 1;
    aspect-ratio: 160 / 90;
  }
}

.manus-blog-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.group:hover .manus-blog-img {
  transform: scale(1.05);
}

.manus-featured-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  width: 100%;
}

@media (min-width: 1024px) {
  .manus-featured-content {
    flex: 1;
  }
}

/* Metadata: categoría · fecha */
.manus-meta-row {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  line-height: 24px;
  color: var(--text-muted);
}

@media (min-width: 1024px) {
  .manus-meta-row {
    font-size: 15px;
  }
}

.manus-featured-title {
  font-size: 24px;
  line-height: 1.25;
  font-weight: 600;
  letter-spacing: -0.32px;
  color: var(--text);
  margin: 0;
  transition: opacity 0.2s ease;
}

@media (min-width: 1024px) {
  .manus-featured-title {
    font-size: 32px;
    line-height: 1.2;
  }
}

.group:hover .manus-featured-title {
  opacity: 0.8;
}

.manus-featured-excerpt {
  font-size: 14px;
  line-height: 24px;
  color: var(--text-muted);
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@media (min-width: 1024px) {
  .manus-featured-excerpt {
    font-size: 16px;
  }
}

/* Sección de Publicaciones Recientes */
.manus-section-title {
  font-size: 20px;
  line-height: 1.2;
  font-weight: 600;
  letter-spacing: -0.24px;
  color: var(--text);
  margin: 0;
}

@media (min-width: 1024px) {
  .manus-section-title {
    font-size: 24px;
  }
}

/* Fila de Filtros estilo Manus (pestañas horizontales limpias) */
.manus-filter-row {
  display: flex;
  gap: 24px;
  align-items: center;
  width: 100%;
  overflow-x: auto;
  border-bottom: 1px solid var(--border);
  padding-bottom: 8px;
}

.manus-filter-tab {
  background: transparent;
  border: none;
  padding: 4px 0;
  font-size: 14px;
  line-height: 24px;
  font-weight: 500;
  color: var(--text-muted);
  cursor: pointer;
  white-space: nowrap;
  transition: color 0.15s ease;
  position: relative;
}

@media (min-width: 1024px) {
  .manus-filter-tab {
    font-size: 15px;
  }
}

.manus-filter-tab:hover {
  color: var(--text);
}

.manus-filter-tab.is-active {
  color: var(--text);
  font-weight: 600;
}

.manus-filter-tab.is-active::after {
  content: "";
  position: absolute;
  bottom: -9px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--text);
}

/* Cuadrícula de 3 columnas estilo Manus */
.manus-grid-3 {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  width: 100%;
}

@media (min-width: 640px) {
  .manus-grid-3 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .manus-grid-3 {
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }
}

.manus-card-post {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-decoration: none;
  cursor: pointer;
  width: 100%;
}

.manus-post-img-wrap {
  width: 100%;
  aspect-ratio: 16 / 9;
  border: 1px solid var(--border);
  border-radius: 8px;
  overflow: hidden;
  background: var(--bg-section);
}

.manus-post-body {
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: flex-start;
  padding-top: 14px;
  width: 100%;
}

.manus-post-title {
  font-size: 14.5px;
  line-height: 1.25;
  font-weight: 500;
  color: var(--text);
  margin: 0;
  transition: opacity 0.2s ease;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@media (min-width: 1024px) {
  .manus-post-title {
    font-size: 16px;
  }
}

.group:hover .manus-post-title {
  opacity: 0.8;
}
</style>
