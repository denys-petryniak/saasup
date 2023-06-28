<template>
  <section class="section">
    <slot />
  </section>
</template>

<style scoped lang="scss">
  .section {
    padding: clamped($min-size: $gap--small, $max-size: $gap--large) 0;
  }
</style>
