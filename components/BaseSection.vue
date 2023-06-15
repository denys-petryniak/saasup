<template>
  <section class="section">
    <slot />
  </section>
</template>

<style scoped lang="scss">
  .section {
    margin: 0 auto;
    padding: $gap--large 0;
  }

  @media (max-width: $screen--medium) {
    .section {
      padding: $gap--medium 0;
    }
  }

  @media (max-width: $screen--small) {
    .section {
      padding: $gap--small 0;
    }
  }
</style>
