<script setup lang="ts">
import type { Image } from '~/types'

interface Props {
  title: string
  description: string
  image: Image
}

defineProps<Props>()
</script>

<template>
  <BaseSection class="cta-section">
    <div class="cta-section__content">
      <h2 class="cta-section__title">
        {{ title }}
      </h2>
      <p class="cta-section__description">
        {{ description }}
      </p>
      <div class="cta-section__controls">
        <BaseButton variant="light">
          Get Started
        </BaseButton>
        <input
          type="email"
          placeholder="Your Email Here"
        >
      </div>
    </div>
    <div class="cta-section__image-container">
      <img
        class="cta-section__image"
        :src="image.src"
        :width="image.width"
        :height="image.height"
        :alt="image.alt"
      >
    </div>
  </BaseSection>
</template>

<style scoped lang="scss">
$section-padding-y: clamped($min-size: $spacing--xlarge, $max-size: $spacing--2xlarge);
$section-padding-x: clamped($min-size: $spacing--large, $max-size: $spacing--3xlarge);

.cta-section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: $spacing--xlarge;
  padding: $section-padding-y $section-padding-x;
  border-radius: clamped($min-size: $border-radius--2xlarge, $max-size: $border-radius--3xlarge);
  background: url('/images/main-page/cta-bg.png') no-repeat 50% 50%/cover;

  &__content {
    flex: 1 1 convert(400px, 'rem');
  }

  &__image-container {
    flex: 1 1 convert(500px, 'rem');
  }

  &__title {
    margin: 0;
    color: $color-white--regular;
  }

  &__description {
    margin-top: $spacing--xlarge;
    color: $color-white--regular;
  }

  &__controls {
    display: flex;
    flex-wrap: wrap;
    gap: $spacing--medium;
    margin-top: $spacing--xlarge;
  }
}
</style>
