<script setup lang="ts">
import type { IntroSectionStoryblok } from '~/component-types-sb'

interface Props {
  blok: IntroSectionStoryblok
}

const props = defineProps<Props>()

const getIntroDescription = computed(() =>
  renderRichText(props.blok.description))
</script>

<template>
  <BaseSection
    v-editable="blok"
    class="intro-section"
  >
    <template #header>
      <h1 class="intro-section__title">
        {{ blok.title }}
      </h1>
      <div
        class="intro-section__description"
        v-html="getIntroDescription"
      />
    </template>
  </BaseSection>
</template>

<style scoped lang="scss">
.intro-section {
  &__title {
    margin-top: 0;
  }

  &__description {
    margin-top: $spacing--2xl;
  }
}
</style>
