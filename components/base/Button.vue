<script setup lang="ts">
import type { RouteLocation } from '#vue-router'

type ButtonVariants = 'default' | 'light' | 'light-bordered' | 'dark' | 'dark-branded'

interface Props {
  variant?: ButtonVariants
  to?: string | RouteLocation
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
})

const getVariantClass = computed(() => `button__${props.variant}`)

const NuxtLink = resolveComponent('NuxtLink')
const getTag = computed(() => props.to ? NuxtLink : 'button')
const getType = computed(() => props.to ? undefined : 'button')
</script>

<template>
  <component
    :is="getTag"
    :type="getType"
    :to="to"
    class="button"
    :class="getVariantClass"
  >
    <slot />
  </component>
</template>

<style scoped lang="scss">
$button-padding-y: clamped($min-size: $spacing--medium, $max-size: $spacing--large);
$button-padding-x: clamped($min-size: $spacing--xlarge, $max-size: $spacing--2xlarge);
$button-min-width: 14ch;
$button-max-width: 24ch;

.button {
  min-width: $button-min-width;
  max-width: $button-max-width;
  min-height: $spacing--2xlarge;
  padding: $button-padding-y $button-padding-x;
  @include fluid-typography(
    $min-font-size: $font-size--base,
    $max-font-size: $font-size--small,
    $min-line-height: $line-height--3xsmall,
    $max-line-height: $line-height--2xsmall,
  );
  font-weight: $font-weight--bold;
  text-align: center;
  border-radius: $border-radius--2xlarge;

  &:focus {
    outline-style: solid;
    outline-color: transparent;
    box-shadow: 0 0 0 2px scale-color($color-primary--light, $lightness: -40%);
  }

  &__default {
    color: $color-white--regular;
    background-color: $color-primary--light;
    border: 2px solid $color-primary--light;

    &:hover,
    &:active {
      color: $color-primary--light;
      background-color: $color-white--regular;
    }
  }

  &__light {
    color: $color--secondary--extra-dark;
    background-color: $color--secondary--extra-light;
    border: 2px solid $color--secondary--extra-light;

    &:hover,
    &:active {
      background-color: $color-white--regular;
      border: 2px solid $color-border--regular;
    }
  }

  &__light-bordered {
    color: $color--secondary--extra-dark;
    background-color: $color--secondary--extra-light;
    border: 2px solid $color-border--regular;

    &:hover,
    &:active {
      background-color: $color-white--regular;
      border: 2px solid $color--secondary--dark;
    }
  }

  &__dark {
    color: $color-white--regular;
    background-color: $color-primary--dark;
    border: 2px solid $color-primary--dark;

    &:hover,
    &:active {
      background-color: $color--secondary--extra-light;
      color: $color-primary--dark;
    }
  }

  &__dark-branded {
    color: $color-white--regular;
    background-color: $color-primary--dark;
    border: 2px solid $color-primary--dark;

    &:hover,
    &:active {
      background-color: $color-primary--light;
      border: 2px solid $color-primary--light;
    }
  }
}
</style>
