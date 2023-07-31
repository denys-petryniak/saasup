<script setup lang="ts">
type ModelValue = string | number

interface Props {
  modelValue: ModelValue
}

defineProps<Props>()

const emit = defineEmits<{
  (event: 'update:modelValue', value: ModelValue): void
}>()

function updateModelValue(event: Event) {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}
</script>

<template>
  <input
    v-bind="{
      ...$attrs,
      onInput: updateModelValue,
    }"
    :value="modelValue"
    class="field"
  >
</template>

<style scoped lang="scss">
$field-padding-y: clamped($min-size: $spacing--medium, $max-size: $spacing--large);
$field-padding-x: clamped($min-size: $spacing--xlarge, $max-size: $spacing--2xlarge);
$field-bg-color: rgba(255, 255, 255, 0.20);

.field {
  display: inline-block;
  vertical-align: middle;
  padding: $field-padding-y $field-padding-x;
  border: 1px solid $color-border--regular;
  border-radius: $border-radius--2xlarge;
  color: $color-white--regular;
  @include fluid-typography(
    $min-font-size: $font-size--base,
    $max-font-size: $font-size--small,
    $min-line-height: $line-height--3xsmall,
    $max-line-height: $line-height--2xsmall,
  );
  font-weight: $font-weight--bold;
  background-color: $field-bg-color;

  &::placeholder {
    color: $color-white--regular;
  }
}
</style>
