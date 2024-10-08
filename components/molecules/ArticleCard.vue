<script setup lang="ts">
import type { ArticleStoryblokWithRelations } from '~/types'

interface Props {
  article: ArticleStoryblokWithRelations
  slug: string
}

const props = defineProps<Props>()

const articleCardDescription = computed(() => {
  return renderRichText(props.article.card_description)
})

const { formattedArticleDate } = useArticleDate(props.article.date)

const route = useRoute()

const isCurrentSlug = computed(() => {
  return route.fullPath === prependLeadingSlash(props.article.category.full_slug)
})

const localePath = useLocalePath()
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
          v-if="article.category"
          :to="prependLeadingSlash(article.category.full_slug)"
          :disabled="isCurrentSlug || undefined"
          size="sm"
          color="light-branded"
          class="article-card__button"
        >
          {{ article.category.content?.heading }}
        </BaseButton>
      </div>
    </template>
    <template #default>
      <p class="article-card__date">
        {{ formattedArticleDate }}
      </p>
      <DynamicTitle
        v-if="article.card_heading"
        :as="article.card_heading_level"
        class="article-card__heading"
      >
        {{ article.card_heading }}
      </DynamicTitle>
      <div
        class="article-card__description"
        v-html="articleCardDescription"
      />
    </template>
    <template #footer>
      <NuxtLink
        :to="localePath(prependLeadingSlash(slug))"
        class="article-card__link"
      >
        {{ article.card_link_text }}
      </NuxtLink>
    </template>
  </BaseCard>
</template>

<style scoped lang="scss">
$card-radius--outer: calc($rounded--3xl * 2);
$card-gap--min: $spacing--2xl;
$card-gap--max: $spacing--8xl;

.article-card {
  border-radius: $card-radius--outer;
  background-color: $secondary-color--extra-light;

  &__image-box {
    position: relative;
  }

  &__image {
    border-radius: calcInnerRadius($card-radius--outer, $card-gap--min, $card-gap--max);
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
