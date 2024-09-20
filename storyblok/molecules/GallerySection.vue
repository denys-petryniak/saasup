<script setup lang="ts">
import type { GallerySectionStoryblok } from '~/component-types-sb'

interface Props {
  blok: GallerySectionStoryblok
}

defineProps<Props>()
</script>

<template>
  <BaseSection
    v-editable="blok"
    :is-top-gap-hidden="blok.hide_top_gap"
    class="gallery-section"
  >
    <div
      v-if="blok.images?.length"
      class="gallery-section__images"
    >
      <NuxtImg
        v-for="image in blok.images"
        :key="image.id"
        :src="image.filename"
        :width="1362"
        :height="1402"
        :alt="image.alt"
        sizes="100vw md:50vw"
        class="gallery-section__image"
      />
    </div>
  </BaseSection>
</template>

<style scoped lang="scss">
.gallery-section {
  &__images {
    display: grid;
    grid-template-columns: 1fr;
    align-items: stretch;
    gap: clamped($min-size: $spacing--2xl, $max-size: $spacing--4xl);

    @include breakpoint('md') {
      grid-template-columns: repeat(2, 0.5fr);
    }
  }

  &__image {
    border-radius: $rounded--3xl;
    box-shadow: $shadow--regular;
    object-fit: cover;
  }
}
</style>
