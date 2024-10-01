<script setup lang="ts">
import type { ErrorObject } from '@vuelidate/core'
import type { FormTextareaStoryblok } from '~/component-types-sb'

interface Props {
  blok: FormTextareaStoryblok
  errors?: ErrorObject[]
}

defineProps<Props>()

const model = defineModel<string>()
</script>

<template>
  <div
    class="input-group"
    :class="{
      'input-group--full': blok.full_width,
    }"
  >
    <label
      :for="blok._uid"
      class="input-group__label"
    >
      {{ blok.label }}
    </label>
    <textarea
      :id="blok._uid"
      v-model.trim="model"
      :name="blok.name"
      :placeholder="blok.placeholder"
      :required="blok.required"
      :rows="blok.rows"
      :class="{
        'input-group__textarea--error': errors?.length,
      }"
      class="input-group__textarea"
    />
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
  &__textarea {
    @include fluid-typography(
      $min-font-size: $text--lg,
      $max-font-size: $text--xl,
      $min-line-height: $leading--tight,
      $max-line-height: $leading--condensed
    );
  }

  &__label {
    font-weight: bold;
    color: $color-primary--dark;
  }

  &__textarea {
    min-height: toRem(100px);
    max-height: toRem(500px);
    padding: clamped($min-size: $spacing--xl, $max-size: $spacing--2xl);
    border: 1px solid $color-border--regular;
    border-radius: $rounded--2xl;
    resize: vertical;
    background-color: $color-white;
    transition: border-color 0.2s ease-in-out;

    &:hover:not(:focus-visible) {
      border-color: color.adjust($color: $color-border--regular, $lightness: -25%);
    }

    &::placeholder {
      color: $color--secondary--dark;
    }

    &--error {
      border-color: $color--error;
    }
  }

  &--full {
    grid-column: -1 / 1; // span across all columns if the parent container uses CSS Grid
  }
}
</style>
