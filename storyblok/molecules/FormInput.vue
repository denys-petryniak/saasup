<script setup lang="ts">
import type { ErrorObject } from '@vuelidate/core'
import type { FormInputStoryblok } from '~/component-types-sb'

interface Props {
  blok: FormInputStoryblok
  errors?: ErrorObject[]
}

defineProps<Props>()

const model = defineModel<string | number>()
</script>

<template>
  <div class="input-group">
    <label
      v-if="blok.label"
      :for="blok._uid"
      class="input-group__label"
    >
      {{ blok.label }}
    </label>
    <input
      :id="blok._uid"
      v-model="model"
      :type="blok.type"
      :name="blok.name"
      :placeholder="blok.placeholder"
      :class="{
        'input-group__input--error': errors?.length,
      }"
      class="input-group__input"
    >
    <div v-if="errors?.length" class="input-group__errors">
      <p
        v-for="error of errors"
        :id="error.$uid"
        :key="error.$uid"
        aria-live="assertive"
        class="error-message input-group__error-message"
      >
        {{ error.$message }}
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use 'sass:color';

.input-group {
  display: flex;
  flex-direction: column;
  gap: $spacing--md;

  &__label,
  &__input {
    @include fluid-typography(
      $min-font-size: $text--lg,
      $max-font-size: $text--xl,
      $min-line-height: $leading--tight,
      $max-line-height: $leading--condensed
    );
  }

  &__label {
    font-weight: bold;
    color: $primary-color--dark;
  }

  &__input {
    padding: clamped($min-size: $spacing--xl, $max-size: $spacing--2xl);
    border: 1px solid $divider-color--regular;
    border-radius: $rounded--2xl;
    background-color: $color-white;
    transition: border-color 0.2s ease-in-out;

    &:hover:not(:focus-visible) {
      border-color: color.adjust($color: $divider-color--regular, $lightness: -25%);
    }

    &::placeholder {
      color: $secondary-color--dark;
    }

    &--error {
      border-color: $error-color;
    }
  }
}
</style>
