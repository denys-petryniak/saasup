<script setup lang="ts">
import type { MissionSectionStoryblok } from '~/component-types-sb'

interface Props {
  blok: MissionSectionStoryblok
}

const props = defineProps<Props>()

const getDescription = computed(() =>
  renderRichText(props.blok.description))
</script>

<template>
  <BaseSection
    v-editable="blok"
    class="mission-section"
  >
    <div class="mission-section__body">
      <div class="mission-section__content">
        <h2 class="mission-section__heading">
          {{ blok.heading }}
        </h2>
        <div
          class="mission-section__description"
          v-html="getDescription"
        />
      </div>
      <div v-if="blok.image?.filename" class="mission-section__image-box">
        <NuxtImg
          :src="blok.image.filename"
          :width="1520"
          :height="756"
          :alt="blok.image.alt"
          sizes="100vw md:50vw"
          class="mission-section__image"
        />
      </div>
    </div>
  </BaseSection>
</template>

<style scoped lang="scss">
.mission-section {
  &__body {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: $spacing--4xl;
  }

  &__content {
    flex: 1 1 convert(400px, 'rem');
  }

  &__image-box {
    flex: 1 1 convert(500px, 'rem');
  }

  &__heading {
    margin: 0;
  }

  &__description {
    margin-top: $spacing--4xl;
  }

  &__image {
    border-radius: $rounded--3xl;
    box-shadow: $shadow--regular;
  }
}
</style>
