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
  border-radius: $rounded--3xl * 2;

  &__header {
    /* top | left and right | bottom */
    padding: clamped($min-size: $spacing--4xl, $max-size: $spacing--12xl)
      clamped($min-size: $spacing--2xl, $max-size: $spacing--8xl)
      clamped($min-size: $spacing--2xl, $max-size: $spacing--8xl);

    & + #{$parent}__body {
      padding-top: 0;
    }
  }

  &__body {
    padding: clamped($min-size: $spacing--2xl, $max-size: $spacing--8xl);

    & + #{$parent}__footer {
      padding-top: 0;
    }
  }

  &__footer {
    /* top | left and right | bottom */
    padding: clamped($min-size: $spacing--2xl, $max-size: $spacing--8xl)
      clamped($min-size: $spacing--2xl, $max-size: $spacing--8xl)
      clamped($min-size: $spacing--4xl, $max-size: $spacing--12xl);
  }

  @media (hover: none) {
    background-color: $color--secondary--extra-light;
  }

  @media (hover: hover) {
    &:hover {
      background-color: $color--secondary--extra-light;
    }
  }
}
</style>
