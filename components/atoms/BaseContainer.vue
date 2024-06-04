<template>
  <div class="container">
    <slot />
  </div>
</template>

<style scoped lang="scss">
$padding--min: $spacing--2xl;
$padding--max: $spacing--8xl;
$padding--clamped: clamped(
  $min-size: $padding--min,
  $max-size: $padding--max,
);

// Calculate the maximum width of the container including padding
$container-width--max--expanded: $container-width--max + ($padding--max * 2);

.container {
  width: min($container-width--max--expanded, 100%);
  padding-left: $padding--clamped;
  padding-right: $padding--clamped;
  margin-inline: auto;
}
</style>
