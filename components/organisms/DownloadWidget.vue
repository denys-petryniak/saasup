<script setup lang="ts">
import type { ButtonStoryblok } from '~/component-types-sb'

interface Props {
  label: string
  title: string
  description: string
  buttons: ButtonStoryblok[]
}

defineProps<Props>()
</script>

<template>
  <div class="widget">
    <p class="widget__label">
      {{ label }}
    </p>
    <p class="title widget__title">
      {{ title }}
    </p>
    <p class="widget__description">
      {{ description }}
    </p>
    <div class="widget__buttons">
      <BaseButton
        color="dark-branded"
        to="https://www.apple.com/in/app-store/"
        target="_blank"
        class="widget__button widget__button--dark"
        aria-label="Apple icon"
      >
        <Icon
          class="widget__button-icon"
          name="raphael:apple"
          size="1.5em"
        />
        App Store
      </BaseButton>
      <BaseButton
        color="light-bordered"
        to="https://play.google.com/store"
        target="_blank"
        class="widget__button"
        aria-label="Android icon"
      >
        <Icon
          class="widget__button-icon"
          name="raphael:android"
          size="1.5em"
        />
        Play Store
      </BaseButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
$widget-max-width: toRem(580px);
$widget-padding-y: clamped(
  $min-size: $spacing--8xl,
  $max-size: $spacing--12xl,
);
$widget-padding-x: clamped(
  $min-size: $spacing--2xl,
  $max-size: $spacing--4xl,
);

.widget {
  max-width: $widget-max-width;
  padding: $widget-padding-y $widget-padding-x;
  background-color: $secondary-color--extra-light;
  border-radius: $rounded--3xl;

  &__label {
    margin: 0;
    font-size: $text--lg;
    font-weight: $font--bold;
    color: $primary-color--light;
  }

  &__title {
    @include fluid-typography(
      $min-font-size: $text--2xl,
      $max-font-size: $text--3xl,
      $min-line-height: $leading--condensed,
      $max-line-height: $leading--snug
    );
  }

  &__title,
  &__description {
    margin: $spacing--lg 0;
  }

  &__button {
    display: flex;
    align-items: center;
  }

  &__button-icon {
    margin-right: $spacing--xs;
    flex-shrink: 0;
  }

  &__buttons {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: $spacing--lg;
    margin-top: $spacing--4xl;
  }
}
</style>
