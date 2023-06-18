<template>
  <section class="section">
    <slot />
  </section>
</template>

<style scoped lang="scss">
  .section {
    padding: clamp($gap--small, 10vw, $gap--large) 0;
  }
</style>
