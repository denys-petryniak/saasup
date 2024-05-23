<script setup lang="ts">
import type { ArticleStoryblok } from '~/component-types-sb'

interface Props {
  article: ArticleStoryblok
  slug: string
}

const props = defineProps<Props>()

const getDescription = computed(() =>
  renderRichText(props.article.content))

const dateFormatter = ref('MMMM DD, YYYY')
const formattedDate = useDateFormat(props.article.date, dateFormatter, {
  locales: 'en-US',
})
</script>

<template>
  <div
    v-editable="article"
    class="card"
  >
    <div class="card__image-box">
      <!-- replace with NuxtPicture (?) because of avif support -->
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
        size="sm"
        color="light-branded"
        :to="slug"
        class="card__button"
      >
        Social Media
      </BaseButton>
    </div>
    <p class="card__date">
      {{ formattedDate }}
    </p>
    <NuxtLink :to="slug">
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
$card-padding: clamped(
  $min-size: $spacing--2xl,
  $max-size: $spacing--8xl,
);
// outer radius = inner radius + gap
// source: https://cloudfour.com/thinks/the-math-behind-nesting-rounded-corners/
$card-image-border-radius: $rounded--2xl * 2;
$card-border-radius: clamped(
  $min-size: $card-image-border-radius + $spacing--2xl,
  $max-size: $card-image-border-radius + $spacing--8xl,
);

.card {
  padding: $card-padding;
  border-radius: $card-border-radius;
  background-color: $color--secondary--extra-light;

  &__image-box {
    position: relative;
  }

  &__image {
    border-radius: $card-image-border-radius;
  }

  &__button {
    position: absolute;
    bottom: $spacing--lg;
    left: $spacing--lg;
    border-radius: $rounded--3xl;
  }

  &__date {
    margin-top: clamped($min-size: $spacing--4xl, $max-size: $spacing--8xl);
    @include fluid-typography(
      $min-font-size: $text--base,
      $max-font-size: $text--lg,
      $min-line-height: $leading--tight,
      $max-line-height: $leading--condensed
    );
  }

  &__title {
    margin-top: $spacing--2xl;
  }

  &__description {
    margin: $spacing--2xl 0 0 0;
  }

  &__link {
    display: inline-block;
    margin-top: clamped($min-size: $spacing--4xl, $max-size: $spacing--8xl);
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
