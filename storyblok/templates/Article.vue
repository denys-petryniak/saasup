<script setup lang="ts">
import type { StoryblokStory } from 'storyblok-generate-ts'
import type { ArticleStoryblok, AuthorStoryblok, CategoryStoryblok } from '~/component-types-sb'

import { blogArticleMetaInjectionKey } from '@/utils/keys.js'

interface Props {
  blok: ArticleStoryblok
}

const props = defineProps<Props>()

// TODO: simplify type checking

// Type guard for AuthorStoryblok
function isAuthorStoryblokStory(
  author: string | StoryblokStory<AuthorStoryblok>,
): author is StoryblokStory<AuthorStoryblok> {
  return typeof author !== 'string'
}

const typeCheckedAuthors = computed(() => {
  return (props.blok.authors ?? []).filter(isAuthorStoryblokStory)
})

// Type guard for CategoryStoryblok
function isCategoryStoryblokStory(
  category: string | StoryblokStory<CategoryStoryblok>,
): category is StoryblokStory<CategoryStoryblok> {
  return typeof category !== 'string'
}

const typeCheckedCategory = computed(() => {
  return isCategoryStoryblokStory(props.blok.category) ? props.blok.category : undefined
})

if (!typeCheckedCategory.value) {
  throw new Error('Category is missing or not a valid Storyblok category')
}

provide(blogArticleMetaInjectionKey, {
  date: props.blok.date,
  category: typeCheckedCategory.value,
  authors: typeCheckedAuthors.value,
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
