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
    <slot />
  </component>
</template>

<style scoped lang="scss">
.section {
  padding: clamped($min-size: $gap--sm, $max-size: $gap--lg) 0;
}
</style>
