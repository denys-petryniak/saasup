<script setup lang="ts">
import type { ArticleContentStoryblok } from '~/component-types-sb'

interface Props {
  blok: ArticleContentStoryblok
}

const props = defineProps<Props>()

const articleContent = computed(() => renderRichText(props.blok.content))
</script>

<template>
  <BaseSection
    v-editable="blok"
    :is-top-gap-hidden="blok.hide_top_gap"
    container-size="lg"
    class="article-content-section"
  >
    <div
      class="article-content-section__content rich-text"
      v-html="articleContent"
    />
  </BaseSection>
</template>
