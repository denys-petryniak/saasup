<template>
  <div class="grid-box">
    <slot />
  </div>
</template>

<style scoped lang="scss">
$card-min-width: convert(350px, 'rem');

.grid-box {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(min(100%, $card-min-width), 1fr)
  );
  gap: clamped($min-size: $spacing--xl, $max-size: $spacing--2xl);
}
</style>
