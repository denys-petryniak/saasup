<script setup lang="ts">
import type { StoryblokStory } from 'storyblok-generate-ts'
import type { AllArticlesStoryblok, ArticleStoryblok } from '~/component-types-sb'

interface Props {
  blok: AllArticlesStoryblok
}

defineProps<Props>()

const articles = ref<StoryblokStory<ArticleStoryblok>[] | null>(null)

const storyblokApi = useStoryblokApi()
const storyVersion = getStoryVersion()

const { data } = await storyblokApi.get('cdn/stories', {
  version: storyVersion,
  starts_with: 'blog',
  is_startpage: false,
})

articles.value = data.stories
</script>

<template>
  <BaseSection
    v-editable="blok"
    :is-top-gap-hidden="blok.hide_top_gap"
  >
    <GridBox
      v-if="articles?.length"
      :columns="blok.columns"
    >
      <ArticleCard
        v-for="article in articles"
        :key="article.uuid"
        :article="article.content"
        :slug="article.full_slug"
      />
    </GridBox>
  </BaseSection>
</template>
