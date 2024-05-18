<script setup lang="ts">
import type { AuthorStoryblok } from '~/component-types-sb'

interface Props {
  blok: AuthorStoryblok
}

const props = defineProps<Props>()

const getAuthorRating = computed(() => {
  return Number(props.blok.rating)
})
</script>

<template>
  <div
    v-editable="blok"
    class="author"
  >
    <NuxtImg
      v-if="blok.photo?.filename"
      :src="blok.photo.filename"
      :width="108"
      :height="108"
      :alt="blok.photo.alt"
      format="jpg"
      loading="lazy"
      class="author__image"
    />
    <p class="author__name">
      {{ blok.name }}
    </p>
    <p class="author__job">
      {{ blok.job }}
    </p>
    <Rating
      :rating="getAuthorRating"
      class="author__rating"
    />
  </div>
</template>

<style scoped lang="scss">
.author {
  margin-top: $spacing--xlarge;

  &__image {
    border-radius: $border-radius--circle;
  }

  &__name,
  &__job,
  &__rating {
    margin: calc($spacing--large / 2) 0 0 0;
  }

  &__name {
    @include fluid-typography(
      $min-font-size: $font-size--xlarge,
      $max-font-size: $font-size--3xlarge,
      $min-line-height: $line-height--3xsmall,
      $max-line-height: $line-height--2xsmall
    );
    font-weight: $font-weight--bold;
  }

  &__job {
    font-weight: $font-weight--semibold;
  }
}
</style>
