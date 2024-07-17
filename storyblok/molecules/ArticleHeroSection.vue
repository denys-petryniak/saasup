<script setup lang="ts">
import type { StoryblokStory } from 'storyblok-generate-ts'
import type { ArticleHeroSectionStoryblok, AuthorStoryblok, CategoryStoryblok } from '~/component-types-sb'

interface ArticleMeta {
  article_date: string
  article_category?: StoryblokStory<CategoryStoryblok>
}

interface Props {
  blok: ArticleHeroSectionStoryblok & ArticleMeta
}

const props = defineProps<Props>()

function isAuthorStoryblokStory(
  author: string | StoryblokStory<AuthorStoryblok>,
): author is StoryblokStory<AuthorStoryblok> {
  return typeof author !== 'string'
}

const typeCheckedAuthors = computed(() => {
  return (props.blok.authors ?? []).filter(isAuthorStoryblokStory)
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
          <div
            v-if="blok.article_category"
            class="article-hero-section__category"
          >
            <BaseButton
              :to="prependLeadingSlash(blok.article_category.full_slug)"
              size="sm"
              color="branded"
            >
              {{ blok.article_category.content?.heading }}
            </BaseButton>
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
    gap: clamped($min-size: $spacing--4xl, $max-size: $spacing--8xl);
    margin-top: clamped($min-size: $spacing--4xl, $max-size: $spacing--8xl);

    @include breakpoint('lg') {
      flex-direction: row;
      justify-content: space-between;
    }
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

  &__category {
    margin-top: $spacing--3xl;
  }
}
</style>
