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

const slugValue = Array.isArray(slug) && slug.length > 0 ? slug.join('/') : 'home'

const { version: storyVersion } = useStoryVersion()
// eslint-disable-next-line no-console
console.log('storyVersion', storyVersion)

const isPreview = useRuntimeConfig().public.NODE_ENV !== 'production'

function removeTrailingSlash(value: string): string {
  return value.replace(/\/$/, '')
}

const apiEndpoint = `cdn/stories/${removeTrailingSlash(slugValue)}`

const { data: story, pending } = await useAsyncData(slugValue, async () => {
  try {
    const { data } = await useStoryblokApi().get(apiEndpoint, {
      version: storyVersion,
      resolve_relations: resolveRelations,
    })
    return data?.story
  }
  catch (error) {
    console.error('An error occurred while fetching the story:', error)
  }
})

if (!isPreview && !story.value)
  showError({ statusCode: 404, statusMessage: 'Page Not Found' })

onMounted(() => {
  if (isPreview && story.value?.id) {
    useStoryblokBridge(story.value.id, evStory => (story.value = evStory), {
      resolveRelations,
    })
  }
})

const isHomePage = computed(() => {
  return story.value?.name === 'Home'
})
</script>

<template>
  <BodyBackground v-if="isHomePage" />
  <StoryblokComponent
    v-if="!pending && story"
    :blok="story.content"
  />
  <p v-else>
    Unfortunately, this page could not be found.
  </p>
</template>
