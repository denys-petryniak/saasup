<script setup lang="ts">
type ColumnsCount = '2' | '3' | '4'

interface Props {
  columns?: ColumnsCount
}

const props = withDefaults(defineProps<Props>(), {
  columns: '3',
})

// TODO: replace this approach with simplified and solid solution
const cardMinWidthMap: { [key in ColumnsCount]: string } = {
  2: convertPxToRem(450),
  3: convertPxToRem(350),
  4: convertPxToRem(300),
}
const defaultCardMinWidth = convertPxToRem(350)

const cardMinWidth = computed(() => {
  return cardMinWidthMap[props.columns] ?? defaultCardMinWidth
})
</script>

<template>
  <div class="grid-box">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.grid-box {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(min(100%, v-bind(cardMinWidth)), 1fr)
  );
  justify-items: center;
  gap: clamped($min-size: $spacing--xl, $max-size: $spacing--2xl);
}
</style>
