<script setup lang="ts">
type ColumnCount = '2' | '3' | '4'

interface Props {
  columns?: ColumnCount
}

withDefaults(defineProps<Props>(), {
  columns: '3',
})

// Another approach using auto-fit & min-width (less flexible), here as example only
// const cardMinWidthMap = new Map<ColumnCount, string>([
//   ['2', convertPxToRem(500)],
//   ['3', convertPxToRem(400)],
//   ['4', convertPxToRem(300)],
// ])

// const cardMinWidth = computed(() => {
//   return cardMinWidthMap.get(props.columns)
// })

// <style scoped lang="scss">
// grid-template-columns: repeat(
//   auto-fit,
//   minmax(min(100%, v-bind(cardMinWidth)), 1fr)
// );
// </style>
</script>

<template>
  <div
    class="grid-box"
    :class="columns ? `grid-box--cols-${columns}` : null"
  >
    <slot />
  </div>
</template>

<style scoped lang="scss">
.grid-box {
  display: grid;
  justify-content: center;
  gap: clamped($min-size: $spacing--xl, $max-size: $spacing--2xl);

  &--cols-2 {
    @include grid-columns(2);
  }

  &--cols-3 {
    @include grid-columns(3);
  }

  &--cols-4 {
    @include grid-columns(4);
  }
}
</style>
