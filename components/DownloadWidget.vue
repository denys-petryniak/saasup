<script setup lang="ts">
import type { ButtonStoryblok } from 'component-types-sb'

interface Props {
  label: string | null
  title: string | null
  description: string | null
  buttons: ButtonStoryblok[] | null
}

defineProps<Props>()
</script>

<template>
  <div class="widget">
    <p class="widget__label">
      {{ label }}
    </p>
    <h4 class="widget__title">
      {{ title }}
    </h4>
    <p class="widget__description">
      {{ description }}
    </p>
    <!-- TODO: replace hardcoded buttons data with dynamic from storyblok -->
    <div class="widget__buttons">
      <BaseButton
        color="dark-branded"
        to="https://www.apple.com/in/app-store/"
        target="_blank"
        class="widget__button widget__button--dark"
      >
        <Icon
          class="widget__button-icon"
          name="raphael:apple"
          size="1.5em"
        />App Store
      </BaseButton>
      <BaseButton
        color="light-bordered"
        to="https://play.google.com/store"
        target="_blank"
        class="widget__button"
      >
        <Icon
          class="widget__button-icon"
          name="raphael:android"
          size="1.5em"
        />Play Store
      </BaseButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
$widget-max-width: convert(580px, 'rem');
$widget-padding-y: clamped(
  $min-size: $spacing--2xlarge,
  $max-size: $spacing--3xlarge,
);
$widget-padding-x: clamped(
  $min-size: $spacing--large,
  $max-size: $spacing--xlarge,
);

.widget {
  max-width: $widget-max-width;
  padding: $widget-padding-y $widget-padding-x;
  background-color: $color--secondary--extra-light;
  border-radius: $border-radius--2xlarge;

  &__label {
    margin: 0;
    font-size: $font-size--small;
    font-weight: $font-weight--bold;
    color: $color-primary--light;
  }

  &__title,
  &__description {
    margin: $spacing--medium 0;
  }

  &__button {
    display: flex;
    align-items: center;
  }

  &__button-icon {
    margin-right: $spacing--xsmall;
    flex-shrink: 0;
  }

  &__buttons {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: $spacing--medium;
    margin-top: $spacing--xlarge;
  }
}
</style>
