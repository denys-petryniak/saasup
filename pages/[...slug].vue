<script setup lang="ts">
const { siteUrl } = useAppConfig()

useHead({
  link: [{ rel: 'canonical', href: siteUrl }],
})

const resolveRelations = [
  'blog-section.articles',
]

const storyVersion = getStoryVersion()
const isPreview = storyVersion === 'draft'

const route = useRoute()
const slug = route.params.slug
const getSlug = Array.isArray(slug) && slug.length > 0 ? slug.join('/') : 'home'

const { data: story } = await useAsyncData(getSlug, async () => {
  const apiEndpoint = `cdn/stories/${removeTrailingSlash(getSlug)}`

  try {
    const { data } = await useStoryblokApi().get(apiEndpoint, {
      version: storyVersion,
      resolve_relations: resolveRelations,
    })

    return data.story
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

  useStoryblokBridge(
    story.value.id,
    evStory => (story.value = evStory),
    {
      resolveRelations,
    },
  )
}

onMounted(() => {
  initStoryblokBridge()
})

const isHomePage = computed(() => story.value.name === 'Home')
</script>

<template>
  <div>
    <BodyBackground v-if="isHomePage" />
    <StoryblokComponent
      v-if="story"
      :blok="story.content"
    />
  </div>
</template>
