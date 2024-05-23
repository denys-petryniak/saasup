<script setup lang="ts">
import type { BadgeColor, BadgeSize } from '~/types'

interface Props {
  size?: BadgeSize
  color?: BadgeColor
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
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
$badge-padding-y--sm: clamped(
  $min-size: $spacing--sm,
  $max-size: $spacing--lg,
);
$badge-padding-x--sm: clamped(
  $min-size: $spacing--2xl,
  $max-size: $spacing--4xl,
);
$badge-padding-y--md: clamped(
  $min-size: $spacing--lg,
  $max-size: $spacing--2xl,
);
$badge-padding-x--md: clamped(
  $min-size: $spacing--4xl,
  $max-size: $spacing--8xl,
);
$badge-bg-color--purple: #efecff;
$badge-bg-color--orange: #ffeecc;
$badge-text-color--orange: #c68a15;

.badge {
  display: inline-block;
  @include fluid-typography(
    $min-font-size: $font-size--base,
    $max-font-size: $font-size--lg,
    $min-line-height: $leading--tight,
    $max-line-height: $leading--condensed
  );
  font-weight: $font--bold;
  border-radius: $rounded--3xl * 2;

  &--sm {
    padding: $badge-padding-y--sm $badge-padding-x--sm;
  }

  &--md {
    padding: $badge-padding-y--md $badge-padding-x--md;
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
