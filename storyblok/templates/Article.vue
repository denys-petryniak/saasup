<script setup lang="ts">
import type { ArticleStoryblok } from '~/component-types-sb'

interface Props {
  blok: ArticleStoryblok
}

defineProps<Props>()
</script>

<template>
  <article v-editable="blok">
    <StoryblokComponent
      v-for="bodyItem in blok.body"
      :key="bodyItem._uid"
      :blok="{ article_date: blok.date, ...bodyItem }"
    />
  </article>
</template>
