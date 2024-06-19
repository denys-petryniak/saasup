<script setup lang="ts">
const { siteUrl } = useAppConfig()

useHead({
  link: [{ rel: 'canonical', href: siteUrl }],
})

const resolveRelations = [
  'articles-section.articles',
  'careers-section.vacancies',
]
const resolveLinks = 'url'

const storyVersion = getStoryVersion()
const isPreview = storyVersion === 'draft'

const route = useRoute()
const slug = route.params.slug
const getSlug = Array.isArray(slug) && slug.length > 0 ? slug.join('/') : 'home'
const apiEndpoint = `cdn/stories/${removeTrailingSlash(getSlug)}`

const { data: story } = await useAsyncData(getSlug, async () => {
  try {
    const { data } = await useStoryblokApi().get(apiEndpoint, {
      version: storyVersion,
      resolve_relations: resolveRelations,
      resolve_links: resolveLinks,
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
</script>

<template>
  <div>
    <StoryblokComponent
      v-if="story"
      :blok="story.content"
    />
  </div>
</template>
