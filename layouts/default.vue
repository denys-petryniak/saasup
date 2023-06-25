<template>
  <BaseContainer class="layout">
    <TheHeader class="layout__header border-debug" />
    <main class="layout__body">
      <slot />
    </main>
    <TheFooter class="layout__footer border-debug" />
  </BaseContainer>
</template>

<style scoped lang="scss">
  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    &__header,
    &__footer {
      flex-shrink: 0;
    }

    &__body {
      flex-grow: 1;
    }
  }
</style>
