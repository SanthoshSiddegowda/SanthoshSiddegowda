<script setup lang="ts">
import { withTrailingSlash } from 'ufo'

const props = defineProps({
  path: {
    type: String,
    default: 'articles'
  }
})

const { data: _articles } = await useAsyncData('articles', () =>
  queryContent(withTrailingSlash(props.path)).sort({ date: -1 }).find()
)

const articles = computed(() => _articles.value || [])

const query = ref('')
const activeTag = ref<string | null>(null)

const tags = computed(() => {
  const set = new Set<string>()
  for (const a of articles.value) (a.tags || []).forEach((t: string) => set.add(t))
  return [...set].sort()
})

const filtered = computed(() => {
  const q = query.value.trim().toLowerCase()
  return articles.value.filter((a) => {
    if (activeTag.value && !(a.tags || []).includes(activeTag.value)) return false
    if (!q) return true
    const hay = `${a.title} ${a.description || ''} ${(a.tags || []).join(' ')}`.toLowerCase()
    return hay.includes(q)
  })
})

const toggleTag = (t: string) => {
  activeTag.value = activeTag.value === t ? null : t
}
</script>

<template>
  <div class="articles">
    <div class="controls">
      <input
        v-model="query"
        type="search"
        class="search"
        placeholder="Search articles…"
        aria-label="Search articles"
      >
      <div v-if="tags.length" class="tags">
        <button
          class="tag"
          :class="{ active: activeTag === null }"
          @click="activeTag = null"
        >
          All
        </button>
        <button
          v-for="t in tags"
          :key="t"
          class="tag"
          :class="{ active: activeTag === t }"
          @click="toggleTag(t)"
        >
          {{ t }}
        </button>
      </div>
    </div>

    <div v-if="filtered.length" class="grid">
      <article v-for="a in filtered" :key="a._path">
        <NuxtLink :to="a._path" class="cover">
          <NuxtImg v-if="a.cover" :src="a.cover" :alt="a.title" width="16" height="9" />
        </NuxtLink>
        <NuxtLink :to="a._path" class="headline">
          <h2>{{ a.title }}</h2>
        </NuxtLink>
        <p v-if="a.description" class="desc">{{ a.description }}</p>
        <div class="meta">
          <time>{{ formatDate(a.date) }}</time>
          <span v-for="t in (a.tags || [])" :key="t" class="chip" @click.stop="toggleTag(t)">{{ t }}</span>
        </div>
      </article>
    </div>
    <p v-else class="empty">No articles match “{{ query }}”.</p>
  </div>
</template>

<style scoped lang="ts">
css({
  '.articles': {
    my: '{space.8}',
  },
  '.controls': {
    display: 'flex',
    flexDirection: 'column',
    gap: '{space.4}',
    marginBottom: '{space.10}',
  },
  '.search': {
    width: '100%',
    padding: '{space.3} {space.4}',
    fontSize: '{text.base.fontSize}',
    borderRadius: '{radii.md}',
    border: '1px solid {color.gray.200}',
    backgroundColor: 'transparent',
    color: 'inherit',
    outline: 'none',
    '&:focus': { borderColor: '{color.primary.500}' },
    '@dark': { borderColor: '{color.gray.800}' },
  },
  '.tags': {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '{space.2}',
  },
  '.tag': {
    padding: '{space.1} {space.3}',
    fontSize: '{text.sm.fontSize}',
    borderRadius: '9999px',
    border: '1px solid {color.gray.200}',
    backgroundColor: 'transparent',
    color: '{color.gray.600}',
    cursor: 'pointer',
    transition: 'all 0.15s',
    '&:hover': { borderColor: '{color.primary.500}' },
    '&.active': {
      backgroundColor: '{color.primary.500}',
      borderColor: '{color.primary.500}',
      color: 'white',
    },
    '@dark': { borderColor: '{color.gray.800}', color: '{color.gray.400}' },
  },
  '.grid': {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
    gap: '{space.10}',
    '@md': { gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '{space.8}' },
    '@lg': { gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' },
  },
  article: {
    display: 'flex',
    flexDirection: 'column',
    gap: '{space.3}',
    img: {
      width: '100%',
      aspectRatio: '16 / 9',
      objectFit: 'cover',
      borderRadius: '{radii.md}',
    },
    '.headline h2': {
      fontSize: '{text.xl.fontSize}',
      lineHeight: '{text.xl.lineHeight}',
      fontWeight: '{fontWeight.semibold}',
      margin: '0',
    },
    '.desc': {
      margin: '0',
      color: '{color.gray.600}',
      lineClamp: 2,
      '@dark': { color: '{color.gray.400}' },
    },
    '.meta': {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: '{space.2}',
      marginTop: 'auto',
      paddingTop: '{space.2}',
      time: { fontSize: '{text.sm.fontSize}', color: '{color.gray.500}', marginRight: '{space.2}' },
      '.chip': {
        fontSize: '{text.xs.fontSize}',
        padding: '2px {space.2}',
        borderRadius: '9999px',
        backgroundColor: '{color.gray.100}',
        color: '{color.gray.600}',
        cursor: 'pointer',
        '&:hover': { color: '{color.primary.500}' },
        '@dark': { backgroundColor: '{color.gray.900}', color: '{color.gray.400}' },
      },
    },
  },
  '.empty': {
    color: '{color.gray.500}',
    py: '{space.8}',
  },
})
</style>
