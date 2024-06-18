<script setup lang="ts">
import type { StoryblokStory } from 'storyblok-generate-ts'
import type { ArticleStoryblok, BlogSectionStoryblok } from '~/component-types-sb'

interface Props {
  blok: BlogSectionStoryblok
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
    class="blog-section"
  >
    <template #header>
      <LabelBadge>{{ blok.badge }}</LabelBadge>
      <h2 class="blog-section__heading">
        {{ blok.heading }}
      </h2>
    </template>
    <div
      v-if="blok.articles?.length"
      class="blog-section__articles"
    >
      <ArticleCard
        v-for="article in typeCheckedArticles"
        :key="article.uuid"
        :article="article.content"
        :slug="article.full_slug"
      />
    </div>
  </BaseSection>
</template>

<style scoped lang="scss">
$card-min-width: convert(250px, 'rem');

.blog-section {
  &__heading {
    margin-top: $spacing--4xl;
  }

  &__articles {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax($card-min-width, 1fr));
    gap: $spacing--8xl;
    margin-top: clamped($min-size: $spacing--4xl, $max-size: $spacing--8xl);
  }
}
</style>
