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
      <div v-if="$slots.header" class="section__header">
        <slot name="header" />
      </div>
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

  &__header {
    max-width: convert(750px, 'rem');
    margin-inline: auto;
    text-align: center;
  }

  &--top-gap-hidden {
    padding-top: 0;
  }

  &--bottom-gap-hidden {
    padding-bottom: 0;
  }
}
</style>
