<script setup lang="ts">
import type { ArticleStoryblok } from '~/component-types-sb'

interface Props {
  article: ArticleStoryblok
  slug: string
}

const props = defineProps<Props>()

const getDescription = computed(() =>
  renderRichText(props.article.content),
)
</script>

<template>
  <div
    v-editable="article"
    class="card"
  >
    <div class="card__image-box">
      <NuxtImg
        v-if="article.image?.filename"
        :src="article.image.filename"
        :width="1194"
        :height="676"
        :alt="article.image.alt"
        format="avif,webp"
        sizes="sm:100vw xl:580px"
        loading="lazy"
        class="card__image"
      />
      <BaseButton
        size="small"
        color="light-branded"
        :to="slug"
        class="card__button"
      >
        Social Media
      </BaseButton>
    </div>
    <p class="card__date">
      {{ article.date }}
    </p>
    <NuxtLink
      :to="slug"
    >
      <h3 class="card__title">
        {{ article.title }}
      </h3>
    </NuxtLink>
    <div
      class="card__description"
      v-html="getDescription"
    />
    <NuxtLink
      :to="slug"
      class="card__link"
    >
      {{ article.link_text }}
    </NuxtLink>
  </div>
</template>

<style scoped lang="scss">
$card-padding: clamped($min-size: $spacing--large, $max-size: $spacing--2xlarge);

.card {
  padding: $card-padding;
  border-radius: $border-radius--2xlarge;
  background-color: $color--secondary--extra-light;

  &__image-box {
    position: relative;
  }

  &__image {
    border-radius: $border-radius--xlarge;
  }

  &__button {
    position: absolute;
    bottom: $spacing--medium;
    left: $spacing--medium;
    border-radius: $border-radius--large;
  }

  &__date {
    margin-top: clamped($min-size: $spacing--xlarge, $max-size: $spacing--2xlarge);
    @include fluid-typography(
      $min-font-size: $font-size--base,
      $max-font-size: $font-size--small,
      $min-line-height: $line-height--3xsmall,
      $max-line-height: $line-height--2xsmall,
    );
  }

  &__title {
    margin-top: $spacing--large;
  }

  &__description {
    margin: $spacing--large 0 0 0;
  }

  &__link {
    display: inline-block;
    margin-top: clamped($min-size: $spacing--xlarge, $max-size: $spacing--2xlarge);
    font-weight: $font-weight--bold;
    text-decoration: underline;
  }

  @media (hover: hover) {
    &:hover {
      box-shadow: $shadow--regular;
    }
  }
}
</style>
