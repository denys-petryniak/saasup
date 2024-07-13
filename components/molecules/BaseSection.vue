<script setup lang="ts">
import type { ContainerSize } from '~/types'

type SectionTag = 'div' | 'section' | 'article'

interface Props {
  as?: SectionTag
  containerSize?: ContainerSize
  isTopGapHidden?: boolean
  isBottomGapHidden?: boolean
}

withDefaults(defineProps<Props>(), {
  as: 'section',
  containerSize: 'xl',
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
