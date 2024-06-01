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
    <StarRating
      :rating="getAuthorRating"
      class="author__rating"
    />
  </div>
</template>

<style scoped lang="scss">
.author {
  margin-top: $spacing--4xl;

  &__image {
    margin-inline: auto;
    border-radius: $rounded--full;
  }

  &__name,
  &__job,
  &__rating {
    margin: $spacing--md 0 0 0;
  }

  &__name {
    font-size: $text--4xl;
    line-height: $leading--tight;
    font-weight: $font--bold;
  }

  &__job {
    font-weight: $font--semibold;
  }
}
</style>
