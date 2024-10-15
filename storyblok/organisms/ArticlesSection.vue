<script setup lang="ts">
import type { ArticlesSectionStoryblokWithRelations } from '~/types'

interface Props {
  blok: ArticlesSectionStoryblokWithRelations
}

defineProps<Props>()
</script>

<template>
  <BaseSection
    v-editable="blok"
    :is-top-gap-hidden="blok.hide_top_gap"
    class="articles-section"
  >
    <ContentBlock
      v-if="blok.heading"
      :headline="blok.headline"
      :title="blok.heading"
      :title-level="blok.heading_level"
    />
    <GridBox
      v-if="blok.articles?.length"
      :columns="blok.columns"
      class="articles-section__cards"
    >
      <ArticleCard
        v-for="article in blok.articles"
        :key="article.uuid"
        :blok="article.content"
        :slug="article.full_slug"
      />
    </GridBox>
  </BaseSection>
</template>

<style scoped lang="scss">
.articles-section {
  &__cards {
    margin-top: clamped($min-size: $spacing--4xl, $max-size: $spacing--8xl);
  }
}
</style>
