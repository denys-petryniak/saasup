<script setup lang="ts">
const { siteUrl } = useAppConfig()

useHead({
  link: [{ rel: 'canonical', href: siteUrl }],
})

const resolveRelations = [
  'blog-section.articles',
]

const route = useRoute()
const slug = route.params.slug

const slugValue = slug && slug.length > 0 ? (slug as string[]).join('/') : 'home'

const { version: storyVersion } = useStoryVersion()
// eslint-disable-next-line no-console
console.log('storyVersion', storyVersion)

let story: any

try {
  story = await useAsyncStoryblok(
    slugValue,
    // API Options
    {
      version: storyVersion,
      resolve_relations: resolveRelations,
    },
    // Bridge Options
    {
      resolveRelations,
    },
  )
}
catch (error) {
  console.error('An error occurred:', error)
}

if (!story) {
  throw createError({
    statusCode: 404,
    message: 'Page not found',
  })
}

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
