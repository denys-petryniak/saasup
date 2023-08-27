<script setup lang="ts">
import type { ArticleStoryblok } from '~/component-types-sb'

interface Props {
  blok: ArticleStoryblok
}

const props = defineProps<Props>()

const resolvedRichText = computed(() => renderRichText(props.blok.content))
</script>

<template>
  <article v-editable="blok">
    <BaseSection>
      <h1>{{ blok.title }}</h1>
      <div v-html="resolvedRichText" />
    </BaseSection>
  </article>
</template>
