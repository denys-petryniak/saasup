<template>
  <button class="btn" v-bind="$attrs">
    <slot />
  </button>
</template>

<style scoped lang="scss">
$btn-padding-y: clamped($min-size: $spacing--medium, $max-size: $spacing--large);
$btn-padding-x: clamped($min-size: $spacing--xlarge, $max-size: $spacing--2xlarge);

.btn {
  padding: $btn-padding-y $btn-padding-x;
  font-weight: $font-weight--semibold;
  font-size: $font-size--small;
  color: $color-primary--dark;
  border-radius: $border-radius--2xlarge;
}
</style>
