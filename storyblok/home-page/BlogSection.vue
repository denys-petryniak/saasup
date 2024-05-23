<script setup lang="ts">
import type { BlogSectionStoryblok } from '~/component-types-sb'

interface Props {
  blok: BlogSectionStoryblok
}

defineProps<Props>()
</script>

<template>
  <BaseSection
    v-editable="blok"
    class="blog-section"
  >
    <div class="blog-section__head">
      <BaseBadge>{{ blok.badge }}</BaseBadge>
      <h2 class="blog-section__heading">
        {{ blok.heading }}
      </h2>
    </div>
    <div
      v-if="blok.articles?.length"
      class="blog-section__cards"
    >
      <!-- TODO: fix types for Article -->
      <ArticleCard
        v-for="article in blok.articles"
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
  &__head {
    text-align: center;
  }

  &__heading {
    margin-top: $spacing--4xl;
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax($card-min-width, 1fr));
    gap: $spacing--8xl;
    margin-top: clamped($min-size: $spacing--4xl, $max-size: $spacing--8xl);
  }
}
</style>
