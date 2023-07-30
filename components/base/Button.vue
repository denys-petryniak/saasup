<script setup lang="ts">
import type { RouteLocation } from '#vue-router'

type ButtonWidth = 'full'
type ButtonSize = 'small' | 'medium'
type ButtonColor = 'branded' | 'light' | 'light-branded' | 'light-bordered' | 'dark' | 'dark-branded'

interface Props {
  width?: ButtonWidth
  size?: ButtonSize
  color?: ButtonColor
  to?: string | RouteLocation
}

const props = withDefaults(defineProps<Props>(), {
  size: 'medium',
  color: 'branded',
})

const getButtonClasses = computed(() => {
  const widthClass = props.width ? `button--${props.width}` : null
  const sizeClass = props.size ? `button--${props.size}` : null
  const colorClass = props.color ? `button--${props.color}` : null

  return [widthClass, sizeClass, colorClass]
})

const NuxtLink = resolveComponent('NuxtLink')
const getTag = computed(() => props.to ? NuxtLink : 'button')
const getType = computed(() => getTag.value === 'button' ? 'button' : null)
</script>

<template>
  <component
    :is="getTag"
    :type="getType"
    :to="to"
    class="button"
    :class="getButtonClasses"
  >
    <slot />
  </component>
</template>

<style scoped lang="scss">
$button-padding-y--small: clamped($min-size: $spacing--small, $max-size: $spacing--medium);
$button-padding-x--small: clamped($min-size: $spacing--medium, $max-size: $spacing--xlarge);
$button-padding-y--medium: clamped($min-size: $spacing--medium, $max-size: $spacing--large);
$button-padding-x--medium: clamped($min-size: $spacing--xlarge, $max-size: $spacing--2xlarge);
$button-min-width: 10ch;

.button {
  min-width: $button-min-width;
  border-radius: $border-radius--2xlarge;
  @include fluid-typography(
    $min-font-size: $font-size--base,
    $max-font-size: $font-size--small,
    $min-line-height: $line-height--4xsmall,
    $max-line-height: $line-height--4xsmall,
  );
  font-weight: $font-weight--bold;
  text-align: center;

  &:focus {
    outline-style: solid;
    outline-color: transparent;
    box-shadow: 0 0 0 2px scale-color($color-primary--light, $lightness: -40%);
  }

  &--full {
    width: 100%;
  }

  &--small {
    padding: $button-padding-y--small $button-padding-x--small;
  }

  &--medium {
    padding: $button-padding-y--medium $button-padding-x--medium;
  }

  &--branded {
    border: 1px solid $color-primary--light;
    color: $color-white--regular;
    background-color: $color-primary--light;

    &:hover,
    &:active {
      color: $color-primary--light;
      background-color: $color-white--regular;
    }
  }

  &--light {
    border: 1px solid $color--secondary--extra-light;
    color: $color--secondary--extra-dark;
    background-color: $color--secondary--extra-light;

    &:hover,
    &:active {
      border: 1px solid $color-primary--dark;
      color: $color-white--regular;
      background-color: $color-primary--dark;
    }
  }

  &--light-branded {
    border: 1px solid $color-devider--regular;
    color: $color--secondary--extra-dark;
    background-color: $color--secondary--extra-light;

    &:hover,
    &:active {
      border: 1px solid $color-primary--light;
      color: $color-white--regular;
      background-color: $color-primary--light;
    }
  }

  &--light-bordered {
    border: 1px solid $color-devider--regular;
    color: $color--secondary--extra-dark;
    background-color: $color--secondary--extra-light;

    &:hover,
    &:active {
      border: 1px solid $color--secondary--dark;
      background-color: $color-white--regular;
    }
  }

  &--dark {
    color: $color-white--regular;
    background-color: $color-primary--dark;
    border: 1px solid $color-primary--dark;

    &:hover,
    &:active {
      background-color: $color--secondary--extra-light;
      color: $color-primary--dark;
    }
  }

  &--dark-branded {
    border: 1px solid $color-primary--dark;
    color: $color-white--regular;
    background-color: $color-primary--dark;

    &:hover,
    &:active {
      border: 1px solid $color-primary--light;
      background-color: $color-primary--light;
    }
  }
}
</style>
