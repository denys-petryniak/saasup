<script setup lang="ts">
import type { SectionDividerStoryblok } from '~/component-types-sb'
import BaseContainer from '~/components/atoms/BaseContainer.vue'

interface Props {
  blok: SectionDividerStoryblok
}

defineProps<Props>()
</script>

<template>
  <BaseContainer v-editable="blok">
    <hr class="divider">
  </BaseContainer>
</template>

<style scoped lang="scss">
.divider {
  margin: 0;
  border: 0;
  height: 1px;
  background-color: $divider-color--regular;
}
</style>
