<script setup lang="ts">
import type { StoryblokStory } from 'storyblok-generate-ts'
import type { PageStoryblok } from '~/component-types-sb'

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
  'pricing-plans-section.pricing_plans',
  'testimonial-entry.author',
]
const resolveLinks = 'url'

const storyVersion = getStoryVersion()
const isPreview = storyVersion === 'draft'

const { locale } = useI18n()
const route = useRoute()

const { slug } = route.params
const getSlug = Array.isArray(slug) && slug.length > 0 ? slug.join('/') : 'home'

const apiEndpoint = `cdn/stories/${removeTrailingSlash(getSlug)}`
const asyncKey = `page-${getSlug}-${locale.value}-${storyVersion}`

const { data: story } = await useAsyncData<StoryblokStory<PageStoryblok>>(
  asyncKey,
  async () => {
    // TODO: use getCachedData
    try {
      const { data } = await useStoryblokApi().get(apiEndpoint, {
        version: storyVersion,
        language: locale.value,
        resolve_relations: resolveRelations,
        resolve_links: resolveLinks,
      })

      return data.story
    }
    catch (error) {
      console.error('An error occurred while fetching the story:', error)
    }
  },
)

if (!story.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
    fatal: true, // important, it only works when setting this property
  })
}

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

const localePath = useLocalePath()
const isSuccessPage = route.path === localePath('/success')

if (isSuccessPage) {
  definePageMeta({
    middleware: 'check-contact-form-submission',
  })
}
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
