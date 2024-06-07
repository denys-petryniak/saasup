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
    <div class="intro-section__body">
      <h1 class="intro-section__title">
        {{ blok.title }}
      </h1>
      <div
        class="intro-section__description"
        v-html="getIntroDescription"
      />
    </div>
  </BaseSection>
</template>

<style scoped lang="scss">
.intro-section {
  &__body {
    text-align: center;
  }

  &__title {
    margin: 0;
  }

  &__description {
    margin-top: $spacing--2xl;
  }
}
</style>
