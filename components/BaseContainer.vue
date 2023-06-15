<template>
  <div class="container">
    <slot />
  </div>
</template>

<style scoped lang="scss">
  .container {
    max-width: $container-width--large;
    padding: $spacing--xxxlarge $spacing--large;
    margin: 0 auto;
  }
</style>
