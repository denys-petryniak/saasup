<template>
  <div class="container">
    <slot />
  </div>
</template>

<style scoped lang="scss">
  .container {
  width: min($container-width--max, 100%);
  margin-inline: auto;
}
</style>
