<script setup lang="ts">
import type { ContainerSize } from '~/types'

interface Props {
  size?: ContainerSize
}

const props = withDefaults(defineProps<Props>(), {
  size: 'xl',
})

const containerClasses = computed(() => {
  const sizeClass = props.size ? `container--${props.size}` : null

  return ['container', sizeClass]
})
</script>

<template>
  <div :class="containerClasses">
    <slot />
  </div>
</template>

<style scoped lang="scss">
$padding--min: $spacing--2xl;
$padding--max: $spacing--8xl;
$padding--clamped: clamped(
  $min-size: $padding--min,
  $max-size: $padding--max,
);

// Calculate the maximum width of the container including padding
$container-width--lg--expanded: $container-width--lg + ($padding--max * 2);
$container-width--xl--expanded: $container-width--xl + ($padding--max * 2);

.container {
  padding-left: $padding--clamped;
  padding-right: $padding--clamped;
  margin-inline: auto;

  &--lg {
    width: min($container-width--lg--expanded, 100%);
  }

  &--xl {
    width: min($container-width--xl--expanded, 100%);
  }
}
</style>
