<script setup lang="ts">
import type { AssetStoryblok, OverviewSectionStoryblok } from '~/component-types-sb'

interface Props {
  blok: OverviewSectionStoryblok
}

const props = defineProps<Props>()

const getOverviewDescription = computed(() =>
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
    <div class="overview-section__text">
      <h2 class="overview-section__heading">
        {{ blok.heading }}
      </h2>
      <div
        class="overview-section__description"
        v-html="getOverviewDescription"
      />
    </div>
  </BaseSection>
</template>

<style scoped lang="scss">
.overview-section {
  &__images {
    display: grid;
    grid-template-columns: 1fr;
    gap: clamped($min-size: $spacing--2xl, $max-size: $spacing--4xl);
  }

  &__image {
    border-radius: $rounded--3xl;
    box-shadow: $shadow--regular;
    object-fit: cover;
  }

  &__text {
    margin-top: clamped($min-size: $spacing--8xl, $max-size: $spacing--12xl);
  }

  &__heading {
    margin: 0;
  }

  &__description {
    margin-top: clamped($min-size: $spacing--2xl, $max-size: $spacing--4xl);
  }
}

@include breakpoint('md') {
  .overview-section {
    &__images {
      grid-template-columns: 1.75fr 1fr;
      grid-template-rows: auto;
      align-items: stretch;
    }
  }
}
</style>
