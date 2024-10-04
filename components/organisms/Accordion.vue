<script setup lang="ts">
</script>

<template>
  <div class="accordion">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.accordion {
  display: flex;
  flex-direction: column;
  gap: clamped($min-size: $spacing--md, $max-size: $spacing--xl);
  max-width: $container-width--lg;
}
</style>
