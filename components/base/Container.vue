<template>
  <div class="container">
    <slot />
  </div>
</template>

<style scoped lang="scss">
  $gap-container--dynamic: clamp($spacing--large, 5vw, $spacing--xxlarge);
  .container {
    max-width: $container-width--large;
    padding: $gap-container--dynamic $gap-container--dynamic;
    margin-inline: auto;
  }
</style>
