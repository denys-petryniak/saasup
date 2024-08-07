<script setup lang="ts">
import type { StoryblokStory } from 'storyblok-generate-ts'
import type { ArticleStoryblok, CategoryStoryblok } from '~/component-types-sb'

interface Props {
  article: ArticleStoryblok
  slug: string
}

const props = defineProps<Props>()

const articleCardDescription = computed(() =>
  renderRichText(props.article.card_description))

const { formattedArticleDate } = useArticleDate(props.article.date)

function isCategoryStoryblokStory(
  category: string | StoryblokStory<CategoryStoryblok>,
): category is StoryblokStory<CategoryStoryblok> {
  return typeof category !== 'string'
}

const typeCheckedCategory = computed(() => {
  if (!props.article.category)
    return

  return isCategoryStoryblokStory(props.article.category) ? props.article.category : undefined
})

const route = useRoute()

const isCurrentSlug = computed(() => {
  if (!typeCheckedCategory.value)
    return false

  return route.fullPath === prependLeadingSlash(typeCheckedCategory.value.full_slug)
})
</script>

<template>
  <BaseCard
    v-editable="article"
    class="article-card"
  >
    <template #header>
      <div
        v-if="article.card_image?.filename"
        class="article-card__image-box"
      >
        <NuxtImg
          :src="article.card_image.filename"
          :width="1194"
          :height="676"
          :alt="article.card_image.alt"
          sizes="100vw md:50vw"
          loading="lazy"
          class="article-card__image"
        />
        <BaseButton
          v-if="typeCheckedCategory"
          :to="prependLeadingSlash(typeCheckedCategory.full_slug)"
          :disabled="isCurrentSlug || undefined"
          size="sm"
          color="light-branded"
          class="article-card__button"
        >
          {{ typeCheckedCategory.content.heading }}
        </BaseButton>
      </div>
    </template>
    <template #default>
      <p class="article-card__date">
        {{ formattedArticleDate }}
      </p>
      <DynamicHeading
        v-if="article.card_heading"
        :as="article.card_heading_level"
        class="article-card__heading"
      >
        {{ article.card_heading }}
      </DynamicHeading>
      <div
        class="article-card__description"
        v-html="articleCardDescription"
      />
    </template>
    <template #footer>
      <NuxtLink
        :to="prependLeadingSlash(slug)"
        class="article-card__link"
      >
        {{ article.card_link_text }}
      </NuxtLink>
    </template>
  </BaseCard>
</template>

<style scoped lang="scss">
// outer radius = inner radius + gap -> inner radius = outer radius - gap
// source: https://cloudfour.com/thinks/the-math-behind-nesting-rounded-corners/
$article-card-border-radius: $rounded--3xl * 2;
$article-card-image-border-radius: clamped(
  $min-size: $article-card-border-radius - $spacing--2xl,
  $max-size: $article-card-border-radius - $spacing--8xl,
);

.article-card {
  border-radius: $article-card-border-radius;
  background-color: $color--secondary--extra-light;

  &__image-box {
    position: relative;
  }

  &__image {
    border-radius: $article-card-image-border-radius;
  }

  &__button {
    position: absolute;
    bottom: $spacing--lg;
    left: $spacing--lg;
    border-radius: $rounded--3xl;
  }

  &__date {
    margin: 0;
    @include fluid-typography(
      $min-font-size: $text--base,
      $max-font-size: $text--lg,
      $min-line-height: $leading--tight,
      $max-line-height: $leading--condensed
    );
  }

  &__heading {
    margin-top: $spacing--2xl;
    @include fluid-typography(
      $min-font-size: $text--2xl,
      $max-font-size: $text--3xl,
      $min-line-height: $leading--tight,
      $max-line-height: $leading--condensed
    );
  }

  &__link {
    display: inline-block;
    font-weight: $font--bold;
    text-decoration: underline;
  }

  @media (hover: hover) {
    &:hover {
      box-shadow: $shadow--regular;
    }
  }
}
</style>
