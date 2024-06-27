<script setup lang="ts">
import type { AssetStoryblok, OverviewSectionStoryblok } from '~/component-types-sb'

interface Props {
  blok: OverviewSectionStoryblok
}

const props = defineProps<Props>()

const overviewDescription = computed(() =>
  renderRichText(props.blok.description))

function isFirstOverviewImage(image: AssetStoryblok): boolean {
  return image.filename.includes('overview-1')
}
</script>

<template>
  <BaseSection
    v-editable="blok"
    :is-top-gap-hidden="blok.hide_top_gap"
    class="overview-section"
  >
    <div v-if="blok.images?.length" class="overview-section__images">
      <NuxtImg
        v-for="image in blok.images"
        :key="image.id"
        :src="image.filename"
        :width="isFirstOverviewImage(image) ? 1768 : 952"
        :height="isFirstOverviewImage(image) ? 1166 : 1166"
        :sizes="isFirstOverviewImage(image) ? '100vw md:75vw' : '100vw md:25vw'"
        :alt="image.alt"
        class="overview-section__image"
      />
    </div>
    <div class="overview-section__content">
      <DynamicHeading
        :as="blok.heading_level"
        class="overview-section__heading"
      >
        {{ blok.heading }}
      </DynamicHeading>
      <div
        class="overview-section__description"
        v-html="overviewDescription"
      />
    </div>
  </BaseSection>
</template>

<style scoped lang="scss">
.overview-section {
  &__images {
    display: grid;
    grid-template-columns: 1fr;
    @include breakpoint('md') {
      grid-template-columns: 1fr 0.5fr;
    }
    align-items: stretch;
    gap: clamped($min-size: $spacing--2xl, $max-size: $spacing--4xl);
  }

  &__image {
    aspect-ratio: 1 / 1;
    @include breakpoint('md') {
      aspect-ratio: initial;
    }
    border-radius: $rounded--3xl;
    box-shadow: $shadow--regular;
    object-fit: cover;
  }

  &__content {
    display: grid;
    grid-template-columns: 1fr;
    @include breakpoint('md') {
      grid-template-columns: 0.5fr 1fr;
    }
    gap: clamped($min-size: $spacing--2xl, $max-size: $spacing--4xl);
    margin-top: clamped($min-size: $spacing--8xl, $max-size: $spacing--12xl);
  }

  &__heading {
    margin: 0;
  }

  &__description::v-deep(p:first-of-type) {
    margin-top: 0;
  }
}
</style>
