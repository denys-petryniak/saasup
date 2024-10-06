<script setup lang="ts">
type ModelValue = string | number

interface Props {
  modelValue: ModelValue
}

defineOptions({
  inheritAttrs: false,
})

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
$field-padding-y: clamped(
  $min-size: $spacing--lg,
  $max-size: $spacing--2xl,
);
$field-padding-x: clamped(
  $min-size: $spacing--4xl,
  $max-size: $spacing--8xl,
);
$field-bg-color: rgba(255, 255, 255, 0.2);

.field {
  display: inline-block;
  vertical-align: middle;
  padding: $field-padding-y $field-padding-x;
  border: 1px solid $divider-color--regular;
  border-radius: $rounded--3xl * 2;
  color: $color-white--soft;
  @include fluid-typography($min-font-size: $text--base, $max-font-size: $text--lg);
  line-height: $leading--none;
  font-weight: $font--bold;
  background-color: $field-bg-color;

  &::placeholder {
    color: $color-white--soft;
  }
}
</style>
