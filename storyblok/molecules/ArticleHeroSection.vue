<script setup lang="ts">
import type { ArticleHeroSectionStoryblok } from '~/component-types-sb'

interface Props {
  blok: ArticleHeroSectionStoryblok
}

defineProps<Props>()

const { date, authors, category } = inject(blogArticleGeneralDataInjectionKey) as BlogArticleGeneralData
const { locale } = useI18n()

const { formattedArticleDate } = useArticleDate(date || new Date(), locale.value)
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
        <DynamicTitle
          v-if="blok.heading"
          :as="blok.heading_level ?? 'h1'"
          class="article-hero-section__heading"
        >
          {{ blok.heading }}
        </DynamicTitle>
        <div class="article-hero-section__meta">
          <div
            v-if="authors?.length"
            class="article-hero-section__authors"
          >
            <AuthorEntry
              v-for="author in authors"
              :key="author.uuid"
              :blok="author.content"
              :slug="author.full_slug"
            />
          </div>
          <div class="article-hero-section__date">
            <span class="article-hero-section__date-label">{{ $t('blog.posted_on') }}:</span> {{ formattedArticleDate }}
          </div>
          <div
            v-if="category"
            class="article-hero-section__category"
          >
            <BaseButton
              :to="prependLeadingSlash(category.full_slug)"
              size="sm"
              color="branded"
            >
              {{ category.content.heading }}
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
    border-radius: clamped($min-size: $rounded--3xl, $max-size: calc($rounded--3xl * 2));
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
      border-right: 1px solid $divider-color--regular;
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
    color: $primary-color--dark;
    font-weight: $font--bold;
    margin-right: $spacing--sm;
  }

  &__category {
    margin-top: $spacing--3xl;
  }
}
</style>
