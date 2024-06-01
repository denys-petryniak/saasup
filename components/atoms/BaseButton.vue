<script setup lang="ts">
import type { RouteLocation } from '#vue-router'
import type { ButtonColor, ButtonSize, ButtonWidth } from '~/types'

interface Props {
  width?: ButtonWidth
  size?: ButtonSize
  color?: ButtonColor
  to?: string | RouteLocation
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
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
$button-padding-y--sm: clamped(
  $min-size: $spacing--sm,
  $max-size: $spacing--lg,
);
$button-padding-x--sm: clamped(
  $min-size: $spacing--lg,
  $max-size: $spacing--4xl,
);
$button-padding-y--md: clamped(
  $min-size: $spacing--lg,
  $max-size: $spacing--2xl,
);
$button-padding-x--md: clamped(
  $min-size: $spacing--4xl,
  $max-size: $spacing--8xl,
);
$button-min-width: 10ch;

.button {
  min-width: $button-min-width;
  border-radius: $rounded--3xl * 2;
  @include fluid-typography(
    $min-font-size: $text--base,
    $max-font-size: $text--lg
  );
  line-height: $leading--none;
  font-weight: $font--bold;
  text-align: center;

  &--full {
    width: 100%;
  }

  &--sm {
    padding: $button-padding-y--sm $button-padding-x--sm;
  }

  &--md {
    padding: $button-padding-y--md $button-padding-x--md;
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
