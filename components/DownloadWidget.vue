<script setup lang="ts"></script>

<template>
  <div class="widget">
    <p class="widget__label">
      Download
    </p>
    <h4 class="widget__title">
      Its perfectly suitable to all
      operating platforms
    </h4>
    <p class="widget__description">
      Encompasses values and behaviors that contribute to the unique social business.
    </p>
    <div class="widget__buttons">
      <BaseButton class="widget__button widget__button--dark">
        <Icon class="widget__button-icon" name="raphael:apple" />App Store
      </BaseButton>
      <BaseButton class="widget__button">
        <Icon class="widget__button-icon" name="raphael:android" />Play Store
      </BaseButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
$widget-max-width: convert(500px, 'rem');

.widget {
  max-width: $widget-max-width;
  padding: clamped($spacing--large, $spacing--3xlarge) clamped($spacing--large, $spacing--xlarge);
  background-color: $color--secondary--extra-light;
  border-radius: $border-radius--xxlarge;

  &__label {
    margin: 0;
    font-size: $font-size--small;
    font-weight: $font-weight--bold;
    color: $color-primary--light;
  }

  &__title {
    font-size: clamped($font-size--large, $font-size--xlarge);
  }

  &__description {
    font-size: clamped($font-size--small, $font-size--medium);
  }

  &__button {
    display: flex;
    align-items: center;
    background-color: transparent;
    border: 1px solid $color-border--regular;

    &:hover {
      background-color: $color-white--regular;
      border: 1px solid $color--secondary--dark;
    }

    &--dark {
      background-color: $color-primary--dark;
      color: $color-white--regular;

      &:hover {
        background-color: $color-primary--light;
      }
    }
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
