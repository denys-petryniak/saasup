<script setup lang="ts">
</script>

<template>
  <details class="accordion-panel">
    <summary
      v-if="$slots.header"
      class="accordion-panel__header"
    >
      <slot name="header" />
      <Icon name="i-heroicons-minus" class="accordion-panel__icon accordion-panel__icon--minus" />
      <Icon name="i-heroicons-plus" class="accordion-panel__icon accordion-panel__icon--plus" />
    </summary>
    <div v-if="$slots.content" class="accordion-panel__content">
      <slot name="content" />
    </div>
  </details>
</template>

<style scoped lang="scss">
.accordion-panel {
  padding: clamped($min-size: $spacing--xl, $max-size: $spacing--2xl);
  border-radius: $rounded--3xl;
  background-color: $color-white;

  &__header {
    display: flex;
    justify-content: space-between;
    gap: $spacing--lg;
    padding: $spacing--sm 0;
    @include fluid-typography(
      $min-font-size: $text--2xl,
      $max-font-size: $text--3xl,
      $min-line-height: $leading--tight,
      $max-line-height: $leading--condensed
    );
    font-weight: $font--bold;
    text-wrap: balance;
    color: $primary-color--dark;
    list-style: none; // Removes the default triangle
    cursor: pointer;
    user-select: none;
  }

  &__icon {
    color: $primary-color--dark;

    &--minus {
      display: none;

      details[open] & {
        display: block;
      }
    }

    &--plus {
      display: block;

      details[open] & {
        display: none;
      }
    }
  }

  &__content {
    margin-top: clamped($min-size: $spacing--xl, $max-size: $spacing--2xl);
    animation: accordion-slide 0.3s ease;

    details[open] & {
      animation: accordion-slide 0.3s ease;
    }
  }
}

@keyframes accordion-slide {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
