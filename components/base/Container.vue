<template>
  <div class="container">
    <slot />
  </div>
</template>

<style scoped lang="scss">
  .container {
    max-width: $container-width--max;
    padding: clamped($spacing--large, $spacing--2xlarge);
    margin-inline: auto;
  }
</style>
