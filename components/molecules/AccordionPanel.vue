<script setup lang="ts">
interface Props {
  // Optional name attribute for exclusive accordion behavior
  name?: string
}

defineProps<Props>()
</script>

<template>
  <details
    class="accordion-panel"
    :name="name"
  >
    <summary
      v-if="$slots.header"
      class="accordion-panel__header"
    >
      <slot name="header" />
      <Icon
        name="i-heroicons-minus"
        size="1em"
        class="accordion-panel__icon accordion-panel__icon--minus"
      />
      <Icon
        name="i-heroicons-plus"
        size="1em"
        class="accordion-panel__icon accordion-panel__icon--plus"
      />
    </summary>
    <div v-if="$slots.content" class="accordion-panel__content">
      <slot name="content" />
    </div>
  </details>
</template>

<style scoped lang="scss">
// fully disable default marker style
summary {
  list-style-type: none;

  &::marker,
  &::-webkit-details-marker {
    display: none;
  }
}

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
