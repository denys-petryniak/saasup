<script setup lang="ts">
interface Props {
  as?: 'div'
}

defineOptions({
  inheritAttrs: false,
})

withDefaults(defineProps<Props>(), {
  as: 'div',
})
</script>

<template>
  <component
    :is="as"
    v-bind="$attrs"
    class="card"
  >
    <div v-if="$slots.header" class="card__header">
      <slot name="header" />
    </div>
    <div v-if="$slots.default" class="card__body">
      <slot />
    </div>
    <div v-if="$slots.footer" class="card__footer">
      <slot name="footer" />
    </div>
  </component>
</template>

<style scoped lang="scss">
.card {
  $parent: &;

  &__header,
  &__body,
  &__footer {
    padding: clamped($min-size: $spacing--2xl, $max-size: $spacing--8xl);
  }

  &__header + #{$parent}__body {
    padding-top: 0;
  }

  &__body + #{$parent}__footer {
    padding-top: 0;
  }
}
</style>
