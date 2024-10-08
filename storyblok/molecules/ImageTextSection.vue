<script setup lang="ts">
import type { ImageTextSectionStoryblok } from '~/component-types-sb'

interface Props {
  blok: ImageTextSectionStoryblok
}

const props = defineProps<Props>()

const description = computed(() => renderRichText(props.blok.description))
</script>

<template>
  <BaseSection
    v-editable="blok"
    class="image-text-section"
    :class="{ 'image-text-section--reversed': blok.reverse_layout }"
  >
    <div class="image-text-section__body">
      <ContentBlock
        v-if="blok.heading"
        :title="blok.heading"
        :title-level="blok.heading_level"
        :align="{ mobile: 'center', laptop: 'left' }"
        class="image-text-section__content"
      >
        <div v-html="description" />
      </ContentBlock>
      <div
        v-if="blok.image?.filename"
        class="image-text-section__image-box"
      >
        <NuxtImg
          :src="blok.image.filename"
          :width="1520"
          :height="756"
          :alt="blok.image.alt"
          sizes="100vw lg:50vw"
          class="image-text-section__image"
        />
      </div>
    </div>
  </BaseSection>
</template>

<style scoped lang="scss">
.image-text-section {
  $parent: &;

  &__body {
    display: grid;
    grid-template-columns: 1fr;
    gap: clamped($min-size: $spacing--4xl, $max-size: $spacing--8xl);

    @include breakpoint('lg') {
      grid-template-columns: 0.8fr 1fr;
    }
  }

  &__image {
    border-radius: $rounded--3xl;
    box-shadow: $shadow--regular;
  }

  &__content {
    order: 1;
  }

  &__image-box {
    order: 2;
  }

  &--reversed {
    #{$parent}__body {
      @include breakpoint('lg') {
        grid-template-columns: 1fr 0.75fr;
      }
    }

    #{$parent}__content {
      order: 2;
    }

    #{$parent}__image-box {
      order: 1;
    }
  }
}
</style>
