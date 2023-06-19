<template>
  <button class="btn" v-bind="$attrs">
    <slot />
  </button>
</template>

<style scoped lang="scss">
$padding-btn--y-dynamic: clamp($spacing--medium, 5vw, $spacing--large);
$padding-btn--x-dynamic: clamp($spacing--xlarge, 5vw, $spacing--xxlarge);

.btn {
  padding: $padding-btn--y-dynamic $padding-btn--x-dynamic;
  font-weight: $font-weight--bold;
  font-size: $font-size--medium;
  color: $color-primary--dark;
  border-radius: $border-radius--xxlarge;
}
</style>
