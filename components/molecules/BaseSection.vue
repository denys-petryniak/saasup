<script setup lang="ts">
import type { SectionTag } from '~/types'

interface Props {
  as?: SectionTag
  isTopGapHidden?: boolean
  isBottomGapHidden?: boolean
}

withDefaults(defineProps<Props>(), {
  as: 'section',
  isTopGapHidden: false,
  isBottomGapHidden: false,
})
</script>

<template>
  <component
    :is="as"
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
