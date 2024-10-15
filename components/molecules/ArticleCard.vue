<script setup lang="ts">
import type { ArticleStoryblokWithRelations } from '~/types'

interface Props {
  blok: ArticleStoryblokWithRelations
  slug: string
}

const props = defineProps<Props>()

const articleCardDescription = computed(() => {
  return renderRichText(props.blok.card_description)
})

const { localeProperties } = useI18n()
const { formattedArticleDate } = useArticleDate(props.blok.date, localeProperties.value.language)

const route = useRoute()

const isCurrentSlug = computed(() => {
  return route.fullPath === prependLeadingSlash(props.blok.category.full_slug)
})

const localePath = useLocalePath()
</script>

<template>
  <BaseCard
    v-editable="blok"
    class="article-card"
  >
    <template #header>
      <div
        v-if="blok.card_image?.filename"
        class="article-card__image-box"
      >
        <NuxtImg
          :src="blok.card_image.filename"
          :width="1194"
          :height="676"
          :alt="blok.card_image.alt"
          sizes="100vw md:50vw"
          loading="lazy"
          class="article-card__image"
        />
        <BaseButton
          v-if="blok.category"
          :to="prependLeadingSlash(blok.category.full_slug)"
          :disabled="isCurrentSlug || undefined"
          size="sm"
          color="light-branded"
          class="article-card__button"
        >
          {{ blok.category.content?.heading }}
        </BaseButton>
      </div>
    </template>
    <template #default>
      <p class="article-card__date">
        {{ formattedArticleDate }}
      </p>
      <DynamicTitle
        v-if="blok.card_heading"
        :as="blok.card_heading_level"
        class="article-card__heading"
      >
        {{ blok.card_heading }}
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
        {{ blok.card_link_text }}
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
