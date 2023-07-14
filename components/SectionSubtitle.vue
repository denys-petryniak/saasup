<template>
  <p class="subtitle">
    <slot />
  </p>
</template>

<style scoped lang="scss">
$subtitle-padding-y: clamped($min-size: $spacing--medium, $max-size: $spacing--large);
$subtitle-padding-x: clamped($min-size: $spacing--xlarge, $max-size: $spacing--2xlarge);
$subtitle-bg-color: #EFECFF;

.subtitle {
  display: inline-block;
  padding: $subtitle-padding-y $subtitle-padding-x;
  margin: 0;
  @include fluid-typography(
    $min-font-size: $font-size--base,
    $max-font-size: $font-size--small,
    $min-line-height: $line-height--3xsmall,
    $max-line-height: $line-height--2xsmall,
  );
  font-weight: $font-weight--bold;
  color: $color-primary--light;
  background-color: $subtitle-bg-color;
  border-radius: $border-radius--2xlarge;
}
</style>
