<script setup lang="ts">
import type { ArticleStoryblok } from '~/component-types-sb'

interface Props {
  article: ArticleStoryblok
  slug: string
}

const props = defineProps<Props>()

const articleCardDescription = computed(() =>
  renderRichText(props.article.content))

const dateFormatter = ref('MMMM DD, YYYY')
const formattedDate = useDateFormat(props.article.date, dateFormatter, {
  locales: 'en-US',
})
</script>

<template>
  <BaseCard
    v-editable="article"
    class="article-card"
  >
    <template #header>
      <div
        v-if="article.image?.filename"
        class="article-card__image-box"
      >
        <NuxtImg
          :src="article.image.filename"
          :width="1194"
          :height="676"
          :alt="article.image.alt"
          sizes="100vw md:50vw"
          loading="lazy"
          class="article-card__image"
        />
        <BaseButton
          :to="prependLeadingSlash(slug)"
          size="sm"
          color="light-branded"
          class="article-card__button"
        >
          Social Media
        </BaseButton>
      </div>
    </template>
    <template #default>
      <p class="article-card__date">
        {{ formattedDate }}
      </p>
      <DynamicHeading
        v-if="article.heading"
        :as="article.heading_level"
        class="article-card__heading"
      >
        {{ article.heading }}
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
        {{ article.link_text }}
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
