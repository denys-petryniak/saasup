<script setup lang="ts">
import type { SectionTag } from '~/types'

interface Props {
  tag?: SectionTag
  isTopGapHidden?: boolean
  isBottomGapHidden?: boolean
}

withDefaults(defineProps<Props>(), {
  tag: 'section',
})
</script>

<template>
  <component
    :is="tag"
    :class="{
      'section--top-gap-hidden': isTopGapHidden,
      'section--bottom-gap-hidden': isBottomGapHidden,
    }"
    class="section"
  >
    <BaseContainer>
      <slot />
    </BaseContainer>
  </component>
</template>

<style scoped lang="scss">
$padding--clamped: clamped(
  $min-size: $gap--sm,
  $max-size: $gap--lg,
);

.section {
  padding-top: $padding--clamped;
  padding-bottom: $padding--clamped;

  &--top-gap-hidden {
    padding-top: 0;
  }

  &--bottom-gap-hidden {
    padding-bottom: 0;
  }
}
</style>
