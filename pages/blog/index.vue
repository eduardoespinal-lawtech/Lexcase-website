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
        <!-- FEATURED POST CARD (CLEAN EDITORIAL TYPOGRAPHY) -->
        <div v-if="featuredPost" class="featured-card-wrapper mb-10">
          <NuxtLink
            :to="localePath('/blog/' + featuredPost.slug + '/')"
            class="featured-card group"
          >
            <div class="featured-card-body">
              <div class="post-meta-row">
                <span class="featured-pill">
                  {{ isEn ? 'Featured' : 'Destacado' }}
                </span>
                <span class="post-cat-badge">
                  {{ isEn ? featuredPost.category.en : featuredPost.category.es }}
                </span>
                <span class="post-dot">·</span>
                <span class="post-date">{{ formatDate(featuredPost.date) }}</span>
                <span class="post-dot">·</span>
                <span class="post-readtime">
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

        <!-- POSTS GRID -->
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
              <div class="post-card-content">
                <div class="post-meta-row mb-3">
                  <span class="post-cat-badge">
                    {{ isEn ? post.category.en : post.category.es }}
                  </span>
                  <span class="post-dot">·</span>
                  <span class="post-readtime">
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
                  <span class="post-date text-xs text-gray-500">{{ formatDate(post.date) }}</span>
                  <span class="read-link-sm">
                    {{ t('blog.readArticle') }} →
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
  background: #ffffff;
}

.blog-hero-title {
  font-size: clamp(28px, 3.2vw, 40px);
  line-height: 1.16;
  font-weight: 800;
  letter-spacing: -0.025em;
  color: #050505;
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
  background: #f4f4f2;
  color: #5f5e5b;
  border: 1px solid transparent;
  transition: all 0.2s ease;
  cursor: pointer;
}

.cat-pill:hover {
  background: #e8e8e6;
  color: #191919;
}

.cat-pill.active {
  background: #050505;
  color: #ffffff;
}

/* Featured Card */
.featured-card-wrapper {
  background: #ffffff;
}

.featured-card {
  display: block;
  text-decoration: none;
  background: linear-gradient(135deg, #fbfbfa 0%, #f6f9ff 100%);
  border: 1px solid #e2e8f0;
  border-left: 4px solid #0066cc;
  border-radius: 18px;
  padding: clamp(26px, 3.5vw, 40px);
  transition: all 0.25s ease;
}

.featured-card:hover {
  border-color: #bfdbfe;
  border-left-color: #0066cc;
  box-shadow: 0 12px 32px rgba(15, 23, 42, 0.06);
  transform: translateY(-2px);
}

.featured-pill {
  background: #0066cc;
  color: #ffffff;
  padding: 3px 10px;
  border-radius: 6px;
  font-weight: 700;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.post-meta-row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 12.5px;
  color: #8b8a86;
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

.post-dot {
  color: #d3d3d0;
}

.featured-title {
  font-size: clamp(24px, 3vw, 36px);
  line-height: 1.22;
  font-weight: 700;
  letter-spacing: -0.025em;
  color: #191919;
  margin-top: 14px;
  margin-bottom: 14px;
  text-wrap: balance;
}

.featured-desc {
  font-size: clamp(15.5px, 1.4vw, 17px);
  line-height: 1.6;
  color: #5f5e5b;
  max-width: 880px;
  margin-bottom: 28px;
  text-wrap: pretty;
}

.featured-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  padding-top: 20px;
  border-top: 1px solid #ebebea;
}

.author-block {
  display: flex;
  align-items: center;
  gap: 12px;
}

.author-avatar-icon {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: #ffffff;
  border: 1px solid #ebebea;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}

.author-name {
  display: block;
  font-size: 13.5px;
  font-weight: 600;
  color: #191919;
}

.author-role {
  display: block;
  font-size: 11.5px;
  color: #8b8a86;
}

.read-link {
  font-size: 14px;
  font-weight: 600;
  color: #0066cc;
  display: inline-flex;
  align-items: center;
}

/* Posts Grid */
.posts-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

@media (min-width: 768px) {
  .posts-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.post-card {
  background: #ffffff;
  border: 1px solid #ebebea;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.25s ease;
}

.post-card:hover {
  border-color: #d3d3d0;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
  transform: translateY(-2px);
}

.post-card-inner {
  text-decoration: none;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.post-card-content {
  padding: 28px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.post-title {
  font-size: 20px;
  line-height: 1.3;
  font-weight: 600;
  letter-spacing: -0.015em;
  color: #191919;
  margin-bottom: 10px;
  text-wrap: balance;
}

.post-desc {
  font-size: 14.5px;
  line-height: 1.55;
  color: #5f5e5b;
  margin-bottom: 16px;
  text-wrap: pretty;
}

.post-footer-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #f4f4f2;
}

.read-link-sm {
  font-size: 13px;
  font-weight: 600;
  color: #0066cc;
}

/* Blog CTA Box */
.blog-cta-box {
  background: #fbfbfa;
  border: 1px solid #ebebea;
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
  color: #050505;
  letter-spacing: -0.025em;
  line-height: 1.2;
  margin: 0 0 10px;
  text-wrap: balance;
}

.blog-cta-text {
  font-size: 15px;
  line-height: 1.55;
  color: #5f5e5b;
  margin: 0;
  text-wrap: pretty;
}

.blog-tool-link {
  display: inline-flex;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  color: #0066cc;
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
