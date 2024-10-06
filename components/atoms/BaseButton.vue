<script setup lang="ts">
// TODO: Component Variations with the Base Component Pattern can be applied here
// for example: DisabledButton variant out of a BaseButton component etc
import type { RouteLocation } from '#vue-router'

type ButtonWidth = 'full'
type ButtonSize = 'sm' | 'md'
type ButtonColor = 'branded' | 'light' | 'light-branded' | 'light-bordered' | 'dark' | 'dark-branded'

interface Props {
  width?: ButtonWidth
  size?: ButtonSize
  color?: ButtonColor
  to?: string | RouteLocation
  icon?: string
  trailing?: boolean
  leading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  color: 'branded',
})

const NuxtLink = resolveComponent('NuxtLink')
const tag = computed(() => (props.to ? NuxtLink : 'button'))
const type = computed(() => tag.value === 'button' && 'button')

const buttonClasses = computed(() => {
  const baseClass = props.to ? 'button button--link' : 'button'
  const widthClass = props.width && `button--${props.width}`
  const sizeClass = props.size && `button--${props.size}`
  const colorClass = props.color && `button--${props.color}`

  return [baseClass, widthClass, sizeClass, colorClass]
    .filter(Boolean)
    .join(' ')
})
</script>

<template>
  <component
    :is="tag"
    :type="type"
    :to="to"
    :class="buttonClasses"
  >
    <slot name="leading">
      <Icon
        v-if="leading && icon"
        :name="icon"
        class="button__icon button__icon--leading"
        aria-hidden="true"
      />
    </slot>
    <slot />
    <slot name="trailing">
      <Icon
        v-if="trailing && icon"
        :name="icon"
        class="button__icon button__icon--trailing"
        aria-hidden="true"
      />
    </slot>
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
  position: relative;
  min-width: $button-min-width;
  border-radius: calc($rounded--3xl * 2);
  @include fluid-typography($min-font-size: $text--base, $max-font-size: $text--lg);
  line-height: $leading--none;
  font-weight: $font--bold;
  text-align: center;

  &__icon {
    position: absolute;
    top: 50%;
    transform: translate3d(0, -50%, 0);
    width: auto;
    height: calc(100% - $spacing--xs * 2);
    aspect-ratio: 1 / 1;

    &--leading {
      left: $spacing--xs;
      right: auto;
    }

    &--trailing {
      left: auto;
      right: $spacing--xs;
    }
  }

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
