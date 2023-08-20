<script setup>
const props = defineProps({ blok: Object })

const getDescription = computed(() =>
  renderRichText(props.blok.description),
)
</script>

<template>
  <BaseSection
    v-editable="blok"
  >
    <h1>
      {{ blok.heading }}
    </h1>
    <div
      v-html="getDescription"
    />
  </BaseSection>
</template>
