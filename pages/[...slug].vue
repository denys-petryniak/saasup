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

const story = await useAsyncStoryblok(
  slug && slug.length > 0 ? (slug as string[]).join('/') : 'home',
  {
    // version: query._storyblok ? 'draft' : 'published',
    version: 'draft',
    resolve_relations: resolveRelations,
  },
  {
    resolveRelations,
  },
)

// if (story.value?.status) {
//   throw createError({
//     statusCode: story.value.status,
//     statusMessage: story.value.response,
//   })
// }

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
