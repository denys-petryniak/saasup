<script setup lang="ts">
import type { ContainerSize } from '~/types'

type SectionTag = 'div' | 'section' | 'article'

interface Props {
  as?: SectionTag
  containerSize?: ContainerSize
  isTopGapHidden?: boolean
  isBottomGapHidden?: boolean
  isTopDoubleGap?: boolean
  isBottomDoubleGap?: boolean
}

withDefaults(defineProps<Props>(), {
  as: 'section',
  containerSize: 'xl',
  isTopGapHidden: false,
  isBottomGapHidden: false,
  isTopDoubleGap: false,
  isBottomDoubleGap: false,
})
</script>

<template>
  <component
    :is="as"
    :class="{
      'section--top-gap-hidden': isTopGapHidden,
      'section--bottom-gap-hidden': isBottomGapHidden,
      'section--top-double-gap': isTopDoubleGap,
      'section--bottom-double-gap': isBottomDoubleGap,
    }"
    class="section"
  >
    <BaseContainer :size="containerSize">
      <slot />
    </BaseContainer>
  </component>
</template>

<style scoped lang="scss">
$padding--clamped: clamped(
  $min-size: $gap--sm,
  $max-size: $gap--lg,
);

$padding--double-clamped: clamped(
  $min-size: calc($gap--sm * 2),
  $max-size: calc($gap--lg * 2),
);

.section {
  padding-top: $padding--clamped;
  padding-bottom: $padding--clamped;

  &--top-double-gap {
    padding-top: $padding--double-clamped;
  }

  &--bottom-double-gap {
    padding-bottom: $padding--double-clamped;
  }

  &--top-gap-hidden {
    padding-top: 0;
  }

  &--bottom-gap-hidden {
    padding-bottom: 0;
  }
}
</style>
