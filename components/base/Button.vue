<template>
  <button class="btn" v-bind="$attrs">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.btn {
  padding: clamped($spacing--medium, $spacing--large) clamped($spacing--xlarge, $spacing--2xlarge);
  font-weight: $font-weight--semibold;
  font-size: $font-size--small;
  color: $color-primary--dark;
  border-radius: $border-radius--xxlarge;
}
</style>
