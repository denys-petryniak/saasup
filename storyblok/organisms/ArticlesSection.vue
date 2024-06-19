<script setup lang="ts">
import type { StoryblokStory } from 'storyblok-generate-ts'
import type { ArticleStoryblok, ArticlesSectionStoryblok } from '~/component-types-sb'

interface Props {
  blok: ArticlesSectionStoryblok
}

const props = defineProps<Props>()

function isStoryblokStory(
  article: string | StoryblokStory<ArticleStoryblok>,
): article is StoryblokStory<ArticleStoryblok> {
  return typeof article !== 'string'
}

const typeCheckedArticles = computed(() => {
  return (props.blok.articles ?? []).filter(isStoryblokStory)
})
</script>

<template>
  <BaseSection
    v-editable="blok"
    :is-top-gap-hidden="blok.hide_top_gap"
    class="articles-section"
  >
    <template #header>
      <LabelBadge v-if="blok.badge">
        {{ blok.badge }}
      </LabelBadge>
      <h2 v-if="blok.heading" class="articles-section__heading">
        {{ blok.heading }}
      </h2>
    </template>
    <GridBox
      v-if="blok.articles?.length"
      :columns="blok.columns"
      class="articles-section__cards"
    >
      <ArticleCard
        v-for="article in typeCheckedArticles"
        :key="article.uuid"
        :article="article.content"
        :slug="article.full_slug"
      />
    </GridBox>
  </BaseSection>
</template>

<style scoped lang="scss">
.articles-section {
  &__heading {
    margin-top: $spacing--4xl;
  }

  &__cards {
    margin-top: clamped($min-size: $spacing--4xl, $max-size: $spacing--8xl);
  }
}
</style>
