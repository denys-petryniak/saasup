<template>
  <section class="section">
    <slot />
  </section>
</template>

<style scoped lang="scss">
  .section {
    padding: $gap--small 0;
  }

  @include breakpoint(small) {
    .section {
      padding: $gap--medium 0;
    }
  }

  @include breakpoint(medium) {
    .section {
      padding: $gap--large 0;
    }
  }
</style>
