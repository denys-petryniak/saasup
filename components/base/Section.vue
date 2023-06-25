<template>
  <section class="section">
    <slot />
  </section>
</template>

<style scoped lang="scss">
  .section {
    padding: clamped($gap--small, $gap--large) 0;
  }
</style>
