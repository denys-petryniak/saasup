<script setup lang="ts">
import type { ArticleStoryblok } from '~/component-types-sb'

interface Props {
  blok: ArticleStoryblok
}

const props = defineProps<Props>()

const articleContent = computed(() => renderRichText(props.blok.content))
</script>

<template>
  <article v-editable="blok">
    <BaseSection>
      <DynamicHeading
        v-if="blok.heading"
        :as="blok.heading_level"
      >
        {{ blok.heading }}
      </DynamicHeading>
      <div v-html="articleContent" />
    </BaseSection>
  </article>
</template>
