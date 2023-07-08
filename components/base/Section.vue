<script setup lang="ts">
interface Props {
  tag?: 'div' | 'section'
}

withDefaults(defineProps<Props>(), {
  tag: 'section',
})
</script>

<template>
  <component
    :is="tag"
    class="section border-debug"
  >
    <slot />
  </component>
</template>

<style scoped lang="scss">
  .section {
    padding: clamped($min-size: $gap--small, $max-size: $gap--large) 0;
  }
</style>
