<script setup lang="ts">
import type { BadgeColor, BadgeSize } from '~/types'

interface Props {
  size?: BadgeSize
  color?: BadgeColor
}

const props = withDefaults(defineProps<Props>(), {
  size: 'regular',
  color: 'purple',
})

const getBadgeClasses = computed(() => {
  const sizeClass = `badge--${props.size}`
  const colorClass = `badge--${props.color}`

  return [sizeClass, colorClass]
})
</script>

<template>
  <div
    class="badge"
    :class="getBadgeClasses"
  >
    <slot />
  </div>
</template>

<style scoped lang="scss">
$badge-padding-y--regular: clamped($min-size: $spacing--medium, $max-size: $spacing--large);
$badge-padding-x--regular: clamped($min-size: $spacing--xlarge, $max-size: $spacing--2xlarge);
$badge-padding-y--small: clamped($min-size: $spacing--small, $max-size: $spacing--medium);
$badge-padding-x--small: clamped($min-size: $spacing--large, $max-size: $spacing--xlarge);
$badge-bg-color--purple: #EFECFF;
$badge-bg-color--orange: #FFEECC;
$badge-text-color--orange: #C68A15;

.badge {
  display: inline-block;
  @include fluid-typography(
    $min-font-size: $font-size--base,
    $max-font-size: $font-size--small,
    $min-line-height: $line-height--3xsmall,
    $max-line-height: $line-height--2xsmall,
  );
  font-weight: $font-weight--bold;
  border-radius: $border-radius--2xlarge;

  &--regular {
    padding: $badge-padding-y--regular $badge-padding-x--regular;
  }

  &--small {
    padding: $badge-padding-y--small $badge-padding-x--small;
  }

  &--purple {
    color: $color-primary--light;
    background-color: $badge-bg-color--purple;
  }

  &--white {
    color: $color--secondary--dark;
    background-color: $color-white--regular;
  }

  &--orange {
    color: $badge-text-color--orange;
    background-color: $badge-bg-color--orange;
  }
}
</style>
