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
    <div class="article-content-section__content" v-html="articleContent" />
  </BaseSection>
</template>

<style scoped lang="scss">
.article-content-section {
  &__content {
    &::v-deep(*) {
      &:first-child {
        margin-top: 0;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }

    &::v-deep(blockquote) {
      margin: clamped($min-size: $spacing--4xl, $max-size: $spacing--8xl) 0;
      padding: clamped($min-size: $spacing--4xl, $max-size: $spacing--12xl);
      border-left: 60px solid $color-primary--light;
      border-radius: $rounded--3xl;
      color: $color--secondary--extra-dark;
      background-color: rgba($color--secondary--dark, 0.05);

      @include breakpoint('sm') {
        border-left-width: 80px;
      }
      @include breakpoint('md') {
        border-left-width: 100px;
      }

      p:first-of-type {
        margin-top: 0;
      }
    }
  }
}
</style>
