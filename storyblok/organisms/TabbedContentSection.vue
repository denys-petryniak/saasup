<script setup lang="ts">
import type { TabbedContentSectionStoryblok } from '~/component-types-sb'

interface Props {
  blok: TabbedContentSectionStoryblok
}

defineProps<Props>()

const activeTabIndex = ref(0)

function changeTab(index: number): void {
  activeTabIndex.value = index
}

function getFormattedTabIndex(index: number): string {
  return `0${index + 1}.`
}

function getTabButtonText({ index, text = 'Tab' }: { index: number, text: string | undefined }): string {
  return `${getFormattedTabIndex(index)} ${text}`
}
</script>

<template>
  <BaseSection
    v-editable="blok"
    class="tabbed-content-section"
  >
    <ContentBlock
      v-if="blok.heading"
      :headline="blok.headline"
      :heading="blok.heading"
      :heading-level="blok.heading_level"
      :align="blok.alignment ?? 'center'"
    />
    <div
      v-if="blok.entries?.length"
      class="tabbed-content-section__body"
    >
      <div class="tabbed-content-section__buttons">
        <button
          v-for="(tab, tabIndex) in blok.entries"
          :key="tab.name"
          type="button"
          class="tabbed-content-section__button"
          :class="{ 'tabbed-content-section__button--active': tabIndex === activeTabIndex }"
          @click="changeTab(tabIndex)"
        >
          {{ getTabButtonText({ index: tabIndex, text: tab.name }) }}
        </button>
      </div>
      <KeepAlive>
        <template
          v-for="(tab, tabIndex) in blok.entries"
          :key="tab._uid"
        >
          <TabbedContentEntry
            v-if="tabIndex === activeTabIndex"
            :blok="tab"
          />
        </template>
      </KeepAlive>
    </div>
  </BaseSection>
</template>

<style scoped lang="scss">
.tabbed-content-section {
  &__body {
    margin-top: clamped($min-size: $gap--sm, $max-size: $gap--md);
  }

  &__buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: $spacing--lg;
  }

  &__button {
    max-width: toRem(500px);
    flex: 1 1 toRem(350px);
    padding: clamped($min-size: $spacing--2xl, $max-size: $spacing--4xl)
      clamped($min-size: $spacing--2xl, $max-size: $spacing--8xl);
    border-radius: $rounded--2xl;
    color: $color--secondary--extra-dark;
    background-color: $color--secondary--extra-light;
    text-align: start;
    font-weight: $font--bold;

    @include breakpoint('md') {
      text-align: center;
    }

    &--active {
      background-color: $color-primary--light;
      color: $color-white--regular;
    }
  }
}
</style>
