<script setup lang="ts">
import type { TabbedContentEntryStoryblok } from '~/component-types-sb'

interface Props {
  blok: TabbedContentEntryStoryblok
}

const props = defineProps<Props>()

const description = computed(() =>
  renderRichText(props.blok.description))
</script>

<template>
  <div
    v-editable="blok"
    class="tabbed-content-entry"
  >
    <div class="tabbed-content-entry__main">
      <!-- TODO: use ContentBlock component here (?) -->
      <div class="tabbed-content-entry__head">
        <img
          v-if="blok.icon?.filename"
          :src="blok.icon.filename"
          :width="116"
          :height="116"
          :alt="blok.icon.alt"
          loading="lazy"
          class="tabbed-content-entry__icon"
        >
        <DynamicHeading
          :as="blok.heading_level ?? 'h3'"
          class="tabbed-content-entry__title"
        >
          {{ blok.heading }}
        </DynamicHeading>
      </div>
      <div v-html="description" />
      <BaseButton
        color="dark"
        class="tabbed-content-entry__button"
      >
        Get Started
      </BaseButton>
    </div>
    <div
      v-if="blok.image?.filename"
      class="tabbed-content-entry__image-box"
    >
      <NuxtImg
        :src="blok.image.filename"
        :width="602"
        :height="339"
        :alt="blok.image.alt"
        sizes="100vw xl:602px"
        loading="lazy"
        class="tabbed-content-entry__image"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.tabbed-content-entry {
  display: flex;
  flex-wrap: wrap;
  gap: $spacing--8xl;
  margin-top: clamped($min-size: $spacing--8xl, $max-size: $spacing--12xl);
  padding: 0 clamped($min-size: $spacing--xs, $max-size: $spacing--12xl);

  &__main {
    flex: 1 1 convert(500px, 'rem');
  }

  &__image-box {
    flex: 1 1 convert(500px, 'rem');
  }

  &__head {
    display: flex;
    flex-wrap: wrap;
    gap: $spacing--2xl;
  }

  &__title {
    margin: 0;
    max-width: convert(500px, 'rem');
    flex: 1 1 convert(350px, 'rem');
  }

  &__button {
    display: block;
    margin-top: $spacing--4xl;
  }

  &__image {
    border-radius: $rounded--2xl * 2;
  }
}
</style>
