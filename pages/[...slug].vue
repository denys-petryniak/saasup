<script setup lang="ts">
const { siteUrl } = useAppConfig()

useHead({
  link: [{ rel: 'canonical', href: siteUrl }],
})

const route = useRoute()
const slug = route.params.slug
const query = route.query

const resolveRelations = [
  'blog-section.articles',
]

const getStoryVersion = computed(() => {
  // return query._storyblok ? 'draft' : 'published'

  // eslint-disable-next-line n/prefer-global/process
  return process.env.NODE_ENV === 'development'
    ? 'draft'
    : 'published'
})

// eslint-disable-next-line no-console
console.log('getStoryVersion', getStoryVersion.value)

const slugValue = slug && slug.length > 0 ? (slug as string[]).join('/') : 'home'

const story = await useAsyncStoryblok(
  slugValue,
  // API Options
  {
    version: getStoryVersion.value,
    resolve_relations: resolveRelations,
  },
  // Bridge Options
  {
    resolveRelations,
  },
)

const isHomePage = computed(() => {
  return story.value?.name === 'Home'
})
</script>

<template>
  <BodyBackground v-if="isHomePage" />
  <StoryblokComponent
    v-if="story"
    :blok="story.content"
  />
  <p v-else>
    Unfortunately, this page could not be found.
  </p>
</template>
