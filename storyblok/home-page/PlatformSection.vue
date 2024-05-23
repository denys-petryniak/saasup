<script setup lang="ts">
import type { PlatformSectionStoryblok } from '~/component-types-sb'

interface Props {
  blok: PlatformSectionStoryblok
}

const props = defineProps<Props>()

const getSectionDescription = computed(() =>
  renderRichText(props.blok.description))

const getCostBlockDescription = computed(() =>
  renderRichText(props.blok.cost_description))
</script>

<template>
  <BaseSection
    v-editable="blok"
    class="platform-section"
  >
    <div class="platform-section__content">
      <h2 class="platform-section__heading">
        {{ blok.heading }}
      </h2>
      <div
        class="platform-section__description"
        v-html="getSectionDescription"
      />
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
            v-html="getCostBlockDescription"
          />
        </div>
      </div>
    </div>
    <div class="platform-section__image-box">
      <NuxtImg
        v-if="blok.image?.filename"
        :src="blok.image.filename"
        :width="1541"
        :height="1168"
        :alt="blok.image.alt"
        format="avif,webp"
        sizes="sm:100vw xl:740px"
        loading="lazy"
        class="platform-section__image"
      />
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
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: $spacing--4xl;

  &__content {
    position: relative;
    flex: 1 1 convert(400px, 'rem');
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

  &__image-box {
    flex: 1 1 convert(500px, 'rem');
  }

  &__heading {
    margin: 0;
  }

  &__description {
    margin-top: $spacing--4xl;
  }

  &__cost {
    margin-top: $spacing--8xl;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0 0 0 50%;
    width: 100vw;
    height: 100%;
    transform: translate3d(-50%, 0, 0);
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
  $section-content-overlap-size: 40%;

  .platform-section {
    &::after {
      left: auto;
      width: 100%;
      transform: translate3d(85%, 0, 0);
      border-radius: $rounded--3xl * 2;
    }

    &__content {
      &::after {
        width: calc(100% + $section-content-overlap-size);
      }
    }
  }
}
</style>
