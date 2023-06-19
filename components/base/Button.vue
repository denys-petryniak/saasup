<template>
  <button class="btn" v-bind="$attrs">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.btn {
  padding: $spacing--large $spacing--xxlarge;
  background-color: $color--secondary--extra-light;
  border: 1px solid $color-border--regular;
  border-radius: $border-radius--xxlarge;
}
</style>
