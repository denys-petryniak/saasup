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
$card-padding-y--clamped: clamped(
  $min-size: $spacing--4xl,
  $max-size: $spacing--12xl,
);
$card-padding-x--clamped: clamped(
  $min-size: $spacing--2xl,
  $max-size: $spacing--8xl,
);

.card {
  display: flex;
  flex-direction: column;
  gap: clamped($min-size: $spacing--4xl, $max-size: $spacing--8xl);
  padding: $card-padding-y--clamped $card-padding-x--clamped;
  border-radius: $rounded--3xl * 2;

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
