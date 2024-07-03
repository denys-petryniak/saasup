<script setup lang="ts">
import type { ColumnCount, ScreenSizeName } from '~/types'

interface Props {
  columns?: ColumnCount
}

const props = withDefaults(defineProps<Props>(), {
  columns: '3',
})

type ColumnsByScreenSize = Record<ScreenSizeName, ColumnCount>

const columnMapping = new Map<ColumnCount, ColumnsByScreenSize>([
  ['4', { mobile: '1', tablet: '2', laptop: '3', desktop: '4' }],
  ['3', { mobile: '1', tablet: '2', laptop: '2', desktop: '3' }],
  ['2', { mobile: '1', tablet: '1', laptop: '2', desktop: '2' }],
  ['1', { mobile: '1', tablet: '1', laptop: '1', desktop: '1' }],
])

const { isMobileScreenSize, isTabletScreenSize, isLaptopScreenSize, isDesktopScreenSize } = useMedia()

interface ScreenSize {
  name: ScreenSizeName
  isActive: boolean
}

const responsiveColumns = computed(() => {
  const screenSizes: ScreenSize[] = [
    { name: 'mobile', isActive: isMobileScreenSize.value },
    { name: 'tablet', isActive: isTabletScreenSize.value },
    { name: 'laptop', isActive: isLaptopScreenSize.value },
    { name: 'desktop', isActive: isDesktopScreenSize.value },
  ]

  const currentSize = screenSizes.find(screenSize => screenSize.isActive)

  return currentSize ? columnMapping.get(props.columns)?.[currentSize.name] : '1'
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
  <div class="grid-box">
    <slot />
  </div>
</template>

<style scoped lang="scss">
$column-width--min: convert(250px, 'rem');
$column-width--max: convert(700px, 'rem');

.grid-box {
  display: grid;
  grid-template-columns: repeat(
    v-bind(responsiveColumns),
    minmax(min(100%, $column-width--min), $column-width--max)
  );
  justify-content: center;
  gap: clamped($min-size: $spacing--xl, $max-size: $spacing--2xl);
}
</style>
