<script setup lang="ts">
import type { BlockDividerStoryblok } from '~/component-types-sb'
import BaseContainer from '~/components/atoms/BaseContainer.vue'

interface Props {
  blok: BlockDividerStoryblok
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
  background-color: $color-devider--regular;
}
</style>
