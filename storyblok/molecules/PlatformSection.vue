<script setup lang="ts">
import type { PlatformSectionStoryblok } from '~/component-types-sb'

interface Props {
  blok: PlatformSectionStoryblok
}

const props = defineProps<Props>()

const sectionDescription = computed(() => renderRichText(props.blok.description))
const costBlockDescription = computed(() => renderRichText(props.blok.cost_description))
</script>

<template>
  <BaseSection
    v-editable="blok"
    class="platform-section"
  >
    <div class="platform-section__body">
      <ContentBlock
        v-if="blok.heading"
        :heading="blok.heading"
        :heading-level="blok.heading_level"
        class="platform-section__content"
      >
        <div v-html="sectionDescription" />
        <template #footer>
          <div class="cost platform-section__cost">
            <img
              v-if="blok.cost_image?.filename"
              :src="blok.cost_image.filename"
              :width="96"
              :height="103"
              :alt="blok.cost_image.alt"
              loading="lazy"
              class="cost__icon"
            >
            <div class="cost__text">
              <h3 class="cost__heading">
                {{ blok.cost_heading }}
              </h3>
              <div
                class="cost__description"
                v-html="costBlockDescription"
              />
            </div>
          </div>
        </template>
      </ContentBlock>
      <div
        v-if="blok.image?.filename"
        class="platform-section__image-box"
      >
        <NuxtImg
          :src="blok.image.filename"
          :width="1541"
          :height="1168"
          :alt="blok.image.alt"
          sizes="100vw lg:50vw"
          loading="lazy"
          class="platform-section__image"
        />
      </div>
    </div>
  </BaseSection>
</template>

<style scoped lang="scss">
$section-content-padding-y: clamped(
  $min-size: $spacing--8xl,
  $max-size: $gap--lg,
);
$section-content-padding-x: clamped(
  $min-size: $spacing--2xl,
  $max-size: $spacing--2xl,
);
$section-content-bg-z-index: -1;
$section-bg-z-index: -2;

.platform-section {
  position: relative;

  &__body {
    display: grid;
    grid-template-columns: 1fr;
    @include breakpoint('lg') {
      grid-template-columns: 0.8fr 1fr;
    }
    align-items: center;
    gap: clamped($min-size: $spacing--4xl, $max-size: $spacing--8xl);
  }

  &__content {
    position: relative;
    padding: $section-content-padding-y $section-content-padding-x;

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      border-radius: $rounded--3xl * 2;
      z-index: $section-content-bg-z-index;
      background-color: $color--secondary--extra-light;
      pointer-events: none;
    }
  }

  &__image {
    border-radius: $rounded--3xl * 2;
    box-shadow: $shadow--regular;
  }

  &__cost {
    margin-top: $spacing--8xl;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0 0 0 0;
    width: 100%;
    height: 100%;
    z-index: $section-bg-z-index;
    background-color: $color-primary--light;
    pointer-events: none;
  }
}

.cost {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: $spacing--lg;

  &__text {
    flex: 1 1 convert(374px, 'rem');
  }

  &__heading {
    margin: 0;
    font-weight: $font--bold;
    line-height: $leading--none;
  }

  &__description {
    margin: $spacing--lg 0 0 0;
  }
}

@include breakpoint('lg') {
  $section-content-overlap: 40%;

  .platform-section {
    &::after {
      left: 70%;
      border-radius: $rounded--3xl * 2;
    }

    &__content {
      &::after {
        width: 100% + $section-content-overlap;
      }
    }
  }
}
</style>
