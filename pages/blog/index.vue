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
        <h1 class="h-display mt-2">{{ t('blog.title') }}</h1>
        <p class="subtitle mt-4 mx-auto" style="max-width: 720px;">
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
        <!-- FEATURED POST CARD -->
        <div v-if="featuredPost" class="featured-card-wrapper mb-12">
          <NuxtLink
            :to="localePath('/blog/' + featuredPost.slug)"
            class="featured-card group"
          >
            <div class="featured-card-body">
              <div class="post-meta-row">
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
                  <div class="author-avatar-icon">⚖️</div>
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
              :to="localePath('/blog/' + post.slug)"
              class="post-card-inner"
            >
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
            </NuxtLink>
          </article>
        </div>

        <!-- BOTTOM CALL TO ACTION (STANDARDIZED WITH APPDOWNLOAD) -->
        <div class="blog-cta-banner mt-20">
          <div class="blog-cta-content text-center">
            <span class="eyebrow">{{ t('home.ctaSectionEyebrow') }}</span>
            <h3 class="blog-cta-title">{{ t('blog.ctaTitle') }}</h3>
            <p class="blog-cta-subtitle">{{ t('blog.ctaSubtitle') }}</p>
            <div class="flex justify-center">
              <AppDownload center />
            </div>
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
  background: #fafaf9;
  border: 1px solid #ebebea;
  border-radius: 20px;
  padding: clamp(28px, 4vw, 44px);
  transition: all 0.25s ease;
}

.featured-card:hover {
  border-color: #d3d3d0;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.05);
  transform: translateY(-2px);
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
  padding: 28px;
  display: flex;
  flex-direction: column;
  transition: all 0.25s ease;
}

.post-card:hover {
  border-color: #d3d3d0;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
  transform: translateY(-2px);
}

.post-card-inner {
  text-decoration: none;
  display: flex;
  flex-direction: column;
  height: 100%;
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

/* CTA Banner */
.blog-cta-banner {
  background: #fbfbfa;
  border: 1px solid #ebebea;
  border-radius: 20px;
  padding: clamp(36px, 5vw, 56px) 24px;
}

.blog-cta-title {
  font-size: clamp(22px, 2.5vw, 30px);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #191919;
  margin-bottom: 10px;
}

.blog-cta-subtitle {
  font-size: 16px;
  color: #5f5e5b;
  max-width: 600px;
  margin: 0 auto 28px;
}
</style>
