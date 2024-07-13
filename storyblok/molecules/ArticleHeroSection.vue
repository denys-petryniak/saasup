<script setup lang="ts">
import type { StoryblokStory } from 'storyblok-generate-ts'
import type { ArticleHeroSectionStoryblok, AuthorStoryblok } from '~/component-types-sb'

type ArticleHeroSectionWithDate = ArticleHeroSectionStoryblok & { article_date: string }

interface Props {
  blok: ArticleHeroSectionWithDate
}

const props = defineProps<Props>()

function isStoryblokStory(
  author: string | StoryblokStory<AuthorStoryblok>,
): author is StoryblokStory<AuthorStoryblok> {
  return typeof author !== 'string'
}

const typeCheckedAuthors = computed(() => {
  return (props.blok.authors ?? []).filter(isStoryblokStory)
})

const { formattedArticleDate } = useArticleDate(props.blok.article_date)
</script>

<template>
  <BaseSection
    v-editable="blok"
    class="article-hero-section"
  >
    <div class="article-hero-section__body">
      <div
        v-if="blok.image?.filename"
        class="article-hero-section__image-box"
      >
        <NuxtImg
          :src="blok.image.filename"
          :width="1400"
          :height="700"
          :alt="blok.image.alt"
          class="article-hero-section__image"
        />
      </div>
      <div class="article-hero-section__content">
        <DynamicHeading
          v-if="blok.heading"
          :as="blok.heading_level ?? 'h1'"
          class="article-hero-section__heading"
        >
          {{ blok.heading }}
        </DynamicHeading>
        <div class="article-hero-section__meta">
          <div
            v-if="blok.authors?.length"
            class="article-hero-section__authors"
          >
            <AuthorEntry
              v-for="author in typeCheckedAuthors"
              :key="author.uuid"
              :blok="author.content"
            />
          </div>
          <div class="article-hero-section__date">
            <span class="article-hero-section__date-label">Posted On:</span> {{ formattedArticleDate }}
          </div>
        </div>
      </div>
    </div>
  </BaseSection>
</template>

<style scoped lang="scss">
.article-hero-section {
  &__image {
    border-radius: clamped(
      $min-size: $rounded--3xl,
      $max-size: $rounded--3xl * 2
    );
    object-fit: cover;
  }

  &__content {
    display: flex;
    flex-direction: column;
    @include breakpoint('lg') {
      flex-direction: row;
      justify-content: space-between;
    }
    gap: clamped($min-size: $spacing--4xl, $max-size: $spacing--8xl);
    margin-top: clamped($min-size: $spacing--4xl, $max-size: $spacing--8xl);
  }

  &__heading {
    flex: 1 1 70%;
    margin: 0;
    @include breakpoint('lg') {
      border-right: 1px solid $color-devider--regular;
    }
  }

  &__meta {
    flex: 1 1 30%;
  }

  &__authors {
    display: flex;
    flex-direction: column;
    gap: $spacing--md;
  }

  &__date {
    margin-top: $spacing--lg;
  }

  &__date-label {
    color: $color-primary--dark;
    font-weight: $font--bold;
    margin-right: $spacing--sm;
  }
}
</style>
