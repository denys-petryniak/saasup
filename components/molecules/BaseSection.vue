<script setup lang="ts">
import type { SectionTag } from '~/types'

interface Props {
  tag?: SectionTag
}

withDefaults(defineProps<Props>(), {
  tag: 'section',
})
</script>

<template>
  <component
    :is="tag"
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
}
</style>
