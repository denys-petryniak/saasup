<script setup lang="ts">
import type { RouteLocation } from '#vue-router'

type ButtonWidth = 'full'
type ButtonSize = 'sm' | 'md'
type ButtonColor = 'branded' | 'light' | 'light-branded' | 'light-bordered' | 'dark' | 'dark-branded'

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
  const buttonTypeClass = props.to ? 'button--link' : 'button'
  const widthClass = props.width ? `button--${props.width}` : null
  const sizeClass = props.size ? `button--${props.size}` : null
  const colorClass = props.color ? `button--${props.color}` : null

  return [buttonTypeClass, widthClass, sizeClass, colorClass]
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
  @include fluid-typography($min-font-size: $text--base, $max-font-size: $text--lg);
  line-height: $leading--none;
  font-weight: $font--bold;
  text-align: center;

  &:disabled,
  &[disabled] {
    opacity: 0.5;
    pointer-events: none;
    cursor: not-allowed;
  }

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
    border: 1px solid $primary-color--light;
    color: $color-white--soft;
    background-color: $primary-color--light;

    &:hover,
    &:active {
      color: $primary-color--light;
      background-color: $color-white--soft;
    }
  }

  &--light {
    border: 1px solid $secondary-color--extra-light;
    color: $primary-color--dark;
    background-color: $secondary-color--extra-light;

    &:hover,
    &:active {
      border: 1px solid $primary-color--dark;
      color: $color-white--soft;
      background-color: $primary-color--dark;
    }
  }

  &--light-branded {
    border: 1px solid $divider-color--regular;
    color: $primary-color--dark;
    background-color: $secondary-color--extra-light;

    &:hover,
    &:active {
      border: 1px solid $primary-color--light;
      color: $color-white--soft;
      background-color: $primary-color--light;
    }
  }

  &--light-bordered {
    border: 1px solid $divider-color--regular;
    color: $primary-color--dark;
    background-color: $secondary-color--extra-light;

    &:hover,
    &:active {
      border: 1px solid $secondary-color--dark;
      background-color: $color-white--soft;
    }
  }

  &--dark {
    color: $color-white--soft;
    background-color: $primary-color--dark;
    border: 1px solid $primary-color--dark;

    &:hover,
    &:active {
      background-color: $secondary-color--extra-light;
      color: $primary-color--dark;
    }
  }

  &--dark-branded {
    border: 1px solid $primary-color--dark;
    color: $color-white--soft;
    background-color: $primary-color--dark;

    &:hover,
    &:active {
      border: 1px solid $primary-color--light;
      background-color: $primary-color--light;
    }
  }
}
</style>
