<script setup lang="ts">
import type { StoryblokStory } from 'storyblok-generate-ts'
import type { ArticleStoryblok, AuthorStoryblok, CategoryStoryblok } from '~/component-types-sb'

type ArticleStoryblokWithRelations = ArticleStoryblok & {
  category: StoryblokStory<CategoryStoryblok>
  authors: StoryblokStory<AuthorStoryblok>[]
}

interface Props {
  blok: ArticleStoryblokWithRelations
}

const props = defineProps<Props>()

provide(blogArticleGeneralDataInjectionKey, {
  date: props.blok.date,
  category: props.blok.category,
  authors: props.blok.authors,
})
</script>

<template>
  <article v-editable="blok">
    <StoryblokComponent
      v-for="item in blok.body"
      :key="item._uid"
      :blok="item"
    />
  </article>
</template>
