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
const isPreview = storyVersion === 'draft'

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

function initStoryblokBridge() {
  if (!isPreview || !story.value?.id)
    return

  useStoryblokBridge(story.value.id, evStory => (story.value = evStory), {
    resolveRelations,
  })
}

onMounted(() => {
  initStoryblokBridge()
})

const isHomePage = computed(() => {
  return story.value?.name === 'Home'
})
</script>

<template>
  <div>
    <BodyBackground v-if="isHomePage" />
    <StoryblokComponent
      v-if="!pending && story"
      :blok="story.content"
    />
    <p v-else>
      Unfortunately, this page could not be found.
    </p>
  </div>
</template>
