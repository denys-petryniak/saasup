<script setup lang="ts">
import type { StoryblokStory } from 'storyblok-generate-ts'
import type { PageStoryblok } from '~/component-types-sb'

import { storyInjectionKey } from '@/utils/keys.js'

interface StoryData {
  story: StoryblokStory<PageStoryblok>
}

const { siteUrl } = useAppConfig()

useHead({
  link: [{ rel: 'canonical', href: siteUrl }],
})

const resolveRelations = [
  'article.category',
  'article.authors',
  'articles-section.articles',
  'careers-section.vacancies',
  'pricing-section.pricing_plans',
  'testimonial-entry.author',
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
    const { data }: { data: StoryData } = await useStoryblokApi().get(apiEndpoint, {
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
  // TODO: improve types (evStory: ISbStoryData<any>)
  if (isPreview && story.value?.id) {
    useStoryblokBridge(
      story.value.id,
      evStory => ((story as any).value = evStory),
      {
        resolveRelations,
      },
    )
  }
}

onMounted(() => {
  initStoryblokBridge()
})

if (story.value) {
  provide(storyInjectionKey, story.value.uuid)
}
</script>

<template>
  <div>
    <StoryblokComponent
      v-if="story"
      :blok="story.content"
    />
  </div>
</template>
