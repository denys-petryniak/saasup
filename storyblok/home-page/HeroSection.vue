<script setup lang="ts">
import type { HeroSectionStoryblok } from '~/component-types-sb'

interface Props {
  blok: HeroSectionStoryblok
}

const props = defineProps<Props>()

const getHeroDescription = computed(() =>
  renderRichText(props.blok.description),
)
</script>

<template>
  <BaseSection
    v-editable="blok"
    class="hero-section"
  >
    <div class="hero-section__content">
      <h1 class="hero-section__heading">
        {{ blok.heading }}
      </h1>
      <div
        class="hero-section__description"
        v-html="getHeroDescription"
      />
      <div class="hero-section__buttons">
        <BaseButton>
          Get Started
        </BaseButton>
        <BaseButton
          color="light-bordered"
          class="hero-section__video-button"
        >
          <span class="hero-section__video-button-text">Watch Video</span>
          <Icon
            class="hero-section__video-button-icon"
            name="carbon:play-filled"
          />
        </BaseButton>
      </div>
    </div>
    <div class="hero-section__image-box">
      <NuxtImg
        v-if="blok.image?.filename"
        :src="blok.image.filename"
        :width="1541"
        :height="1168"
        :alt="blok.image.alt"
        format="avif,webp"
        sizes="sm:100vw xl:740px"
        class="hero-section__image"
      />
    </div>
  </BaseSection>
</template>

<style scoped lang="scss">
.hero-section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: $spacing--xlarge;

  &__content {
    flex: 1 1 convert(400px, 'rem');
  }

  &__image-box {
    flex: 1 1 convert(500px, 'rem');
  }

  &__heading {
    margin: 0;
  }

  &__description {
    margin-top: $spacing--xlarge;
  }

  &__buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: $spacing--medium;
    margin-top: $spacing--xlarge;
  }

  &__video-button {
    position: relative;
  }

  &__video-button-text {
    margin-right: $spacing--large;
  }

  &__video-button-icon {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate3d(0, -50%, 0);
    width: 30%;
    height: 100%;
    padding: $spacing--xsmall;
  }

  &__image {
    border-radius: 25px;
    box-shadow: 0 3px 13px 0 rgba(0, 0, 0, 0.11);
  }
}

@include breakpoint('large') {
  .hero-section {
    &__buttons {
      justify-content: flex-start;
    }
  }
}
</style>
